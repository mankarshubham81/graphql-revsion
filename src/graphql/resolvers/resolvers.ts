import { User } from '../../models/user.js';
import { Course } from '../../models/course.js';
import { getAllCourses, getCourseByName } from '../../controllers/course.js';
import { getAllUsers, updateUser } from '../../controllers/user.js';


export const resolvers = {
    Query:{
        greet: () => "Hi there",
        greet2: () => "Hello there",
        users: getAllUsers,
        courseByName: getCourseByName,
        courses: getAllCourses
      },
      Mutation: {
        updateUser,
        createUser: async (_: any, { name, email, verified = false }: { name: string; email: string , verified: boolean}) => {
          const newUser = new User({ name, email, verified });
          await newUser.save();
          return newUser;
        },
        createCourse: async (_: any, { title, price }: { title: string; price: Number }) => {
          const newCourse = new Course({ title, price });
          await newCourse.save();
          return newCourse;
        },
        deleteUser: async (_: any, { _id }: { _id: string }) => {
          const deletedUser = await User.findByIdAndDelete(_id);
          return deletedUser;
        },
        deleteUserByEmail: async (_: any, { email }: { email: string }) => {
          const deletedUser = await User.findOneAndDelete({ email });
          return deletedUser;
        }
      }
};