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
import { FieldUI } from "@/components/form/Fields";

export const FormUI = ({ form, buttonProps }: FormUIProps) => {
  const { formFields, schema, onSubmit } = form;
  const defaultValues = useMemo(
    () =>
      formFields?.reduce((acc, field) => {
        if (field.name === "in_stock") {
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
    resolver: zodResolver(schema),
    defaultValues,
  });

  // @ts-ignore
  return (
    <Card>
      <CardContent>
        <Form {...zForm}>
          <form onSubmit={zForm.handleSubmit(onSubmit)}>
            {formFields.map(({ name, label, type }) => (
              <div className={"mt-5"} key={name}>
                <FormField
                  name={name}
                  control={zForm.control}
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                          {/* @ts-ignore */}
                          <FieldUI field={field} type={type} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
              </div>
            ))}
            <div className={"flex justify-end mt-5"}>
              <Button type="submit" {...buttonProps}>
                {buttonProps.text}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
