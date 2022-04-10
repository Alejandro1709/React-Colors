import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteFooterStyles';

function PaletteFooter(props) {
  const { palette, emoji } = props;
  return (
    <footer className='Palette-footer'>
      {palette}
      <span className='emoji'>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
