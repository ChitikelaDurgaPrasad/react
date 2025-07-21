import { Outlet } from "react-router-dom"
import { Header, Footer } from "../../index"

export const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100 p-2">
        <Header/>
        <main className="flex-grow-1">
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}