# Dev Connector

A social resume platform for developers. Create your portofolio by adding experience, education, skills or any important information of your career and post your comments or thoughts for other users.

This is a MERN based full stack real world bootstrapping application that can speed up your development. It uses the popular MongoDB database with Mongoose schemas, the backend web framework Express.js, the frontend library React.js that ws created by Facebook and Node.js. Authentication via Json Web Tokens is used with the Passport middleware and customizable linting is built in using eslint.

Visit it at: <a href="https://thedevconnector.herokuapp.com" target="_blank"> https://thedevconnector.herokuapp.com</a>

## Screenshots

<h3>Home Page</h3>
<img src="github-screenshots/homepage.png">

<br>
<h3>Profile Dashboard</h3>
<img src="github-screenshots/dashboard.png">

<br>
<h3>Users Profiles</h3>
<img src="github-screenshots/developers.png">

<br>
<h3>Post Feed</h3>
<img src="github-screenshots/post-feed.png">

---
<br>

## Quick Start

```bash
# clone repository
https://github.com/Theofilos-Chamalis/DevConnector.git

# Install dependencies
cd devConnector && npm run install-all

# Enter your development & production MongoDB URI & JWT key
Directory: config/
```

To run the development server on both backend and frontend:

```bash
# The development server runs on port 3000
npm run dev
```

To run only the backend

```bash
# The backend server runs on port 5000
npm run backend
```

To run only the frontend client
```
# The frontend client runs on port 3000
npm run client
```

To lint the whole project with eslint
```
# You can also change the eslint rules stored in.eslintrc
npm run lint
```

## Technologies Used

### Client Side

- [x] **[React](https://github.com/facebook/react)**
- [x] **[Redux](https://github.com/reactjs/redux)**
- [x] **[Twitter Bootstap 4](https://github.com/twbs/bootstrap/tree/v4-dev)**
- [x] **[React-Router-DOM](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**

#### Libraries used in Client-side

- [x] **[axios](https://github.com/axios/axios)**
- [x] **[classnames](https://github.com/JedWatson/classnames)**
- [x] **[react-moment](https://github.com/headzoo/react-moment)**
- [x] **[react-redux](https://github.com/reduxjs/react-redux)**
- [x] **[redux-thunk](https://github.com/reduxjs/redux-thunk)**
- [x] **[validator](https://github.com/chriso/validator.js)**

### Server Side

- [x] **[Node.js / Express](https://github.com/expressjs/express)**
- [x] **[MongoDB](https://github.com/mongodb/mongo)**
- [x] **[JWT](https://github.com/auth0/node-jsonwebtoken)**
- [x] **[Passport](http://www.passportjs.org/)**
- [x] **[Passport-jwt](https://github.com/themikenicholson/passport-jwt)**

#### Libraries used in Server-side

- [x] **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)**
- [x] **[bluebird](http://bluebirdjs.com/docs/getting-started.html)**
- [x] **[gravatar](https://github.com/emerleite/node-gravatar)**
- [x] **[mongoose](http://mongoosejs.com/)**
- [x] **[jwt-decode](https://github.com/auth0/jwt-decode)**
- [x] **[moment](https://momentjs.com/)**
- [x] **[validator](https://github.com/chriso/validator.js)**
