import { useContext } from "react";
import { CookieContext } from "../utils/CookieContext";

const CookieDisclaimer = () => {
  const { setCookieChoice, noCookieChoice } = useContext(CookieContext);

  const choices = [
    {
      key: "acceptAll",
      buttonText: "Accept All",
      handler: () => {
        setCookieChoice("acceptAll");
      },
      sortOrder: 0,
    },
    {
      key: "accpetEssential",
      buttonText: "Accept Essential",
      handler: () => {
        setCookieChoice("accpetEssential");
      },
      sortOrder: 1,
    },
  ];

  console.log(noCookieChoice);

  if (noCookieChoice)
    return (
      <section className="fixed overflow-hidden w-full bottom-0 rounded-t-md z-100 bg-[#27292F]">
        <div className="relative flex flex-col flex-wrap justify-center items-center overflow-hidden">
          <div className="flex pt-5 p-2.5 lg:p-5 flex-1 flex-col lg:flex-row w-full max-w-7xl overflow-hidden items-center">
            <div className="mx-auto min-w-[280px] text-center lg:text-left text-[#C2C5D6] text-xs font-normal leading-6 tracking-wider">
              We use essential cookies to make Alphaday work. We’d like to use
              other cookies to improve and personalize your visit and to analyze
              our website’s performance, but only if you accept.
            </div>
            <div className="m-0 mt-2.5 lg:mt-0 flex flex-1 justify-end items-end scale-75">
              {choices
                .sort((a, d) => a.sortOrder - d.sortOrder)
                .map((item) => (
                  <button
                    key={item.key}
                    onClick={item.handler}
                    variant="primaryXL"
                    className="outline-none inline-flex items-center justify-center tracking-wider text-center align-middle cursor-pointer leading-6 select-none transition-colors hover:outline-none active:outline-none focus:outline-none w-max-content h-34 px-10 lg:px-16 mx-2 py-4 min-w-max rounded-[10px] border-2 border-solid 
                  border-[#263964] text-[#C2C5D6] bg-[#222529] hover:bg-[#2E3037] focus:bg-[#2E3037] active:border-2 active:border-solid active:border-[#263964] box-border duration-150 ease-in-out hover:border-[#477FF7] active:bg-[#17191C]"
                  >
                    {item.buttonText}
                  </button>
                ))}
            </div>
          </div>
        </div>
      </section>
    );

  return <></>;
};

export default CookieDisclaimer;