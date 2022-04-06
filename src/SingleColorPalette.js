import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShade(this.props.palette, this.props.colorId);
    this.state = {
      format: 'hex',
    };
    this.changeFormat = this.changeFormat.bind(this);
  }

  gatherShade(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades
        .concat(allColors[key])
        .filter((color) => color.id === colorToFilterBy);
    }
    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { format } = this.state;
    const { palette, emoji } = this.props.palette;
    const colorBoxes = this._shades.map((color) => (
      <ColorBox
        key={color.id}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));
    return (
      <div className='Palette'>
        <Navbar handleChange={this.changeFormat} showingAllColors={false} />
        <div className='Palette-colors'>{colorBoxes}</div>
        <PaletteFooter palette={palette} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
