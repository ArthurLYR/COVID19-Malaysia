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

// Defined Custom Format Type for percentages
vega.expressionFunction('percentage', function (datum, params) {
    return Math.round(datum) + "%";
});

// Make Attribute Values Bold in Tooltip
let labels = [
    "Date",
    "New Cases",
    "Recovered Cases",
    "New Deaths",
    "State",
    "Population",
    "Active Cases (raw)",
    "Active Cases (per 10,000 population)",
    "Vaccination Type",
    "Number Received",
    "Percentage of Population"
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

// Total Cases Figure
var totalCases = "./js/total_cases.vg.json";
vegaEmbed('#totalCases', totalCases, { tooltip: tooltipOptions, "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Recovered Cases Figure
var totalRecovered = "./js/total_recovered.vg.json";
vegaEmbed('#totalRecovered', totalRecovered, { tooltip: tooltipOptions, "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Recovered Waffle Chart
var recoveredWaffle = "./js/recovered_waffle.vg.json";
vegaEmbed('#recoveredWaffle', recoveredWaffle, { tooltip: tooltipOptions, "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Active Cases Figure
var totalActive = "./js/total_active.vg.json";
vegaEmbed('#totalActive', totalActive, { tooltip: tooltipOptions, "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Active Waffle Chart
var activeWaffle = "./js/active_waffle.vg.json";
vegaEmbed('#activeWaffle', activeWaffle, { tooltip: tooltipOptions, "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Deaths Figure
var totalDeaths = "./js/total_deaths.vg.json";
vegaEmbed('#totalDeaths', totalDeaths, { tooltip: tooltipOptions, "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Deaths Waffle Chart
var deathsWaffle = "./js/deaths_waffle.vg.json";
vegaEmbed('#deathsWaffle', deathsWaffle, { tooltip: tooltipOptions, "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Country Cases over Time Line Chart
var casesOverTime = "./js/cases_over_time.vg.json";
vegaEmbed('#casesOverTime', casesOverTime, { tooltip: tooltipOptions, "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// State Cases Map
var stateCases = "./js/state_cases.vg.json";
vegaEmbed('#stateCases', stateCases, { tooltip: tooltipOptions, "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Vaccination Cleveland Dot Plot
var vaxStatus = "./js/vax_status.vg.json";
vegaEmbed('#vaxStatus', vaxStatus, { tooltip: tooltipOptions, "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

// Vaccination Brand Comparison
var vaxBrands = "./js/vax_brands.vg.json";
vegaEmbed('#vaxBrands', vaxBrands, { tooltip: tooltipOptions, "actions": false }).then(function (result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);