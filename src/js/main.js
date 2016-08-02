import $ from 'jquery'

import { validate2 } from './validate'

var trueHTML = `<p>This card number is <span class="green">valid</span></p>`
var falseHTML = `<p>This card number is <span class="red">invalid</span></p>`


$('form').on('submit', function (event) {
  event.preventDefault();
  let cc = $('input');
  if ( validate2(cc[0].value) === true ) {
    $('.valid').empty()
    $('.valid').append(trueHTML)
  } else {
    $('.valid').empty()
    $('.valid').append(falseHTML)
  }
})