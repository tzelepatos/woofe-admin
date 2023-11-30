import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export default function AccordionFooter({ iconMapping, footerText }) {
  return (
    <Accordion type="single" collapsible className="w-full pb-2">
      {Object.values(footerText).map((column, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionTrigger className="text-foreground font-semibold text-lg">
            {column.title}
          </AccordionTrigger>
          <AccordionContent>
            {column.items.map((item, index) => (
              <div
                key={index}
                className=" mb-2 hover:underline text-jimOrange "
              >
                <Link href={item.link}>
                  <div className="flex items-center text-md">
                    {column.title.toLowerCase().includes("social")
                      ? iconMapping[item.icon]
                      : null}
                    <span className="ml-2">{item.text}</span>
                  </div>
                </Link>
              </div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
