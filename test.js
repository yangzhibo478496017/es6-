const {log} = console;
// var obj1 = {a:1};
// var obj2= {};
// var obj = {obj1:obj1,b:1,c:true,d:'asd'}
// var constantize = (obj) => {
//   Object.freeze(obj);
//   Object.keys(obj).forEach( (key, i) => {
//     if ( typeof obj[key] === 'object' ) {
//       constantize( obj[key] );
//     }
//   });
// };
// constantize.obj1 = obj2;
// constantize.b = 2;
// constantize.c = false;
// constantize.d = 'qqq';

// console.log(constantize);




// function* fibs() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

// let [first, second, third, fourth, fifth, sixth] = fibs();
// sixth 



//  let { foo, bar } = { foo: 'aaa', bar: 'bbb' };

// console.log(foo,bar);

// foo // "aaa"
// bar // "bbb"

// let { log, sin, cos } = Math;

// console.log(log,sin,cos);

// 例二
// const { log } = console;
// log('hello') // hello



// let obj = {};
// let arr = [];

// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });

// console.log(obj,arr);

// let {foo: {bar}} = {foo: {bar :'baz'}};
// log(bar);

// let {toString: s} = 1223;
// log(s === Number.prototype.toString)

// log([[1, 2], [3, 4]].map(([a, b]) => a + b));

// function move({x = 0, y = 0} = {}) {
//   return [x, y];
// }
// log(
// move({x: 3, y: 8}),
// move({x: 3})
// ,move({})
// , move()
//  );


// let [a] = [1];

// let {x: (c)} = {};
// let ({x: c}) = {};
// let {(x: c)} = {};
// let {(x): c} = {};

// let { o: ({ p: p }) } = { o: { p: 2 } };


// ({ p: a } = { p: 42 })

// ([{ p: a }, { x: c }] = [{}, {}]);

// log(a);


// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }

// let f = 'foo'

// for (let codePoint of f) {
//   console.log(codePoint)
// }

// let template = `
// <ul>
//   <% for(let i=0; i < data.supplies.length; i++) { %>
//     <li><%= data.supplies[i] %></li>
//   <% } %>
// </ul>
// `;

// let evalExpr = /<%=(.+?)%>/g;
// let expr = /<%([\s\S]+?)%>/g;

// template = template.replace(evalExpr, '`); \n  echo( $1 ); \n  echo(`');
// log(template+'1'); 

// template = template.replace(expr, '`); \n $1 \n  echo(`');
// log(template+'2'); 

// template = 'echo(`' + template + '`);';
// log(template+'3');

// let a = 5;
// let b = 10;

// function tag(s, v1, v2) {
//   console.log(s[0]);
//   console.log(s[1]);
//   console.log(s[2]);
//   console.log(v1);
//   console.log(v2);

//   return "OK";
// }

// log(tag`Hello ${ a + b } world ${ a * b}`);

// let total = 30;
// let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

// function passthru(literals) {
//   let result = '';
//   let i = 0;

//   while (i < literals.length) {
//     result += literals[i++];
//     if (i < arguments.length) {
//       result += arguments[i];
//     }
//   }

//   return result;
// }

// log(msg) // "The total is 30 (31.5 with tax)"

// let arry = [1,2,3];

// for (let i = 0 ; i < arry.length;) {
//   let a = arry[i++]
//   log(a);
// }
// let a = 10
// let b = 20
// let n = function nnn(params) {
//     log(params);
// }
// let params = n`haaaaaaa ${a} caaaaaaaa${a*b} sdasd ${b}`


// const tmpl = addrs => `
//   <table>
//   ${addrs.map(addr => `
//     <tr><td>${addr.first}</td></tr>
//     <tr><td>${addr.last}</td></tr>
//   `).join('')}
//   </table>
// `;

// const data = [
//     { first: '<Jane>', last: 'Bond' },
//     { first: 'Lars', last: '<Croft>' },
// ];

// console.log(tmpl(data));


// let total = 30;
// let msg = passthru`The total is ${total} (${total*1.05} with tax)`;

// function passthru(a,b,c) {
//   let result = '';
//   let i = 0;

//   while (i < a.length) {
//     result += a[i++];
//     if (i < arguments.length) {
//       result += arguments[i];
//     }
//   }
//   return result;
// }
// log(msg);

// let a = `First line\nSecond line`
// tag`First line\nSecond line`

