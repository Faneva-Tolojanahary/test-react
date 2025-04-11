import React from "react";
import { ContextProvider, StateContext } from "../context/ContextProvider";

export default function FirstPage() {
  const { name } = StateContext();
  return (
    <div className="flex justify-center items-center h-screen">
      Bonjour {name}
    </div>
  );
}
