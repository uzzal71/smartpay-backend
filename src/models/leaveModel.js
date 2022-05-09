import mongoose from "mongoose";

const leaveSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        days: { type: Number, required: true },
        status: { type: String, enum: ['active', 'inactive'] },
        createdAt: { type: Date, required: true }
    }
);

const leave = mongoose.model("Leave", leaveSchema);

export default leave;