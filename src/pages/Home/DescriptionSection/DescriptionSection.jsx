import cityImg from "../../../assets/ccc.jpg";
const DescriptionSection = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gray-100 blur-lg"></div>

      <section className="relative pt-16 ">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-purple-950">
                <img
                  alt="City Services"
                  src={cityImg}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-purple-950 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Simplifying City Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Our City Corporation Service Portal is your one-stop
                    solution for reporting issues like garbage collection,
                    street repairs, and light malfunctions, as well as applying
                    for essential services like trade licenses and birth
                    certificates. Designed to be user-friendly and efficient,
                    our portal makes it easier than ever to get the support you
                    need.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4 grid gap-2">
                  <div className="relative flex flex-col mt-4 rounded bg-teal-300">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-tools"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Report Issues
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Quickly report issues like garbage collection, street
                        repairs, or light malfunctions, and let us handle the
                        rest.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col bg-indigo-300 rounded min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Apply for Services
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Apply for crucial services like trade licenses and birth
                        certificates with ease and convenience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4 grid gap-2">
                  <div className="relative flex flex-col  rounded bg-yellow-300 min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto ">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-city"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Authority Response
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        City Corporation authorities are here to provide timely
                        solutions to reported issues and deliver the services
                        you need.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0 rounded bg-sky-300">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-info-circle"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        User-Friendly Experience
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Designed with you in mind, our portal offers a seamless
                        and intuitive experience for both citizens and
                        authorities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="relative bg-blueGray-50 pt-8 pb-6 mt-2">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center"></div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default DescriptionSection;
