# some infos should be remembered -imzooel
## List of falsy values in JavaScript
```
  false
  null
  undefined
  0
  NaN
  '', "", ``    (empty string)
  document.all
  0n
  -0
```
## null vs undefined
  `undefined` indicates a variable has been declared but has not yet been assigned a value
```
  let imZooel;
  alert(imZooel); //will show undefined
  alert(typeof imZooel); //will show undefined
```
  `null` is an assignment value which can be assigned to a variable as a representation of no value.
```
  let imZooel = null;
  alert(imZooel); //shows null
  alert(typeof imZooel); //shows object
```
so `undefined` is a type itself (undefined) while `null` is an object.
```
  null === undefined // false
  null == undefined // true
  null === null // true
there is a twist between == double equal & === triple equal
```
## comparison operator: double equall vs triple equal
```
  == is used for comparing two variables, but it ignores the datatype of variable whereas 
  === is used for comparing two variables, but this operator also checks datatype and compares two values.
  
  == Return true only if the two operands are equal while 
  === returns true only if both values and data types are the same for the two variables.
  ```
