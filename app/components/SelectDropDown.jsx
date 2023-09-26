import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDropDown({
  label,
  className,
  value,
  onChange,
  isRequired,
  options,
}) {
  return (
    <Select value={value} onValueChange={onChange} required={isRequired}>
      <SelectTrigger className={`w-[180px] ${className}`}>
        <SelectValue>{value || "Select a category"}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
