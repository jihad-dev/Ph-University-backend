import { TacdemicFaculty } from "./acdemicFaculty.interface";
import { AcdemicFaculty } from "./acdemicFaculty.model";


const createAcademicFacultyIntoDB = async (payload: TacdemicFaculty) => {

  const result = await AcdemicFaculty.create(payload);
  return result;
};

const getAllAcademicFacultysFromDB = async () => {
  const result = await AcdemicFaculty.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await AcdemicFaculty.findById(id);
  return result;
};

const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: Partial<TacdemicFaculty>,
) => {
  

  const result = await AcdemicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicFacultyServices = {
    createAcademicFacultyIntoDB,
  getAllAcademicFacultysFromDB,
  getSingleAcademicFacultyFromDB,
  updateAcademicFacultyIntoDB,
};
