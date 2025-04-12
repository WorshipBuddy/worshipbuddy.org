import React from "react";

function page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-b from-gray-800 to-gray-900 px-4 py-3">
      <h1 className="font-semibold text-4xl md:text-5xl animate-fade-in">
        Mission
      </h1>
      <div className="h-0.5 w-full md:w-8/12 bg-neutral-50 my-4"></div>
      <div className="flex flex-col gap-20 items-center justify-center">
        <div className="w-full md:w-10/12 font-light text-2xl text-center mt-2 animate-slide-up">
          <p>
            At WorshipBuddy, our mission is to empower churches worldwide
            through the transformative potential of technology, enriching their
            worship experiences, fostering community engagement, and
            facilitating spiritual growth.
          </p>
          <br />
          <p>
            We recognize that in an increasingly digital world, the role of
            technology in worship is pivotal. Our non-profit is dedicated to
            bridging the gap between faith and innovation, ensuring that
            churches of all sizes and backgrounds have access to cutting-edge
            tools and resources.
          </p>
          <br />
          <p>Our commitment to this mission is reflected in three key principles:</p>
          <br />
          <p>
            <strong>Innovation for Worship:</strong> We leverage the latest
            advancements in technology to enhance every aspect of the worship
            experience. From immersive audiovisual solutions to user-friendly
            digital platforms, we provide churches with the tools they need to
            deliver inspirational and inclusive services.
          </p>
          <br />
          <p>
            <strong>Community Building:</strong> We understand that strong faith
            communities are built on meaningful connections. Through our tech
            solutions, we enable churches to connect with their congregations,
            fostering a sense of togetherness even in the digital age.
          </p>
          <br />
          <p>
            <strong>Spiritual Growth:</strong> We believe that technology can be
            a powerful catalyst for spiritual growth. By offering resources that
            facilitate Bible study, prayer, and reflection, we help individuals
            deepen their faith and understanding of Christian teachings.
          </p>
        </div>
        <div className="text-lg text-center animate-fade-in">
          For further queries, please contact us at:{" "}
          <a
            href="mailto:info@worshipbuddy.org"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            info@worshipbuddy.org
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;