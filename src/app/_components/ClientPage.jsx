import Link from "next/link";
import "./ClientPage.css";

export default function Home() {
  return (
    <div>
        <h1>hello</h1>
        <div className="choixUsager">
        <Link className="choixA" href="./pageidk"><span>CHOIX A</span></Link> 
        <Link className="choixA" href="./pageidk"><span>CHOIX B</span></Link> 
        </div>
    </div>
  );
}