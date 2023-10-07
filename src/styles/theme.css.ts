import { createGlobalTheme } from '@vanilla-extract/css';

export const { colors, fontSize, fontWeight } = createGlobalTheme(':root', {
  colors: {
    brand: '#7D4CDB',
    black: '#000000',
    white: '#FFFFFF',
    gray: '#CCCCCC',
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
    xxxl: '30px',
  },
  fontWeight: {
    normal: '400',
    bold: '700',
  },
});
