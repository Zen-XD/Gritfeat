import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { MdKeyboardVoice } from "react-icons/md";
import { VscSearchSparkle } from "react-icons/vsc";

const App = () => {
    return (
        <div className="flex justify-center items-center flex-col w-full h-screen bg-[#22242a] text-[#e8e8e8]">
            <main className="flex items-center flex-col w-full h-screen">
                <nav className="w-full h-16 flex justify-end items-start p-1.5">
                    <div className="pr-3 text-[13px] flex justify-center items-start gap-3.5 pt-3">
                        <a href="" className="hover:underline">
                            Gmail
                        </a>
                        <a href="" className="hover:underline">
                            Images
                        </a>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-start">
                        <div className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#313339]">
                            <CgMenuGridO size={24} />
                        </div>
                    </div>
                    <div className="w-12 h-12 flex justify-center items-start">
                        <div className="w-10 h-10 flex justify-center items-center rounded-full hover:bg-[#313339]">
                            <img
                                src="https://images.pexels.com/photos/30002390/pexels-photo-30002390.jpeg"
                                alt="profile_pic"
                                className="h-7.5 w-7.5 rounded-full"
                            />
                        </div>
                    </div>
                </nav>

                <main className="w-full flex flex-col justify-center items-center flex-1 gap-6.5">
                    {/* logo */}
                    <div className="w-full pr-24 pl-24 flex justify-center items-end flex-100 max-h-60.5">
                        <img
                            alt="World Cup 2026: The art of the rabona"
                            src="https://www.google.com/logos/doodles/2026/world-cup-2026-the-art-of-the-rabona-613-6753651837111096.3-la22242a.gif"
                            title="World Cup 2026: The art of the rabona"
                            className="min-h-37.5"
                        />
                        <div className="w-0 overflow-visible flex items-center justify-center">
                            <a
                                href=""
                                className="flex justify-center items-center ml-12 h-12 min-w-12"
                            >
                                <div className="w-8 h-8 bg-[#2c2e35] rounded-full flex justify-center items-center">
                                    <IoShareSocialOutline size={20} />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* searchbar+buttons */}
                    <div className="min-h-35 w-full pr-24 pl-24 flex flex-col justify-start items-center gap-7">
                        <div className="max-w-169.5 w-full h-12.5 bg-[#4d5156] rounded-4xl flex justify-center items-center">
                            <button className="w-12 h-12 flex justify-center items-center">
                                <div className="w-9 h-9 rounded-4xl hover:bg-[#3c4043] flex justify-center items-center">
                                    <FaPlus />
                                </div>
                            </button>
                            <textarea
                                name=""
                                id=""
                                className="flex-1 flex items-start pt-3 h-12.5 outline-none resize-none focus:outline-none focus:ring-0 focus:border-transparent"
                            ></textarea>
                            <div className="h-full w-auto flex justify-center items-center">
                                <button>
                                    <MdKeyboardVoice className="h-6 w-6 mx-2" />
                                </button>
                                <button className="pr-3">
                                    <img
                                        src="./icons/Google_Lens_Icon.svg"
                                        alt=""
                                        className="h-6 w-6 mx-2"
                                    />
                                </button>
                                <div className="h-9 p-2 flex justify-center items-center bg-[#5e6368] rounded-4xl mr-2">
                                    <button className="flex justify-center items-center gap-2.25">
                                        <VscSearchSparkle className="h-4 w-4" />
                                        <p className="text-[14px]">AI Mode</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-12.5 flex justify-center items-start gap-3 text-[15px] font-medium">
                            <button className="bg-[#303134] border-[#303134] border px-4 py-1 h-8.5 rounded-lg hover:border-[#5f6368]">
                                Google Search
                            </button>
                            <button className="bg-[#303134] border-[#303134] border px-4 py-1 h-8.5 rounded-lg hover:border-[#5f6368]">
                                I'm Feeling Lucky
                            </button>
                        </div>
                    </div>

                    {/* language */}
                    <div className="flex-1 flex justify-center items-start min-h-53.75">
                        <p className=" text-sm">
                            Google offered in: <a href="" className="text-[#99c3ff] hover:underline">नेपाली</a>
                        </p>
                    </div>
                </main>

                <section className="w-full h-12.25 flex justify-start items-start bg-[#16171a] border-[#444746] border-b px-7.5 py-3.75">
                    <p className="text-[15px] leading-none font-medium">
                        Nepal
                    </p>
                </section>
            </main>
            <footer className="w-full h-12.25 px-8 flex justify-between items-center text-[14px] font-medium leading-none bg-[#16171a]">
                <div className="flex gap-6">
                    <a href="">About</a>
                    <a href="">Advertising</a>
                    <a href="">Buisness</a>
                    <a href="">How Search works</a>
                </div>
                <div className="flex gap-5">
                    <a href="">Privacy</a>
                    <a href="">Terms</a>
                    <a href="">Settings</a>
                </div>
            </footer>
        </div>
    );
};

export default App;
