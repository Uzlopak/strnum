import assert from './assert.js';
import strnum from './strnum.js';

const Number = (str) => strnum(str, {
  infinity: true,
  octal: true,
  hex: true,
  binary: true,
  bigint: true,
});

Number.POSITIVE_INFINITY = Infinity;
Number.NEGATIVE_INFINITY = -Infinity;

function dynaString(s1, s2) {
  return String(s1) + String(s2);
}

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Number([value]) returns a number value (not a Number object) computed by
    ToNumber(value) if value was supplied
es5id: 15.7.1.1_A1
description: Used values "10", 10, new String("10"), new Object(10) and "abc"
---*/
assert.sameValue(typeof Number("10"), "number", 'The value of `typeof Number("10")` is expected to be "number"');
// assert.sameValue(typeof Number(10), "number", 'The value of `typeof Number(10)` is expected to be "number"');

// assert.sameValue(
//   typeof Number(new String("10")),
//   "number",
//   'The value of `typeof Number(new String("10"))` is expected to be "number"'
// );

// assert.sameValue(
//   typeof Number(new Object(10)),
//   "number",
//   'The value of `typeof Number(new Object(10))` is expected to be "number"'
// );

assert.sameValue(Number("abc"), "abc", 'Number("abc") returns NaN');
assert.sameValue(Number("INFINITY"), "INFINITY", 'Number("INFINITY") returns NaN');
assert.sameValue(Number("infinity"), "infinity", 'Number("infinity") returns NaN');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrUnsignedDecimalLiteral:::. DecimalDigits is the
    MV of DecimalDigits times 10<sup><small>-n</small></sup>, where n is the
    number of characters in DecimalDigits
es5id: 9.3.1_A10
description: Compare Number('.12345') with +('12345')*1e-5
---*/
assert.sameValue(+('12345') * 1e-5, 0.12345);


// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrUnsignedDecimalLiteral:::. DecimalDigits ExponentPart
    is the MV of DecimalDigits times 10<sup><small>e-n</small></sup>, where n is
    the number of characters in DecimalDigits and e is the MV of ExponentPart
es5id: 9.3.1_A11
description: >
    Compare Number('.12345e6') with +('12345')*1e1,  and
    Number('.12345e-3') !== Number('12345')*1e-8
---*/
assert.sameValue(Number('12345') * 1e1, 0.12345e6);

assert.sameValue(
  Number(".12345e-3"),
  0.00012345
);
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrUnsignedDecimalLiteral::: DecimalDigits ExponentPart
    is the MV of DecimalDigits times 10<sup><small>e</small></sup>, where e is the MV of ExponentPart
es5id: 9.3.1_A12
description: >
    Compare Number('12345e6') with +('12345')*1e1,  and
    Number('12345e-6') !== Number('12345')*1e-6
---*/
assert.sameValue(Number("12345e6"), 12345000000, 'Number("12345e6") must return 12345000000');
assert.sameValue(Number("12345e-6"), 0.012345, 'Number("12345e-6") must return 0.012345');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of DecimalDigits ::: DecimalDigits DecimalDigit is
    (the MV of DecimalDigits times 10) plus the MV of DecimalDigit
es5id: 9.3.1_A13
description: Compare '12' with Number("1")*10+Number("2") and analogous
---*/
assert.sameValue(
  +("12"),
  12,
  'The value of `+("12")` is expected to be 12'
);

assert.sameValue(
  Number("123"),
  123,
  'Number("123") must return 123'
);

assert.sameValue(
  Number("1234"),
  1234,
  'Number("1234") must return 1234'
);
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of SignedInteger ::: + DecimalDigits is the MV of DecimalDigits"
es5id: 9.3.1_A14
description: Compare Number('+1234567890') with +('1234567890')
---*/
assert.sameValue(Number("+1234567890"), 1234567890, 'Number("+1234567890") must return 1234567890');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of SignedInteger ::: - DecimalDigits is the negative of the MV of
    DecimalDigits
es5id: 9.3.1_A15
description: Compare -Number('1234567890') with ('-1234567890')
---*/
assert.sameValue(
  +("-1234567890"),
  -1234567890,
  'The value of `+("-1234567890")` is expected to be -1234567890'
);
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of DecimalDigit ::: 0 or of HexDigit ::: 0 is 0"
es5id: 9.3.1_A16
description: Compare Number('0x0') and Number('0X0') with 0
---*/
assert.sameValue(Number("0"), 0, 'Number("0") must return 0');
assert.sameValue(+("0x0"), 0, 'The value of `+("0x0")` is expected to be 0');
assert.sameValue(Number("0X0"), 0, 'Number("0X0") must return 0');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of DecimalDigit ::: 1 or of HexDigit ::: 1 is 1"
es5id: 9.3.1_A17
description: Compare Number('0x1') and Number('0X1') with 1
---*/
assert.sameValue(Number("1"), 1, 'Number("1") must return 1');
assert.sameValue(Number("0x1"), 1, 'Number("0x1") must return 1');
assert.sameValue(+("0X1"), 1, 'The value of `+("0X1")` is expected to be 1');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of DecimalDigit ::: 2 or of HexDigit ::: 2 is 2"
es5id: 9.3.1_A18
description: Compare Number('0x2') and Number('0X2') with 2
---*/
assert.sameValue(+("2"), 2, 'The value of `+("2")` is expected to be 2');
assert.sameValue(Number("0x2"), 2, 'Number("0x2") must return 2');
assert.sameValue(Number("0X2"), 2, 'Number("0X2") must return 2');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of DecimalDigit ::: 3 or of HexDigit ::: 3 is 3"
es5id: 9.3.1_A19
description: Compare Number('0x3') and Number('0X3') with 3
---*/
assert.sameValue(Number("3"), 3, 'Number("3") must return 3');
assert.sameValue(+("0x3"), 3, 'The value of `+("0x3")` is expected to be 3');
assert.sameValue(Number("0X3"), 3, 'Number("0X3") must return 3');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of StringNumericLiteral ::: [empty] is 0"
es5id: 9.3.1_A1
description: Number('') convert to Number by explicit transformation
---*/
assert.sameValue(Number(""), 0, 'Number("") must return 0');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of DecimalDigit ::: 4 or of HexDigit ::: 4 is 4"
es5id: 9.3.1_A20
description: Compare Number('0x4') and Number('0X4') with 4
---*/
assert.sameValue(Number("4"), 4, 'Number("4") must return 4');
assert.sameValue(Number("0x4"), 4, 'Number("0x4") must return 4');
assert.sameValue(+("0X4"), 4, 'The value of `+("0X4")` is expected to be 4');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of DecimalDigit ::: 5 or of HexDigit ::: 5 is 5"
es5id: 9.3.1_A21
description: Compare Number('0x5') and Number('0X5') with 5
---*/
assert.sameValue(+("5"), 5, 'The value of `+("5")` is expected to be 5');
assert.sameValue(Number("0x5"), 5, 'Number("0x5") must return 5');
assert.sameValue(Number("0X5"), 5, 'Number("0X5") must return 5');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of DecimalDigit ::: 6 or of HexDigit ::: 6 is 6"
es5id: 9.3.1_A22
description: Compare Number('0x6') and Number('0X6') with 6
---*/
assert.sameValue(Number("6"), 6, 'Number("6") must return 6');
assert.sameValue(+("0x6"), 6, 'The value of `+("0x6")` is expected to be 6');
assert.sameValue(Number("0X6"), 6, 'Number("0X6") must return 6');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of DecimalDigit ::: 7 or of HexDigit ::: 7 is 7"
es5id: 9.3.1_A23
description: Compare Number('0x7') and Number('0X7') with 7
---*/
assert.sameValue(Number("7"), 7, 'Number("7") must return 7');
assert.sameValue(Number("0x7"), 7, 'Number("0x7") must return 7');
assert.sameValue(+("0X7"), 7, 'The value of `+("0X7")` is expected to be 7');

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of DecimalDigit ::: 7 or of HexDigit ::: 7 is 7"
es5id: 9.3.1_A23
description: Compare Number('0x7') and Number('0X7') with 7
---*/
assert.sameValue(Number("7"), 7, 'Number("7") must return 7');
assert.sameValue(Number("0x7"), 7, 'Number("0x7") must return 7');
// assert.sameValue(+("0X7"), 7, 'The value of `+("0X7")` is expected to be 7');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of DecimalDigit ::: 8 or of HexDigit ::: 8 is 8"
es5id: 9.3.1_A24
description: Compare Number('0x8') and Number('0X8') with 8
---*/
assert.sameValue(+("8"), 8, 'The value of `+("8")` is expected to be 8');
assert.sameValue(Number("0x8"), 8, 'Number("0x8") must return 8');
assert.sameValue(Number("0X8"), 8, 'Number("0X8") must return 8');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of DecimalDigit ::: 8 or of HexDigit ::: 8 is 8"
es5id: 9.3.1_A24
description: Compare Number('0x8') and Number('0X8') with 8
---*/
assert.sameValue(+("8"), 8, 'The value of `+("8")` is expected to be 8');
assert.sameValue(Number("0x8"), 8, 'Number("0x8") must return 8');
assert.sameValue(Number("0X8"), 8, 'Number("0X8") must return 8');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of DecimalDigit ::: 9 or of HexDigit ::: 9 is 9"
es5id: 9.3.1_A25
description: Compare Number('0x9') and Number('0X9') with 9
---*/
assert.sameValue(Number("9"), 9, 'Number("9") must return 9');
assert.sameValue(+("0x9"), 9, 'The value of `+("0x9")` is expected to be 9');
assert.sameValue(Number("0X9"), 9, 'Number("0X9") must return 9');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of DecimalDigit ::: 9 or of HexDigit ::: 9 is 9"
es5id: 9.3.1_A25
description: Compare Number('0x9') and Number('0X9') with 9
---*/
assert.sameValue(Number("9"), 9, 'Number("9") must return 9');
assert.sameValue(+("0x9"), 9, 'The value of `+("0x9")` is expected to be 9');
assert.sameValue(Number("0X9"), 9, 'Number("0X9") must return 9');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of HexDigit ::: a or of HexDigit ::: A is 10"
es5id: 9.3.1_A26
description: >
    Compare Number('0xA'), Number('0XA'), Number('0xa') and
    Number('0Xa') with 10
