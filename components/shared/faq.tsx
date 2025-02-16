import { ChevronDown } from "lucide-react"

export default function Faq() {
  return (
    <section className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-muted-foreground mt-2 text-lg">
            Get answers to the most common questions about our product.
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <div className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-medium transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
              What is the pricing structure?
              <ChevronDown className="h-5 w-5 text-muted-foreground cursor-pointer transition-transform duration-300 [&[data-state=open]]:rotate-180" />
            </div>
            <div className="px-4 pt-2 pb-4 text-muted-foreground hidden">
              <p>
                Our pricing is based on the number of users and the features you need. We offer a range of plans to fit
                your business needs. You can check our pricing page for more details.
              </p>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-medium transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
              How do I get started?
              <ChevronDown className="h-5 w-5 text-muted-foreground cursor-pointer transition-transform duration-300 [&[data-state=open]]:rotate-180" />
            </div>
            <div className="px-4 pt-2 pb-4 text-muted-foreground hidden">
              <p>
                Getting started is easy! Simply sign up for an account on our website and follow the onboarding
                instructions. If you have any questions, our support team is available to help you get started.
              </p>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-medium transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
              What kind of support do you offer?
              <ChevronDown className="h-5 w-5 text-muted-foreground cursor-pointer transition-transform duration-300 [&[data-state=open]]:rotate-180" />
            </div>
            <div className="px-4 pt-2 pb-4 text-muted-foreground hidden">
              <p>
                We offer a variety of support options, including email, live chat, and phone support. Our team of
                experts is available to help you with any questions or issues you may have. We also have a comprehensive
                knowledge base with articles and tutorials to help you get the most out of our product.
              </p>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-medium transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
              Do you offer any integrations?
              <ChevronDown className="h-5 w-5 text-muted-foreground cursor-pointer transition-transform duration-300 [&[data-state=open]]:rotate-180" />
            </div>
            <div className="px-4 pt-2 pb-4 text-muted-foreground hidden">
              <p>
                Yes, we offer a wide range of integrations with popular third-party tools and services. You can connect
                our product with your existing workflows and systems to streamline your operations. Our integration
                documentation provides detailed instructions on how to set up and configure the integrations.
              </p>
            </div>
          </div>
          <div>
            <div className="flex w-full items-center justify-between rounded-md bg-muted px-4 py-3 text-left font-medium transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75">
              How do I cancel my subscription?
              <ChevronDown className="h-5 w-5 text-muted-foreground cursor-pointer transition-transform duration-300 [&[data-state=open]]:rotate-180" />
            </div>
            <div className="px-4 pt-2 pb-4 text-muted-foreground hidden">
              <p>
                To cancel your subscription, simply log into your account and navigate to the billing section. From
                there, you can easily cancel your subscription. If you have any issues or need assistance, our support
                team is available to help you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}