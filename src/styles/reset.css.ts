import { globalStyle } from '@vanilla-extract/css';
import { fontSize } from './theme.css';

globalStyle('*', {
  padding: 0,
  margin: 0,
  fontSize: fontSize.md,
  fontWeight: 'normal',
});
