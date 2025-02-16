"use client";

import { faqs } from "@/config/landing";

import FaqItem from "../shared/faq-item";

export default function Faq() {
  return (
    <section className="container mx-auto px-4 py-12 md:px-6">
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="mb-4 flex flex-col items-center text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[40px]">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-balance text-lg text-muted-foreground">
            Get answers to the most common questions about our product.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem
              key={index}
              title={faq.title}
              description={faq.description}
              list={faq.list}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
