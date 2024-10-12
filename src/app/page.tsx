"use client";
import AOS from  'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';
import Image from "next/image";
import Header from "./Components/header";
import Footer from "./Components/footer";
import about from "./about/page";
import contact from "./contact/page";
import Amazon from "./amazonForest/page";
import Link from "next/link";
import Cloud from "./monteverdeCloud/page";
import Dancing from "@/app/dancingForest/page";


export default function Home() {
  useEffect(()=>{
      AOS.init({})
  },[])
  return (
    <div className="box">
    <div className="container">
      <Header />
      <div className="main">
        <h1 className="head-main" >NATURE BLOG</h1>
        <p className="para-main ">Your next journey awaits—explore breathtaking destinations,<br /> insider travel hacks, and inspiration for your wanderlust."</p>
        <button className="btn">Read Our Blogs</button>
      </div>
    </div>
    <div className="second-container">
      <h1 className="second-para">OUR BLOGS</h1>
    <div className="blog-cards">
      <div className="card-1"  >
        <div className="card1"></div>
        <p className="card-para">AMAZON RAIN FOREST</p>
        <p className="card-para2">The Amazon Rainforest is the largest tropical rainforest, vital for biodiversity and climate regulation. It faces threats from deforestation, making its protection crucial for the planet's future.</p>
        <button className="card-btn">
        <Link href="/amazonForest">Read More</Link></button>
      </div>
      <div className="card-2">
        <div className="card2"></div>
        <p className="card-para">Monteverde Cloud Forest</p>
        <p className="card-para2">The Monteverde Cloud Forest in Costa Rica is a misty rainforest known for its diverse wildlife and rare species. Its unique ecosystem attracts nature lovers and scientists alike.</p>
        <button className="card-btn"><Link href="/monteverdeCloud">Read More</Link></button>

      </div>
      <div className="card">
        <div className="card3"></div>
        <p className="card-para">Black Forest</p>
        <p className="card-para2">The Black Forest in Germany is a vast, dense woodland known for its folklore and scenic beauty. Its rich ecosystem draws hikers, nature enthusiasts, and tourists from around the world.</p>
        <button className="card-btn"><Link href="/blackForest">Read More</Link></button>
      </div>
      <div className="card">
        <div className="card4"></div>
        <p className="card-para">Tree Waipoua Forest</p>
        <p className="card-para2">The Waipoua Forest in New Zealand is home to the ancient Kauri trees, including the towering Tane Mahuta. It is a sacred, breathtaking site, rich in cultural and ecological significance.  </p>
        <button className="card-btn"><Link href="/treeWaipoua">Read More</Link></button>
      </div>
      <div className="card">
        <div className="card5"></div>
        <p className="card-para">Wistman's Wood Forest</p>
        <p className="card-para2">Wistman's Wood in England is ancient oak forest with twisted trees and moss-covered rocks, creating a mystical atmosphere. Its eerie beauty attracts hikers and nature enthusiasts alike. </p>
        <button className="card-btn"><Link href="/wistmanWood">Read More</Link></button>
      </div>
      <div className="card">
        <div className="card6"></div>
        <p className="card-para">Dancing Forest</p>
        <p className="card-para2">The Dancing Forest in Russia is known for its uniquely twisted, spiral-shaped trees. The forest's strange natural formations have inspired both curiosity and local legends. </p>
        <button className="card-btn"><Link href="/dancingForest">Read More</Link></button>
      </div>
      </div>
      </div>
        <div className="third-container">
          <div className="text">
          <p className="remender">Remender</p>
          <h1 className="third-para">"Forests are the lifeblood of our planet, providing clean air, fresh water, and shelter to countless species, including us. Every tree stands as a guardian against climate change, a source of biodiversity, and a reminder of nature’s resilience. By preserving forests today, we ensure a sustainable future tomorrow. Let’s unite in protecting these precious ecosystems before it's too late."</h1>
          </div>
        </div>
      </div>
      )};
