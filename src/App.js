import './App.css';
import bomba from './bomba.png'
import {useState} from "react";

export default function App() {
	const [precoAlcool, setPrecoAlcool] = useState();
	const [precoGasolina, setPrecoGasolina] = useState();
	const [textoRecomendacao, setTextoRecomendacao] = useState("");
	const [isVisible, setIsVisible] = useState(false);
	
	const handlePrecoAlcool = (event) => {
		setPrecoAlcool(event.target.value);
		setIsVisible(false);
	}
	
	const handlePrecoGasolina = (event) => {
		setPrecoGasolina(event.target.value);
		setIsVisible(false);
	}
	
	function handleCalcularRecomendacaoCombustivel() {
		if (!precoGasolina || precoGasolina == 0 ||
			!precoAlcool || precoAlcool == 0
		) {
			alert("Preencha o preço dos dois combustíveis!");
			return;
		}
		
		let textoRecomendacao = "";
		let valorReferenciaGasolina = 0.7;
		let divisaoCombustiveis = precoAlcool / precoGasolina;
		
		if (divisaoCombustiveis < valorReferenciaGasolina) {
			textoRecomendacao = "Recomendamos abastecer com Álcool.";
		} else {
			textoRecomendacao = "Recomendamos abastecer com Gasolina.";
		}
		
		setTextoRecomendacao(textoRecomendacao);
		setIsVisible(true);
	}
	
	return (
		<div className="App">
			<img src={bomba} alt="Bomba de combustível"/>
			<h1>Qual a melhor opção ?</h1>
			
			<h3>Álcool (preço por litro):</h3>
			<input type="number" value={precoAlcool} onChange={handlePrecoAlcool} min="0" step=".01"/>
			
			<h3>Gasolina (preço por litro):</h3>
			<input type="number" value={precoGasolina} onChange={handlePrecoGasolina} min="0" step=".01"/>
			
			<br/>
			<button onClick={handleCalcularRecomendacaoCombustivel}>Calcular</button>
			
			<br/>
			<input
				type="text"
				id="input_resultado"
				value={textoRecomendacao}
				disabled={true}
				style={{ display: isVisible ? 'block' : 'none' }}
			/>
		</div>
	);
}