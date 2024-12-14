import Image from "next/image";

function CardLayout() {
    return (
        <main className="relative mx-20 mt-10">
            {/* First Row: 2 Cards */}
            <div className="flex justify-between mt-11 h-[300px] space-x-5 absolute top-[600px]">
                {/* Card 1 */}
                <div className="w-4/12 border rounded-2xl overflow-hidden">
                    <Image
                        src="/c1.jpg"
                        alt="cardNumber1"
                        height={400}
                        width={600}
                    />
                </div>
                {/* Card 2 */}
                <div className="w-4/12 border rounded-3xl overflow-hidden">
                    <Image
                        src="/c2.jpg"
                        alt="cardNumber2"
                        height={400}
                        width={600}
                    />
                </div>
                {/* Card 3 */}
                <div className="w-4/12 border rounded-2xl overflow-hidden">
                    <Image
                        src="/c3.jpg"
                        alt="cardNumber3"
                        height={400}
                        width={600}
                    />
                </div>
            </div>

            {/* Second Row: 3 Cards */}
            <div className="flex justify-center space-x-5 absolute top-[1000px] w-full">
                {/* Card 4 */}
                <div className="w-6/12 border rounded-lg overflow-hidden">
                    <img
                        src="/s.jpg"
                        alt="Slidecard1"
                        className="h-[400px] w-full object-cover rounded-lg"
                    />
                </div>
                {/* Card 5 */}
                <div className="w-6/12 border rounded-lg overflow-hidden">
                    <img
                        src="/s1.jpg"
                        alt="Slidecard2"
                        className="h-[400px] w-full object-cover rounded-lg"
                    />
                </div>
            </div>
        </main>
    );
}

export default CardLayout;
