import { Outlet } from "react-router";
import { Navigation } from "./Navigation";
import React from "react";

export function Root() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      <div className="pt-0">
        <Outlet />
      </div>
    </div>
  );
}
