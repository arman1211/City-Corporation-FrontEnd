import { Disclosure } from "@headlessui/react";
import { FiChevronDown } from "react-icons/fi"; // This provides the toggle icon

const FAQ = () => {
  const faqs = [
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
      question: "How can I check the status of my report or service request?",
      answer:
        "You can track the status of your reports or service requests through the 'Service Control' section on your dashboard.",
    },
    {
      question: "What should I do if I encounter issues with my request?",
      answer:
        "If you face any issues, please contact City Corporation support through the provided contact details on the portal.",
    },
  ];

  return (
    <div className="w-full max-w-2xl p-4 m-auto mb-12 bg-white rounded-lg shadow-lg">
      <h2 className="text-5xl font-semibold text-center text-purple-800 mb-16">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Disclosure key={index}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-lg font-medium text-left text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>{faq.question}</span>
                  <FiChevronDown
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-purple-500 transition-transform duration-200`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500">
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
