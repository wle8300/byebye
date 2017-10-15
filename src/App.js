// https://images.unsplash.com/photo-1505965923831-41f1824289e5
// https://images.unsplash.com/photo-1496450080853-5f78c43af9e9

import React, {Component} from 'react';

class App extends Component {
  _image = 'https://images.unsplash.com/photo-1505965923831-41f1824289e5'
  constructor(props) {
    super(props)
    this.state = {
      isHovering: false,
      isVisible: true
    }
  }
  render() {
    return (
      <div style={this.style1()}>

        <div style={this.styleA()} onMouseDown={this.handleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
          <div style={{
            width: '100%',
            height: '75%',
          }}>
            <img src={this._image} style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}/>
          </div>
          <div style={{
            padding: '0 4%',
            width: '92%',
            height: '25%',
          }}>
            <p style={this.styleB()}>Cyan</p>
            <p style={this.styleD()}>
              It is evoked by light with a predominant wavelength of between 490–520 nm
            </p>
          </div>
        </div>
      </div>
    );
  }
  handleClick = () => {
    this.setState({
      isVisible: false
    }, () => {

      setTimeout(() => this.setState({isVisible: true}), 3000)
    })
  }
  handleMouseOver = () => {
    this.setState({isHovering: true})
  }
  handleMouseOut = () => {
    this.setState({isHovering: false})
  }
  style1 = () => {
    return {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      WebkitTouchCallout: 'none',
      WebkitUserSelect: 'none',
      KhtmlUserSelect: 'none',
      MozUserSelect: 'none',
      MsUserSelect: 'none',
      userSelect: 'none'
    }
  }
  styleA = () => {
    return {
      width: 350,
      height: 500,
      color: 'white',
      backgroundColor: 'rgb(56, 225, 207)',
      boxShadow: this.state.isHovering
        ? '0px 8px 25px rgba(24, 233, 155, 0.5)'
        : '0px 10px 15px rgba(0, 0, 0, 0.1)',
      transform: this.state.isVisible
        ? 'inherit'
        : 'perspective(500px) translateZ(-1000px) rotateX(70deg)',
      opacity: this.state.isVisible
        ? 1
        : 0,
      filter: this.state.isVisible
        ? 'inherit'
        : 'blur(4px)',
      cursor: 'pointer',
      transition: 'transform 2000ms cubic-bezier(0.54, 0.19999, 0.65, 0.79), opacity 2000ms cubic-bezier(0.54, 0.19999, 0.65, 0.79), filter 2000ms cubic-bezier(0.93, 0.16, 0.65, 0.79), box-shadow 250ms linear'
    }
  }
  styleB = () => {
    return {margin: '1.2rem 0 0.75rem', fontSize: '1.75rem', fontFamily: '"Helvetica", sans-serif', fontWeight: 'bold', userSelect: 'none',}
  }
  styleD = () => {
    return {margin: 0, fontFamily: '"Helvetica", sans-serif', userSelect: 'none',}
  }
}

export default App;
