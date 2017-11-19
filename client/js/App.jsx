import React from 'react';
import { render } from 'react-dom';
import '../css/style.scss';
import shots from './shots';

class App extends React.Component {
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
  }

  render () {
    return (
      <div>
        <div className="p-30">
          {
            shots.map(() =>
              <div className="columns section is-paddingless">
                { 
                  shots.map((shot, index) => {
                    return (
                      <div className="column">
                        <div className="card box is-paddingless is-marginless">
                          <div className="content">
                            <div className="card-image">
                              <div className="is-marginless image p-b-0 p-10">
                                <a
                                  className="overlay"
                                  href="#/shot/8537493"
                                  onClick={(event) => this.onClick(event, false, shot)}
                                >
                                  <div className="overlay-text p-20">
                                    <h4><strong>Birds / Stamps collection</strong></h4>
                                    <p>
                                      I was initially thinking to draw existing birds for this project
                                      but creating new species is way more fun! :) Check em out in the
                                      attachment before they skedaddle! More work on Behance
                                    </p>
                                    <div className="overlay-text-date">
                                      November 14, 2017
                                    </div>
                                  </div>
                                </a>
                                <img
                                  className="card-img"
                                  src="https://cdn.dribbble.com/users/1055435/screenshots/3940714/walk-cycle-012_still_2x.gif"
                                  alt="Placeholder image"/>
                              </div>
                              <div className="card-text m-10 m-l-20 m-r-20">
                                { shot.hasAttachment ? 
                                  <span className="is-pulled-left">
                                    <i class="fa fa-paperclip" aria-hidden="true"></i>
                                  </span>
                                  : null
                                }
                                <span className="is-pulled-right card-stats m-t-5">
                                  <span className="m-l-15">
                                    <span className="m-r-5">
                                      <i class="fa fa-eye" aria-hidden="true"></i>
                                    </span>
                                    5,904
                                  </span>
                                  <span className="m-l-15">
                                    <span className="m-r-5">
                                      <i class="fa fa-comment" aria-hidden="true"></i>
                                    </span>
                                    94
                                  </span>
                                  <span className="m-l-15">
                                    <span className="m-r-5">
                                      <i class="fa fa-heart" aria-hidden="true"></i>
                                    </span>
                                    904
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="p-10 p-l-0">
                          <span className="is-pulled-left m-5">
                            <img
                              className="image is-24x24 avartar"
                              src="https://cdn.dribbble.com/users/1055435/avatars/mini/69dec8ee6bc9fb84ab3105ed199f204a.jpg?1480127236"/>
                          </span>
                          <span className="username">{shot.name}</span>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            )
          }
        </div>
        { this.state.isModalVisible ? 
          <div className="shot-modal">
            <div className="modal is-active">
              <div
                className="modal-background"
                onClick={(event) => this.onClick(event, true)}
              ></div>
              <div className="modal-content">
                <div className="box shot-box">
                  <div className="section">
                    <div>
                      <img
                        className="image is-24x24 avartar large"
                        src="https://cdn.dribbble.com/users/1055435/avatars/normal/69dec8ee6bc9fb84ab3105ed199f204a.jpg?1480127236"/>
                      <span className="shot-modal-user m-l-10">
                        <div>
                          <strong>Birds / Stamps collection</strong>
                        </div>
                        <div className="shot-modal-date">
                          by
                          <span className="highlight m-5">
                            {this.state.shot.name}
                          </span>
                          on Nov 14, 2017
                        </div>
                      </span>
                      <div className="card box shot-box is-paddingless m-t-20">
                        <div className="content">
                          <div className="card-image">
                            <div className="is-marginless image p-10">
                              <img
                                className="card-img"
                                src="https://cdn.dribbble.com/users/1055435/screenshots/3940714/walk-cycle-012_still_2x.gif"
                                alt="Placeholder image"/>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="shot-description">
                        <p>So I put together a new walk cycle. Ideally, I’d like to make a
                          hundred of these to hone my animation and illustration skills
                          and then move on to more advanced animation.
                          What do you guys think?
                        </p>
                        <br/>
                        <p>Should I try different walk cycles?
                          Double bounce? Et cetera? Please comment below and tell me what
                          you think I should do. Also, check out the links below.
                        </p>
                      </div>
                      <div className="m-t-15">
                        <button className="interact-btn">
                          <span className="m-r-5">
                              <i class="fa fa-heart" aria-hidden="true"></i>
                            </span>
                            904 likes
                        </button>
                        <button className="interact-btn">
                          <span className="m-r-5">
                              <i class="fa fa-floppy-o" aria-hidden="true"></i>
                            </span>
                            20 saves
                        </button>
                      </div>
                      <div className="shot-responses-container">
                        <hr/>
                          <div class="field">
                            {/* <label class="label">Respond</label> */}
                            <div class="control">
                              <textarea class="textarea" placeholder="Write your response"></textarea>
                            </div>
                          </div>
                          <div className="level">
                            <div className="level-left"></div>
                            <div className="level-right">
                              <div class="control">
                                <button class="button is-link">Submit</button>
                              </div>
                            </div>
                          </div>
                        <hr/>
                        <div>
                          <h5><strong>3 Responses</strong></h5>
                        </div>
                        <div className="shot-responses m-t-20">
                          <div className="shot-response">
                            <span className="is-pulled-left m-r-5">
                              <img
                                className="image is-32x32 avartar"
                                src="https://cdn.dribbble.com/users/1055435/avatars/mini/69dec8ee6bc9fb84ab3105ed199f204a.jpg?1480127236"/>
                            </span>
                            <span className="username">
                              <strong>{this.state.shot.name}</strong>
                              <div>Nice work @Aurélien Salomon ➔ ! I love your concept !</div>
                              <div className="m-t-10">1 day ago</div>
                            </span>
                          </div>
                          <hr/>
                          <div className="shot-response">
                            <span className="is-pulled-left m-r-5">
                              <img
                                className="image is-32x32 avartar"
                                src="https://cdn.dribbble.com/users/1055435/avatars/mini/69dec8ee6bc9fb84ab3105ed199f204a.jpg?1480127236"/>
                            </span>
                            <span className="username">
                              <strong>{this.state.shot.name}</strong>
                              <div>Nice work @Aurélien Salomon ➔ ! I love your concept !</div>
                              <div className="m-t-10">1 day ago</div>
                            </span>
                          </div>
                          <hr/>
                          <div className="shot-response">
                            <span className="is-pulled-left m-r-5">
                              <img
                                className="image is-32x32 avartar"
                                src="https://cdn.dribbble.com/users/1055435/avatars/mini/69dec8ee6bc9fb84ab3105ed199f204a.jpg?1480127236"/>
                            </span>
                            <span className="username">
                              <strong>{this.state.shot.name}</strong>
                              <div>Nice work @Aurélien Salomon ➔ ! I love your concept !</div>
                              <div className="m-t-10">3 days ago</div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="modal-close is-large"
                ariaLabel="close"
                onClick={(event) => this.onClick(event, true)}
              >
              </button>
            </div>
          </div> :
          null
        }
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'))