// function tag(strings) {
//   console.log(strings.raw[0]);
//   // strings.raw[0] 为 "First line\\nSecond line"
//   // 打印输出 "First line\nSecond line"
// }
// log(a);

// log(String.fromCodePoint(0x20BB7))
// // "𠮷"
// log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y')
// // true


// let s = '𠮷a';

// log(s.codePointAt(0).toString(16)) // 134071
// log(s.codePointAt(1).toString(16)) // 57271

// log(s.codePointAt(2).toString(16)) // 97


// for (const a of s) {
//     log(a.codePointAt(0).toString(16))
// }


// function is32Bit(c) {
//     return c.codePointAt(0) > 0xFFFF;
//   }
  
//   log(is32Bit("𠮷")) // true
//   log(is32Bit("a")) // false

// let s = 'Hello world!';

// s.startsWith('world', 6) // true
// s.endsWith('Hello', 5) // true
// s.includes('Hello', 6) // false
// // 上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
// log(s.length)
// log(s.indexOf('world'))



// log('na'.repeat('3'))
// log('na'.repeat(3*0.3))
// log('na'.repeat(2.3))
// log('na'.repeat(-0.1))


// ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。

// 'x'.padStart(5, 'ab') // 'ababx'
// 'x'.padStart(4, 'ab') // 'abax'

// 'x'.padEnd(5, 'ab') // 'xabab'
// 'x'.padEnd(4, 'ab') // 'xaba'

// 如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串。

// 'abc'.padStart(10, '0123456789')
// // '0123456abc'
// // 如果省略第二个参数，默认使用空格补全长度。

// 'x'.padStart(4) // '   x'
// 'x'.padEnd(4) // 'x   '

// // padStart()的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。

// '1'.padStart(10, '0') // "0000000001"
// '12'.padStart(10, '0') // "0000000012"
// '123456'.padStart(10, '0') // "0000123456"

// // 另一个用途是提示字符串格式。

// '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
// '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"

// const s = '  abc  ';
// log(
// // s.trim() // "abc",
// // s.trimStart() // "abc  "
// // s.trimEnd() // "  abc"
// )

// ES6 改变了这种行为。如果RegExp构造函数第一个参数是一个正则对象，那么可以使用第二个参数指定修饰符。而且，返回的正则表达式会忽略原有的正则表达式的修饰符，只使用新指定的修饰符。

// log(new RegExp(/abc/ig, 'i').flags)



// （1）点字符
// 点（.）字符在正则表达式中，含义是除了换行符以外的任意单个字符。对于码点大于0xFFFF的 Unicode 字符，点字符不能识别，必须加上u修饰符。
// var s = '𠮷';

// log(/^.$/.test(s)) // false
// log(/^./.test(s)) // true
// log(/.$/.test(s)) // true
// log(/./.test(s)) // true
// log(/^.$/u.test(s)) //true



// 2）Unicode 字符表示法

// ES6 新增了使用大括号表示 Unicode 字符，这种表示法在正则表达式中必须加上u修饰符，才能识别当中的大括号，否则会被解读为量词。
// log(/\u{61}/.test('a')) // false
// log(/\u{61}/u.test('a')) // true
// log(/\u{20BB7}/u.test('𠮷')) // true
// log(/\u{20BB7}\u{dfb7}/u.test('𠮷')) // false
// log(/\u{20BB7}\u{dfb7}/.test('𠮷')) // false
// log(/\u{D842}\u{dfb7}/.test('𠮷')) // false
// log(/\u{D842}\u{dfb7}/u.test('𠮷')) // false
// 3）量词

// 使用u修饰符后，所有量词都会正确识别码点大于0xFFFF的 Unicode 字符。

// log(/a{2}/.test('aa') )// true
// log(/a{2}/u.test('aa') )// true
// log(/𠮷{2}/.test('𠮷𠮷') )// false
// log(/𠮷{2}/u.test('𠮷𠮷') )// true

// （4）预定义模式

// u修饰符也影响到预定义模式，能否正确识别码点大于0xFFFF的 Unicode 字符。

// log(/^\S$/.test('𠮷')) // false
// log(/\S$/.test('𠮷')) // true
// log(/^\S/.test('𠮷')) // true
// log(/\S/.test('𠮷')) // true
// log(/^\S$/u.test('𠮷')) // true
// log(/\S$/u.test('𠮷')) // true
// log(/^\S/u.test('𠮷')) // true
// log(/\S/u.test('𠮷')) // true

