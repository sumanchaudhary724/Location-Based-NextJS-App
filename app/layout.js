import "./globals.css";
import Provider from "./Provider";
import HeaderNavBar from "./components/HeaderNavBar";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurant Tracker",
  description:
    "Tracker to track the restaurants using map and also shows the menu of the restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Provider>
          <HeaderNavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
