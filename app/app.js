import * as MODEL from "../model/model.js";
function initListeners() {
    $("nav a").click((e) => {
        e.preventDefault();
        let btnID = e.currentTarget.id;
        
        MODEL.setCurrentPageContent(btnID);
    });
}

$(document).ready(function () {
    initListeners();
});
