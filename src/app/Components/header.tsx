import Link from "next/link"
export default function Header(){
    return(
        <div className="nav-container">
            <h1 className="logo" data-aos="fade-down" data-aos-duration="2000" data-aos-easing="linear" >Nature <span>Blog</span><span className="logo-2"> Blog Website</span></h1>
        <ul>
             <li><Link href="/" data-aos="fade-down" data-aos-duration="2500"
            data-aos-easing="linear">Home</Link></li>
             <li><Link href="/about" data-aos="fade-down" data-aos-duration="2500"
     data-aos-easing="linear">About</Link></li>
             <li><Link href="/contact" data-aos="fade-down" data-aos-duration="2500"
     data-aos-easing="linear">Contact</Link></li>
        </ul>
        <svg id="bars" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
        <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        </div>
    )
}