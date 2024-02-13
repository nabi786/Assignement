



export default function Image(prop){
    const imgSrc = require(`../../public/uploads/${prop.image}`).default;
    return(
        <>
         <img style={{ width: "60px", borderRadius: "10px" }} src={imgSrc.src} />    
        </>
    )
}

