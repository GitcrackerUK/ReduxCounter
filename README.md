### Redux 2

List of steps to get redux working.

-   install redux and react-redux
-   import 'connect' from react-redux and add to export like so

    ```
    export default connect()(Component to connect and export )
    ```

-   add method to get data from store and pass into component
    `const mapStateToProps = (state) => ({});`
    and add it to connect.

    ```
    const mapStateToProps = (state) => ({});
    export default connect(mapStateToProps)(Component)
    ```

-   populate mapStateToProps with data from store
-   create file 'store' in components folder
-   in store file import `createStore` and create store

```
const store = createStore()
```
