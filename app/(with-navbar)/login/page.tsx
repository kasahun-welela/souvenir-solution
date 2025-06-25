"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="py-10 md:py-20 flex items-center justify-center  px-4">
      <Card className="w-full max-w-md  shadow-2xl rounded-2xl border-0  backdrop-blur-md">
        <CardHeader className="text-center pb-2">
          <CardTitle className="text-3xl font-bold text-primary mb-1 tracking-tight">
            Welcome Back
          </CardTitle>
          <p className="text-muted-foreground text-base">
            Sign in to your account
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="you@example.com"
                        type="email"
                        autoComplete="email"
                        className="h-12 text-base rounded-lg shadow-sm focus:ring-2 focus:ring-primary/40"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel className="text-base">Password</FormLabel>
                      <Link
                        href="/forgot-password"
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input
                        placeholder="••••••••"
                        type="password"
                        autoComplete="current-password"
                        className="h-12 text-base rounded-lg shadow-sm focus:ring-2 focus:ring-primary/40"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter className="p-0 pt-2 flex flex-col gap-3">
                <Button
                  type="submit"
                  className="w-full h-12 rounded-lg text-base font-semibold shadow-md bg-primary hover:bg-primary/90 transition-colors"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
