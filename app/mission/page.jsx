import React from "react";

function page() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-white bg-neutral-900 px-4">
      <h1 className="font-semibold text-4xl md:text-5xl ">Mission</h1>
      <div className="h-0.5 w-full md:w-8/12 bg-neutral-50 my-4"></div>
      <div className="flex flex-col gap-20 items-center justify-center">
        <div className="w-full md:w-10/12 font-medium text-2xl text-center mt-2 ">
          At WorshipBuddy, our mission is to empower churches through the
          transformative potential of technology, enriching their worship
          experiences, fostering community engagement, and facilitating
          spiritual growth.
        </div>
        <div className=" text-l text-center">
          For further queries, please contact us at jobinmthomas7@gmail.com
        </div>
      </div>
    </div>
  );
}

export default page;
