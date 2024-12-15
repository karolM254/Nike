import './Fabricantes.css';

export const Fabricantes = () => {
    return (
        <>

            <div className="titulo-fabricantes">
                <h1>Fabricantes NIKE</h1>
                <p>Innovacion y calidad en cada detalle, diseñando productos que marcan la diferencia</p>
            </div>

            <div className="contenido-fabricantes">
                <div className="tarjeta-fabricantes">
                    <div className='tarjeta-imagen'>
                        <img src="../../public/assets/colaboracion-global.jpg" alt="" />
                    </div>
                    <div className='tarjeta-contenido'>
                        <h2 className='tarjeta-contenido-h2'>Compromiso con la Innovación</h2>
                        <p className='tarjeta-contenido-parrafo'>Trabajamos con tecnologías avanzadas y materiales de última generación, como Flyknit y Nike Air, diseñados para maximizar el rendimiento, reducir el peso y mejorar la durabilidad. Cada detalle está pensado para ofrecer un equilibrio perfecto entre funcionalidad, confort y estilo, brindando a los atletas y usuarios una experiencia inigualable en cada uso.</p>
                    </div>
                </div>
                <div className="tarjeta-fabricantes">
                    <div className='tarjeta-imagen'>
                        <img src="../../public/assets/img-niños.jpg" alt="" />
                    </div>
                    <div className='tarjeta-contenido'>
                        <h2 className='tarjeta-contenido-h2'>Colaboración Global</h2>
                        <p className='tarjeta-contenido-parrafo'>Trabajamos con tecnologías avanzadas y materiales de última generación, como Flyknit y Nike Air, diseñados para maximizar el rendimiento, reducir el peso y mejorar la durabilidad. Cada detalle está pensado para ofrecer un equilibrio perfecto entre funcionalidad, confort y estilo, brindando a los atletas y usuarios una experiencia inigualable en cada uso.</p>
                    </div>
                </div>
                <div className="tarjeta-fabricantes">
                    <div className='tarjeta-imagen'>
                        <img src="../../public/assets/sostenibilidad.jpg" alt="Imagen de sostenibilidad" />
                    </div>
                    <div className='tarjeta-contenido'>
                        <h2 className='tarjeta-contenido-h2'>Sostenibilidad</h2>
                        <p className='tarjeta-contenido-parrafo'>Utilizamos materiales reciclados, como plástico PET y fibras sostenibles, para reducir nuestra huella ambiental. Además, aplicamos procesos de producción responsables que optimizan el uso de recursos y energía, con el objetivo de minimizar el desperdicio y avanzar hacia un futuro más sostenible.</p>
                    </div>
                </div>
                
            </div>

        </>
    )
}
