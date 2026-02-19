# ClassName Conventions

## Regra
```
[pasta]__[elementoCamelCase]
```

- **Prefixo**: Nome da pasta (lowercase)
- **Separador**: Dois underscores `__`
- **Elemento**: camelCase (sem hífens)

---

## Exemplos

### ✅ Correto
```jsx
// Pasta: Header
<header className="header__container">
  <div className="header__logo">
    <img className="header__logoImage" />
  </div>
  <nav className="header__navigation">
    <ul className="header__menu">
      <li className="header__menuItem">
        <a className="header__link">Home</a>
      </li>
    </ul>
  </nav>
  <button className="header__ctaButton">Contato</button>
</header>

// Pasta: Card
<article className="card__container">
  <div className="card__imageWrapper">
    <img className="card__image" />
  </div>
  <h3 className="card__title">Título</h3>
  <p className="card__description">Texto</p>
  <button className="card__button">Ação</button>
</article>
```

### ❌ Errado
```jsx
className="container"              // Falta prefixo
className="header_logo"            // Só 1 underscore
className="header__menu-item"      // Usando kebab-case
className="header__MenuItem"       // PascalCase
```

---

## Modificadores (opcional)
```jsx
// Estrutura: [pasta]__[elemento]--[modificadorCamelCase]

<button className="button__primary button__primary--disabled">
<div className="modal__container modal__container--open">
<nav className="navbar__menu navbar__menu--mobileView">
```

---

## Nomes Comuns
```jsx
__container, __wrapper, __inner
__title, __subtitle, __description
__image, __imageWrapper, __icon
__button, __link, __input
__header, __body, __footer
__list, __listItem, __menu, __menuItem
```

---

**Padrão:** BEM adaptado com camelCase