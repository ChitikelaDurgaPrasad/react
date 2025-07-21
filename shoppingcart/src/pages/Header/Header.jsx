import { useNavigate, NavLink } from "react-router-dom";
import styles from './Header.module.css'
export const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login"); 
  }
  return (
    <div className="d-flex justify-content-between py-2">
      <div>
        <NavLink
          to="/home"
          className={({ isActive, isPending }) =>
            `${styles.navLink} ${isPending ? styles.pending : isActive ? styles.active : ""}`
          }
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            `${styles.navLink} ${isPending ? styles.pending : isActive ? styles.active : ""}`
          }
        >
          Cart
        </NavLink>
      </div>
      <div>
        <NavLink
          to = "/contactUs"
          className={({ isActive, isPending }) =>
          `${styles.navLink} ${isPending ? styles.pending : isActive ? styles.active : ""}`
        }
          >
          Contact Us
        </NavLink>
      </div>
      <div>
        <NavLink
          to = "/aboutUs"
          className={({ isActive, isPending }) =>
          `${styles.navLink} ${isPending ? styles.pending : isActive ? styles.active : ""}`
        }
          >
          About Us
        </NavLink>
        </div>
      <div>
        <button type="button"
          className={`border rounded-2 ${styles.testing}`}
          onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  )
}