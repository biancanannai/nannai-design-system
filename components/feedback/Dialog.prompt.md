Modal for confirmations and short forms; secondary + primary actions in the footer.

```jsx
<Dialog title="Arquivar cliente" onClose={close} footer={<><Button variant="secondary" onClick={close}>Cancelar</Button><Button>Arquivar</Button></>}>
  O histórico será mantido.
</Dialog>
```
