import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FiPlus } from "react-icons/fi";

const App = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <nav className="w-full h-20 px-20 bg-cyan-500 flex justify-between items-center fixed z-100 text-white shadow-xl/20">
                <p className="font-extrabold font-sans text-[30px]">Lorem</p>
                <div className="flex justify-center items-center gap-10 font-bold">
                    <a href="">Home</a>
                    <a href="">Services</a>
                    <a href="">Pricing</a>
                    <button className="w-20 h-10 bg-white text-cyan-500 rounded-lg hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] active:scale-95">
                        Log in
                    </button>
                </div>
            </nav>

            <main className="w-full h-screen pt-20 px-40 bg-cyan-500 text-white flex justify-between items-center">
                <section className="w-150 flex flex-col justify-center items-start gap-4">
                    <p className="text-5xl font-extrabold leading-16">
                        Lorem ipsum dolor <br />
                        sit amet consectetur, <br />
                        adipisicing elit.
                    </p>

                    <p className="font-medium mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Possimus, excepturi?
                    </p>

                    <div className="flex justify-center items-center gap-4 font-medium">
                        <button className="h-12 w-40 px-4 flex justify-between items-center bg-white text-cyan-500 rounded-xl shadow-md hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] active:scale-95">
                            <p className="h-fit">Explore</p>
                            <FaAngleRight size={20} />
                        </button>
                        <button className="h-12 w-40 px-4 flex justify-between items-center bg-white text-cyan-500 rounded-xl shadow-md hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] active:scale-95">
                            <p className="">Contact Us</p>
                            <FaAngleRight size={20} />
                        </button>
                    </div>
                </section>

                <section className="h-120 w-100 flex justify-center items-center">
                    <div className="h-120 w-100 py-4 px-8 bg-white text-cyan-500 rounded-3xl flex flex-col gap-8">
                        <form
                            action="post"
                            className="flex flex-col justify-center items-center gap-4"
                        >
                            <p className="font-semibold text-xl mb-4">
                                Create your Account
                            </p>
                            <input
                                type="text"
                                name="username"
                                id=""
                                placeholder="Username"
                                className="w-full h-10 rounded-lg border border-gray-400 px-4 text-black"
                            />
                            <input
                                type="email"
                                name="email"
                                id=""
                                placeholder="Email"
                                className="w-full h-10 rounded-lg border border-gray-400 px-4 text-black"
                            />
                            <input
                                type="password"
                                name="pw"
                                id=""
                                placeholder="Paassword"
                                className="w-full h-10 rounded-lg border border-gray-400 px-4 text-black"
                            />
                            <input
                                type="password"
                                name="confirm_pw"
                                id=""
                                placeholder="Confirm Paassword"
                                className="w-full h-10 rounded-lg border border-gray-400 px-4 text-black"
                            />

                            <input
                                type="submit"
                                value="Sign Up"
                                className="h-10 bg-cyan-500 text-white font-semibold w-40 rounded-lg hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] active:scale-95"
                            />
                        </form>

                        <div className="w-full h-auto flex justify-center items-center">
                            <hr className="w-full" />
                            <p className="px-1.5 absolute bg-white z-2 font-bold text-[18px]">
                                Or
                            </p>
                        </div>

                        <button className="w-full h-10 border rounded-full flex justify-center items-center gap-2 hover:-translate-y-0.5 hover:translate-x-0.5 hover:shadow-[-5px_5px_10px_rgba(0,0,0,0.4)] active:scale-95">
                            <FcGoogle />
                            <p className="text-black mb-0.5">
                                Continue with Google
                            </p>
                        </button>
                    </div>
                </section>
            </main>

            <section className="w-full h-auto bg-cyan-500 text-white px-40 py-20 flex flex-col justify-center items-start gap-4">
                <p className="font-bold text-[28px]">Why Lorem?</p>
                <div className="w-full h-80 flex gap-2 mb-8">
                    <div className="flex-1 bg-white text-cyan-500 p-4 rounded-lg ">
                        <p className="font-bold text-[18px] mb-2">
                            Similique optio officiis
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Dolores quod saepe consequuntur numquam
                            repudiandae ut totam, dolorem reiciendis?
                        </p>
                    </div>
                    <div className="flex-1 bg-white text-cyan-500 p-4 rounded-lg ">
                        <p className="font-bold text-[18px] mb-2">
                            Alias qui obcaecati?
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Similique, corporis? Adipisci nemo aperiam
                            maiores suscipit!
                        </p>
                    </div>
                    <div className="flex-1 bg-white text-cyan-500 p-4 rounded-lg ">
                        <p className="font-bold text-[18px] mb-2">
                            Quibusdam officiis eveniet?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Esse assumenda unde minus quas odit totam
                            praesentium rem et cum inventore.
                        </p>
                    </div>
                    <div className="flex-1 bg-white text-cyan-500 p-4 rounded-lg ">
                        <p className="font-bold text-[18px]">
                            Quo mollitia nobist.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ducimus, vitae accusantium?
                        </p>
                    </div>
                </div>

                <p className="font-bold text-[28px]">
                    Frequently Asked Questions
                </p>

                <div className="w-full flex flex-col gap-4 justify-center items-center font-semibold">
                    <button className="group w-full h-10 p-6 bg-white text-cyan-500 rounded-full flex justify-between items-center ">
                        <p className="group-hover:hidden">What is Lorem?</p>
                        <p className="hidden group-hover:block">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Maiores, pariatur!
                        </p>
                        <FiPlus size={30} />
                    </button>
                    <button className="group w-full h-10 p-6 bg-white text-cyan-500 rounded-full flex justify-between items-center ">
                        <p className="group-hover:hidden">Is Lorem free?</p>
                        <p className="hidden group-hover:block">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ducimus accusantium aperiam consequuntur
                            pariatur eligendi, doloremque velit harum esse.
                        </p>
                        <FiPlus size={30} />
                    </button>
                    <button className="group w-full h-10 p-6 bg-white text-cyan-500 rounded-full flex justify-between items-center ">
                        <p className="group-hover:hidden">
                            Where can Lorem be used?
                        </p>
                        <p className="hidden group-hover:block">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Ratione accusamus, quod odio provident sed
                            cupiditate?
                        </p>
                        <FiPlus size={30} />
                    </button>
                    <button className="group w-full h-10 p-6 bg-white text-cyan-500 rounded-full flex justify-between items-center ">
                        <p className="group-hover:hidden">How do I cancel?</p>
                        <p className="hidden group-hover:block">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <FiPlus size={30} />
                    </button>
                    <button className="group w-full h-10 p-6 bg-white text-cyan-500 rounded-full flex justify-between items-center ">
                        <p className="group-hover:hidden">
                            Is Lorem copyright free?
                        </p>
                        <p className="hidden group-hover:block">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Illo laborum iste possimus.
                        </p>
                        <FiPlus size={30} />
                    </button>
                </div>
            </section>

            <footer className="w-full h-auto bg-cyan-500 text-white px-40 py-20 flex flex-col gap-8 shadow-[0_-5px_15px_rgba(0,0,0,0.2)]">
                <a href="" className="underline">
                    Questions? Contact Us
                </a>

                <div className="w-full grid grid-cols-4 grid-rows-auto gap-2 underline text-[14px]">
                    <a href="">FAQ</a>
                    <a href="">Help Center</a>
                    <a href="">Account</a>
                    <a href="">Media Center</a>
                    <a href="">Investor Relations</a>
                    <a href="">Jobs</a>
                    <a href="">Terms of Use</a>
                    <a href="">Privacy</a>
                    <a href="">Cookie Preferences</a>
                    <a href="">Corporate Information</a>
                    <a href="">Contact Us</a>
                    <a href="">Legal Notices</a>
                </div>

                <p className="text-[13px]">
                    © 2026 Lorem. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default App;
