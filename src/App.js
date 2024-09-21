import Home from "./components/Home"
import Empresa from "./components/Empresa"
import Servicos from "./components/Servicos";
import Clientes from "./components/Clientes";
import Contato from "./components/Contato";

function App() {
  return (
    <div className="w-full h-full">
      <Home />
      <Servicos />
      <Empresa />
      <Clientes />
      <Contato/>
    </div>
  );
}

export default App;
