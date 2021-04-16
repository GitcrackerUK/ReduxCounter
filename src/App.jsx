import Counter from './components/Counter';
import store from './components/store';
import { Provider } from 'react-redux';
import './App.css';

function App() {
    return (
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
