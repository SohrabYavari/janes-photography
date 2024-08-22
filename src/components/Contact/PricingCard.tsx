// React Imports
import React from "react";

// ShadcnUI Imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

interface PricingCardProps {
  data: {
    id: number;
    title: string;
    description: string;
    listItem1: string;
    listItem2: string;
    listItem3: string;
    listItem4?: string;
    listItem5?: string;
    price: string;
  };
  isSelected: boolean;
  onCardClick: (id: number) => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  data,
  isSelected,
  onCardClick,
}) => {
  return (
    <div className="mx-auto">
      <Accordion
        type="single"
        collapsible
        className={`px-2 rounded-lg ${isSelected ? "bg-slate-200" : ""}`}
      >
        <AccordionItem value={`item-${data.id}`}>
          <AccordionTrigger className="text-xl">{data.title}</AccordionTrigger>
          <AccordionContent className="flex flex-col">
            <p className="px-2">{data.description}</p>
            <ul className="px-4 mt-2 gap-1 flex flex-col font-semibold">
              <li>{data.listItem1}</li>
              <li>{data.listItem2}</li>
              <li>{data.listItem3}</li>
              <li>{data.listItem4}</li>
              <li>{data.listItem5}</li>
            </ul>
            <div className="flex w-full gap-2 justify-end">
              <div>
                <Button>£ {data.price}</Button>
              </div>
              <div>
                <Button
                  onClick={() => onCardClick(data.id)}
                >
                  Pick
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PricingCard;
