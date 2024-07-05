import dotenv from 'dotenv'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './graphql/schema/schema.js';
import { resolvers } from './graphql/resolvers/resolvers.js';
import { connectDB } from './database/databae.js';
import { User } from './models/user.js';
import { Course } from './models/course.js';
import { getAllCourses, getCourseByName } from './controllers/course.js';
import { getAllUsers, updateUser } from './controllers/user.js';

  dotenv.config({path: './.env',});

  export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
  const port = Number(process.env.PORT) || 4444;
  const mongoURI = process.env.MONGO_URI?.toString()!

  // databse connection
  connectDB(mongoURI);


const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,

});

startStandaloneServer(server, {
  listen: {
    port
  },
})


//  app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// app.use(cors({origin:' * ',credentials:true}));
// app.use(morgan('dev')) 


//   app.get('/', (req, res) => {
//     res.send('Hello, World!');
//   });

//   // your routes here

  
//   app.get("*", (req, res) => {
//     res.status(404).json({
//       success: false,
//       message: 'Page not found'
//     });
//   });

//   app.use(errorMiddleware);
  
  
  // app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));