import { useContext } from "react";
import AuthContext from "./AuthContext";

const useAuth = (): typeof AuthContext extends React.Context<infer U> ? U : never => {
	const data = useContext(AuthContext);
	return data;
};

export default useAuth;
