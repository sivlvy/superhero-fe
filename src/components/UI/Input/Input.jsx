import React from "react";
import { useController } from "react-hook-form";
import styles from "./input.module.scss";

const useCustomController = ({ name, control }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  return { onChange, onBlur, value, ref, error };
};

const ErrorMessage = ({ error }) =>
  error && <span style={{ color: "red" }}>{error.message}</span>;

const CustomInput = ({ name, control, ...props }) => {
  const { onChange, onBlur, value, ref, error } = useCustomController({
    name,
    control,
  });

  return (
    <div className={styles.inputContainer}>
      <input
        id={name}
        {...props}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        ref={ref}
      />
      <ErrorMessage error={error} />
    </div>
  );
};

const CustomFileInput = ({ name, control }) => {
  const { onChange, onBlur, ref, error } = useCustomController({
    name,
    control,
  });

  const handleChange = (event) => {
    const files = Array.from(event.target.files);
    onChange(files);
  };

  return (
    <div className={styles.uploadContainer}>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        onBlur={onBlur}
        ref={ref}
        multiple
      />
      <ErrorMessage error={error} />
    </div>
  );
};

export { CustomInput, CustomFileInput };
