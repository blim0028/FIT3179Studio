var vg_1 = "map.vg.json";
var vg_2 = "fieldofstudy_line.vg.json"
var vg_3 = "levelofstudy_donut.vg.json"
var vg_4 = "fieldofapprenticeship_radialbar.vg.json"
var vg_5 = "universitytype_bar.vg.json"

vegaEmbed("#map", vg_1, {"actions":false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#line", vg_2, {"actions":false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#donut", vg_3, {"actions":false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#radialbar", vg_4, {"actions":false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#bar", vg_5, {"actions":false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);