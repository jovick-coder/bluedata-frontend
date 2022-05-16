import React from "react";

export function LoaderBorderComponent() {
  return (
    <>
      <span
        className="spinner-border spinner-border-sm"
        role="status"
        aria-hidden="true"
      ></span>
    </>
  );
}

export function LoaderGrowComponent() {
  return (
    <>
      <span
        className="spinner-grow spinner-grow-sm"
        role="status"
        aria-hidden="true"
      ></span>
    </>
  );
}
