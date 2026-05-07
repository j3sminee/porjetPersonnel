"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "./harnaisBleu.css";

export default function Home() {
  const [showChoices, setShowChoices] = useState(false);
  const videoRef = useRef()

  //ajoute les choix juste à la fin de la vidéo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChoices(true);
    }, 12000);

    
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
  return (
    <div className="page">
       <video ref={videoRef} src="../../vids/onlyharnaisbleu.mp4" type="video/mp4" autoPlay></video>
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