import React from 'react';
import styles from './styles.module.css';

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
  inputClassname,
  handleChange,
}) {
  return (
    <div className={styles.TextInput}>
      <label>{label}</label>
      <input
        // {...register(name)}
        onChange={handleChange}
        className={inputClassname}
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