// function codePointLength(text) {
//     var result = text.match(/[\s\S]/gu);
//     return result ? result.length : 0;
//   }
  
//   let s = '𠮷𠮷';
//   let y = '杨智博123';
  
//   log(y.length) // 4
//   log(codePointLength(y)) // 2

// let a = "\u{20BB7}";
// let b = "\u20BB7";
// log(a)
// log(b)

// i 修饰符

// 有些 Unicode 字符的编码不同，但是字型很相近，比如，\u004B与\u212A都是大写的K。
// let a = "\u212A";
// let b = "K";
// log(a);
// log (a===b)// false
// log(/[a-z]/i.test('\u212A')) // false
// log(/[a-z]/iu.test('\u212A')) // true

// log(Number('0b111'))


// Number.isFinite()用来检查一个数值是否为有限的（finite），即不是Infinity。

// log(Number.isFinite(15) )// true
// log(Number.isFinite(0.8) )// true
// log(Number.isFinite(NaN) )// false
// log(Number.isFinite(Infinity)) // false
// log(Number.isFinite(-Infinity)) // false
// log(Number.isFinite('foo')) // false
// log(Number.isFinite('15')) // false
// log(Number.isFinite(true)) // false
// 注意，如果参数类型不是数值，Number.isFinite一律返回false。

// Number.isNaN()用来检查一个值是否为NaN。

// log(Number.isNaN(NaN)) // true
// log(Number.isNaN(15)) // false
// log(Number.isNaN('15')) // false
// log(Number.isNaN(true)) // false
// log(Number.isNaN(9/NaN)) // true
// log(Number.isNaN('true' / 0)) // true
// log(Number.isNaN('true' / 'true') )// true
// 如果参数类型不是NaN，Number.isNaN一律返回false。


// 它们与传统的全局方法isFinite()和isNaN()的区别在于，传统方法先调用Number()将非数值的值转为数值，再进行判断，而这两个新方法只对数值有效，Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false。

// isFinite(25) // true
// isFinite("25") // true
// Number.isFinite(25) // true
// Number.isFinite("25") // false

// isNaN(NaN) // true
// isNaN("NaN") // true
// Number.isNaN(NaN) // true
// Number.isNaN("NaN") // false
// Number.isNaN(1) // false


// ES5的写法
// parseInt('12.34') // 12
// parseFloat('123.45#') // 123.45

// ES6的写法
// Number.parseInt('12.34') // 12
//  log(Number.parseInt(12.34)) // 12
// Number.parseFloat('123.45#') // 123.45
// log(Number.parseFloat('123'))// 123


// JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。

// Number.isInteger(25) // true
// Number.isInteger(25.0) // true
// 如果参数不是数值，Number.isInteger返回false。

// Number.isInteger() // false
// Number.isInteger(null) // false
// Number.isInteger('15') // false
// Number.isInteger(true) // false
// 注意，由于 JavaScript 采用 IEEE 754 标准，数值存储为64位双精度格式，数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）。如果数值的精度超过这个限度，第54位及后面的位就会被丢弃，这种情况下，Number.isInteger可能会误判。

// Number.isInteger(3.0000000000000002) // true
// 上面代码中，Number.isInteger的参数明明不是整数，但是会返回true。原因就是这个小数的精度达到了小数点后16个十进制位，转成二进制位超过了53个二进制位，导致最后的那个2被丢弃了。

// 类似的情况还有，如果一个数值的绝对值小于Number.MIN_VALUE（5E-324），即小于 JavaScript 能够分辨的最小值，会被自动转为 0。这时，Number.isInteger也会误判。

// Number.isInteger(5E-324) // false
// Number.isInteger(5E-325) // true
// 上面代码中，5E-325由于值太小，会被自动转为0，因此返回true。

// 总之，如果对数据精度的要求较高，不建议使用Number.isInteger()判断一个数值是否为整数。


// Number.EPSILON
// ES6 在Number对象上面，新增一个极小的常量Number.EPSILON。根据规格，它表示 1 与大于 1 的最小浮点数之间的差。

// 对于 64 位浮点数来说，大于 1 的最小浮点数相当于二进制的1.00..001，小数点后面有连续 51 个零。这个值减去 1 之后，就等于 2 的 -52 次方。

