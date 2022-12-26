/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode:'class',
  theme: {
    extend: {},
    colors: {
      
      'primary': {
        light: '#6750A4',
        dark: '#D0BCFF'
      },
      'on-primary': {
        light: '#FFFFFF',
        dark: '#381E72'
      },
      'primary-container': {
        light: '#EADDFF',
        dark: '#4F378B'
      },
      'on-primary-container': {
        light: '#21005D',
        dark: '#EADDFF'
      },
      'secondary': {
        light: '#625B71',
        dark: '#CCC2DC'
      },
      'on-secondary': {
        light: '#FFFFFF',
        dark: '#332D41'
      },
      'secondary-container': {
        light: '#E8DEF8',
        dark: '#4A4458'
      },
      'on-secondary-container': {
        light: '#1D192B',
        dark: '#E8DEF8'

      },
      'tertiary': {
        light: '#7D5260',
        dark: '#EFB8C8'
      },
      'on-tertiary': {
        light: '#FFFFFF',
        dark: '#492532'
      },
      'tertiary-container': {
        light: '#FFD8E4',
        dark: '#633B48'
      },
      'on-tertiary-container': {
        light: '#31111D',
        dark: '#FFD8E4'
      },
      'error': {
        light: '#B3261E',
        dark: '#F2B8B5'
      },
      'on-error': {
        light: '#FFFFFF',
        dark: '#601410'
      },      
      'error-container': {
        light: '#F9DEDC',
        dark: '#8C1D18'
      },
      'on-error-container': {
        light: '#410E0B',
        dark: '#F9DEDC'
      },
      'outline': {
        light: '#79747E',
        dark: '#938F99'
      },


      'background': {
        light: '#FFFBFE',
        dark: '#1C1B1F'
      },
      'on-background': {
        light: '#1C1B1F',
        dark: '#E6E1E5'
      },
      'surface': {
        light:'#f7f2f9',
       // light: '#FFFBFE',
        dark: '#1C1B1F'
      },
      'on-surface': {
        light: '#1C1B1F',
    
        dark: '#E6E1E5'
      },
      'surface-variant': {
        light: '#E7E0EC',
        dark: '#49454F'
      },
      'on-surface-variant': {
        light: '#49454F',
        dark: '#CAC4D0'
      },
      'inverse-surface': {
        light: '#313033',
        dark: '#E6E1E5'
      },
      'inverse-on-surface': {
        light: '#F4EFF4',
        dark: '#313033'
      },
      'inverse-primary':{
        light:'#D0BCFF',
        dark:'#6750A4',
      },
      'shadow':{
        light:'#000000',
        dark:'#000000'
      },
      'surface-tint':{
        light:'#6750A4',
        dark:'#D0BCFF'
      },
      'outline-variant':{
        light:'#CAC4D0',
        dark:'#49454F'
      },
      'scrim':{
        light:'#000000',
        dark:'#000000'
      }




    }
  },
  plugins: []
};