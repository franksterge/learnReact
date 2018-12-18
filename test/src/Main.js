import React, {Component} from 'react';

class Main extends Component {
    constructor() {
        super();
        this.state = {
            sayHello: "Hello",
            count: ["1", "2", "3"]
        }
    }

    render() {
        let greeting = this.props.hello;
        console.log(greeting)
        return (
            <React.Fragment>
                <h1>{greeting}</h1>
                {
                    
                }
            </React.Fragment>
        )
    }
}