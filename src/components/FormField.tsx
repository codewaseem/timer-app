import React from "react";
import styled from "@emotion/styled";

const Field = styled.div`
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 24px;
  position: relative;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text};

  label,
  input {
    transition: all 0.2s;
    touch-action: manipulation;
  }
`;

const Input = styled.input`
  border: 0;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 0 0 17px 14px;
  color: ${({ theme }) => theme.colors.text};
  cursor: text;
  font-size: 15px;
  line-height: 25px;
  background-color: transparent;

  &:focus {
    outline: 0;
  }

  &::placeholder {
    font-family: "Livvic SemiBold";
    letter-spacing: 0.05em;

    color: ${({ theme }) => theme.colors.text};
    opacity: 60%;
  }

  /* &::-webkit-input-placeholder {
    opacity: ;
    transition: inherit;
  }

  &:focus::-webkit-input-placeholder {
    opacity: 1;
  } */
`;

const Label = styled.label`
  position: absolute;
  opacity: 0;
`;

const FormField: React.FC<{
  label: string;
  type: string;
  name: string;
  required?: boolean;
}> = ({ label, type, name, required }) => {
  return (
    <div>
      <Field>
        <Input type={type} id={name} placeholder={label} required={required} />
        <Label htmlFor={name}>{label}</Label>
      </Field>
    </div>
  );
};

export default FormField;
