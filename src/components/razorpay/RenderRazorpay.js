import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyPayment } from "../features/orders/OrdersSlice";
import { isEmpty } from "lodash";

const RenderRazorpay = ({ user, order_id, currency, amount }) => {
  const dispatch = useDispatch();

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert(
        "Razorpay SDK failed to load. Please check your internet connection."
      );
      return;
    }

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: amount.toString(),
      currency: currency,
      name: "Your Company Name",
      description: "Test Transaction",
      order_id: order_id,
      handler: function (response) {
        // Handle successful payment
        dispatch(verifyPayment(response));

        if (!isEmpty(response)) {
          alert("Payment successful!");
        } else {
          alert("Payment failed.");
        }
      },
      prefill: {
        name: user?.name,
        email: user?.email,
        contact: "",
      },
      notes: {
        address: "Your Company Address",
      },
      theme: {
        color: "#008080",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  useEffect(() => {
    displayRazorpay();
  }, []);

  return <></>;
};

export default RenderRazorpay;
