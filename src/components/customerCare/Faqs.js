import React from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQs = [
  {
    question: "How can I track my order?",
    answer:
      "You can track your order by logging into your account and clicking on 'My Orders'. Alternatively, you can use the tracking link sent to your email.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Our return policy allows returns within 30 days of receipt. Items must be unused and in their original packaging. Please visit our Returns & Refunds page for more details.",
  },
  {
    question: "How do I cancel my order?",
    answer:
      "To cancel your order, log into your account, go to 'My Orders', and select the order you want to cancel. If the order has not been shipped yet, you will see a 'Cancel Order' button.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept various payment methods including credit/debit cards, PayPal, and net banking. Please refer to our Payment Methods page for a full list of options.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact our customer support team through the Contact Us page, where you will find various options such as live chat, email, and phone support.",
  },
];

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        {FAQs.map((faq, index) => (
          <div key={index} className="mb-6">
            <details className="group">
              <summary className="flex items-center justify-between cursor-pointer bg-gray-100 p-4 rounded-lg">
                <h2 className="text-lg font-semibold">{faq.question}</h2>
                <FaChevronDown className="text-gray-600 group-open:rotate-180 transition-transform" />
              </summary>
              <p className="mt-4 text-gray-700">{faq.answer}</p>
            </details>
          </div>
        ))}
      </div>
    </div>
  );
}
