var p1 = new Promise((resolve,reject)=>
    {
        // console.log('First Date',new Date())
        setTimeout(resolve,4000,'First Promise Called')
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
    

    var p = Promise.race([p1,p2,p3])
    p.then((result)=>
    {
        console.log('All Promises Called',new Date(),result)
    })
    
    console.log('Main thread Ended',new Date());