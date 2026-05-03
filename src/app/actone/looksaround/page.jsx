"use client";
import Link from "next/link";
import "./looksaround.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [showChoices, setShowChoices] = useState(false);

  //ajoute les choix juste à la fin de la vidéo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChoices(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  //ajoute une classe "visible" quand les choix apparaîssent (pour ensuite pouvoir ajouter une transition plus smooth)
  return (
    <div className="page">
      <video src="../../videos/looksaround.webm" type="video/mp4" autoPlay />
      <div className={`choixUsager ${showChoices ? "visible" : ""}`}> 
        <Link className="choix" href="./looksaround/gemir">
          <span>gémir doucement</span>
        </Link>

        <Link className="choix" href="./looksaround/nepasbouger">
          <span>ne pas bouger</span>
        </Link>
      </div>
    </div>
  );
}