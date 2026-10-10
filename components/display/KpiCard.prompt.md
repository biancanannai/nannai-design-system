KPI tile for dashboards and reports; group 3–4 in a row, all white.

```jsx
<KpiCard label="Receita" value="R$ 482.910" delta="+12,4%" caption="vs. setembro" />
<KpiCard label="Churn" value="2,1%" delta="-0,3 pp" trend="down" positive caption="trimestre" />
```

- Colour follows meaning, not direction: good = #545933, bad = #764141. Falling churn is `trend="down" positive`.
- `highlight` (#545933 block + accent square) is for presentations/compositions only — not dashboards.