---*/
assert.sameValue(Number("0xa"), 10, 'Number("0xa") must return 10');
assert.sameValue(Number("0xA"), 10, 'Number("0xA") must return 10');
assert.sameValue(Number("0Xa"), 10, 'Number("0Xa") must return 10');
assert.sameValue(+("0XA"), 10, 'The value of `+("0XA")` is expected to be 10');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of HexDigit ::: a or of HexDigit ::: A is 10"
es5id: 9.3.1_A26
description: >
    Compare Number('0xA'), Number('0XA'), Number('0xa') and
    Number('0Xa') with 10
---*/
assert.sameValue(Number("0xa"), 10, 'Number("0xa") must return 10');
assert.sameValue(Number("0xA"), 10, 'Number("0xA") must return 10');
assert.sameValue(Number("0Xa"), 10, 'Number("0Xa") must return 10');
assert.sameValue(+("0XA"), 10, 'The value of `+("0XA")` is expected to be 10');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of HexDigit ::: b or of HexDigit ::: B is 11"
es5id: 9.3.1_A27
description: >
    Compare Number('0xB'), Number('0XB'), Number('0xb') and
    Number('0Xb') with 11
---*/
assert.sameValue(Number("0xb"), 11, 'Number("0xb") must return 11');
assert.sameValue(Number("0xB"), 11, 'Number("0xB") must return 11');
assert.sameValue(+("0Xb"), 11, 'The value of `+("0Xb")` is expected to be 11');
assert.sameValue(Number("0XB"), 11, 'Number("0XB") must return 11');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of HexDigit ::: b or of HexDigit ::: B is 11"
es5id: 9.3.1_A27
description: >
    Compare Number('0xB'), Number('0XB'), Number('0xb') and
    Number('0Xb') with 11
---*/
assert.sameValue(Number("0xb"), 11, 'Number("0xb") must return 11');
assert.sameValue(Number("0xB"), 11, 'Number("0xB") must return 11');
assert.sameValue(+("0Xb"), 11, 'The value of `+("0Xb")` is expected to be 11');
assert.sameValue(Number("0XB"), 11, 'Number("0XB") must return 11');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of HexDigit ::: c or of HexDigit ::: C is 12"
es5id: 9.3.1_A28
description: >
    Compare Number('0xC'), Number('0XC'), Number('0xc') and
    Number('0Xc') with 12
---*/
assert.sameValue(Number("0xc"), 12, 'Number("0xc") must return 12');
assert.sameValue(+("0xC"), 12, 'The value of `+("0xC")` is expected to be 12');
assert.sameValue(Number("0Xc"), 12, 'Number("0Xc") must return 12');
assert.sameValue(Number("0XC"), 12, 'Number("0XC") must return 12');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of HexDigit ::: c or of HexDigit ::: C is 12"
es5id: 9.3.1_A28
description: >
    Compare Number('0xC'), Number('0XC'), Number('0xc') and
    Number('0Xc') with 12
---*/
assert.sameValue(Number("0xc"), 12, 'Number("0xc") must return 12');
assert.sameValue(+("0xC"), 12, 'The value of `+("0xC")` is expected to be 12');
assert.sameValue(Number("0Xc"), 12, 'Number("0Xc") must return 12');
assert.sameValue(Number("0XC"), 12, 'Number("0XC") must return 12');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of HexDigit ::: d or of HexDigit ::: D is 13"
es5id: 9.3.1_A29
description: >
    Compare Number('0xD'), Number('0XD'), Number('0xd') and
    Number('0Xd') with 13
---*/
assert.sameValue(+("0xd"), 13, 'The value of `+("0xd")` is expected to be 13');
assert.sameValue(Number("0xD"), 13, 'Number("0xD") must return 13');
assert.sameValue(Number("0Xd"), 13, 'Number("0Xd") must return 13');
assert.sameValue(Number("0XD"), 13, 'Number("0XD") must return 13');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of HexDigit ::: d or of HexDigit ::: D is 13"
es5id: 9.3.1_A29
description: >
    Compare Number('0xD'), Number('0XD'), Number('0xd') and
    Number('0Xd') with 13
---*/
assert.sameValue(+("0xd"), 13, 'The value of `+("0xd")` is expected to be 13');
assert.sameValue(Number("0xD"), 13, 'Number("0xD") must return 13');
assert.sameValue(Number("0Xd"), 13, 'Number("0Xd") must return 13');
assert.sameValue(Number("0XD"), 13, 'Number("0XD") must return 13');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of StringNumericLiteral ::: StrWhiteSpace is 0"
es5id: 9.3.1_A2
description: >
    Strings with various WhiteSpaces convert to Number by explicit
    transformation
---*/
assert.sameValue(
  Number("\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000"),
  0,
  'Number("u0009u000Cu0020u00A0u000Bu000Au000Du2028u2029u1680u2000u2001u2002u2003u2004u2005u2006u2007u2008u2009u200Au202Fu205Fu3000") must return 0'
);

assert.sameValue(Number(" "), 0, 'Number(" ") must return 0');
assert.sameValue(Number("\t"), 0, 'Number("t") must return 0');
assert.sameValue(Number("\r"), 0, 'Number("r") must return 0');
assert.sameValue(Number("\n"), 0, 'Number("n") must return 0');
assert.sameValue(Number("\f"), 0, 'Number("f") must return 0');
assert.sameValue(Number("\u0009"), 0, 'Number("u0009") must return 0');
assert.sameValue(Number("\u000A"), 0, 'Number("u000A") must return 0');
assert.sameValue(Number("\u000B"), 0, 'Number("u000B") must return 0');
assert.sameValue(Number("\u000C"), 0, 'Number("u000C") must return 0');
assert.sameValue(Number("\u000D"), 0, 'Number("u000D") must return 0');
assert.sameValue(Number("\u00A0"), 0, 'Number("u00A0") must return 0');
assert.sameValue(Number("\u0020"), 0, 'Number("u0020") must return 0');
assert.sameValue(Number("\u2028"), 0, 'Number("u2028") must return 0');
assert.sameValue(Number("\u2029"), 0, 'Number("u2029") must return 0');
assert.sameValue(Number("\u1680"), 0, 'Number("u1680") must return 0');
assert.sameValue(Number("\u2000"), 0, 'Number("u2000") must return 0');
assert.sameValue(Number("\u2001"), 0, 'Number("u2001") must return 0');
assert.sameValue(Number("\u2002"), 0, 'Number("u2002") must return 0');
assert.sameValue(Number("\u2003"), 0, 'Number("u2003") must return 0');
assert.sameValue(Number("\u2004"), 0, 'Number("u2004") must return 0');
assert.sameValue(Number("\u2005"), 0, 'Number("u2005") must return 0');
assert.sameValue(Number("\u2006"), 0, 'Number("u2006") must return 0');
assert.sameValue(Number("\u2007"), 0, 'Number("u2007") must return 0');
assert.sameValue(Number("\u2008"), 0, 'Number("u2008") must return 0');
assert.sameValue(Number("\u2009"), 0, 'Number("u2009") must return 0');
assert.sameValue(Number("\u200A"), 0, 'Number("u200A") must return 0');
assert.sameValue(Number("\u202F"), 0, 'Number("u202F") must return 0');
assert.sameValue(Number("\u205F"), 0, 'Number("u205F") must return 0');
assert.sameValue(Number("\u3000"), 0, 'Number("u3000") must return 0');
// Copyright 2016 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-tonumber-applied-to-the-string-type
description: >
  Ensure U+180E is not recognized as whitespace, convert to Number by explicit transformation
