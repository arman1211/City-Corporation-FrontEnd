import { useState } from "react";

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div>
      <section className="bg-white">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
            Frequently Asked Questions
          </h1>

          <div className="mt-8 space-y-8 lg:mt-12">
            {[
              {
                question: "How can I report a problem in my area?",
                answer:
                  "To report a problem, go to the 'Add Problem Report' section, fill in the necessary details, and submit your report. The relevant City Corporation authority will address your issue as soon as possible.",
              },
              {
                question: "How do I request a service?",
                answer:
                  "You can request services such as a trade license or birth certificate through the 'Add Service Request' section. Provide the necessary information and submit your request.",
              },
              {
                question: "What are the service request fees?",
                answer:
                  "Service request fees vary depending on the type of service. Details of fees are provided during the service request process.",
              },
              {
                question:
                  "How can I check the status of my report or service request?",
                answer:
                  "You can track the status of your reports or service requests through the 'Service Control' section on your dashboard.",
              },
              {
                question:
                  "What should I do if I encounter issues with my request?",
                answer:
                  "If you face any issues, please contact City Corporation support through the provided contact details on the portal.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`p-6 bg-gray-100 rounded-lg transition-all duration-1000 ${
                  expandedIndex === index ? "bg-gray-200" : ""
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex items-center justify-between w-full outline-none  focus:outline-none border-none"
                >
                  <h1 className="font-semibold text-gray-700">
                    {item.question}
                  </h1>

                  <span
                    className={`transform transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-45" : "rotate-0"
                    } text-white bg-blue-500 rounded-full`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </span>
                </button>

                <p
                  className={`mt-4 text-sm text-gray-500 overflow-hidden transition-all duration-300 ${
                    expandedIndex === index ? "max-h-full" : "max-h-0"
                  }`}
                >
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
