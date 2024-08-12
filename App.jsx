import { useState } from "react";
import WelcomeBar from "./components/welcomeBar";
import WalletInfo from "./components/walletInfo";
import ServicesDisplay from "./components/servicesDisplay";
import ContactBar from "./components/contactBar";
import DropDown from "./components/dropDown";

function App() {
  const [dropDownVisible, setDropDownVisibility] = useState(false);
  // Service worker registration
  const registerServiceWorker = async () => {
    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("./sw.js", {
          scope: "/",
        });
        if (registration.installing) {
          console.log("Service worker installing");
        } else if (registration.waiting) {
          console.log("Service worker installed");
        } else if (registration.active) {
          console.log("Service worker active");
        }
      } catch (error) {
        console.log(`Oops...service worker registration failed with ${error}`);
      }
    }
  };

  registerServiceWorker();

  /*function handleClick () {
    return (
      <div>
        <p> We are working it out</p>
      </div>
         
    );
  };*/
  return (
    <div>
      <header>
        <WelcomeBar onClick={() => setDropDownVisibility(true)} />
      </header>
      <main>
        <WalletInfo />
        <ServicesDisplay />
      </main>
      <footer>
        <ContactBar />
      </footer>
    </div>
  );
}

export default App;
