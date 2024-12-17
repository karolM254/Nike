import './Fabricantes.css';

// Declaramos el componente Fabricantes
export const Fabricantes = () => {
    return (
        <>
            {/* Sección del título principal de la página de fabricantes */}
            <div className="titulo-fabricantes">
                <h1>Manufacturers NIKE</h1>
                <p>Innovation and quality in every detail, designing products that make a difference.</p>
            </div>

            {/* Contenedor principal que agrupa las tarjetas de fabricantes */}
            <div className="contenido-fabricantes">
                {/* Tarjeta que describe el compromiso con la innovación */}
                <div className="tarjeta-fabricantes">
                    <div className='tarjeta-imagen'>
                        {/* Imagen que representa la colaboración global */}
                        <img src="../../public/assets/colaboracion-global.jpg" alt="" />
                    </div>
                    <div className='tarjeta-contenido'>
                        {/* Título de la tarjeta */}
                        <h2 className='tarjeta-contenido-h2'>Commitment to Innovation</h2>
                        {/* Descripción detallada del compromiso con la innovación */}
                        <p className='tarjeta-contenido-parrafo'>We work with advanced technologies and state-of-the-art materials, such as Flyknit and Nike Air, designed to maximize performance, reduce weight, and improve durability. Every detail is designed to offer a perfect balance between functionality, comfort and style, giving athletes and users an unparalleled experience with each use.</p>
                    </div>
                </div>

                {/* Tarjeta que describe la colaboración global */}
                <div className="tarjeta-fabricantes">
                    <div className='tarjeta-imagen'>
                        {/* Imagen que representa niños utilizando productos */}
                        <img src="../../public/assets/img-niños.jpg" alt="" />
                    </div>
                    <div className='tarjeta-contenido'>
                        {/* Título de la tarjeta */}
                        <h2 className='tarjeta-contenido-h2'>Global Collaboration</h2>
                        {/* Descripción detallada de la colaboración global */}
                        <p className='tarjeta-contenido-parrafo'>We work with advanced technologies and state-of-the-art materials, such as Flyknit and Nike Air, designed to maximize performance, reduce weight, and improve durability. Every detail is designed to offer a perfect balance between functionality, comfort and style, giving athletes and users an unparalleled experience with each use.</p>
                    </div>
                </div>

                {/* Tarjeta que describe la sostenibilidad en los procesos */}
                <div className="tarjeta-fabricantes">
                    <div className='tarjeta-imagen'>
                        {/* Imagen que representa la sostenibilidad */}
                        <img src="../../public/assets/sostenibilidad.jpg" alt="Imagen de sostenibilidad" />
                    </div>
                    <div className='tarjeta-contenido'>
                        {/* Título de la tarjeta */}
                        <h2 className='tarjeta-contenido-h2'>Sustainability</h2>
                        {/* Descripción detallada de los esfuerzos de sostenibilidad */}
                        <p className='tarjeta-contenido-parrafo'>We use recycled materials, such as PET plastic and sustainable fibers, to reduce our environmental footprint. In addition, we apply responsible production processes that optimize the use of resources and energy, with the aim of minimizing waste and moving towards a more sustainable future.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
