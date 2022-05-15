import mongoose from "mongoose";

const officeScheduleSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        office_start: { type: String, required: true },
        late_start: { type: String, required: true },
        late_end: { type: String, required: true },
        office_end: { type: String, required: true },
        ot_start: { type: String, required: true },
        ot_end: { type: String, required: true },
        status: { type: String, enum: ['active', 'inactive'] },
        createdAt: { type: Date, required: true }
    }
);

const schedule = mongoose.model("Schedule", officeScheduleSchema);

export default schedule;