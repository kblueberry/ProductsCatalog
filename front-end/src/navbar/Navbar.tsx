import { NavLink } from "react-router-dom";

const Routes = [
  {
    path: '/',
    pageName: 'Products'
  },
  {
    path: '/wishlist',
    pageName: 'Wish list'
  },
]

export default function Navbar() {
  return <ul className="nav fixed-top bg-secondary justify-content-center">
    {Routes.map((route, index) => (
        <li key={index} className="nav-item m-3">
          <NavLink className="navbar-brand" to={route.path}>{route.pageName}</NavLink>
        </li>
    ))}
  </ul>

}