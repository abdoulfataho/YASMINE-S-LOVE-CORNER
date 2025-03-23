const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

// Enable CORS with specific options
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

// Increase payload limit
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

// Add error handling to database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'mychat',
    port: 3306
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database');
    
    // Add error handling to table creation
    const createTables = `
        CREATE TABLE IF NOT EXISTS messages (
            id INT AUTO_INCREMENT PRIMARY KEY,
            from_user VARCHAR(50) NOT NULL,
            message_text TEXT NOT NULL,
            image_data LONGTEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS replies (
            id INT AUTO_INCREMENT PRIMARY KEY,
            message_id INT,
            from_user VARCHAR(50) NOT NULL,
            reply_text TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (message_id) REFERENCES messages(id)
        );
    `;

    db.query(createTables, (err) => {
        if (err) {
            console.error('Error creating tables:', err);
            return;
        }
        console.log('Database tables ready');
    });
});

// Add logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`, req.body);
    next();
});

// Update message posting endpoint with better error handling
app.post('/api/messages', (req, res) => {
    console.log('Received message post request:', req.body);
    
    const { from, text, image } = req.body;
    
    if (from !== 'yasmine') {
        console.log('Unauthorized message post attempt from:', from);
        res.status(403).json({ error: 'Only Yasmine can post new messages' });
        return;
    }

    const query = 'INSERT INTO messages (from_user, message_text, image_data) VALUES (?, ?, ?)';
    
    db.query(query, [from, text, image], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ error: err.message });
            return;
        }
        console.log('Message posted successfully:', result);
        res.json({ id: result.insertId });
    });
});

// Update replies endpoint with better error handling
app.post('/api/replies', (req, res) => {
    console.log('Received reply post request:', req.body);
    
    const { messageId, from, text } = req.body;
    
    if (from !== 'abdoul') {
        console.log('Unauthorized reply attempt from:', from);
        res.status(403).json({ error: 'Only Abdoul can post replies' });
        return;
    }

    const query = 'INSERT INTO replies (message_id, from_user, reply_text) VALUES (?, ?, ?)';
    
    db.query(query, [messageId, from, text], (err, result) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ error: err.message });
            return;
        }
        console.log('Reply posted successfully:', result);
        res.json({ id: result.insertId });
    });
});

// Update get conversations endpoint with error handling
app.get('/api/conversations', (req, res) => {
    console.log('Fetching conversations');
    
    const query = `
        SELECT 
            m.*, 
            GROUP_CONCAT(
                JSON_OBJECT(
                    'id', r.id,
                    'from', r.from_user,
                    'text', r.reply_text,
                    'timestamp', r.timestamp
                )
            ) as replies
        FROM messages m
        LEFT JOIN replies r ON m.id = r.message_id
        GROUP BY m.id
        ORDER BY m.timestamp DESC
    `;
    
    db.query(query, (err, results) => {
        if (err) {
            console.error('Database error:', err);
            res.status(500).json({ error: err.message });
            return;
        }
        
        try {
            const conversations = results.map(row => ({
                ...row,
                replies: row.replies ? JSON.parse(`[${row.replies}]`) : []
            }));
            console.log('Conversations fetched successfully');
            res.json(conversations);
        } catch (error) {
            console.error('Error parsing conversations:', error);
            res.status(500).json({ error: 'Error processing conversations' });
        }
    });
});

// Add error handling middleware
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({ error: 'Internal server error' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 