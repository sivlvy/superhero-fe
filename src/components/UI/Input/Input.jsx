import React from "react";
import { useController } from "react-hook-form";

const CustomInput = ({ name, control, ...props }) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <div>
      <input
        {...props}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        ref={ref}
      />
      {error && <span style={{ color: "red" }}>{error.message}</span>}
    </div>
  );
};

const CustomFileInput = ({ name, control }) => {
  const {
    field: { onChange, onBlur, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const handleChange = (event) => {
    const files = Array.from(event.target.files);
    onChange(files);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        onBlur={onBlur}
        ref={ref}
        multiple
      />
      {error && <span style={{ color: "red" }}>{error.message}</span>}
    </div>
  );
};

export { CustomInput, CustomFileInput };
