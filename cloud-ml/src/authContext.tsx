import { createContext } from "react";

const authContext = createContext({
  authenticated: false,
  setAuthenticated: (auth: any) => {}
});

export default authContext;