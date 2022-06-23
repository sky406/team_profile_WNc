import express from 'express';

import cors from 'cors';



import mysql from 'mysql';

// Connect to the DB
const db = mysql.createConnection({
  host: 'localhost',
  port: 8889,
  user: 'root',
  password: 'root',
  database: 'team_profile',
});
db.connect(error => {
  if (error) console.log('Sorry cannot connect to db: ', error);
  else console.log('Connected to mysql db');
});

const server = express();

server.use(cors());



let jsonData = [
    {id:1, name:"iphone", price:1999, image:"https://merchandising-assets.bestbuy.ca/bltc8653f66842bff7f/blt5682ca822f65194f/618c710e7ae6ce6fab413859/bbym-20211119-feature-fg-iphone-gc-gwp-s-en.png?quality=80&auto=webp"},
    {id:2,name:"Samsung", price:999, image:"https://multimedia.bbycastatic.ca/multimedia/products/500x500/159/15952/15952623.jpg"},
    {id:3, name:"LG", price:599, image:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6337/6337607_sd.jpg"},
    {id:4, name:"not known", price:0, image:"not known"}
]


// server.get("/:id", (req, res)=>{

   
//     // res.send(req.params.id);
//     res.send(jsonData.find(x=>x.id == req.params.id ));

// })


// server.get('/', (req, res) => {
//     let allPro = CALL `all_users`();
//     db.query(allPro, (error, products) => {
//       if (error) {
//         console.log(error);
//       } else {
//         res.json(products[0]);
//       }
//     });
//   });


  server.get('/:ID', (req, res) => {
    let user_id = req.params.ID;
    let userSP = "CALL `one_user`(?)";
    db.query(userSP, [user_id], (error, data, fields) => {
        if(error ){
            res.json({ ErrorMessage: error });
        }
        else{
            if(data[0].length == 0){
                res.json({productid: false, message: 'No users with that ID exists'});
            }else{
            res.json(data[0]);
            }
        }
    })
});

// server.get(“/product/:id”, (req, res) => {
//     let productID = req.params.id;
//     let SP = “CALL `getProductByID`(?)“;
//     db.query(SP, [productID], (error, product) => {
//       if (error) {
//         res.json({productid: false, message: error});
//       } else {
//         if (product[0].length === 0) {
//           res.json({productid: false, message: “No product with that ID exists”});
//         } else {
//           res.json({productid: true, message: “ProductID successfully”, productData: product[0]});
//         }
//       }
//     });
//   });

server.listen(4400, function(){
    console.log("Node Express server is now running on port 4400");
})