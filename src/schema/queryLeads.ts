/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryLeads
// ====================================================

export interface queryLeads_leads_leads_status {
  __typename: "Status";
  code: number | null;
  label: string | null;
}

export interface queryLeads_leads_leads {
  __typename: "Lead";
  id: any;
  name: string | null;
  phone: string | null;
  email: string | null;
  company_name: string | null;
  est_traffic: string | null;
  machine_type: string | null;
  notes: string | null;
  status: queryLeads_leads_leads_status | null;
  interaction_key: string | null;
  created_at: any | null;
}

export interface queryLeads_leads {
  __typename: "PaginatedLead";
  leads: (queryLeads_leads_leads | null)[];
}

export interface queryLeads {
  leads: queryLeads_leads | null;
}
