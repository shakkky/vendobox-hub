/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: queryRestockAndInventory
// ====================================================

export interface queryRestockAndInventory_restock_stock_plan_shelves_coils_product {
  __typename: "Product";
  id: any;
  title: string;
  label: string;
  image_url: string;
  default_price: number;
}

export interface queryRestockAndInventory_restock_stock_plan_shelves_coils {
  __typename: "StockPlanCoil";
  id: any;
  coil_no: number;
  product: queryRestockAndInventory_restock_stock_plan_shelves_coils_product | null;
  price: number | null;
}

export interface queryRestockAndInventory_restock_stock_plan_shelves {
  __typename: "StockPlanShelf";
  id: any;
  shelf_no: number | null;
  coils: (queryRestockAndInventory_restock_stock_plan_shelves_coils | null)[] | null;
}

export interface queryRestockAndInventory_restock_stock_plan {
  __typename: "StockPlan";
  id: any;
  shelves: (queryRestockAndInventory_restock_stock_plan_shelves | null)[] | null;
}

export interface queryRestockAndInventory_restock {
  __typename: "Restock";
  id: any;
  stock_plan: queryRestockAndInventory_restock_stock_plan | null;
}

export interface queryRestockAndInventory_products_products {
  __typename: "Product";
  id: any;
  title: string;
  label: string;
  image_url: string;
  default_price: number;
  cost: number;
}

export interface queryRestockAndInventory_products {
  __typename: "PaginatedProduct";
  products: (queryRestockAndInventory_products_products | null)[];
}

export interface queryRestockAndInventory {
  restock: queryRestockAndInventory_restock | null;
  products: queryRestockAndInventory_products | null;
}

export interface queryRestockAndInventoryVariables {
  id: any;
}
