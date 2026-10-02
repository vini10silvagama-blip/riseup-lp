// =====================================================================
// TODOS OS TEXTOS DA LANDING PAGE
// Para alterar a copy, edite apenas este arquivo. Os componentes em
// src/components/ só cuidam do layout.
//
// "R$" usa espaço não separável (R$ 70) para o valor não quebrar de linha.
// Títulos com palavra em destaque (ciano) usam { antes, destaque, depois }.
// Textos entre colchetes, como [PRAZO], são placeholders pendentes.
// =====================================================================

export type TituloDestaque = { antes: string; destaque?: string; depois?: string };

// ---------------------------------------------------------------------
// Geral (SEO e links)
// ---------------------------------------------------------------------
export const site = {
  titulo: 'Rise Up Odonto — Faturamento previsível para clínicas odontológicas',
  descricao:
    'Sistema de captação, conversão e retenção para clínicas odontológicas acima de R$ 70 mil/mês que trabalham com procedimentos de alto valor. Peça seu diagnóstico gratuito.',
  nomeMarca: 'Rise Up Odonto',
  instagram: '@riseupodonto',
  instagramUrl: 'https://www.instagram.com/riseupodonto/',
};

// Destinos dos links (âncoras das seções)
export const links = {
  solucoes: '#solucoes',
  resultados: '#resultados',
  sobre: '#sobre',
  // Subpágina futura /rise-connect — por enquanto leva à seção 6
  riseConnect: '#rise-connect',
  comoFunciona: '#como-funciona',
  diagnostico: '#diagnostico',
};

// ---------------------------------------------------------------------
// 0. Cabeçalho
// ---------------------------------------------------------------------
export const cabecalho = {
  menu: [
    { texto: 'Soluções', href: links.solucoes },
    { texto: 'Resultados', href: links.resultados },
    { texto: 'Sobre', href: links.sobre },
    { texto: 'Rise Connect', href: links.riseConnect },
  ],
  botao: { texto: 'Diagnóstico gratuito', href: links.diagnostico },
  abrirMenu: 'Abrir menu',
  fecharMenu: 'Fechar menu',
};

// ---------------------------------------------------------------------
// 1. Hero
// ---------------------------------------------------------------------
export const hero = {
  etiqueta: 'Para clínicas odontológicas acima de R$ 70 mil/mês',
  titulo: {
    // O "\n" marca onde o título quebra a linha no computador (no celular ele quebra sozinho)
    antes: 'Transformamos a demanda \nda sua clínica em ',
    destaque: 'faturamento previsível.',
  } as TituloDestaque,
  subtitulo:
    'Um sistema de captação, conversão e retenção para a sua clínica crescer sem aumentar o caos e sem depender de você em cada decisão.',
  botaoPrincipal: { texto: 'Quero meu diagnóstico gratuito', href: links.diagnostico },
  notaBotao: 'Gratuito e sem compromisso.',
  botaoSecundario: { texto: 'Ver como funciona', href: links.comoFunciona },
  socios: [
    // "foto" é o nome do arquivo em src/assets/socios/ (sem extensão)
    { nome: 'Vinicius Gama', funcao: 'Tráfego e automação', foto: 'vinicius', alt: 'Vinicius Gama, sócio da Rise Up Odonto' },
    { nome: 'Felipe Costa', funcao: 'Marketing e comercial', foto: 'felipe', alt: 'Felipe Costa, sócio da Rise Up Odonto' },
  ],
  // Texto do selo circular (decorativo), em dois arcos para nada ficar de cabeça para baixo
  selo: { arcoCima: 'CAPTAÇÃO · CONVERSÃO', arcoBaixo: 'RETENÇÃO' },
  cardCase: { titulo: 'R$ 55 mil → R$ 115 mil/mês', texto: 'Case real · 3 meses de contrato' },
  // Os logos vêm sozinhos da pasta public/img/clientes/ (SVG ou PNG; o nome do arquivo vira o texto alternativo).
  // Com a pasta vazia, a faixa inteira (título incluído) some.
  clientesTitulo: 'Clínicas que já trabalham com a gente',
};

