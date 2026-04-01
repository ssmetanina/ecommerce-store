function About() {
  return (
    <section className="px-4 py-8 md:px-8 lg:px-12 xl:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 px-6 py-8 md:px-8 md:py-10">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-black/40">
            About us
          </p>
          <h1 className="mb-5 font-heading text-4xl font-bold uppercase leading-none text-black md:text-5xl">
            About our store
          </h1>
          <p className="max-w-3xl text-sm leading-7 text-black/60 md:text-base">
            Welcome to our store. We focus on creating a simple and comfortable
            shopping experience, offering carefully selected products, clear
            navigation and a clean modern interface. Our goal is to make it easy
            for customers to explore collections, compare options and find items
            that match their style and needs.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          <div className="rounded-3xl bg-[#F0EEED] p-6">
            <h2 className="mb-3 text-2xl font-semibold text-black">
              Our mission
            </h2>
            <p className="text-sm leading-6 text-black/60">
              To provide a smooth and enjoyable online shopping experience with a
              focus on accessibility, convenience and quality presentation.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F0EEED] p-6">
            <h2 className="mb-3 text-2xl font-semibold text-black">
              Our approach
            </h2>
            <p className="text-sm leading-6 text-black/60">
              We combine a curated product selection, thoughtful design and
              user-friendly navigation to help customers browse with confidence.
            </p>
          </div>

          <div className="rounded-3xl bg-[#F0EEED] p-6">
            <h2 className="mb-3 text-2xl font-semibold text-black">
              Our promise
            </h2>
            <p className="text-sm leading-6 text-black/60">
              We aim to make every visit simple and clear, with well-structured
              pages, helpful product details and a reliable shopping flow.
            </p>
          </div>
        </div>

        <div className="mb-12 p-6 md:p-8">
          <h2 className="mb-5 font-heading text-3xl font-bold uppercase leading-none text-black md:text-4xl">
            What you can expect
          </h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-black/10 p-5">
              <h3 className="mb-3 text-xl font-semibold text-black">
                Clear catalog structure
              </h3>
              <p className="text-sm leading-6 text-black/60">
                Products are organized into categories to make browsing easier and
                help customers move through the store naturally.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 p-5">
              <h3 className="mb-3 text-xl font-semibold text-black">
                Detailed product pages
              </h3>
              <p className="text-sm leading-6 text-black/60">
                Each product page is designed to present essential information in
                a clean and readable format.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 p-5">
              <h3 className="mb-3 text-xl font-semibold text-black">
                Responsive experience
              </h3>
              <p className="text-sm leading-6 text-black/60">
                The interface is adapted for both desktop and mobile devices to
                keep the experience consistent across screen sizes.
              </p>
            </div>

            <div className="rounded-3xl border border-black/10 p-5">
              <h3 className="mb-3 text-xl font-semibold text-black">
                Thoughtful design
              </h3>
              <p className="text-sm leading-6 text-black/60">
                We value visual clarity, balanced spacing and product-first layout
                decisions throughout the store.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-[#F0EEED] px-6 py-8 md:px-8 md:py-10">
          <h2 className="mb-4 font-heading text-3xl font-bold uppercase leading-none text-black md:text-4xl">
            Our store
          </h2>
          <p className="max-w-3xl text-sm leading-7 text-black/60 md:text-base">
            This page can be adapted with your brand story, values, product
            philosophy or company background. It is designed as a calm and clean
            section that introduces the store without distracting from the rest of
            the shopping experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;