/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Mutation = {
  __typename?: "Mutation";
  addPet?: Maybe<Pet>;
  deletePet?: Maybe<Array<Maybe<Pet>>>;
  editPet?: Maybe<Pet>;
};

export type MutationAddPetArgs = {
  petToAdd: PetToAdd;
};

export type MutationDeletePetArgs = {
  id: Scalars["ID"]["input"];
};

export type MutationEditPetArgs = {
  petToEdit: PetToEdit;
};

export type Pet = {
  __typename?: "Pet";
  age: Scalars["Int"]["output"];
  breed: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  type: Scalars["String"]["output"];
};

export type PetToAdd = {
  age: Scalars["Int"]["input"];
  breed: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
};

export type PetToEdit = {
  age: Scalars["Int"]["input"];
  breed: Scalars["String"]["input"];
  id: Scalars["ID"]["input"];
  name: Scalars["String"]["input"];
  type: Scalars["String"]["input"];
};

export type Query = {
  __typename?: "Query";
  pet?: Maybe<Pet>;
  pets?: Maybe<Array<Maybe<Pet>>>;
};

export type QueryPetArgs = {
  id: Scalars["ID"]["input"];
};

export type DeletePetMutationVariables = Exact<{
  deletePetId: Scalars["ID"]["input"];
}>;

export type DeletePetMutation = {
  __typename?: "Mutation";
  deletePet?: Array<{ __typename?: "Pet"; id: string } | null> | null;
};

export type AddPetMutationVariables = Exact<{
  petToAdd: PetToAdd;
}>;

export type AddPetMutation = {
  __typename?: "Mutation";
  addPet?: {
    __typename?: "Pet";
    id: string;
    name: string;
    type: string;
    age: number;
    breed: string;
  } | null;
};

export type EditPetMutationVariables = Exact<{
  petToEdit: PetToEdit;
}>;

export type EditPetMutation = {
  __typename?: "Mutation";
  editPet?: {
    __typename?: "Pet";
    id: string;
    name: string;
    type: string;
    age: number;
    breed: string;
  } | null;
};

export type PetsQueryVariables = Exact<{ [key: string]: never }>;

export type PetsQuery = {
  __typename?: "Query";
  pets?: Array<{
    __typename?: "Pet";
    id: string;
    name: string;
    type: string;
    breed: string;
  } | null> | null;
};

export type PetQueryVariables = Exact<{
  petId: Scalars["ID"]["input"];
}>;

export type PetQuery = {
  __typename?: "Query";
  pet?: {
    __typename?: "Pet";
    id: string;
    name: string;
    type: string;
    age: number;
    breed: string;
  } | null;
};

export const DeletePetDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeletePet" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "deletePetId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deletePet" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "deletePetId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeletePetMutation, DeletePetMutationVariables>;
export const AddPetDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddPet" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "petToAdd" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "PetToAdd" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addPet" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "petToAdd" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "petToAdd" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "age" } },
                { kind: "Field", name: { kind: "Name", value: "breed" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddPetMutation, AddPetMutationVariables>;
export const EditPetDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "EditPet" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "petToEdit" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "PetToEdit" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "editPet" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "petToEdit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "petToEdit" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "age" } },
                { kind: "Field", name: { kind: "Name", value: "breed" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<EditPetMutation, EditPetMutationVariables>;
export const PetsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Pets" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pets" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "breed" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PetsQuery, PetsQueryVariables>;
export const PetDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Pet" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "petId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "pet" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "petId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "type" } },
                { kind: "Field", name: { kind: "Name", value: "age" } },
                { kind: "Field", name: { kind: "Name", value: "breed" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PetQuery, PetQueryVariables>;
