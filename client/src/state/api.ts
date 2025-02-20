import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GetKpisResponse, GetProductsResponse, GetTransactionsResponse } from "./types";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1337" }),
    reducerPath: "main",
    tagTypes: ["kpis", "Products", "Transactions"],
    endpoints: (build) => ({

        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: () => "kpi/kips/",
            providesTags: ["kpis"]
        }),

        getProducts: build.query<Array<GetProductsResponse>, void>({
            query: () => "product/products/",
            providesTags: ["Products"]
        }),
        getTransactions: build.query<Array<GetTransactionsResponse>, void>({
            query: () => "transaction/transactions/",
            providesTags: ["Transactions"],
          }),
    }),
       
    });
   


export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery} = api;