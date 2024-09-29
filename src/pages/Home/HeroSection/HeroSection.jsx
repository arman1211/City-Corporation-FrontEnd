const HeroSection = () => {
  return (
    <section className=" lg:m-24">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-7xl lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Empowering Citizens
            <strong className="font-extrabold text-red-700 sm:block">
              {" "}
              Streamlining Services.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Whether you&apos;re a resident needing support or an authority ready
            to assist, our portal is designed to serve your needs with ease.
            Experience hassle-free service management at your fingertips.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="/services"
            >
              Take Services
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
              href="/contact-us/"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
