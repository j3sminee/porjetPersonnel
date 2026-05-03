import Link from "next/link";
import "./actthree.css";

export default function Home() {
  return (
    <div className="page">
       <video src="../../videos/gettingReady.webm" type="video/mp4" autoPlay></video>
        <div className="choixUsager">
        <Link className="choix" href="exterieur/harnaisRouge"><span>Harnais rouge</span></Link> 
        <Link className="choix" href="exterieur/harnaisBleu"><span>Harnais Bleu</span></Link> 
        </div>
    </div>
  );
}