import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { InputTags } from "./InputTags";
import type { FieldUIProps } from "@/components/form/types";

export const FieldUI = ({
  field,
  type,
  disabled,
}: {
  disabled?: boolean;
  field: FieldUIProps;
  type: string;
}) => {
  switch (type) {
    case "textarea":
      return <Textarea {...field} className={"min-h-40"} />;
    case "checkbox":
      return (
        // @ts-ignore
        <Checkbox
          checked={Boolean(field.value)}
          onCheckedChange={field.onChange}
          className={"flex"}
          {...field}
        />
      );
    case "tags":
      // @ts-ignore
      return (
        <InputTags
          value={field?.value}
          onChange={field.onChange}
          disabled={disabled}
        />
      );
    default:
      if (field.name === "passcode") {
        return <Input {...field} type="password" />;
      }
      return <Input {...field} />;
  }
};
