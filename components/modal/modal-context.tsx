import {
  use,
  Dispatch,
  createContext,
  SetStateAction,
  PropsWithChildren,
} from "react";

type Value = {
  open: boolean;
  exited: boolean;
  setExited: Dispatch<SetStateAction<boolean>>;
};

const ModalContext = createContext<null | Value>(null);

export const useModal = () => {
  const ctx = use(ModalContext);
  if (!ctx) {
    throw new Error("Please wrap the children in ModalContext provider!");
  }
  return ctx;
};

interface ModalProviderProps extends PropsWithChildren {
  value: Value;
}

export default function ModalProvider(props: ModalProviderProps) {
  return <ModalContext.Provider {...props} />;
}
