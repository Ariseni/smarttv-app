import { useEffect, useState } from "react";
import { getChromeVersion } from "./utils/browserVersion";
import { FallbackPage } from "./pages/FallbackPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Layout } from "./components/Layout";

function App() {
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    const chromeVersion = getChromeVersion();
    if (chromeVersion && chromeVersion < 66) {
      setIsSupported(false); // Chrome version is less than 66
    }
  }, []);

  if (!isSupported) {
    return <FallbackPage />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
