import Link from "next/link";
import "./inCar.css";

export default function Home() {
  return (
    <div className="page">
       <video src="../../../videos/darlingCar.mp4" type="video/mp4" autoPlay></video>
        <div className="choixUsager">
        <Link className="choix" href="./inField"><span>CHOIX A</span></Link> 
        <Link className="choix" href="./pageidk"><span>CHOIX B</span></Link> 
        </div>
    </div>
  );
}