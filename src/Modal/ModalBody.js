import React from "react";
import cx from "classnames";
import styles from "./ModalBody.module.css";

export const ModalBody = ({ children, className, ...props }) => {
  return (
    <main className={cx(styles.modalBody, className)} {...props}>
      {children}
    </main>
  );
};

ModalBody.displayName = "Modal.Body";

export default ModalBody;
