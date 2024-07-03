// to start project run => npm run watch 
// and in other terminal run => npm run dev


// Example Query
// query ExampleQuery {
//     courses {
//       price
//       title
//     }
//     greet
//   }
  

// find course by name
// query {
//     courseByName(title: "advance mathemathics") {
//       title
//       price
//     }
//   }

// another vaersion
//1) query
// query Get_COURSE_BY_NAME($title: String!) {
//     courseByName(title: $title) {
//       title
//       price
//     }
//   }
// input in Varibles section => {"title":  "advance mathemathics"}

// Update uasr name 
// mutation {
//   updateUser(_id: "66806973ef24653a582d682c", name: "New Name", email: "newemail@example.com") {
//     _id
//     name
//     email
//   }
// }


// use existing user id as input and modify name and email as like as you want
// mutation {
//     updateUser(_id: "668388dd51f4f9b21932814d", name: "Navin Shaha", email: "navinshash101@gamil.com") {
//       _id
//       name
//       email
//     }
//   }
// OR=============
// mutation UPDATE_USER($_id: ID!, $name: String, $email: String) {
//     updateUser(_id: $_id, name: $name, email: $email) {
//       _id
//       name
//       email
//     }
//   }
// Input===========
// {
//     "_id": "668388dd51f4f9b21932814d",
//     "name": "pavan kumar",
//     "email": "pavamk@gmail.com"
//   }
// ==================================================
// create new user
// mutation {
//     createUser(name: "eohn Doe", email: "eohn.doe@example.com") {
//       _id
//       name
//       email
//       verified
//       createdAt
//     }
//   }

// delete existing user by id
// mutation {
//     deleteUser(_id: "66806973ef24653a582d682c") {
//       _id
//       name
//       email
//     }
//   }


// delete existing user by emailId
// mutation {
//     deleteUserByEmail(email: "eohn.doe@example.com") {
//       _id
//       name
//       email
//     }
//   }



// Structure of Query in production projects

// path => shared/queries

export const GET_METADATA = gql`
query($entity: String!){
  metadata(entity: $entity) {
    name
    description    
    fields {
      name
      description
       type
       isCurrency
       displayName
       editorType
       filterType
       isHidden
       isReadOnly
     editorConfigs{
      name
      multiple
      display
      sort
      store
      format
      lookUpQuery
      options{
        key
        value
      }
     }
       validations{
        type
        description
        arguments
       }
    }
  }
}`;

export const GET_CUSTOMERS_NAMES = gql`
query GetCustomerNames($first: Int, $after: String, $before: String $filterInput: CustomerFilterInput) {
  customers(first: $first, after: $after, before: $before, where: $filterInput) {
  nodes {
      id
      name
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      startCursor
      endCursor
    }
  }
}`;


export const GET_GRID_VIEWS = gql`
query GET_GRID_VIEWS ($viewId: Int!) {
  gridViews (viewId: $viewId) {
    id,
    viewId,
    gridId,
    tenantId,
    viewName,
    columns {
      rootElement
    }
  }
}`


export const MODIFY_GRIDVIEW = (fields: string[]) => gql`
  mutation ($gridViewModel: GridViewModelInput!) {
    modifyGridView(gridViewModel: $gridViewModel) {
      ${fields?.map((f: any) => f)}
    }
  }
`

// =====================================
// audit file

import { GET_GRID_VIEWS, GET_METADATA, MODIFY_GRIDVIEW } from '@shared/queries';
import { useMutation, useQuery } from '@apollo/client';



const viewId = 26;

// get all available columns 
const { loading: isSchemaLoading, data: schemaData } = useQuery(
    GET_METADATA, {
    variables: {
        entity: 'Audit',
    }
});

// get grid view if viewId is present 
const { data: gridViewData } = useQuery(
    GET_GRID_VIEWS, {
    variables: {
        viewId: viewId,
    },
    fetchPolicy: 'network-only'
});

// get project data if fields are present
const { data: auditData, fetchMore } = useQuery(GET_AUDIT_DATA(fields!), {
    skip: !fields,
    fetchPolicy: 'network-only'
});

const [updateGridView] = useMutation(MODIFY_GRIDVIEW(['id']));

const [updateFunction] = useMutation(UPDATE_MUTATION(mutationFields, { entity: 'Audit', api: 'modifySettingsTable', dto: 'settingsTable', model: 'SettingsInput!' }));

const [deleteFunction] = useMutation(DELETE_MUTATION({ entity: 'Audit', api: 'deleteSettingsTable' }));