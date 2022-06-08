// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.


// TODO write your code here...
var name = 'hello';
var name1 = name.toUpperCase();
console.log(name1);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
function titleCase(str){
    var arr = str.split(' ');
    for(var i = 0; i<arr.length; i++){
        arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr.join(" ");
}
console.log(titleCase(sentence))


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var res = money.slice(-2)
console.log(res);
