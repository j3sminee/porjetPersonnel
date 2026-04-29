import Link from "next/link";
import "./ClientPage.css";

export default function Home() {
  return (
    <div className="start">
        <h1>Title</h1>
        <h3>Synopsis</h3>
        <Link className="begin" href="./actone"><span>Commencer</span></Link> 
    </div>
  );
}