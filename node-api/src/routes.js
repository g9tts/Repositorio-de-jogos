const express = require('express');
const routes = express.Router();

const ProductController = require("./controllers/ProductController");


routes.get("/products", ProductController.index);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.delete("/products/:id", ProductController.update);
//routes.delete("/products/:id", ProductController.destroy);

//   Product.create({
    //       title: 'React Native',
    //       description:'Build native apps with React',
    //       url:'http://github.com/facebook/react-native'
    //   });
    
    //res.send("Paoadadasd");
//});

module.exports = routes;