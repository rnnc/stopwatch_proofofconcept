import React, { Component } from 'react';
import './App.scss';

class App extends Component {

  constructor() {
    super();
    this.state = {
      secondHandAngle: 0,
      minuteHandAngle: 0,
      hourHandAngle: 0
    };
    this.radius = 6;
    this.startupDelay = 1;
    this.tickCycle = this.tickCycle.bind(this);
  }

  componentDidMount() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    this.startClock(seconds, minutes, hours);
  }

  startClock(seconds, minutes, hours) {

    const secondHandAngle = (seconds + this.startupDelay) * this.radius;
    const minuteHandAngle = minutes * this.radius +
      Math.floor(secondHandAngle / (this.radius * 10) * 10) / 10;
    const hourHandAngle = hours * this.radius * 5 +
      Math.floor(minuteHandAngle / (this.radius * 2) * 10) / 10;

    this.setState({
      secondHandAngle,
      minuteHandAngle,
      hourHandAngle,
    });

    setInterval(this.tickCycle, 1000)
  }

  tickCycle() {

    let { secondHandAngle, minuteHandAngle, hourHandAngle } = this.state;

    secondHandAngle += this.radius;

    if (secondHandAngle % 30 === 0) {
      minuteHandAngle += 0.5;

      if (minuteHandAngle % this.radius === 0)
        hourHandAngle += 0.5;
    }

    this.setState({
      secondHandAngle,
      minuteHandAngle,
      hourHandAngle
    })
  }

  render() {

    const { hourHandAngle, minuteHandAngle, secondHandAngle } = this.state;

    return (
      <div className="App">
        <div className="background" />
        <div className="clockContainer">
          <div className="clockContainer__child">

            <div className="text title">
              <a className="siteLink" href="http://www.stopwatch.com" target="_blank" rel="noopener noreferrer">
                { "Stopwatch." }
              </a>
            </div>

            <div className="clock">

              <ul className="clock__marks">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>

              <div className="clock__hands">
                <div
                  className="clock__hand clock__hand--hour"
                  style={ { transform: `rotate(${hourHandAngle}deg)` } }
                />
                <div
                  className="clock__hand clock__hand--minute"
                  style={ { transform: `rotate(${minuteHandAngle}deg)` } }
                />
                <div
                  className="clock__hand clock__hand--second"
                  style={ { transform: `rotate(${secondHandAngle}deg)` } }
                />
              </div>

            </div>

            <div className="text subtitle">
              <a href="http://www.stopwatch.com" target="_blank" rel="noopener noreferrer">
                { "The clock is ticking" }
              </a>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