// ---------------------------------------------------------------------
// 2. O problema real — mapa do vazamento
// ---------------------------------------------------------------------
export const problema = {
  sobretitulo: 'O problema real',
  titulo: 'Previsibilidade não vem de mais leads. Vem de parar de perder os que já chegam.',
  subtitulo:
    'Em uma clínica acima de R$ 70 mil/mês, pequenas perdas entre o lead e o faturamento viram muito dinheiro. E quase sempre o que o dono sente não é o que está travando.',
  jornadaTitulo: 'Onde o faturamento vaza na jornada do paciente',
  etapas: [
    { nome: 'Lead', texto: 'Muito “curioso” e nenhum critério para separar quem tem intenção.' },
    { nome: 'Resposta', texto: 'As primeiras mensagens demoram, o lead esfria e vai para o concorrente.' },
    { nome: 'Agendamento', texto: 'O paciente pergunta o preço, recebe só o valor e ninguém investiga a real necessidade.' },
    { nome: 'Comparecimento', texto: 'Faltas e cancelamentos deixam buracos na agenda.' },
    { nome: 'Avaliação e orçamento', texto: 'Sem atendimento encantador e boa condução, medo, preço e falta de urgência vencem o valor.' },
    { nome: 'Fechamento', texto: '“Vou pensar.” Sem follow-up, o orçamento vai para o cemitério.' },
    { nome: 'Retorno', texto: 'Pacientes antigos e orçamentos parados, esquecidos na base.' },
  ],
  porTrasTitulo: 'E por trás de toda a jornada:',
  porTras: [
    'Recepção sobrecarregada entre WhatsApp, telefone, agenda e paciente presencial.',
    'O comercial vive na memória de uma recepcionista, sem processo nem CRM.',
    'Ninguém sabe de onde vem o faturamento — nem onde ele vaza.',
    'Sem processo e autonomia da equipe, crescer significa apenas aumentar o caos.',
  ],
};

// ---------------------------------------------------------------------
// 3. O que fazemos pela sua clínica (âncora "Sobre")
// ---------------------------------------------------------------------
export const oQueFazemos = {
  sobretitulo: 'A Rise Up',
  titulo: 'O que fazemos pela sua clínica',
  cards: [
    { dor: '“Não sei se o problema é o anúncio ou a equipe.”', solucao: 'Mostramos o funil inteiro em um dashboard em tempo real, etapa por etapa.' },
    { dor: '“Os leads esfriam antes de alguém responder.”', solucao: 'Não é só atendimento: qualificação, classificação, agendamento e reativação de leads perdidos.' },
    { dor: '“Faço avaliações e o paciente não fecha.”', solucao: 'Quebra de objeções, condições de pagamento e follow-up estruturado.' },
    { dor: '“Tudo depende de mim, e crescer só aumenta o caos.”', solucao: 'Processo, CRM e indicadores para crescer sem contratar gente só para compensar processo ruim.' },
  ],
  manifesto: {
    antes: 'Não somos uma agência de tráfego para dentistas. ',
    destaque: 'Somos o time que transforma a demanda da sua clínica em faturamento previsível.',
  } as TituloDestaque,
};

