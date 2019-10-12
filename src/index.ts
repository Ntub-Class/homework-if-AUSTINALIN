/ 請介紹兩個字串方法跟數字方法

//兩個字串方法//
let aa ='HI';
console.log(aa.concat ('sir','.nice to meet you.'));//display:HI SIR.nice to meet you.
//CONCAT 是連結二個字串產生新的字串//

let  b = 'go ,or not';
console.log(b.includes('go'));//display:True
//includes 表示字串中是否有包含另一個字串的值有是true//


//兩個數字方法//

let kk =10;
console.log(kk.toString());//display:10
// toString() 顥示變數的數值。

let jj = 7.123456
console.log(jj.toPrecision(3))//display:7.12
// toPrecision() 表示顥示指定位數的数值。

// 錢錢大於一個值，叫乾爹
let money = 40000;
let limit = 500000; // 限制值

if (money < 40000){
console.log('錢太少');}
 else {
  (limit > 500000)
   console.log('叫乾爹');}


