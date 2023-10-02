
import { useContext, useState } from "react";
import {BsEyeSlash,BsEye} from "react-icons/bs"
import { AuthContext } from './../../AuthProvider/AuthProvider';

const SignUp = () => {
    const [showPassword,setShowPassword]=useState(false)
    const {createUser}=useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        createUser(email,password)
        .then((result)=>{
            console.log(result.user);
            event.target.reset()
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div >
            <div className="w-[300px] h-[400px] border-2 border-blue-300 mx-auto px-4" >
                <h2 className="text-center text-indigo-500 font-medium text-2xl mt-5 " >SignUp</h2>
                <form onSubmit={handleSignUp} className="text-center space-y-5 mt-5" >
                    <input type="email" name="email" placeholder="Email Address" className="text-lg border-2 border-black rounded-md outline-none w-full px-2  " required />

                    <input type="text" name="text" placeholder="Enter Your Name" className="text-lg border-2 border-black rounded-md outline-none w-full px-2  " required />

                    <div className="flex justify-end  items-center" >
                    <input  type={showPassword?"text":"password"} name="password" placeholder="Password" className="text-lg border-2 border-black rounded-md outline-none w-full px-2 relative " />
                    <span className="absolute px-2" onClick={()=>setShowPassword(!showPassword)} >{showPassword?<BsEye/>:<BsEyeSlash/>}</span>
                    </div>

                    <div className="flex justify-start" >
                    <input type="checkbox" name="terms" id="terms" />
                    <label className="ml-2" htmlFor="terms">Aceapt <a className="underline decoration-color"  href="#">Terms and Condition</a></label>
                    </div>

                    <div>
                        <input type="submit" value="Register" className="w-full bg-indigo-400 rounded-md py-1 text-white font-medium text-xl" required/>
                    </div>



                </form>
            </div>
        </div>
    );
};

export default SignUp;