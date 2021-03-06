module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ]
    },
    important: true,
    theme: {
      screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
      },
      spacing: {
          px: '1px',
          '0': '0',
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '8': '2rem',
          '10': '2.5rem',
          '12': '3rem',
          '16': '4rem',
          '20': '5rem',
          '24': '6rem',
          '32': '8rem',
          '40': '10rem',
          '48': '12rem',
          '56': '14rem',
          '64': '16rem',
      },
      backgroundColor: theme => theme('colors'),
      borderColor: theme => ({
          ...theme('colors'),
          default: theme('colors.gray.800', 'currentColor'),
      }),
      boxShadow: {
          default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
          md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
          outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
          none: 'none',
      },
      extend: {
        colors: {
          transparent: 'transparent',
          black: '#242423',
          brown: '#AC9486',
          cream: '#FDEBD8',
          'dark-grey': '#2F3137',
          pink: '#FFEBEE',
          test: '#C6BOA9',
          white: '#F8F5F2',
        },
      },
      container: {},
      fontFamily: {
          serif: [
            'Vidaloka',
            'Palatino Linotype',
            'Palatino',
            'Palladio',
            'URW Palladio L',
            'Book Antiqua',
            'Baskerville',
            'Bookman Old Style',
            'Bitstream Charter',
            'Nimbus Roman No9 L',
            'Garamond',
            'Apple Garamond',
            'ITC Garamond Narrow',
            'New Century Schoolbook',
            'Century Schoolbook',
            'Century Schoolbook L',
            'Georgia',
            'serif'
          ],
          sans: [
              'Open Sans',
              '-apple-system',
              'BlinkMacSystemFont',
              '"Segoe UI"',
              'Roboto',
              '"Helvetica Neue"',
              'Arial',
              '"Noto Sans"',
              'sans-serif',
              '"Apple Color Emoji"',
              '"Segoe UI Emoji"',
              '"Segoe UI Symbol"',
              '"Noto Color Emoji"',
          ],
          mono: [
              'Menlo',
              'Monaco',
              'Consolas',
              '"Liberation Mono"',
              '"Courier New"',
              'monospace',
          ],
      },
      lineHeight: {
          none: '1',
          tight: '1.25',
          snug: '1.375',
          normal: '1.5',
          relaxed: '1.625',
          loose: '2',
      },
      listStyleType: {
          none: 'none',
          disc: 'disc',
          decimal: 'decimal',
      },
      margin: (theme, { negative }) => ({
          auto: 'auto',
          ...theme('spacing'),
          ...negative(theme('spacing')),
      }),
      maxHeight: {
          full: '100%',
          screen: '100vh',
      },
      maxWidth: {
          xs: '20rem',
          sm: '24rem',
          md: '28rem',
          lg: '32rem',
          xl: '36rem',
          '2xl': '42rem',
          '3xl': '48rem',
          '4xl': '56rem',
          '5xl': '64rem',
          '6xl': '72rem',
          full: '100%',
      },
      minHeight: {
          '0': '0',
          full: '100%',
          screen: '100vh',
      },
    },
    variants: {},
    plugins: [],
  }
