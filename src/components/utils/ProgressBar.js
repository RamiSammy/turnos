import React from "react";

function ProgressBar({ progress }) {
  return (
    <div>
      <div className="col-12 d-flex justify-content-center align-items-center">
        <div
          className="progress"
          style={{ width: "95%", height: "20px", marginTop: "1px" }}
        >
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: progress + "%" }}
            aria-label="25% Complete"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
