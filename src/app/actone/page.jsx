"use client";
import Link from "next/link";
import "./pageone.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [showChoices, setShowChoices] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowChoices(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="page">
      <video src="../videos/startall.webm" type="video/mp4" autoPlay />
      <div className={`choixUsager ${showChoices ? "visible" : ""}`}>
        <Link className="choix" href="./actthree/roadA/inCar">
          <span>aboyer pour l’alerter</span>
        </Link>

        <Link className="choix" href="./pageidk">
          <span>chercher de l’aide autour de soi</span>
        </Link>
      </div>
    </div>
  );
}
