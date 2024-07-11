import { createContext, PropsWithChildren, useContext, useState } from "react";
import { signUpSchema } from "../schema";
import { z } from "zod";

type User = z.infer<typeof signUpSchema>;

type AuthContextType = {
  user: User | null;
  signIn: (user: User) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const storedUser = localStorage.getItem("user");

  const [user, setUser] = useState<User | null>(
    storedUser ? JSON.parse(storedUser) : null
  );

  const signIn = (newUser: User) => {
    setUser(newUser);
  };
  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    console.log("hisadsadsa");
  };
  console.log(user);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within authProvider");
  }

  return context;
};
