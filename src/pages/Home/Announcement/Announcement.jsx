const Announcement = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Latest Announcements
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Stay informed with the latest news and updates from the City
          Corporation.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 max-w-7xl mx-auto">
        {/* Highlighted Announcement */}
        <div className="bg-pink-100 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-pink-800">
            Upcoming City Clean-up Drive
          </h3>
          <p className="mt-4 text-gray-700">
            Join us for a city-wide clean-up on the 15th of this month. Help us
            make our community cleaner and greener! Volunteers are welcome.
            Contact us to participate.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="text-pink-700 font-medium hover:text-pink-800"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Announcement List */}
        <div>
          <ul className="space-y-4">
            <li className="bg-gray-100 p-4 rounded-md shadow-sm hover:bg-gray-200 transition">
              <h4 className="text-lg font-semibold text-gray-800">
                Public Notice: Road Closures
              </h4>
              <p className="text-gray-600 mt-1">
                Expect road closures in the downtown area due to ongoing
                construction.
              </p>
              <a
                href="#"
                className="text-sm text-pink-700 font-medium hover:text-pink-800"
              >
                Learn more
              </a>
            </li>

            <li className="bg-gray-100 p-4 rounded-md shadow-sm hover:bg-gray-200 transition">
              <h4 className="text-lg font-semibold text-gray-800">
                Free Health Check-up Camp
              </h4>
              <p className="text-gray-600 mt-1">
                Join our free health check-up camp this Saturday at the
                community hall.
              </p>
              <a
                href="#"
                className="text-sm text-pink-700 font-medium hover:text-pink-800"
              >
                Learn more
              </a>
            </li>

            <li className="bg-gray-100 p-4 rounded-md shadow-sm hover:bg-gray-200 transition">
              <h4 className="text-lg font-semibold text-gray-800">
                Workshop on Waste Management
              </h4>
              <p className="text-gray-600 mt-1">
                Register for our workshop to learn about sustainable waste
                management practices.
              </p>
              <a
                href="#"
                className="text-sm text-pink-700 font-medium hover:text-pink-800"
              >
                Learn more
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Announcement;
