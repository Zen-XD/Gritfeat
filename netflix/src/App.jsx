import React from "react";
import { FaChevronRight, FaTv, FaCircleDown } from "react-icons/fa6";
import { IoTelescopeOutline } from "react-icons/io5";
import { AiTwotoneSmile } from "react-icons/ai";
import { FiPlus } from "react-icons/fi";
import { MdTranslate } from "react-icons/md";
import { FaSortDown } from "react-icons/fa";

const App = () => {
    return (
        <div className="font-sans text-white flex flex-col">
            <main className="w-full flex-1 bg-[url('./background/bg.jpg')] bg-cover flex">
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

                    <section className="flex-1 flex flex-col justify-center items-center gap-4 min-h-148 px-8 pb-8 w-full">
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
                <div className="mb-16">
                    <p className="text-[24px] font-medium mb-4">
                        More Reasons to Join
                    </p>

                    <div className="h-77.5 lg:flex justify-center items-center gap-5 sm:grid sm:grid-cols-2">
                        <div className="h-full min-w-62.5 flex-1 flex flex-col px-4 py-6 bg-[linear-gradient(149deg,#192247_0%,#210e17_96.86%)] rounded-2xl">
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
                        <div className="h-full min-w-62.5 flex-1 flex flex-col px-4 py-6 bg-[linear-gradient(149deg,#192247_0%,#210e17_96.86%)] rounded-2xl">
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
                        <div className="h-full min-w-62.5 flex-1 flex flex-col px-4 py-6 bg-[linear-gradient(149deg,#192247_0%,#210e17_96.86%)] rounded-2xl">
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
                        <div className="h-full min-w-62.5 flex-1 flex flex-col px-4 py-6 bg-[linear-gradient(149deg,#192247_0%,#210e17_96.86%)] rounded-2xl">
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

                {/* Questions */}
                <div className="text-[24px] mb-16">
                    <p className="font-medium mb-4">
                        Frequently Asked Questions
                    </p>
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <button className="w-full h-21 p-6 bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center">
                            <p>What is Netflix?</p>
                            <FiPlus size={40} />
                        </button>
                        <button className="w-full h-21 p-6 bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center">
                            <p>How much does Netflix cost?</p>
                            <FiPlus size={40} />
                        </button>
                        <button className="w-full h-21 p-6 bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center">
                            <p>Where can I watch?</p>
                            <FiPlus size={40} />
                        </button>
                        <button className="w-full h-21 p-6 bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center">
                            <p>How do I cancel?</p>
                            <FiPlus size={40} />
                        </button>
                        <button className="w-full h-21 p-6 bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center">
                            <p>What can I watch on Netflix?</p>
                            <FiPlus size={40} />
                        </button>
                        <button className="w-full h-21 p-6 bg-[#2d2d2d] hover:bg-[#414141] flex justify-between items-center">
                            <p>Is Netflix good for kids?</p>
                            <FiPlus size={40} />
                        </button>
                    </div>
                </div>

                <footer className="w-full flex flex-col justify-center items-start">
                    <p className="w-full leading-6 flex justify-center items-center mb-4">
                        Ready to watch? Enter your email to create or restart
                        your membership.
                    </p>
                    <form
                        action="post"
                        className="w-full h-14 px-45 mb-21.5 flex-1 flex justify-center items-center gap-2"
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

                    <a href="" className="mb-9 underline text-[#ffffffb3]">
                        Questions? Contact Us
                    </a>

                    <div className="p-1 mb-12.5 grid grid-cols-4 grid-rows-auto gap-3 w-full underline text-[14px] text-[#ffffffb3]">
                        <a href="">FAQ</a>
                        <a href="">Help Center</a>
                        <a href="">Account</a>
                        <a href="">Media Center</a>
                        <a href="">Investor Relations</a>
                        <a href="">Jobs</a>
                        <a href="">Ways to Watch</a>
                        <a href="">Terms of Use</a>
                        <a href="">Privacy</a>
                        <a href="">Cookie Preferences</a>
                        <a href="">Corporate Information</a>
                        <a href="">Contact Us</a>
                        <a href="">Speed Test</a>
                        <a href="">Legal Notices</a>
                        <a href="">Only on Netflix</a>
                    </div>

                    <div className="w-full h-8 text-white">
                        <div className="w-50 p-0.75 flex justify-start items-center border-2 border-[#808080b3] rounded-md">
                            <MdTranslate className="absolute ml-2" />

                            <select
                                name=""
                                id=""
                                className="appearance-none pl-8 pr-15 focus:outline-none"
                            >
                                <option value="" className="text-black" default>
                                    English
                                </option>
                                <option value="" className="text-black">
                                    Español
                                </option>
                                <option value="" className="text-black">
                                    Português
                                </option>
                                <option value="" className="text-black">
                                    Français
                                </option>
                                <option value="" className="text-black">
                                    Svenska
                                </option>
                                <option value="" className="text-black">
                                    Norsk bokmål
                                </option>
                                <option value="" className="text-black">
                                    Suomi
                                </option>
                                <option value="" className="text-black">
                                    한국어
                                </option>
                                <option value="" className="text-black">
                                    中文
                                </option>
                                <option value="" className="text-black">
                                    日本語
                                </option>
                            </select>

                            <FaSortDown className="absolute ml-40 mb-1" />
                        </div>
                    </div>

                    <p className="my-9 text-[#ffffffb3]">Netflix Nepal</p>

                    <p className="text-[13px] text-[#ffffff80]">
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot.
                    </p>
                </footer>
            </section>
        </div>
    );
};

export default App;
