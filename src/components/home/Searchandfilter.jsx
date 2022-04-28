import React, {useState} from "react";
import { CardText, CardTitle, FlipCard, FlipCardInner, FlipCardFront, FlipCardBack, FlipCardClose, FlipCardButton} from "../../shared/index";
// import searchbg from "../../images/bg-text.png";


const Form = () => {
    return(
        <form className="flex justify-between font-sans items-center w-full lg:w-[560px] bg-[#0A0A0B] rounded-[25px] py-2 px-2 border-[15px] border-[#1E2024]" style={{boxShadow: "0px 2px 60px rgba(255, 255, 255, 0.15)"}}>
            <button className="bg-[#263964] text-white rounded-[10px] py-2 px-2 flex justify-between items-center">
                <small className="mr-2 tracking-[.1em]">Uniswap</small>
                <i className="text-xs ri-close-fill"></i>
            </button>

            <input
                className="py-1 text-black outline-0 placeholder:text-[#505562] w-full bg-[#0A0A0B] px-2 text-sm " 
                placeholder="search for assets, projects, events, etc..."
            />

            <i className="text-xl text-[#505562] ri-search-2-line"></i>
        </form>
    )
}


function Searchandfilter() {
    const [searchToggle, setSearchToggle] = useState(false);

    function handleSearchToggle(){
        setSearchToggle(!searchToggle);
    }

    return (
        <div className="grid grid-cols-1">
            <FlipCard className="overflow-hidden h-[300px]">
                <FlipCardInner>
                    <FlipCardFront className="pt-8 pb-8">
                        <div className="relative h-full w-full md:bg-[url('../../images/bg-text.png')] bg-no-repeat bg-center flex flex-col xl:flex-row">
                            <div>
                                <CardTitle className="w-full md:w-[300px]">
                                    Search data and filter by projects
                                </CardTitle>
                                <FlipCardButton>How it works</FlipCardButton>
                            </div>

                            <div className="flex items-center justify-center mt-8 sm:mt-4 lg:mt-0">
                                <Form/>
                            </div>
                            
                        </div>
                    </FlipCardFront>

                    <FlipCardBack>
                        <p>Back</p>
                    </FlipCardBack>
                </FlipCardInner>
            </FlipCard>
        </div>
    )
}

export default Searchandfilter;