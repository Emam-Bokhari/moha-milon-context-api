import { useContext } from "react";
import { AuthContext } from './../../AuthProvider/AuthProvider';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const {signinUser,googleSignin}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signinUser(email,password)
        .then((result)=>{
            console.log(result.user);
            event.target.reset()
            navigate("/")
        })
        .catch((error)=>{
            console.log(error);
        })
    }

  const  handleGoogleSignin=()=>{
    googleSignin()
    .then((result)=>{
        console.log(result.user);
        navigate("/")
        
    })
    .catch((error)=>{
        console.log(error);
    })
    }

        
    return (
        <div>

            <div className="w-[300px] h-[400px] border-2 border-blue-300 mx-auto px-4" >
                <h2 className="text-center text-indigo-500 font-medium text-2xl mt-5 " >Login</h2>
                <form onSubmit={handleLogin} className="text-center space-y-5 mt-5" >

                    <input type="email" name="email" placeholder="Email Address" className="text-lg border-2 border-black rounded-md outline-none w-full px-2  " required />

                    <div className="flex justify-end  items-center" >
                        <input type="password" name="password" placeholder="Password" className="text-lg border-2 border-black rounded-md outline-none w-full px-2 relative " />
                    </div>

                    <p className="text-left underline" ><a href="#">Forget Password?</a></p>



                    <div>
                        <input type="submit" value="Signin" className="w-full bg-indigo-400 rounded-md py-1 text-white font-medium text-xl" required />
                    </div>

                    <button onClick={handleGoogleSignin} className="underline" >Google</button>

                </form>
            </div>
        </div>
    );
};

export default Login;