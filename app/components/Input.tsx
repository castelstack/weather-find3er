import { LegacyRef } from "react";

type Props = {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  value: string;
  placeholder?: string;
  inputRef?:LegacyRef<HTMLInputElement>
};

export default function Input({
  onChange,
  disabled = false,
  placeholder,
  value,
  inputRef
}: Props) {
  return (
    <>
      <input
        type='text'
        ref={inputRef}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className='text-base'
        placeholder={placeholder}
      />
    </>
  );
}
