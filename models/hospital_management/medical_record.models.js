import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
  {
    name: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const MedicalRecord = mongoose.model(
  "MedicalRecord",
  medicalRecordSchema
);
