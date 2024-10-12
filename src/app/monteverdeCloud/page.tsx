import Link from "next/link"
import Header2 from "../Components/header2"

export default function Cloud(){
    return(
        <div className="cloud-container">
            <Header2/> 
             <div className="flex-container">
                <div className="left-section">
                    <h1 className="about-head">Monteverde Cloud Forest</h1>
                    <div className="left-section-img2"></div>
                </div>
                <div className="right-section">
                    <p className="right-section-para">The Monteverde Cloud Forest is one of the most famous cloud forests in the world, located in the mountains of Costa Rica. Covering over 10,500 hectares (about 26,000 acres), it is renowned for its lush vegetation, constant mist, and incredibly diverse ecosystem. The cloud forest is home to thousands of plant and animal species, including many endemic species found nowhere else on Earth. Due to its high altitude and unique climate, the forest experiences a near-constant cloud cover, which helps nourish the rich variety of flora and fauna. Monteverde plays a critical role in preserving biodiversity and is a popular destination for ecotourism, attracting scientists and nature enthusiasts from around the globe. Despite its importance, the cloud forest faces threats from climate change and deforestation, which could disrupt the delicate balance of its ecosystems. Conservation efforts are ongoing, but they face challenges from economic development and changing environmental conditions.
</p>
            <button className="btn-amazon"><Link href="/">Back to main page</Link></button>

                </div>
            </div>
            
        </div>
    )
}