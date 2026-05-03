import { createContext, useState, type ReactNode } from "react";
import type { UserContexType } from "../types/User";

export const UserContext = createContext<UserContexType>({
    user: null,
    setUser: () => {},
});

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
