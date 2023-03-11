import Error404 from "./components/Error404";
import Seo from "./components/seo";
import CONFIG from "./config";
import HomeContainer from "./containers/HomeContainer";
import { CookieProvider } from "./utils/CookieContext";

function App() {
  const path = window.location.pathname;

  if (path !== "/") {
    if (path.startsWith("/b/")) {
      window.location.replace(`${CONFIG.alphadayApp}${path}`);

      return <></>;
    }

    if (path === "/blog") {
      window.location.replace(CONFIG.blog);
      return <></>;
    }

    return <Error404 />;
  }
  return (
    <CookieProvider>
      <Seo
        title="Alphaday"
        description={"Everything about the Crypto ecosystem in one app"}
      />
      <HomeContainer />
      <CookieDisclaimer />
    </CookieProvider>
  );
}

export default App;