info: |
  7.1.3.1 ToNumber Applied to the String Type

  If the grammar cannot interpret the String as an expansion of
  StringNumericLiteral, then the result of ToNumber is NaN.

  StringNumericLiteral :::
    StrWhiteSpace_opt StrNumericLiteral StrWhiteSpace_opt
  StrWhiteSpace :::
    StrWhiteSpaceChar StrWhiteSpace_opt
  StrWhiteSpaceChar :::
    WhiteSpace
    LineTerminator
  WhiteSpace ::
    <TAB>
    <VT>
    <FF>
    <SP>
    <NBSP>
    <ZWNBSP>
    <USP>
  <USP> ::
    Other category “Zs” code points
features: [u180e]
---*/

assert.sameValue(Number('\u180E'), NaN, 'Number("\\u180E") === NaN. Actual: ' + (Number("\u180E")));
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of HexDigit ::: e or of HexDigit ::: E is 14"
es5id: 9.3.1_A30
description: >
    Compare Number('0xE'), Number('0XE'), Number('0xe') and
    Number('0Xe') with 14
---*/
assert.sameValue(Number("0xe"), 14, 'Number("0xe") must return 14');
assert.sameValue(Number("0xE"), 14, 'Number("0xE") must return 14');
assert.sameValue(Number("0Xe"), 14, 'Number("0Xe") must return 14');
assert.sameValue(+("0XE"), 14, 'The value of `+("0XE")` is expected to be 14');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of HexDigit ::: e or of HexDigit ::: E is 14"
es5id: 9.3.1_A30
description: >
    Compare Number('0xE'), Number('0XE'), Number('0xe') and
    Number('0Xe') with 14
---*/
assert.sameValue(Number("0xe"), 14, 'Number("0xe") must return 14');
assert.sameValue(Number("0xE"), 14, 'Number("0xE") must return 14');
assert.sameValue(Number("0Xe"), 14, 'Number("0Xe") must return 14');
assert.sameValue(+("0XE"), 14, 'The value of `+("0XE")` is expected to be 14');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of HexDigit ::: f or of HexDigit ::: F is 15"
es5id: 9.3.1_A31
description: >
    Compare Number('0xF'), Number('0XF'), Number('0xf') and
    Number('0Xf') with 15
---*/
assert.sameValue(Number("0xf"), 15, 'Number("0xf") must return 15');
assert.sameValue(Number("0xF"), 15, 'Number("0xF") must return 15');
assert.sameValue(+("0Xf"), 15, 'The value of `+("0Xf")` is expected to be 15');
assert.sameValue(Number("0XF"), 15, 'Number("0XF") must return 15');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "The MV of HexDigit ::: f or of HexDigit ::: F is 15"
es5id: 9.3.1_A31
description: >
    Compare Number('0xF'), Number('0XF'), Number('0xf') and
    Number('0Xf') with 15
---*/
assert.sameValue(Number("0xf"), 15, 'Number("0xf") must return 15');
assert.sameValue(Number("0xF"), 15, 'Number("0xF") must return 15');
assert.sameValue(+("0Xf"), 15, 'The value of `+("0Xf")` is expected to be 15');
assert.sameValue(Number("0XF"), 15, 'Number("0XF") must return 15');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Once the exact MV for a string numeric literal has been
    determined, it is then rounded to a value of the Number type with 20
    significant digits by replacing each significant digit after the 20th
    with a 0 digit or the number value
es5id: 9.3.1_A32
description: Use various long numbers, for example, 1234567890.1234567890
---*/
assert.sameValue(
  Number("1234567890.1234567890"),
  1234567890.1234567890,
  'Number("1234567890.1234567890") must return 1234567890.1234567890'
);

assert.sameValue(
  Number("1234567890.1234567890"),
  1234567890.1234567000,
  'Number("1234567890.1234567890") must return 1234567890.1234567000'
);

assert.notSameValue(
  +("1234567890.1234567890"),
  1234567890.123456,
  'The value of +("1234567890.1234567890") is not 1234567890.123456'
);

assert.sameValue(
  Number("0.12345678901234567890"),
  0.123456789012345678,
  'Number("0.12345678901234567890") must return 0.123456789012345678'
);

assert.sameValue(
  Number("00.12345678901234567890"),
  0.123456789012345678,
  'Number("00.12345678901234567890") must return 0.123456789012345678'
);
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Once the exact MV for a string numeric literal has been
    determined, it is then rounded to a value of the Number type with 20
    significant digits by replacing each significant digit after the 20th
    with a 0 digit or the number value
es5id: 9.3.1_A32
description: Use various long numbers, for example, 1234567890.1234567890
---*/
assert.sameValue(
  Number("1234567890.1234567890"),
  1234567890.1234567890,
  'Number("1234567890.1234567890") must return 1234567890.1234567890'
);

assert.sameValue(
  Number("1234567890.1234567890"),
  1234567890.1234567000,
  'Number("1234567890.1234567890") must return 1234567890.1234567000'
);

assert.notSameValue(
  +("1234567890.1234567890"),
  1234567890.123456,
  'The value of +("1234567890.1234567890") is not 1234567890.123456'
);

assert.sameValue(
  Number("0.12345678901234567890"),
  0.123456789012345678,
  'Number("0.12345678901234567890") must return 0.123456789012345678'
);

assert.sameValue(
  Number("00.12345678901234567890"),
  0.123456789012345678,
  'Number("00.12345678901234567890") must return 0.123456789012345678'
);
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StringNumericLiteral ::: StrWhiteSpaceopt StrNumericLiteral
    StrWhiteSpaceopt is the MV of StrNumericLiteral, no matter whether white
    space is present or not
es5id: 9.3.1_A3_T1
description: static string
---*/
assert.sameValue(
  Number("\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000"),
  0
);

assert.sameValue(
  Number("\u0009\u000C\u0020\u00A0\u000A\u000D\u2028\u2029\u000B\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u30001234567890\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000"),
  1234567890
);

assert.sameValue(
  +("\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000Infinity\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000"),
  Infinity
);

assert.sameValue(
  Number("\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000-Infinity\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000"),
  -Infinity
);


// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StringNumericLiteral ::: StrWhiteSpaceopt StrNumericLiteral
    StrWhiteSpaceopt is the MV of StrNumericLiteral, no matter whether white
    space is present or not
es5id: 9.3.1_A3_T1
description: static string
---*/
assert.sameValue(
  Number("\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000"),
  0
);

assert.sameValue(
  Number("\u0009\u000C\u0020\u00A0\u000A\u000D\u2028\u2029\u000B\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u30001234567890\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000"),
  1234567890
);

assert.sameValue(
  Number("\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000Infinity\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000"),
  Infinity
);

assert.sameValue(
  Number("\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000-Infinity\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000"),
  -Infinity
);
// Copyright 2016 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-tonumber-applied-to-the-string-type
description: >
  Ensure U+180E is not recognized as whitespace, test ToNumber with static string
info: |
  7.1.3.1 ToNumber Applied to the String Type

  If the grammar cannot interpret the String as an expansion of
  StringNumericLiteral, then the result of ToNumber is NaN.

  StringNumericLiteral :::
    StrWhiteSpace_opt StrNumericLiteral StrWhiteSpace_opt
  StrWhiteSpace :::
    StrWhiteSpaceChar StrWhiteSpace_opt
  StrWhiteSpaceChar :::
    WhiteSpace
    LineTerminator
  WhiteSpace ::
    <TAB>
    <VT>
    <FF>
    <SP>
    <NBSP>
    <ZWNBSP>
    <USP>
  <USP> ::
    Other category “Zs” code points
features: [u180e]
---*/

// CHECK#1
assert.sameValue(Number('\u180E'), NaN, 'Number("\\u180E") === NaN');

// CHECK#2
assert.sameValue(Number('\u180E1234567890\u180E'), NaN, 'Number("\u180E1234567890\u180E") === NaN');

// CHECK#3
assert.sameValue(Number('\u180EInfinity\u180E'), NaN, 'Number("\u180EInfinity\u180E") === NaN');

