"use client";
import Link from "next/link";
import "./videoPage.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [showChoices, setShowChoices] = useState(false);

  //ajoute les choix juste à la fin de la vidéo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChoices(true);
    }, 53000);

    return () => clearTimeout(timer);
  }, []);

  //ajoute une classe "visible" quand les choix apparaîssent (pour ensuite pouvoir ajouter une transition plus smooth)
  return (
    <div className="page">
      <video src="../../../videos/morningwhines.webm" type="video/webm" autoPlay />
      <div className={`choixUsager ${showChoices ? "visible" : ""}`}> 
        <Link className="choix" href="../../../reveil/ignore">
          <span>ignorer Darling</span>
        </Link>

        <Link className="choix" href="../../../reveil/closed">
          <span>fermer la porte</span>
        </Link>
      </div>
    </div>
  );
}