// ---------------------------------------------------------------------
// 4. Pilares (âncora "Soluções")
// ---------------------------------------------------------------------
export const pilares = {
  sobretitulo: 'Soluções',
  titulo: 'Previsibilidade tem 4 pilares. Se um falha, o faturamento oscila.',
  subtitulo:
    'Cada pilar do sistema de captação, conversão e retenção da Rise Up fecha um vazamento específico da sua clínica.',
  rotuloPilar: 'Pilar',
  rotuloPrevisibilidade: 'Previsibilidade:',
  itens: [
    {
      icone: 'estrela',
      nome: 'Posicionamento',
      frase: 'Marca e oferta que fazem o paciente chegar entendendo o valor.',
      tags: ['Marca', 'Autoridade', 'Oferta por procedimento', 'Rebranding'],
      previsibilidade: 'pacientes que chegam entendendo o valor antes do preço.',
    },
    {
      icone: 'alvo',
      nome: 'Demanda qualificada',
      frase: 'Demanda de procedimentos de alto valor, para a agenda produzir mais.',
      tags: ['Meta Ads', 'Google Ads', 'Perfil de Empresa', 'Landing pages', 'Pacientes de maior ticket'],
      previsibilidade: 'ocupação produtiva, não só agenda cheia.',
    },
    {
      icone: 'conversao',
      nome: 'Conversão comercial',
      frase: 'Cada lead qualificado, classificado e conduzido até a avaliação.',
      destaque: {
        botao: 'Rise Connect',
        href: links.riseConnect,
        texto: 'Qualifica cada lead e entrega à sua equipe só quem está pronto para a avaliação.',
      },
      tags: ['Roteiros', 'Treinamento da equipe', 'Follow-up', 'Quebra de objeções'],
      previsibilidade: 'sua equipe foca só em quem está pronto para a avaliação.',
    },
    {
      icone: 'grafico',
      nome: 'Inteligência e retenção',
      frase: 'Dashboard em tempo real, CRM organizado e base reativada.',
      tags: ['CRM', 'Dashboard', 'Receita por origem', 'Reativação', 'Indicação'],
      previsibilidade: 'saber o que vai entrar antes de o mês terminar.',
    },
  ],
};

// ---------------------------------------------------------------------
// 5. Como tudo se conecta
// ---------------------------------------------------------------------
export const comoFunciona = {
  sobretitulo: 'Como tudo se conecta',
  titulo: 'Do anúncio ao tratamento fechado: o processo comercial completo',
  subtitulo:
    'Cada etapa passa o paciente para a próxima — sem lead perdido no caminho, sem sobrecarregar sua equipe e com tudo registrado.',
  faixa: {
    destaque: 'O Rise Connect atende, qualifica, classifica e direciona cada lead',
    resto: ' — para que nenhum paciente fique sem resposta e sua equipe dedique tempo só a quem está pronto para fechar.',
  },
  rotuloSemSistema: 'Sem sistema:',
  rotuloSolucao: 'Solução:',
  nomeExemplo: 'João:',
  etapas: [
    {
      nome: 'Atração',
      semSistema: 'anúncio genérico atraindo curiosos.',
      texto: 'Campanhas para procedimentos de alto valor, com a origem de cada lead registrada.',
      solucao: 'Google Ads · Meta Ads · Landing page · Perfil de Empresa',
      joao: 'pesquisou implante no Google às 22h40.',
    },
    {
      nome: 'Primeiro contato',
      semSistema: 'o lead espera horas e fala com outra clínica.',
      texto: 'Contato rápido e humanizado, a qualquer hora, enquanto o interesse ainda está quente.',
      solucao: 'Rise Connect',
      joao: 'respondido em segundos.',
    },
    {
      nome: 'Qualificação e classificação',
      semSistema: 'a recepção gasta tempo com quem não vai fechar.',
      texto: 'Cada lead é qualificado, classificado, registrado no CRM e direcionado à sua equipe quando está pronto para a avaliação.',
      solucao: 'Rise Connect + CRM',
      joao: 'classificado como quente e direcionado à equipe.',
    },
    {
      nome: 'Agenda e comparecimento',
      semSistema: 'faltas e cancelamentos deixam buracos na agenda.',
      texto: 'Horários oferecidos na conversa, confirmação 24h antes, lembrete 3h antes e recuperação de faltas.',
      solucao: 'Rise Connect + agenda integrada',
      joao: 'avaliação na quarta, 14h. Confirmou e compareceu.',
    },
    {
      nome: 'Orçamento e fechamento',
      semSistema: '“vou pensar” e ninguém acompanha.',
      texto: 'Atendimento encantador, apresentação de valor, quebra de objeções e follow-up em D+1, D+3, D+7 e D+15.',
      solucao: 'Roteiros · Treinamento · CRM',
      joao: 'fechou após o follow-up do D+3.',
    },
    {
      nome: 'Retenção e reativação',
      semSistema: 'base antiga e orçamentos parados esquecidos.',
      texto: 'Retorno periódico, reativação de orçamentos parados e pedido de indicação.',
      solucao: 'Campanhas para a base · Indicação',
      joao: 'entrou no calendário de retorno.',
    },
  ],
  crm: {
    etiqueta: 'CRM',
    texto: 'Por baixo de todas as etapas: cada conversa, etapa, tarefa e motivo de perda registrados. Nada depende da memória da recepção.',
  },
  dashboard: {
    titulo: 'Dashboard em tempo real',
    texto: 'Receita por origem, gargalo do mês e previsão de faturamento.',
  },
};