// Number.EPSILON === Math.pow(2, -52)
// // true
// Number.EPSILON
// // 2.220446049250313e-16
// Number.EPSILON.toFixed(20)
// // "0.00000000000000022204"
// Number.EPSILON实际上是 JavaScript 能够表示的最小精度。误差如果小于这个值，就可以认为已经没有意义了，即不存在误差了。

// 引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。我们知道浮点数计算是不精确的。

// log(0.1 + 0.2 - Number.EPSILON) //0.2999999999999998
// log(0.1 + 0.2)// 0.30000000000000004

// log(0.1 + 0.2 - 0.3) // 5.551115123125783e-17
// log(0.1 + 0.2 - 0.3 -Number.EPSILON ) //-1.6653345369377348e-16


// 5.551115123125783e-17.toFixed(20)
// '0.00000000000000005551'
// 上面代码解释了，为什么比较0.1 + 0.2与0.3得到的结果是false。

// 0.1 + 0.2 === 0.3 // false
// Number.EPSILON可以用来设置“能够接受的误差范围”。比如，误差范围设为 2 的-50 次方（即Number.EPSILON * Math.pow(2, 2)），即如果两个浮点数的差小于这个值，我们就认为这两个浮点数相等。

// 5.551115123125783e-17 < Number.EPSILON * Math.pow(2, 2)
// true
// 因此，Number.EPSILON的实质是一个可以接受的最小误差范围。


// function withinErrorMargin (left, right) {
//   return Math.abs(left - right) < Number.EPSILON * Math.pow(2, 2);
// }
// function withinErrorMargin1 (left, right) {
//     return Math.abs(left - right) < Number.EPSILON * Math.pow(2, -2);
//   }

// log(0.1 + 0.2 === 0.3 )// false
// log(withinErrorMargin(0.1 + 0.2, 0.3)) // true
// log(withinErrorMargin1(0.1 + 0.2, 0.3))// false

// log(1.1 + 1.3 === 2.4) // false
// log(withinErrorMargin(1.1 + 1.3, 2.4)) // true
// log(withinErrorMargin1(1.1 + 1.3, 2.4))// false
// 上面的代码为浮点数运算，部署了一个误差检查函数。


// 安全整数和 Number.isSafeInteger()
// JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。

    // log(Math.pow(2, 53)) // 9007199254740992

    // log(9007199254740992)  // 9007199254740992
    // log(9007199254740993) // 9007199254740992

    // log(Math.pow(2, 53) === Math.pow(2, 53) + 1)
// true
// 上面代码中，超出 2 的 53 次方之后，一个数就不精确了。

// 引入了一种新的数据类型 BigInt（大整数），来解决这个问题。BigInt 只用来表示整数，没有位数的限制，任何位数的整数都可以精确表示。

// const a = 2172141653n;
// const b = 15346349309n;

// BigInt 可以保持精度
// log(a * b )// 33334444555566667777n

// 普通整数无法保持精度
// log(Number(a) * Number(b)) // 33334444555566670000 

// BigInt 与普通整数是两种值，它们之间并不相等。

// log(42n === 42) // false

// BigInt 可以使用负号（-），但是不能使用正号（+），因为会与 asm.js 冲突。

// log(-42n) // 正确
// log(+42n) // 报错


// JavaScript 以前不能计算70的阶乘（即70!），因为超出了可以表示的精度。

// let p = 1;
// for (let i = 1; i <= 70; i++) {
//   p *= i;
// }
// log(p); // 1.197857166996989e+100

// let p2 = 1;
// for (let i = 1; i <= 69; i++) {
//   p2 *= i;
// }
// log(p2); // 1.197857166996989e+100

// 现在支持大整数了，就可以算了，浏览器的开发者工具运行下面代码，就OK。

// let p1 = 1n;
// for (let i = 1n; i <= 70n; i++) {
//   p1 *= i;
// }
// log(p1); // 11978571...00000000n



// BigInt 对象
// JavaScript 原生提供BigInt对象，可以用作构造函数生成 BigInt 类型的数值。转换规则基本与Number()一致，将其他类型的值转为 BigInt。

// log(BigInt(123))// 123n
// log(BigInt('123')) // 123n
// log(BigInt(false)) // 0n
// log(BigInt(true)) // 1n
// log(BigInt('true')) // SyntaxError
// BigInt()构造函数必须有参数，而且参数必须可以正常转为数值，下面的用法都会报错。

