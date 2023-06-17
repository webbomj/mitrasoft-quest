import { FC } from "react";
import Header from "../Components/Header/Header";
import { ILayoutProps } from "./Layout.interface";
import "./Layout.scss";

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <main className="layout__main">{children}</main>
    </>
  );
};

export default Layout;
