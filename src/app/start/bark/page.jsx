"use client";
import Link from "next/link";
import "./videoPage.css";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [showChoices, setShowChoices] = useState(false);
  const videoRef = useRef();

  //ajoute les choix juste à la fin de la vidéo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChoices(true);
    }, 51000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() =>{
    videoRef.current.play()
  },[])

  //ajoute une classe "visible" quand les choix apparaîssent (pour ensuite pouvoir ajouter une transition plus smooth)
  return (
    <div className="page">
      <video ref={videoRef} src="../../videos/startallCopy.mp4" type="video/mp4" preload="auto" autoPlay />
      <div className={`choixUsager ${showChoices ? "visible" : ""}`}> 
        <Link className="choix" href="../../reveil/ignore">
          <span>ignorer Darling</span>
        </Link>

        <Link className="choix" href="../../reveil/closed">
          <span>fermer la porte</span>
        </Link>
      </div>
    </div>
  );
}
