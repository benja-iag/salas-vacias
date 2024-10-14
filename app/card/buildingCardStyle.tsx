import { SxProps, Theme } from "@mui/material";

export const cardStyle: Record<string, SxProps<Theme> | undefined> = {
  boxCard: {
    width: { xs: "95%", sm: "80%", md: "60%" },
    maxWidth: "800px",
    padding: { xs: 1, sm: 2 },
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  cardActions: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  boxCardTitle: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row", md: "row" },
    justifyContent: { sm: "space-between" },
  },
};
