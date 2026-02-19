# Styling Conventions

## Regra Principal

Toda estilização deve ficar em arquivo separado:
```
style.css
```

**NUNCA** estilizar diretamente no `component.jsx`, exceto para props dinâmicas.

---

## ✅ Estrutura Correta
```
components/
├── header/
│   ├── component.jsx          ← Lógica do componente
│   └── style.css              ← Toda estilização aqui
│
├── productCard/
│   ├── component.jsx
│   └── style.css
│
└── button/
    ├── component.jsx
    └── style.css
```

---

## ✅ Permitido: Props Dinâmicas

### Quando usar estilos inline/condicionais:

Props que controlam **variações visuais** do componente:
```jsx
// ✅ CORRETO - Props com variações
<Button 
  variant="primary"           // dark, light, outlined
  size="md"                   // sm, md, lg
  rounded="true"              // true, false
  disabled="true"
/>

<Card 
  background="dark"           // dark, light
  elevated="true"             // shadow elevation
/>

<Text 
  size="lg"                   // xs, sm, md, lg, xl
  weight="bold"               // regular, medium, bold
  align="center"              // left, center, right
/>

<Avatar 
  size="md"                   // sm, md, lg
  border="true"               // com/sem borda
/>
```

### Implementação Correta
```jsx
// component.jsx
function Button({ variant = 'primary', size = 'md', children }) {
  return (
    <button 
      className={`
        button__container 
        button__container--${variant} 
        button__container--${size}
      `}
    >
      {children}
    </button>
  );
}
```
```css
/* style.css */
.button__container {
  /* estilos base */
}

.button__container--primary {
  background: var(--color-blue);
}

.button__container--secondary {
  background: var(--color-gray);
}

.button__container--sm {
  padding: var(--spacing-2);
  font-size: var(--font-size-sm);
}

.button__container--md {
  padding: var(--spacing-4);
  font-size: var(--font-size-base);
}
```

---

## ❌ Proibido

### NUNCA usar estilos inline para layout/design fixo
```jsx
// ❌ ERRADO - Estilos fixos inline
function Header() {
  return (
    <header style={{
      backgroundColor: '#000',      // ❌
      padding: '20px',              // ❌
      display: 'flex',              // ❌
      justifyContent: 'space-between' // ❌
    }}>
      <h1 style={{ fontSize: '24px' }}>Título</h1> // ❌
    </header>
  );
}
```
```jsx
// ✅ CORRETO - Tudo no CSS
function Header() {
  return (
    <header className="header__container">
      <h1 className="header__title">Título</h1>
    </header>
  );
}
```

### NUNCA usar Tailwind CSS ou utility classes
```jsx
// ❌ ERRADO - Tailwind
<div className="flex justify-between p-4 bg-blue-500">

// ❌ ERRADO - Utility classes inline
<div className="d-flex justify-content-between p-3">

// ✅ CORRETO - Classes do BEM com CSS separado
<div className="header__container">
```

---

## 🎯 Casos de Uso Permitidos

### 1. Props de Variação Visual
```jsx
<Button variant="primary" size="lg" />
<Card background="dark" elevated="true" />
```

### 2. Estados Dinâmicos
```jsx
<Modal isOpen={isOpen} />
<Dropdown expanded={expanded} />
<Toast type="success" />
```

### 3. Valores Calculados em Runtime
```jsx
// ✅ OK - Valor vem de cálculo/API
function ProgressBar({ progress }) {
  return (
    <div className="progressbar__container">
      <div 
        className="progressbar__fill"
        style={{ width: `${progress}%` }}  // ✅ Valor dinâmico
      />
    </div>
  );
}
```
```jsx
// ✅ OK - Posição calculada
function Tooltip({ position }) {
  return (
    <div 
      className="tooltip__container"
      style={{ 
        top: position.y,      // ✅ Calculado dinamicamente
        left: position.x 
      }}
    >
      Conteúdo
    </div>
  );
}
```

---

## 📋 Checklist

Antes de adicionar `style={{}}` pergunte:

- [ ] Este valor vem de uma **prop**? → ✅ OK
- [ ] Este valor é **calculado** em runtime? → ✅ OK
- [ ] Este valor muda baseado em **estado**? → ✅ OK
- [ ] Este é um valor **fixo** que poderia estar no CSS? → ❌ Mova para `style.css`

---

## 🎨 Exemplo Completo

### ❌ Errado
```jsx
// component.jsx
function Card({ title, description }) {
  return (
    <div style={{
      padding: '24px',                    // ❌ Fixo
      backgroundColor: '#fff',            // ❌ Fixo
      borderRadius: '8px',                // ❌ Fixo
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)' // ❌ Fixo
    }}>
      <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>
        {title}
      </h3>
      <p style={{ color: '#666', lineHeight: '1.5' }}>
        {description}
      </p>
    </div>
  );
}
```

### ✅ Correto
```jsx
// component.jsx
function Card({ title, description, elevated = false }) {
  return (
    <div className={`
      card__container 
      ${elevated ? 'card__container--elevated' : ''}
    `}>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </div>
  );
}
```
```css
/* style.css */
.card__container {
  padding: var(--spacing-6);
  background-color: var(--color-pure-white);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
}

.card__container--elevated {
  box-shadow: var(--shadow-lg);
}

.card__title {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-bold);
}

.card__description {
  color: var(--color-master-light);
  line-height: var(--line-height-normal);
}
```

---

## 📚 Resumo

| Situação | Permitido | Onde Colocar |
|----------|-----------|--------------|
| Estilos fixos | ❌ | `style.css` |
| Props de variação | ✅ | Classes condicionais |
| Valores dinâmicos | ✅ | `style={{}}` inline |
| Estados (active, disabled) | ✅ | Classes condicionais |
| Tailwind/Utilities | ❌ | Nunca usar |
| Valores calculados | ✅ | `style={{}}` inline |

---

**Regra de Ouro:**  
Se o valor é **fixo** → `style.css`  
Se o valor é **dinâmico/prop** → Classes condicionais ou `style={{}}` inline