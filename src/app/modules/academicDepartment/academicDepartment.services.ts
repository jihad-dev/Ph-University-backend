import { TacdemicDepartment } from "./academicDepartment.interface";
import { AcdemicDepartment } from "./academicDepartment.model";

const createAcademicDepartmentIntoDB = async (payload: TacdemicDepartment) => {
  const result = await AcdemicDepartment.create(payload);
  return result;
};

const getAllAcademicDepartmentFromDB = async () => {
  const result = await AcdemicDepartment.find();
  return result;
};

const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result = await AcdemicDepartment.findById(id);
  return result;
};

const updateAcademicDepartmentIntoDB = async (
  id: string,
  payload: Partial<TacdemicDepartment>
) => {
  const result = await AcdemicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true
    }
  );
  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAllAcademicDepartmentFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAcademicDepartmentIntoDB
};
