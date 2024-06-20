import mongoose from 'mongoose';

const PatientHospital = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonsedwith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    BloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Others'],
      required: true,
    },
    admittedIn: {
      type: mongoose.Schem.Types.ObjectId,
      ref: 'HospitalMedical',
    },
  },
  { timestamps: true }
);

export const HospitalPatient = mongoose.model(
  'HospitalPatient',
  PatientHospital
);
