import React, { Component } from 'react';
import { render } from 'react-dom';
import shots from './shots';
import Shots from './Shots';
import ShotModal from './ShotModal';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      isModalVisible: false,
      shot: {}
    };
  }

  onClick (event, isToClose, shot = {}) {
    event.preventDefault();
    if (isToClose) {
      this.setState({
        isModalVisible: false
      });
    } else {
      this.setState({
        isModalVisible: true,
        shot
      });
    }
    shot.id ? 
    window.history.pushState(null, null, `#/shot/${shot.id}`) :
    window.history.pushState(null, null, `#/`) ;
  }

  render () {
    return (
      <div>
        <Shots onClick={this.onClick}/>
        { this.state.isModalVisible ? 
          <ShotModal shot={this.state.shot} onClick={this.onClick}/>:
          null
        }
      </div>
    );
  }
}
