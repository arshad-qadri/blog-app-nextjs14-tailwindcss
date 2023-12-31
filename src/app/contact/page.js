import React from "react";

const page = () => {
  return (
    <section className="p-10 lg:w-[1024px] w-full mx-auto">
      <h1 className="mb-8 w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark">
        Contact Us
      </h1>
      <p className="text-xl leading-10">
        Thank you for choosing EZwrite! We value your feedback, questions, and
        suggestions. Our team is here to assist you in any way we can. Please
        feel free to reach out to us through the following channels:
      </p>
      <div className="mt-8">
        <h2 className="mb-3 w-full inline-block font-bold capitalize text-xl md:text-2xl text-dark">
          Customer Support:
        </h2>
        <p className="text-xl leading-10">
          For assistance with any technical issues, general inquiries, or
          feedback, our customer support team is ready to help.
        </p>
        <ul>
          <li className="text-lg mt-5">
            <span className="font-semibold">Email: </span>
            <a href="mailto:support@ezwrite.com" className="hover:underline text-blue-700">
              support@ezwrite.com
            </a>
          </li>
          <li className="text-lg mt-1">
            <span className="font-semibold">Phone: </span>
            <a href="tel:+918007330423" className="hover:underline text-blue-700">
              +91 8007330423
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="mb-3 w-full inline-block font-bold capitalize text-xl md:text-2xl text-dark">
          Connect With Us:
        </h2>
        <p className="text-xl leading-10">
          Stay updated on the latest news, features, and community discussions
          by following us on social media.
        </p>
        <ul>
          <li className="text-lg mt-5">
            <span className="font-semibold">Twitter: </span>
            <a href="/contact/#" className="hover:underline text-blue-700">
              @EZwriteApp
            </a>
          </li>
          <li className="text-lg mt-1">
            <span className="font-semibold">Facebook: </span>
            <a href="/contact/#" className="hover:underline text-blue-700">
              EZwrite
            </a>
          </li>
          <li className="text-lg mt-1">
            <span className="font-semibold">Instagram: </span>
            <a href="/contact/#" className="hover:underline text-blue-700">
              @EZwriteOfficial
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-7 mb-3 font-semibold text-custome-gray">
        Happy Writing!
      </div>
      <div className="font-semibold text-custome-gray">
        The <span className="text-red-600">EZ</span>write Team
      </div>
    </section>
  );
};

export default page;
