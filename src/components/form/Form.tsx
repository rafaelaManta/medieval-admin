"use client";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components";
import type { FormUIProps } from "@/components/form/types";
import type { ZodType } from "zod";

export const FormUI = ({
  formFields,
  schema,
  onSubmitAction,
  buttonProps,
}: FormUIProps) => {
  const defaultValues = useMemo(
    () =>
      formFields?.reduce((acc, field) => {
        if (field.name === "in_stock") {
          console.log(field.value);
          // @ts-ignore
          acc[field.name] = !!field?.value;
        } else if (field.name === "tags") {
          // @ts-ignore
          acc[field.name] = field?.value ?? [];
        } else {
          // @ts-ignore
          acc[field.name] = field?.value ?? "";
        }
        return acc;
      }, {}),
    [formFields],
  );

  const zForm = useForm({
    resolver: zodResolver(schema as ZodType),
    defaultValues,
  });

  return (
    <Card className={"pt-6 lg:w-2/3"}>
      <CardContent>
        <Form {...zForm}>
          <form onSubmit={zForm.handleSubmit(onSubmitAction)}>
            {formFields?.map(({ name, label, type }) => (
              <div className={"mt-5"} key={name}>
                <FormField
                  name={name as "name"}
                  control={zForm.control}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className={"text-base"}>{label}</FormLabel>
                        <FormControl>
                          {/* @ts-expect-error */}
                          <FieldUI field={field} type={type} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            ))}
            {buttonProps && (
              <div className={"flex justify-end mt-5"}>
                <Button type="submit" className={"text-base"} {...buttonProps}>
                  {buttonProps.text}
                </Button>
              </div>
            )}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
