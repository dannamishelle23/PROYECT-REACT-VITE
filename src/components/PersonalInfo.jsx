const PersonalInfo = () => {
    return (
        <div style={{ textAlign: 'center', margin: '20px', fontSize: '18px', lineHeight: '30px', fontFamily: 'Verdana'}}>
            <h1 style = {{color: '#5a1143'}}>MI PROYECTO CON REACT + VITE</h1>
            <h2 style={{ color: '#8a3f2f' }}>Datos Personales</h2>
            <p style={{ listStylePosition: 'inside', paddingLeft: 0, textAlign: 'center', color: 'black'}}>Nombre: Danna Lopez</p>
            <p style={{ listStylePosition: 'inside', paddingLeft: 0, textAlign: 'center', color: 'black'}}>Dirección: Flavio Alfaro Oe 17-2 y San Vicente, San Carlos</p>
            <p style={{ listStylePosition: 'inside', paddingLeft: 0, textAlign: 'center', color: 'black'}}>Teléfono: 099 075 4359</p>
            <p style={{ listStylePosition: 'inside', paddingLeft: 0, textAlign: 'center', color: 'black'}}>Correo Electrónico: danna.lopez@epn.edu.ec</p>
        </div>
    );
};

export default PersonalInfo;