var p1 = new Promise((resolve,reject)=>
{
    // console.log('First Date',new Date())
    setTimeout(resolve,1000,'First Promise Called')
})

var p2 = new Promise((resolve,reject)=>
{
    // console.log('Second Date',new Date())
    setTimeout(resolve,2000,'Second Promise Called')
})

var p3 = new Promise((resolve,reject)=>
{
    // console.log('Third Date',new Date())
    setTimeout(resolve,3000,'Third Promise called')
})

// p1.then((result)=>
// {
//     console.log('P1',new Date(),result)
// })

// p2.then((result)=>
// {
//     console.log('P2',new Date(),result)
// })

// p3.then((result)=>
// {
//     console.log('P3', new Date(), result)
// })

var p = Promise.all([p1,p2,p3])
p.then((result)=>
{
    console.log('All Promises Called',new Date(),result)
})

// console.log('Main thread Ended',new Date());