// CHECK#4
assert.sameValue(Number('\u180E-Infinity\u180E'), NaN, 'Number("\u180E-Infinity\u180E") === NaN');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StringNumericLiteral ::: StrWhiteSpaceopt StrNumericLiteral
    StrWhiteSpaceopt is the MV of StrNumericLiteral, no matter whether white
    space is present or not
es5id: 9.3.1_A3_T2
description: dynamic string
---*/

assert.sameValue(
  Number(dynaString("\u0009\u000C\u0020\u00A0\u000B", "\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000")),
  0
);

assert.sameValue(
  +(dynaString("\u0009\u000C\u0020\u00A0\u000A\u000D\u2028\u2029\u000B12345", "67890\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000")),
  1234567890
);

assert.sameValue(
  Number(dynaString("\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029Infi", "nity\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000")),
  Infinity
);

assert.sameValue(
  Number(dynaString("\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029-Infi", "nity\u0009\u000C\u0020\u00A0\u000B\u000A\u000D\u2028\u2029\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000")),
  -Infinity
);
// Copyright 2016 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-tonumber-applied-to-the-string-type
description: >
  Ensure U+180E is not recognized as whitespace, test ToNumber with dynamic string
info: |
  7.1.3.1 ToNumber Applied to the String Type

  If the grammar cannot interpret the String as an expansion of
  StringNumericLiteral, then the result of ToNumber is NaN.

  StringNumericLiteral :::
    StrWhiteSpace_opt StrNumericLiteral StrWhiteSpace_opt
  StrWhiteSpace :::
    StrWhiteSpaceChar StrWhiteSpace_opt
  StrWhiteSpaceChar :::
    WhiteSpace
    LineTerminator
  WhiteSpace ::
    <TAB>
    <VT>
    <FF>
    <SP>
    <NBSP>
    <ZWNBSP>
    <USP>
  <USP> ::
    Other category “Zs” code points
features: [u180e]
---*/

// CHECK#1
assert.sameValue(Number(dynaString("", "\u180E")), NaN, 'Number(dynaString("", "\u180E")) === NaN');

// CHECK#2
assert.sameValue(+(dynaString("12345", "67890\u180E")), NaN, '+(dynaString("12345", "67890\u180E")) === NaN');

// CHECK#3
assert.sameValue(Number(dynaString("Infi", "nity\u180E")), NaN, 'Number(dynaString("Infi", "nity\u180E")) === NaN');

// CHECK#4
assert.sameValue(Number(dynaString("-Infi", "nity\u180E")), NaN, 'Number(dynaString("-Infi", "nity\u180E")) === NaN');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrDecimalLiteral::: + StrUnsignedDecimalLiteral is the MV of
    StrUnsignedDecimalLiteral
es5id: 9.3.1_A4_T1
description: Compare Number('+any_number') with Number('any_number')
---*/
assert.sameValue(Number("+0"), Number("0"), 'Number("+0") must return the same value returned by Number("0")');

assert.sameValue(
  Number("+Infinity"),
  Infinity
);

assert.sameValue(
  Number("+1234.5678"),
  1234.5678
);

assert.sameValue(
  Number("+1234.5678e90"),
  1234.5678e90
);

assert.sameValue(
  Number("+1234.5678E90"),
  1234.5678E90
);

assert.sameValue(
  Number("+1234.5678e-90"),
  1234.5678e-90
);

assert.sameValue(
  Number("+1234.5678E-90"),
  1234.5678E-90
);
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrDecimalLiteral::: + StrUnsignedDecimalLiteral is the MV of
    StrUnsignedDecimalLiteral
es5id: 9.3.1_A4_T2
description: Compare Number('+' + 'any_number') with Number('any_number')
---*/

assert.sameValue(
  Number(dynaString("+", "0")),
  0
);

assert.sameValue(
  Number(dynaString("+Infi", "nity")),
  Infinity
);

assert.sameValue(
  Number(dynaString("+1234.", "5678")),
  1234.5678
);

assert.sameValue(
  Number(dynaString("+1234.", "5678e90")),
  1234.5678e90
);

assert.sameValue(
  Number(dynaString("+1234.", "5678E90")),
  1234.5678E90
);

assert.sameValue(
  Number(dynaString("+1234.", "5678e-90")),
  1234.5678e-90
);

assert.sameValue(
  Number(dynaString("+1234.", "5678E-90")),
  1234.5678E-90
);
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrDecimalLiteral::: - StrUnsignedDecimalLiteral is the negative
    of the MV of StrUnsignedDecimalLiteral. (the negative of this 0 is also 0)
es5id: 9.3.1_A5_T1
description: Compare Number('-any_number') with -Number('any_number')
---*/
assert.sameValue(Number("-0"), -0);
assert.sameValue(Number("-Infinity"), -Infinity);

assert.sameValue(
  Number("-1234567890"),
  -1234567890
);

assert.sameValue(Number("-1234.5678"), -1234.5678);

assert.sameValue(
  Number("-1234.5678e90"),
  -1234.5678e90
);

assert.sameValue(
  Number("-1234.5678E90"),
  -1234.5678E90
);

assert.sameValue(
  Number("-1234.5678e-90"),
  -1234.5678e-90
);

assert.sameValue(
  Number("-1234.5678E-90"),
  -1234.5678E-90
);

assert.sameValue(
  Number("-Infinity"),
  Number.NEGATIVE_INFINITY
);
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrDecimalLiteral::: - StrUnsignedDecimalLiteral is the negative
    of the MV of StrUnsignedDecimalLiteral. (the negative of this 0 is also 0)
es5id: 9.3.1_A5_T2
description: Compare Number('-[or +]any_number') with -[or without -]any_number)
---*/
assert.sameValue(Number("1"), 1, 'Number("1") must return 1');
assert.sameValue(Number("+1"), 1, 'Number("+1") must return 1');
assert.sameValue(Number("-1"), -1, 'Number("-1") must return -1');
assert.sameValue(Number("2"), 2, 'Number("2") must return 2');
assert.sameValue(Number("+2"), 2, 'Number("+2") must return 2');
assert.sameValue(Number("-2"), -2, 'Number("-2") must return -2');
assert.sameValue(Number("3"), 3, 'Number("3") must return 3');
assert.sameValue(Number("+3"), 3, 'Number("+3") must return 3');
assert.sameValue(Number("-3"), -3, 'Number("-3") must return -3');
assert.sameValue(Number("4"), 4, 'Number("4") must return 4');
assert.sameValue(Number("+4"), 4, 'Number("+4") must return 4');
assert.sameValue(Number("-4"), -4, 'Number("-4") must return -4');
assert.sameValue(Number("5"), 5, 'Number("5") must return 5');
assert.sameValue(Number("+5"), 5, 'Number("+5") must return 5');
assert.sameValue(Number("-5"), -5, 'Number("-5") must return -5');
assert.sameValue(Number("6"), 6, 'Number("6") must return 6');
assert.sameValue(Number("+6"), 6, 'Number("+6") must return 6');
assert.sameValue(Number("-6"), -6, 'Number("-6") must return -6');
assert.sameValue(Number("7"), 7, 'Number("7") must return 7');
assert.sameValue(Number("+7"), 7, 'Number("+7") must return 7');
assert.sameValue(Number("-7"), -7, 'Number("-7") must return -7');
assert.sameValue(Number("8"), 8, 'Number("8") must return 8');
assert.sameValue(Number("+8"), 8, 'Number("+8") must return 8');
assert.sameValue(Number("-8"), -8, 'Number("-8") must return -8');
assert.sameValue(Number("9"), 9, 'Number("9") must return 9');
assert.sameValue(Number("+9"), 9, 'Number("+9") must return 9');
assert.sameValue(Number("-9"), -9, 'Number("-9") must return -9');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrDecimalLiteral::: - StrUnsignedDecimalLiteral is the negative
    of the MV of StrUnsignedDecimalLiteral. (the negative of this 0 is also 0)
es5id: 9.3.1_A5_T3
description: Compare Number('-' + 'any_number') with -Number('any_number')
---*/

assert.sameValue(Number(dynaString("-", "0")), -0, 'Number(dynaString("-", "0")) must return -Number("0")');

assert.sameValue(
  Number(dynaString("-Infi", "nity")),
  -Infinity
);

assert.sameValue(
  Number(dynaString("-12345", "67890")),
  -1234567890
);

assert.sameValue(
  Number(dynaString("-1234.", "5678")),
  -1234.5678
);

assert.sameValue(
  Number(dynaString("-1234.", "5678e90")),
  -1234.5678e90
);

assert.sameValue(
  Number(dynaString("-1234.", "5678E90")),
  -1234.5678E90
);

assert.sameValue(
  Number(dynaString("-1234.", "5678e-90")),
  -1234.5678e-90
);

