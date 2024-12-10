import './Galeria.css'

export const Galeria = () => {
    return (
        <>
            <div className='titulo-galeria'>
                <h1>NIKE</h1>
                <p>Innovacion, estilo y proyecto para acompañarte en cada paso</p>
            </div>

            <div className='galeria'>
                <div className='rows1'>
                    <img src="../../public/assets/gallery-5.jpg" alt="" />
                    <img src="../../public/assets/gallery-8.jpg" alt="" />
                    <img src="../../public/assets/gallery-2.jpg" alt="" />
                    <img src="../../public/assets/gallery-3.jpg" alt="" />
                </div>
                <div className='rows2'>
                    <img src="../../public/assets/gallery-4.jpg" alt="" />
                    <img src="../../public/assets/gallery-1.jpg" alt="" />
                </div>
                <div className='rows3'>
                    <img src="../../public/assets/gallery-6.jpg" alt="" />
                    <img src="../../public/assets/gallery-7.jpg" alt="" />
                    <img src="../../public/assets/gallery-9.jpg" alt="" />
                </div>
            </div>
        </>
    )
}
