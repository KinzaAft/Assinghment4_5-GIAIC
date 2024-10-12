import Header2 from "../Components/header2"
import Link from "next/link"

export default function Black(){
    return(
        <div className="black-container">
            <Header2/>
            <div className="flex-container">
                <div className="left-section">
                    <h1 className="about-head">Black Forest</h1>
                    <div className="left-section-img3"></div>
                </div>
                <div className="right-section">
                    <p className="right-section-para">The Black Forest, located in southwestern Germany, is a large, forested mountain range known for its dense woods, scenic beauty, and rich cultural history. Covering over 6,000 square kilometers, the Black Forest is famous for its dark, dense evergreen trees, which give the region its name. The forest is home to a wide range of plant and animal species, including several that are unique to the area. Its landscapes are a mix of deep valleys, rolling hills, and pristine lakes, making it a popular destination for hikers, nature lovers, and tourists. The Black Forest plays a crucial role in regulating the local climate and providing natural resources such as timber. It is also famous for its folklore, including the origins of Grimm’s fairy tales, and is known for its traditional craftsmanship, such as cuckoo clocks. Despite its beauty and cultural significance, the Black Forest is under pressure from deforestation, tourism, and environmental changes. Efforts to preserve its unique ecosystem are ongoing, with conservation initiatives balancing human activity and the need to protect the natural landscape for future generations.</p>
            <button className="btn-amazon"><Link href="/">Back to main page</Link></button>

                </div>
            </div>
        </div>
    )
}