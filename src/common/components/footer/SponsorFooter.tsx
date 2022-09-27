import React from 'react'
import { Box, ImageList, ImageListItem } from '@mui/material'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Maelstrom from '../../../../public/sponsors/maelstrom.svg'
import Bmbf from '../../../../public/sponsors/bmbf.jpg'
import Fourcast from './../../../../public/sponsors/4cast.png'
import Kiste from '../../../../public/sponsors/kiste.png'
import Ambrosys from '../../../../public/sponsors/ambrosys.png'
import Bmu from '../../../../public/sponsors/bmu.png'
import Img42 from '../../../../public/sponsors/eu.svg'
import Img43 from '../../../../public/sponsors/hpc.jpeg'

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
