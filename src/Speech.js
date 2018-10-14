import React, { Component } from 'react';
import SpeechRecognition from 'react-speech-recognition';

class Speech extends Component {
  componentDidUpdate(prevProps) {
    if (prevProps.transcript !== this.props.transcript) {
      this.props.onChange(this.props.transcript);
    }
  }

  render() {
    const { browserSupportsSpeechRecognition } = this.props;

    if (!browserSupportsSpeechRecognition) {
      return null;
    }

    return (
      <div>
        <p>Enable mic and say something</p>
      </div>
    );
  }
}

export default SpeechRecognition(Speech);
