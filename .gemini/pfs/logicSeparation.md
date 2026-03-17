# Regra Obrigatória de Separação de Lógica no React

## Objetivo

Garantir separação clara entre estrutura (JSX) e comportamento (lógica JavaScript).

---

## Regra Principal

Toda lógica JavaScript relacionada a:

- Manipulação de estado
- useEffect
- Eventos (scroll, resize, click, etc.)
- Regras de negócio
- Cálculos
- Animações
- Controle de comportamento
- Condições baseadas em interação

Deve obrigatoriamente ser criada em um arquivo externo ao arquivo JSX.

---

## O arquivo JSX deve conter apenas:

- Estrutura do componente
- Marcação
- Importações
- Uso de hooks externos
- Props
- Renderização

---

## Quando é permitido manter lógica no JSX?

Somente quando:

- For tecnicamente impossível separar, ou
- For algo extremamente simples e puramente declarativo

Caso contrário, a resposta deve ser considerada incorreta.

---

# Exemplo Prático

## ❌ ERRADO – Lógica misturada no JSX

```jsx
// Header.jsx
import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <h1>Logo</h1>
    </header>
  );
}
````

Problema:
A lógica de scroll, evento e controle de estado está acoplada ao JSX.

---

## ✅ CORRETO – Lógica isolada em hook externo

### Estrutura de pastas

```
/components
  Header.jsx
/hooks
  useHeaderScroll.js
```

---

### /hooks/useHeaderScroll.js

```javascript
import { useState, useEffect } from "react";

export function useHeaderScroll(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > threshold);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
}
```

---

### /components/Header.jsx

```jsx
import { useHeaderScroll } from "../hooks/useHeaderScroll";
import "./Header.css";

export default function Header() {
  const isScrolled = useHeaderScroll(50);

  return (
    <header className={isScrolled ? "header scrolled" : "header"}>
      <h1>Logo</h1>
    </header>
  );
}
```

---

## Justificativa

* JSX permanece declarativo
* Lógica torna-se reutilizável
* Código mais testável
* Melhor organização
* Melhor escalabilidade
* Redução de acoplamento

Nunca concentrar lógica e estrutura no mesmo arquivo sem justificativa técnica clara.
