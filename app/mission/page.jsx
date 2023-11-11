import React from "react";

function page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white bg-neutral-900 px-4">
      <h1 className="font-semibold text-4xl md:text-5xl ">Mission</h1>
      <div className="h-0.5 w-full md:w-8/12 bg-neutral-50 my-4"></div>
      <div className="flex flex-col gap-20 items-center justify-center">
        <div className="w-full md:w-10/12 font-medium text-2xl text-center mt-2 ">
      <p>At WorshipBuddy, our mission is to empower churches worldwide through the transformative potential of technology, enriching their worship experiences, fostering community engagement, and facilitating spiritual growth.</p>
<p><br></br>
We recognize that in an increasingly digital world, the role of technology in worship is pivotal. Our non-profit is dedicated to bridging the gap between faith and innovation, ensuring that churches of all sizes and backgrounds have access to cutting-edge tools and resources.</p>
<br></br>
<p>Our commitment to this mission is reflected in three key principles:</p>
<br></br>
<p>Innovation for Worship: We leverage the latest advancements in technology to enhance every aspect of the worship experience. From immersive audiovisual solutions to user-friendly digital platforms, we provide churches with the tools they need to deliver inspirational and inclusive services.</p>
<br></br>
<p></p>
Community Building: We understand that strong faith communities are built on meaningful connections. Through our tech solutions, we enable churches to connect with their congregations, fostering a sense of togetherness even in the digital age.
<p></p><br></br>
Spiritual Growth: We believe that technology can be a powerful catalyst for spiritual growth. By offering resources that facilitate Bible study, prayer, and reflection, we help individuals deepen their faith and understanding of Christian teachings.<br></br>
<br>
        </div>
        <div className=" text-l text-center">
          For further queries, please contact Support: support@worshipbuddy.org
        </div>
      </div>
    </div>
  );
}

export default page;
