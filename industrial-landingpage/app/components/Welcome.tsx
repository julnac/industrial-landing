import { IoIosCheckmarkCircle } from "react-icons/io";
import Image from "next/image";

export default function Welcome() {

    return (
        <div className="flex flex-col gap-32 my-16">
            <div className="flex gap-4 justify-center">
                <div className="flex gap-2">
                    <IoIosCheckmarkCircle className="text-primary w-6 h-6" />
                    <p>12,625 Leads in Database</p>
                </div>
                <div className="flex gap-2">
                    <IoIosCheckmarkCircle className="text-primary w-6 h-6" />
                    <p>More than 20+ Niches</p>
                </div>
                <div className="flex gap-2">
                    <IoIosCheckmarkCircle className="text-primary w-6 h-6" />
                    <p>Advances settings</p>
                </div>
            </div>
            <div className="mx-auto">
                <Image
                    src="/images/logotype.png"
                    width={559.25}
                    height={102.98}
                    alt="Logo"
                />
            </div>
            <div className="max-w-2xl mx-auto text-center">
                <h1 className="text-5xl font-bold">The <span className="text-white bg-primary">simplest</span> way to starts your warehouse complex</h1>
                <p className="undertitle">Let's discover how OutlineAI Industrial accelerates the design process, enabling precise solutions in just a few hours. Schedule a presentation to see how our technology can maximize the potential of your location.</p>
                <div>
                    <input type="text" id="userInput" placeholder="sam@gmail.com" className="primary-input mr-4"/>
                    <button className="primary-button">Get Sample</button>
                </div>
                <p>Get sample right in your inbox, no need to Login</p>
            </div>
            <div>
                <Image
                    src="https://www.outlineai.com/img/products-logistics/image49_mn.gif"
                    width={1410}
                    height={775.02}
                    alt="gif"
                />
            </div>
        </div>
        

    );
}