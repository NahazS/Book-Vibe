const Banner = () => {
    return (
        <div className="mt-[52px] w-full xl:max-w-[1170px] mx-auto flex flex-col sm:flex-row text-center sm:text-left items-center justify-center py-[80px] bg-[#f3f3f3] rounded-3xl">
            <div className="max-w-[526px] content-center mb-[24px] sm:mb-0">
                <h1 className="font-Playfair mb-12">Books to freshen up your bookshelf</h1>
                <button className="btn-primary bg-[#23BE0A]">View The List</button>
            </div>
            <div>
                <img className="w-[318px]" src="/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;