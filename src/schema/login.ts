/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CredentialsInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_authUser_role {
  __typename: "UserRole";
  code: string | null;
  label: string | null;
}

export interface login_authUser {
  __typename: "AuthenticatedUser";
  id: any;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  role: login_authUser_role | null;
  photo: string | null;
  phone: string | null;
  created_at: any | null;
  updated_at: any | null;
  apiToken: string;
}

export interface login {
  authUser: login_authUser | null;
}

export interface loginVariables {
  credentials: CredentialsInput;
}
