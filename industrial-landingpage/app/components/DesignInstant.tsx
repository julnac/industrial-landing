import Image from "next/image";

export default function DesignInstant() {

    return (
        <div className="grid grid-cols-2 gap-16 my-16">
            <div>
                <h1>Design in instant</h1>
            </div>
            <div>
                <Image
                    src="https://www.outlineai.com/img/products-logistics/img4.webp"
                    width={595.7}
                    height={384}
                    alt="workspace"
                />
            </div>
        </div>
        

    );
}