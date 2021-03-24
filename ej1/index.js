const fs = require('fs')


// fs.readFile('./clients/clients.json', 'utf-8', (err, data) =>{
//     if(err){
//         console.log(err)
//     }
//     else {
//         try{
//             const parseData = JSON.parse(data)
//             console.log(parseData.address);
//         }
//         catch {
//             console.log(err)
//         }
        

        
//     }
// })

// parse/stringify
// callback
// object

const newUser = {
    user : "martin",
    category : 5,
    address : "san lorenzo"
}

//  fs.writeFile('./users.json', JSON.stringify(newUser), (err, success) =>{
//      if(err){
//          console.log(err)
//      } else {
//          console.log(success,"joya");
//      }
//  })