// new BigInt() // TypeError
// log(BigInt(undefined)) //TypeError
// log(BigInt(null)) // TypeError
// log(BigInt('123n')) // SyntaxError
// log(BigInt('abc') )// SyntaxError
// 上面代码中，尤其值得注意字符串123n无法解析成 Number 类型，所以会报错。

// 参数如果是小数，也会报错。

// BigInt(1.5) // RangeError
// BigInt('1.5') // SyntaxError


// BigInt 对象继承了 Object 对象的两个实例方法。

// BigInt.prototype.toString()
// BigInt.prototype.valueOf()
// 它还继承了 Number 对象的一个实例方法。

// BigInt.prototype.toLocaleString()
// 此外，还提供了三个静态方法。

// BigInt.asUintN(width, BigInt)： 给定的 BigInt 转为 0 到 2width - 1 之间对应的值。
// BigInt.asIntN(width, BigInt)：给定的 BigInt 转为 -2width - 1 到 2width - 1 - 1 之间对应的值。
// BigInt.parseInt(string[, radix])：近似于Number.parseInt()，将一个字符串转换成指定进制的 BigInt。
// const max = 2n ** (64n - 1n) - 1n;
// const max1 = 2n ** (5n - 1n) - 1n;
// log(max)
// log(max1)
// log(BigInt.asIntN(3, max1))
// log(BigInt.asUintN(3, max1))
// // 9223372036854775807n
// BigInt.asIntN(64, max + 1n)
// // -9223372036854775808n
// BigInt.asUintN(64, max + 1n)

// BigInt.asIntN(32, max) // -1n
// BigInt.asUintN(32, max) // 4294967295n  
// 9223372036854775808n
// 上面代码中，max是64位带符号的 BigInt 所能表示的最大值。如果对这个值加1n，BigInt.asIntN()将会返回一个负值，因为这时新增的一位将被解释为符号位。而BigInt.asUintN()方法由于不存在符号位，所以可以正确返回结果。



// Number.parseInt() 与 BigInt.parseInt() 的对比
// let a = Number.parseInt('9007199254740993', 10)
// 9007199254740992
//未找到      BigInt.parseInt
// function bigIntParseInt(string , int){
//     let a = Number.parseInt(string,int);
//     let b = BigInt(a);
//     return b;

// }
// let b = bigIntParseInt('9007199254740993', 10)



// // 9007199254740993n
// let c = bigIntParseInt('9007199254740993', 16)
// log(a)
// log(b)
// log(c)


// 转换规则
// 可以使用Boolean()、Number()和String()这三个方法，将 BigInt 可以转为布尔值、数值和字符串类型。

// log(Boolean(0n)) // false
// log(Boolean(1n) )// true
// log(Number(1n)  )// 1
// log(String(1n)  )// "1"
// 上面代码中，注意最后一个例子，转为字符串时后缀n会消失。

// 另外，取反运算符（!）也可以将 BigInt 转为布尔值。

// log(!0n) // true
// log(!1n )// false
// log(Boolean('!1n') )// true
// log(Boolean(!1n) )// false
// log(Boolean(!1))// false
// log(Boolean(!0))// true
// log(Boolean('!0n') )// true
// log(Boolean('23123') )// true
// log(Boolean(1112123) )// true
// BigInt 对应的布尔值，与 Number 类型一致，即0n会转为false，其他值转为true。
// log(Math.sqrt(10))

// 安全整数和 Number.isSafeInteger()
// JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。

// Math.pow(2, 53) // 9007199254740992

// 9007199254740992  // 9007199254740992
// 9007199254740993  // 9007199254740992

// Math.pow(2, 53) === Math.pow(2, 53) + 1
// true
// 上面代码中，超出 2 的 53 次方之后，一个数就不精确了。

// ES6 引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。

// Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1
// // true
// Number.MAX_SAFE_INTEGER === 9007199254740991
// // true

// Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER
// // true
// Number.MIN_SAFE_INTEGER === -9007199254740991
// true
// 上面代码中，可以看到 JavaScript 能够精确表示的极限。

// Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。

// Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。

// Number.isSafeInteger('a') // false
// Number.isSafeInteger(null) // false
// Number.isSafeInteger(NaN) // false
// Number.isSafeInteger(Infinity) // false
// Number.isSafeInteger(-Infinity) // false

