console.log('Trabalhando com Listas');
console.log('cidades que já visitei');
const saoPaulo = 'São Paulo';
const rioDeJaneiro = 'Rio de Janeiro';
const baunearioCamburiu = 'Bauneario Camburiu';
const curitiba = 'Curitiba';
const fazendaRioGrande = 'Fazenda Rio Grande';
const goioere = 'Goioerê';
console.log(saoPaulo, rioDeJaneiro, baunearioCamburiu, curitiba, fazendaRioGrande, goioere);
const cidadesQueJaVisitei = new Array(
  `São Paulo`,
  `Rio de Janeiro`,
  `Bauneario Camburiu`,
  `Curitiba`,
  `Fazenda Rio Grande`,
  `Goioerê`
  );
cidadesQueJaVisitei.push(`Pinhais`);
console.log(cidadesQueJaVisitei);
console.log(`A cidade mais linda:`);
console.log(cidadesQueJaVisitei[2])
console.log(`Meus amigos me disseram que eu nunca fui a Rio de janeiro, eu estava muito bêbado e eles mentiram pra mim.`);
cidadesQueJaVisitei.splice(2,1);
console.log(cidadesQueJaVisitei)//primeiro numero no splice diz a posicao do elemento que sera excluido, o segundo numero diz quantos elementos serao excluidos;