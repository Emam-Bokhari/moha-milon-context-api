import { useContext } from "react";
import { AuthContext } from './../AuthProvider/AuthProvider';
import PropTypes from "prop-types"
import {  Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user , loading } = useContext(AuthContext)

    if(loading){
      return  <div className="flex justify-center"  ><span className="loading loading-spinner loading-lg"></span></div>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" >Login</Navigate>
};


 PrivateRoute.propTypes={
    children:PropTypes.node.isRequired
 }

export default PrivateRoute;