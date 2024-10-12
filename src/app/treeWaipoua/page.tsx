import Header2 from "../Components/header2"
import Link from "next/link"

export default function Tree(){
    return(
        <div className="tree-container">
            <Header2/>
            <div className="flex-container">
                <div className="left-section">
                    <h1 className="about-head">Tree Waipoua Forest</h1>
                    <div className="left-section-img4"></div>
                </div>
                <div className="right-section">
                    <p className="right-section-para">The Waipoua Forest, located in Northland, New Zealand, is one of the country’s most iconic and ancient forests, known for its towering kauri trees. Covering about 2,500 hectares, it is home to some of the largest and oldest kauri trees in the world, including Tāne Mahuta, the "Lord of the Forest," which is around 2,500 years old and the largest known living kauri tree. The forest is a haven for biodiversity, providing habitat for a wide range of native plant and animal species, some of which are unique to New Zealand. Waipoua plays a critical role in the cultural heritage of the Māori people, for whom the forest holds deep spiritual significance. The dense canopy and rich ecosystem of the Waipoua Forest contribute to climate regulation, soil conservation, and water retention in the region. Despite its ecological and cultural importance, Waipoua Forest faces threats from disease, particularly kauri dieback, as well as deforestation and human activities. Conservation efforts are ongoing, with the focus on protecting the ancient kauri trees and preserving the unique biodiversity of the area.</p>
            <button className="btn-amazon"><Link href="/">Back to main page</Link></button>

                </div>
            </div>
        </div>
    )
}