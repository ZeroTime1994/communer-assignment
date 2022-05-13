import { Label } from './styles';
import { forwardRef } from 'react';

export interface InputProps {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  name?: string;
  inputId?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, onChange, value, name, inputId, type, required }, ref) => {
    return (
      <Label>
        <span> {label}:</span>
        <input
          required={required}
          ref={ref}
          value={value}
          onChange={onChange}
          type={type}
          name={name}
          id={inputId}
        />
      </Label>
    );
  }
);

export default Input;
