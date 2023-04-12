import Image from 'next/image'
import React from 'react'
const BG = ({src: image}) => {
    return (
        <div
                style={{
                    position: "fixed",
                    height: "100vh",
                    width: "100vw",
                    overflow: 'hidden',
                    zIndex: -1,
                }}
            >
                <Image
                    src={image}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                    blurDataURL={rgbDataURL(2, 129, 210)}
                    alt=""
                />
            </div>
    )
}

export default BG