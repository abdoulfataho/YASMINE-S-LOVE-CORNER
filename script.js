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
            loginPage.classList.add('hidden');
            landingPage.classList.remove('hidden');
        } else if (name === 'abdoul') {
            loginPage.classList.add('hidden');
            showStoredNotes();
        } else {
            alert('Welcome! This is a private poetry corner for Abdoul and Yasmine.');
            visitorName.value = '';
        }
    }

    function showStoredNotes() {
        notesDisplay.classList.remove('hidden');
        noteSection.classList.remove('hidden');
        displayNotes();
    }

    function postNote() {
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
        
        displayNotes();
        resetNoteForm();
        stopCamera();
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
}); 