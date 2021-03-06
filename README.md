This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# restaurante-seach #

## Dev Steps ##

1. Sidebar Part 1 
  - Project cloned from [Patrick Narciso](https://github.com/patrick-narciso/restaurants-search.git), branch boilerplate (git checkout boilerplate)
  - Styled Components installed
  - Theme.js created with global style variables
  - Created ./pages/Home/index.jsx and changed App.js to reference the new Home page

2. Sidebar Part 2
  - Theme variables applied to Home page
  - Styled-reset installed
  - Sidebar divided from the page inside Home/index.jsx

3. Sidebar Part 3
  - Search component created and added to sidebar in home page, using React-Text-Field

4. Carousel Part 1
  - Changed logo size
  - Added search icon with Material-React-Icon
  - Added Wrapper and Map placeholder

5. Carousel Part 2
  - Roboto font installed
  - Carousel created with React-Slicker and placeholder slides

6. Carousel Part 3
  - Slide component created with styled div and background-image

7. Carousel Finishing
  - Slide customizing

8. Developing Components Parts 1,2 and 3
  - Developing restaurant cards

9. Developing Components Parts 4 and 5
  - Developing Modal with portals in react
  - Developing an Overlay with a Dialog box

10. Integrating with Google Maps
  - Maps component created using Google-Maps-React
  - Functions for dealing with restaurant search near the map center
  - Function searchByQuery for dealing with search by text input by the user

11. Redux Introductions
  - Redux and React-redux libraries installed
  - Creation of files and folders for redux, store, reducers and modules
  - Encapsulation of App.js template with a Provider for redux, with store as a prop
  - Actions creation on modules/restaurants
  - Setting restaurants as a global status

12. Markers in Map and Restaurant Images
  - Include markers for every restaurant found
  - Integrate Map with Search via global states of redux
  - Restaurants in Carousel and in Cards on the aside section
  
13. Restaurant details on click
  - Improvements in carousel
  - Open modal when click over restaurant card in sidebar
  - Populate modal with the selected restaurant details
  - Correct bugs in redux selectedRestaurant state
  - Styled-components for modal elements

14. Transitions 
  - Instalation of React-lottie
  - Loader component created
  - Empty cache-like redux states before dispatching a new async request
  - Skeleton component created to ease transitions
  - Skeleton added to images and to restaurant details on popup

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

**Note: this is a one-way operation. Once you `eject`, you can???t go back!**

If you aren???t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you???re on your own.

You don???t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn???t feel obligated to use this feature. However we understand that this tool wouldn???t be useful if you couldn???t customize it when you are ready for it.

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
