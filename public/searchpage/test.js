/* if condition met append dto URL, else append something else.*/

/* https://api.adzuna.com/v1/api/jobs/gb/search/1?
                                                  app_id=1cad4d53
                                                &app_key=e6b644fb61f2e5d8cb060935d76de379
                                                &results_per_page=20
                                                &what=Developer
                                                &where=London
                                                &salary_min=20000
                                                &salary_max=30000
                                                &full_time=1
                                                &contract=1 */

/* https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=1cad4d53&app_key=e6b644fb61f2e5d8cb060935d76de379&results_per_page=20&what=Developer&where=London&salary_min=20000&salary_max=30000&part_time=1&permanent=1 */

/* https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=1cad4d53&app_key=e6b644fb61f2e5d8cb060935d76de379&results_per_page=20&what=Developer&where=London&salary_min=20000&salary_max=30000 */


function buttonSearch() {
    let queryURL = `http://api.adzuna.com/v1/api/jobs/gb/version?app_id=${appID}&app_key=${apiKey}&&content-type=application/json`;


    // call the API 
    return fetch(queryURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            return data;
        })
}

// waiting for the DOM to be loaded
window.onload = function () {
    const ElemForm = $("#stock-form");
    const ElemInp = $("#ticker-code");
    const Elemhistory = $("#history-section");

    function callAPI(e) {
        e.preventDefault();
        const thicker = ElemInp.val().trim();
        if (thicker !== "" && e.type === "submit") {
            renderGraph(thicker);
            fundamentalData(thicker);
            forexPrice();
            indexPrice();
            addHistory(thicker);
            ElemInp.val("");
        }
        else if (e.type === "click") {
            renderGraph($(this).attr("data-stock"));
            fundamentalData($(this).attr("data-stock"));
            forexPrice();
            indexPrice();
        }
        else {
            alert("Input a valid stock ticker!");
        }
    }

    // Added event listening   
    ElemForm.on("submit", callAPI);