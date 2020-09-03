1. Get Create React App here: https://create-react-app.dev/docs/getting-started (I used it to set up the project folder structure, but it also has some behind the scenes packages that should be still necessary.)
2. Ensure you have yarn. It should already be installed because of the app, but just in case run 'yarn --version' in the terminal.
3. The two main directories we are concerned with are public and src. Public has index.html, which is the entry point for the code. However, right now we don't need to edit index.html. Src has App.js, which is conceptually very similar to App.js in react native. It's like the root of all the javascript, and App.js is rendered in public/index.html (this is what src/index.js does). 
4. Inside src, I made a components directory (similar to the react native one) which houses a few of the components I've made so far. If you pick one to look at, you'll notice they're almost identical to react native components, but instead of using react native's default components (like Text and View), we use html elements (like div and h1). These are not true html tags since it's a javascript file, but for the most part, you can treat them as such.
5. Making a component is very similar to react native. The same rules apply to functional and class components in react as react native. If you make a component, import it into the file in which it will be used. 
6. If you're curious about the Router, check this site out: https://reactrouter.com/web/guides/quick-start (React Router is analogous to React Navigation in our app, but here it's working with HTML)
7. If you run 'yarn start' while in the project, it opens up the browser and navigates to localhost similar to flask. This will be how you view the website while coding (i.e instead of expo, you'll check this).
8. Side Note - on the contact us page, if you submit, it gives an error because there's no way to submit an HTTP POST right now. This is just a heads up and it doesn't break anything else.



# From the auto-generated readme.md

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
