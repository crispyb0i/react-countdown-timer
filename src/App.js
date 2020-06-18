import React from 'react'
import logo from './logo.svg'
import './App.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      distance: 0,
      endDate: new Date()
    }
  }

  componentDidMount() {
    this.startInterval()
  }

  startInterval = () => {
    const second = 1000, minute = second * 60, hour = minute * 60, day = hour * 24

    let x = setInterval(() => {
      let that = this
      this.setState({
        distance: that.state.endDate.getTime() - new Date().getTime()
      })

      if(that.state.distance>0){
        document.getElementById("days").innerText = that.format(Math.floor(that.state.distance / day))
        document.getElementById("hours").innerText = that.format(Math.floor((that.state.distance % day) / hour))
        document.getElementById("minutes").innerText = that.format(Math.floor((that.state.distance % hour) / minute))
        document.getElementById("seconds").innerText = that.format(Math.floor((that.state.distance % minute) / second))
      }
    }, second)
  }

  format = (value) => {
    return value < 10 ? "0" + value : value
  }

  handleChange = e => {
    this.setState({ endDate: e })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 id="head">React Countdown</h1>
        </header>
        <div className="margin"></div>
        <DatePicker
          selected={this.state.endDate}
          dateFormat="EEEE, MMM d, yyyy"
          onChange={(e) => this.handleChange(e)}
          />
        <div id="countdown">
          <ul>
            <li><span id="days">00</span>Days</li>
            <li><span id="hours">00</span>Hours</li>
            <li><span id="minutes">00</span>Minutes</li>
            <li><span id="seconds">00</span>Seconds</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
