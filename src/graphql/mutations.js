/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createInfo = /* GraphQL */ `
  mutation CreateInfo(
    $input: CreateInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    createInfo(input: $input, condition: $condition) {
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
export const updateInfo = /* GraphQL */ `
  mutation UpdateInfo(
    $input: UpdateInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    updateInfo(input: $input, condition: $condition) {
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
export const deleteInfo = /* GraphQL */ `
  mutation DeleteInfo(
    $input: DeleteInfoInput!
    $condition: ModelInfoConditionInput
  ) {
    deleteInfo(input: $input, condition: $condition) {
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
