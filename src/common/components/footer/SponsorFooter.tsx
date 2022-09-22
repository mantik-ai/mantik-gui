import React from 'react'
import { Box, ImageList, ImageListItem } from '@mui/material'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Maelstrom from './../../../../public/sponsors/Maelstrom.svg' // relative path to image
import Bmbf from './../../../../public/sponsors/BMBF.jpg' // relative path to image
import Fourcast from './../../../../public/sponsors/4cast.png' // relative path to image
import Kiste from './../../../../public/sponsors/2021-02-Logo-Kiste_black-1024x462.png' // relative path to image
import Ambrosys from './../../../../public/sponsors/ambrosys_greenish.png' // relative path to imag
import Bmu from './../../../../public/sponsors/BMU_2018_supported_Office_Farbe_eng-300x180.png' // relative path to imag
import Img42 from './../../../../public/sponsors/img42.svg' // relative path to imag
import Img43 from './../../../../public/sponsors/img43.jpeg' // relative path to imag

export const SponsorFooter = () => {
    const router = useRouter()
    const images = [
        { src: Maelstrom },
        { src: Fourcast },
        { src: Bmbf },
        { src: Kiste },
        { src: Ambrosys },
        { src: Bmu },
        { src: Img42 },
        { src: Img43 },
    ]

    return router.asPath === '/' ? (
        <Box
            sx={{
                flex: 1,
                position: 'relative',
                height: '12vh',
                alignSelf: 'center',
            }}
        >
            <ImageList
                sx={{ width: '51vw', height: '12vh' }}
                cols={images.length}
                rowHeight="auto"
            >
                {images.map((image) => {
                    return (
                        <ImageListItem key={image.src}>
                            <Image
                                src={image.src}
                                alt={'image'}
                                loading="lazy"
                            />
                        </ImageListItem>
                    )
                })}
            </ImageList>
        </Box>
    ) : null
}
