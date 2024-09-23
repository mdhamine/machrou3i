import { defineEventHandler, readBody } from 'h3'
import mongoose from "mongoose";
import { Schema, model } from 'mongoose';


export default defineEventHandler(async (event) => {
  

try {
    await mongoose.connect(process.env.MONGO_URL as string);
    } catch (err) {
    console.error('connection error:', err);
    }

    const request = await readBody(event);

    const orderSchema = new Schema({
        name: String,
        phone: Number,
        state: String,
        product: String,
    });
    
    const OrderModel = model("Order", orderSchema);

    if (!request.name || !request.phone || !request.state || !request.product) {
        return { success: false, message: "All fields are required." };
      }
    
    
      const data = new OrderModel({
        name: request.name,
        phone: request.phone,
        state: request.state,
        product: request.product,
      });
    
      await data.save();
    
      return { success: true, data: { order: data } };
  }
  
);
