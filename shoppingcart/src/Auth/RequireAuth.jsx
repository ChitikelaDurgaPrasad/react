import { Navigate, useLocation } from "react-router-dom"
export const RequireAuth = ({children}) => {
  const user = localStorage.getItem("token");
  // const user = sessionStorage.getItem("token");
  const location = useLocation();
  if(!user){
    return <Navigate to="/login" state={{from: location}} replace />
  }
  return children;
};