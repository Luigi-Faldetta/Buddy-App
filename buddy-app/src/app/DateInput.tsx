import React, { ChangeEventHandler } from "react";

interface DateInputProps {
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const DateInput: React.FC<DateInputProps> = ({ name, value, onChange }) => {
  return (
    <div className="border-solid border-1 border-black rounded-sm mt-2 outline-none focus:border-blue-500">
      <input type="date" name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default DateInput;
