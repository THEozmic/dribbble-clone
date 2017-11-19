import React, { Component } from 'react';
import { render } from 'react-dom';
import Shots from './Shots';
import ShotModal from './ShotModal';
import Nav from './Nav';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      isModalVisible: false,
      shot: {}
    };
  }

  componentDidMount() {
    this._isMounted = true;
    window.onpopstate = ()=> {
      if(this._isMounted) {
        const { hash } = location;
        if(hash.indexOf('shot') === -1)
          this.setState({ isModalVisible: false })
      }
    }
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
        <Nav/>
        <Shots onClick={this.onClick}/>
        { this.state.isModalVisible ? 
          <ShotModal shot={this.state.shot} onClick={this.onClick}/>:
          null
        }
      </div>
    );
  }
}
