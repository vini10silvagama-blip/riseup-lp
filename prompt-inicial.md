# Prompt inicial para o Claude Code

Como usar: abra o terminal na pasta `LP - RISE UP`, rode `claude` e cole o texto abaixo (tudo entre as linhas).

---

Vamos construir a nova landing page da Rise Up Odonto.

Antes de começar, leia com atenção:
1. `CLAUDE.md` — regras do projeto (tecnologia, identidade visual, linguagem obrigatória e proibida, fluxo no GitHub).
2. `briefing.md` — todas as seções na ordem, com a copy final aprovada.
3. A pasta `wireframe/` — referência visual de layout de cada seção (leia o `LEIA-ME.md` dela).

Use a skill `frontend-design` durante a construção e a skill `web-design-guidelines` na revisão final.

Tarefa:
1. Crie uma branch `secao/nova-lp` a partir da `main`.
2. Monte o projeto **Astro + Tailwind** na raiz desta pasta, com a organização de pastas do `CLAUDE.md` (textos em `src/content/conteudo.ts`, um componente por seção). Configure as cores e fontes como tokens do Tailwind. Crie o `vercel.json` indicado no `CLAUDE.md`.
3. Copie os logos da pasta `LOGO/` para `public/img/` com os nomes do `CLAUDE.md`.
4. Construa as seções **uma de cada vez**, na ordem do briefing, pensando primeiro no celular (390px) e depois no computador (1440px). Depois de cada seção, rode o site localmente e confira as duas larguras antes de passar para a próxima.
5. Implemente as interações em JavaScript leve: menu do celular, funil clicável, carrossel de cases, formulário em 2 etapas (sem envio real) e FAQ em acordeão.
6. No final, rode a revisão com `web-design-guidelines`, corrija o que aparecer, rode `npm run build` para garantir que compila e me mostre um resumo do que foi feito e do que ficou como placeholder.
7. Faça o commit (mensagem em português), envie a branch para o GitHub e abra um pull request para a `main` com a descrição em português. **Não faça merge** — eu e o Felipe vamos revisar pelo link de prévia da Vercel.

Se algo do briefing estiver ambíguo, pergunte antes de decidir. Me explique em português qualquer comando ou mensagem em inglês.

---

## Depois do primeiro pull request

- **Vercel:** como o projeto antes era um HTML simples, confira em vercel.com → projeto `riseup-lp` → Settings → Build and Deployment ("Configurações → Build e publicação") se o **Framework Preset** ("tipo de projeto") está como **Astro**. O `vercel.json` já cuida disso, mas vale conferir no primeiro deploy.
- **Felipe:** adicione-o como colaborador em github.com/vini10silvagama-blip/riseup-lp → Settings → Collaborators ("Configurações → Colaboradores") → Add people ("Adicionar pessoas"). Ele aceita o convite pelo e-mail e clona o repositório no computador dele.

## Prompt para ajustes do dia a dia (Vinicius ou Felipe)

```
Leia o CLAUDE.md. Atualize a main (git checkout main && git pull), crie uma branch ajuste/<nome-curto> e faça o seguinte: <descreva o ajuste>. Confira no celular e no computador, rode npm run build, faça commit em português, envie e abra um pull request. Não faça merge.
```
