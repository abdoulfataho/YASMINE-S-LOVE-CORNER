document.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const loginPage = document.getElementById('login-page');
    const visitorName = document.getElementById('visitor-name');
    const loginBtn = document.getElementById('login-btn');
    const poemSection = document.getElementById('poem-section');
    const noteSection = document.getElementById('note-section');
    const thankYouPage = document.getElementById('thank-you-page');
    const returnHomeBtn = document.getElementById('return-home');

    // Initialize state
    let currentUser = '';
    let currentPoemIndex = Math.floor(Math.random() * poems.length);
    let hasVisitedToday = false;

    // Show login page initially, hide others
    function showInitialState() {
        loginPage.classList.remove('hidden');
        poemSection.classList.add('hidden');
        noteSection.classList.add('hidden');
        thankYouPage.classList.add('hidden');
    }

    // Show initial state on load
    showInitialState();

    // Display current date
    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        const currentDate = new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        dateElement.textContent = currentDate;
    }

    // Handle login
    function handleLogin() {
        const name = visitorName.value.trim().toLowerCase();
        currentUser = name;
        
        if (name === 'yasmine') {
            if (hasVisitedToday) {
                showThankYouPage();
            } else {
                loginPage.classList.add('hidden');
                poemSection.classList.remove('hidden');
                displayCurrentPoem();
            }
        } else if (name === 'abdoul') {
            loginPage.classList.add('hidden');
            noteSection.classList.remove('hidden');
        } else {
            alert('Welcome! This is a private poetry corner for Abdoul and Yasmine.');
            visitorName.value = '';
        }
    }

    // Display current poem
    function displayCurrentPoem() {
        const poem = poems[currentPoemIndex];
        const poemContent = document.getElementById('poem-content');
        if (poemContent) {
            poemContent.innerHTML = `
                <h3>${poem.title}</h3>
                <p>${poem.content}</p>
                <div class="poem-feedback">
                    <button id="like-btn">I loved it! ❤️</button>
                    <button id="next-btn">Show me another</button>
                </div>
            `;
        }
    }

    // Show thank you page
    function showThankYouPage() {
        loginPage.classList.add('hidden');
        poemSection.classList.add('hidden');
        noteSection.classList.add('hidden');
        thankYouPage.classList.remove('hidden');
        
        // Update date and time
        const currentDateDisplay = document.getElementById('current-date-display');
        const postTime = document.getElementById('post-time');
        
        if (currentDateDisplay) {
            currentDateDisplay.textContent = new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
        
        if (postTime) {
            postTime.textContent = new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit'
            });
        }

        // Start countdown
        updateCountdown();
        startCountdownInterval();
    }

    // Return to home page
    function returnToHome() {
        showInitialState();
        visitorName.value = '';
        currentUser = '';
        hasVisitedToday = false;
        stopCountdownInterval();
    }

    // Countdown functionality
    let countdownInterval;

    function startCountdownInterval() {
        countdownInterval = setInterval(updateCountdown, 1000);
    }

    function stopCountdownInterval() {
        if (countdownInterval) {
            clearInterval(countdownInterval);
        }
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
        if (countdownTimer) {
            countdownTimer.textContent = `${hours}h ${minutes}m ${seconds}s`;
        }
    }

    // Event Listeners
    loginBtn.addEventListener('click', handleLogin);
    returnHomeBtn.addEventListener('click', returnToHome);

    // Like button handler
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'like-btn') {
            hasVisitedToday = true;
            showThankYouPage();
        }
    });

    // Next button handler
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'next-btn') {
            currentPoemIndex = (currentPoemIndex + 1) % poems.length;
            displayCurrentPoem();
        }
    });
}); 