/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: chartData
// ====================================================

export interface chartData_chartData {
  __typename: "ChartData";
  labels: string[];
  kamisData: (number | null)[];
  predictedData: (number | null)[];
}

export interface chartData {
  chartData: chartData_chartData;
}
