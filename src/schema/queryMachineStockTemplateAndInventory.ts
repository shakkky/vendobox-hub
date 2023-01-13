/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryMachineStockTemplateAndInventory
// ====================================================

export interface queryMachineStockTemplateAndInventory_machineById_location {
  __typename: "Location";
  name: string;
}

export interface queryMachineStockTemplateAndInventory_machineById_stock_plan_template_shelves_coils {
  __typename: "StockPlanCoil";
  coil_no: number;
}

export interface queryMachineStockTemplateAndInventory_machineById_stock_plan_template_shelves {
  __typename: "StockPlanShelfTemplate";
  coils: (queryMachineStockTemplateAndInventory_machineById_stock_plan_template_shelves_coils | null)[];
}

export interface queryMachineStockTemplateAndInventory_machineById_stock_plan_template {
  __typename: "StockPlanTemplate";
  shelves: (queryMachineStockTemplateAndInventory_machineById_stock_plan_template_shelves | null)[];
}

export interface queryMachineStockTemplateAndInventory_machineById {
  __typename: "Machine";
  id: any;
  place: string | null;
  location: queryMachineStockTemplateAndInventory_machineById_location | null;
  stock_plan_template: queryMachineStockTemplateAndInventory_machineById_stock_plan_template | null;
}

export interface queryMachineStockTemplateAndInventory_products_products {
  __typename: "Product";
  id: any;
  title: string;
  label: string;
  image_url: string;
  default_price: number;
  cost: number;
}

export interface queryMachineStockTemplateAndInventory_products {
  __typename: "PaginatedProduct";
  products: (queryMachineStockTemplateAndInventory_products_products | null)[];
}

export interface queryMachineStockTemplateAndInventory {
  machineById: queryMachineStockTemplateAndInventory_machineById | null;
  products: queryMachineStockTemplateAndInventory_products | null;
}

export interface queryMachineStockTemplateAndInventoryVariables {
  id: any;
}