assert.sameValue(
  Number(dynaString("-1234.", "5678E-90")),
  -1234.5678E-90
);

assert.sameValue(
  Number(dynaString("-Infi", "nity")),
  Number.NEGATIVE_INFINITY
);


// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrDecimalLiteral::: - StrUnsignedDecimalLiteral is the negative
    of the MV of StrUnsignedDecimalLiteral. (the negative of this 0 is also 0)
es5id: 9.3.1_A5_T3
description: Compare Number('-' + 'any_number') with -Number('any_number')
---*/

assert.sameValue(Number(dynaString("-", "0")), -0, 'Number(dynaString("-", "0")) must return -Number("0")');

assert.sameValue(
  Number(dynaString("-Infi", "nity")),
  -Infinity
);

assert.sameValue(
  Number(dynaString("-12345", "67890")),
  -1234567890
);

assert.sameValue(
  Number(dynaString("-1234.", "5678")),
  -1234.5678
);

assert.sameValue(
  Number(dynaString("-1234.", "5678e90")),
  -1234.5678e90
);

assert.sameValue(
  Number(dynaString("-1234.", "5678E90")),
  -1234.5678E90
);

assert.sameValue(
  Number(dynaString("-1234.", "5678e-90")),
  -1234.5678e-90
);

assert.sameValue(
  Number(dynaString("-1234.", "5678E-90")),
  -1234.5678E-90
);

assert.sameValue(
  Number(dynaString("-Infi", "nity")),
  Number.NEGATIVE_INFINITY
);
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrUnsignedDecimalLiteral::: Infinity is 10<sup><small>10000</small></sup>
    (a value so large that it will round to <b><tt>+&infin;</tt></b>)
es5id: 9.3.1_A6_T1
description: >
    Compare Number('Infinity') with Number.POSITIVE_INFINITY,
    10e10000, 10E10000 and Number("10e10000")
---*/
assert.sameValue(Number("Infinity"), Number.POSITIVE_INFINITY, 'Number("Infinity") returns Number.POSITIVE_INFINITY');
assert.sameValue(Number("Infinity"), 10e10000, 'Number("Infinity") must return 10e10000');
assert.sameValue(Number("Infinity"), 10E10000, 'Number("Infinity") must return 10E10000');

assert.sameValue(
  Number("Infinity"),
  10e10000,
  'Number("Infinity") must return the same value returned by Number("10e10000")'
);
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrUnsignedDecimalLiteral::: Infinity is 10<sup><small>10000</small></sup>
    (a value so large that it will round to <b><tt>+&infin;</tt></b>)
es5id: 9.3.1_A6_T2
description: >
    Compare Number('Infi'+'nity') with Number.POSITIVE_INFINITY,
    10e10000, 10E10000 and Number("10e10000")
---*/


assert.sameValue(
  Number(dynaString("Infi", "nity")),
  Number.POSITIVE_INFINITY,
  'Number(dynaString("Infi", "nity")) returns Number.POSITIVE_INFINITY'
);

assert.sameValue(
  Number(dynaString("Infi", "nity")),
  10e10000,
  'Number(dynaString("Infi", "nity")) must return 10e10000'
);

assert.sameValue(
  Number(dynaString("Infi", "nity")),
  10E10000,
  'Number(dynaString("Infi", "nity")) must return 10E10000'
);

assert.sameValue(
  Number(dynaString("Infi", "nity")),
  Number("10e10000"),
  'Number(dynaString("Infi", "nity")) must return the same value returned by Number("10e10000")'
);
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrUnsignedDecimalLiteral::: DecimalDigits. DecimalDigits
    is the MV of the first DecimalDigits plus the MV of the second DecimalDigits times
    10<sup><small>-n</small></sup>, where n is the number of characters in the second DecimalDigits
es5id: 9.3.1_A7
description: Compare Number('1234.5678') with Number('1234')+(+('5678')*1e-4)
---*/
assert.sameValue(
  Number("1234.5678"),
  1234.5678,
  'Number("1234.5678") must return Number("1234") + (+("5678") * 1e-4)'
);
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrUnsignedDecimalLiteral::: DecimalDigits. ExponentPart
    is the MV of DecimalDigits times 10<sup><small>e</small></sup> , where e is the MV of ExponentPart
es5id: 9.3.1_A8
description: >
    Compare Number('1234e5') and Number('1234.e5') with
    Number('1234')*1e5
---*/
assert.sameValue(Number("1234e5"), 123400000, 'Number("1234e5") must return 123400000');
assert.sameValue(Number("1234.e5"), 123400000, 'Number("1234.e5") must return 123400000');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The MV of StrUnsignedDecimalLiteral::: DecimalDigits. DecimalDigits ExponentPart
    is (the MV of the first DecimalDigits plus (the MV of the second DecimalDigits times
    10<sup><small>-n</small></sup>)) times 10<sup><small>e</small></sup>, where n is the number
    of characters in the second DecimalDigits and e is the MV of ExponentPart
es5id: 9.3.1_A9
description: >
    Compare Number('1234.5678e9') with
    (Number('1234')+(Number('5678')*1e-4))*1e9,  and +('1234.5678e-9')
    with (Number('1234')+(Number('5678')*1e-4))*1e-9
---*/
assert.sameValue(
  (Number("1234") + (Number("5678") * 1e-4)) * 1e9,
  1234.5678e9,
  'Number("1234.5678e9") must return (Number("1234") + (Number("5678") * 1e-4)) * 1e9'
);

assert.sameValue(
  (Number("1234") + (Number("5678") * 1e-4)) * 1e-9,
  1234.5678e-9,
  'The value of `+("1234.5678e-9")` is expected to be (Number("1234") + (Number("5678") * 1e-4)) * 1e-9'
);

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Result of number conversion from undefined value is NaN
es5id: 9.3_A1_T1
description: Undefined convert to Number by explicit transformation
---*/

assert.sameValue(Number(undefined), undefined);
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Result of number conversion from null value is +0
es5id: 9.3_A2_T1
description: null convert to Number by explicit transformation
---*/
assert.sameValue(Number(null), 0, 'Number(null) must return 0');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Result of number conversion from boolean value is 1 if the argument is
    true, else is +0
es5id: 9.3_A3_T1
description: False and true convert to Number by explicit transformation
---*/
assert.sameValue(Number(false), +0, 'Number(false) must return +0');
assert.sameValue(Number(true), 1, 'Number(true) must return 1');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Result of number conversion from number value equals to the input
    argument (no conversion)
es5id: 9.3_A4.1_T1
description: >
    Some numbers including Number.MAX_VALUE and Number.MIN_VALUE are
    converted to Number with explicit transformation
---*/
assert.sameValue(Number(13), 13, 'Number(13) must return 13');
assert.sameValue(Number(-13), -13, 'Number(-13) must return -13');
assert.sameValue(Number(1.3), 1.3, 'Number(1.3) must return 1.3');
assert.sameValue(Number(-1.3), -1.3, 'Number(-1.3) must return -1.3');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Result of number conversion from number value equals to the input
    argument (no conversion)
es5id: 9.3_A4.2_T1
description: >
    Number.NaN, +0, -0, Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY,  Number.MAX_VALUE and Number.MIN_VALUE
    convert to Number by explicit transformation
---*/

// CHECK#1
assert.sameValue(Number(NaN), NaN, 'Number(true) returns NaN');

assert.sameValue(Number(+0), +0, 'Number(+0) must return +0');
assert.sameValue(Number(-0), -0, 'Number(-0) must return -0');

assert.sameValue(
  Number(Number.POSITIVE_INFINITY),
  Number.POSITIVE_INFINITY,
  'Number(Number.POSITIVE_INFINITY) returns Number.POSITIVE_INFINITY'
);

assert.sameValue(
  Number(Number.NEGATIVE_INFINITY),
  Number.NEGATIVE_INFINITY,
  'Number(Number.NEGATIVE_INFINITY) returns Number.NEGATIVE_INFINITY'
);

assert.sameValue(Number(Number.MAX_VALUE), Number.MAX_VALUE, 'Number(Number.MAX_VALUE) returns Number.MAX_VALUE');
assert.sameValue(Number(Number.MIN_VALUE), Number.MIN_VALUE, 'Number(Number.MIN_VALUE) returns Number.MIN_VALUE');
// Copyright 2009 the Sputnik authors.  All rights reserved.
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.1.1
description: Invalid binary literals yield NaN
info: |
    BinaryIntegerLiteral ::
      0b BinaryDigits
      0B BinaryDigits
    BinaryDigits ::
      BinaryDigit
      BinaryDigits BinaryDigit
    BinaryDigit :: one of
      0 1
---*/

