import { useContext } from "react";
import { AuthContext } from "../counts/AuthProvider";

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;