import { ChevronDown } from "lucide-react";

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
          <div>
            <div className="flex w-full items-center justify-between rounded-md border bg-muted/25 px-4 py-3 text-left font-medium text-muted-foreground transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
              What is the pricing structure?
              <ChevronDown
                className="size-5 cursor-pointer text-muted-foreground transition-transform duration-300 [&[data-state=open]]:rotate-180"
                strokeWidth={1.2}
              />
            </div>
            <div className="hidden px-4 pb-4 pt-2 text-muted-foreground">
              <p>
                Our pricing is based on the number of users and the features you
                need. We offer a range of plans to fit your business needs. You
                can check our pricing page for more details.
              </p>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between rounded-md border bg-muted/25 px-4 py-3 text-left font-medium text-muted-foreground transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
              How do I get started?
              <ChevronDown
                className="size-5 cursor-pointer text-muted-foreground transition-transform duration-300 [&[data-state=open]]:rotate-180"
                strokeWidth={1.2}
              />
            </div>
            <div className="hidden px-4 pb-4 pt-2 text-muted-foreground">
              <p>
                Getting started is easy! Simply sign up for an account on our
                website and follow the onboarding instructions. If you have any
                questions, our support team is available to help you get
                started.
              </p>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between rounded-md border bg-muted/25 px-4 py-3 text-left font-medium text-muted-foreground transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
              What kind of support do you offer?
              <ChevronDown
                className="size-5 cursor-pointer text-muted-foreground transition-transform duration-300 [&[data-state=open]]:rotate-180"
                strokeWidth={1.2}
              />
            </div>
            <div className="hidden px-4 pb-4 pt-2 text-muted-foreground">
              <p>
                We offer a variety of support options, including email, live
                chat, and phone support. Our team of experts is available to
                help you with any questions or issues you may have. We also have
                a comprehensive knowledge base with articles and tutorials to
                help you get the most out of our product.
              </p>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between rounded-md border bg-muted/25 px-4 py-3 text-left font-medium text-muted-foreground transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
              Do you offer any integrations?
              <ChevronDown
                className="size-5 cursor-pointer text-muted-foreground transition-transform duration-300 [&[data-state=open]]:rotate-180"
                strokeWidth={1.2}
              />
            </div>
            <div className="hidden px-4 pb-4 pt-2 text-muted-foreground">
              <p>
                Yes, we offer a wide range of integrations with popular
                third-party tools and services. You can connect our product with
                your existing workflows and systems to streamline your
                operations. Our integration documentation provides detailed
                instructions on how to set up and configure the integrations.
              </p>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between rounded-md border bg-muted/25 px-4 py-3 text-left font-medium text-muted-foreground transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
              How do I cancel my subscription?
              <ChevronDown
                className="size-5 cursor-pointer text-muted-foreground transition-transform duration-300 [&[data-state=open]]:rotate-180"
                strokeWidth={1.2}
              />
            </div>
            <div className="hidden px-4 pb-4 pt-2 text-muted-foreground">
              <p>
                To cancel your subscription, simply log into your account and
                navigate to the billing section. From there, you can easily
                cancel your subscription. If you have any issues or need
                assistance, our support team is available to help you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
