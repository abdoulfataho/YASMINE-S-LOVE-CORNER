document.addEventListener('DOMContentLoaded', () => {
    // ====== DOM ELEMENTS ======
    const loginPage = document.getElementById('login-page');
    const visitorName = document.getElementById('visitor-name');
    const loginBtn = document.getElementById('login-btn');
    const poemSection = document.getElementById('poem-section');
    const conversationSection = document.getElementById('conversation-section');
    const dateElement = document.getElementById('current-date');
    
    // Camera elements
    const cameraFeed = document.getElementById('camera-feed');
    const photoCanvas = document.getElementById('photo-canvas');
    const captureBtn = document.getElementById('capture-btn');
    const switchCameraBtn = document.getElementById('switch-camera');

    // ====== STATE VARIABLES ======
    let currentUser = '';
    let currentPoemIndex = Math.floor(Math.random() * poems.length);
    let capturedImage = null;
    let currentStream = null;

    // Update the conversations array to be empty initially
    let conversations = [];

    // ====== INITIALIZATION ======
    function initialize() {
        displayCurrentDate();
        setupEventListeners();
        setupCameraObserver();
    }

    function displayCurrentDate() {
        if (dateElement) {
            dateElement.textContent = new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    }

    function setupEventListeners() {
        loginBtn.addEventListener('click', handleLogin);
        document.getElementById('next-btn')?.addEventListener('click', showNextPoem);
        document.getElementById('capture-btn')?.addEventListener('click', capturePhoto);
        document.getElementById('post-message-btn')?.addEventListener('click', postMessage);
        document.getElementById('show-poem-btn')?.addEventListener('click', showPoemSection);
        document.getElementById('show-conversation-btn')?.addEventListener('click', showConversationSection);
    }

    // ====== LOGIN FUNCTIONALITY ======
    function handleLogin() {
        const name = visitorName.value.trim().toLowerCase();
        if (!name) {
            alert('Please enter your name');
            return;
        }
        
        currentUser = name;
        
        if (name === 'yasmine') {
            handleYasmineLogin();
        } else if (name === 'abdoul') {
            handleAbdoulLogin();
        } else {
            alert('Welcome! This is a private poetry corner for Abdoul and Yasmine.');
            visitorName.value = '';
        }
    }

    function handleYasmineLogin() {
        loginPage.classList.add('hidden');
        poemSection.classList.remove('hidden');
        document.getElementById('show-conversation-btn').classList.remove('hidden');
        
        // Show message form for Yasmine
        document.querySelector('.message-form').classList.remove('hidden');
        
        displayCurrentPoem();
        fetchConversations();
    }

    function handleAbdoulLogin() {
        loginPage.classList.add('hidden');
        conversationSection.classList.remove('hidden');
        document.getElementById('show-poem-btn').classList.remove('hidden');
        
        // Hide message form for Abdoul
        document.querySelector('.message-form').classList.add('hidden');
        
        fetchConversations();
    }

    // ====== POEM FUNCTIONALITY ======
    function displayCurrentPoem() {
        const poemContent = document.getElementById('poem-content');
        if (poemContent && poems[currentPoemIndex]) {
            poemContent.innerHTML = `
                <h3>${poems[currentPoemIndex].title}</h3>
                <p>${poems[currentPoemIndex].content}</p>
            `;
        }
    }

    function showNextPoem() {
        currentPoemIndex = (currentPoemIndex + 1) % poems.length;
        displayCurrentPoem();
    }

    // ====== CONVERSATION FUNCTIONALITY ======
    // Add function to fetch conversations from API
    async function fetchConversations() {
        try {
            const response = await fetch('http://localhost:3000/api/conversations');
            conversations = await response.json();
            displayConversations();
        } catch (err) {
            console.error('Error fetching conversations:', err);
        }
    }

    // Update postMessage function to restrict to Yasmine only
    async function postMessage() {
        if (currentUser !== 'yasmine') {
            alert('Only Yasmine can post new messages.');
            return;
        }

        const messageText = document.getElementById('message-text').value.trim();
        if (!messageText) {
            alert('Please write a message before posting.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3000/api/messages', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    from: currentUser,
                    text: messageText,
                    image: capturedImage
                })
            });

            if (!response.ok) throw new Error('Failed to post message');
            
            await fetchConversations();
            resetMessageForm();
        } catch (err) {
            console.error('Error posting message:', err);
            alert('Failed to post message. Please try again.');
        }
    }

    // Update postReply function to restrict to Abdoul only
    async function postReply(messageId) {
        if (currentUser !== 'abdoul') {
            alert('Only Abdoul can reply to messages.');
            return;
        }

        const replyText = document.getElementById(`reply-${messageId}`).value.trim();
        if (!replyText) return;

        try {
            const response = await fetch('http://localhost:3000/api/replies', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messageId: messageId,
                    from: currentUser,
                    text: replyText
                })
            });

            if (!response.ok) throw new Error('Failed to post reply');
            
            await fetchConversations();
            document.getElementById(`reply-${messageId}`).value = '';
        } catch (err) {
            console.error('Error posting reply:', err);
            alert('Failed to post reply. Please try again.');
        }
    }

    function displayConversations() {
        const conversationDisplay = document.getElementById('conversation-display');
        conversationDisplay.innerHTML = conversations.map(message => `
            <div class="message-card ${message.from_user === currentUser ? 'my-message' : ''}">
                <div class="message-header">
                    <strong>${message.from_user === 'yasmine' ? '🌸 Yasmine' : '👋 Abdoul'}</strong>
                    <small>${new Date(message.timestamp).toLocaleString()}</small>
                </div>
                ${message.image_data ? `<img src="${message.image_data}" alt="Shared photo">` : ''}
                <p>${message.message_text}</p>
                
                <div class="replies">
                    ${message.replies.map(reply => `
                        <div class="reply ${reply.from === currentUser ? 'my-reply' : ''}">
                            <small>${reply.from === 'yasmine' ? '🌸' : '👋'} ${new Date(reply.timestamp).toLocaleString()}</small>
                            <p>${reply.text}</p>
                        </div>
                    `).join('')}
                </div>

                ${currentUser === 'abdoul' ? `
                    <div class="reply-form">
                        <input type="text" id="reply-${message.id}" placeholder="Write a reply...">
                        <button onclick="postReply(${message.id})">Reply</button>
                    </div>
                ` : ''}
            </div>
        `).join('');
    }

    // ====== NAVIGATION ======
    function showPoemSection() {
        conversationSection.classList.add('hidden');
        poemSection.classList.remove('hidden');
        displayCurrentPoem();
    }

    function showConversationSection() {
        poemSection.classList.add('hidden');
        conversationSection.classList.remove('hidden');
        displayConversations();
    }

    // ====== CAMERA FUNCTIONALITY ======
    async function initializeCamera() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ 
                video: { facingMode: 'user' }, 
                audio: false 
            });
            currentStream = stream;
            cameraFeed.srcObject = stream;
            document.getElementById('camera-controls').classList.remove('hidden');
        } catch (err) {
            console.error('Camera error:', err);
            document.getElementById('camera-container').innerHTML = 
                '<p>Unable to access camera. Please check permissions.</p>';
        }
    }

    function capturePhoto() {
        const context = photoCanvas.getContext('2d');
        photoCanvas.width = cameraFeed.videoWidth;
        photoCanvas.height = cameraFeed.videoHeight;
        context.drawImage(cameraFeed, 0, 0);
        capturedImage = photoCanvas.toDataURL('image/png');
        
        photoCanvas.classList.remove('hidden');
        cameraFeed.classList.add('hidden');
        captureBtn.textContent = 'Retake Photo';
    }

    function resetMessageForm() {
        document.getElementById('message-text').value = '';
        capturedImage = null;
        photoCanvas.classList.add('hidden');
        cameraFeed.classList.remove('hidden');
        captureBtn.textContent = 'Take Photo';
    }

    // Start the application
    initialize();
});
