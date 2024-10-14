import "./globals.css";
import Typography from "@mui/material/Typography";
import { getSalas } from "./axios/getSalas";
import { Analytics } from "@vercel/analytics/react";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  getSalas();
  return (
    <html lang="en">
      <body>
        <Typography
          sx={{ fontWeight: "medium", fontSize: 46, textAlign: "center" }}
        >
          Salas Vacías FIC
        </Typography>
        {children}
        <Analytics />
        <footer>
          Proyecto de{" "}
          <a
            href="https://github.com/open-source-udp"
            style={{
              textDecoration: "underline",
            }}
          >
            Open source UDP
            <GitHubIcon
              sx={{
                verticalAlign: "middle",
                marginRight: "8px",
                marginLeft: "8px",
              }}
            />
          </a>
        </footer>
      </body>
    </html>
  );
}
