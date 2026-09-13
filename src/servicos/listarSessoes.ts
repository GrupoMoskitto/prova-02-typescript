/**
 * Q3 — GET /sessoes
 *
 * A primeira questao com um tipo SEU: antes da funcao, escreva a
 * interface SessaoResumo no src/tipos.ts (o TODO dela esta la).
 *
 * A funcao inteira e com voce:
 *
 *   - o nome precisa ser exatamente listarSessoes, exportada;
 *   - COMO ela e chamada esta em tests/listarSessoes.test.ts, e a rota
 *     GET /sessoes em src/api/rotas.ts mostra o que ela espera receber
 *     de volta;
 *   - as regras (ordem, titulo, vendidos, status) estao no ENUNCIADO.pdf.
 */

import { SessaoResumo, Sessao, Venda, StatusSessao } from "../tipos";

// por enquanto, sempre vai retornar 0 vendidos, mas na Q4 vai mudar isso
export function listarSessoes(sessoes: Sessao[], vendas: Venda[]): SessaoResumo[] {
  if (!Array.isArray(sessoes) || !Array.isArray(vendas)) {
    throw new Error("listarSessoes recebe dois arrays, 'sessoes' e 'vendas'");
  }

  return sessoes.map((sessao) => {
    const vendidos = vendas.filter((v) => v.sessaoId === sessao.id).length;

    let status: StatusSessao;
    if (sessao.cancelada) {
      status = 'ENCERRADA';
    } else if (vendidos >= sessao.capacidade) {
      status = 'ESGOTADA';
    } else {
      status = 'ABERTA';
    }

    const resumo: SessaoResumo = {
      id: sessao.id,
      titulo: sessao.filme.titulo,
      horario: sessao.horario,
      sala: sessao.sala,
      formato: sessao.formato,
      vendidos,
      capacidade: sessao.capacidade,
      status,
    };

    return resumo;
  })
}