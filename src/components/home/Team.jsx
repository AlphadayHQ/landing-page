import React from "react";
import { Section, Div, Title } from "../../shared";
import member1 from "../../images/team/member-1.jpg";
import member2 from "../../images/team/member-2.jpg";
import member3 from "../../images/team/member-3.jpg";
import member4 from "../../images/team/member-4.jpg";
import member5 from "../../images/team/member-5.jpg";
import member6 from "../../images/team/member-6.jpg";
import member7 from "../../images/team/member-7.jpg";
import member8 from "../../images/team/member-8.jpg";

const teamData = [
  {
    img: member1,
    classnames: "rounded-[13px] sm:rounded-[26px] w-[54px] sm:w-[137px]",
    infoPosClassnames:
      "left-[30%] bottom-[-140%] sm:bottom-[-35%] lg:bottom-auto lg:left-[70%]",
    name: "Gideon Anyalewechi",
    position: "Backend Engineer",
    twitter: "https://twitter.com/get_giddy",
    linkedin: "https://www.linkedin.com/in/getgiddy/",
  },
  {
    img: member2,
    classnames: "rounded-[13px] sm:rounded-[26px] w-[63px]  sm:w-[158px]",
    infoPosClassnames:
      "bottom-[-110%] sm:bottom-[-35%] lg:bottom-auto lg:left-[70%]",
    name: "https://twitter.com/defidude",
    position: "CO-FOUNDER & CMO",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/defi-dude-72296b221/",
  },
  {
    img: member3,
    classnames: "rounded-[13px] sm:rounded-[26px] w-[73px] sm:w-[183px]",
    infoPosClassnames:
      "bottom-[-100%] sm:bottom-[-35%] lg:bottom-auto lg:left-[70%]",
    name: "Felipe Faraggi",
    position: "CO-FOUNDER & CTO",
    twitter: "https://twitter.com/felipefaraggi",
    linkedin: "https://www.linkedin.com/in/faraggi/",
  },
  {
    img: member4,
    classnames: "rounded-[13px] sm:rounded-[26px] w-[60px] sm:w-[151px]",
    infoPosClassnames:
      "right-[30%] bottom-[-120%] sm:bottom-[-35%] lg:bottom-auto lg:left-[70%]",
    name: "Vicente Almonacid",
    position: "Frontend Engineer",
    twitter: "",
    linkedin: "https://www.linkedin.com/in/vicente-almonacid/",
  },
  {
    img: member5,
    classnames: "rounded-[13px] sm:rounded-[26px] w-[63px]  sm:w-[158px]",
    infoPosClassnames:
      "left-[30%] bottom-[-100%] sm:bottom-[-35%] lg:bottom-auto lg:left-[70%]",
    name: "Pablo Palomo",
    position: "Backend Engineer",
    twitter: "https://twitter.com/ppalomo",
    linkedin: "https://www.linkedin.com/in/pablo-palomo-07127711/",
  },
  {
    img: member6,
    classnames: "rounded-[13px] sm:rounded-[26px] w-[88px] sm:w-[222px]",
    infoPosClassnames:
      "bottom-[-80%] sm:bottom-[-35%] lg:bottom-auto lg:left-[70%]",
    name: "Deniz Omar",
    position: "CO-FOUNDER & CEO",
    twitter: "https://twitter.com/DenizOmer",
    linkedin: "https://www.linkedin.com/in/denizomer/",
  },
  {
    img: member7,
    classnames: "rounded-[13px] sm:rounded-[26px] w-[60px] sm:w-[151px]",
    infoPosClassnames:
      "bottom-[-120%] sm:bottom-[-35%] lg:bottom-auto lg:left-[70%]",
    name: "Charles Nwankwo",
    position: "Frontend Engineer",
    twitter: "https://twitter.com/Chadnium",
    linkedin: "https://www.linkedin.com/in/getgiddy/",
  },
  {
    img: member8,
    classnames: "rounded-[13px] sm:rounded-[26px] w-[54px] sm:w-[137px]",
    infoPosClassnames:
      "right-[30%] bottom-[-140%] sm:bottom-[-35%] lg:bottom-auto lg:left-[70%]",
    name: "Paris Giannakou",
    position: "Content Editor",
    twitter: "https://twitter.com/v_almonacid",
    linkedin: "https://www.linkedin.com/in/paris-charanas-giannakou-788386231/",
  },
];

function TeamCard({ data, type }) {
  return (
    <div className={`${type === "bottom" ? "self-start" : "self-end"} group`}>
      <figure className="relative flex justify-center items-center">
        <span className="absolute w-full h-full bg-[#1D1F2090] group-hover:bg-transparent transition-all duration-300"></span>
        <img src={data.img} className={data.classnames} alt={data.name} />

        <div
          className={`scale-0 group-hover:scale-100 transition-all duration-300 rounded-xl absolute z-20 text-white py-2 px-4 bg-black min-w-max ${data.infoPosClassnames}`}
        >
          <div className="mb-4">
            <h4 className="text-[16px]">{data.name}</h4>
            <p className="text-[9.5px] tracking-[.2em] uppercase">
              {data.position}
            </p>
          </div>

          <div className="flex">
            <a className="cursor-pointer flex items-center w-[22px] h-[22px] rounded-full justify-center bg-blue mr-2">
              <i className="text-white text-xs ri-twitter-fill"></i>
            </a>

            <a className="cursor-pointer flex items-center w-[22px] h-[22px] rounded-full justify-center bg-blue">
              <i class="text-white text-xs ri-linkedin-fill"></i>
            </a>
          </div>
        </div>
      </figure>
    </div>
  );
}

function Team() {
  return (
    <Section>
      <Div>
        <div className="">
          <div className="mb-24">
            <Title>Our Mission</Title>
            <div className="md:w-[500px]">
              <p className="text-aluminium text-xs md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>

              <p className="text-aluminium text-xs md:text-sm mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            {/* <p
              className="absolute z-10 top-[47%] left-[50%] font-medium text-aluminium text-[22px] tracking-[1px]"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              OUR TEAM
            </p> */}
            <div className="flex flex-col">
              <div className="flex gap-x-2 justify-center">
                {teamData.slice(0, 4).map((data) => (
                  <TeamCard data={data} type="top" />
                ))}
              </div>
              <p className=" z-10 flex font-medium text-aluminium mt-1 sm:mt-[10px] sm:mb-1 sm:text-[22px] tracking-[1px] self-center">
                OUR TEAM
              </p>
              <div className="flex gap-x-2 justify-center items-center">
                {teamData.slice(4, 8).map((data) => (
                  <TeamCard data={data} type="bottom" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Div>
    </Section>
  );
}

export default Team;
 