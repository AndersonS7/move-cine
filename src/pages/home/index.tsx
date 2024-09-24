import Header from "@/components/header";
import Image from 'next/image';
import bg from "@/public/Poster.png";
import ContentTxt from "@/components/content";

const Home = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">

            <div className="absolute inset-0 -z-10">
                <Image
                    src={bg}
                    className="object-cover w-full"
                    alt="Background"
                />
            </div>
            <div className="relative z-10">
                <div >
                    <Header />
                    <section>
                        <ContentTxt />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;
