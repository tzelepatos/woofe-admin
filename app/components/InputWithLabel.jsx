import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputWithLabel({
  label,
  inputProps,
  className,
  value,
  onChange,
  isRequired,
}) {
  const { id, type, placeholder } = inputProps;

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5 mt-2 ">
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        required={isRequired}
      />
    </div>
  );
}
