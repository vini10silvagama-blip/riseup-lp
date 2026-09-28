# Wireframe — referência visual

Estes 3 arquivos são o wireframe aprovado da landing page, exportado do canvas de design. Leia-os de cima para baixo, na ordem:

1. `parte-1.dc.html` — Cabeçalho, Hero, O problema real, O que fazemos, Pilares
2. `parte-2.dc.html` — Como tudo se conecta, Rise Connect, Dashboard + funil + equação
3. `parte-3.dc.html` — Cases, Para quem é, Diagnóstico + formulário, FAQ, Rodapé

**Como usar (para o Claude Code):**
- São **referência de layout, proporções, cores, espaçamentos e hierarquia**, não código para copiar.
- Os estilos estão inline no HTML. Tags como `<x-dc>`, `<helmet>`, `<sc-for>`, `<sc-if>` e o `<script type="text/x-dc">` são do editor de design e **não devem ir para o site**. Os dados das partes interativas (etapas do funil, cases, FAQ) estão nos `var STAGES`, `CASES` e `FAQS` do script de cada arquivo.
- Os textos oficiais estão no `briefing.md`. Se houver diferença, vale o briefing.
- O wireframe só tem a versão de computador (1440px). A versão de celular deve ser criada seguindo as regras do `CLAUDE.md`.
