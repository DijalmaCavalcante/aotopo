# Folder and File Naming Conventions

## Regras Gerais

### ✅ FAZER
- Usar **camelCase** para nomes compostos
- Apenas caracteres alfanuméricos (a-z, A-Z, 0-9)
- Primeira letra sempre **minúscula** para pastas
- Primeira letra sempre **maiúscula** para componentes React

### ❌ NÃO FAZER
- Nunca usar hífens: ~~my-component~~
- Nunca usar underscores: ~~my_component~~
- Nunca usar espaços: ~~my component~~
- Nunca usar caracteres especiais: ~~my@component~~, ~~my#folder~~

---

## 📁 Pastas

### Estrutura
```
camelCase (primeira letra minúscula)
```

### Exemplos

#### ✅ Correto
```
components/
├── header/
├── footer/
├── productCard/
├── userProfile/
├── navigationBar/
└── contactForm/

pages/
├── home/
├── aboutUs/
├── productDetails/
└── checkoutPage/

utils/
├── formatters/
├── validators/
├── apiHelpers/
└── dateUtils/
```

#### ❌ Errado
```
components/
├── Header/              // PascalCase em pasta
├── product-card/        // Usando hífen
├── user_profile/        // Usando underscore
├── navigation bar/      // Usando espaço
└── contact@form/        // Caractere especial
```

---

## 📄 Arquivos

### Componentes React
```
PascalCase.jsx
```

#### ✅ Correto
```
Header.jsx
Footer.jsx
ProductCard.jsx
UserProfile.jsx
NavigationBar.jsx
ContactForm.jsx
```

#### ❌ Errado
```
header.jsx              // Minúscula
product-card.jsx        // Hífen
user_profile.jsx        // Underscore
productCard.jsx         // camelCase em componente
```

---

### Arquivos Utilitários/Helpers
```
camelCase.js
```

#### ✅ Correto
```
formatDate.js
validateEmail.js
apiClient.js
storageHelper.js
mathUtils.js
```

#### ❌ Errado
```
FormatDate.js           // PascalCase
format-date.js          // Hífen
format_date.js          // Underscore
```

---

### Arquivos de Estilo
```
camelCase.css
```

#### ✅ Correto
```
globalStyles.css
headerStyles.css
cardStyles.css
buttonVariants.css
```

#### ❌ Errado
```
global-styles.css       // Hífen
header_styles.css       // Underscore
GlobalStyles.css        // PascalCase
```

---

## 🗂️ Estrutura de Projeto Exemplo
```
src/
├── components/
│   ├── header/
│   │   ├── Header.jsx
│   │   └── headerStyles.css
│   ├── footer/
│   │   ├── Footer.jsx
│   │   └── footerStyles.css
│   ├── productCard/
│   │   ├── ProductCard.jsx
│   │   └── productCardStyles.css
│   └── navigationBar/
│       ├── NavigationBar.jsx
│       └── navigationBarStyles.css
│
├── pages/
│   ├── home/
│   │   └── Home.jsx
│   ├── aboutUs/
│   │   └── AboutUs.jsx
│   └── productDetails/
│       └── ProductDetails.jsx
│
├── utils/
│   ├── formatDate.js
│   ├── validateEmail.js
│   └── apiClient.js
│
├── hooks/
│   ├── useAuth.js
│   ├── useFetch.js
│   └── useLocalStorage.js
│
└── styles/
    ├── globalStyles.css
    └── variables.css
```

---

## 📋 Referência Rápida

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| **Pasta** | camelCase | `productCard/` |
| **Componente React** | PascalCase.jsx | `ProductCard.jsx` |
| **Utility/Helper** | camelCase.js | `formatDate.js` |
| **Hook** | camelCase.js | `useAuth.js` |
| **CSS** | camelCase.css | `cardStyles.css` |
| **Config** | camelCase.js | `apiConfig.js` |

---

## 🎯 Casos Especiais

### Arquivos de Configuração
```
camelCase.js ou lowercase
```

#### ✅ Correto
```
vite.config.js          // OK (padrão da ferramenta)
tailwind.config.js      // OK (padrão da ferramenta)
apiConfig.js            // camelCase para configs customizados
dbConfig.js
```

### Index Files
```
index.jsx (sempre minúsculo)
```

#### ✅ Correto
```
components/header/index.jsx
components/footer/index.jsx
```

### Arquivos de Constantes
```
camelCase.js ou SCREAMING_SNAKE_CASE.js (conteúdo em caps)
```

#### ✅ Correto
```
apiConstants.js         // arquivo em camelCase
colors.js              // conteúdo: COLOR_PRIMARY = '#000'
endpoints.js           // conteúdo: API_BASE_URL = '...'
```

---

**Última atualização:** Fevereiro 2026  
**Padrão:** camelCase para tudo, exceto componentes React (PascalCase)