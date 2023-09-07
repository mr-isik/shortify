"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AppContext } from "@/providers/ContextProvider";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { apiOptions, postData } from "@/lib/postData";
import { toast } from "react-hot-toast";

const formSchema = z.object({
  link: z.string().min(3, {
    message: "Link must be at least 3 characters.",
  }),
});

const linkForm = () => {
  const { isLoading, setIsLoading, setResult } = useContext(AppContext);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const encodedParams = new URLSearchParams();
    encodedParams.set("url", values.link);
    apiOptions.data = encodedParams;

    try {
      setIsLoading(true);
      const res = await postData(apiOptions);
      toast.success("Link has been succesfully shortened!");
      setResult(res.data.result_url);
    } catch (error: any) {
      toast.error(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex items-center justify-between card"
        >
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input
                    disabled={isLoading}
                    placeholder="Enter the link here"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isLoading} type="submit" size="lg">
            Shorten Link
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default linkForm;
