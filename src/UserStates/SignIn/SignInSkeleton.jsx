import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink } from 'react-router-dom';

const SignInSkeleton = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
    <div className="w-full max-w-md p-8 bg-[#f3f3f3] rounded-lg shadow-lg">
        <div className="w-1/2 mx-auto mb-6">
            <Skeleton className="h-full w-full text-2xl" /> {/* Sign In title */}
        </div>
        <form className="space-y-4">
            <div>
                <div className="h-5 w-1/3 mb-1">
                    <Skeleton className=" w-full text-sm" /> {/* Email label */}
                </div>
                <div className="h-10 w-full rounded-md">
                    <Skeleton className="h-full w-full" /> {/* Email input */}
                </div>
            </div>
            <div>
                <div className="h-5 w-1/3 mb-1">
                    <Skeleton className="h-full w-full text-sm" /> {/* Password label */}
                </div>
                <div className="h-10 w-full rounded-md">
                    <Skeleton className="h-full w-full" /> {/* Password input */}
                </div>
            </div>
            <div className="flex justify-end">
                <div className="h-5 w-1/3">
                    <Skeleton className="h-full w-full text-sm" /> {/* Forgot password link */}
                </div>
            </div>
            <div className="h-10 w-full rounded-md">
                <Skeleton className="h-full w-full" /> {/* Sign In button */}
            </div>
            <div className="text-center mt-4 space-y-1">
                <div className="h-5 w-2/3 mx-auto">
                    <Skeleton className="h-full w-full" /> {/* Sign up text */}
                </div>
            </div>
        </form>
    </div>
</div>
    );
};

export default SignInSkeleton;