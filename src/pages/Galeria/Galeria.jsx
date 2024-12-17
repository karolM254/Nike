import './Galeria.css'

// El componente Galeria muestra una galería de imágenes organizadas en filas.
// Incluye un título y una breve descripción.

export const Galeria = () => {
    return (
        <>
            {/* Sección de título y descripción */}
            <div className='titulo-galeria'>
                <h1>NIKE</h1>
                <p>Innovation, style and project to accompany you in every step</p>
            </div>

            {/* Galería de imágenes */}
            <div className='galeria'>
                {/* Primera fila de imágenes */}
                <div className='rows1'>
                    <img src="../../public/assets/gallery-5.jpg" alt="" />
                    <img src="../../public/assets/gallery-8.jpg" alt="" />
                    <img src="../../public/assets/gallery-2.jpg" alt="" />
                    <img src="../../public/assets/gallery-3.jpg" alt="" />
                </div>

                {/* Segunda fila de imágenes */}
                <div className='rows2'>
                    <img src="../../public/assets/gallery-4.jpg" alt="" />
                    <img src="../../public/assets/gallery-1.jpg" alt="" />
                </div>

                {/* Tercera fila de imágenes */}
                <div className='rows3'>
                    <img src="../../public/assets/gallery-6.jpg" alt="" />
                    <img src="../../public/assets/gallery-7.jpg" alt="" />
                    <img src="../../public/assets/gallery-9.jpg" alt="" />
                </div>
            </div>
        </>
    )
}
