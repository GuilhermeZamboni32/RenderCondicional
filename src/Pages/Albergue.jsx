
import React, { useState } from 'react';

function Albergue() {
  const [dias, setDias] = useState(0)
  const [valorTotal, setValorTotal] = useState(0)
  const [detalhes, setDetalhes] = useState('')

  function calcularConta() {
    let precoPorDia
    if (dias <= 5) {
      precoPorDia = 100
    } else if (dias <= 10) {
      precoPorDia = 90
    } else {
      precoPorDia = 80
    }

    let valorBruto = dias * precoPorDia
    const descontoEmocional = valorBruto * 0.10
    const descontoUber = valorBruto * 0.15
    const multa = 150

    const valorComDescontos = valorBruto - (descontoEmocional + descontoUber)
    const valorFinal = valorComDescontos + multa

    setValorTotal(valorFinal.toFixed(2))

    setDetalhes(
      `Valor bruto: R$${valorBruto.toFixed(2)}\n` +
      `Desconto do envolvimento emocional: -R$${descontoEmocional.toFixed(2)}\n` +
      `Desconto da carteirinha de Uber: -R$${descontoUber.toFixed(2)}\n` +
      `Multa por danos materiais: +R$${multa.toFixed(2)}\n` +
      `Valor final: R$${valorFinal.toFixed(2)}`
    )
  }

  return (
    <div>
      <h1>Conta do Albergue</h1>
      <label>
        Número de diárias:
        <input
          type="number"
          value={dias}
          onChange={(e) => setDias(Number(e.target.value))}
        />
      </label>
      <button onClick={calcularConta}>Calcular</button>

      {valorTotal > 0 && (
        <div>
          <h2>Valor Total: R${valorTotal}</h2>
          <pre>{detalhes}</pre>
        </div>
      )}
    </div>
  );
};

export default Albergue
