import './SobreNosotros.css'

export const SobreNosotros = () => {
    return (
        <>
            <div className='titulo-nosotros'>
                <h1>About us</h1>
                <hr className='nosotros-hr'/>
            </div>
            <div className='contenido'>
                <div className='imagenes'>
                    <img src="../../public/assets/image-1.jpg" alt="" />
                    <img src="../../public/assets/image-2.jpg" alt="" />
                </div>
                <div className='misionVision'>
                    <p>At Nike, we're passionate about inspiring and motivating people to reach their full potential. Since our founding, we've been dedicated to creating innovative products that combine performance, comfort and style, pushing athletes of all levels to push their limits.</p>
                    <p>Our mission is to transform sport into an accessible and inclusive experience, offering solutions that adapt to the needs of each individual. We are proud to be leaders in sustainability, design and technology, constantly working to make a positive difference in the world.</p>
                    <p>Our mission is to transform sport into an accessible and inclusive experience, offering solutions that adapt to the needs of each individual. We are proud to be leaders in sustainability, design and technology, constantly working to make a positive difference in the world.</p>
                </div>
            </div>
        </>
    )
}
