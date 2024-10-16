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
  boxInfo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  card: {
    position: "relative",
    backgroundColor: "#f5f5f5",
    cursor: "pointer",
    overflow: "hidden",
    height: "80vh",
    "&:hover img": {
      transform: "scale(1.1)",
      transition: "transform 0.3s ease-in-out",
    },
  },
  img: {
    aspectRatio: "5/4",
    height: "100%",
    transition: "transform 0.3s ease-in-out", // Transición suave del zoom
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
