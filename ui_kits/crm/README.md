# NANNAI CRM — UI kit

Click-through reference for NANNAI's internal CRM / marketing dashboard (MKT WEB).

> **Disclaimer:** no product screens, codebase or Figma were supplied. This kit is a *reference composition* built strictly from the brand spec (palette, "Recommended default style" for CRM dashboards) and the system's components — not a recreation of an existing product. Replace with real screens when available.

## Screens
- **Visão geral** (`Overview.jsx`) — 4 KPI tiles (one burgundy hero), revenue chart, channel split, clients to follow, featured campaign.
- **Clientes** (`Clients.jsx`) — segment Tabs, city filter Tags, client table; row click opens `ClientDrawer.jsx`.
- **Campanhas** (`Campaigns.jsx`) — campaign cards; "Nova campanha" opens a Dialog form → Toast.

Shared: `Sidebar.jsx`, `Topbar.jsx`, `Charts.jsx`, `data.js` (fake pt-BR data).