// ---------------------------------------------------------------------
// 6. Rise Connect
// ---------------------------------------------------------------------
export const riseConnect = {
  etiqueta: 'Uma solução Rise Up · Rise Connect',
  titulo: { antes: 'Da chegada do lead ', destaque: 'ao tratamento fechado.' } as TituloDestaque,
  texto:
    'Mais faturamento sem investir mais em anúncios e sem sobrecarregar sua equipe. O Rise Connect tira sua recepção do atendimento de quem não vai fechar e entrega só os leads quentes, com contexto.',
  classificacoes: [
    { nome: 'Quente', texto: 'Sua equipe assume, já com contexto, para a avaliação.' },
    { nome: 'Morno', texto: 'Nutrição até estar pronto para fechar.' },
    { nome: 'Frio', texto: 'Cadência leve, sem ocupar a equipe.' },
  ],
  lista: [
    'Tudo registrado no CRM: histórico, origem, classificação e próximo passo',
    'Confirmação, lembretes e recuperação de faltas e cancelamentos',
  ],
  etica:
    'Segue as regras da sua clínica, o Código de Ética Odontológica do CFO e a LGPD. Não faz diagnóstico e direciona à sua equipe os casos sensíveis.',
  // Subpágina futura /rise-connect — por enquanto aponta para o diagnóstico
  botao: { texto: 'Conhecer o Rise Connect', href: links.diagnostico },
  conversa: {
    clinica: '[Nome da clínica]',
    status: 'online',
    rotulo: 'Exemplo de conversa no WhatsApp',
    mensagens: [
      { de: 'paciente', texto: 'Boa noite, perdi dois dentes faz um tempo e queria saber quanto fica pra colocar eles.', hora: '22:40' },
      { de: 'clinica', texto: 'Boa noite! O valor depende da avaliação, porque cada caso tem uma indicação diferente. Os dentes foram perdidos há quanto tempo?', hora: '22:40' },
      { de: 'paciente', texto: 'Faz uns 2 anos.', hora: '22:41' },
      { de: 'clinica', texto: 'Nesse caso, o ideal é o dentista avaliar para indicar a melhor opção. Tenho quarta às 14h ou quinta às 10h. Qual fica melhor?', hora: '22:41' },
      { de: 'paciente', texto: 'Quarta às 14h.', hora: '22:42' },
    ],
  },
  cardLead: {
    etiqueta: 'Lead quente · Implante',
    local: 'no CRM',
    nome: 'João, 48 anos',
    detalhes: 'Origem: Google Ads · Perdeu dois dentes · Particular · Disponível quarta à tarde · Objeção: forma de pagamento',
    proximaAcao: 'Próxima ação: equipe confirma a avaliação',
  },
};

