import { Outlet } from "react-router-dom"
import { Header, Footer } from "../../index"

export const Layout = () => {
  return (
    <div>
        <Header/>
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}