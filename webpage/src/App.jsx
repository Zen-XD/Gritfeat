import React from "react";
import { Menu, Circle } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const App = () => {
    return (
        <div className="flex flex-wrap justify-center w-full h-auto flex-col font-sans   overflow-x-auto">
            <section
                className="w-full h-screen flex flex-col justify-between items-center text-white bg-cover bg-center p-8 bg-black 
                bg-[url('https://images.pexels.com/photos/16959094/pexels-photo-16959094.jpeg')]
                has-[#s1:checked]:bg-[url('https://images.pexels.com/photos/16959094/pexels-photo-16959094.jpeg')] 
                has-[#s2:checked]:bg-[url('https://images.pexels.com/photos/4913789/pexels-photo-4913789.jpeg')] 
                has-[#s3:checked]:bg-[url('https://images.pexels.com/photos/5097932/pexels-photo-5097932.jpeg')]"
            >
                <nav className="flex justify-between items-center w-full">
                    <p className="text-[1.2rem]">
                        <span className="text-2xl">Hielo</span> by TEMPLATED
                    </p>
                    <button className="flex justify-between items-center gap-2 border-0 bg-transparent text-white text-2xl hover:text-black">
                        <Menu /> Menu
                    </button>
                </nav>

                <main className="flex flex-col justify-center items-center gap-4 tracking-widest">
                    <p>
                        A FREE RESPONSIVE WEBSITE TEMPLATE BY{" "}
                        <span class="bold">TEMPLATED</span>
                    </p>
                    <hr className="w-5/10" />
                    <p className="text-8xl">Hielo</p>
                </main>

                <input type="radio" name="dots" id="s1" className="hidden" />
                <input type="radio" name="dots" id="s2" className="hidden" />
                <input type="radio" name="dots" id="s3" className="hidden" />

                <div className="flex justify-center items-center gap-4">
                    <label for="s1">
                        <Circle fill="true" className="fill-current" />
                    </label>
                    <label for="s2">
                        <Circle fill="true" className="fill-current" />
                    </label>
                    <label for="s3">
                        <Circle fill="true" className="fill-current" />
                    </label>
                </div>
            </section>

            <section className="flex justify-center items-center gap-[5%] min-h-screen w-full bg-gray-300 pr-[10%] pl-[10%]">
                <div className="flex flex-col flex-1 justify-between items-center gap-10 bg-white min-w-75 w-full min-h-150 mt-5 mb-5 pb-5">
                    <img
                        src="https://images.pexels.com/photos/4396960/pexels-photo-4396960.jpeg"
                        alt="img1"
                        className="h-75 w-full object-cover"
                    />

                    <div className="flex flex-col justify-center items-center gap-2.5 w-8/10">
                        <p className="tracking-[0.2rem] text-gray-400 text-[0.9rem] uppercase">
                            Lorem ipsum dolor sit amet.
                        </p>
                        <hr className="w-6/10" />
                        <p className="text-3xl pb-4">Lorem, ipsum dolor.</p>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ullam hic eveniet eligendi reprehenderit quam
                            repellendus, assumenda optio asperiores iste dolores
                            non maiores earum soluta repudiandae!
                        </p>
                    </div>

                    <button className="p-2.5 pr-5 pl-5 border border-gray-400 hover:text-white hover:bg-gray-400 active:scale-[0.95]">
                        LEARN MORE
                    </button>
                </div>

                <div className="flex flex-col flex-1 justify-between items-center gap-10 bg-white min-w-75 w-full min-h-150 mt-5 mb-5 pb-5">
                    <img
                        src="https://images.pexels.com/photos/34960157/pexels-photo-34960157.jpeg"
                        alt="img2"
                        className="h-75 w-full object-cover"
                    />

                    <div className="flex flex-col justify-center items-center gap-2.5 w-8/10">
                        <p className="tracking-[0.2rem] text-gray-400 text-[0.9rem] uppercase">
                            Lorem ipsum dolor sit amet.
                        </p>
                        <hr className="w-6/10" />
                        <p className="text-3xl pb-4">Lorem, ipsum dolor.</p>
                        <p className="text-gray-400">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ullam hic eveniet eligendi reprehenderit quam
                            repellendus, assumenda optio asperiores iste dolores
                            non maiores earum soluta repudiandae!
                        </p>
                    </div>

                    <button className="p-2.5 pr-5 pl-5 border border-gray-400 hover:text-white hover:bg-gray-400 active:scale-[0.95]">
                        LEARN MORE
                    </button>
                </div>
            </section>

            <section className="bg-gray-700 text-white flex flex-col justify-center items-center gap-2.5 h-60">
                <p className="uppercase text-[0.9rem] tracking-widest">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aperiam, id accusantium.
                </p>
                <hr className="w-35/100" />
                <p className="text-2xl">Lorem, ipsum dolor.</p>
            </section>

            <section className="bg-gray-300 flex flex-col justify-center items-center gap-2.5 min-h-screen p-8">
                <p className="uppercase text-[0.9rem] tracking-widest">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Aperiam, id accusantium.
                </p>
                <hr className="w-35/100" />
                <p className="text-2xl mb-5">Lorem, ipsum dolor.</p>

                <div className="grid grid-cols-2 grid-rows-2 justify-center items-center gap-10 h-auto w-auto">
                    <div className="bg-white p-2.5 h-70 w-140">
                        <img
                            src="https://images.pexels.com/photos/37898647/pexels-photo-37898647.jpeg"
                            alt="img1"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="bg-white p-2.5 h-70 w-140">
                        <img
                            src="https://images.pexels.com/photos/36365214/pexels-photo-36365214.jpeg"
                            alt="img2"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="bg-white p-2.5 h-70 w-140">
                        <img
                            src="https://images.pexels.com/photos/35723510/pexels-photo-35723510.jpeg"
                            alt="img3"
                            className="h-full w-full object-cover"
                        />
                    </div>
                    <div className="bg-white p-2.5 h-70 w-140">
                        <img
                            src="https://images.pexels.com/photos/14348416/pexels-photo-14348416.jpeg"
                            alt="img4"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <footer className="bg-black flex flex-col justify-end items-center gap-16 h-60 p-8 text-white">
                <div className="flex justify-center items-center gap-4">
                    <FaXTwitter size={24} />
                    <FaFacebook size={24} />
                    <FaInstagram size={24} />
                </div>
                <p>
                    <span className="font-bold">Made with</span> Templated.
                </p>
            </footer>
        </div>
    );
};

export default App;
