const CHART_LIST = [
    {id:"chart-1", spec: "charts/01_prevalence_pictogram.json"}
]

const EMBED_OPTIONS = {
  actions: false,
  renderer: "svg",
};

CHART_LIST.forEach(({ id, spec }) => {
  const target = document.getElementById(id);
  if (!target) return;
  vegaEmbed(`#${id}`, spec, EMBED_OPTIONS)
    .catch(err => {
      console.warn(`Could not load ${spec}:`, err);
      target.innerHTML = `<div style="color:#6B5F62;font-size:0.85rem;font-style:italic;">Chart ${id} — spec not yet available</div>`;
    });
});