import React, {Component} from 'react';
import './App.css';

import chooseRndParagraph from './paragraphs';

import InputField from './Components/InputField';
import Statistics from './Components/Statistics';
import TextWall from './Components/TextWall';

class App extends Component {
    constructor(props) {
        super(props);

        const paragraph = chooseRndParagraph();

        this.state = {
            inGame: 0,
            paragraph: paragraph,
            paragraphParsed: null,
            currentWord: 0,
            trackAnsweredWords: [],
            startTime: null,
            stopTime: null,
        };

        this.appendCurrentWord = this.appendCurrentWord.bind(this);
        this.handleSolveOneWord = this.handleSolveOneWord.bind(this);
        this.checkForGoal = this.checkForGoal.bind(this);
        this.handleStartGame = this.handleStartGame.bind(this);
    }

    handleStartGame() {
        this.setState({inGame: 1});
        let currentTime = 5;

        function timedEvent() {
            if (currentTime >= 0) {
                document.querySelectorAll('.countdown-text').forEach((element) => {
                    if (element.id === 'countdown-' + currentTime) {
                        element.classList.add('counter-text-active');
                    } else {
                        element.classList.remove('counter-text-active');
                    }
                });
                currentTime--;
            } else if (currentTime < 0) {
                this.setState({
                    inGame: 2,
                    startTime: Date.now(),
                });
            }
        }
        window.setTimeout(timedEvent, 500);
        window.setTimeout(timedEvent, 1500);
        window.setTimeout(timedEvent, 2500);
        window.setTimeout(timedEvent, 3500);
        window.setTimeout(timedEvent, 4500);
        window.setTimeout(timedEvent, 5500);
        window.setTimeout(timedEvent.bind(this), 6500);
    }

    handleRestartGame() {
        location.reload();
    }

    componentWillMount() {
        this.setState({
            paragraphParsed: this.state.paragraph[0].match(/[^\s]+\s*/g),
        });
    }

    componentDidMount() {
        let trackFinished = [];
        for (let i = 0; i < this.state.paragraphParsed.length; i++) {
            trackFinished.push(false);
        }
        this.setState({trackAnsweredWords: trackFinished});
    }

    componentDidUpdate() {
        if (document.querySelector('#gameInputField')) {
            document.querySelector('#gameInputField').focus();
        }
    }

    appendCurrentWord() {
        const nextWord = this.state.currentWord + 1;
        this.setState({currentWord: nextWord});
    }

    handleSolveOneWord(wordID) {
        document.querySelector('#word' + wordID).classList.add('finished-word');
        document.querySelector('#gameInputField').value = '';
        const placeholderArray = this.state.trackAnsweredWords;
        placeholderArray[wordID] = true;
        this.setState({trackAnsweredWords: placeholderArray});
    }

    checkForGoal() {
        const isTrue = (element) => (element === true);
        if (this.state.trackAnsweredWords.every(isTrue)) {
            this.setState({
                stopTime: Date.now(),
            });
            document.querySelector('#gameInputField').setAttribute('disabled', '');
            document.querySelector('#restart-button').classList.remove('restart-button-inactive');
            document.querySelector('#restart-button').classList.add('restart-button-active');
        }
    }

    render() {
        if (this.state.inGame === 0) {
            return (
                <div className="App container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1 className="flashtype-heading">Flash Type</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="panel panel-success">
                                <div className="panel-body">
                                    <p>Practice your typing speed in this little game. After you press Start, you will
                                        get a paragraph of text. Type it in the input box, which will be focues
                                        automatically and just start typing. In the end you will get a score based on
                                        how many words you can write in a minute (WPM).</p>
                                    <h4>Good luck!</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <button onClick={this.handleStartGame.bind(this)} className="btn btn-default btn-lg">
                                Start
                            </button>
                        </div>
                    </div>
                </div>
            );
        }

        if (this.state.inGame === 1) {
            return (
                <div className="App container vertical-center">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1 className="flashtype-heading">Flash Type</h1>
                        </div>
                        <div className="col-xs-12">
                            <span id="countdown-5" className="countdown-text">5</span>
                            <span id="countdown-4" className="countdown-text">4</span>
                            <span id="countdown-3" className="countdown-text">3</span>
                            <span id="countdown-2" className="countdown-text">2</span>
                            <span id="countdown-1" className="countdown-text">1</span>
                            <span id="countdown-0" className="countdown-text">0</span>
                        </div>
                    </div>
                </div>
            );
        }

        if (this.state.inGame === 2) {
            return (
                <div className="App container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h1 className="flashtype-heading">Flash Type</h1>
                        </div>
                        <div className="col-xs-12">
                            <div className="paragraph-panel panel panel-default">
                                <div className="panel-body">
                                    <TextWall paragraphParsed={this.state.paragraphParsed}/>
                                    <hr/>
                                    <Statistics {...this.state}/>
                                </div>
                                <div className="panel-footer">
                                    <InputField trackAnsweredWords={this.state.trackAnsweredWords}
                                                currentWord={this.state.currentWord}
                                                appendCurrentWord={this.appendCurrentWord}
                                                handleSolveOneWord={this.handleSolveOneWord}
                                                checkForGoal={this.checkForGoal}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12">
                            <button id="restart-button" onClick={this.handleRestartGame.bind(this)}
                                    className="btn btn-primary btn-lg restart-button-inactive">
                                Restart Game
                            </button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default App;
