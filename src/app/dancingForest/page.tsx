import Header2 from "@/app/Components/header2"
import Link from "next/link"

export default function Dancing(){
    return(
        <div className="black-container">
            <Header2/>
            <div className="flex-container">
                <div className="left-section">
                    <h1 className="about-head">Dancing Forest</h1>
                    <div className="left-section-img6"></div>
                </div>
                <div className="right-section">
                    <p className="right-section-para">Dancing Forest, located in Curonian Spit, is one of the most intriguing and captivating woodlands in the world. Though covering only a small area, this forest is unique due to its twisted, spiraling pine trees that seem to defy nature, creating a landscape that looks almost magical. The forest is home to a variety of rare flora and fauna, including mosses, ferns, and wildflowers that thrive in the forest's sandy soil. The Dancing Forest is also a habitat for various birds, insects, and small mammals, making it ecologically significant. Local legends and folklore surround the forest, with some saying the trees twist due to mystical forces, adding to its air of mystery. The Dancing Forest attracts hikers, photographers, and nature enthusiasts from all over, drawn to its otherworldly appearance and rich biodiversity. Despite its relatively small size, it plays a vital role in preserving the local ecosystem and is protected as a natural monument. Conservation efforts are ongoing to ensure that this fragile and mysterious woodland continues to enchant future generations.</p>
            <button className="btn-amazon"><Link href="/">Back to main page</Link></button>

                </div>
            </div>
        </div>
    )
}