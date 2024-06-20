import mongoose from 'mongoose';

const MedicalRecord = new mongoose.schema({}, { timestamps: true });

export const RecordMedical = mongoose.model('RecordMedical', MedicalRecord);
