/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryMachines
// ====================================================

export interface queryMachines_machines_machines_location_address {
  __typename: "Address";
  google_address: string;
}

export interface queryMachines_machines_machines_location {
  __typename: "Location";
  id: any;
  name: string;
  address: queryMachines_machines_machines_location_address | null;
}

export interface queryMachines_machines_machines_status {
  __typename: "CodeLabelPair";
  code: number;
  label: string;
}

export interface queryMachines_machines_machines_next_restock_operator {
  __typename: "User";
  first_name: string | null;
  last_name: string | null;
}

export interface queryMachines_machines_machines_next_restock {
  __typename: "Restock";
  operator: queryMachines_machines_machines_next_restock_operator | null;
}

export interface queryMachines_machines_machines_revenue {
  __typename: "Revenue";
  today: number | null;
  yesterday: number | null;
  week: number | null;
  month: number | null;
  since_restock: number | null;
}

export interface queryMachines_machines_machines {
  __typename: "Machine";
  id: any;
  place: string | null;
  location: queryMachines_machines_machines_location | null;
  status: queryMachines_machines_machines_status | null;
  warning: string | null;
  next_restock: queryMachines_machines_machines_next_restock | null;
  revenue: queryMachines_machines_machines_revenue | null;
}

export interface queryMachines_machines {
  __typename: "PaginatedMachine";
  machines: (queryMachines_machines_machines | null)[];
}

export interface queryMachines {
  machines: queryMachines_machines | null;
}
