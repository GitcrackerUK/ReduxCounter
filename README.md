### Redux 2

List of steps to get redux working.

-   install redux and react-redux
-   import 'connect' from react-redux and add to export like so\
    '''
    export default connect()(Component to connect and export )
    '''

-   add method '''const mapStateToProps = (state) => ({});''' and add it to connect

    '''
    const mapStateToProps = (state) => ({});
    export default connect(mapStateToProps)(Component)
    '''