assert.sameValue(Number('0b2'), NaN, 'invalid digit');
assert.sameValue(Number('00b0'), NaN, 'leading zero');
assert.sameValue(Number('0b'), NaN, 'omitted digits');
assert.sameValue(Number('+0b1'), NaN, 'plus sign');
assert.sameValue(Number('-0b1'), NaN, 'minus sign');
assert.sameValue(Number('0b1.01'), NaN, 'fractional part');
assert.sameValue(Number('0b1e10'), NaN, 'exponent part');
assert.sameValue(Number('0b1e-10'), NaN, 'exponent part with a minus sign');
assert.sameValue(Number('0b1e+10'), NaN, 'exponent part with a plus sign');
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.1.1
description: Mathematical value of valid binary integer literals
info: |
    20.1.1.1 Number ( [ value ] )

    When Number is called with argument number, the following steps are taken:

    1. If no arguments were passed to this function invocation, let n be +0.
    2. Else, let n be ToNumber(value).

    [...]

    7.1.3.1 ToNumber Applied to the String Type

    All grammar symbols not explicitly defined above have the definitions used
    in the Lexical Grammar for numeric literals (11.8.3)

    [...]

    The MV of BinaryIntegerLiteral :: 0b BinaryDigits is the MV of
    BinaryDigits.
    The MV of BinaryIntegerLiteral :: 0B BinaryDigits is the MV of
    BinaryDigits.
    The MV of BinaryDigits :: BinaryDigit is the MV of BinaryDigit.
    The MV of BinaryDigits :: BinaryDigits BinaryDigit is (the MV of
    BinaryDigits × 2) plus the MV of BinaryDigit.
---*/

assert.sameValue(Number('0b0'), 0, 'lower-case head');
assert.sameValue(Number('0B0'), 0, 'upper-case head');
assert.sameValue(Number('0b00'), 0, 'lower-case head with leading zeros');
assert.sameValue(Number('0B00'), 0, 'upper-case head with leading zeros');

assert.sameValue(Number('0b1'), 1, 'lower-case head');
assert.sameValue(Number('0B1'), 1, 'upper-case head');
assert.sameValue(Number('0b01'), 1, 'lower-case head with leading zeros');
assert.sameValue(Number('0B01'), 1, 'upper-case head with leading zeros');

assert.sameValue(Number('0b10'), 2, 'lower-case head');
assert.sameValue(Number('0B10'), 2, 'upper-case head');
assert.sameValue(Number('0b010'), 2, 'lower-case head with leading zeros');
assert.sameValue(Number('0B010'), 2, 'upper-case head with leading zeros');

assert.sameValue(Number('0b11'), 3, 'lower-case head');
assert.sameValue(Number('0B11'), 3, 'upper-case head');
assert.sameValue(Number('0b011'), 3, 'lower-case head with leading zeros');
assert.sameValue(Number('0B011'), 3, 'upper-case head with leading zeros');
// Copyright (C) 2017 Ivan Vyshnevskyi. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-number-constructor-number-value
description: Invalid hex literals yield NaN
info: |
    HexIntegerLiteral ::
      0x HexDigits
      0X HexDigits
    HexDigits ::
      HexDigit
      HexDigits HexDigit
    HexDigit :: one of
      0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F
---*/

assert.sameValue(Number('0xG'), NaN, 'invalid digit');
assert.sameValue(Number('00x0'), NaN, 'leading zero');
assert.sameValue(Number('0x'), NaN, 'omitted digits');
assert.sameValue(Number('+0x10'), NaN, 'plus sign');
assert.sameValue(Number('-0x10'), NaN, 'minus sign');
assert.sameValue(Number('0x10.01'), NaN, 'fractional part');
assert.sameValue(Number('0x1e-10'), NaN, 'exponent part with a minus sign');
assert.sameValue(Number('0x1e+10'), NaN, 'exponent part with a plus sign');
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0b` | `0B` BinaryDigit NumericLiteralSeparator BinaryDigit

  NumericLiteralSeparator ::
    _

  BinaryIntegerLiteral ::
    0b BinaryDigits
    0B BinaryDigits

  BinaryDigits ::
    BinaryDigit
    BinaryDigits BinaryDigit
    BinaryDigits NumericLiteralSeparator BinaryDigit

  BinaryDigit :: one of
    0 1

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0b0_1"), NaN, "0b0_1");
assert.sameValue(Number("0B0_1"), NaN, "0B0_1");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0b` | `0B` BinaryDigit NumericLiteralSeparator BinaryDigit

  NumericLiteralSeparator ::
    _

  BinaryIntegerLiteral ::
    0b BinaryDigits
    0B BinaryDigits

  BinaryDigits ::
    BinaryDigit
    BinaryDigits BinaryDigit
    BinaryDigits NumericLiteralSeparator BinaryDigit

  BinaryDigit :: one of
    0 1

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0b0_10"), NaN, "0b0_10");
assert.sameValue(Number("0B0_10"), NaN, "0B0_10");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0b` | `0B` BinaryDigits NumericLiteralSeparator BinaryDigit

  NumericLiteralSeparator ::
    _

  BinaryIntegerLiteral ::
    0b BinaryDigits
    0B BinaryDigits

  BinaryDigits ::
    BinaryDigit
    BinaryDigits BinaryDigit
    BinaryDigits NumericLiteralSeparator BinaryDigit

  BinaryDigit :: one of
    0 1

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0b01_0"), NaN, "0b01_0");
assert.sameValue(Number("0B01_0"), NaN, "0B01_0");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0b` | `0B` BinaryDigits NumericLiteralSeparator BinaryDigit

  NumericLiteralSeparator ::
    _

  BinaryIntegerLiteral ::
    0b BinaryDigits
    0B BinaryDigits

  BinaryDigits ::
    BinaryDigit
    BinaryDigits BinaryDigit
    BinaryDigits NumericLiteralSeparator BinaryDigit

  BinaryDigit :: one of
    0 1

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0b01_00"), NaN, "0b01_00");
assert.sameValue(Number("0B01_00"), NaN, "0B01_00");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  DecimalDigits `.` DecimalDigits ExponentPart_opt `-` DecimalDigits

  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    DecimalIntegerLiteral . DecimalDigits_opt ExponentPart_opt

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  SignedInteger ::
    ...
    - DecimalDigits
    ...

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("1.0e-1_0"), NaN, "1.0e-1_0");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  DecimalDigits `.` DecimalDigits ExponentPart_opt `-` DecimalDigits

  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    DecimalIntegerLiteral . DecimalDigits_opt ExponentPart_opt

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  SignedInteger ::
    ...
    - DecimalDigits
    ...

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("1.0e-10_0"), NaN, "1.0e-10_0");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  DecimalDigits `.` DecimalDigits ExponentPart_opt `+` DecimalDigits

  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    DecimalIntegerLiteral . DecimalDigits_opt ExponentPart_opt

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  SignedInteger ::
    ...
    + DecimalDigits
    ...

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("1.0e+1_0"), NaN, "1.0e+1_0");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  DecimalDigits `.` DecimalDigits ExponentPart_opt `+` DecimalDigits

  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    DecimalIntegerLiteral . DecimalDigits_opt ExponentPart_opt

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  SignedInteger ::
    ...
    + DecimalDigits
    ...

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("1.0e+10_0"), NaN, "1.0e+10_0");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  NonZeroDigit NumericLiteralSeparator DecimalDigits

  NumericLiteralSeparator ::
    _

  DecimalIntegerLiteral ::
    ...
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits


  DecimalDigits ::
    DecimalDigit
    ...

  DecimalDigit :: one of
    0 1 2 3 4 5 6 7 8 9

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("1_0"), NaN, "1_0");
assert.sameValue(Number("1_1"), NaN, "1_1");
assert.sameValue(Number("1_2"), NaN, "1_2");
assert.sameValue(Number("1_3"), NaN, "1_3");
assert.sameValue(Number("1_4"), NaN, "1_4");
assert.sameValue(Number("1_5"), NaN, "1_5");
assert.sameValue(Number("1_6"), NaN, "1_6");
assert.sameValue(Number("1_7"), NaN, "1_7");
assert.sameValue(Number("1_8"), NaN, "1_8");
assert.sameValue(Number("1_9"), NaN, "1_9");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  DecimalDigits `.` DecimalDigits NumericLiteralSeparator DecimalDigits
  ExponentPart SignedInteger

  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    . DecimalDigits ExponentPart_opt

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  ExponentIndicator :: one of
    e E

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("10.00_01e2"), NaN, "10.00_01e2");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: DecimalDigits NumericLiteralSeparator DecimalDigit
info: |
  NumericLiteralSeparator :: _

  DecimalDigits ::
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit
features: [numeric-separator-literal]
---*/

