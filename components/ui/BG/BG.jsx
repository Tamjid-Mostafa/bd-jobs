import Image from 'next/image'
import React from 'react'
const BG = ({image}) => {
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
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                    alt=""
                />
            </div>
    )
}

export default BG