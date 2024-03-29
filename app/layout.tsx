import "./globals.css";
import StyledComponentsRegistry from "../lib/registry";
import GlobalStyles from "./styles/GlobalStyles";


export const metadata = {
  title: "Listing Ad Card",
  description: "Listing Ad Card",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.cdnfonts.com/css/avenir-next-lt-pro" rel="stylesheet" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
