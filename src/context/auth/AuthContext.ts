import { createContext, Dispatch, SetStateAction } from "react";

interface AuthContextType {
	authStatus: boolean;
	setAuthStatus: Dispatch<SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextType>({
	authStatus: false,
	setAuthStatus: () => {},
});

export const AuthProvider = AuthContext.Provider;

export default AuthContext;
