import { Navigate, useLocation } from "react-router-dom";

export const AuthGuard = ({children, allowedRoles}) => {
  const user = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  // const role = "admin";
  const location = useLocation();
  if(!user){
    return <Navigate to="/login" state={{from: location}} replace />
  }
  if(allowedRoles && !allowedRoles.includes(role)){
    return <Navigate to="/unauth" replace/>
  }
  return children;
};