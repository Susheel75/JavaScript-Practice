function divide(no1,no2){
    if(no2==0){
        return 'Error'
    }
    else
    return no1/no2;
}

/// Call a function in async way using promise // Amit
var p= new Promise((resolve,reject)=>{
var r=divide(10,0);
if(r=='Error'){
reject('Please enter non zero value')
}
else{
    resolve(r)
}

})
//// Now to want to get result from promise object.
p.then((result)=>{
    console.log('Then')
    console.log(result)
}).catch((error)=>{
    console.log('Catch')
    console.log(error);
})