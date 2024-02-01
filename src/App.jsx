import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import AuthPage from "./pages/authPage/AuthPage";
import PageLayout from "./layouts/pageLayout/PageLayout";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
