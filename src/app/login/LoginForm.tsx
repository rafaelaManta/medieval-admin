"use client";

import { useState, useTransition } from "react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components";
import { postLogin } from "@/app/login/lib/actions";
import { loginSchema } from "@/app/login/lib/schema";
import type { LoginType } from "@/app/login/lib/types";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginType) {
    setError(null);

    startTransition(async () => {
      try {
        await postLogin({
          email: values.email,
          password: values.password,
        });
        router.push("/");
      } catch (error) {
        // @ts-ignore
        setError(error?.message);
      }
    });
  }

  return (
    <Form {...form}>
      {error && (
        <div className={"text-center text-destructive mt-5 text-base"}>
          <p>{error}</p>
        </div>
      )}
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={"mt-5"}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={"text-base"}>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className={"mt-5"}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Κωδικός</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className={"flex justify-end mt-5"}>
          <Button type="submit" isLoading={isPending} className={"text-base"}>
            {"Σύνδεση"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
