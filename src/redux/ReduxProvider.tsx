"use client";
import React from "react";
// import { Provider } from "react-redux";
import { store } from "./store"; // assuming store is correctly exported
import { Provider } from "react-redux";

export function ReduxProvider({ children }: { children: React.ReactNode }) {
    return <Provider store={store}> {children} </Provider>;
}