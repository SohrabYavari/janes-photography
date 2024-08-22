// React Imports
import { useState } from "react";
import { useForm } from "react-hook-form";

// framer-motion Imports
import { AnimatePresence, motion } from "framer-motion";

// Component Imports
import PricingCard from "./PricingCard";
import { pricingData } from "./data";

// ShadcnUI & Zod Imports
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

// Form Schema
const formSchema = z.object({
  fullName: z.string(),
  phoneNumber: z.string(),
  emailAddress: z.string().email(),
  priceOptions: z.string().array().nonempty(),
  textArea: z.string(),
});

const ContactForm = () => {
  // Form Schema Links
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      textArea: "",
      priceOptions: [],
    },
  });

  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    const selectedPriceOption =
      pricingData.find((data) => data.id === id)?.title || "";

    if (selectedCard === id) {
      setSelectedCard(null);
      form.setValue("priceOptions", ["None"]);
      form.setValue("textArea", "");
    } else {
      setSelectedCard(id);
      form.setValue("priceOptions", [selectedPriceOption]);
      const selectedData = pricingData.find((data) => data.id === id);
      if (selectedData) {
        form.setValue(
          "textArea",
          `Hi Jane,\n\nI would like the ${
            selectedData.title
          } for the price of £${selectedData.price}\n\nI know the ${
            selectedData.title
          } includes: \n- ${selectedData.listItem1}\n- ${
            selectedData.listItem2
          }\n- ${selectedData.listItem3}\n- ${
            selectedData.listItem4 || ""
          }\n- ${
            selectedData.listItem5 || ""
          }\n\nI would also like... \n\nKindest Regards, \nFuture Happy Customer`
        );
      }
    }
  };

  const HandleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <div className="">
      <Form {...form}>
        <form
          className="w-full mx-auto container bg-secondary rounded-md p-5"
          onSubmit={form.handleSubmit(HandleSubmit)}
        >
          <div className="flex w-full gap-4">
            <div className="w-full">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="p-2">Full Name: </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white"
                        placeholder="Name"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="w-full">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="p-2">Phone Number: </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white"
                        placeholder="Phone Number"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <FormField
            control={form.control}
            name="emailAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="p-2">Email Address: </FormLabel>
                <FormControl>
                  <Input
                    className="bg-white"
                    placeholder="Email Address"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="priceOptions"
            render={({ field }) => (
              <FormItem {...field}>
                {pricingData.map((data) => (
                  <FormControl key={data.id}>
                    <PricingCard
                      data={data}
                      isSelected={selectedCard === data.id}
                      onCardClick={handleCardClick}
                    />
                  </FormControl>
                ))}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="textArea"
            render={({ field }) => (
              <FormItem>
                <AnimatePresence>
                  {selectedCard !== null && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.35 }}
                      className="mt-4 p-4 border border-slate-400 bg-slate-200 rounded-lg mx-auto"
                    >
                      <FormControl>
                        <Textarea
                          {...field}
                          className="w-full h-60 p-2 border rounded"
                        />
                      </FormControl>
                    </motion.div>
                  )}
                </AnimatePresence>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full my-2">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
