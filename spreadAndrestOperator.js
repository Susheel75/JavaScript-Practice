// function sum(...arr)
// {
//     var s=0;
//     if(arr.length!=0)
//     {
//         for(var i=0;i<arr.length;i++)
//         {
//             s+= arr[i]
//         }
//     }
//     console.log(arr,s);

// }
// sum();
// sum(1,2);
// sum(1,2,3);
// sum(10,100,1);
//               // [] 0
// //output      // [ 1, 2 ] 3 
//               // [ 1, 2, 3 ] 6
//               // [ 10, 100, 1 ] 111


function charCount(data){
    var newStr='';
    var count=1;
    var char=''
    for(var i=0;i<data.length;i++){
        var e=data[i];
        if(char==''){
            char=e;
            newStr=e;
        }
        else{
            if(char==e){
                count++;
            }
            else{
                
                newStr+=count;
                newStr+=e;
                count=1
                char=e;
            }
        }
    }
    newStr+=count;
    console.log(newStr)
}
charCount('aabbbbbbbcccccaaa');

// var x=10;
// (function (){
//     console.log(x);
//      x=20;
//     console.log(x);
// })();