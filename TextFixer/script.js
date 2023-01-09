window.onload = function() {
    input = document.getElementById("text");
    textProblems = { lbf: 0, tabf: 0, spacef: 0, fproblems: 0};
    textProblems.currentTab = "f";
    textProblems.problemButtons = document.getElementsByClassName("problems")[0].children;
    textProblems.problemButtons = [...textProblems.problemButtons].filter(element => element.tagName == "BUTTON");
    textProblems.formattingButton = document.getElementById("formatting");
}

function onUpdateProblemsTab(value) {
    textProblems.currentTab = value;
    if(value == "f") {
        textProblems.problemButtons[0].innerText = "Line Break Formatting(" + textProblems.lbf + ")";
        textProblems.problemButtons[1].innerText = "Tab Formatting(" + textProblems.tabf + ")";
        textProblems.problemButtons[2].innerText = "Space Formatting(" + textProblems.spacef + ")";
    } else if(value == "p") {
        textProblems.problemButtons[0].innerText = "Flying Comma(0)";
        textProblems.problemButtons[1].innerText = "Flying Dot(0)";
        textProblems.problemButtons[2].innerText = "Flying Bracket(0)";
    }
    textProblems.formattingButton.innerText = "Formatting(" + textProblems.fproblems + ")";
}

function onClickProblemButton(buttonId) {
    if(textProblems.currentTab == "f") {
        if(buttonId == 0) {
            while(countIn(input.value, "\n\n") > 0)
                input.value = input.value.replaceAll("\n\n", "\n");
            input.value = input.value.trim();
        } else if(buttonId == 1) {
            input.value = input.value.replaceAll("\t", "");
        } else if(buttonId == 2) {
            while(countIn(input.value, "\n ") + countIn(input.value, "  ") > 0) {
                input.value = input.value.replaceAll("\n ", "\n");
                input.value = input.value.replaceAll("  ", " ");
            }
            input.value = input.value.trim();
        }
    } else if(textProblems.currentTab == "p") {
        if(buttonId == 0) {

        } else if(buttonId == 1) {

        } else if(buttonId == 2) {
            
        }
    }
    onTextUpdate();
}

function countIn(countable, counted) {
    return countable.split(counted).length - 1;
}

function onTextUpdate() {
    if(input.value < 2)
        textProblems.lbf = 0;
    else
        textProblems.lbf = countIn(input.value, "\n\n") + (input.value[0] == "\n") + (input.value[input.value.length - 1] == "\n");
    textProblems.spacef = countIn(input.value, "  ") + countIn(input.value, "\n ");;
    textProblems.tabf = countIn(input.value, "\t");
    textProblems.fproblems = (textProblems.lbf > 0) + (textProblems.spacef > 0) + (textProblems.tabf > 0);
    onUpdateProblemsTab(textProblems.currentTab);
}