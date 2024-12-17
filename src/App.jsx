import PersonalInfo from './components/PersonalInfo';
import Estudios from './components/Estudios';
import Herramientas from './components/Herramientas';
import Deportes from './components/Deportes';
function App() {
    return (
        <div style={{ background: 'linear-gradient(135deg, #d0d5ec, #f2cad9, #ceedfd)',
          padding: '20px', minHeight: '100vh'}}>
            <PersonalInfo />
            <Estudios />
            <Herramientas />
            <Deportes />
        </div>
    );
}

export default App;

