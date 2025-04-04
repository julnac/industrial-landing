import Image from "next/image";

export default function Hero() {

    return (
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 mt-16">
            <div className="flex flex-col gap-16 self-center">
                <h1 className="hero-header">Use your land <span className="text-gradient">better</span> with AI power</h1>
                <div className="flex gap-5">
                    <button className="button-full">
                        Get free demo
                    </button>
                    <button className="button-linear">
                        Learn more
                        <Image 
                            src="/icons/green_arrow_button.svg" 
                            alt="My Icon" 
                            width={16} 
                            height={16} 
                        />
                    </button>
                </div>
            </div>
            <Image
                src="/images/hero-image.png" 
                alt="Hero image" 
                width={961} 
                height={668} 
                className="h-[668px] w-auto object-cover rounded-3xl shadow-[var(--surface-l6)]"
            />
        </div>
    );
}