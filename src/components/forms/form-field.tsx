import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

type FormFieldProps = {
  label: string;
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  onChange: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => void;
  error: string[];
  helperText?: string;
  textarea?: boolean;
};

const FormField = ({
  label,
  name,
  id,
  placeholder,
  required,
  onChange,
  error,
  helperText,
  textarea,
}: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {textarea ? (
        <Textarea
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={
            onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void
          }
        />
      ) : (
        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        />
      )}
      {helperText && (
        <p className="text-xs text-muted-foreground">{helperText}</p>
      )}
      {error && <p className="text-sm text-red-500">{error?.[0]}</p>}
    </div>
  );
};

export default FormField;
