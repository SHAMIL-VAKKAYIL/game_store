
function Footer() {
    return (
        <div className=" border-t-2 w-full">
            <div className="mx-auto">
                <h3 className="text-btn text-xl font-med w-full  flex justify-center md:justify-start">Game-Store</h3>
            </div>
            <div className=" flex flex-col justify-center items-center md:mt-8">
                <p className="font-normal text-white">Game data provided by <a href="https://rawg.io" target="_blank" rel="noopener noreferrer" className="text-btn hover:underline">RAWG API</a>.</p>
                <p className="font-normal text-white">© 2024 Game Store. All rights reserved.</p>
            </div>
        </div >

    )
}

export default Footer
