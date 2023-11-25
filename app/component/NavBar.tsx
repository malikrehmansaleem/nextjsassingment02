
'use client'
import Link from "next/link";
import { manipulateElementById } from "../script";

export const NavBar = () => {
    const showMenu = () => {
        manipulateElementById('navLinks', 'show');
    };
    
    const hideMenu = () => {
        manipulateElementById('navLinks', 'hide');
    };
  return (
    <><nav>
    <a href="index.html" className="logo">Xplore
        <i className="fab fa-staylinked"></i>kill
    </a>
    <div className="nav-links" id="navLinks">

        <i className="fa fa-times" onClick={hideMenu} ></i>
        <ul>
            <li> <Link href="/home">Home</Link></li>
            <li> <Link href="/course">Course</Link></li>
            <li> <Link href="/blog">Blog</Link></li>
            <li> <Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </div>
    <i className="fa fa-bars" onClick={showMenu} ></i>

</nav>
    </>
  )
}
