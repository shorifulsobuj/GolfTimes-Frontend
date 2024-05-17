export default function Hero() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-full lg:items-center">
          <div className="mx-auto max-w-[800px] text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              <span className="mb-4 inline-block">Welcome to GolfTimes</span>
              <strong className="font-extrabold text-indigo-700 sm:block inline-block mb-8">
                {" "}
                &quot;Where Every Swing Tells a Story&quot;
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Embark on Your Ultimate Golf Journey with Premium Geat. Expert
              Guidance, And Unforgettable Experiences
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-5">
              <a
                className="block w-[200px] rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-[200px] rounded border px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
