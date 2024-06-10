import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./styles/variables.css";
import "./styles/button.css";
import Home from "./pages/Home/Home";

import Upload from "./pages/Upload/Upload";
import Layout from "./components/Layout/Layout";
import WidgetConfigurations from "./pages/WidgetConfigurations/WidgetConfigurations";
import AccountSettings from "./pages/AccountSettings/AccountSettings";
import ProjectProvider from "./components/Contexts/ProjectContext";
import Transcript from "./pages/Transcript/Transcript";

function App() {
  return (
    <BrowserRouter>
      <ProjectProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<Layout />}>
            <Route path="upload" element={<Upload />} />
            <Route
              path="widget-configurations"
              element={<WidgetConfigurations />}
            />
            <Route path="transcript" element={<Transcript />} />
          </Route>
          <Route path="/account-settings" element={<Layout />}>
            <Route index element={<AccountSettings />} />
          </Route>
        </Routes>
      </ProjectProvider>
    </BrowserRouter>
  );
}

export default App;
