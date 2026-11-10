# Brasília Turismo

Site institucional interativo sobre o turismo em Brasília, feito como projeto final da disciplina de **Desenvolvimento de Interfaces** (2/2026), do professor Dr. Felipe Batista da Silva.

O site apresenta pontos turísticos da capital (arquitetura, natureza e lazer) de forma simples e acessível, com busca, filtros por categoria, formulário de contato e modo claro/escuro.

- **Aluno:** Bernardo Rizzone Sousa Vale de Araujo
- **RA:** 22651897
- **Site publicado:** 
- **Repositório:** 

---

## Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura das páginas |
| CSS3 | Paleta de cores, modo escuro e ajustes visuais |
| JavaScript | Tema, tamanho da fonte, filtro de atrativos, validação e pausa do carrossel |
| Bootstrap 5.3.3 (CDN) | Menu responsivo, grid, cartões, carrossel e formulários |
| Git e GitHub | Controle de versão e publicação |
| VS Code + Live Server | Desenvolvimento e testes |

---

## Estrutura de pastas

```
turismo-brasilia/
├── index.html        # Página inicial (carrossel, cartões e destaques)
├── atrativos.html    # Pesquisa e filtro por categoria
├── contato.html      # Formulário de contato
├── login.html        # Página de login (simulada)
├── style.css         # Cores, modo escuro e ajustes do Bootstrap
├── script.js         # Comportamentos do site
├── img/              # Fotos usadas no site
└── README.md
```

---

## Páginas e recursos

- **Início:** carrossel com 3 slides (com botão de pausar), cartões de destaque e cartões explicativos sobre Brasília.
- **Atrativos:** campo de pesquisa por nome e abas de categorias (Todos, Arquitetura, Natureza, Cultura e lazer), com 8 cartões.
- **Contato:** formulário com nome, e-mail, interesse e mensagem, com validação e mensagens de erro claras.
- **Entrar:** formulário de login com validação (apenas demonstração, sem servidor).
- **Em todas as páginas:** menu responsivo, rodapé e barra de acessibilidade (modo claro/escuro, aumentar e diminuir a fonte).

---

## Paleta de cores

As cores foram inspiradas na paisagem de Brasília: a terra do Cerrado, o verde seco da vegetação e o tom de areia do Planalto Central.

### Modo claro

| Função | Cor | Hex |
|---|---|---|
| Fundo principal | Areia Suave | `#FDFBF7` |
| Texto | Marrom Café | `#3F2204` |
| Destaque (títulos, links, botões principais) | Terra Cota / Siena | `#9A3412` |
| Ação (botões CTA) | Verde Oliva | `#166534` |

### Modo escuro

| Função | Cor | Hex |
|---|---|---|
| Fundo | Marrom escuro | `#1C1917` |
| Superfície (cartões) | Marrom médio | `#292524` |
| Texto | Areia Suave | `#FDFBF7` |
| Destaque | Laranja claro | `#FB923C` |
| Ação | Verde claro | `#4ADE80` |

No modo escuro, as cores de destaque foram clareadas porque o Terra Cota e o Oliva originais não têm contraste suficiente sobre fundo escuro (cerca de 2,4:1).

---

## Acessibilidade (WCAG)

Razões de contraste calculadas para as combinações usadas:

| Combinação | Razão | Nível WCAG |
|---|---|---|
| Texto Marrom Café sobre Areia | 14,09:1 | AAA |
| Terra Cota sobre Areia | 7,07:1 | AAA |
| Oliva sobre Areia | 6,90:1 | AA |
| Branco sobre Terra Cota (botão) | 7,31:1 | AAA |
| Branco sobre Oliva (botão) | 7,13:1 | AAA |
| Texto Areia sobre fundo escuro | 16,92:1 | AAA |
| Laranja claro sobre fundo escuro | 7,73:1 | AAA |
| Verde claro sobre fundo escuro | 10,04:1 | AAA |

