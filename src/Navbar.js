import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import { IconButton, MenuItem, Select, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      format: 'hex',
      isOpen: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.closeSnackBar = this.closeSnackBar.bind(this);
  }

  handleChange(e) {
    this.setState({ format: e.target.value, isOpen: true });
    this.props.handleChange(e.target.value);
  }

  closeSnackBar() {
    this.setState({ isOpen: false });
  }

  render() {
    const { level, changeLevel, handleChange } = this.props;
    const { format } = this.state;
    return (
      <header className='Navbar'>
        <div className='logo'>
          <a href='#!'>React Color Picker</a>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select value={format} onChange={this.handleChange}>
            <MenuItem value='hex'>HEX - #ffffff</MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255)</MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
          </Select>
        </div>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
          open={this.state.isOpen}
          autoHideDuration={3000}
          message={<span id='message-id'>Format Changed To {format}!</span>}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          onClose={this.closeSnackBar}
          action={[
            <IconButton
              onClick={this.closeSnackBar}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </header>
    );
  }
}

export default Navbar;