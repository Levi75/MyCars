import React from "react";
import Styles from "./HelperSpinner.module.scss";

const HelperSpinner = () => {
  return (
    <div className={Styles.Spinner}>
      <div className="spinner-border text-primary fast" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default HelperSpinner;
