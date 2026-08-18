# NEX — site institucional minimalista

Reconstrução do portfólio como site de marca **NEX**, com páginas separadas, visual claro/minimalista inspirado na landing "Computer Science" e paleta índigo.

## Direção visual

- Base clara (`#f5f5ff` / branco), texto quase-preto (`#0a0a1a`), superfícies em `#141432` só para o header imersivo e o rodapé.
- Accent índigo `#4f46e5` em botões, links, detalhes de traço fino.
- Muito espaço em branco, cantos suaves, cards planos com borda de 1px, tipografia grande e leve.
- Meu palpite: a referência clara/lilás funciona melhor com um **header dark imersivo no INÍCIO** e páginas internas claras — dá o contraste da referência que você gostou sem perder o ar corporativo.

## Logo

Das imagens enviadas, o **ícone de engrenagem com globo e circuitos** (`tecnologia_3`) é o que melhor comunica "tecnologia + dados + alcance". Será recolorido em índigo monocromático e usado com o wordmark **NEX** ao lado. As letras "ana.nascimento" saem do header.

## Estrutura de páginas (nomes em maiúsculo)

```text
/           INÍCIO    header interativo tela cheia + destaques curtos
/sobre      SOBRE     foto profissional + bio de presidente/fundadora
/projetos   PROJETOS  grid minimalista dos projetos existentes
/contato    CONTATO   formulário + WhatsApp + Instagram
```

Cada página é uma rota real (URL própria, navegação no topo, sem scroll único).

## INÍCIO — header interativo

Canvas de **rede de partículas que reage ao mouse**: pontos índigo conectados por linhas finas, ocupando 100% da altura da tela, com o wordmark NEX e uma frase de posicionamento sobrepostos. Desativa a animação em `prefers-reduced-motion` e reduz a densidade em telas pequenas.

## SOBRE

Layout editorial em duas colunas: sua foto (a versão atual sem fundo, apresentada em moldura clara com sombra suave, enquadramento retrato) + texto de apresentação como presidente da NEX, seguido de valores/atuação e da trajetória em lista discreta.

## Detalhes técnicos

- Instalar `react-router-dom` e criar rotas em `src/pages/`, com `Layout` (header + rodapé) compartilhado.
- Substituir `src/App.tsx` pelo `RouterProvider`; componentes atuais de `src/components/portfolio/` são reescritos/enxugados para o novo estilo.
- Tokens de cor atualizados em `src/styles.css` (modo claro como padrão, remoção do dark forçado).
- Título, meta description e og tags atualizados para NEX em `index.html`.
- Logo importada via Lovable Assets a partir do upload, recolorida em índigo.

## Perguntas em aberto (posso assumir defaults)

- Frase de posicionamento da NEX no hero — default: "Transformando dados em decisões".
- Manter os 7 projetos atuais como estão — default: sim.
