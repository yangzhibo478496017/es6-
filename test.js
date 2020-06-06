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

// ES6 对这个属性的行为做出了一些修改。如果将一个匿名函数赋值给一个变量，ES5 的name属性，会返回空字符串，而 ES6 的name属性会返回实际的函数名。

// var f = function () {};

// // ES5
// f.name // ""

// // ES6
// f.name // "f"
// // 上面代码中，变量f等于一个匿名函数，ES5 和 ES6 的name属性返回的值不一样。

// // 如果将一个具名函数赋值给一个变量，则 ES5 和 ES6 的name属性都返回这个具名函数原本的名字。
// // 
// const bar = function baz() {};

// // ES5
// bar.name // "baz"

// // ES6
// bar.name // "baz"
// // Function构造函数返回的函数实例，name属性的值为anonymous。

// (new Function).name // "anonymous"
// // bind返回的函数，name属性值会加上bound前缀。

// function foo() {};
// foo.bind({}).name // "bound foo"

// (function(){}).bind({}).name // "bound "


// 箭头函数
// 基本用法
// ES6 允许使用“箭头”（=>）定义函数。

// var f = v => v;

// // 等同于
// var f = function (v) {
//   return v;
// };
// 如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。

// var f = () => 5;
// // 等同于
// var f = function () { return 5 };

// var sum = (num1, num2) => num1 + num2;
// // 等同于
// var sum = function(num1, num2) {
//   return num1 + num2;
// };
// 如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

// var sum = (num1, num2) => { return num1 + num2; }

// var sum = (num1, num2 , num3 = 2) => {
//    num1 = num3;
//   return num1 + num2 + num3 ; 
//   }
//   log(sum(1,2))

// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号，否则会报错。

// // 报错
// let getTempItem = id => { id: id, name: "Temp" };

// // 不报错
// let getTempItem = id => ({ id: id, name: "Temp" });



// 如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。

// let fn = () => void doesNotReturn();
// 箭头函数可以与变量解构结合使用。

// let person = {
//   first:1,last:2
// }

// const full = ({ first, last }) => log(first + ' ' + last)

// // 等同于
// function full1(person) {
//   log( person.first + ' ' + person.last)
// }
// full(person)
// full1(person)

// 箭头函数的一个用处是简化回调函数。

// 正常函数写法
// [1,2,3].map(function (x) {
//   return x * x;
// });

// 箭头函数写法
// [1,2,3].map(x => log(x * x))


// let person = {
//   name:'杨智博',
//   sex:'男',
//   asdasd:'27'
// }
// let person1 = {
//   name:'杨智博1',
//   sex:'男1',
//   asdasd:'28'
// }
// let person2 = {
//   name : '杨智博2',
//   sex : '男2',
//   asdasd:'29'
// }


// [1,2,3].map(x => log(x+x*x/x**x))
// [person,person1].map(x => log(x.name ,x.sex,x.asdasd))
// [{x : person,y:'hah'},{x : person1,y:'hah1'},{x : person2,y:'hah2'}].map((x,y) => log(x.name+y ,x.sex+y,x.asdasd+y))

// // 正常函数写法
// var result = values.sort(function (a, b) {
//   return a - b;
// });

// // 箭头函数写法
// var result = values.sort((a, b) => a - b);



// 使用注意点
// 箭头函数有几个使用注意点。

// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

// 上面四点中，第一点尤其值得注意。this对象的指向是可变的，但是在箭头函数中，它是固定的。

// function foo() {
//   setTimeout(() => {
//     console.log('id:', this.id);
//   }, 100);
// }

// var id = 21;

// foo.call({ id: 42 });
// id: 42
// 上面代码中，setTimeout的参数是一个箭头函数，这个箭头函数的定义生效是在foo函数生成时，而它的真正执行要等到 100 毫秒后。如果是普通函数，执行时this应该指向全局对象window，这时应该输出21。但是，箭头函数导致this总是指向函数定义生效时所在的对象（本例是{id: 42}），所以输出的是42。

// 箭头函数可以让setTimeout里面的this，绑定定义时所在的作用域，而不是指向运行时所在的作用域。下面是另一个例子。

// function Timer() {
//   this.s1 = 0;
//   this.s2 = 0;
//   // 箭头函数
//   setInterval(() => this.s1++, 1000);
//   // 普通函数
//   setInterval(function () {
//     this.s2++;
//   }, 1000);
// }

// var timer = new Timer();

