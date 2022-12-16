/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode:'class',
  theme: {
    extend: {},
    colors: {
      
      'primary': {
        light: '#803abd',
        dark: '#dfb7ff'
      },
      'on-primary': {
        light: '#ffffff',
        dark: '#4a007f'
      },
      'primary-container': {
        light: '#f1dbff',
        dark: '#661aa3'
      },
      'on-primary-container': {
        light: '#2d0050',
        dark: '#f1dbff'
      },
      'secondary': {
        light: '#665a6f',
        dark: '#d1c1d9'
      },
      'on-secondary': {
        light: '#ffffff',
        dark: '#372c3f'
      },
      'secondary-container': {
        light: '#edddf6',
        dark: '#4e4256'
      },
      'on-secondary-container': {
        light: '#211829',
        dark: '#edddf6'

      },
      'tertiary': {
        light: '#805156',
        dark: '#f3b7bc'
      },
      'on-tertiary': {
        light: '#ffffff',
        dark: '#4b252a'
      },
      'tertiary-container': {
        light: '#ffd9dc',
        dark: '#663a3f'
      },
      'on-tertiary-container': {
        light: '#321016',
        dark: '#ffd9dc'
      },
      'error': {
        light: '#ba1a1a',
        dark: '#ffb4ab'
      },
      'on-error': {
        light: '#ffffff',
        dark: '#690005'
      },
      'error-container': {
        light: '#ffdad6',
        dark: '#93000a'
      },
      'on-error-container': {
        light: '#410002',
        dark: '#ffdad6'
      },
      'outline': {
        light: '#7c757e',
        dark: '#968e98'
      },
      'background': {
        light: '#fffbff',
        dark: '#1d1b1e'
      },
      'on-background': {
        light: '#1d1b1e',
        dark: '#e7e1e5'
      },
      'surface': {
        light: '#fffbff',
        dark: '#1d1b1e'
      },
      'on-surface': {
        light: '#1d1b1e',
        dark: '#e7e1e5'
      },
      'surface-variant': {
        light: '#e9dfea',
        dark: '#4b454d'
      },
      'on-surface-variant': {
        light: '#4b454d',
        dark: '#cdc4ce'
      },
      'inverse-surface': {
        light: '#322f33',
        dark: '#e7e1e5'
      },
      'inverse-on-surface': {
        light: '#f6eff4',
        dark: '#1d1b1e'
      },
      'inverse-primary':{
        light:'#dfb7ff',
        dark:'#803abd',
      },
      'shadow':{
        light:'#000000',
        dark:'#000000'
      },
      'surface-tint':{
        light:'#803abd',
        dark:'#dfb7ff'
      },
      'outline-variant':{
        light:'#cdc4ce',
        dark:'#4b454d'
      },
      'scrim':{
        light:'#000000',
        dark:'#000000'
      }




    }
  },
  plugins: []
};