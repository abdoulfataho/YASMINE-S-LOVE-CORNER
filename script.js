document.addEventListener('DOMContentLoaded', () => {
    // Display current date
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    dateElement.textContent = currentDate;

    // Get DOM elements
    const loginPage = document.getElementById('login-page');
    const visitorName = document.getElementById('visitor-name');
    const loginBtn = document.getElementById('login-btn');
    const landingPage = document.getElementById('landing-page');
    const poemSection = document.getElementById('poem-section');
    const noteSection = document.getElementById('note-section');
    const moodBtn = document.getElementById('mood-btn');
    const likeBtn = document.getElementById('like-btn');
    const nextBtn = document.getElementById('next-btn');
    const poemContent = document.getElementById('poem-content');
    const captureBtn = document.getElementById('capture-btn');
    const writtenNote = document.getElementById('written-note');
    const postNoteBtn = document.getElementById('post-note-btn');
    const cameraFeed = document.getElementById('camera-feed');
    const photoCanvas = document.getElementById('photo-canvas');
    const notesDisplay = document.getElementById('notes-display');

    let currentPoemIndex = Math.floor(Math.random() * poems.length);
    let stream = null;
    let currentUser = '';
    let capturedImage = null;

    // Initialize stored notes or create empty array
    let storedNotes = JSON.parse(localStorage.getItem('poetryNotes')) || [];

    loginBtn.addEventListener('click', handleLogin);
    moodBtn.addEventListener('click', showPoem);
    likeBtn.addEventListener('click', showCamera);
    nextBtn.addEventListener('click', showNextPoem);
    captureBtn.addEventListener('click', () => {
        if (photoCanvas.classList.contains('hidden')) {
            captureNote();
        } else {
            retakePhoto();
        }
    });
    postNoteBtn.addEventListener('click', postNote);

    function handleLogin() {
        const name = visitorName.value.trim().toLowerCase();
        currentUser = name;
        
        if (name === 'yasmine') {
            if (hasPostedToday()) {
                showThankYouPage();
            } else {
                loginPage.classList.add('hidden');
                currentPoemIndex = getTodaysPoemIndex();
                poemSection.classList.remove('hidden');
                displayCurrentPoem();
            }
        } else if (name === 'abdoul') {
            loginPage.classList.add('hidden');
            showAbdoulDashboard();
        } else {
            alert('Welcome! This is a private poetry corner for Abdoul and Yasmine.');
            visitorName.value = '';
        }
    }

    function showAbdoulDashboard() {
        noteSection.innerHTML = `
            <h2>Leave a Note for Yasmine</h2>
            <div class="abdoul-dashboard">
                <div class="note-input">
                    <textarea id="written-note" placeholder="Write a special note for Yasmine..."></textarea>
                    <button id="post-abdoul-note">Send Note</button>
                </div>
                <div class="previous-notes">
                    <h3>Previous Notes</h3>
                    <div id="abdoul-notes-history"></div>
                </div>
            </div>
        `;
        
        noteSection.classList.remove('hidden');
        
        // Add event listener for the new note button
        document.getElementById('post-abdoul-note').addEventListener('click', handleAbdoulNote);
        
        // Display previous notes
        displayAbdoulNotes();
    }

    function displayAbdoulNotes() {
        const abdoulNotes = JSON.parse(localStorage.getItem('abdoulNotes') || '[]');
        const historyContainer = document.getElementById('abdoul-notes-history');
        
        historyContainer.innerHTML = abdoulNotes.reverse().map(note => `
            <div class="note-card">
                <p>${note.text}</p>
                <span class="note-time">${new Date(note.timestamp).toLocaleString()}</span>
            </div>
        `).join('');
    }

    function showThankYouPage() {
        const thankYouPage = document.getElementById('thank-you-page');
        const currentDateDisplay = document.getElementById('current-date-display');
        const postTime = document.getElementById('post-time');
        const countdownTimer = document.getElementById('countdown-timer');
        const abdoulMessageDisplay = document.getElementById('abdoul-message');
        
        // Hide all other sections
        loginPage.classList.add('hidden');
        poemSection.classList.add('hidden');
        noteSection.classList.add('hidden');
        
        // Show thank you page
        thankYouPage.classList.remove('hidden');
        
        // Add return home button functionality
        addReturnHomeButton();
        
        // Set current date and time
        currentDateDisplay.textContent = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        postTime.textContent = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        // Display Abdoul's latest note if it exists
        const abdoulNote = getLatestAbdoulNote();
        if (abdoulNote) {
            abdoulMessageDisplay.innerHTML = `
                <div class="abdoul-note">
                    <h3>A Note from Abdoul</h3>
                    <p>${abdoulNote.text}</p>
                    <span class="note-time">${new Date(abdoulNote.timestamp).toLocaleTimeString()}</span>
                </div>
            `;
            abdoulMessageDisplay.classList.remove('hidden');
        }
        
        // Update countdown every second
        updateCountdown();
        const countdownInterval = setInterval(updateCountdown, 1000);

        // Store countdown interval for cleanup
        window.countdownInterval = countdownInterval;
    }

    function updateCountdown() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const timeLeft = tomorrow - now;
        
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        const countdownTimer = document.getElementById('countdown-timer');
        
        // Format numbers to always show two digits
        const formatNumber = (num) => String(num).padStart(2, '0');
        
        countdownTimer.innerHTML = `
            <div class="countdown-container">
                <div class="countdown-block">
                    <span class="countdown-number">${formatNumber(hours)}</span>
                    <span class="countdown-label">hours</span>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-block">
                    <span class="countdown-number">${formatNumber(minutes)}</span>
                    <span class="countdown-label">minutes</span>
                </div>
                <div class="countdown-separator">:</div>
                <div class="countdown-block">
                    <span class="countdown-number">${formatNumber(seconds)}</span>
                    <span class="countdown-label">seconds</span>
                </div>
            </div>
        `;

        // If we reach the next day, reload the page
        if (timeLeft <= 0) {
            window.location.reload();
        }
    }

    function postNote() {
        if (hasPostedToday()) {
            alert("You've already shared your thoughts for today!");
            return;
        }

        if (!capturedImage || !writtenNote.value.trim()) {
            alert('Please capture a photo and write a note before posting.');
            return;
        }

        const newNote = {
            author: currentUser,
            image: capturedImage,
            text: writtenNote.value.trim(),
            timestamp: new Date().toISOString(),
            poemIndex: currentPoemIndex
        };

        storedNotes.push(newNote);
        localStorage.setItem('poetryNotes', JSON.stringify(storedNotes));
        
        stopCamera();
        showThankYouPage(); // Show the thank you page instead of the previous alert
    }

    function displayNotes() {
        notesDisplay.innerHTML = '';
        const relevantNotes = currentUser === 'abdoul' 
            ? storedNotes.filter(note => note.author === 'yasmine')
            : storedNotes.filter(note => note.author === currentUser);

        relevantNotes.forEach(note => {
            const noteCard = document.createElement('div');
            noteCard.className = 'note-card';
            noteCard.innerHTML = `
                <img src="${note.image}" alt="Captured moment">
                <p>${note.text}</p>
                <div class="note-timestamp">
                    ${new Date(note.timestamp).toLocaleString()}
                </div>
                <div class="poem-reference">
                    <h4>${poems[note.poemIndex].title}</h4>
                    <p>${poems[note.poemIndex].content}</p>
                </div>
            `;
            notesDisplay.appendChild(noteCard);
        });
    }

    function resetNoteForm() {
        capturedImage = null;
        writtenNote.value = '';
        photoCanvas.classList.add('hidden');
        cameraFeed.classList.remove('hidden');
        captureBtn.textContent = 'Capture Photo';
        document.getElementById('save-photo').classList.add('hidden');
        stopCamera();
    }

    function showPoem() {
        landingPage.classList.add('hidden');
        poemSection.classList.remove('hidden');
        displayCurrentPoem();
    }

    function displayCurrentPoem() {
        const poem = poems[currentPoemIndex];
        poemContent.innerHTML = `
            <h3>${poem.title}</h3>
            <p>${poem.content}</p>
        `;
    }

    function showNextPoem() {
        currentPoemIndex = (currentPoemIndex + 1) % poems.length;
        displayCurrentPoem();
    }

    function showCamera() {
        poemSection.classList.add('hidden');
        noteSection.classList.remove('hidden');
        initCamera();
    }

    async function initCamera() {
        try {
            // Request camera access with preferred settings
            stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: 'user', // Use front camera by default
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: false
            });

            // Set up video stream
            cameraFeed.srcObject = stream;
            await cameraFeed.play(); // Ensure video is playing
            
            // Show camera controls
            document.getElementById('camera-controls').classList.remove('hidden');
            
        } catch (err) {
            console.error('Error accessing camera:', err);
            alert('Unable to access camera. Please make sure you have granted camera permissions.');
        }
    }

    async function captureNote() {
        try {
            const context = photoCanvas.getContext('2d');
            
            // Set canvas size to match video feed
            photoCanvas.width = cameraFeed.videoWidth;
            photoCanvas.height = cameraFeed.videoHeight;
            
            // Draw current video frame to canvas
            context.drawImage(cameraFeed, 0, 0);
            
            // Convert canvas to image data
            capturedImage = photoCanvas.toDataURL('image/png');
            
            // Show captured image and hide video feed
            photoCanvas.classList.remove('hidden');
            cameraFeed.classList.add('hidden');
            
            // Update button states
            captureBtn.textContent = 'Retake Photo';
            document.getElementById('save-photo').classList.remove('hidden');
            
        } catch (err) {
            console.error('Error capturing photo:', err);
            alert('Failed to capture photo. Please try again.');
        }
    }

    function retakePhoto() {
        // Hide canvas and show video feed again
        photoCanvas.classList.add('hidden');
        cameraFeed.classList.remove('hidden');
        
        // Reset capture button
        captureBtn.textContent = 'Capture Photo';
        document.getElementById('save-photo').classList.add('hidden');
    }

    function stopCamera() {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            stream = null;
        }
    }

    document.getElementById('switch-camera').addEventListener('click', async () => {
        if (stream) {
            // Stop current stream
            stopCamera();
            
            // Toggle between front and back cameras
            const currentFacingMode = stream.getVideoTracks()[0].getSettings().facingMode;
            const newFacingMode = currentFacingMode === 'user' ? 'environment' : 'user';
            
            // Start new stream with different camera
            stream = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: newFacingMode,
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: false
            });
            
            cameraFeed.srcObject = stream;
        }
    });

    // Clean up when leaving the page
    window.addEventListener('beforeunload', stopCamera);

    function handleAbdoulNote() {
        const abdoulNote = {
            author: 'abdoul',
            text: writtenNote.value.trim(),
            timestamp: new Date().toISOString(),
        };

        const abdoulNotes = JSON.parse(localStorage.getItem('abdoulNotes') || '[]');
        abdoulNotes.push(abdoulNote);
        localStorage.setItem('abdoulNotes', JSON.stringify(abdoulNotes));
        
        alert('Your note has been saved for Yasmine to see!');
        writtenNote.value = '';
    }

    function getLatestAbdoulNote() {
        const abdoulNotes = JSON.parse(localStorage.getItem('abdoulNotes') || '[]');
        return abdoulNotes[abdoulNotes.length - 1];
    }

    function addReturnHomeButton() {
        const returnButton = document.getElementById('return-home');
        if (!returnButton) return; // Safety check

        // Remove any existing listeners to prevent duplicates
        returnButton.replaceWith(returnButton.cloneNode(true));
        
        // Get the fresh reference after replacement
        const newReturnButton = document.getElementById('return-home');
        
        newReturnButton.addEventListener('click', returnToHome);
    }

    // Separate function for returning home
    function returnToHome() {
        // Clear any existing intervals
        if (window.countdownInterval) {
            clearInterval(window.countdownInterval);
        }

        // Reset all sections
        const allSections = [
            'thank-you-page',
            'poem-section',
            'note-section'
        ];
        
        allSections.forEach(sectionId => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add('hidden');
            }
        });

        // Show login page and reset input
        const loginPage = document.getElementById('login-page');
        const visitorName = document.getElementById('visitor-name');
        
        loginPage.classList.remove('hidden');
        visitorName.value = '';

        // Reset any stored current user
        currentUser = '';
    }
}); 