import mongoose from "mongoose";

const designationSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        status: { type: String, enum: ['active', 'inactive'] },
        createdAt: { type: Date, required: true }
    }
);

const designation = mongoose.model("Designation", designationSchema);

export default designation;