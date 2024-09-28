const Footer = () => {
  return (
    <footer className="text-white px-8 py-6 bg-purple-950">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">ChittagongCity Corporation</h3>
          <p className="mb-2">Dedicated to Serving the Community</p>
          <p className="mb-2">123 City Corp Avenue, Chittagong, Bangladesh</p>
          <p className="mb-2">
            <a href="tel:+8801234567890" className="hover:text-yellow-400">
              +880-123-456-7890
            </a>
          </p>
          <p>
            <a
              href="mailto:info@citycorporation.gov"
              className="hover:text-yellow-400"
            >
              info@citycorporation.gov
            </a>
          </p>
        </div>

        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-yellow-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Report a Problem
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Service Requests
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Citizen Services */}
        <div className="mb-8 md:mb-0">
          <h3 className="text-lg font-bold mb-4">Citizen Services</h3>
          <ul>
            <li>
              <a href="#" className="hover:text-yellow-400">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                My Requests
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                My Reports
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400">
                Notifications
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
          <ul className="mb-4">
            <li>
              <a href="tel:+8801234567890" className="hover:text-yellow-400">
                +880-123-456-7890
              </a>
            </li>
            <li>
              <a
                href="mailto:info@citycorporation.gov"
                className="hover:text-yellow-400"
              >
                Send an Email
              </a>
            </li>
          </ul>
          <div className="mt-4 icons">
            <a href="#" className="mr-2">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" className="mr-2">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="mailto:info@citycorporation.gov">
              <i className="far fa-envelope fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="text-center mt-8">
        &copy; 2024 City Corporation. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
