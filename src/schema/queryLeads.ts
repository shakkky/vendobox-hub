/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryLeads
// ====================================================

export interface queryLeads_leads_leads {
  __typename: "Lead";
  id: any;
  name: string | null;
  company_name: string | null;
  notes: string | null;
}

export interface queryLeads_leads {
  __typename: "PaginatedLead";
  leads: (queryLeads_leads_leads | null)[];
}

export interface queryLeads {
  leads: queryLeads_leads | null;
}
