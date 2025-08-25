import { useState } from "react"
import Header from "./Header"

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const handleSignupForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }

    return <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/3e4bd046-85a3-40e1-842d-fa11cec84349/web/IN-en-20250818-TRIFECTA-perspective_4bd1b66d-bbb6-4bc6-ba8f-ecbba53a1278_large.jpg"
                alt="Background Image"
                className=""
            />
        </div>
        <form className="bg-black/85 p-12 text-white absolute w-3/12 my-32 mx-auto right-0 left-0">
            <h1 className="font-bold text-2xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-3 w-full border-1 border-white rounded-md" />}
            <input type="text" placeholder="Email Address" className="p-2 my-3 w-full border-1 border-white rounded-md" />
            <input type="password" placeholder="Password" className="p-2 my-3 w-full border-1 border-white rounded-md" />
            <button className="p-2 my-6  bg-red-600 w-full rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className="py-4 cursor-pointer hover:underline" onClick={handleSignupForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered ? Sign In Now"}</p>
        </form>
    </div>
}

export default Login