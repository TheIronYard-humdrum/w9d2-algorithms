import $ from 'jquery'

import { validate2 } from './validate'

var trueHTML = `<p>This card number is valid</p>`
var falseHTML = `<p>This card number is invalid</p>`


$('form').on('submit', function (event) {
  event.preventDefault();
  let cc = $('input');
  if ( validate2(cc[0].value) === true ) {
    $('.container').append(trueHTML)
  } else {
    $('.container').append(falseHTML)
  }
})