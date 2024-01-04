import { createContext } from "react";
type ComplexObject = {
  incoming: string[];
  outgoing: string[];
};
export const FlowContext = createContext<ComplexObject>({
  incoming: [],
  outgoing: [],
});
