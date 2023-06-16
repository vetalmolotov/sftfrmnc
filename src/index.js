// Test import of a JavaScript module
import {iconQuoteSVG} from './js/icon-quote'
import {iconGalButtonSVG} from './js/icon-gallery-button'

// import { example } from '@/js/example'

// Test import of an asset
// import webpackLogo from '@/images/webpack-logo.svg'

// Test import of styles
import '@/styles/index.scss'

// Insert SVG icons
const iconQuote = document.querySelector('.icon-quote')
iconQuote.innerHTML = iconQuoteSVG()

const iconGalButton = document.querySelectorAll('.gallery-button')
for (let i = 0; i < iconGalButton.length; ++i) {
  iconGalButton[i].innerHTML = iconGalButtonSVG()
}


// Appending to the DOM
// const logo = document.createElement('img')
// logo.src = webpackLogo

// const heading = document.createElement('h1')
// heading.textContent = example()

// Test a background image url in CSS
// const imageBackground = document.createElement('div')
// imageBackground.classList.add('image')

// Test a public folder asset
// const imagePublic = document.createElement('img')
// imagePublic.src = '/assets/example.png'

// const app = document.querySelector('#root')
// app.append(logo, heading, imageBackground, imagePublic)
