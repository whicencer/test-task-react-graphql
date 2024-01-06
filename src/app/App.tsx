import { ConfigProvider, Flex, Layout } from "antd";
import { themeConfig } from "./config/theme/theme";
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";

function App() {
  return (
    <ConfigProvider theme={themeConfig}>
      <Layout style={{ maxWidth: 1200, margin: "30px auto", background: "none" }}>
        <Flex align="center">
          <Input
            placeholder="Enter a Github repository name or link"
          />
          <Button style={{ borderRadius: 100, minHeight: 70, minWidth: 70 }} type="primary">🔍</Button>
        </Flex>
      </Layout>
    </ConfigProvider>
  );
}

export default App;