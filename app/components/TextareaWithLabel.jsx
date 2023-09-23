import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function TextareaWithLabel({
  label,
  inputProps,
  className,
  value,
  onChange,
  isRequired,
}) {
  const { id, type, placeholder } = inputProps;

  return (
    <div className="grid w-full gap-1.5 resize mt-2">
      <Label htmlFor={id}>{label}</Label>
      <Textarea
        type={type}
        id={id}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        required={isRequired} // pass the boolean value as the required attribute
      />
    </div>
  );
}
