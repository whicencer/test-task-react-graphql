import { ConfigProvider, Layout } from "antd";
import { themeConfig } from "./config/theme/theme";
import { SearchForm } from "@/features/SearchRepository";
import { SearchResults } from "@/features/SearchRepository/ui/SearchResults/SearchResults";
import { ChangeToken } from "@/features/ChangeToken";

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <Layout style={{ maxWidth: 1200, margin: "25px auto", background: "none" }}>
        <SearchForm />
        <SearchResults />

        <ChangeToken />
      </Layout>
    </ConfigProvider>
  );
}

export default App;