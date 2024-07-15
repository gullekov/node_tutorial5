const fs = require('fs')


if(fs.existsSync('./blog/delete.txt')){
    fs.unlink('./blog/delete.txt', (err)=>{
        if(err){
            console.log(`file tapylmady ${err}`)
        }else{
            console.log("file delete edildi ustunlikli yagdayda")
        }
    })
}


//  
// fs.existsSync  argumenti file systemasynda ginisden ulanylyr bu bizin gorkezyan faylymyz barmy yada vokmy 
//  shony senkron bir yagdayda gozegcilik eder. 
