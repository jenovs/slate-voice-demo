import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

import './App.css';

import Speech from './Speech';

const createValue = text =>
  Value.fromJSON({
    document: {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text,
                },
              ],
            },
          ],
        },
      ],
    },
  });

class App extends Component {
  state = {
    value: createValue('Placeholder text'),
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  handleTranscript = arg => {
    if (!arg) return;
    this.setState(() => ({
      value: createValue(arg),
    }));
  };

  render() {
    return (
      <div>
        <div className="App-slate">
          <Editor value={this.state.value} onChange={this.onChange} />
        </div>
        <Speech onChange={this.handleTranscript} />
      </div>
    );
  }
}

export default App;
