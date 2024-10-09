/*
Este style viene de acá:
https://stackoverflow.com/questions/71992235/what-is-the-best-way-to-use-sx-prop-in-mui-v5
*/

import { SxProps, Theme } from "@mui/material";

export const modalStyle: Record<string, SxProps<Theme> | undefined> = {
  boxModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: 2,
    maxHeight: "90%",
    overflowY: "auto",
    minWidth: { md: "60%", sm: "90%", xs: "90%" },
  },
  gridHeader: { display: "flex", justifyContent: "space-between" },
  cardFloor: { height: "100%", bgcolor: "#f5f5f5" },
};
