import React from "react";

const page = () => {
  const why = [
    {
      title: "Intuitive Writing Experience",
      description:
        "Our user-friendly interface ensures that you can focus on your writing without any distractions. Whether you're a seasoned writer or just getting started, EZwrite provides an intuitive and seamless writing experience.",
    },
    {
      title: "Versatility",
      description:
        "From personal blogs to professional articles, EZwrite accommodates all writing styles and genres. We understand that your content is diverse, and our platform is designed to adapt to your creative needs.",
    },
    {
      title: "Collaboration Made Easy",
      description:
        "EZwrite isn't just for solo writers; it's a collaborative space where teams can come together to create content seamlessly. Share ideas, review drafts, and co-author with ease.",
    },
    {
      title: "Beautiful Design, Seamless Publishing",
      description:
        "Your words deserve to be presented beautifully. With EZwrite, you can choose from a range of stunning templates and layouts to showcase your content. Publishing is a breeze, and your audience will experience your stories in a visually appealing way.",
    },
  ];
  return (
    <section className="p-10 lg:w-[1024px] w-full mx-auto">
      <h1 className="mb-8 w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark">
        About Us
      </h1>
      <p className="text-xl leading-10">
        Welcome to EZwrite, where words come to life and creativity knows no
        bounds! We are more than just a blog application – we are your creative
        partner, your digital canvas, and your go-to platform for expressing
        ideas in the most captivating way possible.
      </p>
      <div className="mt-8">
        <h2 className="mb-3 w-full inline-block font-bold capitalize text-xl md:text-2xl text-dark">
          Our Mission
        </h2>
        <p className="text-xl leading-10">
          At EZwrite, our mission is to empower individuals and businesses to
          share their stories, ideas, and expertise with the world effortlessly.
          We believe that everyone has a unique voice that deserves to be heard,
          and we&#39;ve built a platform that makes it easy for you to unleash your
          creativity through the art of writing.
        </p>
      </div>
      <div className="mt-8">
        <h2 className="mb-3 w-full inline-block font-bold capitalize text-xl md:text-2xl text-dark">
          Why EZwrite?
        </h2>
        <ol className="mt-3 list-decimal">
          {why.map((item, ind) => (
            <li key={ind} className="text-lg mb-4 leading-10">
              <span className="font-bold">{item.title}: </span>{" "}
              <span>{item.description}</span>
            </li>
          ))}
        </ol>
        {/* <p className="text-xl leading-10">
          At EZwrite, our mission is to empower individuals and businesses to
          share their stories, ideas, and expertise with the world effortlessly.
          We believe that everyone has a unique voice that deserves to be heard,
          and we've built a platform that makes it easy for you to unleash your
          creativity through the art of writing.
        </p> */}
      </div>
      <div className="mt-8">
        <h2 className="mb-3 w-full inline-block font-bold capitalize text-xl md:text-2xl text-dark">
          Our Commitment to You
        </h2>
        <p className="text-xl leading-10">
          Your satisfaction and success are at the heart of what we do. We are
          committed to providing top-notch support, continuous updates, and
          innovative features that enhance your writing journey. EZwrite isn&#39;t
          just a tool; it&#39;s a community of passionate writers and creators, and
          we&#39;re excited to have you as part of it.
        </p>
        <p className="text-xl leading-10 mt-4">
          Join us on this exciting adventure of words, imagination, and
          creativity. Start writing with EZwrite today and let your ideas flow
          effortlessly!{" "}
        </p>
      </div>
      <div className="mt-7 mb-3 font-semibold text-custome-gray">Happy Writing!</div>
      <div className="font-semibold text-custome-gray">The <span className="text-red-600">EZ</span>write Team</div>
    </section>
  );
};

export default page;