Boas práticas aplicadas:

- Link "Pular para o conteúdo" para quem navega pelo teclado.
- Foco visível em todos os elementos interativos.
- Botão de pausar o carrossel (critério 2.2.2).
- Todo campo de formulário tem `label`, e os erros são descritos em texto, sem depender só da cor (critério 1.4.1).
- Bordas dos campos escurecidas para ter contraste mínimo de 3:1 (critério 1.4.11).
- Fonte ajustável de 80% a 150% e preferências salvas no navegador.
- Imagens com texto alternativo (`alt`).
- Estrutura de títulos (`h1`, `h2`, `h3`) em ordem e uso de `lang="pt-BR"`.

Ferramentas usadas para conferir: WebAIM Contrast Checker e o inspetor do Chrome DevTools.

---

## Passo a passo da construção

1. **Planejamento:** escolhi o tema (turismo em Brasília), defini as páginas e listei os recursos exigidos no enunciado.
2. **Paleta de cores:** escolhi as cores inspiradas no Cerrado e calculei o contraste de cada combinação. Criei uma segunda paleta, mais clara, para o modo escuro.
3. **Estrutura HTML:** criei as 4 páginas usando o Bootstrap (menu, grid e cartões) e repeti o cabeçalho e o rodapé em todas.
4. **CSS:** defini as cores como variáveis (`--terra`, `--oliva`, `--fundo`...) e sobrescrevi as cores do Bootstrap. O modo escuro usa o `data-bs-theme="dark"`, que o Bootstrap já oferece.
5. **Carrossel:** usei o componente do Bootstrap e acrescentei um botão de pausar em JavaScript.
6. **Pesquisa e abas:** o JavaScript percorre os cartões e esconde os que não combinam com o texto digitado ou com a categoria escolhida.
7. **Formulários:** usei a validação do Bootstrap (`needs-validation`) com `checkValidity()`, mostrando mensagens de erro claras.
8. **Acessibilidade:** adicionei os botões de tema e tamanho da fonte, que salvam a escolha no `localStorage`.
9. **Imagens:** adicionei as fotos com `object-fit: cover` e `aspect-ratio`, para manter a proporção sem deformar.
10. **Testes:** testei no computador e no celular, com teclado e nos dois modos de cor, e conferi o contraste com ferramentas.
11. **Publicação:** versionei com commits pequenos no GitHub e publiquei no GitHub Pages.

---

## Como executar

1. Clone o repositório:
   ```bash
   git clone LINK_DO_REPOSITORIO
   ```
2. Abra a pasta no VS Code.
3. Use a extensão **Live Server** no `index.html` (ou abra o arquivo direto no navegador).
4. É preciso ter internet, porque o Bootstrap é carregado por CDN.

---

## Controle de versão

O projeto foi versionado com Git, com commits pequenos a cada etapa (estrutura, paleta, carrossel, filtros, formulários, acessibilidade e imagens). O histórico está na aba **Commits** do repositório.

---

## Créditos e referências

**Imagens:** liste aqui cada foto, o autor e a licença.

| Imagem | Autor | Fonte / Licença |
|---|---|---|
| catedral.jpg | | |
| parque-nacional.jpg | | |

**Referências:**

- Bootstrap 5.3. Documentação oficial: https://getbootstrap.com/docs/5.3
- W3C. WCAG 2.1: https://www.w3.org/TR/WCAG21/
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- MDN Web Docs: https://developer.mozilla.org/pt-BR/
- Nielsen Norman Group. 10 Usability Heuristics: https://www.nngroup.com/articles/ten-usability-heuristics/
- ADICIONE AQUI as demais referências que você usar.

**Uso de IA:** a IA foi usada para auxiliar na estrutura do código, na análise de contraste e na revisão. A redação da Parte C do relatório foi escrita sem uso de IA. (Claude e Gemini.)

---

## Licença

Projeto acadêmico, sem fins comerciais.
