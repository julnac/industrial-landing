import Image from "next/image";

export default function Content() {

    return (
        <div className="flex flex-col gap-16 my-16">
            <div className="dark-comp">
                <div>
                    <Image
                        src="/images/drawing.png"
                        width={653}
                        height={330}
                        alt="drawing"
                    />
                </div>
                <div className="mx-11">
                    <h3>Fast modelling</h3>
                    <h1>Insanely fast and flexible modelling</h1>
                    <p>Combine the ridiculous speed of <strong>generative AI</strong> with the 
                        flexibility of <strong>free-form editing</strong> to immediately model projects 
                        that match your vision and maximise the site potential.
                    </p>
                </div>
            </div>
            <div className="light-comp">
                <div className="mx-11">
                    <h3>Ability to create in different locations</h3>
                    <h1>Select any location around the world</h1>
                    <p>Create solutions on plots in <strong>multiple locations</strong> around the world.</p>
                </div>
                <div>
                    <Image
                        src="/images/Start_point_2mockup.png"
                        width={648}
                        height={402}
                        alt="drawing"
                        className="drop-shadow-lg"
                    />
                </div>
            </div>
            <div className="dark-comp">
                <div>
                    <Image
                        src="/images/opt_process.png"
                        width={648}
                        height={402}
                        alt="drawing"
                    />
                </div>
                <div className="mx-11">
                    <h3>Multi-variant solutions</h3>
                    <h1>Huge number of solutions generated</h1>
                    <p><strong>Many variants</strong> of solutions that we can apply in the area.</p>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <h2>Choose any location you want</h2>
                <div>
                    <Image
                        src="/images/Start_point_2mockup.png"
                        width={1300}
                        height={730}
                        alt="drawing"
                        className="drop-shadow-lg w-full"
                    />
                </div>
            </div>
        </div>
        

    );
}