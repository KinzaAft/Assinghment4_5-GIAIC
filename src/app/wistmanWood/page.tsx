import Header2 from "../Components/header2"
import Link from "next/link"

export default function Wood(){
    return(
        <div className="tree-container">
            <Header2/>
            <div className="flex-container">
                <div className="left-section">
                    <h1 className="about-head">Wistman's Wood Forest</h1>
                    <div className="left-section-img5"></div>
                </div>
                <div className="right-section">
                    <p className="right-section-para">Wistman's Wood, located in Dartmoor, Devon, England, is one of Britain’s most ancient and atmospheric woodlands. Covering only a small area, this unique forest is characterized by its twisted, gnarled oak trees, moss-covered boulders, and dense undergrowth, creating an almost otherworldly appearance. The forest is home to a variety of rare plant and animal species, including lichens, mosses, and ferns that thrive in the damp, shaded environment. Wistman's Wood is also a habitat for birds, insects, and small mammals, contributing to its ecological significance. The forest holds cultural and historical importance, with many legends and folklore surrounding it, including stories of Druids and supernatural beings. Wistman's Wood is often regarded as a place of mystery and enchantment, attracting hikers, nature lovers, and those interested in its ancient charm. Despite its small size, it plays a critical role in local biodiversity and is protected as a Site of Special Scientific Interest (SSSI). Conservation efforts focus on preserving its fragile ecosystem and mitigating the impact of increasing tourism, which could threaten the delicate balance of this ancient woodland.</p>
            <button className="btn-amazon"><Link href="/">Back to main page</Link></button>

                </div>
            </div>
        </div>
    )
}