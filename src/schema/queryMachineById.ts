/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryMachineById
// ====================================================

export interface queryMachineById_machineById_location_address {
  __typename: "Address";
  google_address: string;
}

export interface queryMachineById_machineById_location {
  __typename: "Location";
  name: string;
  address: queryMachineById_machineById_location_address | null;
  contact_first_name: string | null;
  contact_last_name: string | null;
  contact_phone: string | null;
  contact_role: string | null;
  notes: string | null;
}

export interface queryMachineById_machineById_restocks_status {
  __typename: "CodeLabelPair";
  code: number;
  label: string;
}

export interface queryMachineById_machineById_restocks_operator {
  __typename: "User";
  first_name: string | null;
  last_name: string | null;
}

export interface queryMachineById_machineById_restocks {
  __typename: "Restock";
  id: any;
  status: queryMachineById_machineById_restocks_status | null;
  operator: queryMachineById_machineById_restocks_operator | null;
  created_at: any | null;
}

export interface queryMachineById_machineById {
  __typename: "Machine";
  id: any;
  place: string | null;
  location: queryMachineById_machineById_location | null;
  restocks: (queryMachineById_machineById_restocks | null)[] | null;
}

export interface queryMachineById {
  machineById: queryMachineById_machineById | null;
}

export interface queryMachineByIdVariables {
  id: any;
}
