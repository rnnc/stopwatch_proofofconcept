import React, { Component } from 'react';
import './App.scss';

class App extends Component {

  radius = 6;

  componentDidMount() {
    const currentTime = new Date();
    this.seconds = currentTime.getSeconds() * this.radius;
    this.minutes = currentTime.getMinutes() * this.radius + Math.floor(this.seconds / (this.radius * 10) * 10) / 10;
    this.hours = currentTime.getHours() * this.radius * 5 + Math.floor(this.minutes / (this.radius * 2) * 10) / 10
    this.setClockHands(this.seconds, this.minutes, this.hours);
    console.log(this.seconds)
    console.log(this.minutes)
    console.log(this.hours)

  }

  setClockHands(second, minute, hour) {
    this.hourHand.style.transform = `rotate(${hour}deg)`;
    this.minuteHand.style.transform = `rotate(${minute}deg)`;
    this.secondHand.style.transform = `rotate(${second}deg)`;

    const interval = 1000;
    const before = new Date();

    let tSecond = second;
    let tMinute = minute;
    let tHour = hour;

    setInterval(() => {
      const now = new Date();
      const elapsedTime = now.getTime() - before.getTime();
      const delay = Math.round(elapsedTime / interval);

      tSecond += this.radius;
/*       for(let i=0; i<delay; i++){
        if( ((tSecond - i) * this.radius) % (this.radius * 5) === 0 ){
          tMinute += 0.1;
          if( tMinute % this.radius === 0 ){
            tHour += 0.5;
          }
        }
      } */

      console.log(`${tHour}:${tMinute}:${tSecond}`);

      this.hourHand.style.transform = `rotate(${tHour}deg)`;
      this.minuteHand.style.transform = `rotate(${tMinute}deg)`;
      this.secondHand.style.transform = `rotate(${tSecond}deg)`;

    }, interval)
  }

  render() {
    return (
      <div className="App">
        <div className="background" />
        <div className="clockContainer">
          <div className="clockContainer__child">
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
                <div className="clock__hand clock__hand--hour" ref={ (hour_h) => { this.hourHand = hour_h } } />
                <div className="clock__hand clock__hand--minute" ref={ (hour_m) => { this.minuteHand = hour_m } } />
                <div className="clock__hand clock__hand--second" ref={ (hour_s) => { this.secondHand = hour_s } } />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
