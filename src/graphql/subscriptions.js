/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateInfo = /* GraphQL */ `
  subscription OnCreateInfo($filter: ModelSubscriptionInfoFilterInput) {
    onCreateInfo(filter: $filter) {
      userId
      name
      phone
      address
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateInfo = /* GraphQL */ `
  subscription OnUpdateInfo($filter: ModelSubscriptionInfoFilterInput) {
    onUpdateInfo(filter: $filter) {
      userId
      name
      phone
      address
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteInfo = /* GraphQL */ `
  subscription OnDeleteInfo($filter: ModelSubscriptionInfoFilterInput) {
    onDeleteInfo(filter: $filter) {
      userId
      name
      phone
      address
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
