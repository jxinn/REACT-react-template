import { Outlet, useLocation } from "react-router-dom";
import { Layout } from "@Components/Layout";
import { themeActions } from "@Services/theme/slice";
import { useAppDispatch } from "~/store";

function Root() {
  const { pathname } = useLocation();
  const appDispatch = useAppDispatch();
  if (pathname === "/") {
    appDispatch(themeActions.changeTheme("main"));
  } else {
    appDispatch(themeActions.changeTheme("default"));
  }

  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default Root;