// setTimeout(() => console.log('s1: ', timer.s1), 3100);
// setTimeout(() => console.log('s2: ', timer.s2), 3100);
// // s1: 3
// s2: 0
// 上面代码中，Timer函数内部设置了两个定时器，分别使用了箭头函数和普通函数。
// 前者的this绑定定义时所在的作用域（即Timer函数），后者的this指向运行时所在的作用域（即全局对象）。
// 所以，3100 毫秒之后，timer.s1被更新了 3 次，而timer.s2一次都没更新。


// var handler = {
//   id: '123456',

//   init: function() {
//     document.addEventListener('click',
//       event => this.doSomething(event.type), false);
//   },

//   doSomething: function(type) {
//     console.log('Handling ' + type  + ' for ' + this.id);
//   }
// };

// handler.init()

// 除了this，以下三个变量在箭头函数之中也是不存在的，指向外层函数的对应变量：arguments、super、new.target。

// function foo() {
//   setTimeout(() => {
//     console.log('args:', arguments);
//   }, 100);
// }

// foo(2, 4, 6, 8)
// // args: [2, 4, 6, 8]


// 不适用场合
// 由于箭头函数使得this从“动态”变成“静态”，下面两个场合不应该使用箭头函数。

// 第一个场合是定义对象的方法，且该方法内部包括this。

// const cat = {
//   lives: 9,
//   jumps: () => {
//     this.lives--;
//   }
// }
// 上面代码中，cat.jumps()方法是一个箭头函数，这是错误的。调用cat.jumps()时，如果是普通函数，该方法内部的this指向cat；如果写成上面那样的箭头函数，使得this指向全局对象，因此不会得到预期结果。这是因为对象不构成单独的作用域，导致jumps箭头函数定义时的作用域就是全局作用域。

// 第二个场合是需要动态this的时候，也不应使用箭头函数。

// var button = document.getElementById('press');
// button.addEventListener('click', () => {
//   this.classList.toggle('on');
// });
// 上面代码运行时，点击按钮会报错，因为button的监听函数是一个箭头函数，导致里面的this就是全局对象。如果改成普通函数，this就会动态指向被点击的按钮对象。

// 另外，如果函数体很复杂，有许多行，或者函数内部有大量的读写操作，不单纯是为了计算值，这时也不应该使用箭头函数，而是要使用普通函数，这样可以提高代码可读性。


// 箭头函数内部，还可以再使用箭头函数。下面是一个 ES5 语法的多重嵌套函数。

// function insert(value) {
//   return {into: function (array) {
//     return {after: function (afterValue) {
//       array.splice(array.indexOf(afterValue) + 1, 0, value);
//       return array;
                                               
//     }};
//   }};
// }

// insert(2).into([1, 3]).after(1); //[1, 2, 3]
// 上面这个函数，可以使用箭头函数改写。

// let insert = (value) => ({into:(array) => ({after:(afterValue) => {
//   array.splice(array.indexOf(afterValue) + 1, 0, value);
//   return array;
// }})});


// let insert = (value) => ({into: (array) => ({after: (afterValue) => {
//   array.splice(array.indexOf(afterValue) + 1, 0, value);
//   return array;
// }})});

// insert(2).into([1, 3]).after(1); //[1, 2, 3]

// 部署管道机制（pipeline）的例子，即前一个函数的输出是后一个函数的输入。
// const pipeline = (...funcs) =>
//   val => funcs.reduce((a, b) => b(a), val);

// const plus1 = a => a + 1;
// const mult2 = a => a * 2;
// const addThenMult = pipeline(plus1, mult2);

// log(addThenMult(5))

// const plus1 = a => a + 1;
// const mult2 = a => a * 2;

// mult2(plus1(5))

// 箭头函数还有一个功能，就是可以很方便地改写 λ 演算。

// λ演算的写法
// fix = λf.(λx.f(λv.x(x)(v)))(λx.f(λv.x(x)(v)))

// // ES6的写法
// var fix = f => (x => f(v => x(x)(v)))
//                (x => f(v => x(x)(v)));

// 尾调用优化
// 什么是尾调用？
// 尾调用（Tail Call）是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。

// function f(x){
//   return g(x);
// }
// 上面代码中，函数f的最后一步是调用函数g，这就叫尾调用。

// 以下三种情况，都不属于尾调用。

// 情况一
// function f(x){
//   let y = g(x);
//   return y;
// }

// // 情况二
// function f(x){
//   return g(x) + 1;
// }

// // 情况三
// function f(x){
//   g(x);
// }


// function f(x) {
//   if (x > 0) {
//     return m(x)
//   }
//   return n(x);
// }
// 上面代码中，函数m和n都属于尾调用，因为它们都是函数f的最后一步操作。


// function f() {
//   let m = 1;
//   let n = 2;
//   return g(m + n);
// }
// f();

// // 等同于
// function f() {
//   return g(3);
// }
// f();

