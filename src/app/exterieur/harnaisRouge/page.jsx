import Link from "next/link";
import "./harnaisRouge.css";

export default function Home() {
  return (
    <div className="page">
       <video src="../../../videos/darlingCar.webm" type="video/mp4" autoPlay></video>
        <div className="choixUsager">
        <Link className="choix" href="./inField"><span>Suivant</span></Link> 
        </div>
    </div>
  );
}