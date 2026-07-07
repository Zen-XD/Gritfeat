import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FiPlus } from "react-icons/fi";

const App = () => {
    return (
        <div className="w-full h-full flex flex-col">
            {/* Navbar: Adjusted padding and allowed links to wrap/scale on mobile */}
            <nav className="w-full h-20 px-6 lg:px-20 bg-cyan-500 flex justify-between items-center fixed z-50 text-white shadow-xl/20">
                <p className="font-extrabold font-sans text-2xl lg:text-[30px]">
                    Lorem
                </p>
                <div className="flex justify-end items-center gap-4 lg:gap-10 font-bold text-sm lg:text-base">
                    <a href="" className="hidden sm:block">
                        Home
                    </a>
                    <a href="" className="hidden sm:block">
                        Services
                    </a>
                    <a href="" className="hidden sm:block">
                        Pricing
                    </a>
                    <button className="w-20 h-10 bg-white text-cyan-500 rounded-lg hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] active:scale-95">
                        Log in
                    </button>
                </div>
            </nav>

            {/* Main Hero: Changed to flex-col on mobile, flex-row on large screens. Fixed arbitrary widths. */}
            <main className="w-full min-h-screen pt-28 pb-12 px-6 lg:px-40 bg-cyan-500 text-white flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-12 lg:gap-0">
                <section className="w-full lg:max-w-150 flex flex-col justify-center items-start gap-4">
                    <p className="text-4xl lg:text-5xl font-extrabold leading-tight lg:leading-16">
                        Lorem ipsum dolor <br className="hidden sm:block" />
                        sit amet consectetur, <br className="hidden sm:block" />
                        adipisicing elit.
                    </p>

                    <p className="font-medium mb-4 text-sm lg:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, excepturi?
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 font-medium w-full sm:w-auto">
                        <button className="h-12 w-full sm:w-40 px-4 flex justify-between items-center bg-white text-cyan-500 rounded-xl shadow-md hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] active:scale-95">
                            <p className="h-fit">Explore</p>
                            <FaAngleRight size={20} />
                        </button>
                        <button className="h-12 w-full sm:w-40 px-4 flex justify-between items-center bg-white text-cyan-500 rounded-xl shadow-md hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] active:scale-95">
                            <p className="">Contact Us</p>
                            <FaAngleRight size={20} />
                        </button>
                    </div>
                </section>

                <section className="w-full sm:max-w-100 flex justify-center items-center">
                    <div className="w-full py-8 px-6 lg:px-8 bg-white text-cyan-500 rounded-3xl flex flex-col gap-8">
                        <form
                            action="post"
                            className="flex flex-col justify-center items-center gap-4"
                        >
                            <p className="font-semibold text-xl mb-4 text-center">
                                Create your Account
                            </p>
                            <input
                                type="text"
                                name="username"
                                placeholder="Username"
                                className="w-full h-10 rounded-lg border border-gray-400 px-4 text-black"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="w-full h-10 rounded-lg border border-gray-400 px-4 text-black"
                            />
                            <input
                                type="password"
                                name="pw"
                                placeholder="Password"
                                className="w-full h-10 rounded-lg border border-gray-400 px-4 text-black"
                            />
                            <input
                                type="password"
                                name="confirm_pw"
                                placeholder="Confirm Password"
                                className="w-full h-10 rounded-lg border border-gray-400 px-4 text-black"
                            />

                            <input
                                type="submit"
                                value="Sign Up"
                                className="h-10 bg-cyan-500 text-white font-semibold w-full sm:w-40 rounded-lg hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] active:scale-95 cursor-pointer mt-2"
                            />
                        </form>

                        <div className="w-full h-auto flex justify-center items-center relative">
                            <hr className="w-full border-gray-300" />
                            <p className="px-2 absolute bg-white z-10 font-bold text-[18px]">
                                Or
                            </p>
                        </div>

                        <button className="w-full h-10 border border-gray-400 rounded-full flex justify-center items-center gap-2 hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] active:scale-95">
                            <FcGoogle size={20} />
                            <p className="text-black mb-0.5 text-sm sm:text-base">
                                Continue with Google
                            </p>
                        </button>
                    </div>
                </section>
            </main>

            {/* Features Section: Switched to CSS grid/flex-col for mobile layout */}
            <section className="w-full h-auto bg-cyan-500 text-white px-6 lg:px-40 py-12 lg:py-20 flex flex-col justify-center items-start gap-4">
                <p className="font-bold text-2xl lg:text-[28px]">Why Lorem?</p>
                <div className="w-full flex flex-col md:flex-row gap-4 mb-8">
                    <div className="flex-1 bg-white text-cyan-500 p-6 rounded-lg shadow-md">
                        <p className="font-bold text-lg mb-2">
                            Similique optio officiis
                        </p>
                        <p className="text-sm lg:text-base">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Dolores quod saepe consequuntur numquam
                            repudiandae ut totam, dolorem reiciendis?
                        </p>
                    </div>
                    <div className="flex-1 bg-white text-cyan-500 p-6 rounded-lg shadow-md">
                        <p className="font-bold text-lg mb-2">
                            Alias qui obcaecati?
                        </p>
                        <p className="text-sm lg:text-base">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Similique, corporis? Adipisci nemo aperiam
                            maiores suscipit!
                        </p>
                    </div>
                    <div className="flex-1 bg-white text-cyan-500 p-6 rounded-lg shadow-md">
                        <p className="font-bold text-lg mb-2">
                            Quibusdam officiis eveniet?
                        </p>
                        <p className="text-sm lg:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse assumenda unde minus quas odit totam
                            praesentium rem et cum inventore.
                        </p>
                    </div>
                    <div className="flex-1 bg-white text-cyan-500 p-6 rounded-lg shadow-md">
                        <p className="font-bold text-lg mb-2">
                            Quo mollitia nobist.
                        </p>
                        <p className="text-sm lg:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus, vitae accusantium?
                        </p>
                    </div>
                </div>

                <p className="font-bold text-2xl lg:text-[28px] mt-8">
                    Frequently Asked Questions
                </p>

                {/* FAQ: Changed h-10 to min-h-[3rem] h-auto to prevent text overflow on mobile */}
                <div className="w-full flex flex-col gap-4 justify-center items-center font-semibold text-sm lg:text-base">
                    <button className="group w-full min-h-16 h-auto p-4 lg:p-6 bg-white text-cyan-500 rounded-2xl lg:rounded-full flex justify-between items-center text-left">
                        <p className="group-hover:hidden w-[90%]">
                            What is Lorem?
                        </p>
                        <p className="hidden group-hover:block w-[90%] font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores, pariatur!
                        </p>
                        <FiPlus size={24} className="shrink-0" />
                    </button>
                    <button className="group w-full min-h-16 h-auto p-4 lg:p-6 bg-white text-cyan-500 rounded-2xl lg:rounded-full flex justify-between items-center text-left">
                        <p className="group-hover:hidden w-[90%]">
                            Is Lorem free?
                        </p>
                        <p className="hidden group-hover:block w-[90%] font-normal">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ducimus accusantium aperiam consequuntur
                            pariatur eligendi, doloremque velit harum esse.
                        </p>
                        <FiPlus size={24} className="shrink-0" />
                    </button>
                    <button className="group w-full min-h-16 h-auto p-4 lg:p-6 bg-white text-cyan-500 rounded-2xl lg:rounded-full flex justify-between items-center text-left">
                        <p className="group-hover:hidden w-[90%]">
                            Where can Lorem be used?
                        </p>
                        <p className="hidden group-hover:block w-[90%] font-normal">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ratione accusamus, quod odio provident sed
                            cupiditate?
                        </p>
                        <FiPlus size={24} className="shrink-0" />
                    </button>
                    <button className="group w-full min-h-16 h-auto p-4 lg:p-6 bg-white text-cyan-500 rounded-2xl lg:rounded-full flex justify-between items-center text-left">
                        <p className="group-hover:hidden w-[90%]">
                            How do I cancel?
                        </p>
                        <p className="hidden group-hover:block w-[90%] font-normal">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <FiPlus size={24} className="shrink-0" />
                    </button>
                    <button className="group w-full min-h-16 h-auto p-4 lg:p-6 bg-white text-cyan-500 rounded-2xl lg:rounded-full flex justify-between items-center text-left">
                        <p className="group-hover:hidden w-[90%]">
                            Is Lorem copyright free?
                        </p>
                        <p className="hidden group-hover:block w-[90%] font-normal">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Illo laborum iste possimus.
                        </p>
                        <FiPlus size={24} className="shrink-0" />
                    </button>
                </div>
            </section>

            {/* Footer: Changed grid columns to 2 on small screens, 4 on medium+ */}
            <footer className="w-full h-auto bg-cyan-500 text-white px-6 lg:px-40 py-12 lg:py-20 flex flex-col gap-8 shadow-[0_-5px_15px_rgba(0,0,0,0.2)]">
                <a href="" className="underline hover:text-gray-200 w-fit">
                    Questions? Contact Us
                </a>

                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-y-4 gap-x-2 underline text-xs md:text-[14px]">
                    <a href="" className="hover:text-gray-200">
                        FAQ
                    </a>
                    <a href="" className="hover:text-gray-200">
                        Help Center
                    </a>
                    <a href="" className="hover:text-gray-200">
                        Account
                    </a>
                    <a href="" className="hover:text-gray-200">
                        Media Center
                    </a>
                    <a href="" className="hover:text-gray-200">
                        Investor Relations
                    </a>
                    <a href="" className="hover:text-gray-200">
                        Jobs
                    </a>
                    <a href="" className="hover:text-gray-200">
                        Terms of Use
                    </a>
                    <a href="" className="hover:text-gray-200">
                        Privacy
                    </a>
                    <a href="" className="hover:text-gray-200">
                        Cookie Preferences
                    </a>
                    <a href="" className="hover:text-gray-200">
                        Corporate Information
                    </a>
                    <a href="" className="hover:text-gray-200">
                        Contact Us
                    </a>
                    <a href="" className="hover:text-gray-200">
                        Legal Notices
                    </a>
                </div>

                <p className="text-xs md:text-[13px] mt-4">
                    © 2026 Lorem. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default App;
