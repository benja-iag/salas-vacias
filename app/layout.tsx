import { Inter } from "next/font/google";
import "./globals.css";
import Typography from "@mui/material/Typography";
import { getSalas } from "./axios/getSalas";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  getSalas();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Typography
          sx={{ m: 3, textAlign: "center", fontWeight: "medium", fontSize: 46 }}
          className="mt 3"
        >
          Salas Vacías FIC
        </Typography>
        {children}
      </body>
    </html>
  );
}
