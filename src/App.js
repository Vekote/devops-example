import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="Title"> Welcome! </h1>
                    <h6 className="Title">This is DevOps.</h6>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Click the links below:
                    </p>
                    <ul className="Link-list">
                        <li>
                            <a
                                className="App-link"
                                href="https://google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Google
                            </a>
                        </li>
                        <li>
                            <a
                                className="App-link"
                                href="https://stackoverflow.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Stack Overflow
                            </a>
                        </li>
                        <li>
                            <a
                                className="App-link"
                                href="https://www.wikipedia.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Wikipedia
                            </a>
                        </li>
                        <li>
                            <a
                                className="App-link"
                                href="https://www.facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Facebook
                            </a>
                        </li>
                    </ul>

                </header>
            </div>
        );
    }
}

export default App;
