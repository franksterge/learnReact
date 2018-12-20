import React, {Component} from 'react';
export class Main extends Component {
    constructor() {
        super();
        this.state = {
            sayHello: "Hello",
            count: ["1", "2", "3"]
        }
    }

    render() {
        let greeting = this.props.hello;
        // console.log(greeting)
        return (
            <React.Fragment>
                <h1 id="greeting-title">{greeting}</h1>
                
                <input placeholder="type greeting string" id="title-input"></input>
                <button onClick={(event) => {
                    document.getElementById("greeting-title").innerText = document.getElementById("title-input").value;
                }}>Submit</button>
            </React.Fragment>
        );
    }
}

