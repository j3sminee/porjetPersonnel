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
    }, 31000);

    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  const handleCanPlay = () => {
    console.log("Video is ready to play");
    video.play().catch((e) => console.log("Auto-play prevented:", e));
  };
  video.addEventListener("canplaythrough", handleCanPlay);
  return () => {
    video.removeEventListener("canplaythrough", handleCanPlay);
  };
}, []);
  //ajoute une classe "visible" quand les choix apparaîssent (pour ensuite pouvoir ajouter une transition plus smooth)
  return (
    <div className="page">
      <video ref={videoRef} src="../../vids/ignoring.mp4" type="video/mp4" autoPlay />
      <div className={`choixUsager ${showChoices ? "visible" : ""}`}> 
        <Link className="choix" href="../exterieur/harnaisRouge">
          <span>harnais rouge</span>
        </Link>

        <Link className="choix" href="../exterieur/harnaisBleu">
          <span>harnais bleu</span>
        </Link>
      </div>
    </div>
  );
}