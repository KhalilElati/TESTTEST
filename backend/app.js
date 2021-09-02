const express= require('express');
const app=express();
const mongoose = require('mongoose');

const Product = require('./models/product');


mongoose.connect('mongodb+srv://delta10210:1234@cluster0.onzgm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req,res,next)=>{
    res.json({message:'good'});
    next();
});

app.post('/api/products',(req,res)=>{
    delete req.body._id;
    const thing = new Product({
        ...req.body
    });
    product.save()
    .then((product)=>res.status(201).json({product}))
    .catch(error => res.status(400).json({error}));
   res.json({message:'asb'});
});
app.use('./api/products/',(req,res)=>{
    Product.find()
    .then(products=> res.status(200).json(things))
    .catch(error => res.status(400).json({error}));
});


app.get('./api/products/:id',(req,res)=>{
    Product.findOne({_id:req.params.id})
    .then(product=>res.status(200).json(product))
    .catch(error => res.status(400).json({error}));

    
});
app.put('./api/products/:id',(req,res)=>{
    Product.updateOne({_id : req.body.params},{...req.body,_id:req.params.id})
    .then(()=>res.status(200).json({message:'bien'}))
    .catch(error=> res.status(400).json({error}));
});
app.delete('./api/products/:id',(req,res)=>{
    Product.deleteOne({_id:req.params.id})
    .then(()=>res.status(200).json({message:'supprime'}))
    .catch(error => res.status(400).json({error}))
})



module.exports=app;