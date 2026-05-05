"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "./harnaisBleu.css";

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
       <video src="../../videos/onlyharnaisbleu.webm" type="video/webm" autoPlay></video>
       <div className={`choixUsager ${showChoices ? "visible" : ""}`}> 
        <Link className="choix" href="./stairs">
          <span>prendre les marches</span>
        </Link>

        <Link className="choix" href="./elevator">
          <span>prendre l'ascenseur</span>
        </Link>
      </div>
    </div>
  );
}