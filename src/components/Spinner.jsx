import React from "react";

const Spinner = () => {
  return (
    <div
      className="spinner-border spinner-border-sm text-light"
      role="status"
      aria-hidden="true"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
