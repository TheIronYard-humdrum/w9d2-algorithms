#### w9d2 - Algorithms
---
##### Credit Card Validator
---

To validate a credit card...

* Get credit card number
* Double every other digit from the *right* (last to first)
* If any of these doubled digits return double digits (Ex: 10, 12, 14...)
  * return the sum of those digits
* Add newly doubled digits to digits not doubled
* if that number is divisible by 10, card is valid, otherwise it is not