// Number.isSafeInteger(3) // true
// Number.isSafeInteger(1.2) // false
// Number.isSafeInteger(9007199254740990) // true
// Number.isSafeInteger(9007199254740992) // false

// Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) // false
// Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // true
// Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true
// Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // false
// 这个函数的实现很简单，就是跟安全整数的两个边界值比较一下。

// Number.isSafeInteger = function (n) {
//   return (typeof n === 'number' &&   //判断类型
//     Math.round(n) === n &&            //取整
//     Number.MIN_SAFE_INTEGER <= n &&     
//     n <= Number.MAX_SAFE_INTEGER);
// }


// log(Number.isSafeInteger(9007199254740991.5))
// 实际使用这个函数时，需要注意。验证运算结果是否落在安全整数的范围内，不要只验证运算结果，而要同时验证参与运算的每个值。


// Math.trunc()
// // Math.trunc方法用于去除一个数的小数部分，返回整数部分。

// log(Math.trunc(4.1)) // 4
// Math.trunc(4.9) // 4
// Math.trunc(-4.1) // -4
// Math.trunc(-4.9) // -4
// Math.trunc(-0.1234) // -0
// // 对于非数值，Math.trunc内部使用Number方法将其先转为数值。

// Math.trunc('123.456') // 123
// Math.trunc(true) //1
// Math.trunc(false) // 0
// Math.trunc(null) // 0
// // 对于空值和无法截取整数的值，返回NaN。

// Math.trunc(NaN);      // NaN
// Math.trunc('foo');    // NaN
// Math.trunc();         // NaN
// Math.trunc(undefined) // NaN
// 对于没有部署这个方法的环境，可以用下面的代码模拟。

// Math.trunc = Math.trunc || function(x) {
//   return x < 0 ? Math.ceil(x) : Math.floor(x);
// };


// Math.sign()
// Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。

// 它会返回五种值。

// 参数为正数，返回+1；
// 参数为负数，返回-1；
// 参数为 0，返回0；
// 参数为-0，返回-0;
// 其他值，返回NaN。
// Math.sign(-5) // -1
// Math.sign(5) // +1
// Math.sign(0) // +0
// Math.sign(-0) // -0
// Math.sign(NaN) // NaN
// 如果参数是非数值，会自动转为数值。对于那些无法转为数值的值，会返回NaN。

// Math.sign('')  // 0
// Math.sign(true)  // +1
// Math.sign(false)  // 0
// Math.sign(null)  // 0
// Math.sign('9')  // +1
// Math.sign('foo')  // NaN
// Math.sign()  // NaN
// Math.sign(undefined)  // NaN
// 对于没有部署这个方法的环境，可以用下面的代码模拟。

// Math.sign = Math.sign || function(x) {
//   x = +x; // convert to a number
//   if (x === 0 || isNaN(x)) {
//     return x;
//   }
//   return x > 0 ? 1 : -1;
// };

// Math.fround()
// Math.fround方法返回一个数的32位单精度浮点数形式。
// 
// 对于32位单精度格式来说，数值精度是24个二进制位（1 位隐藏位与 23 位有效位），所以对于 -224 至 224 之间的整数（不含两个端点），返回结果与参数本身一致。

// Math.fround(0)   // 0
// Math.fround(1)   // 1
// Math.fround(2 ** 24 - 1)   // 16777215
// 如果参数的绝对值大于 224，返回的结果便开始丢失精度。

// Math.fround(2 ** 24)       // 16777216
// Math.fround(2 ** 24 + 1)   // 16777216
// // Math.fround方法的主要作用，是将64位双精度浮点数转为32位单精度浮点数。如果小数的精度超过24个二进制位，返回值就会不同于原值，否则返回值不变（即与64位双精度值一致）。

// // 未丢失有效精度
// Math.fround(1.125) // 1.125
// Math.fround(7.25)  // 7.25

// // 丢失精度
// Math.fround(0.3)   // 0.30000001192092896
// Math.fround(0.7)   // 0.699999988079071
// Math.fround(1.0000000123) // 1


// 对于 NaN 和 Infinity，此方法返回原值。对于其它类型的非数值，Math.fround 方法会先将其转为数值，再返回单精度浮点数。

// Math.fround(NaN)      // NaN
// Math.fround(Infinity) // Infinity

