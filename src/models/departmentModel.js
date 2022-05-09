import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        status: { type: String, enum: ['active', 'inactive'] },
        createdAt: { type: Date, required: true }
    }
);

const department = mongoose.model("Department", departmentSchema);

export default department;