This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
<br>
To serve this locally, first install [NodeJs](https://github.com/nodejs/node) and NPM
then run `npm install` under root directory.
<br>
After install finishes, run `npm start` to start this project on `localhost:3000`
<br>
To deploy to the github page branch, simply run `npm run build` under the branch you want to build.
<br>
This app is powered by react + redux, and styling comes from a free [bootstrap template](https://bootstrapmade.com/demo/NiceAdmin/).
Everything you see in this page are react components. 
<br>
Redux is the state manager in this app. when an event is triggered, an action will be dispatched. Reducer will take the dispatched action and change the state of app.
<br>
I used async action provided by redux-thunk to handle ajax request and get data as json from smarket api. Those data are processed and saved into state in Reducers, and using the redux api, react components can get those updated state and use states to render tables and buttons you see in the page.
