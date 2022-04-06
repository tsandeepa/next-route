import Link from "next/link";

const Header = () => {
    return ( 
        <div>
            <h3>Header Nav</h3>
            <div>
                <Link  href="/"><a>Home</a></Link>
                <Link  href="/services"><a>Services</a></Link>
            </div>
        </div>
     );
}
 
export default Header;