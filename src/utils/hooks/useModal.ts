import { useState } from "react";

export const useModal = () => {
  const [open, setOpen] = useState(false);

  const onClickOpen = () => {
    setOpen(!open);
  };

  return { open, setOpen, onClickOpen };
};
