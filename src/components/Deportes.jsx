import React from 'react';
//Importar las imágenes de la carpeta src usando import
import deporte3 from '../assets/hockey.jpeg';
import deporte4 from '../assets/patin-hielo.jpg';

const Deportes = () => {
    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2 style={{ color: '#7b2e14', fontFamily: 'Verdana'}}>Deportes Favoritos</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginLeft: '45px', marginRight: '45px'}}>
                <div>
                    {/* Importar las imágenes de la carpeta public usando una URL relativa*/}
                    <img src="/baloncesto.jpg" alt="Deporte 1" style={{ width: '300px', height: '200px', borderRadius: '20px' }} />
                    <p style = {{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Baloncesto</p>
                </div>
                <div>
                    <img src="/natacion.png" alt="Deporte 2" style={{ width: '300px', height: '200px', borderRadius: '20px' }} />
                    <p style = {{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Natación</p>
                </div>
                <div>
                    {/* Usar las imágenes de la carpeta src */}
                    <img src={deporte3} alt="Deporte 3" style={{ width: '300px', height: '200px', borderRadius: '20px' }} />
                    <p style = {{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Hockey</p>
                </div>
                <div>
                    <img src={deporte4} alt="Deporte 4" style={{ width: '300px', height: '200px', borderRadius: '20px' }} />
                    <p style = {{textAlign: 'center', color: 'black', fontWeight: 'bold'}}>Patín sobre hielo</p>
                </div>
            </div>
        </div>
    );
};

export default Deportes;

