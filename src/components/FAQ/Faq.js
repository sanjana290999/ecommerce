import React from "react";

const FAQs = () => {
  const faqList = [
    {
      question:
        "What happens when I update my email address (or mobile number)?",
      answer:
        "Your login email id (or mobile number) changes, likewise. You'll receive all your account-related communication on your updated email address (or mobile number).",
    },
    {
      question:
        "When will my osam account be updated with the new email address (or mobile number)?",
      answer:
        "It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.",
    },
    {
      question:
        "What happens to my existing osam account when I update my email address (or mobile number)?",
      answer:
        "Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.",
    },
    {
      question:
        "Does my Seller account get affected when I update my email address?",
      answer:
        "osam has a 'single sign-on' policy. Any changes will reflect in your Seller account also.",
    },
    {
      question: "Deactivate Account",
      answer:
        "To deactivate your account, please contact customer support or follow the instructions provided in your account settings.",
    },
  ];

  return (
    <div className="faq-container p-2 mt-5 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Frequently Asked Questions</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {faqList.map((faq, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-semibold">{faq.question}</h2>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
