import React from "react";
import styles from "./styles.module.css";

export function TextInput({
  label,
  register,
  name,
  type,
  placeholder,
  pattern,
  required,
  value,
  defaultValue,
}) {
  return (
    <div className={styles.TextInput}>
      <label>{label}</label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        value={value}
        defaultValue={defaultValue}
      />
    </div>
  );
}
