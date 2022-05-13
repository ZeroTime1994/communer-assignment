import { Label } from '../Input/styles';
import { forwardRef } from 'react';

export interface SelectProps {
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: string | number;
  name?: string;
  inputId?: string;
  options?: { value: string | number; text: string }[];
}
const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ name, inputId, label, onChange, options, value }, ref) => {
    return (
      <Label>
        {label}:
        <select ref={ref} onChange={onChange} value={value} id={inputId} name={name}>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      </Label>
    );
  }
);

Select.defaultProps = {
  options: [],
};
export default Select;
