import Link from "next/link";
import "./ClientPage.css";

export default function Home() {
  return (
    <div className="start">
        <h1>Entre deux regards</h1>
        <h3>Synopsis</h3>
        <Link className="begin" href="./start"><span>Commencer</span></Link> 
    </div>
  );
}