// 等同于
// g(3);
// 上面代码中，如果函数g不是尾调用，函数f就需要保存内部变量m和n的值、g的调用位置等信息。但由于调用g之后，函数f就结束了，
// 所以执行到最后一步，完全可以删除f(x)的调用帧，只保留g(3)的调用帧。

// function addOne(a){
//   var one = 1;
//   function inner(b){
//     return b + one;
//   }
//   return inner(a);
// }
// 上面的函数不会进行尾调用优化，因为内层函数inner用到了外层函数addOne的内部变量one。


// 尾递归 §
// 函数调用自身，称为递归。如果尾调用自身，就称为尾递归。

// 递归非常耗费内存，因为需要同时保存成千上百个调用帧，很容易发生“栈溢出”错误（stack overflow）。但对于尾递归来说，由于只存在一个调用帧，所以永远不会发生“栈溢出”错误。

// function factorial(n) {   
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }

// factorial(5) // 120
// 上面代码是一个阶乘函数，计算n的阶乘，最多需要保存n个调用记录，复杂度 O(n) 。

// 如果改写成尾递归，只保留一个调用记录，复杂度 O(1) 。

// function factorial(n, total) {
//   if (n === 1) return total;
//   return factorial(n - 1, n * total);
// }

// factorial(5, 1) // 120
// 还有一个比较著名的例子，就是计算 Fibonacci 数列，也能充分说明尾递归优化的重要性。

// 非尾递归的 Fibonacci 数列实现如下。

// function Fibonacci (n) {
//   if ( n <= 1 ) {return 1};

//   return Fibonacci(n - 1) + Fibonacci(n - 2);
// }

// Fibonacci(10) // 89
// Fibonacci(100) // 超时
// Fibonacci(500) // 超时
// 尾递归优化过的 Fibonacci 数列实现如下。

// function Fibonacci2 (n , ac1 = 1 , ac2 = 1) {
//   if( n <= 1 ) {return ac2};

//   return Fibonacci2 (n - 1, ac2, ac1 + ac2);
// }

// Fibonacci2(100) // 573147844013817200000
// Fibonacci2(1000) // 7.0330367711422765e+208
// Fibonacci2(10000) // Infinity
// 由此可见，“尾调用优化”对递归操作意义重大，所以一些函数式编程语言将其写入了语言规格。
// ES6 亦是如此，第一次明确规定，所有 ECMAScript 的实现，都必须部署“尾调用优化”。
// 这就是说，ES6 中只要使用尾递归，就不会发生栈溢出（或者层层递归造成的超时），相对节省内存。


// 递归函数的改写
// 尾递归的实现，往往需要改写递归函数，确保最后一步只调用自身。做到这一点的方法，就是把所有用到的内部变量改写成函数的参数。比如上面的例子，阶乘函数 factorial 需要用到一个中间变量total，那就把这个中间变量改写成函数的参数。这样做的缺点就是不太直观，第一眼很难看出来，为什么计算5的阶乘，需要传入两个参数5和1？

// 两个方法可以解决这个问题。方法一是在尾递归函数之外，再提供一个正常形式的函数。

// function tailFactorial(n, total) {
//   if (n === 1) return total;
//   return tailFactorial(n - 1, n * total);
// }

// function factorial(n) {
//   return tailFactorial(n, 1);
// }

// factorial(5) // 120
// 上面代码通过一个正常形式的阶乘函数factorial，调用尾递归函数tailFactorial，看起来就正常多了。

// 函数式编程有一个概念，叫做柯里化（currying），意思是将多参数的函数转换成单参数的形式。这里也可以使用柯里化。

// function currying(fn, n) {
//   return function (m) {
//     return fn.call(this, m, n);
//   };
// }

// function tailFactorial(n, total) {
//   if (n === 1) return total;
//   return tailFactorial(n - 1, n * total);
// }

// const factorial = currying(tailFactorial, 1);

// log(factorial(5)) // 120
// 上面代码通过柯里化，将尾递归函数tailFactorial变为只接受一个参数的factorial。


// 第二种方法就简单多了，就是采用 ES6 的函数默认值。

// function factorial(n, total = 1) {
//   if (n === 1) return total;
//   return factorial(n - 1, n * total);
// }

// log(factorial(5)) // 120

// 严格模式
// ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。

// 这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。

// func.arguments：返回调用时函数的参数。
// func.caller：返回调用当前函数的那个函数。
// 尾调用优化发生时，函数的调用栈会改写，因此上面两个变量就会失真。严格模式禁用这两个变量，所以尾调用模式仅在严格模式下生效。

// function restricted() {
//   'use strict';
//   restricted.caller;    // 报错
//   restricted.arguments; // 报错
// }
// restricted();


