"use client";
import Link from "next/link";
import "./pageone.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [showChoices, setShowChoices] = useState(false);

  //ajoute les choix juste à la fin de la vidéo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChoices(true);
    }, 72000);

    return () => clearTimeout(timer);
  }, []);

  //ajoute une classe "visible" quand les choix apparaîssent (pour ensuite pouvoir ajouter une transition plus smooth)
  return (
    <div className="page">
      <video src="../../../videos/morningnightmare.webm" type="video/mp4" autoPlay />
      <div className={`choixUsager ${showChoices ? "visible" : ""}`}> 
        <Link className="choix" href="./actthree/roadA/inCar">
          <span>ignorer Darling</span>
        </Link>

        <Link className="choix" href="./actone/looksaround">
          <span>fermer la porte</span>
        </Link>
      </div>
    </div>
  );
}