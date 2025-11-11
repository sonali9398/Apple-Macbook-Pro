import React from 'react'
import useMacbookStore from '../store'
import clsx from 'clsx'
import {Canvas} from '@react-three/fiber'
import {Box, OrbitControls} from '@react-three/drei'
import MacbookModel14 from './models/Macbook-14'
import StudioLight from './StudioLight'
import ModelSwitcher from './three/ModelSwitcher'
import {useMediaQuery} from 'react-responsive'

function ProductViewer(){

    const {color, scale, setColor, setScale} = useMacbookStore();

    const isMobile = useMediaQuery({query:'(max-width:1024px)'})
    return(
        <section id='product-viewer'>
            <h2>Take a closer look.</h2>

            <div className="controls">
                <p className='info'>MacbookPro {scale} in {color}</p>

                <div className='flex-center gap-5 mt-5'>
                    <div className='color-control'>
                        <div onClick={() => setColor('#abd5bd')} className={clsx('bg-neutral-300', color === '#abd5bd' && 'active')}></div>
                        <div onClick={() => setColor('#2c2e2c')} className={clsx('bg-neutral-900', color === '#2c2e2c' && 'active')}></div>
                    </div>

                    <div className='size-control'>
                        <div onClick={() => setScale(0.06)} className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                            <p>14"</p>
                        </div>
                        <div onClick={() => setScale(0.08)} className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}>
                            <p>16"</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <p className='text-white text-4xl'>Render Canvas</p> */}
            <Canvas id='canvas' camera ={{position:[0,2,5], fov:50, near:0.1, far:100}}>
                <StudioLight/>
                
                {/* <MacbookModel14 scale={0.06} position={[0,0,0]}/> */}

                <OrbitControls enableZoom={false}/>
                <ModelSwitcher scale={scale} isMobile={isMobile}/>
            </Canvas>

        </section>
    )
}

export default ProductViewer
