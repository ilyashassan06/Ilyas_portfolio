import React from "react";

import RecentWork from "../Components/RecentWork";
import MyExperience from "../Components/MyExperience";
import AboutMe from "../Components/AboutMe";
import ContactMe from "../Components/ContactMe";


// px-4 md:px-18


function Home() {
  return (
    <div className="flex flex-col w-[100%] items-center  ">
    <AboutMe/>

    {/* Recent Work Section  */}
    <RecentWork/>
    <MyExperience/>
    <ContactMe/>
    </div>
  );
}

export default Home;
