import Counter from './components/Counter';  // imports component 
import { store } from './components/store';  // import store 
import { Provider } from 'react-redux'; // imports provider to connect store to App 
import './App.css';

function App() {
    return (
        // Provider needs be implemented in order to connect App to the store. Provider need be wrapped around App.
        <Provider store={store}>  
            <div className='App'>
                <header className='App-header'>
                    <h1>Redux</h1>
                </header>
                <Counter></Counter>
            </div>
        </Provider>
    );
}

export default App;
