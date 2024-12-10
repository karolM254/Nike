import './SobreNosotros.css'

export const SobreNosotros = () => {
    return (
        <>
            <div className='titulo-nosotros'>
                <h1>Sobre Nosotros</h1>
                <hr />
            </div>
            <div className='contenido'>
                <div className='imagenes'>
                    <img src="../../public/assets/image-1.jpg" alt="" />
                    <img src="../../public/assets/image-2.jpg" alt="" />
                </div>
                <div className='misionVision'>
                    <p>En Nike, nos apasiona inspirar y motivar a personas a alcanzar su máximo potencial. Desde nuestra fundación, nos hemos dedicado a crear productos innovadores que combinan rendimiento, comodidad y estilo, impulsando a atletas de todos los niveles a superar sus límites. </p>
                    <p>Nuesta misión es transformar el deporte en una experiencia accesible e inclusiva, ofreciendo soluciones que se adaptan a las necesidades de cada individuo. Nos enorgullece ser líderes en sostenibilidad, diseño y tecnología, trabajando constantemente para marcar una diferencia positiva en el mundo.</p>
                    <p>Únete a nuestra visión y descubre cómo podemos seguir moviéndonos juntos hacia un futuro lleno de posibilidades.</p>
                </div>
            </div>
        </>
    )
}