assert.sameValue(Number("123456789_0"), NaN, "123456789_0");
assert.sameValue(Number("123456789_1"), NaN, "123456789_1");
assert.sameValue(Number("123456789_2"), NaN, "123456789_2");
assert.sameValue(Number("123456789_3"), NaN, "123456789_3");
assert.sameValue(Number("123456789_4"), NaN, "123456789_4");
assert.sameValue(Number("123456789_5"), NaN, "123456789_5");
assert.sameValue(Number("123456789_6"), NaN, "123456789_6");
assert.sameValue(Number("123456789_7"), NaN, "123456789_7");
assert.sameValue(Number("123456789_8"), NaN, "123456789_8");
assert.sameValue(Number("123456789_9"), NaN, "123456789_9");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `.` DecimalDigit NumericLiteralSeparator DecimalDigit ExponentPart

  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    . DecimalDigits ExponentPart_opt

  DecimalDigits ::
    DecimalDigit
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  ExponentIndicator :: one of
    e E

features: [numeric-separator-literal]
---*/

assert.sameValue(Number(".0_1e2"), NaN, ".0_1e2");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `.` DecimalDigit NumericLiteralSeparator DecimalDigits ExponentPart

  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    . DecimalDigits ExponentPart_opt

  DecimalDigits ::
    DecimalDigit
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  ExponentIndicator :: one of
    e E

features: [numeric-separator-literal]
---*/

assert.sameValue(Number(".1_01e2"), NaN, ".1_01e2");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `.` DecimalDigits NumericLiteralSeparator DecimalDigit ExponentPart

  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    . DecimalDigits ExponentPart_opt

  DecimalDigits ::
    DecimalDigit
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  ExponentIndicator :: one of
    e E

features: [numeric-separator-literal]
---*/

assert.sameValue(Number(".10_1e2"), NaN, ".10_1e2");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `.` DecimalDigits NumericLiteralSeparator DecimalDigits ExponentPart

  NumericLiteralSeparator ::
    _

  DecimalLiteral ::
    . DecimalDigits ExponentPart_opt

  DecimalDigits ::
    DecimalDigit
    ...
    DecimalDigits NumericLiteralSeparator DecimalDigit

  ExponentIndicator :: one of
    e E

features: [numeric-separator-literal]
---*/

assert.sameValue(Number(".00_01e2"), NaN, ".00_01e2");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0x` | `0X` HexDigit NumericLiteralSeparator HexDigit

  NumericLiteralSeparator ::
    _

  HexIntegerLiteral ::
    0x HexDigits
    0X HexDigits

  HexDigits ::
    HexDigit
    HexDigits HexDigit
    HexDigits NumericLiteralSeparator HexDigit

  HexDigit::one of
    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0x0_1"), NaN, "0x0_1");
assert.sameValue(Number("0X0_1"), NaN, "0X0_1");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0x` | `0X` HexDigit NumericLiteralSeparator HexDigit

  NumericLiteralSeparator ::
    _

  HexIntegerLiteral ::
    0x HexDigits
    0X HexDigits

  HexDigits ::
    HexDigit
    HexDigits HexDigit
    HexDigits NumericLiteralSeparator HexDigit

  HexDigit::one of
    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0x0_10"), NaN, "0x0_10");
assert.sameValue(Number("0X0_10"), NaN, "0X0_10");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0x` | `0X` HexDigits NumericLiteralSeparator HexDigit

  NumericLiteralSeparator ::
    _

  HexIntegerLiteral ::
    0x HexDigits
    0X HexDigits

  HexDigits ::
    HexDigit
    HexDigits HexDigit
    HexDigits NumericLiteralSeparator HexDigit

  HexDigit::one of
    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0x01_0"), NaN, "0x01_0");
assert.sameValue(Number("0X01_0"), NaN, "0X01_0");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0x` | `0X` HexDigits NumericLiteralSeparator HexDigit

  NumericLiteralSeparator ::
    _

  HexIntegerLiteral ::
    0x HexDigits
    0X HexDigits

  HexDigits ::
    HexDigit
    HexDigits HexDigit
    HexDigits NumericLiteralSeparator HexDigit

  HexDigit::one of
    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0x01_00"), NaN, "0x01_00");
