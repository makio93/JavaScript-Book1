var x = 1;
var y = x;
x = 2;
console.log(y); // 結果：1

var data1 = [0, 1, 2]; // 配列リテラルを宣言
var data2 = data1;
data1[0] = 5;
console.log(data2); // 結果：[5, 1, 2]
