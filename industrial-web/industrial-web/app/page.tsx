import Hero from "./components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="mx-auto">
          <Hero/>
          <section className="my-28 mx-40">
            <h1>Design Your land with <span className="text-gradient">OutlineAI Industrial</span></h1>
            <p>Generate solutions for your land and compare them effortlessly. OutlineAI Industrial allows you to visualize different layouts, explore various design options, and make informed decisions that best suit your needs. 
            Create, modify, and refine your ideas with ease - turn your vision into reality.</p>
            <Link href="/products">
              <button className="button-linear mt-8">
                See all features
                <Image 
                    src="/icons/green_arrow_button.svg" 
                    alt="My Icon" 
                    width={16} 
                    height={16} 
                />
              </button>
            </Link>
          </section>
          <section>
            <video className="w-full h-auto" autoPlay loop muted playsInline>
              <source src="/videos/Product_filmik2_statystyki.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          <section>
            <h1>Easy steps to get started</h1>
            <h3>Let's get started in just 4 steps.</h3>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="content-container">
                  <h3>Select your site</h3>
                  <p>Experience easy selection on map and create your project right away.</p>
                  <Image
                    src="/images/content-1.png" 
                    alt="content-1" 
                    width={438} 
                    height={331}
                  />
                </div>
                <div className="content-container">
                  <h3>Customize your project or use presets</h3>
                  <p>You can easily adjust your data or use already prepared presets for faster generation</p>
                  <Image
                    src="/images/content-2.png" 
                    alt="content-2" 
                    width={438} 
                    height={331}
                  />
                </div>
              </div>
              <div>
                <div className="content-container">
                  <h3>Simple adjust data</h3>
                  <p>Guided by the system, step by step, to fill in the necessary data for generation.</p>
                  <Image
                    src="/images/content-3.png" 
                    alt="content-3" 
                    width={438} 
                    height={331}
                  />
                </div>
                <div className="content-container">
                  <h3>Save your favorite results and export</h3>
                  <p>Choose file type and save it.</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="gradient-container">
                ,,Choosing OutlineAI Industrial was a game-changer for us. It saved both time and money, allowing us to 
                quickly identify the best land for our logistics warehouse investment. The tool made it easy for our architects 
                to work with multiple solutions and manipulate data, streamlining the entire process. 
                Highly recommended for anyone looking to optimize land selection."
              <div className="flex justify-center gap-2 mt-6">
                <div className="rounded-full bg-white h-14 w-14"></div>
                <div>
                  Filip Kowalski<br/>
                  Land aquisition, 7R
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}