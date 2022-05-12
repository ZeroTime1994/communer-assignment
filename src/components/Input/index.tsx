import { forwardRef } from 'react';
import { Label } from './styles';

export interface InputProps {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string | number;
  name?: string;
  inputId?: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>['type'];
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, onChange, value, name, inputId, type }, ref) => {
    return (
      <Label>
        <span> {label}:</span>
        <input ref={ref} value={value} onChange={onChange} type={type} name={name} id={inputId} />
      </Label>
    );
  }
);

export default Input;
