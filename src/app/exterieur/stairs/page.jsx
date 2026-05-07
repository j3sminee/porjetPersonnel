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
    }, 96000);

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

    return () => clearTimeout(timer);
  }, []);

  //ajoute une classe "visible" quand les choix apparaîssent (pour ensuite pouvoir ajouter une transition plus smooth)
  return (
    <div className="page">
      <video ref={videoRef} src="../../../videos/stairs.webm" type="video/webm" autoPlay />
      <div className={`choixUsager ${showChoices ? "visible" : ""}`}> 
        <Link className="choix" href="./parc">
          <span>aller au parc</span>
        </Link>

        <Link className="choix" href="./champ">
          <span>aller dans un champ</span>
        </Link>
      </div>
    </div>
  );
}
