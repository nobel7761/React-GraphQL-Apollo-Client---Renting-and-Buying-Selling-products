import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://sazim.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "content-type": "application/json",
    "x-hasura-admin-secret":
      "2629cvJ6deFamulhqpCyNrX69tmiDUASJiQ8VDxZB4G4XC2A96Co0ggd04ap8Alj",
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>

    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>

  </BrowserRouter>
);
