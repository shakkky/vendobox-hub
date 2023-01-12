/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryLocations
// ====================================================

export interface queryLocations_locations_locations_address {
  __typename: "Address";
  google_address: string;
}

export interface queryLocations_locations_locations_revenue {
  __typename: "Revenue";
  week: number | null;
  all_time: number | null;
}

export interface queryLocations_locations_locations_next_restock_operator {
  __typename: "User";
  first_name: string | null;
  last_name: string | null;
}

export interface queryLocations_locations_locations_next_restock {
  __typename: "Restock";
  operator: queryLocations_locations_locations_next_restock_operator | null;
}

export interface queryLocations_locations_locations {
  __typename: "Location";
  id: any;
  name: string;
  image_url: string;
  address: queryLocations_locations_locations_address | null;
  revenue: queryLocations_locations_locations_revenue | null;
  next_restock: queryLocations_locations_locations_next_restock | null;
  created_at: any | null;
}

export interface queryLocations_locations {
  __typename: "PaginatedLocation";
  locations: (queryLocations_locations_locations | null)[];
}

export interface queryLocations {
  locations: queryLocations_locations | null;
}
