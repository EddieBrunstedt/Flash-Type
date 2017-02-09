import React  from 'react';
import './style.css';

class TextWall extends React.Component {

    render() {
        let compileHTML = '';

        for (let i = 0; i < this.props.paragraphParsed.length; i++) {
            compileHTML += '<span class="typewars-paragraph-text" id="word' + i + '">' + this.props.paragraphParsed[i] + '</span>';
        }

        return (
            <div className="text-wall">
                <div dangerouslySetInnerHTML={{__html: compileHTML}}></div>
            </div>
        );
    }
}

export default TextWall;