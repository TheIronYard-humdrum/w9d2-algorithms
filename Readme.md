#### w9d2 - Algorithms
---
##### Credit Card Validator
---

[Surge](http://tiy-humdrum-algorithms.surge.sh/)

**To validate a credit card...**

* Get credit card number
* Double every other digit from the **right** *(last to first)*
* If any of these doubled digits return double digits (Ex: 10, 12, 14...) and return the sum of those digits
* Add newly doubled digits to digits not doubled
* if that number is divisible by 10, card is valid, otherwise it is not


**javaScript Tools**
* used `(""+cc).split("")` to make an array of digits.
    * (cc = credit card number in the form of a number)
* `split()` returns a string so I used `Number()` on each digit to convert back to a number.
* Used `.map()` to double digits.
* Used `.reduce()` to sum digits.