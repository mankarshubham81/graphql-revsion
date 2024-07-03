
import { Course } from './../models/course.js';

export const getAllCourses = async () => {
    const courses = await Course.find();
    return courses;
};

export const getCourseByName = async ( _: any, { title  }: {title: string}) => {
    const course = await Course.findOne({ title });
    return course;
  };