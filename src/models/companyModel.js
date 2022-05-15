import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
    {
        full_name: { type: String, required: true },
        short_name: { type: String, required: true },
        owner_name: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        website: { type: String, required: true },
        address: { type: String, required: true },
        logo: { type: String },
        status: { type: String, enum: ['active', 'inactive'] },
        createdAt: { type: Date, required: true }
    }
);

const company = mongoose.model("Company", companySchema);

export default company;