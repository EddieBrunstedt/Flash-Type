import React  from 'react';
import './style.css';
import prettyMs from 'pretty-ms';

class Statistics extends React.Component {

    render() {
        const finishedAtMillis = this.props.stopTime - this.props.startTime;
        console.log('finishedAtMillis', finishedAtMillis);

        const finishedAtPrettyParsed = prettyMs(finishedAtMillis, {verbose: true});
        console.log('finishedAtPrettyParsed', finishedAtPrettyParsed);

        const wordsPerMillis = this.props.paragraphParsed.length / finishedAtMillis;
        console.log('wordsPerMillis', wordsPerMillis);

        const wordsPerMinutes = (wordsPerMillis * 1000) * 60;
        console.log('wordsPerSecs', wordsPerMinutes);

        const wordsPerMinutesRounded = Math.round(wordsPerMinutes * 100) / 100;
        console.log('wordsPerSecsRounded', wordsPerMinutesRounded);

        if (this.props.paragraphParsed[this.props.currentWord]) {
            return (
                <h2>{this.props.paragraphParsed[this.props.currentWord]}</h2>
            );
        } else {
            return (
                <div className="statistics">
                    <h2 className="stat-text">Score: <span className="text-primary">{wordsPerMinutesRounded}</span> WPM
                    </h2>
                    <hr/>
                    <h4>The paragrah was <span className="text-info">{this.props.paragraphParsed.length}</span> words
                        long</h4>
                    <h4>You finished in {finishedAtPrettyParsed}</h4>
                </div>
            );
        }
    }
}

export default Statistics;