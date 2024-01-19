import { extendTheme } from '@chakra-ui/react';
import { buildLegacyTheme } from 'sanity';

export const colors = {
  brand: {
    primary: 'hsl(192, 97%, 50%)',
    primaryLight: 'hsl(192, 97%, 60%)',
    primaryDark: 'hsl(192, 97%, 40%)',
    darkBlue : '#012246'
  },
};

export const theme = extendTheme({ colors,
  fonts: {
    body: 'Tajawal, sans-serif',
    heading: 'Tajawal, sans-serif',
  },
  fontSizes: {
    xs: '0.75rem', // Extra Small
    sm: '0.875rem', // Small
    md: '1rem', // Medium (default)
    lg: '1.125rem', // Large
    xl: '1.25rem', // Extra Large
    '2xl': '1.5rem', // 2 Extra Large
    '3xl': '1.875rem', // 3 Extra Large
    '4xl': '2.25rem', // 4 Extra Large
    '5xl': '3rem', // 5 Extra Large
    '6xl': '4rem', // 6 Extra Large
  },
});

const props = {
  '--ms-white': '#fff',
  '--ms-black': '#1a1a1a',
  '--brand-primary': colors.brand.primary,
  '--brand-primary-light': colors.brand.primaryLight,
  '--brand-primary-dark': colors.brand.primaryDark,
  '--ms-gray': '#666666',
};

export const msTheme = buildLegacyTheme({
  '--black': props['--ms-black'],
  '--gray': props['--ms-gray'],
  '--focus-color': props['--brand-primary-dark'],

  '--brand-primary': props['--brand-primary'],

  '--component-bg': props['--ms-white'],
  '--component-text-color': props['--ms-black'],

  '--default-button-color': props['--ms-gray'],
  '--default-button-primary-color': props['--brand-primary'],

  '--state-info-color': props['--brand-primary-light'],
});

