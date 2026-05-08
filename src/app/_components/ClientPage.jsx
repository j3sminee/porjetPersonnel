import Link from "next/link";
import "./ClientPage.css";

export default function Home() {
  return (
    //page intro du site
    <div className="pageIntro">
    <div className="start">
        <h1>Entre deux regards</h1>
        <h3>Un monde sans mots, seulement des sons, des odeurs et des instincts. Témoin d’un drame, chaque décision a des conséquences.</h3>
        <Link className="begin" href="./start"><span>Commencer</span></Link> 
    </div>
    </div>
  );
}