import miImagenConTransparencia from "../public/FondoLayout.jpg";
import "@rainbow-me/rainbowkit/styles.css";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Scaffold-ETH 2 App",
  description: "Built with 🏗 Scaffold-ETH 2",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body
        style={{
          background: `url(${miImagenConTransparencia}) no-repeat center center fixed`,
          backgroundColor: "black",
          backgroundSize: "cover",
          minHeight: "100vh",
          margin: 0,
        }}
      >
        <ThemeProvider enableSystem>
          <ScaffoldEthAppWithProviders>
            {/* <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(1ajust.png)",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(2ajust.png)",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(3ajust.png)",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: "url(4ajust.png)",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
              }}
            ></div> */}
            {children}
          </ScaffoldEthAppWithProviders>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
