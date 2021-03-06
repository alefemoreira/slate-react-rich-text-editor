import React, { Component } from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';

// import { Container } from './styles';

export default class TextEditor extends Component {

  state = {
    value: '',
  }

  onChange = ({ value }) => {
    this.setState({ value });
  }

  render() {
    return (
      <Editor value={this.state.value} onChange={this.onChange}/>
    );
  }
}
