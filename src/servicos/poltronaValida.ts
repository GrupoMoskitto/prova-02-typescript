/**
 * Q2 — GET /poltrona-valida
 *
 * A funcao inteira e com voce, da assinatura ao return:
 *
 *   - o nome precisa ser exatamente poltronaValida, exportada;
 *   - COMO ela e chamada esta em tests/poltronaValida.test.ts;
 *   - as regras (limpeza, letra da fileira, numero de 1 a 10) estao no
 *     ENUNCIADO.pdf, com a tabela de capacidade por fileira.
 *
 * As nativas que resolvem: trim, toUpperCase, charAt, substring, Number.
 * O helper ai embaixo tira da frente a conta de quantas fileiras a sala tem.
 */

const FILEIRAS: string = 'ABCDEFGHIJ';

/** As fileiras que existem numa sala: fileirasDaSala(30) devolve 'ABC'. */
export function fileirasDaSala(capacidade: number): string {
  return FILEIRAS.substring(0, capacidade / 10);
}

export function poltronaValida(fileira: string, numero: number): boolean {
  const letra: string = fileira.trim().toUpperCase().charAt(0); // pega a letra da fileira (indice 0), sem espacos e maiuscula
  const fileiras: string = fileirasDaSala(numero); // pega as fileiras (usa a funcao pronta fileirasDaSala)
  const numeroPoltronas: number = Number(fileira.trim().substring(1));

  return (
    letra.length === 1 &&
    fileiras.includes(letra) &&
    Number.isInteger(numeroPoltronas) &&
    numeroPoltronas >= 1 &&
    numeroPoltronas <= 10 // caso TUDO for 'true', devolve 'true', se nao devolve 'false'
  );
}