// 尾递归优化的实现
// 尾递归优化只在严格模式下生效，那么正常模式下，或者那些不支持该功能的环境中，有没有办法也使用尾递归优化呢？回答是可以的，就是自己实现尾递归优化。

// 它的原理非常简单。尾递归之所以需要优化，原因是调用栈太多，造成溢出，那么只要减少调用栈，就不会溢出。怎么做可以减少调用栈呢？就是采用“循环”换掉“递归”。

// 下面是一个正常的递归函数。

// function sum(x, y) {
//   if (y > 0) {
//     return sum(x + 1, y - 1);
//   } else {
//     return x;
//   }
// }

// log(sum(1, 100000))


// 蹦床函数（trampoline）可以将递归执行转为循环执行。

// function trampoline(f) {
//   while (f && f instanceof Function) {
//     f = f();
//   }
//   return f;
// }

// log(trampoline(sum(1, 100000)))
// 上面就是蹦床函数的一个实现，它接受一个函数f作为参数。只要f执行后返回一个函数，就继续执行。注意，这里是返回一个函数，然后执行该函数，而不是函数里面调用函数，这样就避免了递归执行，从而就消除了调用栈过大的问题。

// 然后，要做的就是将原来的递归函数，改写为每一步返回另一个函数。

// function sum(x, y) {
//   if (y > 0) {
//     return sum.bind(null, x + 1, y - 1);
//   } else {
//     return x;
//   }
// }
// log(sum(1, 100000))
// 上面代码中，sum函数的每次执行，都会返回自身的另一个版本。

// 蹦床函数并不是真正的尾递归优化，下面的实现才是。

// function tco(f) {
//   var value;
//   var active = false;
//   var accumulated = [];

//   return function accumulator() {
//     accumulated.push(arguments);
//     if (!active) {
//       active = true;
//       while (accumulated.length) {
//         value = f.apply(this, accumulated.shift());
//       }
//       active = false;
//       return value;
//     }
//   };
// }

// var sum = tco(function(x, y) {
//   if (y > 0) {
//     return sum(x + 1, y - 1)
//   }
//   else {
//     return x
//   }
// });

// sum(1, 100000)
// 100001
// 上面代码中，tco函数是尾递归优化的实现，它的奥妙就在于状态变量active。默认情况下，
// 这个变量是不激活的。一旦进入尾递归优化的过程，这个变量就激活了。然后，
// 每一轮递归sum返回的都是undefined，所以就避免了递归执行；而accumulated数组存放每一轮sum执行的参数，
// 总是有值的，这就保证了accumulator函数内部的while循环总是会执行。
// 这样就很巧妙地将“递归”改成了“循环”，而后一轮的参数会取代前一轮的参数，保证了调用栈只有一层。


// unction clownsEverywhere(
//   param1,
//   param2
// ) { /* ... */ }

// clownsEverywhere(
//   'foo',
//   'bar'
// );
// 上面代码中，如果在param2或bar后面加一个逗号，就会报错。

// 如果像上面这样，将参数写成多行（即每个参数占据一行），以后修改代码的时候，想为函数clownsEverywhere添加第三个参数，或者调整参数的次序，就势必要在原来最后一个参数后面添加一个逗号。这对于版本管理系统来说，就会显示添加逗号的那一行也发生了变动。这看上去有点冗余，因此新的语法允许定义和调用时，尾部直接有一个逗号。

// function clownsEverywhere(
//   param1,
//   param2,
// ) { /* ... */ }

// clownsEverywhere(
//   'foo',
//   'bar',
// );

// clownsEverywhere.param1 = '1'
// log(clownsEverywhere.param1)

// Function.prototype.toString()
// ES2019 对函数实例的toString()方法做出了修改。

// toString()方法返回函数代码本身，以前会省略注释和空格。

// function /* foo comment */ foo () {}

// foo.toString()
// // function foo() {}
// 上面代码中，函数foo的原始代码包含注释，函数名foo和圆括号之间有空格，但是toString()方法都把它们省略了。

// 修改后的toString()方法，明确要求返回一模一样的原始代码。

// function /* foo comment */ foo () {}

// foo.toString()
// // "function /* foo comment */ foo () {}"


// catch 命令的参数省略
// JavaScript 语言的try...catch结构，以前明确要求catch命令后面必须跟参数，接受try代码块抛出的错误对象。

// try {
//   // ...
// } catch (err) {
//   // 处理错误
// }
// 上面代码中，catch命令后面带有参数err。

// 很多时候，catch代码块可能用不到这个参数。但是，为了保证语法正确，还是必须写。ES2019 做出了改变，允许catch语句省略参数。

// try {
//   // ...
// } catch {
//   // ...
// }