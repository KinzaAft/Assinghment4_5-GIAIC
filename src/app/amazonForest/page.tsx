import Header2 from "../Components/header2"
import Link from "next/link"

export default function Amazon(){
    return(
        <div className="amazon-container">
            <Header2/>
            <div className="flex-container">
                <div className="left-section">
                    <h1 className="about-head">Amazon Rain Forest</h1>
                    <div className="left-section-img"></div>
                </div>
                <div className="right-section">
                    <p className="right-section-para">The Amazon Rainforest, also known as Amazonia, is the largest tropical rainforest in the world, covering over 5.5 million square kilometers across South America, primarily in Brazil, but also extending into Peru, Colombia, and several other countries. It is home to an incredibly diverse range of species, with millions of plant, animal, and insect species, many of which are found nowhere else on Earth. The Amazon plays a critical role in regulating the global climate by absorbing vast amounts of carbon dioxide and producing about 20% of the world's oxygen, earning it the nickname "the lungs of the Earth."<br /><br />

Despite its importance, the Amazon is under threat from deforestation, illegal logging, and land conversion for agriculture, which could have severe consequences for biodiversity and climate change. Efforts to conserve and protect the rainforest are ongoing, but they face significant challenges from economic interests and environmental policies.</p>
            <button className="btn-amazon"><Link href="/">Back to main page</Link></button>

                </div>
            </div>
        </div>
    )
}