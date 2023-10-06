// Defined Custom Format Type for casesOverTime tooltip
vega.expressionFunction('casesTooltip', function (datum, params) {
    let formattedString = "";
    if (datum === null || datum === undefined || datum === NaN) {
        formattedString = "-";
    } else {
        formattedString = datum.toLocaleString();
    }
    return formattedString;
});

// Make Attribute Values Bold in Tooltip
let labels = [
    "Date",
    "New Cases",
    "Recovered Cases",
    "New Deaths",
    "State",
    "Active Cases (per 10,000 population)"
];
let tooltipOptions = {
    sanitize: (value) => {
        if (labels.includes(value)) {
            return value;
        } else {
            return "<strong>" + value + "</strong>";
        }
    },
};

// Country Cases over Time Area Chart
var casesOverTime = "./js/cases_over_time.vg.json";
vegaEmbed('#casesOverTime', casesOverTime, { tooltip: tooltipOptions, "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// State Cases Map
var stateCases = "./js/state_cases.vg.json";
vegaEmbed('#stateCases', stateCases, { tooltip: tooltipOptions, "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);