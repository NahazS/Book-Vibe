import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Book_card_skeleton = () => {
    return (
        <div className="mx-auto h-full p-6 flex flex-col rounded-2xl border-[1px] border-[#131313] border-opacity-80 max-w-[374px] cursor-pointer shadow-md hover:shadow-xl active:shadow-inner ">
                <div className="h-[230px] mb-6 w-full rounded-2xl">
                    <Skeleton className="h-full"/>
                </div>
                <div className="text-[#23BE0A] font-medium flex flex-wrap gap-3 mb-4">
                    <p className="w-1/3 py-[6px] px-[16px] rounded-[30px] bg-[#f6fcf4]">
                        <Skeleton/>
                    </p>
                    <p className="w-1/3 py-[6px] px-[16px] rounded-[30px] bg-[#f6fcf4]">
                        <Skeleton/>
                    </p>
                    <p className="w-1/3 py-[6px] px-[16px] rounded-[30px] bg-[#f6fcf4]">
                        <Skeleton/>
                    </p>
                </div>
                <h4><Skeleton/></h4>
                <h4 className="w-2/3"><Skeleton/></h4>
                <p className="w-1/2 mb-5"><Skeleton/></p>
                <hr className="border-dashed mb-5" />
                <div className="font-medium text-[#131313] text-opacity-80 flex justify-between">
                    <p className="w-1/3"><Skeleton/></p>
                    <p className="w-1/3"><Skeleton/></p>
                </div>
        </div>
    );
};

export default Book_card_skeleton;