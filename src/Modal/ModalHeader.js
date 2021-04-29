import React from "react";
import { Button } from "@ornikar/kitt";
import styles from "./ModalHeader.module.css";

export const ModalHeader = ({ children, ...props }) => {
  return (
    <header {...props} className={styles.modalHeader}>
      {children}
      <span className={styles.modalHeaderButton}>
        <Button type="secondary" icon="cross" />
      </span>
    </header>
  );
};

ModalHeader.displayName = "Modal.Header";

export default ModalHeader;
