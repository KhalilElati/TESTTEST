const mongoose =require('mongoose');

const productSchema=mongoose.Schema({
    name:{ type : String, required:true},
    description :{type:String, required:true},
    price:{type:Number,required:true},
    inStoch:{type :Boolean,required:true}                            // "name": string,
                                // "description": string,
                                // "price": number,
                                // "inStock": boolean
});
module.exports= mongoose.model('Product',productSchema);