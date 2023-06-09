import React, {useState, useEffect} from "react";

const ImgboxComponent = () => {
    const imgUrls = [
        "https://i.imgur.com/LUola0Z.jpg", // 吃
        "https://i.imgur.com/xK2q1ja.jpg", // 盖被子
        "https://i.imgur.com/DnJs5k0.jpg", // 洗bb
        "https://i.imgur.com/oPBXmQf.jpg",
        "https://i.imgur.com/A76DhKc.jpg"
    ];
    const opacities = Array(imgUrls.length).fill(0);
    const [imageIndex, setImageIndex] = useState(0);

    opacities[imageIndex] = 1;
    opacities[(imageIndex + imgUrls.length - 1) % imgUrls.length] = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex(prevIndex => (prevIndex + 1) % imgUrls.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [imgUrls.length]);

    return (
        <div className="imgbox">
            {imgUrls.map((imgUrl, index) => (
                <div key={index} className="imgbox-img" style={{backgroundImage: `url("${imgUrl}")`, opacity: opacities[index]}}></div>
            ))}
            <div className="img-cover" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/mask.home.png)`}}></div>
        </div>
    );
};

export default ImgboxComponent;