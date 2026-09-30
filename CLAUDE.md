# CLAUDE.md — Landing Page Rise Up Odonto

Regras do projeto. Leia este arquivo inteiro antes de qualquer tarefa. Vale para todas as sessões (Vinicius e Felipe).

**Idioma:** responda, comente o código, escreva commits e descrições de pull request sempre em **português do Brasil**. Quando precisar citar algo em inglês (comando, botão, mensagem de erro), traduza e explique em português.

---

## 1. O projeto

- Landing page da **Rise Up Odonto**, agência que entrega um **sistema de captação, conversão e retenção** para clínicas odontológicas.
- Público: donos de clínicas que faturam **acima de R$ 70 mil/mês** e trabalham com **procedimentos de alto valor**.
- Objetivo da página: levar o visitante a pedir o **diagnóstico gratuito** (formulário).
- A página evolui em camadas: **dor → solução → oferta**. Cada seção aprofunda a anterior.
- A **Rise Up é a protagonista**. O **Rise Connect** é uma das soluções dela (pilar de conversão comercial), não o centro da página.

Conteúdo completo, seção por seção: `briefing.md`.
Referência visual (wireframe aprovado): pasta `wireframe/`.

---

## 2. Tecnologia

- **Astro** (site estático) + **Tailwind CSS**.
- Hospedagem: **Vercel**, projeto `riseup-lp`, conectado ao repositório GitHub `vini10silvagama-blip/riseup-lp`. Cada push na `main` publica o site; cada pull request gera um link de prévia.
- Sem domínio próprio por enquanto (usar o endereço da Vercel).
- Sem frameworks de interface pesados (sem React/Vue) — interações simples (abas, carrossel, FAQ, formulário em etapas) em JavaScript leve dentro dos componentes Astro.
- Manter um `vercel.json` com `framework: astro`, `buildCommand: npm run build` e `outputDirectory: dist`.

---

## 3. Organização do código

```
src/
  content/conteudo.ts   ← TODOS os textos da página (um objeto por seção)
  components/           ← um componente .astro por seção (Hero.astro, Problema.astro, ...)
  components/ui/        ← peças reutilizáveis (Botao, Card, Tag, Icone)
  layouts/Base.astro    ← <head>, fontes, metatags
  pages/index.astro     ← monta as seções na ordem do briefing
public/
  img/                  ← logos, fotos, prints (placeholders até chegarem os arquivos reais)
```

- **Nenhum texto de copy fica escrito dentro dos componentes.** Tudo vem de `src/content/conteudo.ts`, para que qualquer sócio altere a copy sem mexer em layout.
- Nomes de arquivos, componentes e variáveis em português, curtos e claros.

---

## 4. Identidade visual

**Logo:** `public/img/logo-riseup.png` (fundo claro) e `public/img/logo-riseup-branco.png` (fundo escuro). Originais na pasta `LOGO/`.

**Cores (tokens no Tailwind):**

| Token | Hex | Uso |
|---|---|---|
| `branco` | #FFFFFF | Cor principal, fundo da maior parte da página |
| `ciano` | #29D9D5 | Destaques, botões principais, gráficos, palavras em destaque em títulos grandes |
| `ciano-escuro` | #0B7A77 | Textos pequenos em destaque, links e sobretítulos (o ciano puro não tem contraste suficiente em texto pequeno sobre branco) |
| `preto` | #141414 | Texto principal e blocos escuros de contraste |
| `cinza-claro` | #F4F7F7 | Fundo de seções alternadas e cards |
| `cinza-texto` | #4A5252 | Texto de apoio |
| `borda` | #E3E9E9 | Bordas e divisórias |

**Tipografia:**
- Títulos: **Poppins, peso 500 (médio)** — nunca negrito nos títulos; a leitura deve ser leve.
- Texto e interface: **Archivo** (400 a 700).
- Palavras em destaque nos títulos: mudar a **cor** para ciano. Nunca usar marca-texto/fundo atrás da palavra.

