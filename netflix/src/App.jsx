import React from "react";
import { FaChevronRight, FaTv, FaCircleDown } from "react-icons/fa6";
import { IoTelescopeOutline } from "react-icons/io5";
import { AiTwotoneSmile } from "react-icons/ai";

const App = () => {
    return (
        <div className="font-sans text-white">
            <main className="w-full bg-[url('./background/bg.jpg')] bg-cover flex">
                <div
                    className="w-full max-h-222 min-h-193 flex-1 bg-[radial-gradient(circle,rgba(0,0,0,0.5),rgba(0,0,0,0.95))] 
                    flex flex-col "
                >
                    <nav className="w-full h-30 px-37">
                        <div className="h-22 flex justify-between items-center">
                            <img
                                src="./icons/netflix-svgrepo-com.svg"
                                alt=""
                                className="w-37 h-10"
                            />

                            <button className="w-19.25 h-8 font-medium bg-[#e41e19] hover:bg-[#c11119] active:bg-[#99161d] rounded-sm text-white flex justify-center items-center text-[14px]">
                                Sign In
                            </button>
                        </div>
                    </nav>

                    <section className="flex-1 flex flex-col justify-center items-center gap-4 max-h-344 px-8 pb-8 w-full">
                        <div className="w-147 h-35 font-bold text-[56px] leading-17.5 text-center">
                            <p>Unlimited movies, TV shows, and more</p>
                        </div>
                        <p className="font-medium text-[20px] mb-4">
                            Starts at USD 2.99. Cancel anytime.
                        </p>

                        <p className="leading-6 flex justify-center items-center">
                            Ready to watch? Enter your email to create or
                            restart your membership.
                        </p>
                        <form
                            action="post"
                            className="w-147 h-14 flex justify-center items-center gap-2"
                        >
                            <input
                                type="email"
                                name="Email address"
                                id=""
                                placeholder="Email address"
                                className="p-4 flex-1 border rounded-sm border-[rgba(128,128,128,0.7)] bg-[#161616b3]"
                            />
                            <button
                                type="submit"
                                className="h-full px-6 py-3 rounded-md text-[24px] font-medium flex justify-center items-center gap-3 bg-[#e41e19] hover:bg-[#c11119] active:bg-[#99161d] "
                            >
                                Get Started <FaChevronRight />
                            </button>
                        </form>
                    </section>

                    <section className="w-full h-25 overflow-hidden flex justify-center items-center">
                        <div className="w-full h-full bg-[url('./background/redline.png')] bg-cover rounded-t-[200%]"></div>
                    </section>
                </div>
            </main>

            <section className="px-37 -mt-12 pb-24 bg-black ">
                <p className="text-[24px] font-medium mb-4">Trending Now</p>

                {/* movie items */}
                <div className="w-full h-67 flex text-black font-bold mb-16">
                    <div className="w-56 px-5.5 py-2 flex items-end hover:scale-105 transition-all duration-3s ease-in">
                        <img
                            src="./movies/m1.webp"
                            alt=""
                            className="rounded-md"
                        />
                        <p className="absolute -ml-5.5 text-[100px] [-webkit-text-stroke:2px_white]">
                            1
                        </p>
                    </div>
                    <div className="w-56 px-5.5 py-2 flex items-end hover:scale-105 transition-all duration-3s ease-in">
                        <img
                            src="./movies/m2.webp"
                            alt=""
                            className="rounded-md"
                        />
                        <p className="absolute -ml-5.5 text-[100px] [-webkit-text-stroke:2px_white]">
                            2
                        </p>
                    </div>
                    <div className="w-56 px-5.5 py-2 flex items-end hover:scale-105 transition-all duration-3s ease-in">
                        <img
                            src="./movies/m3.webp"
                            alt=""
                            className="rounded-md"
                        />
                        <p className="absolute -ml-5.5 text-[100px] [-webkit-text-stroke:2px_white]">
                            3
                        </p>
                    </div>
                    <div className="w-56 px-5.5 py-2 flex items-end hover:scale-105 transition-all duration-3s ease-in">
                        <img
                            src="./movies/m4.webp"
                            alt=""
                            className="rounded-md"
                        />
                        <p className="absolute -ml-5.5 text-[100px] [-webkit-text-stroke:2px_white]">
                            4
                        </p>
                    </div>
                    <div className="w-56 px-5.5 py-2 flex items-end hover:scale-105 transition-all duration-3s ease-in">
                        <img
                            src="./movies/m5.webp"
                            alt=""
                            className="rounded-md"
                        />
                        <p className="absolute -ml-5.5 text-[100px] [-webkit-text-stroke:2px_white]">
                            5
                        </p>
                    </div>

                    <div className="w-6 flex justify-center items-center">
                        <button className="h-30 w-full bg-[#ffffff1a] text-[#ffffffb3] flex justify-center items-center rounded-md hover:bg-[#333]">
                            <FaChevronRight />
                        </button>
                    </div>
                </div>

                {/* caards */}
                <div>
                    <p className="text-[24px] font-medium mb-4">
                        More Reasons to Join
                    </p>

                    <div className="h-77.5 flex justify-center items-center gap-5">
                        <div className="h-full flex-1 flex flex-col px-4 py-6 bg-[linear-gradient(149deg,#192247_0%,#210e17_96.86%)] rounded-2xl">
                            <p className="mb-4 font-medium text-[24px]">
                                Enjoy on your TV
                            </p>
                            <p>
                                Watch on Smart TVs, Playstation, Xbox,
                                Chromecast, Apple TV, Blu-ray players, and more.
                            </p>
                            <div className="flex-1 flex justify-end items-end p-2">
                                <FaTv size={40} />
                            </div>
                        </div>
                        <div className="h-full flex-1 flex flex-col px-4 py-6 bg-[linear-gradient(149deg,#192247_0%,#210e17_96.86%)] rounded-2xl">
                            <p className="mb-4 font-medium text-[24px]">
                                Download your shows to watch offline
                            </p>
                            <p>
                                Save your favorites easily and always have
                                something to watch.
                            </p>
                            <div className="flex-1 flex justify-end items-end p-2">
                                <FaCircleDown size={40} />
                            </div>
                        </div>
                        <div className="h-full flex-1 flex flex-col px-4 py-6 bg-[linear-gradient(149deg,#192247_0%,#210e17_96.86%)] rounded-2xl">
                            <p className="mb-4 font-medium text-[24px]">
                                Watch everywhere
                            </p>
                            <p>
                                Stream unlimited movies and TV shows on your
                                phone, tablet, laptop, and TV.
                            </p>
                            <div className="flex-1 flex justify-end items-end p-2">
                                <IoTelescopeOutline size={40} />
                            </div>
                        </div>
                        <div className="h-full flex-1 flex flex-col px-4 py-6 bg-[linear-gradient(149deg,#192247_0%,#210e17_96.86%)] rounded-2xl">
                            <p className="mb-4 font-medium text-[24px]">
                                Create profiles for kids
                            </p>
                            <p>
                                Send kids on adventures with their favorite
                                characters in a space made just for them — free
                                with your membership.
                            </p>
                            <div className="flex-1 flex justify-end items-end p-2">
                                <AiTwotoneSmile size={40} />
                            </div>
                        </div>
                    </div>
                </div>

                <footer></footer>
            </section>
        </div>
    );
};

export default App;