// Math.fround('5')      // 5
// Math.fround(true)     // 1
// Math.fround(null)     // 0
// Math.fround([])       // 0
// Math.fround({})       // NaN


// 对于没有部署这个方法的环境，可以用下面的代码模拟。
// Math.fround = Math.fround || function (x) {
//     return new Float32Array([x])[0];
//   };


// 指数运算符
// ES2016 新增了一个指数运算符（**）。

// 2 ** 2 // 4
// 2 ** 3 // 8
// 这个运算符的一个特点是右结合，而不是常见的左结合。多个指数运算符连用时，是从最右边开始计算的。

// 相当于 2 ** (3 ** 2)
// 2 ** 3 ** 2
// 512
// 上面代码中，首先计算的是第二个指数运算符，而不是第一个。

// 指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。

// let a = 1.5;
// log(a **= 2)
// 等同于 a = a * a;

// let b = 4;
// log(b **= 3)
// 等同于 b = b * b * b;



// 比较运算符（比如>）和相等运算符（==）允许 BigInt 与其他类型的值混合计算，因为这样做不会损失精度。

// 0n < 1 // true
// 0n < true // true
// 0n == 0 // true
// 0n == false // true
// 0n === 0 // false
// BigInt 与字符串混合运算时，会先转为字符串，再进行运算。

// '' + 123n // "123"


// 使用参数默认值时，函数不能有同名参数。
// // 不报错
// function foo(x, x, y) {
//     // ...
//   }
  
//   // 报错
//   function foo(x, x, y = 1) {
//     // ...
//   }

// 参数默认值可以与解构赋值的默认值，结合起来使用。

// function foo({x, y = 5}) {
//   console.log(x, y);
// }

// log(foo({})) // undefined 5
// log(foo({x: 1})) // 1 5
// log(foo({x: 1, y: 2})) // 1 2
// log(foo()) // TypeError: Cannot read property 'x' of undefined

// 上面代码只使用了对象的解构赋值默认值，没有使用函数参数的默认值。只有当函数foo的参数是一个对象时，变量x和y才会通过解构赋值生成。如果函数foo调用时没提供参数，变量x和y就不会生成，从而报错。通过提供函数参数的默认值，就可以避免这种情况。

// function foo({x, y = 5} = {}) {
//   console.log(x, y);
// }

// foo() // undefined 5

// function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
//     log(url)
//     log(body)
//     log(method)
//     log(headers)
//   }
  
//   fetch('http://example.com', {})
//   // "GET"
  
//    fetch('http://example.com')
  // 报错
// fetch('http://example.com',{body:1,method: 2,headers:3})

//默认值  是只有等式左边为undefined时  才等于右边  ，null则没有这个效果。
// 写法一
// function m1({x = 0, y = 0} = {}) {
//     log(  [x, y])
// }

// // 写法二
// function m2({x, y} = { x: 0, y: 0 }) {
//   log( [x, y])
// }
// 上面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。

// 函数没有参数的情况
// m1() // [0, 0]
// m2() // [0, 0]

// // x 和 y 都有值的情况
// m1({x: 3, y: 8}) // [3, 8]
// m2({x: 3, y: 8}) // [3, 8]

// // x 有值，y 无值的情况
// m1({x: 3}) // [3, 0]
// m2({x: 3}) // [3, undefined]

// // x 和 y 都无值的情况
// m1({}) // [0, 0];
// m2({}) // [undefined, undefined]

// m1({z: 3}) // [0, 0]
// m2({z: 3}) // [undefined, undefined]

// 函数的 length 属性
// 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。

// (function (a) {}).length // 1
// (function (a = 5) {}).length // 0
// (function (a, b, c = 5) {}).length // 2
// 上面代码中，length属性的返回值，等于函数的参数个数减去指定了默认值的参数个数。比如，上面最后一个函数，定义了 3 个参数，其中有一个参数c指定了默认值，因此length属性等于3减去1，最后得到2。

// 这是因为length属性的含义是，该函数预期传入的参数个数。某个参数指定默认值以后，预期传入的参数个数就不包括这个参数了。同理，后文的 rest 参数也不会计入length属性。

// (function(...args) {}).length // 0
// 如果设置了默认值的参数不是尾参数，那么length属性也不再计入后面的参数了。

// (function (a = 0, b, c) {}).length // 0
// (function (a, b = 1, c) {}).length // 1


