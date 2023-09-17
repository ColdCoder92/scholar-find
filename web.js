$(function main(){
    function transition(page1, page2) {
        $(page1).hide();
        $(page2).show();
    }
    for (let i = 2; i < 11; i++) {
        $(".Desktop" + i).hide();
    }
    $(".SearchThroughScholarshipsList").click(function() {
        transition(".Desktop1", ".Desktop2");
    });
    $(".FindTotalScholarships").click(function() {
        transition(".Desktop1", ".Desktop8");
    });
    for (let i = 1; i < 6; i++) {
        let questionPage = ".Desktop" + (i + 2);
        $(".Desktop2 .Button" + i).click(function() {
            transition(".Desktop2", questionPage);
        });
        $(questionPage + " .ContinueButton").click(function() {
            transition(questionPage, ".Desktop10");
        });
        $(questionPage + " .BackButton").click(function() {
            transition(questionPage, ".Desktop2");
        });
    }
    $(".Desktop10 .Home").click(function() {
        transition(".Desktop10", ".Desktop1");
    });
    $(".Desktop10 .List").click(function() {
        transition(".Desktop10", ".Desktop2");
    });
});