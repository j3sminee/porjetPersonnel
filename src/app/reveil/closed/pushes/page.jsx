"use client";
import Link from "next/link";
import "./actthree.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [showChoices, setShowChoices] = useState(false);

  //ajoute les choix juste à la fin de la vidéo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChoices(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  //ajoute une classe "visible" quand les choix apparaîssent (pour ensuite pouvoir ajouter une transition plus smooth)
  return (
    <div className="page">
      <video src="../../videos/doorclosed.webm" type="video/webm" autoPlay />
      <div className={`choixUsager ${showChoices ? "visible" : ""}`}> 
        <Link className="choix" href="./exterieur/harnaisBleu">
          <span>harnais bleu</span>
        </Link>

        <Link className="choix" href="./exterieur/harnaisRouge">
          <span>harnais rouge</span>
        </Link>
      </div>
    </div>
  );
}
