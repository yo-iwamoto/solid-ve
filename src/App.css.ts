import { style } from '@vanilla-extract/css';
import { fontSize, fontWeight } from './styles/theme.css';

export const styles = {
  root: style({
    display: 'grid',
    placeItems: 'center',
    minHeight: '100vh',
  }),
  heading: style({
    fontSize: fontSize.xxxl,
    fontStyle: 'italic',
    fontWeight: fontWeight.bold,
  }),
};
