Tabs for sibling views. Underline for page sections; segmented for small view switches (period, chart type).

```jsx
<Tabs tabs={[{value:'all',label:'Todos',count:128,icon:'users'},{value:'vip',label:'VIP',count:24,icon:'gem'}]} onChange={setTab} />
<Tabs variant="segmented" tabs={['Dia','Semana','Mês']} defaultValue="Mês" />
```

- Indicator slides between tabs (360ms ease-out). Active count chip turns #381416.
