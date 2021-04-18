### Redux 2

List of steps to get redux working.

-   install redux and react-redux
- create store.js file in components folder
- import createStore as named import from ```redux```
```
import {createStore} from 'redux'
```
- create and export store 
```
-export const store = createStore();
```  
- import ```rootReducer``` and pass it as parameter to ```createStore(rootReducer)```
```
import rootReducer from './reducers/index';

export const store = createStore(rootReducer);
```
- create folder ```reducers``` and inside reducers folder create ```index.js```
- inside ```reducers/index.js``` create ``` const initialState``` and function `reducer` Pass as parameter `initialState` default value of `store`
```
const initialState = {};

export default function reducer(state = initialState, actions) {
    return {
        ...state,
        counter: 42,
    };
}
```
Use spread operator to get previous state like so `...state`

- Inside component  import 'connect' from react-redux and add  as ```default export``` like so
    ```
    export default connect()(Component to connect and export )
    ```
-   add method to get data from store and pass into component
    `const mapStateToProps = (state) => ({});`
- add `mapStateToProps` to `connect`
    ```
    const mapStateToProps = (state) => ({});
    export default connect(mapStateToProps)(Component)
    ```
-   populate mapStateToProps with data from a store
```
const mapStateToProps = (state)=>({
    counter:state.storeCounter,
    someData:storeSomeData
})
```
