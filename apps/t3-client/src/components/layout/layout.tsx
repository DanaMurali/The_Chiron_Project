import { ReactNode } from "react"
import Footer from "../footer/footer";
import Header from "../header/header";

type LayoutProps = {
    children: ReactNode;
}

export const Layout = ({children}: LayoutProps) => {
    return (
        <div className="min-h-full">
        <Header />
        <main>{children}</main>
        <Footer />
        </div>
    )
}