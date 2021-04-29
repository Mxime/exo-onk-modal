import React from "react";
import styles from "./ModalFooter.module.css";

export const ModalFooter = ({ children, ...props }) => {
  return (
    <footer className={styles.modalFooter} {...props}>
      {children}
    </footer>
  );
};

ModalFooter.displayName = "Modal.Footer";

export default ModalFooter;
