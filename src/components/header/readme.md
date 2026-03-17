# Header Component

Um componente de cabeçalho responsivo para React com suporte a scroll detection, navegação dinâmica e botão de CTA.

---

## Arquivos

| Arquivo | Descrição |
|---|---|
| `Header.jsx` | Componente principal do cabeçalho |
| `headerscroll.js` | Hook customizado para detectar scroll |
| `style.css` | Estilos do componente |

---

## Hook: `headerscroll`

Hook customizado que detecta se o usuário rolou a página além de um determinado offset.

### Uso

```javascript
import { headerscroll } from "./headerscroll.js";

const scrolled = headerscroll(60); // retorna true/false
```

### Parâmetros

| Parâmetro | Tipo | Padrão | Descrição |
|---|---|---|---|
| `offset` | `number` | `60` | Valor em pixels a partir do qual `scrolled` se torna `true` |

### Retorno

Retorna um `boolean`:
- `false` — usuário está no topo da página
- `true` — usuário rolou além do offset definido

---

## Componente: `Header`

Componente de cabeçalho que muda de estilo ao rolar a página.

### Uso

```jsx
import Header from "./Header";

// Uso básico
<Header />

// Com logo oculto
<Header hideLogo={true} />

// Com botão de CTA
<Header ctaLabel="Comprar Agora" onCtaClick={() => console.log("clicou!")} />
```

### Props

| Prop | Tipo | Padrão | Descrição |
|---|---|---|---|
| `hideLogo` | `boolean` | `false` | Oculta o logo quando `true` |
| `ctaLabel` | `string` | `undefined` | Texto do botão de ação. Se não fornecido, o botão não é renderizado |
| `onCtaClick` | `function` | `undefined` | Callback chamado ao clicar no botão de CTA |

### Comportamento de Scroll

O componente aplica automaticamente a classe `header__container--scrolled` quando o usuário rola mais de **60px**, permitindo estilização diferenciada via CSS.

---

## Links de Navegação

Os links do menu são definidos no array `NAV_LINKS` dentro do `Header.jsx`:

```javascript
const NAV_LINKS = [
  { label: "Sobre", href: "/sobre" },
  { label: "Música", href: "/musica" },
  { label: "Vídeos", href: "/videos" },
  { label: "Shows", href: "/shows" },
  { label: "Loja", href: "/loja" },
];
```

Para adicionar ou remover links, edite diretamente esse array.

---

## Classes CSS

| Classe | Elemento |
|---|---|
| `.header__container` | Elemento `<header>` raiz |
| `.header__container--scrolled` | Modificador aplicado após o scroll |
| `.header__inner` | Wrapper interno |
| `.header__logo` | Container do logo |
| `.header__logoText` | Texto do logo |
| `.header__navigation` | Elemento `<nav>` |
| `.header__menu` | Lista `<ul>` do menu |
| `.header__menuItem` | Cada item `<li>` do menu |
| `.header__link` | Links `<a>` do menu |
| `.header__ctaButton` | Botão de CTA |

---

## Dependências

- React `useState` e `useEffect`
- Nenhuma biblioteca externa necessária