assert.sameValue(Number("0X01_00"), NaN, "0X01_00");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0x` | `0X` HexDigit NumericLiteralSeparator HexDigit

  NumericLiteralSeparator ::
    _

  HexIntegerLiteral ::
    0x HexDigits
    0X HexDigits

  HexDigits ::
    HexDigit
    HexDigits HexDigit
    HexDigits NumericLiteralSeparator HexDigit

  HexDigit::one of
    0 1 2 3 4 5 6 7 8 9 a b c d e f A B C D E F

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0x0_0"), NaN, "0x0_0");
assert.sameValue(Number("0x1_1"), NaN, "0x1_1");
assert.sameValue(Number("0x2_2"), NaN, "0x2_2");
assert.sameValue(Number("0x3_3"), NaN, "0x3_3");
assert.sameValue(Number("0x4_4"), NaN, "0x4_4");
assert.sameValue(Number("0x5_5"), NaN, "0x5_5");
assert.sameValue(Number("0x6_6"), NaN, "0x6_6");
assert.sameValue(Number("0x7_7"), NaN, "0x7_7");
assert.sameValue(Number("0x8_8"), NaN, "0x8_8");
assert.sameValue(Number("0x9_9"), NaN, "0x9_9");
assert.sameValue(Number("0xa_a"), NaN, "0xa_a");
assert.sameValue(Number("0xb_b"), NaN, "0xb_b");
assert.sameValue(Number("0xc_c"), NaN, "0xc_c");
assert.sameValue(Number("0xd_d"), NaN, "0xd_d");
assert.sameValue(Number("0xe_e"), NaN, "0xe_e");
assert.sameValue(Number("0xf_f"), NaN, "0xf_f");
assert.sameValue(Number("0xA_A"), NaN, "0xA_A");
assert.sameValue(Number("0xB_B"), NaN, "0xB_B");
assert.sameValue(Number("0xC_C"), NaN, "0xC_C");
assert.sameValue(Number("0xD_D"), NaN, "0xD_D");
assert.sameValue(Number("0xE_E"), NaN, "0xE_E");
assert.sameValue(Number("0xF_F"), NaN, "0xF_F");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  NonZeroDigit NumericLiteralSeparator DecimalDigits

  NumericLiteralSeparator ::
    _

  DecimalIntegerLiteral ::
    ...
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits

  NonZeroDigit :: one of
    1 2 3 4 5 6 7 8 9

  DecimalDigits ::
    ...
    DecimalDigits DecimalDigit
    ...

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("1_1"), NaN, "1_1");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  NonZeroDigit NumericLiteralSeparator DecimalDigits

  NumericLiteralSeparator ::
    _

  DecimalIntegerLiteral ::
    ...
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits

  NonZeroDigit :: one of
    1 2 3 4 5 6 7 8 9

  DecimalDigits ::
    DecimalDigit
    ...

  DecimalDigit :: one of
    0 1 2 3 4 5 6 7 8 9

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("1_0"), NaN, "1_0");
assert.sameValue(Number("1_1"), NaN, "1_1");
assert.sameValue(Number("2_2"), NaN, "2_2");
assert.sameValue(Number("3_3"), NaN, "3_3");
assert.sameValue(Number("4_4"), NaN, "4_4");
assert.sameValue(Number("5_5"), NaN, "5_5");
assert.sameValue(Number("6_6"), NaN, "6_6");
assert.sameValue(Number("7_7"), NaN, "7_7");
assert.sameValue(Number("8_8"), NaN, "8_8");
assert.sameValue(Number("9_9"), NaN, "9_9");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  NonZeroDigit NumericLiteralSeparator DecimalDigits

  NumericLiteralSeparator ::
    _

  DecimalIntegerLiteral ::
    ...
    NonZeroDigit NumericLiteralSeparator_opt DecimalDigits

  NonZeroDigit :: one of
    1 2 3 4 5 6 7 8 9

  DecimalDigits ::
    ...
    DecimalDigits DecimalDigit
    ...

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("1_0123456789"), NaN, "1_0123456789");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0o` | `0O` OctalDigit NumericLiteralSeparator OctalDigit

  NumericLiteralSeparator ::
    _

  OctalIntegerLiteral ::
    0o OctalDigits
    0O OctalDigits

  OctalDigits ::
    OctalDigit
    OctalDigits OctalDigit
    OctalDigits NumericLiteralSeparator OctalDigit

  OctalDigit :: one of
    0 1 2 3 4 5 6 7

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0o0_1"), NaN, "0o0_1");
assert.sameValue(Number("0O0_1"), NaN, "0O0_1");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0o` | `0O` OctalDigit NumericLiteralSeparator OctalDigit

  NumericLiteralSeparator ::
    _

  OctalIntegerLiteral ::
    0o OctalDigits
    0O OctalDigits

  OctalDigits ::
    OctalDigit
    OctalDigits OctalDigit
    OctalDigits NumericLiteralSeparator OctalDigit

  OctalDigit :: one of
    0 1 2 3 4 5 6 7

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0o0_0"), NaN, "0o0_0");
assert.sameValue(Number("0o1_1"), NaN, "0o1_1");
assert.sameValue(Number("0o2_2"), NaN, "0o2_2");
assert.sameValue(Number("0o3_3"), NaN, "0o3_3");
assert.sameValue(Number("0o4_4"), NaN, "0o4_4");
assert.sameValue(Number("0o5_5"), NaN, "0o5_5");
assert.sameValue(Number("0o6_6"), NaN, "0o6_6");
assert.sameValue(Number("0o7_7"), NaN, "0o7_7");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0o` | `0O` OctalDigit NumericLiteralSeparator OctalDigit

  NumericLiteralSeparator ::
    _

  OctalIntegerLiteral ::
    0o OctalDigits
    0O OctalDigits

  OctalDigits ::
    OctalDigit
    OctalDigits OctalDigit
    OctalDigits NumericLiteralSeparator OctalDigit

  OctalDigit :: one of
    0 1 2 3 4 5 6 7

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0o0_10"), NaN, "0o0_10");
assert.sameValue(Number("0O0_10"), NaN, "0O0_10");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0o` | `0O` OctalDigits NumericLiteralSeparator OctalDigit

  NumericLiteralSeparator ::
    _

  OctalIntegerLiteral ::
    0o OctalDigits
    0O OctalDigits

  OctalDigits ::
    OctalDigit
    OctalDigits OctalDigit
    OctalDigits NumericLiteralSeparator OctalDigit

  OctalDigit :: one of
    0 1 2 3 4 5 6 7

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0o01_0"), NaN, "0o01_0");
assert.sameValue(Number("0O01_0"), NaN, "0O01_0");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  `0o` | `0O` OctalDigits NumericLiteralSeparator OctalDigit

  NumericLiteralSeparator ::
    _

  OctalIntegerLiteral ::
    0o OctalDigits
    0O OctalDigits

  OctalDigits ::
    OctalDigit
    OctalDigits OctalDigit
    OctalDigits NumericLiteralSeparator OctalDigit

  OctalDigit :: one of
    0 1 2 3 4 5 6 7

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("0o01_00"), NaN, "0o01_00");
assert.sameValue(Number("0O01_00"), NaN, "0O01_00");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  DecimalDigits NumericLiteralSeparator DecimalDigit

  NumericLiteralSeparator ::
    _

  SignedInteger ::
    ...
    - DecimalDigits

features: [numeric-separator-literal]
---*/

assert.sameValue(Number("-123456789_0"), NaN, "-123456789_0");
assert.sameValue(Number("-123456789_1"), NaN, "-123456789_1");
assert.sameValue(Number("-123456789_2"), NaN, "-123456789_2");
assert.sameValue(Number("-123456789_3"), NaN, "-123456789_3");
assert.sameValue(Number("-123456789_4"), NaN, "-123456789_4");
assert.sameValue(Number("-123456789_5"), NaN, "-123456789_5");
assert.sameValue(Number("-123456789_6"), NaN, "-123456789_6");
assert.sameValue(Number("-123456789_7"), NaN, "-123456789_7");
assert.sameValue(Number("-123456789_8"), NaN, "-123456789_8");
assert.sameValue(Number("-123456789_9"), NaN, "-123456789_9");
// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: prod-NumericLiteralSeparator
description: NumericLiteralSeparator is not valid on string conversions for ToNumber operations
info: |
  DecimalDigits NumericLiteralSeparator DecimalDigit
  
  NumericLiteralSeparator ::
    _

  SignedInteger ::
    ...
    + DecimalDigits
    ...
features: [numeric-separator-literal]
---*/

assert.sameValue(Number("+123456789_0"), NaN, "+123456789_0");
assert.sameValue(Number("+123456789_1"), NaN, "+123456789_1");
assert.sameValue(Number("+123456789_2"), NaN, "+123456789_2");
assert.sameValue(Number("+123456789_3"), NaN, "+123456789_3");
assert.sameValue(Number("+123456789_4"), NaN, "+123456789_4");
assert.sameValue(Number("+123456789_5"), NaN, "+123456789_5");
assert.sameValue(Number("+123456789_6"), NaN, "+123456789_6");
assert.sameValue(Number("+123456789_7"), NaN, "+123456789_7");
assert.sameValue(Number("+123456789_8"), NaN, "+123456789_8");
assert.sameValue(Number("+123456789_9"), NaN, "+123456789_9");

// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.1.1
description: Invalid octal literals yield NaN
info: |
    OctalIntegerLiteral ::
      0o OctalDigits
      0O OctalDigits
    OctalDigits ::
      OctalDigit
      OctalDigits OctalDigit
    OctalDigit :: one of
      0 1 2 3 4 5 6 7
---*/

assert.sameValue(Number('0o8'), NaN, 'invalid digit');
assert.sameValue(Number('00o0'), NaN, 'leading zero');
assert.sameValue(Number('0o'), NaN, 'omitted digits');
assert.sameValue(Number('+0o10'), NaN, 'plus sign');
assert.sameValue(Number('-0o10'), NaN, 'minus sign');
assert.sameValue(Number('0o10.01'), NaN, 'fractional part');
assert.sameValue(Number('0o1e10'), NaN, 'exponent part');
assert.sameValue(Number('0o1e-10'), NaN, 'exponent part with a minus sign');
assert.sameValue(Number('0o1e+10'), NaN, 'exponent part with a plus sign');


// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es6id: 20.1.1.1
description: Mathematical value of valid octal integer literals
info: |
    20.1.1.1 Number ( [ value ] )
 
    When Number is called with argument number, the following steps are taken:
 
    1. If no arguments were passed to this function invocation, let n be +0.
    2. Else, let n be ToNumber(value).
 
    [...]
 
    7.1.3.1 ToNumber Applied to the String Type
 
    All grammar symbols not explicitly defined above have the definitions used
    in the Lexical Grammar for numeric literals (11.8.3)
 
    [...]
 
    The MV of OctalIntegerLiteral :: 0o OctalDigits is the MV of OctalDigits.
    The MV of OctalIntegerLiteral :: 0O OctalDigits is the MV of OctalDigits.
    The MV of OctalDigits :: OctalDigit is the MV of OctalDigit.
    The MV of OctalDigits :: OctalDigits OctalDigit is (the MV of OctalDigits ×
    8) plus the MV of OctalDigit.
---*/

assert.sameValue(Number('0o0'), 0, 'lower-case head');
assert.sameValue(Number('0O0'), 0, 'upper-case head');
assert.sameValue(Number('0o00'), 0, 'lower-case head with leading zeros');
assert.sameValue(Number('0O00'), 0, 'upper-case head with leading zeros');

assert.sameValue(Number('0o1'), 1, 'lower-case head');
assert.sameValue(Number('0O1'), 1, 'upper-case head');
assert.sameValue(Number('0o01'), 1, 'lower-case head with leading zeros');
assert.sameValue(Number('0O01'), 1, 'upper-case head with leading zeros');

assert.sameValue(Number('0o7'), 7, 'lower-case head');
assert.sameValue(Number('0O7'), 7, 'upper-case head');
assert.sameValue(Number('0o07'), 7, 'lower-case head with leading zeros');
assert.sameValue(Number('0O07'), 7, 'upper-case head with leading zeros');

assert.sameValue(Number('0o10'), 8, 'lower-case head');
assert.sameValue(Number('0O10'), 8, 'upper-case head');
assert.sameValue(Number('0o010'), 8, 'lower-case head with leading zeros');
assert.sameValue(Number('0O010'), 8, 'upper-case head with leading zeros');

assert.sameValue(Number('0o11'), 9, 'lower-case head');
assert.sameValue(Number('0O11'), 9, 'upper-case head');
assert.sameValue(Number('0o011'), 9, 'lower-case head with leading zeros');
assert.sameValue(Number('0O011'), 9, 'upper-case head with leading zeros');

assert.sameValue(Number('0o77'), 63, 'lower-case head');
assert.sameValue(Number('0O77'), 63, 'upper-case head');
assert.sameValue(Number('0o077'), 63, 'lower-case head with leading zeros');
assert.sameValue(Number('0O077'), 63, 'upper-case head with leading zeros');