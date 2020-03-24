This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Packages Used:

1. react-google-login

- A Google oAUth Sign-in / Log-in Component for React

`npm install react-google-login`

2. gh-pages

- Publish files to a gh-pages branch on GitHub (or any other branch anywhere else).

`npm install gh-pages --save-dev`

Notes for Integrating Google Login to React project using 'react-google-login'

1. Before installing 'react-google-login', create clientId in Google's Developer API Console
2. In Google Developer API Console, Create New Project
   - name new project identical (or similar) to project name
   - clientId will be provided after new project is created
   - save clientId info for later
3. Enable APIS and Services
   - Search for CloudOS Login API
   - Enable
4. Credentials
   - Configure clientId by clicking on pencil icon
   - Add localhost:3000 and/or server location (in this case, my github gh-pages branch) to URL; save
5. Oauth consent Screen (once project is deployed online)
   - Edit App
   - Add domain name location to Authorized domains
   - Add complete URL of project to Application Homepage link

If the following steps above are not followed, Google Login button will remain disabled both locally and online.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
