import React, {
    
    Component
} from 'react';

import { connect } from 'react-redux';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);

        this.decrement = this.decrement.bind(this);
    }
    increment = () => {
        console.log('increment');
    };
    decrement = () => {
        console.log('decrement');
    };

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>&ndash;</button>
                    <span>{this.props.counter}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    counter: state.counter, // key is passing  data to the props and value is getting value from a redux store
});

export default connect(mapStateToProps)(Counter);
