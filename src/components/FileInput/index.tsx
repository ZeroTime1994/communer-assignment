import { forwardRef } from 'react';
import { Label } from '../Input/styles';
import { UploadZone } from './styles';

export interface FileInputProps {
  label?: string;
  src?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(({ label, onChange, src }, ref) => {
  return (
    <Label>
      <span>{label}: </span>
      <input accept="image/png, image/jpeg" ref={ref} onChange={onChange} type="file" hidden />

      <UploadZone image={src} />
    </Label>
  );
});

export default FileInput;
