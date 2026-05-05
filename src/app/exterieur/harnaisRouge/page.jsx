"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "./harnaisRouge.css";

export default function Home() {
  const [showChoices, setShowChoices] = useState(false);

  //ajoute les choix juste à la fin de la vidéo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChoices(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="page">
       <video src="../../../videos/onlyharnaisrouge.webm" type="video/webm" autoPlay></video>
       <div className={`choixUsager ${showChoices ? "visible" : ""}`}> 
        <Link className="choix" href="./start/bark">
          <span>aboyer pour l’alerter</span>
        </Link>

        <Link className="choix" href="./start/looksaround">
          <span>chercher de l’aide autour de soi</span>
        </Link>
      </div>
    </div>
  );
}