// ---------------------------------------------------------------------
// 7. Dashboard + funil + equação
// ---------------------------------------------------------------------
export const dashboard = {
  sobretitulo: 'Dashboard em tempo real',
  titulo: { antes: 'Aqui a previsibilidade ', destaque: 'fica visível.' } as TituloDestaque,
  subtitulo:
    'Você recebe um dashboard com todas as etapas e métricas da clínica: onde o investimento está sendo aplicado, quanto ele retorna e qual taxa melhorar primeiro.',
  painel: {
    titulo: 'Painel comercial · Rise Up',
    selo: 'Setembro · dados ilustrativos',
    rotuloAcessivel: 'Exemplo de painel com dados ilustrativos',
    indicadores: [
      { rotulo: 'Faturamento do mês', valor: 'R$ 115.400', nota: '↑ vs. mês anterior', escuro: true },
      { rotulo: 'Avaliações agendadas', valor: '54', nota: 'meta: 60' },
      { rotulo: 'Taxa de fechamento', valor: '42%', nota: 'previsão do mês: R$ 128 mil' },
    ],
    funilTitulo: 'Funil do mês',
    funil: [
      { rotulo: 'Leads', largura: 100 },
      { rotulo: 'Agendamentos', largura: 62 },
      { rotulo: 'Comparecimentos', largura: 48 },
      { rotulo: 'Fechamentos', largura: 30 },
    ],
    origemTitulo: 'Receita por origem',
    origens: [
      { rotulo: 'Google', altura: 100 },
      { rotulo: 'Meta', altura: 71 },
      { rotulo: 'Indicação', altura: 44 },
      { rotulo: 'Base', altura: 31 },
    ],
  },
  cards: [
    { forte: 'Receita por origem:', resto: ' Google, Meta, indicação e base.' },
    { forte: 'Taxas de cada etapa,', resto: ' do lead ao fechamento.' },
    { forte: 'Gargalo do mês:', resto: ' onde o dinheiro está vazando.' },
    { forte: 'Previsão de faturamento', resto: ' antes de o mês terminar.' },
  ],
  funil: {
    titulo: 'O que medimos em cada etapa do funil',
    instrucao: 'Clique em cada etapa: o que olhamos, por que olhamos e o que ajustamos.',
    colunas: { olhamos: 'O que olhamos', porque: 'Por que olhamos', ajustamos: 'O que ajustamos' },
    etapaInicial: 2,
    etapas: [
      {
        nome: 'Geração de oportunidades',
        olhamos: ['Volume de oportunidades por procedimento', 'Custo por oportunidade', 'Origem: Google, Meta, orgânico e indicação'],
        porque: 'Previsibilidade começa na origem: sem saber de onde vem o paciente, não dá para repetir o que funciona.',
        ajustamos: ['Campanhas para procedimentos de alto valor', 'Atração de pacientes de maior ticket'],
      },
      {
        nome: 'Primeiro atendimento',
        olhamos: ['Tempo de primeira resposta', 'Contatos que chegam fora do horário', 'Taxa de contato'],
        porque: 'Lead que espera esfria. A intenção do paciente é maior nos primeiros minutos.',
        ajustamos: ['Primeiro contato rápido e humanizado', 'Qualificação e classificação de cada lead'],
      },
      {
        nome: 'Taxa de agendamento',
        olhamos: ['Conversas que viram avaliação', 'Motivos de não agendamento', 'Leads sem próximo passo'],
        porque: 'Responder o preço sem investigar a necessidade é o vazamento mais comum.',
        ajustamos: ['Condução até o momento da avaliação', 'Follow-up em D+1, D+3 e D+7'],
      },
      {
        nome: 'Taxa de comparecimento',
        olhamos: ['Taxa de faltas', 'Cancelamentos e buracos na agenda', 'Reagendamentos'],
        porque: 'Agenda cheia não é faturamento. Cadeira ocupada por quem aparece é.',
        ajustamos: ['Confirmação 24h antes e lembrete 3h antes', 'Recuperação estruturada de faltas'],
      },
      {
        nome: 'Avaliação e orçamento',
        olhamos: ['Orçamentos apresentados', 'Valor parado em orçamentos', 'Percepção de valor do paciente'],
        porque: 'Aqui quase todo o investimento já foi feito — perder o paciente agora custa mais caro.',
        ajustamos: ['Atendimento encantador e apresentação de valor', 'Condições de pagamento por procedimento'],
      },
      {
        nome: 'Taxa de fechamento',
        olhamos: ['Objeções: preço, medo, falta de urgência', 'Ticket médio', 'Motivos de perda registrados'],
        porque: 'Tratamento de alto valor não fecha na pressa. Fecha na confiança e na condição certa.',
        ajustamos: ['Follow-up pós-orçamento de D+1 a D+15', 'Quebra de objeções e negociação'],
      },
      {
        nome: 'Retenção',
        olhamos: ['Pacientes inativos', 'Orçamentos antigos não fechados', 'Indicações'],
        porque: 'Crescer não depende só de paciente novo. A base já é uma fonte de faturamento.',
        ajustamos: ['Campanhas de retorno e reativação', 'Programa de indicação'],
      },
    ],
  },
  equacao: {
    sobretitulo: 'A equação do faturamento',
    titulo: 'Dá para crescer sem dobrar os leads.',
    texto:
      'Faturamento = oportunidades × agendamento × comparecimento × fechamento × ticket. Melhorar as etapas do meio muda o resultado final.',
    botao: { texto: 'Quero um diagnóstico do meu funil', href: links.diagnostico },
    colunas: ['Indicador', 'Hoje', 'Otimizado'],
    linhas: [
      ['Oportunidades', '200', '200'],
      ['Agendamento', '50%', '60%'],
      ['Comparecimento', '80%', '85%'],
      ['Fechamento', '40%', '50%'],
      ['Ticket médio', 'R$ 2.500', 'R$ 2.700'],
    ],
    total: ['Faturamento', 'R$ 80.000', 'R$ 137.700'],
    nota: 'Exemplo ilustrativo',
  },
};

