import { AuthContext } from "@/contexts/AllContexts";
import { useContext } from "react";

export function useAuth() {
  const data = useContext(AuthContext);
  if (data === null) {
    throw new Error("AuthContext was used outside of AuthPRovider");
  }

  return data;
}