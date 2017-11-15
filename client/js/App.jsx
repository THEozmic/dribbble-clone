import React from 'react';
import { render } from 'react-dom';
import '../css/style.scss';
import shots from './shots';

class App extends React.Component {
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
                                <div className="overlay">
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
                                </div>
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
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'))