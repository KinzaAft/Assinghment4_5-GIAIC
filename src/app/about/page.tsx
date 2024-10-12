import Header2 from "../Components/header2"

export default function about (){
    return(
        <div className="about-container">
            <Header2/>
            <div className="container-ab-lr">
                <div className="left-about">
                    <div className="left-im"></div>
                </div>
                <div className="right-about">
                <h1 className="about-head">About Us</h1>
                    <p className="right-para">Nature is a breathtaking tapestry of life, where every element plays a vital role in maintaining balance. From towering mountains to vast oceans, and from dense forests to open skies, it offers an endless source of inspiration and serenity. The beauty of nature lies not only in its grand landscapes but also in the smallest details—the vibrant colors of flowers, the gentle rustling of leaves, or the rhythmic flow of rivers. Nature teaches us harmony and resilience. In a fast-paced world, reconnecting with it brings calm and perspective, reminding us of the simple joys and wonders surrounding us every day.</p>
                </div>
            </div>
        </div>
    )
}