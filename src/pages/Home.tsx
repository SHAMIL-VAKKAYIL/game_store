import Searchbar from "../components/reusable/Searchbar";
import whislist from "../assets/icon/wishlist.png";
import GenreComp from "../components/GenreComp";
import GamecardComp from "../components/GamecardComp";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



function Home() {
    const [searchTerm, setsearchTerm] = useState<string>("");
    const [pagination, setPagination] = useState<number>(1);

    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slides = ['https://drop-assets.ea.com/images/6KK77Eipo5KeXiaZh8SDwo/76c28d2bea477e5de43734956a216fac/palmer.png?im=AspectCrop=(16,9),xPosition=0.5,yPosition=0.5&q=85&w=1280', 'https://www.quanticdream.com/img/uploads/game/page_19/80a6da5f447bae655d36e4f344aac860.jpeg', 'https://gmedia.playstation.com/is/image/SIEPDC/black-myth-wukong-screenshot-01-en-24jan24?$2400px$']; // Array of game image paths

    const handelSearch = (term: string) => {
        setsearchTerm(term);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3500);

        return () => clearInterval(interval)
    }, [slides.length]);

    return (
        <div className="overflow-hidden">
            {/* Navbar */}
            <div className="flex justify-between items-center">
                <div className="flex justify-center">
                    <h3 className="font-bld text-btn text-lg md:text-2xl flex w-full">G-</h3>
                    <h3 className="font-bld text-btn text-lg md:text-2xl flex w-full">store</h3>
                </div>
                <div className="md:w-[65%]">
                    <Searchbar onSearch={handelSearch} />
                </div>
                <div>
                    <Link to="/whishlist">
                        <img src={whislist} alt="wishList" className="md:w-10 w-8" />
                    </Link>
                </div>
            </div>

            {/* Hero Section with Slideshow */}
            <div className="relative w-full h-[40vh] md:h-[80vh] overflow-hidden">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000  rounded-md ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
            </div>

            {/* Game Content */}
            <div className="flex flex-col justify-center items-center gap-y-16 text-white">
                <GamecardComp searchItem={searchTerm} page={pagination} />
                <div className="flex gap-3">
                    {[1, 2, 3, 4, 5].map((paginationNum) => (
                        <p
                            key={paginationNum}
                            className={`bg-secondry py-2 px-3 rounded-md hover:cursor-pointer ${
                                pagination === paginationNum ? "border-2 border-btn" : ""
                            }`}
                            onClick={() => setPagination(paginationNum)}
                        >
                            {paginationNum}
                        </p>
                    ))}
                </div>
                <GenreComp />
            </div>

            {/* Footer */}
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Home;
