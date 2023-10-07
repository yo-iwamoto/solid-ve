import { style, keyframes, styleVariants } from '@vanilla-extract/css';
import { colors, fontSize, fontWeight } from './styles/theme.css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 100,
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

export const heading = style({
  fontSize: fontSize.xxxl,
  fontStyle: 'italic',
  fontWeight: fontWeight.bold,
  textAlign: 'center',
});

export const button = style({
  border: 0,
  paddingInline: 20,
  paddingBlock: 10,
  backgroundColor: colors.brand,
  color: colors.white,
  fontWeight: fontWeight.bold,
  fontSize: fontSize.xl,
  borderRadius: 4,
  cursor: 'pointer',
  transitionProperty: 'opacity',
  transitionDuration: '0.1s',
  ':hover': {
    opacity: 0.8,
  },
});

const iconBase = style({
  height: 320,
  width: 320,
});

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const icon = styleVariants({
  default: [iconBase],
  spin: [
    iconBase,
    {
      animation: `${spin} 5s linear infinite`,
    },
  ],
});
