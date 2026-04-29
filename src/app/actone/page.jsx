import Link from "next/link";
import "./pageone.css";

export default function Home() {
  return (
    <div className="page">
        <img src="./pictures/zaz3.jpg" alt="" />
        <div className="choixUsager">
        <Link className="choix" href="./actthree/roadA/inCar"><span>CHOIX A</span></Link> 
        <Link className="choix" href="./pageidk"><span>CHOIX B</span></Link> 
        </div>
    </div>
  );
}