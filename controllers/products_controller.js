const Product = require('../models/product');

// function to show all the products
module.exports.products=function(req,res){
    Product.find({}, function(err, foundProducts){
        if(err){
            res.send(err);
        }else{
            res.send(foundProducts);
        }
    });
}

// function to create a new product
module.exports.create=function(req,res){
    const newProduct=new Product({
        name:req.body.name,
        quantity:req.body.quantity
    });
    newProduct.save(function(err){
        if(err){
            res.send(err);
        }else{
            res.send('New product added successfully.');
        }
    });
}

// function to delete a product using it's ID
module.exports.delete = function(req, res){
    Product.deleteOne(
        {_id: req.params.productID},
        function(err){
            if(err){
                res.send(err);
            }else{
                res.send({
                    message: "Product deleted"
                });
            }
        });
}