// ---------------------------------------------------------------------
// 8. Cases e vídeos (âncora "Resultados")
// ---------------------------------------------------------------------
export const cases = {
  sobretitulo: 'Resultados',
  titulo: 'Clínicas que trocaram aposta por previsibilidade',
  anterior: 'Case anterior',
  proximo: 'Próximo case',
  irPara: 'Ver case',
  rotulosFunil: ['Leads', 'Agendamentos', 'Comparecimentos', 'Fechamentos'],
  rotuloFaturamento: 'Faturamento',
  colagem: ['[PRINT LANDING PAGE]', '[CRIATIVO ANÚNCIO]', '[PRINT DASHBOARD]'],
  itens: [
    {
      logo: '[LOGO CLÍNICA]',
      especialidade: 'Implantes e reabilitação oral',
      titulo: 'De R$ 55 mil para R$ 115 mil/mês em 3 meses.',
      resumo:
        'Clínica com 3 dentistas e faturamento estagnado. Ajustamos a segmentação, otimizamos o site, organizamos o CRM com follow-up automático e implantamos o Rise Connect no pré-atendimento. Resultado: uma nova cadeira aberta.',
      // Números do mini-funil pendentes
      funil: ['[—]', '[—]', '[—]', '[—]'],
      faturamento: 'R$ 115 mil/mês',
    },
    {
      logo: '[LOGO CLÍNICA 2]',
      especialidade: '[ESPECIALIDADE]',
      titulo: '[TÍTULO DO CASE 2]',
      resumo: '[Resumo: cenário antes, gargalos encontrados, o que foi entregue e o resultado.]',
      funil: ['[—]', '[—]', '[—]', '[—]'],
      faturamento: 'R$ [—]',
    },
    {
      logo: '[LOGO CLÍNICA 3]',
      especialidade: '[ESPECIALIDADE]',
      titulo: '[TÍTULO DO CASE 3]',
      resumo: '[Resumo: cenário antes, gargalos encontrados, o que foi entregue e o resultado.]',
      funil: ['[—]', '[—]', '[—]', '[—]'],
      faturamento: 'R$ [—]',
    },
  ],
  videosTitulo: 'Quem viveu o processo conta',
  // Quando os vídeos chegarem, preencher "src" (arquivo .mp4 em public/videos/)
  videos: [
    { especialidade: 'Implantes e reabilitação oral', autor: '[NOME DO DENTISTA · CLÍNICA]', capa: '[VÍDEO 9:16 · CAPA]', src: '' },
    { especialidade: 'Harmonização facial', autor: '[NOME DA DENTISTA · CLÍNICA]', capa: '[VÍDEO 9:16 · CAPA]', src: '' },
  ],
  assistir: 'Assistir depoimento',
  videoPendente: '[Vídeo ainda não disponível]',
};

