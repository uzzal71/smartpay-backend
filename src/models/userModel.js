import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        full_name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        status: { type: String, enum: ['active', 'inactive'] },
        createdAt: { type: Date, required: true }
    }
);

const user = mongoose.model("User", userSchema);

export default user;