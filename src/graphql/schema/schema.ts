export const schema = `#graphql

type User{
    _id: ID!
    name: String!
    email: String
    verified: Boolean
    createdAt: String
    updatedAt: String
}

type Course{
    title: String
    price: Int
}

type Query { 
    greet:String
    greet2: String
    users: [User]
    courses: [Course]
    courseByName(title: String!): Course
    
}

type Mutation {
  updateUser(_id: ID!, name: String, email: String): User
  createUser(name: String!, email: String!, verified: String): User
  deleteUser(_id: ID!): User
  deleteUserByEmail(email: String!): User
}


`;
