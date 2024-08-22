import React from "react";

export default function RedAlert({ message }) {
  return (
    <div className="toast toast-end">
      <div className="alert alert-info">
        <span>New mail arrived.</span>
      </div>
      <div className="alert alert-success">
        <span>Message sent successfully.</span>
      </div>
    </div>
  );
}