// 作用域
// 一旦设置了参数的默认值，函数进行声明初始化时，参数会形成一个单独的作用域（context）。等到初始化结束，这个作用域就会消失。这种语法行为，在不设置参数默认值时，是不会出现的。

// let x = 1;
// var x = 1;
// function f(x, y = x) {
//   console.log(y);
// }
// var y = 3;
// f(2) // 2

// 上面代码中，参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2。


// let x = 1;

// function f(y = x) {
//   let x = 2;
//   console.log(y);
// }

// f() // 1
// 下面这样写，也会报错。

// var x = 1;

// function foo(x = x) {   //let x = x  
//   // ...
// }

// foo() // ReferenceError: x is not defined
// 上面代码中，参数x = x形成一个单独作用域。实际执行的是let x = x，由于暂时性死区的原因，这行代码会报错”x 未定义“。

// let foo = 'outer';

// function bar(func = () => foo) {
//   let foo = 'inner';
//   console.log(func());
// }

// bar(); 



// var x = 1;
// function foo(x, y = function() { x = 2; }) {  //let x  , let y = f
//    var  x = 3;
//   y();
//   console.log(x);
// }

// foo() // 3
// log(x) // 1

// 上面代码中，函数foo的参数形成一个单独作用域。这个作用域里面，首先声明了变量x，然后声明了变量y，y的默认值是一个匿名函数。
// 这个匿名函数内部的变量x，指向同一个作用域的第一个参数x。函数foo内部又声明了一个内部变量x，该变量与第一个参数x由于不是同一个作用域，所以不是同一个变量，因此执行y后，内部变量x和外部全局变量x的值都没变。


// 应用
// 利用参数默认值，可以指定某一个参数不得省略，如果省略就抛出一个错误。

// function throwIfMissing() {
//   throw new Error('Missing parameter');
// }

// function foo(mustBeProvided = throwIfMissing()) {
//   return mustBeProvided;
// }

// foo()
// Error: Missing parameter
// 上面代码的foo函数，如果调用的时候没有参数，就会调用默认值throwIfMissing函数，从而抛出一个错误。

// 从上面代码还可以看到，参数mustBeProvided的默认值等于throwIfMissing函数的运行结果（注意函数名throwIfMissing之后有一对圆括号），这表明参数的默认值不是在定义时执行，而是在运行时执行。如果参数已经赋值，默认值中的函数就不会运行。

// 另外，可以将参数默认值设为undefined，表明这个参数是可以省略的。

// function foo(optional = undefined) { ··· }

// rest 参数
// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

// function add(...values) {
//   let sum = 0;

//   for (var val of values) {
//     sum += val;
//   }

//   return sum;
// }

// log(add(2, 5, 3,4,5,6,7,8,9)) // 10
// 上面代码的add函数是一个求和函数，利用 rest 参数，可以向该函数传入任意数目的参数。

// 下面是一个 rest 参数代替arguments变量的例子。

// arguments变量的写法
// function sortNumbers() {
//   return Array.prototype.slice.call(arguments).sort();
// }

// // rest参数的写法
// const sortNumbers1 = (...numbers) => numbers.sort();

// log(sortNumbers(1,2,3,7,8,9,4,5,6))
// log(sortNumbers1(7,8,1,2,3,4,5,6,9))



// function push(array, ...items) {
//   items.forEach(function(item) {
//     array.push(item);
//     console.log(item);
//   });
// }

// function push1() {
//   let a = Array.prototype.slice.call(arguments)
//   let b = a[0];
//   for (let index = 1; index < a.length; index++) {
//     let element = a[index];
//     b.push(element);
//   }
//   log(b);
// }



// var a = [];
// push(a, 1, 2, 3)
// push1(a, 1, 2, 3)


// rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。

// 报错
// function f(a, ...b, c) {
//   // ...
// }
// 函数的length属性，不包括 rest 参数。

// (function(a) {}).length  // 1
// (function(...a) {}).length  // 0
// (function(a, ...b) {}).length  // 1


// ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。

// 报错
// function doSomething(a, b = a) {
//   'use strict';
//   // code
// }

// // 报错
// const doSomething = function ({a, b}) {
//   'use strict';
//   // code
// };

// // 报错
// const doSomething = (...a) => {
//   'use strict';
//   // code
// };

// const obj = {
//   // 报错
//   doSomething({a, b}) {
//     'use strict';
//     // code
//   }
// };