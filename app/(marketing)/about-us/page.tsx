import MaxWidthWrapper from "@/components/shared/max-width-wrapper";

export default function AboutUsPage() {
  return (
    <MaxWidthWrapper className="overflow-hidden">
      <div className="relative mx-auto">
        <div className="bg-linear-115 from-28% absolute -right-60 -top-44 h-60 w-[36rem] rotate-[-10deg] transform-gpu rounded-full from-[#fff1be] via-[#ee87cb] via-70% to-[#b060ff] blur-3xl md:right-0" />
      </div>
      <div className="mt-16">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h1 className="data-dark:text-white text-pretty text-4xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
            Helping companies generate revenue.
          </h1>
          <p className="max-w-xl text-balance leading-normal text-muted-foreground dark:text-white sm:text-xl sm:leading-8 mt-6">
            We’re on a mission to transform revenue organizations by harnessing
            vast amounts of illegally acquired customer data.
          </p>
          <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
            <div className="max-w-lg">
              <h2 className="text-2xl font-medium tracking-tight">
                Our mission
              </h2>
              <p className="mt-6 text-base text-gray-600">
                At Radiant, we are dedicated to transforming the way revenue
                organizations source and close deals. Our mission is to provide
                our customers with an unfair advantage over both their
                competitors and potential customers through insight and
                analysis. We’ll stop at nothing to get you the data you need to
                close a deal.
              </p>
              <p className="mt-8 text-base text-gray-600">
                We’re customer-obsessed — putting the time in to build a
                detailed financial picture of every one of our customers so that
                we know more about your business than you do. We are in this
                together, mostly because we are all implicated in large-scale
                financial crime. In our history as a company, we’ve never lost a
                customer, because if any one of us talks, we all go down.
              </p>
            </div>
            <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
              <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="https://radiant.tailwindui.com/company/2.jpg"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                  <img
                    alt=""
                    src="/company/2.jpg"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                  <img
                    alt=""
                    src="/company/3.jpg"
                    className="block size-full object-cover"
                  />
                </div>
                <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
                  <img
                    alt=""
                    src="/company/4.jpg"
                    className="block size-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="max-lg:mt-16 lg:col-span-1">
              <h2 className="data-dark:text-gray-400 font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
                The Numbers
              </h2>
              <hr className="mt-6 border-t border-gray-200" />
              <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                  <dt className="text-base text-gray-600">Raised</dt>
                  <dd className="order-first text-6xl font-medium tracking-tight">
                    $<span>150</span>M
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
                  <dt className="text-base text-gray-600">Companies</dt>
                  <dd className="order-first text-6xl font-medium tracking-tight">
                    <span>30</span>K
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
                  <dt className="text-base text-gray-600">Deals Closed</dt>
                  <dd className="order-first text-6xl font-medium tracking-tight">
                    <span>1.5</span>M
                  </dd>
                </div>
                <div className="flex flex-col gap-y-2">
                  <dt className="text-base text-gray-600">Leads Generated</dt>
                  <dd className="order-first text-6xl font-medium tracking-tight">
                    <span>200</span>M
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>
      <div className="mt-32">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <h2 className="data-dark:text-gray-400 font-mono text-xs/5 font-semibold uppercase tracking-widest text-gray-500">
            Meet the team
          </h2>
          <h3 className="data-dark:text-white mt-2 text-pretty text-4xl font-medium tracking-tighter text-gray-950 sm:text-6xl">
            Founded by an all-star team.
          </h3>
          <p className="mt-6 max-w-xl text-balance leading-normal text-muted-foreground dark:text-white sm:text-xl sm:leading-8">
            Radiant is founded by two of the best sellers in the business and
            backed by investors who look the other way.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="max-w-lg">
              <p className="text-lg text-gray-600">
                Years ago, while working as sales associates at rival companies,
                Thomas, Ben, and Natalie were discussing a big client they had
                all been competing for. Joking about seeing the terms of each
                other’s offers, they had an idea: what if they shared data to
                win deals and split the commission behind their companies’
                backs? It turned out to be an incredible success, and that idea
                became the kernel for Radiant.
              </p>
              <p className="mt-8 text-lg text-gray-600">
                Today, Radiant transforms revenue organizations by harnessing
                illegally acquired customer and competitor data, using it to
                provide extraordinary leverage. More than 30,000 companies rely
                on Radiant to undercut their competitors and extort their
                customers, all through a single integrated platform.
              </p>
            </div>
            <div className="max-lg:order-first max-lg:max-w-lg">
              <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
                <img
                  alt=""
                  src="/company/5.jpg"
                  className="block size-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
