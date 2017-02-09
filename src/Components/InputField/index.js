import React  from 'react';
import './style.css';

class InputField extends React.Component {

    handleKeyDown(e) {
        const currentWord = document.querySelector('#word' + this.props.currentWord).innerHTML;
        if (e.target.value === currentWord) {
            this.props.handleSolveOneWord(this.props.currentWord);
            this.props.appendCurrentWord();
            this.props.checkForGoal();
        }

    }

    render() {
        return (
            <div className="form-group">
                <input id="gameInputField" onChange={this.handleKeyDown.bind(this)} type="text"
                       className="form-control input-lg"/>
            </div>
        );
    }
}

export default InputField;