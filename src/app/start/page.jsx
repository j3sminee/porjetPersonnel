"use client";
import Link from "next/link";
import "./videoPage.css";
import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [showChoices, setShowChoices] = useState(false);
  const videoRef = useRef(null);

  //ajoute les choix juste à la fin de la vidéo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChoices(true);
    }, 4500);

    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  const video = videoRef.current;
  if (!video) return;

  console.log("use effect");

  videoRef.current.load();

    videoRef.current.addEventListener("error", (event) => { console.log('video error', event, videoRef.current.error, videoRef.current.error?.message);})

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
      <video ref={videoRef} src="../vids/startall.mp4" type="video/mp4" preload="auto" autoPlay />
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
