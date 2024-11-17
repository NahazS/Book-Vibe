import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SignInSkeleton from "./SignInSkeleton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = () => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
      if (location.state) {
          toast("Please sign in or sign up to add to your list!");
      }
    }, []);
    const [showPassword, setShowPassword] = useState(true)
    const handlePasswordToggle = e => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }


    const {signInUser, user, signOutUser, loading} = useContext(AuthContext)
    const [signInStates, setSignInStates] = useState(false)
    const handleSignIn = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        signInUser(email, password)
            .then(() => {
              console.log(location.state)
              const redirectTo = location.state?.from || '/';
              navigate(redirectTo);
            })
            .catch(error => {
                console.log(error.message)
                
            })
    }
    const handleSignOut = () => {
        signOutUser()
            .then(() => {

            })
            .catch(() => {
                
            })
    }
    
    return (
      loading ? <SignInSkeleton></SignInSkeleton>
      : <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-[#f3f3f3] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative flex">
              <input type={showPassword ? 'password' : 'text'} name="password" className=" mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" placeholder="Enter your password"
              />
              <button onClick={handlePasswordToggle} className="absolute right-2 top-1/2 translate-y-[-50%]">{showPassword ? <FiEyeOff /> : <FiEye />}</button>
            </div>
          </div>
          <div className="flex justify-end"> 
              <h1>{}</h1>
              <a href="#" className="text-sm text-gray-600 hover:text-gray-800">Forgot password?</a>
          </div>
          <button disabled={user} type="submit" className={`w-full py-2 px-4  ${user ? 'bg-green-300' : 'bg-green-500'} text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2`}>Sign In</button>
          <div className="text-center mt-4">
            <span className="text-gray-600">Don't have an account? </span>
            <NavLink to={'/sign_up'} className="text-blue-500 hover:underline">Sign Up</NavLink>
          </div>
        </form>
        
      </div>

      <button onClick={handleSignOut} className={`${user ? 'flex' : 'hidden'} text-red-600 text-xl mt-6`}>Sign Out ?</button>
      <ToastContainer />
    </div>
    
    );
};

export default SignIn;
