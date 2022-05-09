import mongoose from "mongoose";

const taxSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        status: { type: String, enum: ['active', 'inactive'] },
        createdAt: { type: Date, required: true }
    }
);

const tax = mongoose.model("Tax", taxSchema);

export default tax;