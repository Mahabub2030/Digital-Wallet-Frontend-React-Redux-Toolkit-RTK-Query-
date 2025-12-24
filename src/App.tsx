import { Outlet } from "react-router";
import CommonLayout from "./components/layout/CommonLayout";

function App() {
  return (
    <>
      <CommonLayout>
        {/* <ScrollToTop /> */}
        <Outlet />
      </CommonLayout>
    </>
  );
}

export default App;
