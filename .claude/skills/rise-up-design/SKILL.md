---
name: rise-up-design
description: Use ao otimizar o design, a animação ou os efeitos visuais de qualquer página da Rise Up Odonto (landing page, subpáginas). Traduz a linguagem visual do odontorise.com para a identidade clara da Rise Up, sem mudar copy nem estrutura.
---

# Rise Up — direção de design e efeitos

Responda sempre em português do Brasil e explique em português qualquer termo ou mensagem em inglês.

Esta skill complementa a `frontend-design` e o `CLAUDE.md`. O `CLAUDE.md` define cores, fontes e linguagem; esta skill define **como dar acabamento premium e movimento** sem sair da proposta.

## Referência

O site **odontorise.com** é a referência de acabamento. Os prints estão em `referencias/odontorise-1.png` a `odontorise-6.png` — abra-os antes de começar.

Leia a referência como **linguagem visual**, nunca como molde:
- O odontorise é escuro com verde neon. A Rise Up é **clara**: fundo branco predominante, #141414 só em blocos de contraste, ciano #29D9D5 como destaque.
- Não copie textos, logos, imagens nem a paleta deles.

## Regras que não mudam

- Não alterar copy (`src/content/conteudo.ts`), ordem das seções nem conteúdo do `briefing.md`.
- Não introduzir cores fora da paleta do `CLAUDE.md`. Gradientes só entre tons da paleta (ciano ↔ ciano-escuro ↔ branco/cinza-claro, ou #141414 ↔ #1E2020).
- Títulos continuam Poppins 500; destaque = cor, nunca marca-texto.
- Contraste mínimo 4.5:1 em texto. Ciano puro só em títulos grandes (≥ 32px), ícones, botões, bordas e gráficos.
- Sem bibliotecas pesadas de animação. Use CSS (transições, `@keyframes`, `animation-timeline` quando suportado) e `IntersectionObserver` em JS leve.
- Todo movimento respeita `@media (prefers-reduced-motion: reduce)` — nesse caso, sem animação, só o estado final.
- Desempenho: animar apenas `transform` e `opacity`; nada de sombras animadas em loop em muitos elementos; nenhuma perda no Lighthouse de desempenho.

## Tradução dos efeitos (odontorise → Rise Up)

| Elemento | No odontorise | Como aplicar na Rise Up |
|---|---|---|
| **Brilho (glow)** | Neon forte em botões, cards e funil | Sombra ciano suave e difusa: `0 10px 40px -10px rgba(41,217,213,.45)`. Só no botão principal, no card/aba ativa e no pilar 3. No hover o brilho aumenta levemente. |
| **Títulos em dois pesos** | Parte leve + parte forte | Poppins 400 no trecho de contexto e 500 na palavra-chave, ou a palavra-chave em ciano (títulos grandes) / ciano-escuro (títulos menores). |
| **Divisor de seção** | Ícone em quadrado com linha vertical acima do título | Linha vertical fina (1px, 48px, gradiente transparente → ciano-escuro) + ícone em traço dentro de um quadrado arredondado com borda ciano clara. Usar no topo das seções principais. |
| **Pilares com abas conectadas** | Etiqueta "Pilar N" ligada por uma linha no topo dos cards | Etiqueta em pílula ciano no topo de cada card, ligadas por uma linha horizontal fina que atravessa os 4 cards (no celular, vira linha vertical à esquerda). |
| **Funil com volume** | Funil 3D com brilho na etapa ativa | Funil em camadas (trapézios com `clip-path`) em gradiente ciano claro → ciano; a etapa ativa ganha cor sólida, brilho suave e transição de 300ms ao trocar de aba. |
| **Frase gigante** | "Aqui é onde a sua performance fica visível" vazando da tela | "Aqui a previsibilidade fica visível" em tamanho grande (clamp até ~96px), com leve deslocamento horizontal ao rolar (parallax sutil) ou revelação por máscara. |
| **Fotos dos sócios** | Retratos com molduras verdes deslocadas | Molduras em ciano e #141414 deslocadas atrás de cada foto, com leve flutuação (translateY de 6px, 6s, ease-in-out) nos cards de destaque ao redor. |
| **Colunas comparativas** | Verde × vermelho com brilho | "É para você" em gradiente ciano (#29D9D5 → #7FEAE7) e "Não é" em grafite (#141414 → #1E2020). **Sem vermelho.** Brilho suave só na coluna ciano. |
| **Faixa de logos** | Logos claros em linha | Logos em escala de cinza e 60% de opacidade; no hover ganham cor e opacidade total. No celular, faixa com rolagem automática lenta (marquee) pausável. |
| **CTA final em bloco** | Bloco verde com gradiente e brilho | Bloco ciano com gradiente sutil (#29D9D5 → #5FE3E0), cantos 28px e brilho suave; botão escuro por dentro. |
| **Cases** | Card escuro com logo em círculo e colagem de prints | Manter a estrutura; a colagem ganha leve rotação (−3° a 3°) e sombra; ao trocar de case, transição de fade + deslize. |

## Movimento (padrões)

- **Entrada ao rolar:** seções e cards surgem com `opacity 0 → 1` e `translateY(16px) → 0`, 500ms, `cubic-bezier(.2,.7,.2,1)`, com atraso escalonado de 60–80ms entre cards irmãos. Disparar uma vez só.
- **Números:** valores (R$ 55 mil → R$ 115 mil, KPIs do dashboard, equação) contam até o valor final em ~1,2s quando entram na tela.
- **Hover em cards:** `translateY(-4px)` + sombra um pouco maior, 200ms. Em telas de toque, sem hover.
- **Botões:** leve brilho que atravessa o botão principal (shimmer) no máximo a cada 6s, ou só no hover. Estado de foco visível em ciano-escuro.
- **Linha do tempo do vazamento:** a linha se desenha da esquerda para a direita ao entrar na tela e as gotas caem em sequência.
- **Cabeçalho:** ao rolar, ganha fundo branco com leve desfoque (`backdrop-filter: blur(12px)`) e borda inferior.

## Processo

1. Abra os prints de `referencias/` e o wireframe atual.
2. Trabalhe **uma seção por vez**, na ordem da página. Para cada uma: descreva em 2–3 linhas o que vai aplicar, aplique, confira em 390px e 1440px.
3. Centralize tokens de efeito (sombras, durações, curvas) em `src/styles/global.css` ou no Tailwind, para reutilizar.
4. Ao final: rode `web-design-guidelines`, confirme `prefers-reduced-motion`, rode `npm run build` e liste o que foi aplicado em cada seção.
5. Se um efeito da tabela prejudicar leitura, contraste ou desempenho, não aplique e explique o motivo no resumo.
