const Joi = require("joi")

const Joi = require('@hapi/joi');

// Define the allowed file types
const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif'];

// Define the Joi schema for the image
const imageSchema = Joi.object({
  fieldname: Joi.string().required(),
  originalname: Joi.string().required(),
  encoding: Joi.string().required(),
  mimetype: Joi.string().valid(...allowedMimeTypes).required(),
  size: Joi.number().max(2 *  1024 *  1024).required(), // Limit to  2MB
});

const CustomerValidation = (data)=>{
    const Schema = Joi.object({
        username : Joi.string().min(3).required("username required"),
        customer_name : Joi.string().min(3).required("customer_name required"),
        email : Joi.string().email().required("email required"),
        image : imageSchema
    })
    return Schema.validate(data)
}


export {CustomerValidation}