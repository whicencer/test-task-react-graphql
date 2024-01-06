import { ConfigProvider, Layout } from "antd";
import { themeConfig } from "./config/theme/theme";
import { SearchForm } from "@/features/SearchRepository";

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <Layout style={{ maxWidth: 1200, margin: "25px auto", background: "none" }}>
        <SearchForm />
      </Layout>
    </ConfigProvider>
  );
}

export default App;