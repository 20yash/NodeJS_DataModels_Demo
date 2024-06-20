import monmgoose from 'mongoose';

//creating a mini model for number of hours
const HospitalDoctor = new mongoose.schema({
  name:{
    type:String,
    required:true
  },
  salary:{
    type:Number,
    required:true
  },
  qualification:{
    type:String,
    required:true
  },
  experienceInYears:{
    type:Number,
    default:0
  },
  worksInHospitals:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'HospitalMedical'
    },
  ]
}, { timestamps: true });

export const DoctorHospital = mongoose.model('DoctorHospital', HospitalDoctor);