**Estilo:**
- Minimalista e premium, fundo branco predominante, blocos em #141414 para contraste.
- Cantos arredondados: cards 20px, botões em pílula (99px).
- Ícones em traço (stroke), nunca emoji.
- Círculos concêntricos em ciano suave como elemento gráfico do hero.

---

## 5. Linguagem (obrigatório)

**Usar sempre:**
- "sistema de captação, conversão e retenção"
- "clínicas acima de R$ 70 mil/mês"
- "procedimentos de alto valor"
- "faturamento previsível" / "previsibilidade"

**Nunca usar:**
- "atendimento com IA", "atendimento por IA", "robô", "chatbot" como elogio. Fale do **que** fazemos, não de **como** fazemos.
- Nomes de procedimentos específicos na copy geral (implante, Invisalign, lentes) — exceto nos cases e no exemplo do lead "João".
- Promessa de número ou prazo ("agenda cheia em X dias"), superlativos e urgência artificial.

**Tom de voz:** direto, consultivo, provocador quando necessário, com autoridade no nicho e orientado a resultado.

**Rise Connect:** atende, qualifica, classifica (quente, morno, frio), registra no CRM e direciona à equipe só os leads prontos para a avaliação; nutre mornos e frios; reduz faltas, cancelamentos e buracos na agenda. Segue as regras da clínica, o **Código de Ética Odontológica do CFO** e a **LGPD** (isso aparece apenas na seção do Rise Connect).

---

## 6. Regras de construção

- **Celular primeiro.** O wireframe só mostra o computador (1440px); adapte cada seção para 390px com cuidado. Revise sempre em 390px e 1440px.
- **Acessibilidade:** contraste mínimo 4.5:1 em texto, botões reais (`<button>`, `<a>`), `<label>` em todos os campos, `alt` em imagens, navegação por teclado.
- **Desempenho:** imagens otimizadas (componente de imagem do Astro), vídeos carregam só no clique, fontes com `display=swap`.
- **Placeholders:** imagens, fotos, logos de clientes, prints e vídeos que ainda não existem entram como caixas identificadas (ex.: `[FOTO FELIPE – PNG sem fundo]`). Nunca inventar fotos de banco de imagens.
- **Formulário:** apenas visual por enquanto (2 etapas + tela de confirmação). **Não enviar para nenhum serviço** até os sócios definirem o destino.
- **Dados:** nunca inventar números de clientes. O único case real é R$ 55 mil → R$ 115 mil/mês em 3 meses. O painel do dashboard e a equação do faturamento são marcados como "dados ilustrativos"/"exemplo ilustrativo".
- **SEO básico:** título, descrição, Open Graph e `lang="pt-BR"`.

**Skills disponíveis neste projeto** (`.claude/skills`):
- `frontend-design` — use ao construir ou refinar qualquer seção.
- `web-design-guidelines` — use para revisar acessibilidade e boas práticas ao final de cada etapa.
- `rise-up-design` — use em qualquer ajuste de design, animação ou efeitos visuais (referência: odontorise.com, adaptada à identidade clara da Rise Up).

---

## 7. Fluxo de trabalho no GitHub (Vinicius e Felipe)

- Trabalhamos **direto na `main`**, sem branches e sem pull requests. Cada push na `main` publica o site automaticamente na Vercel (riseup-lp-two.vercel.app).
- **Antes de qualquer tarefa:** `git checkout main && git pull` — para pegar o que o outro sócio publicou.
- **Ao terminar:** rode `npm run build` (se der erro, corrija antes de enviar), confira em 390px e 1440px, faça commit com mensagem em português explicando o que mudou e `git push`.
- Se o push for recusado porque o outro sócio publicou antes: `git pull --rebase`, resolva conflitos se houver, rode o build de novo e faça o push.
- Não reescreva o histórico (`git push --force` é proibido).
- A pasta `_legado/` (LP antiga e referências antigas) fica só no computador e não sobe para o repositório.
