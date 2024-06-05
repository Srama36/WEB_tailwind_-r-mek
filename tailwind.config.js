/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      alfa: ["Alfa Slab One", "serif"],
      dm: ["DM Sans", "sans-serif"],
    },
    fontSize: {
      h1: ["72px", "80px"],
      h2: ["56px", "64px"],
      h3: ["40px", "48px"],
      h4: ["32px", "24px"],
      h5: ["24px", "20px"],
      label: ["12px", "auto"],
      text_big: ["20px", "32px"],
      text: ["16px", "24px"],
      text_small: ["12px", "24px"],
    },
    extend: {
      colors: {
        'main-orange': '#FF8482',
        'light-gray': '#dadada',
        'main-yellow': '#fff2dd',
        'transpred': '#3d201f',
        'primary-1': '#be6361',
        'textblack': '#333333',
      },
      spacing: {
      170: '10.625rem',
      'yeloblock': '57rem',
      'picblock': '28rem',
      'lastblock': '42.188rem',
      'img': '41rem',
      },
      backgroundImage: {
        'playplace': 'url("/img/Bitmap.png")',
      },
      height: {
        '108': '27rem',
        '18': '18px',
      },
      width: {
        '24': '24px',
      },
    },
  },
  plugins: [],
}