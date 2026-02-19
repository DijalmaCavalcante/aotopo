# Component File Naming Convention

## Regra Principal

Todos os componentes React devem ser nomeados como:
```
component.jsx
```

**SEMPRE** `component.jsx`, independente do nome da pasta.

---

## ✅ Correto
```
components/
├── header/
│   └── component.jsx          ✅
├── footer/
│   └── component.jsx          ✅
├── productCard/
│   └── component.jsx          ✅
├── navigationBar/
│   └── component.jsx          ✅
└── contactForm/
    └── component.jsx          ✅
```

---

## ❌ Errado
```
components/
├── header/
│   └── Header.jsx             ❌
├── footer/
│   └── index.jsx              ❌
├── productCard/
│   └── ProductCard.jsx        ❌
└── navigationBar/
    └── NavigationBar.jsx      ❌
```

---

## 📦 Estrutura Completa
```
src/
├── components/
│   ├── header/
│   │   ├── component.jsx      ← Componente principal
│   │   └── styles.css         ← Estilos do componente
│   │
│   ├── productCard/
│   │   ├── component.jsx
│   │   └── styles.css
│   │
│   └── navigationBar/
│       ├── component.jsx
│       ├── styles.css
│       └── helpers.js         ← Funções auxiliares (se necessário)
│
└── pages/
    ├── home/
    │   └── component.jsx
    └── aboutUs/
        └── component.jsx
```

---

## 💡 Vantagens

- ✅ Consistência total no projeto
- ✅ Fácil identificação visual
- ✅ Imports mais limpos
- ✅ Evita duplicação de nomes

---

## 📥 Como Importar
```jsx
// ✅ Correto
import Header from './components/header/component';
import Footer from './components/footer/component';
import ProductCard from './components/productCard/component';

// Ou com alias no import
import Header from '@/components/header/component';
```

---

## 🎯 Resumo

| ✅ Usar | ❌ Nunca Usar |
|---------|---------------|
| `component.jsx` | `Header.jsx` |
|  | `index.jsx` |
|  | `ProductCard.jsx` |
|  | Qualquer outro nome |

**Nome do arquivo:** SEMPRE `component.jsx`  
**Nome da pasta:** Define o propósito/identidade do componente