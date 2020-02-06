# ad-bs-converter [![npm version](https://badge.fury.io/js/ad-bs-converter.svg)](http://badge.fury.io/js/ad-bs-converter) [![Build Status](https://travis-ci.org/techgaun/ad-bs-converter.svg?branch=master)](https://travis-ci.org/techgaun/ad-bs-converter)
A javascript implementation to convert bikram samvat to anno domini and vice-versa

_If you are looking for ad-bs converter for python, check out [ad-bs-converter.py](https://github.com/techgaun/ad-bs-converter.py)._

### Installation
```bash
npm install ad-bs-converter --save
```

### Example
```javascript
var adbs = require("ad-bs-converter");

console.log(adbs.ad2bs("1990/8/10"))
console.log(adbs.bs2ad("2047/4/26"))
```

outputs

```javascript
{
     year: 2047,
     month: 4,
     day: 26,
     strMonth: 'Shrawan',
     strShortMonth: 'Shra',
     dayOfWeek: 6,
     strDayOfWeek: 'Shukrabaar',
     strShortDayOfWeek: 'Shukra',
     totalDaysInMonth: '32'
}

{ 
      year: 1990,
      month: 8,
      strMonth: 'August',
      strShortMonth: 'Aug',
      day: 10,
      dayOfWeek: 5,
      strDayOfWeek: 'Friday',
      strShortDayOfWeek: 'Fri' 
}
```
