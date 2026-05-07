"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import "./harnaisRouge.css";

export default function Home() {
  const [showChoices, setShowChoices] = useState(false);
  const videoRef = useRef();

  //ajoute les choix juste à la fin de la vidéo
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChoices(true);
    }, 13000);

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
  return (
    <div className="page">
       <video ref={videoRef} src="../../../videos/onlyharnaisrouge.webm" type="video/webm" autoPlay></video>
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