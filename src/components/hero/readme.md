# Hero Component

Seção principal da landing page do **AO TOPO!**  
Toda lógica está isolada em `hooks/useHero.js`. O `component.jsx` contém apenas estrutura e renderização.

---

## Estrutura de arquivos

```
src/
├── components/
│   └── hero/
│       ├── component.jsx
│       └── style.css
└── hooks/
    └── useHero.js
```

---

## Importação

```jsx
import Hero from '@/components/hero/component';
```

---

## Props

| Prop            | Tipo      | Padrão  | Descrição                                               |
|-----------------|-----------|---------|---------------------------------------------------------|
| `badge`         | `string`  | `null`  | Texto do badge superior (ex: "Guarulhos/SP")            |
| `title`         | `node`    | —       | Título principal. Aceita JSX para estilizar partes      |
| `subtitle`      | `string`  | `null`  | Linha secundária abaixo do título                       |
| `description`   | `string`  | `null`  | Texto descritivo menor                                  |
| `buttons`       | `array`   | `[]`    | Lista de botões (ver estrutura abaixo)                  |
| `socialLinks`   | `array`   | `[]`    | Lista de redes sociais (ver estrutura abaixo)           |
| `scrollTargetId`| `string`  | `null`  | ID do elemento alvo do scroll suave pela seta           |

### Estrutura de `buttons[]`

```js
{
  label: string,       // texto do botão
  variant: string,     // "filled" | "outlined" | "text" | "elevated" | "tonal"
  href: string,        // URL (opcional — renderiza como <a>)
  onClick: function,   // handler de clique (opcional)
  icon: node,          // ícone React/SVG (opcional)
}
```

### Estrutura de `socialLinks[]`

```js
{
  label: string,   // texto acessível (aria-label)
  href: string,    // URL da rede social
  icon: node,      // ícone React/SVG
}
```

---

## Exemplos de uso

### Uso completo (igual ao design)

```jsx
import Hero from '@/components/hero/component';
import { Instagram, Youtube, Music } from 'lucide-react';

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/aotopo", icon: <Instagram size={20} /> },
  { label: "YouTube",   href: "https://youtube.com/aotopo",   icon: <Youtube size={20} /> },
  { label: "TikTok",    href: "https://tiktok.com/@aotopo",   icon: <Music size={20} /> },
];

const BUTTONS = [
  {
    label: "Ouça Fazer Valer",
    variant: "filled",
    href: "https://open.spotify.com/...",
    icon: <Play size={16} />,
  },
  {
    label: "Conheça a Banda",
    variant: "outlined",
    href: "/sobre",
  },
];

<Hero
  badge="Guarulhos/SP"
  title={<>AO TOPO<span style={{ color: 'var(--color-orange)' }}>!</span></>}
  subtitle="De Guarulhos pro mundo"
  description="Rock alternativo sem fronteiras"
  buttons={BUTTONS}
  socialLinks={SOCIAL_LINKS}
  scrollTargetId="proxima-secao"
/>
```

---

### Uso mínimo (só título)

```jsx
<Hero title="AO TOPO!" />
```

---

### Sem badge

```jsx
<Hero
  title="AO TOPO!"
  subtitle="De Guarulhos pro mundo"
  buttons={BUTTONS}
/>
```

---

### Com scroll target

A seta de scroll desce automaticamente `100vh` se `scrollTargetId` não for passado.  
Se passado, faz scroll suave até o elemento com aquele `id`:

```jsx
<Hero
  title="AO TOPO!"
  scrollTargetId="sobre"
/>

// Em outro lugar no DOM:
<section id="sobre">...</section>
```

---

## Comportamento

- **Animação de entrada:** o hero inicia invisível e faz fade-in + slide-up ao montar
- **Seta de scroll:** animação de bounce contínua; ao hover pausa e desce; ao clicar rola para a próxima seção
- **Botões:** usam o componente `Button` internamente — todas as props e variantes funcionam normalmente
- **Social links:** abrem em nova aba com `rel="noopener noreferrer"`

---

## Checklist de uso

- [ ] Passei `scrollTargetId` apontando para o `id` da seção seguinte?
- [ ] Os ícones dos botões e redes sociais têm tamanho adequado (16–20px)?
- [ ] O `title` usa JSX para destacar o `!` em laranja?
- [ ] Os `socialLinks` têm `label` descritivo para acessibilidade?