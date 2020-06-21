$("document").ready(function() {
    $("form > div.form-group > input").mouseover(function() {
        this["style"]["background-color"] = "lightblue";
    });
    $("form > div.form-group > input").mouseout(function() {
        this["style"]["background-color"] = "";
    });
});