// ---------------------------------------------------------------------
// 9. Para quem é + o que assumimos
// ---------------------------------------------------------------------
export const paraQuem = {
  titulo: 'Sem promessa. Sem piloto automático. Previsibilidade com método.',
  subtitulo:
    'Nem toda clínica precisa da Rise Up. Se você já contratou agência e se frustrou, veja se faz sentido para você.',
  sim: {
    titulo: 'É para você se…',
    itens: [
      'Sua clínica fatura acima de R$ 70 mil/mês e quer crescer com previsibilidade.',
      'Trabalha com procedimentos de alto valor.',
      'Quer tratar atendimento e conversão como parte do jogo.',
      'Aceita processo: medir → corrigir → escalar.',
      'Quer crescer sem contratar gente só para apagar incêndio.',
    ],
  },
  nao: {
    titulo: 'Não é para você se…',
    itens: [
      'Procura promessa de “agenda cheia em X dias”.',
      'Quer só “rodar anúncio” sem olhar atendimento e venda.',
      'Espera um chatbot genérico que resolva tudo sozinho.',
      'Quer terceirizar tudo sem mudar nada na clínica.',
      'Troca de estratégia toda semana.',
    ],
  },
  assumimosTitulo: 'O que a Rise Up assume com você',
  assumimos: [
    'A responsabilidade do anúncio até o tratamento fechado.',
    'O diagnóstico de onde o paciente escapa no funil.',
    'A receita por origem, não só métricas de mídia.',
    'Processo, roteiro e treinamento para a sua equipe.',
  ],
};

