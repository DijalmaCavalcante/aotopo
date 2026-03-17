# Button Component

Componente reutilizável baseado no **Material Design 3**.  
Toda lógica está isolada em `hooks/useButton.js`. O `component.jsx` contém apenas estrutura e renderização.

---

## Estrutura de arquivos

```
src/
├── components/
│   └── button/
│       ├── component.jsx
│       └── style.css
└── hooks/
    └── useButton.js
```

---

## Importação

```jsx
import Button from '@/components/button/component';
```

---

## Props

| Prop       | Tipo       | Padrão    | Valores aceitos                                      |
|------------|------------|-----------|------------------------------------------------------|
| `variant`  | `string`   | `filled`  | `filled` `outlined` `text` `elevated` `tonal`        |
| `disabled` | `boolean`  | `false`   | `true` `false`                                       |
| `loading`  | `boolean`  | `false`   | `true` `false`                                       |
| `href`     | `string`   | `null`    | Qualquer URL válida                                  |
| `type`     | `string`   | `button`  | `button` `submit` `reset`                            |
| `onClick`  | `function` | `null`    | Qualquer função                                      |
| `children` | `node`     | —         | Texto, ícones ou qualquer elemento React             |

---

## Variantes

### Filled (padrão)
Botão de maior ênfase. Use para a ação principal da tela.

```jsx
<Button variant="filled">Salvar</Button>
```

---

### Outlined
Ênfase média. Use para ações secundárias.

```jsx
<Button variant="outlined">Cancelar</Button>
```

---

### Text
Baixa ênfase. Use para ações terciárias ou em toolbars.

```jsx
<Button variant="text">Saiba mais</Button>
```

---

### Elevated
Ênfase média com elevação. Use quando precisar destacar do fundo.

```jsx
<Button variant="elevated">Ver detalhes</Button>
```

---

### Tonal
Ênfase média-alta com cor suave. Alternativa ao filled quando o destaque total não é necessário.

```jsx
<Button variant="tonal">Continuar</Button>
```

---

## Estados

### Default

```jsx
<Button variant="filled">Confirmar</Button>
```

### Disabled
Bloqueia cliques, eventos e navegação por âncora.

```jsx
<Button variant="filled" disabled>
  Indisponível
</Button>

<Button variant="outlined" disabled>
  Indisponível
</Button>
```

### Loading
Bloqueia interação, preserva layout e exibe spinner.

```jsx
<Button variant="filled" loading>
  Salvando
</Button>

<Button variant="tonal" loading>
  Carregando
</Button>
```

---

## Comportamento de âncora

Quando `href` é passado, o componente renderiza como `<a>` mantendo todos os estilos de botão.  
Se `disabled` ou `loading` estiver ativo, a navegação é bloqueada mesmo com `href` definido.

```jsx
// Renderiza como <a href="...">
<Button variant="filled" href="https://exemplo.com">
  Acessar site
</Button>

// href definido, mas bloqueado pelo disabled
<Button variant="filled" href="https://exemplo.com" disabled>
  Indisponível
</Button>
```

---

## Tipo de botão

Use `type` para controlar o comportamento nativo em formulários.

```jsx
// Enviar formulário
<Button variant="filled" type="submit">
  Enviar
</Button>

// Resetar campos
<Button variant="outlined" type="reset">
  Limpar
</Button>

// Apenas botão (padrão)
<Button variant="text" type="button">
  Cancelar
</Button>
```

---

## onClick

```jsx
function handleSave() {
  console.log('Salvo!');
}

<Button variant="filled" onClick={handleSave}>
  Salvar
</Button>
```

O `onClick` é automaticamente bloqueado quando `disabled` ou `loading` está ativo — não é necessário tratar isso manualmente.

```jsx
// Mesmo que o usuário tente, o clique não dispara
<Button variant="filled" disabled onClick={handleSave}>
  Bloqueado
</Button>
```

---

## Combinações comuns

### Par de ações (confirmar / cancelar)

```jsx
<Button variant="outlined" onClick={handleCancel}>
  Cancelar
</Button>

<Button variant="filled" onClick={handleConfirm}>
  Confirmar
</Button>
```

### Botão com estado de loading assíncrono

```jsx
function SaveButton() {
  const [loading, setLoading] = useState(false);

  async function handleSave() {
    setLoading(true);
    await saveData();
    setLoading(false);
  }

  return (
    <Button variant="filled" loading={loading} onClick={handleSave}>
      Salvar
    </Button>
  );
}
```

### Botão de navegação estilizado

```jsx
<Button variant="tonal" href="/sobre">
  Sobre nós
</Button>

<Button variant="text" href="https://docs.exemplo.com">
  Documentação
</Button>
```

### Botão em formulário controlado

```jsx
function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    await sendForm();
    setSending(true);
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* campos do formulário */}
      <Button
        type="submit"
        variant="filled"
        loading={sending}
        disabled={sent}
      >
        {sent ? 'Enviado!' : 'Enviar mensagem'}
      </Button>
    </form>
  );
}
```

---

## Extensibilidade

O hook `useButton` pode ser importado diretamente para casos onde você precisa de lógica de botão sem o componente visual:

```js
import { useButton } from '@/hooks/useButton';

const { isAnchorMode, isInteractionBlocked, buttonProps, anchorProps } = useButton({
  href,
  disabled,
  loading,
  onClick,
  type,
});
```

Isso permite criar variações visuais customizadas (ex: `IconButton`, `FloatingActionButton`) reaproveitando toda a lógica de comportamento.

---

## Checklist de uso

- [ ] Escolhi a variante correta para o nível de ênfase da ação?
- [ ] Passei `type="submit"` se o botão está dentro de um `<form>`?
- [ ] Controlo `loading` e `disabled` pelo estado do componente pai?
- [ ] Usei `href` apenas para navegação real (não para ações JS)?
- [ ] O `onClick` não precisa checar `disabled` manualmente (o hook já faz isso)?
