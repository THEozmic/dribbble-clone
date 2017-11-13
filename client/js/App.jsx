import React from 'react';
import { render } from 'react-dom';
import '../css/style.scss';
class App extends React.Component {
  render () {
    return (
      <div>
        <div className="u-p-30">
          <div className="columns section is-paddingless">
            <div className="column">
              <div className="card box is-paddingless is-marginless">
                <div className="content">
                  <div className="card-image">
                  <div className="is-marginless image u-p-10">
                    <img
                      src="https://cdn.dribbble.com/users/1055435/screenshots/3940714/walk-cycle-012_still_2x.gif"
                      alt="Placeholder image"/>
                  </div>
                  </div>
                </div>
              </div>
              <div className="u-p-10">
                <span className="is-pulled-left u-m-5">
                  <img
                    className="image is-24x24 avartar"
                    src="https://cdn.dribbble.com/users/1055435/avatars/mini/69dec8ee6bc9fb84ab3105ed199f204a.jpg?1480127236"/>
                </span>
                <span className="username">Luke Roberts</span>
              </div>
            </div>
            <div className="column">
              <div className="card box is-paddingless is-marginless">
                <div className="content">
                  <div className="card-image">
                  <div className="is-marginless image u-p-10">
                    <img
                      src="https://cdn.dribbble.com/users/1055435/screenshots/3940714/walk-cycle-012_still_2x.gif"
                      alt="Placeholder image"/>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card box is-paddingless is-marginless">
                <div className="content">
                  <div className="card-image">
                  <div className="is-marginless image u-p-10">
                    <img
                      src="https://cdn.dribbble.com/users/1055435/screenshots/3940714/walk-cycle-012_still_2x.gif"
                      alt="Placeholder image"/>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="columns section is-paddingless">
            <div className="column">
              <div className="card box is-paddingless is-marginless">
                <div className="content">
                  <div className="card-image">
                  <div className="is-marginless image u-p-10">
                    <img
                      src="https://cdn.dribbble.com/users/1055435/screenshots/3940714/walk-cycle-012_still_2x.gif"
                      alt="Placeholder image"/>
                  </div>
                  </div>
                </div>
              </div>
              <div className="u-p-10">
                @username
              </div>
            </div>
            <div className="column">
              <div className="card box is-paddingless is-marginless">
                <div className="content">
                  <div className="card-image">
                  <div className="is-marginless image u-p-10">
                    <img
                      src="https://cdn.dribbble.com/users/1055435/screenshots/3940714/walk-cycle-012_still_2x.gif"
                      alt="Placeholder image"/>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card box is-paddingless is-marginless">
                <div className="content">
                  <div className="card-image">
                  <div className="is-marginless image u-p-10">
                    <img
                      src="https://cdn.dribbble.com/users/1055435/screenshots/3940714/walk-cycle-012_still_2x.gif"
                      alt="Placeholder image"/>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'))