// ---------------------------------------------------------------------
// 10. Diagnóstico + formulário
// ---------------------------------------------------------------------
export const diagnostico = {
  sobretitulo: 'Diagnóstico gratuito',
  titulo: 'Se você se encaixa, peça seu diagnóstico.',
  texto:
    'Em uma reunião, mapeamos seu funil — de leads a fechamentos — e mostramos onde está o vazamento e o que corrigir primeiro.',
  analisamosTitulo: 'O que analisamos',
  analisamos: [
    'Quantos leads entram e de onde vêm',
    'Tempo de resposta e taxa de agendamento',
    'Comparecimento, faltas e cancelamentos',
    'Orçamentos apresentados e parados',
    'Taxa de fechamento e ticket médio',
    'Receita por origem e base inativa',
  ],
  formulario: {
    titulo: 'Solicite seu diagnóstico',
    etapa: (n: number) => `Etapa ${n} de 2`,
    concluido: 'Concluído',
    selecione: 'Selecione',
    etapa1: [
      { nome: 'nome', rotulo: 'Nome', tipo: 'text', placeholder: 'Seu nome…', autocomplete: 'name' },
      { nome: 'whatsapp', rotulo: 'WhatsApp', tipo: 'tel', placeholder: '(00) 00000-0000', autocomplete: 'tel' },
      { nome: 'clinica', rotulo: 'Nome da clínica', tipo: 'text', placeholder: 'Nome da clínica…', autocomplete: 'organization' },
      { nome: 'cidade', rotulo: 'Cidade/UF', tipo: 'text', placeholder: 'Ex.: Campinas/SP', autocomplete: 'address-level2' },
      { nome: 'instagram', rotulo: 'Instagram da clínica', tipo: 'text', placeholder: '@suaclinica', autocomplete: 'off' },
    ],
    continuar: 'Continuar',
    etapa2: [
      { nome: 'faturamento', rotulo: 'Faturamento mensal da clínica', opcoes: ['Até R$ 50 mil', 'R$ 50 a 70 mil', 'R$ 70 a 100 mil', 'R$ 100 a 150 mil', 'R$ 150 a 200 mil', 'Acima de R$ 200 mil'] },
      { nome: 'leads', rotulo: 'Leads por mês', opcoes: ['Até 50', '50 a 150', '150 a 300', 'Mais de 300', 'Não sei'] },
      { nome: 'responde', rotulo: 'Quem responde os leads', opcoes: ['Recepção', 'O dono', 'Equipe comercial', 'Ninguém definido'] },
      { nome: 'gargalo', rotulo: 'Maior gargalo hoje', opcoes: ['Atendimento', 'Agenda', 'Fechamento', 'Gestão'] },
      { nome: 'anuncios', rotulo: 'Investe em anúncios?', opcoes: ['Sim, com agência', 'Sim, internamente', 'Não'] },
    ],
    lgpd: 'Autorizo a Rise Up a usar meus dados para contato sobre o diagnóstico, conforme a LGPD.',
    enviar: 'Quero meu diagnóstico gratuito',
    voltar: 'Voltar',
    confirmacaoTitulo: 'Recebemos sua solicitação!',
    confirmacaoTexto: 'Retornamos em até [PRAZO] pelo WhatsApp para agendar seu diagnóstico.',
    verDeNovo: 'Ver o formulário de novo',
  },
};

// ---------------------------------------------------------------------
// 11. FAQ + rodapé
// ---------------------------------------------------------------------
export const faq = {
  sobretitulo: 'Perguntas que a gente ouve toda semana',
  titulo: 'Respostas diretas — sem promessa e sem enrolação.',
  perguntas: [
    {
      q: 'Já tentei agência e não deu certo. Por que seria diferente?',
      a: 'Porque a gente não para no lead. Acompanhamos atendimento, agendamento, comparecimento e fechamento — e mostramos em qual etapa está a perda.',
    },
    {
      q: 'Vocês garantem resultado?',
      a: 'Não prometemos número. Garantimos método: medir cada etapa, corrigir o gargalo e escalar o que funciona, com relatório claro do que foi feito.',
    },
    {
      q: 'Eu já gero lead. Só não agenda, não comparece ou não fecha.',
      a: 'Então o maior ganho está no meio do funil. Organizamos atendimento, confirmação e follow-up para aproveitar a demanda que você já paga — sem aumentar o investimento em anúncios.',
    },
    {
      q: 'O Rise Connect substitui minha recepcionista?',
      a: 'Não. Ele tira da recepção o atendimento de quem não vai fechar e entrega só os leads quentes, com contexto. Sua equipe foca no que precisa de pessoa.',
    },
    {
      q: 'Preciso aumentar o investimento em anúncios?',
      a: 'Nem sempre. Muitas vezes dá para crescer melhorando as taxas do funil antes de aumentar a verba.',
    },
    {
      q: 'Em quanto tempo a operação fica mais previsível?',
      a: 'Depende do ponto de partida da clínica. No diagnóstico, mostramos o que dá para corrigir primeiro e em que ordem.',
    },
  ],
};

export const rodape = {
  links: cabecalho.menu,
  direitos: '© 2026 Rise Up Odonto. Todos os direitos reservados.',
};
