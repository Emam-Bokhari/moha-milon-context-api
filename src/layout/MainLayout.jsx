import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MainLayout = () => {
    const { user, logout } = useContext(AuthContext)
    console.log(user);
    const handleLogout = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <section className="max-w-screen-xl mx-auto px-8 md:px-16 " >
                <div className="shadow-lg py-4 rounded-md my-10 flex justify-between px-4 "  >
                    <nav >
                        <ul className="flex justify-center gap-10 text-xl">
                            <Link to="/" >Home</Link>
                            <Link to="/login" >Login</Link>
                            <Link to="/signup" >SignUp</Link>
                            <Link to="/orders" >Orders</Link>

                            {user && <>
                                <Link to="/profile" >Profile</Link>
                                <Link to="/dashboard" >Dashboard</Link>
                            </>}

                        </ul>
                    </nav>

                    <div>
                        {user ?

                            <div>
                                <span>{user.email}</span>
                                <button onClick={handleLogout} className="font-medium text-xl bg-indigo-200 px-3 py-1 rounded-md" >Signout</button>
                            </div> :
                            <Link to="/login" >
                                Login
                            </Link>}



                    </div>
                </div>



                <div>
                    <Outlet />
                </div>
            </section>
        </div>
    );
};

export default MainLayout;