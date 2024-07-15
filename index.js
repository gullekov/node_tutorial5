const fs = require('fs')



fs.readFile('./blog/deneme.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log("maglumat we file tapylmady")
    }else{
        console.log(data+ " " + "doly yagdayda tapyldy")
    }
})

// consolede <Buffer> bermeginin duyp sebaplerinden biri  code  UTF-8 padyaska etmesek onda gonumel papka bize 
// buffer gornusinde bir cikdi beryar. 


