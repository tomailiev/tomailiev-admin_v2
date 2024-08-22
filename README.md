# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `steps to add admin to your own firebase db`

- create new app via create-react-app
- initiate git repo
- add firebase to the project
    - register new app via online GUI
    - install firebase via shell
    - initialize firebase under src/utils/firebase/firebase-init.js
- install dependencies
    - npm install @mui/icons-material @mui/material @mui/x-data-grid mui-file-input react-router-dom react-youtube yup
- prepare dev env
    - install dev dependencies: npm install cross-env --save-dev
    - set up emulation script in package.json: "emulate": "cross-env REACT_APP_EMULATORS=1 react-scripts start"
- commit your changes!