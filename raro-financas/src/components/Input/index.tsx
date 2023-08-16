import { ChangeEvent } from 'react';
import './style.css';
interface InputAtributs {
  text: string;
  type: string;
  value: number | string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const Input = ({ text, type, value, onChange }: InputAtributs) => {
  return (
    <input
      className="input"
      type={type}
      placeholder={text}
      value={value}
      onChange={onChange}
      required
    />
  );
};
