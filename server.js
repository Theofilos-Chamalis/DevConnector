const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// Body parser middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());

// DB Config
const db = require('./config/keys').mongoURI;

mongoose.set('strictQuery', false);

// Connect to MongoDB
mongoose
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(`MongoDB Connection Error: ${err}`));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    // Load the React index.html built file
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5001;

app.listen(port, () => console.log(`Server running on port ${port}`));
