console.log("script.js is running, vegaEmbed type:", typeof vegaEmbed);

const CHART_LIST = [
    {id:"chart-1", spec: "charts/01_prevalence_pictogram.vl.json"},
    {id:"chart-2", spec: "charts/02_symptoms_scatter_plot.vl.json"},
    {id:"chart-3", spec: "charts/03_cumulative_incidence_line.vl.json"},
    {id:"chart-4", spec: "charts/04_hospitalisations_heatmap.vl.json"},
    {id:"chart-5", spec: "charts/05_burden_ranking_bump.vl.json"},
    {id:"chart-6", spec: "charts/06_yld_overtime_line.vl.json"},
    {id:"chart-7", spec: "charts/07_cooccuring_bar.vl.json"},
    {id:"chart-8", spec: "charts/08_state_map.vl.json"},
    {id:"chart-9", spec: "charts/09_common_procedures_bar.vl.json"},
    {id:"chart-10", spec: "charts/10_waiting_times_dot.vl.json"},
    {id:"chart-11", spec: "charts/11_spending_by_area.vl.json"},
    {id:"chart-12", spec: "charts/12_spending_by_age.vl.json"}
    
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