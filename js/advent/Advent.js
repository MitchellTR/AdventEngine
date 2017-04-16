///////////////
// Namespace //
///////////////

var Advent = {};


/////////////
// Globals //
/////////////

Advent.gameFontFamily = "Vollkorn";
Advent.gameBackgroundColor = "#ede4cd";
Advent.gameTextColor = "#5f4e2f";
Advent.gameTextLinkColor = "#6e82b0";
Advent.fontSize = 18;
Advent.jQueryGameTextDiv = "#gameTextDiv";
Advent.jQueryPlayerInput = "#playerInput";
Advent.jQueryScrollIndicatorDiv = "#scrollIndicatorDiv";
Advent.mapBGColor = "#5f4e2f";
Advent.mapLabelSize = 22;
Advent.mapLabelPos = 20;
Advent.mapLabelBGHeight = 30;
Advent.mapLocationGapSize = 7;
Advent.mapLocationColorString = '#dbcda8';
Advent.mapLocationList = [];
Advent.mapLocationSize = 50;
Advent.mapPlayerSize = 20;
Advent.mapUnseenFillColor = '#3f2e0f';
Advent.mapQuestionMarkSize = 35;
Advent.menuBackgroundBarColor = '#dbcda8';
Advent.messageQueue = [];
Advent.padding = 12;
Advent.scrollBarIndicatorPaddingRight = 40;
Advent.scrollBarIndicatorPaddingBottom = 20;
Advent.questTextColor = "#cf520f";
Advent.storyText = "";
Advent.textAlign = "justify";
Advent.userInputColor = "red";
Advent.fadeTime = 750;
Advent.updateTime = 750;
Advent.themes = [];
Advent.currentTheme = 'reader';
Advent.titleSizeDifference = 15;
Advent.getSubTitlSizeDifference = 10;
Advent.scrollIndicator = false;

Advent.readerTheme = {
    name: "reader",
    font: "Vollkorn",
    backgroundColor: "#ede4cd",
    textColor: "#5f4e2f",
    textLinkColor: "#6e82b0",
    mapBGColor: "#5f4e2f",
    mapLocationColor: "#dbcda8",
    mapUnseenFillColor: "#3f2e0f",
    menuBackgroundBarColor: "#dbcda8",
    questTextColor: "#cf520f",
    userInputColor: "red",
    fadeTime: 750,
    updateTime: 750,
    titleSizeDifference: 15,
    subTitleSizeDifference: 10
};
Advent.themes.push(Advent.readerTheme);

Advent.oldSchoolTheme = {
    name: "console",
    font: "Inconsolata",
    backgroundColor: "#000000",
    textColor: "#00BB00",
    textLinkColor: "#66FF66",
    mapBGColor: "#000000",
    mapLocationColor: "#003300",
    mapUnseenFillColor: "#000000",
    menuBackgroundBarColor: "#003300",
    questTextColor: "#00DD00",
    userInputColor: "#00DD00",
    fadeTime: 51,
    updateTime: 51,
    titleSizeDifference: 0,
    subTitleSizeDifference: 0
};
Advent.themes.push(Advent.oldSchoolTheme);

Advent.setTheme = function (name) {
    var data = Advent.getThemeSettings(name);
    if (data) {
        Advent.gameFontFamily = data.font;
        Advent.gameBackgroundColor = data.backgroundColor;
        Advent.gameTextColor = data.textColor;
        Advent.gameTextLinkColor = data.textLinkColor;
        Advent.mapBGColor = data.mapBGColor;
        Advent.mapLocationColorString = data.mapLocationColor;
        Advent.mapUnseenFillColor = data.mapUnseenFillColor;
        Advent.menuBackgroundBarColor = data.menuBackgroundBarColor;
        Advent.questTextColor = data.questTextColor;
        Advent.userInputColor = data.userInputColor;
        Advent.fadeTime = data.fadeTime;
        Advent.updateTime = data.updateTime;
        Advent.titleSizeDifference = data.titleSizeDifference;
        Advent.subTitleSizeDifference = data.subTitleSizeDifference;
        Advent.currentTheme = name;
        Advent.enforceTheme();
    }
}

Advent.getQuest = function(name){
    for(var i = 0; i < Advent.quests.length; i++){
        if(Advent.quests[i].name == name)
            return Advent.quests[i];
    }
}

Advent.getThemeSettings = function(name){
    var data;
    for (var i = 0; i < Advent.themes.length; i++) {
        if (Advent.themes[i].name == name) {
            data = Advent.themes[i];
        }
    }
    return data;
}

Advent.enforceTheme = function () {
    $("#gameTextDiv").css("background-color", Advent.gameBackgroundColor);
    $("#gameDiv").css("background-color", Advent.menuBackgroundBarColor);
    $(".gameButton").css({
        backgroundColor: Advent.gameBackgroundColor,
        color: Advent.gameTextColor,
        border: '1px solid '.concat(Advent.gameTextColor)
    });
    $("#gameTextDiv").css({
        "font-family": Advent.gameFontFamily,
        "font-size": Advent.fontSize,
        "color": Advent.gameTextColor,
        backgroundColor: Advent.gameBackgroundColor
    });
    $("#gameTextDiv a").css({
        color: '#aaaaaa'
    });
    $(".gameModalHeader").css({
        backgroundColor: Advent.menuBackgroundBarColor,
        color: Advent.gameTextColor
    });
    $(".gameModalBody").css({
        backgroundColor: Advent.gameBackgroundColor,
        color: Advent.gameTextColor
    });
    $(".gameListGroupItem").css({
        backgroundColor: Advent.menuBackgroundBarColor,
        color: Advent.gameTextColor,
        border: '1px solid '.concat(Advent.gameTextColor)
    });
    $(".ui-accordion-header").css({
        backgroundColor: Advent.menuBackgroundBarColor,
        color: Advent.gameTextColor,
        border: '1px solid '.concat(Advent.gameTextColor)
    });
    $(".ui-accordion-content").css({
        backgroundColor: Advent.gameBackgroundColor,
        color: Advent.gameTextColor,
        border: '1px solid '.concat(Advent.gameTextColor)
    });
    $("a").css({
        color: Advent.gameTextLinkColor
    });
    $(".hiddenLink").css({
        color: Advent.gameTextColor,
        textDecoration: "none"
    });
    $(".quest").css({
        color: Advent.questTextColor
    });
    $(".task").css({
        color: Advent.questTextColor
    });
    $("#map").css({
        color: Advent.mapBGColor
    });
    $(".title").css({
        fontWeight: 'bold',
        fontSize: "".concat(Advent.fontSize + Advent.titleSizeDifference,"px")
    });
    $(".subTitle").css({
        fontWeight: 'bold',
        fontSize: "".concat(Advent.fontSize + Advent.subTitleSizeDifference,"px")
    });
    $(".documentText").css({
        textAlign: 'justify'
    });
    $(".scrollIndicator").css({
        color: Advent.gameTextColor
    });
}

Advent.playerInventory = [];
Advent.currentMap = null;
Advent.quests = [];
Advent.journal = {
    journalEntries: []
};
Advent.handleInput = null;

/////////////
// Objects //
/////////////

Advent.Document = function () {
    Advent.Prop.call(this);
    this.text = null;
}

Advent.Game = function () {
    // Inject and style main game div
    $("body").prepend("<div id=\"gameDiv\"></div>");
    $("#gameDiv").css({
        "height": "100%",
        "width": "100%",
        "overflow": "hidden"
    });

    // Create text panel and input divs
    $("#gameDiv").append("<div id=\"gameButtonDiv\"></div>");
    $("#gameDiv").append("<div id=\"gameTextDiv\"></div>");
    $("#gameDiv").append("<div id=\"gameDirectionButtonDiv\"></div>");
    $("#gameDiv").append("<div id=\"scrollIndicatorDiv\"></div>");
    $("#gameButtonDiv").css({
        "width": "99%",
        "margin": "5px"
    });
    $("#gameDirectionButtonDiv").css({
        width: "99%",
        margin:"5px"
    });
    $("#gameButtonDiv").append("<div role=\"group\"><button onClick=\"Advent.showInventory()\" type=\"button\" class=\"btn gameButton\">Inventory</button> <button onClick=\"Advent.showQuests()\" type=\"button\" class=\"gameButton btn \">Quests</button> <button onClick=\"Advent.showJournal()\" type=\"button\" class=\"gameButton btn \">Journal</button> <button onClick=\"Advent.showMap()\" type=\"button\" class=\"gameButton btn \">Map</button> <button onClick=\"Advent.showOptionsMenu()\" type=\"button\" class=\"gameButton btn \">Options</button></div>");
    
    $("#gameDirectionButtonDiv").append("<div role=\"group\"><button onClick=\"Advent.goDirection('north')\" type=\"button\" class=\"btn gameButton\">North</button> <button onClick=\"Advent.goDirection('south')\" type=\"button\" class=\"gameButton btn \">South</button> <button onClick=\"Advent.goDirection('east')\" type=\"button\" class=\"gameButton btn \">East</button> <button onClick=\"Advent.goDirection('west')\" type=\"button\" class=\"gameButton btn \">West</button>");
    var screenHeight = window.innerHeight;
    var buttonHeight = $("#gameButtonDiv").height();
    var directionButtonHeight = $("#gameDirectionButtonDiv").height();
    $("#gameTextDiv").css({
        "height": screenHeight - buttonHeight - directionButtonHeight - 20,
        "overflow-y": "auto",
        "overflow-x": "hidden",
        "text-align": Advent.textAlign,
        "padding-left": Advent.padding + "px",
        "padding-right": Advent.padding + "px"
    });
    $("#gameDiv").append("<div id=\"entityModal\" class=\"modal fade\"><div id=\"entityDialog\" class=\"modal-dialog\"><div id=\"entityContent\" class=\"modal-content\"><div id=\"entityHeader\" class=\"gameModalHeader modal-header\"><button type=\"button\" id=\"closeX\" class=\"close\" data-dismiss=\"modal\">&times;</button><h4 id=\"entityTitle\" class=\"modal-title\"></h4></div><div id=\"entityBody\" class=\"gameModalBody modal-body\"></div><div id=\"entityFooter\" class=\"gameModalHeader modal-footer\"><button id=\"closeButton\" type=\"button\" class=\"gameButton btn \" data-dismiss=\"modal\">Close</button></div></div></div></div>");
    $(Advent.jQueryScrollIndicatorDiv).append("<span class=\"scrollIndicator glyphicon glyphicon-triangle-bottom\" aria-hidden=\"true\"></span>");
    $(Advent.jQueryScrollIndicatorDiv).css({
        position: "absolute",
        bottom: "".concat($("#gameDirectionButtonDiv").height() + Advent.scrollBarIndicatorPaddingBottom,"px"),
        right: "".concat(Advent.scrollBarIndicatorPaddingRight,"px"),
    });
    $(Advent.jQueryScrollIndicatorDiv).hide();
    Advent.enforceTheme();
    $("#gameTextDiv").scroll(Advent.onScroll);
    console.log("♦ Advent Engine 0.0.0 initialized ♦");

};

Advent.onScroll = function(){
    
    var verticalPos = $(Advent.jQueryGameTextDiv).scrollTop();
    var divHeight = $(Advent.jQueryGameTextDiv).height();
    var contentHeight = $(Advent.jQueryGameTextDiv)[0].scrollHeight;
    
    if(verticalPos + divHeight >= contentHeight && Advent.scrollIndicator){
        Advent.scrollIndicator = false;
        $(Advent.jQueryScrollIndicatorDiv).hide();
    }
}

Advent.GameEntity = function () {
    this.name = null;
    this.description = null;
    this.status = null;
};

Advent.getTitleMarkup = function (titleText) {
    return "<span class=\"title\">".concat(titleText, "</span>");
}

Advent.getSubTitleMarkup = function(subTitleText){
    return "<span class=\"subTitle\">".concat(subTitleText, "</span>");
}

Advent.Location = function () {
    Advent.GameEntity.call(this);
    this.seen = false;
    this.props = [];
    this.people = [];
    this.northLocation = null;
    this.northGate = null;
    this.southLocation = null;
    this.southGate = null;
    this.eastLocation = null;
    this.eastGate = null;
    this.westLocation = null;
    this.westGate = null;
    this.getDescription = function (showTitle) {
        this.seen = true;
        //Display Location title
        if (showTitle) {
            Advent.queueText("<br/>".concat(Advent.getSubTitleMarkup(this.name.capitalize())));
        }

        //Display Location description
        Advent.queueText(this.description.capitalizeFirstLetter());
        
        Advent.describeNearbyPeople();

        //Describe Locations in all directions
        Advent.describeSurroundingLocations(this);
    }
}
    
Advent.describeNearbyPeople = function() {
    //Describe people in the area
    var location = Advent.currentMap.playerLocation;
    for (var i = 0; i < location.people.length; i++) {
        var person = location.people[i];
        Advent.queueText(" ".concat(Advent.getPersonMarkup(person)," is ", person.status),true);
    }
}

Advent.Map = function () {
    Advent.GameEntity.call(this);

    this.locations = [];
    this.playerLocation = null;
    
}

Advent.Goal = function () {
    Advent.GameEntity.call(this);
    this.complete = false;
}

Advent.Person = function () {
    Advent.GameEntity.call(this);
    this.disposition = 0;
    this.lines = [];
    this.playerLines = [];
    this.smallTalk = [];
    this.linesIndex = 0;
    this.status = "here.";
    this.clearDialog = function(){
        this.lines = [];
        this.playerLines = [];
        this.smallTalk = [];
        this.linesIndex = 0;
    }
}

Advent.Line = function (text, effect, nextIndex, nextType, broadcastMessage) {
    this.text = text;
    this.effect = effect;
    this.nextIndex = nextIndex;
    this.nextType = nextType;
    if (broadcastMessage) {
        this.broadcastMessage = broadcastMessage;
    }
}

Advent.Prop = function () {
    Advent.GameEntity.call(this);
    this.canTake = false;
    this.examineLock = null;
    this.canOpen = false;
    this.locked = null;
    this.insideProps = [];
}

Advent.Quest = function () {
    Advent.Goal.call(this);
    this.tasks = [];
    this.failed = null;
    this.optional = false;
    this.introduceQuest = function () {
        var optional = "";
        if (this.optional) {
            optional = " (optional) ";
        }
        Advent.queueText("<span class=\"quest\"><b>New quest added: </b>".concat(this.name.capitalize(), optional, " - ", this.description.capitalizeFirstLetter(), "</span>"));
        this.questUpdate();
    }
    this.questUpdate = function () {
        var nextTask = null;
        var i = 0;
        while (!nextTask) {
            if (!this.tasks[i].complete && !this.tasks[i].failed) {
                nextTask = this.tasks[i];
            }
            i++;
        }
        var questOptional = "";
        if (this.optional) {
            questOptional = " (optional) ";
        }
        var optional = "";
        if (nextTask.optional) {
            optional = " (optional) ";
        }
        Advent.queueText("<span class=\"task\"><b>Quest updated:</b> ".concat(this.name.capitalize(), questOptional, " - ", nextTask.name.capitalize(), " - ", optional, nextTask.description, "</span>"));
    }
    this.completeQuest = function () {
        this.complete = true;
        Advent.queueText("<span class=\"task\"><b>Quest completed:</b> ".concat(this.name.capitalize(), "</span>"));
    }
}

Advent.Task = function () {
    Advent.Goal.call(this);
    this.parentQuest = null;
    this.optional = false;
    this.failed = null;
    this.completeTask = function (lastTask) {
        var parentQuest = Advent.getParentQuest(this.parentQuest);
        this.complete = true;
        Advent.queueText("<span class=\"task\"><b>Task completed:</b> ".concat(parentQuest.name.capitalize(), " - ", this.name.capitalize(), "</span>"));
        if (lastTask) {
            parentQuest.completeQuest();
        } else {
            parentQuest.questUpdate();
        }
    }
    this.isCurrentTask = function () {
        var firstIncomplete = "";
        var parentQuest = Advent.getParentQuest(this.parentQuest);
        for (var i = 0; i < parentQuest.tasks.length; i++) {
            if (!parentQuest.tasks[i].complete) {
                if (firstIncomplete == "") {
                    firstIncomplete = parentQuest.tasks[i].name;
                }
            }
        }
        return this.name == firstIncomplete;
    }
}

Advent.failQuest = function(name){
    var quest;
    for (var i = 0; i < Advent.quests.length; i++){
        if(Advent.quests[i].name == name)
            quest = Advent.quests[i];
    }
    for (var i = 0; i < quest.tasks.length; i++){
        if(!quest.tasks[i].complete)
            quest.tasks[i].failed = true;
    }
    quest.failed = true;
    Advent.queueText("<span class=\"task\"><b>Quest Failed:</b>  (Optional) ".concat(quest.name.capitalize(), "</span>"));
}

Advent.failTask = function(task){
    task.failed = true;
    Advent.queueText("<span class=\"task\"><b>Task Failed:</b>  (Optional) ".concat(task.name.capitalize(), "</span>"));
}

Advent.hasQuest = function(name){
    var result = false;
    for(var i = 0; i < Advent.quests.length; i++){
        if(Advent.quests[i].name == name){
            result = true;
        }
    }
    return result;
}

Advent.getParentQuest = function(name) {
    var parentQuest;
    for (var i = 0; i < Advent.quests.length; i++) {
        if (Advent.quests[i].name == name)
            parentQuest = Advent.quests[i];
    }
    return parentQuest;
}


/////////////
// Methods //
/////////////

Advent.goDirection = function(direction){
    var wall = false;
    var newLocation = "";
    var currentLocation = Advent.currentMap.playerLocation;
    if(direction == "north"){
        if(currentLocation.northLocation){
            newLocation = currentLocation.northLocation.name;
        }else{
            wall = true;
        }
    }else if(direction == "south"){
        if(currentLocation.southLocation){
            newLocation = currentLocation.southLocation.name;
        }else{
            wall = true;
        }
    }else if(direction == "east"){
        if(currentLocation.eastLocation){
            newLocation = currentLocation.eastLocation.name;
        }else{
            wall = true;
        }
    }else if(direction == "west"){
        if(currentLocation.westLocation){
            newLocation = currentLocation.westLocation.name;
        }else{
            wall = true;
        }
    }
    if(!wall){
        Advent.attemptLocationChange(newLocation);
    }else{
        Advent.queueText(" You look ".concat(direction," but have nowhere to go in that direction."),true);
    }
}

Advent.attemptLocationChange = function (locationName) {
    var currentLocation = Advent.currentMap.playerLocation;
    if (currentLocation.northLocation) {
        if (Advent.currentMap.playerLocation.northLocation.name == locationName) {
            if (!currentLocation.northGate) {
                Advent.broadcastAction("departing for location ".concat(currentLocation.northLocation.name).toLowerCase());
                Advent.currentMap.playerLocation = currentLocation.northLocation;
                currentLocation = currentLocation.northLocation;
                if (currentLocation.seen) {
                    Advent.queueText("You return to <a onClick=\"Advent.getCurrentLocationDescription()\">" + currentLocation.name + "</a>.");
                    Advent.describeNearbyPeople();
                    Advent.describeSurroundingLocations(currentLocation);
                } else {
                    currentLocation.getDescription(true);
                }
                Advent.broadcastAction("location ".concat(currentLocation.name).toLowerCase());
            } else {
                Advent.queueText(" ".concat(currentLocation.northGate.capitalizeFirstLetter()),true);
            }
        }
    }
    if (currentLocation.southLocation) {
        if (Advent.currentMap.playerLocation.southLocation.name == locationName) {
            if (!currentLocation.southGate) {
                Advent.broadcastAction("departing for location ".concat(currentLocation.southLocation.name).toLowerCase());
                Advent.currentMap.playerLocation = currentLocation.southLocation;
                currentLocation = currentLocation.southLocation;
                if (currentLocation.seen) {
                    Advent.queueText("You return to <a onClick=\"Advent.getCurrentLocationDescription()\">" + currentLocation.name + "</a>.");
                    Advent.describeNearbyPeople();
                    Advent.describeSurroundingLocations(currentLocation);
                } else {
                    currentLocation.getDescription(true);
                }
                Advent.broadcastAction("location ".concat(currentLocation.name).toLowerCase());
            } else {
                Advent.queueText(" ".concat(currentLocation.southGate.capitalizeFirstLetter()),true);
            }
        }
    }
    if (currentLocation.eastLocation) {
        if (Advent.currentMap.playerLocation.eastLocation.name == locationName) {
            if (!currentLocation.eastGate) {
                Advent.broadcastAction("departing for location ".concat(currentLocation.eastLocation.name).toLowerCase());
                Advent.currentMap.playerLocation = currentLocation.eastLocation;
                currentLocation = currentLocation.eastLocation;
                if (currentLocation.seen) {
                    Advent.queueText("You return to <a onClick=\"Advent.getCurrentLocationDescription()\">" + currentLocation.name + "</a>.");
                    Advent.describeNearbyPeople();
                    Advent.describeSurroundingLocations(currentLocation);
                } else {
                    currentLocation.getDescription(true);
                }
                Advent.broadcastAction("location ".concat(currentLocation.name).toLowerCase());
            } else {
                Advent.queueText(" ".concat(currentLocation.eastGate.capitalizeFirstLetter()),true);
            }
        }
    }
    if (currentLocation.westLocation) {
        if (Advent.currentMap.playerLocation.westLocation.name == locationName) {
            if (!currentLocation.westGate) {
                Advent.broadcastAction("departing for location ".concat(currentLocation.westLocation.name).toLowerCase());
                Advent.currentMap.playerLocation = currentLocation.westLocation;
                currentLocation = currentLocation.westLocation;
                if (currentLocation.seen) {
                    Advent.queueText("You return to <a onClick=\"Advent.getCurrentLocationDescription()\">" + currentLocation.name + "</a>.");
                    Advent.describeNearbyPeople();
                    Advent.describeSurroundingLocations(currentLocation);
                } else {
                    currentLocation.getDescription(true);
                }
                Advent.broadcastAction("location ".concat(currentLocation.name).toLowerCase());
            } else {
                Advent.queueText(" ".concat(currentLocation.westGate.capitalizeFirstLetter()),true);
            }
        }
    }
}

Advent.broadcastAction = function (message) {
//    for (var i = 0; i < Advent.quests.length; i++) {
//        if (!Advent.quests[i].complete || message == "ready to continue") {
//            Advent.quests[i].handleInput(message);
//        }
//    }
    
    if(Advent.handleInput){
        Advent.handleInput(message);
    }
}

Advent.sceneBreak = function(){
    Advent.queueText(Advent.getTitleMarkup("&#9820&#128160&#9820"));
}

Advent.describeSurroundingLocations = function (location) {
    //Describe locations in all directions
    if (location.northLocation) {
        Advent.queueText(" ".concat(Advent.getLocationMarkup(location.northLocation, location.northLocation.name.capitalizeFirstLetter()), " is to the north."), true);
    }
    if (location.southLocation) {
        Advent.queueText(" ".concat(Advent.getLocationMarkup(location.southLocation, location.southLocation.name.capitalizeFirstLetter()), " is to the south."), true);
    }
    if (location.eastLocation) {
        Advent.queueText(" ".concat(Advent.getLocationMarkup(location.eastLocation, location.eastLocation.name.capitalizeFirstLetter()), " is to the east."), true);
    }
    if (location.westLocation) {
        Advent.queueText(" ".concat(Advent.getLocationMarkup(location.westLocation, location.westLocation.name.capitalizeFirstLetter()), " is to the west."), true);
    }
}

Advent.getCurrentLocationDescription = function () {
    Advent.currentMap.playerLocation.getDescription();
}

Advent.getDocumentMarkup = function (document, tag, hidden) {
    var hiddenMarkup = "";
    if (hidden) {
        hiddenMarkup = " class=\"hiddenLink\" ";
    }
    return "<a ".concat(hiddenMarkup, " onClick=\"Advent.showDocumentMenu('", document.name.quoteSafe(), "','", document.text.quoteSafe(), "',", document.canTake, ")\">", tag.quoteSafe(), "</a>");
}

Advent.getLocationMarkup = function (location, tag) {
    return "<a onClick=\"Advent.attemptLocationChange('".concat(location.name.quoteSafe(), "')\">", tag.quoteSafe(), "</a>");
}

Advent.getPropMarkup = function (prop, tag) {
    return "<a onClick=\"Advent.showPropMenu('".concat(prop.name.quoteSafe(), "','", prop.description.quoteSafe(), "',", prop.canTake, ")\">", tag.quoteSafe(), "</a>");
}

Advent.getPersonMarkup = function (person) {
    return "<a onClick=\"Advent.showPersonMenu('".concat(person.name.quoteSafe(), "')\">", person.name.quoteSafe(), "</a>");
}

Advent.getBroadcastMarkup = function (tag, broadcastMessage, hidden) {
    var hiddenMarkup = ""
    if(hidden)
        hiddenMarkup = "class=\"hiddenLink\"";
    return "<a ".concat(hiddenMarkup," onClick=\"(function(){Advent.broadcastAction('",broadcastMessage.quoteSafe(), "');})()\">", tag, "</a>");
}

Advent.getContainerMarkup = function (prop, tag) {
    var insidePropMarkup = "[";
    for (var i = 0; i < prop.insideProps.length; i++) {
        insidePropMarkup = insidePropMarkup.concat("'", prop.insideProps[i].name.quoteSafe(), "'");
        if (i < prop.insideProps.length - 1) {
            insidePropMarkup = insidePropMarkup.concat(",");
        }
    }
    insidePropMarkup = insidePropMarkup.concat("]");
    return "<a onClick=\"Advent.showContainerMenu('".concat(prop.name.quoteSafe(), "','", prop.description.quoteSafe(), "',", insidePropMarkup, ")\">", tag.quoteSafe(), "</a>");
}

Advent.postTextImmediately = function (message) {
    $(Advent.jQueryGameTextDiv).html(Advent.storyText + message);
    Advent.storyText += message;
    Advent.scrollToBottom();
};


Advent.queueText = function (message, noBreak) {
//    var added = false;
//    if (Advent.messageQueue.length >= 1) {
//        if (message.includes("Task completed:") ||
//            message.includes("Quest completed:") ||
//            message.includes("New quest added:") ||
//            message.includes("Quest updated:")) {
//            var i = Advent.messageQueue.length;
//            while (Advent.messageQueue[i - 1].includes("Task completed:") ||
//                Advent.messageQueue[i - 1].includes("Tasks completed:") ||
//                Advent.messageQueue[i - 1].includes("Quest completed:") ||
//                Advent.messageQueue[i - 1].includes("Quests completed:") ||
//                Advent.messageQueue[i - 1].includes("New quest added:") ||
//                Advent.messageQueue[i - 1].includes("New quests added:") ||
//                Advent.messageQueue[i - 1].includes("Quest updated:") ||
//                Advent.messageQueue[i - 1].includes("Quests updated:")) {
//                if (message.includes("Task completed:")) {
//                    if (Advent.messageQueue[i - 1].includes("Task completed:")) {
//                        Advent.messageQueue[i - 1] = Advent.messageQueue[i - 1]
//                            .replace("Task completed:", "Tasks completed:")
//                            .replace("</span>", ", ")
//                            .concat(message.replace("Task completed:", ""));
//                        var added = true;
//                    } else if (Advent.messageQueue[i - 1].includes("Tasks completed:")) {
//                        Advent.messageQueue[i - 1] = Advent.messageQueue[i - 1]
//                            .replace("</span>", ", ").concat(message.replace("Task completed:", ""));
//                        var added = true;
//                    }
//                } else if (message.includes("Quest completed:")) {
//                    if (Advent.messageQueue[i - 1].includes("Quest completed:")) {
//                        Advent.messageQueue[i - 1] = Advent.messageQueue[i - 1]
//                            .replace("Quest completed:", "Quests completed:")
//                            .replace("</span>", ", ")
//                            .concat(message.replace("Quest completed:", ""));
//                        var added = true;
//                    } else if (Advent.messageQueue[i - 1].includes("Quests completed:")) {
//                        Advent.messageQueue[i - 1] = Advent.messageQueue[i - 1].replace("</span>", ", ")
//                            .concat(message.replace("Quest completed:", ""));
//                        var added = true;
//                    }
//                } else if (message.includes("New quest added:")) {
//                    if (Advent.messageQueue[i - 1].includes("New quest added:")) {
//                        Advent.messageQueue[i - 1] = Advent.messageQueue[i - 1]
//                            .replace("New quest added:", "New quests added:")
//                            .replace("</span>", ", ")
//                            .concat(message.replace("New quest added:", ""));
//                        var added = true;
//                    } else if (Advent.messageQueue[i - 1].includes("New quests added:")) {
//                        Advent.messageQueue[i - 1] = Advent.messageQueue[i - 1]
//                            .replace("</span>", ", ")
//                            .concat(message.replace("New quest added:", ""));
//                        var added = true;
//                    }
//                }
//                i = i - 1;
//            }
//        }
//    }
    //if (!added) {
        var breakString = "<br/><br/>";
        if (noBreak) {
            breakString = "";
        }
        Advent.messageQueue.push(breakString.concat(message));
   // }
    if (Advent.messageQueue.length == 1) {
        setTimeout(Advent.updateStory, Advent.updateTime);
    }
};

Advent.scrollToBottom = function () {
    $(Advent.jQueryGameTextDiv).animate({
        scrollTop: $(Advent.jQueryGameTextDiv)[0].scrollHeight
    }, Advent.fadeTime);
};

Advent.showDocumentMenu = function (name, text, canTake) {
    if (Advent.sameRoom(name)) {
        var doc;
        for (var i = 0; i < Advent.currentMap.playerLocation.props.length; i++) {
            if (Advent.currentMap.playerLocation.props[i].name == name) {
                doc = Advent.currentMap.playerLocation.props[i];
            }
        }
        if (!doc.examineLock) {
            $("#entityTitle").html(name.capitalize().quoteSafe());
            $("#entityBody").html("<span class=\"documentText\"><i>".concat(text, "</i>"));
            if (canTake) {
                $("#entityBody").append("<div style=\"width:100%;text-align:center;\"><button id=\"takeDocumentButton\" onClick=\"Advent.takeItem('".concat(name.quoteSafe(), "')\" type=\"button\" class=\"gameButton btn \">Take</button></div>"));
            }
            $("#entityBody").append("</span>");
            Advent.enforceTheme();
            $("#entityModal").modal('show');
            Advent.broadcastAction("read ".concat(name.toLowerCase()));
        } else {
            Advent.queueText(" ".concat(doc.examineLock), true);
        }
    } else {
        Advent.queueText("You are not currently in the same room as this item.");
    }
};

Advent.sameRoom = function(name){
    var sameRoom = false;
    for(var i = 0; i < Advent.currentMap.playerLocation.props.length;i++){
        if(Advent.currentMap.playerLocation.props[i].name == name){
            sameRoom = true;
        }
    }
    for(var i = 0; i < Advent.currentMap.playerLocation.people.length;i++){
        if(Advent.currentMap.playerLocation.people[i].name == name){
            sameRoom = true;
        }
    }
    return sameRoom;
}

Advent.showContainerMenu = function (name, description) {
    if(Advent.sameRoom(name)){
    $("#entityTitle").html(name.capitalize().quoteSafe());
    var prop = {};
    for (var i = 0; i < Advent.currentMap.playerLocation.props.length; i++) {
        if (name == Advent.currentMap.playerLocation.props[i].name) {
            prop = Advent.currentMap.playerLocation.props[i];
        }
    }
    var propMarkup = "";
    if (prop.insideProps.length > 0) {
        propMarkup = "<strong>Inside:</strong>";
        for (var i = 0; i < prop.insideProps.length; i++) {
            propMarkup = propMarkup.concat("<br/>", prop.insideProps[i].name, " <button id=\"take", i, "\" onClick=\"(function(){Advent.takeItem('", prop.insideProps[i].name.quoteSafe(), "',true);$('#take", i, "').prop('disabled',true);$('#take", i, "').html('Taken');})()\" type=\"button\" class=\"gameButton btn\">Take</button>");
        }
    }
    $("#entityBody").html("<span class=\"modal-body\" style=\"text-align:justify\"><p>".concat(description.capitalizeFirstLetter(), "</p>", propMarkup));
    $("#entityBody").append("</span>");
    Advent.enforceTheme();
    $("#entityModal").modal('show');
    Advent.broadcastAction("look ".concat(name.toLowerCase()));
    }else{
        Advent.queueText("You are not currently in the same room with this item.");
    }
};

Advent.showPropMenu = function (name, description, canTake) {
    if(Advent.sameRoom(name)){
    $("#entityTitle").html(name.capitalize().quoteSafe());
    $("#entityBody").html("<span class=\"modal-body\" style=\"text-align:justify\"><p>".concat(description.capitalizeFirstLetter(), "</p>"));
    if (canTake) {
        $("#entityBody").append("<div style=\"width:100%;text-align:center;\"><button id=\"#takeButton\" onClick=\"Advent.takeItem('".concat(name.quoteSafe(), "')\" type=\"button\" class=\"gameButton btn\">Take</button></div>"));
    }
    $("#entityBody").append("</span>");
    Advent.enforceTheme();
    $("#entityModal").modal('show');
    Advent.broadcastAction("look ".concat(name.toLowerCase()));
    }else{
        Advent.queueText("You are not currently in the same room with this item.");
    }
};

Advent.showPersonMenu = function (name) {
    var person = Advent.findPerson(name);
    if (person) {
        $("#entityTitle").html(person.name.capitalize().quoteSafe());
        Advent.renderDialogBody(person);
        Advent.enforceTheme();
        $("#entityModal").modal('show');
    }else{
        Advent.queueText("You are not currently in the same room with this person.");
    }
}

Advent.showOptionsMenu = function(){
    $("#entityTitle").html("Options");
    $("#entityBody").html("<p><strong>Theme:<strong><br/><p><button  onClick=\"Advent.setTheme('reader')\" type=\"button\" class=\"gameButton btn\">Reader</button> <button onClick=\"Advent.setTheme('console')\" type=\"button\" class=\"gameButton btn\">Console</button>");
    Advent.enforceTheme();
    $("#entityModal").modal('show');
}

Advent.showTitleMenu = function(newFunction,continueFunction){
    $("#entityTitle").html("The Path of Dissent");
    $("#entityBody").html("<div style='width:100%;text-align:center;'>(Title artwork pending)</div><br/><div style='width:100%;text-align:center;'><button onClick=\"(function(){".concat(newFunction,"();$('#entityModal').modal('hide');})()\" type=\"button\" style=\"width:100px;\" class=\"gameButton btn\">New Game</button><br/><br/><button onClick=\"(function(){",continueFunction,"();$('#entityModal').modal('hide');})()\" type=\"button\" style=\"width:100px;\" class=\"gameButton btn\">Continue</button></div>"));
    $("#entityFooter").hide();
    $("#entityHeader").hide();
    Advent.enforceTheme();
    $("#entityModal").modal({
        backdrop:'static'
    });
    $('#entityModal').on('hidden.bs.modal', function () {
        $('#entityFooter').show();
        $('#entityHeader').show();
        $('#entityModal').data('bs.modal').options.backdrop = true;
    })
}

Advent.findPerson = function (name) {
    var person;
    var people = Advent.currentMap.playerLocation.people;
    for (var i = 0; i < people.length; i++) {
        if (people[i].name == name) {
            person = people[i];
        }
    }
    return person;
}

Advent.lineClick = function (characterName, linesIndex, optionIndex) {
    var person = Advent.findPerson(characterName);
    if (person) {
        var line = person.playerLines[linesIndex][optionIndex];
        if (line.effect != 0) {
            person.disposition = person.disposition + line.effect;
        }
        if (line.broadcastMessage) {
            Advent.broadcastAction(line.broadcastMessage);
        }
        person.linesIndex = person.playerLines[linesIndex][optionIndex].nextIndex;
        Advent.renderDialogBody(person);
    } else {
        Advent.queueText(characterName.concat(" is not in your immediate area."));
    }
}

Advent.advanceDialog = function (name) {
    var person = Advent.findPerson(name);
    var line = person.lines[person.linesIndex];
    person.linesIndex = line.nextIndex;
    Advent.renderDialogBody(person);
}

Advent.renderDialogBody = function (person) {

    var entityBody = "<span class=\"modal-body\" style=\"text-align:justify\"><p>".concat(person.description.capitalizeFirstLetter(), "</p>");
    if (person.lines.length > 0) {
        var line = person.lines[person.linesIndex];
        entityBody = entityBody.concat("<p>", person.name.capitalize().quoteSafe(), " says:</p>", "<p>", line.text, "</p><p>");
        if (line.nextIndex != null) {
            if (line.nextType == "player") {
                for (var i = 0; i < person.playerLines[line.nextIndex].length; i++) {
                    var playerLine = person.playerLines[line.nextIndex][i];
                    entityBody = entityBody.concat("<button type=\"button\" class=\"gameButton btn\" onClick=\"Advent.lineClick('", person.name.quoteSafe(), "',", line.nextIndex, ",", i, ")\">", playerLine.text, "</button><br/>");
                }
                entityBody = entityBody.concat("</p>");
            } else {
                if (person.lines[person.linesIndex].nextIndex) {
                    entityBody = entityBody.concat("<button type=\"button\" class=\"gameButton btn\" onClick=\"Advent.advanceDialog('", person.name.quoteSafe(), "')\">Next ></button><br/>");
                }
            }
        }

        if (line.broadcastMessage) {
            Advent.broadcastAction(line.broadcastMessage);
        }
    }
    $("#entityBody").html(entityBody);
    $("#entityBody").append("</span>");
    Advent.enforceTheme();
}

Advent.showInventory = function () {
    var inventoryString = "";
    if (Advent.playerInventory.length == 0) {
        inventoryString = "There are no items in your inventory.";
    } else {
        for (var i = 0; i < Advent.playerInventory.length; i++) {
            inventoryString = inventoryString.concat("<li class=\"gameListGroupItem list-group-item\"><span class=\"list-group-item-heading\"><strong>",
                Advent.playerInventory[i].name.capitalize(), "</strong><span><p class=\"list-group-item-class\">",
                Advent.playerInventory[i].description.capitalizeFirstLetter(), "</p></li>");
        }
    }
    $("#entityTitle").html("Inventory");
    $("#entityBody").html("<ul class=\"list-group\">".concat(inventoryString, "</ul>"));
    Advent.enforceTheme();
    $("#entityModal").modal('show');
    //    Advent.broadcastAction("read ".concat(name.toLowerCase()));
};

Advent.showMap = function () {
    $("#entityTitle").html(Advent.currentMap.name.capitalize());
    $("#entityBody").html("<div id=\"canvasDiv\" style=\"background-color:".concat(Advent.menuBackgroundBarColor, ";width:100%;border:1px solid ", Advent.gameTextColor, ";text-align:center;\"><canvas id=\"map\"></canvas></div>"));

    var canvas = new fabric.Canvas('map');
    canvas.setWidth(350);
    canvas.setHeight(300);
    canvas.setBackgroundColor(Advent.mapBGColor, canvas.renderAll.bind(canvas));
    $(".canvas-container").css({
        "margin": "0 auto"
    });
    var roomLabelBG = new fabric.Rect({
        left: 0,
        top: Advent.mapLabelPos,
        fill: Advent.gameTextColor,
        opacity: 0.5,
        width: canvas.getWidth(),
        height: Advent.mapLabelBGHeight
    });
    roomLabelBG.selectable = false;
    canvas.add(roomLabelBG);

    var roomLabel = new fabric.Text(Advent.currentMap.playerLocation.name.capitalize(), {
        fontSize: Advent.mapLabelSize,
        left: canvas.getCenter().left,
        top: Advent.mapLabelPos,
        fontFamily: Advent.gameFontFamily,
        fill: Advent.menuBackgroundBarColor,
        fontWeight: 'bold',
        originX: 'center'
    });
    roomLabel.selectable = false;
    canvas.add(roomLabel);
    Advent.renderLocations({
        firstLocation: Advent.currentMap.playerLocation,
        canvas: canvas,
        roomLabel: roomLabel,
        roomLabelBG: roomLabelBG
    });
    Advent.mapLocationList = [];
    Advent.enforceTheme();
    $("#entityModal").modal('show');
    Advent.broadcastAction("look map");
}

Advent.locationRendered = function (locationName) {
    var rendered = false;
    for (var i = 0; i < Advent.mapLocationList.length; i++) {
        if (locationName == Advent.mapLocationList[i]) {
            var rendered = true;
        }
    }
    return rendered;
}

Advent.renderLocations = function (data) {
    if (!Advent.locationRendered(data.firstLocation.name)) {
        Advent.mapLocationList.push(data.firstLocation.name);
        var updateTitle = function (shape) {
            data.roomLabel.text = data.firstLocation.name.capitalize();
            //shape.set('fill','#0000AA');
        }

        // Draw initial location
        var drawX, drawY;
        if (data.x) {
            drawX = data.x;
        } else {
            drawX = data.canvas.getCenter().left - Advent.mapLocationSize / 2;
        }
        if (data.y) {
            drawY = data.y;
        } else {
            drawY = data.canvas.getCenter().top - Advent.mapLocationSize / 2;
        }
        var rect = new fabric.Rect({
            left: drawX,
            top: drawY,
            fill: Advent.mapLocationColorString,
            width: Advent.mapLocationSize,
            height: Advent.mapLocationSize,
            strokeWidth: 1,
            stroke: Advent.mapLocationColorString
        });
        rect.hasControls = false;
        rect.padding = 1;
        rect.borderColor = Advent.mapLocationColorString;
        rect.on('selected', function () {
            updateTitle(rect);
        });
        rect.previousX = rect.left;
        rect.previousY = rect.top;
        rect.index = data.canvas._objects.length - 2;
        rect.on('moving', function () {
            Advent.dragOtherShapes(data.canvas, rect);
        });
        data.canvas.add(rect);
        if (data.firstLocation.name == Advent.currentMap.playerLocation.name) {
            var triangle = new fabric.Triangle({
                width: Advent.mapPlayerSize,
                height: Advent.mapPlayerSize,
                fill: Advent.gameTextLinkColor,
                left: data.canvas.getCenter().left - Advent.mapPlayerSize / 2,
                top: data.canvas.getCenter().top - Advent.mapPlayerSize / 2
            });
            triangle.hasControls = triangle.hasBorders = false;
            triangle.on('selected', function () {
                updateTitle(rect);
                data.canvas.setActiveObject(rect);
            });
            triangle.previousX = triangle.left;
            triangle.previousY = triangle.top;
            triangle.index = data.canvas._objects.length - 2;
            triangle.on('moving', function () {
                Advent.dragOtherShapes(data.canvas, triangle);
            });
            data.canvas.add(triangle);
        }
        if (!data.firstLocation.seen) {
            rect.set('fill', Advent.mapUnseenFillColor);
            var questionMark = new fabric.Text('?', {
                fontSize: Advent.mapQuestionMarkSize,
                left: rect.getCenterPoint().x,
                top: rect.getCenterPoint().y - Advent.mapQuestionMarkSize / 2,
                fontFamily: Advent.gameFontFamily,
                fill: Advent.gameTextColor,
                fontWeight: 'bold',
                originX: 'center'
            });
            questionMark.hasBorders = questionMark.hasControls = false;
            questionMark.on('selected', function () {
                updateTitle(rect);
                data.canvas.setActiveObject(rect);
            });
            questionMark.previousX = questionMark.left;
            questionMark.previousY = questionMark.top;
            questionMark.index = data.canvas._objects.length - 2;
            questionMark.on('moving', function () {
                Advent.dragOtherShapes(data.canvas, questionMark);
            });
            data.canvas.add(questionMark);
        }

        //Draw branched locations 
        if (data.firstLocation.seen) {
            if (data.cameFromDirection != "north") {
                if (data.firstLocation.northLocation) {
                    //Draw entryway
                    var fillString;
                    if (data.firstLocation.northGate) {
                        fillString = Advent.questTextColor;
                    } else {
                        fillString = Advent.mapLocationColorString;
                    }
                    var northEntrywayRect = new fabric.Rect({
                        left: drawX + Advent.mapLocationSize / 4,
                        top: drawY - Advent.mapLocationGapSize,
                        fill: fillString,
                        width: Advent.mapLocationSize / 2,
                        height: Advent.mapLocationGapSize
                    });
                    northEntrywayRect.hasBorders = northEntrywayRect.hasControls = false;
                    northEntrywayRect.previousX = northEntrywayRect.left;
                    northEntrywayRect.previousY = northEntrywayRect.top;
                    northEntrywayRect.index = data.canvas._objects.length - 2;
                    northEntrywayRect.on('moving', function () {
                        Advent.dragOtherShapes(data.canvas, northEntrywayRect);
                    });
                    data.canvas.add(northEntrywayRect);
                    //data.objectGroup.addWithUpdate(entrywayRect);
                    //Draw next room
                    Advent.renderLocations({
                        firstLocation: data.firstLocation.northLocation,
                        canvas: data.canvas,
                        cameFromDirection: "south",
                        x: drawX,
                        y: drawY - Advent.mapLocationGapSize - Advent.mapLocationSize,
                        roomLabel: data.roomLabel,
                        roomLabelBG: data.roomLabelBG
                    });
                }
            }
            if (data.cameFromDirection != "south") {
                if (data.firstLocation.southLocation) {
                    //Draw entryway
                    var fillString;
                    if (data.firstLocation.southGate) {
                        fillString = Advent.questTextColor;
                    } else {
                        fillString = Advent.mapLocationColorString;
                    }
                    var southEntrywayRect = new fabric.Rect({
                        left: drawX + Advent.mapLocationSize / 4,
                        top: drawY + Advent.mapLocationSize,
                        fill: fillString,
                        width: Advent.mapLocationSize / 2,
                        height: Advent.mapLocationGapSize
                    });
                    southEntrywayRect.hasBorders = southEntrywayRect.hasControls = false;
                    southEntrywayRect.previousX = southEntrywayRect.left;
                    southEntrywayRect.previousY = southEntrywayRect.top;
                    southEntrywayRect.index = data.canvas._objects.length - 2;
                    southEntrywayRect.on('moving', function () {
                        Advent.dragOtherShapes(data.canvas, southEntrywayRect);
                    });
                    data.canvas.add(southEntrywayRect);
                    //data.objectGroup.addWithUpdate(entrywayRect);
                    //Draw next room
                    Advent.renderLocations({
                        firstLocation: data.firstLocation.southLocation,
                        canvas: data.canvas,
                        cameFromDirection: "north",
                        x: drawX,
                        y: drawY + Advent.mapLocationSize + Advent.mapLocationGapSize,
                        roomLabel: data.roomLabel,
                        roomLabelBG: data.roomLabelBG
                    });
                }
            }
            if (data.cameFromDirection != "east") {
                if (data.firstLocation.eastLocation) {
                    //Draw entryway
                    var fillString;
                    if (data.firstLocation.eastGate) {
                        fillString = Advent.questTextColor;
                    } else {
                        fillString = Advent.mapLocationColorString;
                    }
                    var eastEntrywayRect = new fabric.Rect({
                        left: drawX + Advent.mapLocationSize,
                        top: drawY + Advent.mapLocationSize / 4,
                        fill: fillString,
                        width: Advent.mapLocationGapSize,
                        height: Advent.mapLocationSize / 2
                    });
                    eastEntrywayRect.hasBorders = eastEntrywayRect.hasControls = false;
                    eastEntrywayRect.previousX = eastEntrywayRect.left;
                    eastEntrywayRect.previousY = eastEntrywayRect.top;
                    eastEntrywayRect.index = data.canvas._objects.length - 2;
                    eastEntrywayRect.on('moving', function () {
                        Advent.dragOtherShapes(data.canvas, eastEntrywayRect);
                    });
                    data.canvas.add(eastEntrywayRect);
                    //data.objectGroup.addWithUpdate(entrywayRect);
                    //Draw next room
                    Advent.renderLocations({
                        firstLocation: data.firstLocation.eastLocation,
                        canvas: data.canvas,
                        cameFromDirection: "west",
                        x: drawX + Advent.mapLocationSize + Advent.mapLocationGapSize,
                        y: drawY,
                        roomLabel: data.roomLabel,
                        roomLabelBG: data.roomLabelBG
                    });
                }
            }
            if (data.cameFromDirection != "west") {
                if (data.firstLocation.westLocation) {
                    //Draw entryway
                    var fillString;
                    if (data.firstLocation.westGate) {
                        fillString = Advent.questTextColor;
                    } else {
                        fillString = Advent.mapLocationColorString;
                    }
                    var westEntrywayRect = new fabric.Rect({
                        left: drawX - Advent.mapLocationGapSize,
                        top: drawY + Advent.mapLocationSize / 4,
                        fill: fillString,
                        width: Advent.mapLocationGapSize,
                        height: Advent.mapLocationSize / 2
                    });
                    westEntrywayRect.hasBorders = westEntrywayRect.hasControls = false;
                    westEntrywayRect.previousX = westEntrywayRect.left;
                    westEntrywayRect.previousY = westEntrywayRect.top;
                    westEntrywayRect.index = data.canvas._objects.length - 2;
                    westEntrywayRect.on('moving', function () {
                        Advent.dragOtherShapes(data.canvas, westEntrywayRect);
                    });
                    data.canvas.add(westEntrywayRect);
                    //data.objectGroup.addWithUpdate(entrywayRect);
                    //Draw next room
                    Advent.renderLocations({
                        firstLocation: data.firstLocation.westLocation,
                        canvas: data.canvas,
                        cameFromDirection: "east",
                        x: drawX - Advent.mapLocationGapSize - Advent.mapLocationSize,
                        y: drawY,
                        roomLabel: data.roomLabel,
                        roomLabelBG: data.roomLabelBG
                    });
                }
            }
        }
        data.roomLabelBG.bringToFront();
        data.roomLabel.bringToFront();
        //Advent.broadcastAction("look map");
    }
}

Advent.dragOtherShapes = function (canvas, shape) {
    for (var i = 0; i < canvas._objects.length - 2; i++) {
        if (i != shape.index) {

            canvas._objects[i].left = canvas._objects[i].left - (shape.previousX - shape.left);
            canvas._objects[i].top = canvas._objects[i].top - (shape.previousY - shape.top);
            canvas._objects[i].previousX = canvas._objects[i].left;
            canvas._objects[i].previousY = canvas._objects[i].top;
            canvas._objects[i].setCoords();
        }

    }
    shape.previousX = shape.left;
    shape.previousY = shape.top;
};

Advent.showOptions = function(){
    $("#entityTitle").html("Options");
    
}

Advent.showJournal = function () {
    $("#entityTitle").html("Journal");
    var journalMarkup = "<strong><h4>Journal Entries</h4></strong>";
    if (Advent.journal.journalEntries.length == 0) {
        journalMarkup = journalMarkup.concat("<div>No journal entries found yet.</div>");
    } else {
        for (var i = 0; i < Advent.journal.journalEntries.length; i++) {
            journalMarkup = journalMarkup.concat("<div class=\"accordion\"><h3><strong>", Advent.journal.journalEntries[i].name, "</strong></h3><div style=\"padding:7px;\"><p>", Advent.journal.journalEntries[i].description, "</p>", Advent.journal.journalEntries[i].text, "</div></div>");
        }
    }
    $("#entityBody").html(journalMarkup);
    $(".accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    $(".subAccordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    Advent.enforceTheme();
    $("#entityModal").modal('show');
}

Advent.showQuests = function () {
    $("#entityTitle").html("Quests");
    var currentMarkup = "";
    var completeMarkup = "";
    var failedMarkup = "";
    for (var i = 0; i < Advent.quests.length; i++) {
        var optional = "";
        if (Advent.quests[i].optional) {
            optional = " (optional)";
        }
        var firstAccordion = "";
        if (i == 0) {
            firstAccordion = "first";
        }
        var bodyMarkup = "<p><div ".concat("class=\"gameQuestHeader ", firstAccordion, "accordion\"><h3><strong>", Advent.quests[i].name, optional, "</strong></h3><div style=\"padding:7px;\"><i>", Advent.quests[i].description, "</i><br/>");
        var completedTaskMarkup = "";
        var currentTaskMarkup = "";
        var failedTaskMarkup = "";
        for (var j = 0; j < Advent.quests[i].tasks.length; j++) {
            var taskOptional = "";
            if(Advent.quests[i].tasks[j].optional){
                taskOptional = " (optional)";
            }
            if (Advent.quests[i].tasks[j].complete) {
                completedTaskMarkup = completedTaskMarkup.concat("<div class=\"subAccordion\"><h3>", Advent.quests[i].tasks[j].name, taskOptional,"</h3><div>", Advent.quests[i].tasks[j].description, "</div></div>");
            } else if (Advent.quests[i].tasks[j].complete == false) {
                if(Advent.quests[i].tasks[j].failed){
                    failedTaskMarkup = failedTaskMarkup.concat("<div class=\"subAccordion\"><h3>", Advent.quests[i].tasks[j].name, taskOptional,"</h3><div>", Advent.quests[i].tasks[j].description, "</div></div>");
                }else{
                    if (j == 0) {
                        currentTaskMarkup = currentTaskMarkup.concat("<div class=\"currentSubAccordion\"><h3>", Advent.quests[i].tasks[j].name, taskOptional,"</h3><div>", Advent.quests[i].tasks[j].description, "</div></div>");
                    } else if (Advent.quests[i].tasks[j - 1].complete || Advent.quests[i].tasks[j - 1].failed) {
                        currentTaskMarkup = currentTaskMarkup.concat("<div class=\"currentSubAccordion\"><h3>", Advent.quests[i].tasks[j].name, taskOptional,"</h3><div>", Advent.quests[i].tasks[j].description, "</div></div>");
                    }
                }
            }
            //bodyMarkup = bodyMarkup.concat("<div class=\"subAccordion\"><h3>", Advent.quests[i].tasks[j].name, "</h3><div>", Advent.quests[i].tasks[j].description, "</div></div>");
        }
        var currentLabel = "";
        if (currentTaskMarkup != "") {
            currentLabel = "</br><strong>Current Task</strong>";
        }
        var completedLabel = "";
        if (completedTaskMarkup != "") {
            completedLabel = "</br><strong>Completed Tasks</strong>";
        }
        var failedLabel = "";
        if(failedTaskMarkup != ""){
            failedLabel = "</br><strong>Failed Tasks</strong>";
        }
        bodyMarkup = bodyMarkup.concat(currentLabel.concat(currentTaskMarkup, completedLabel, completedTaskMarkup, failedLabel,failedTaskMarkup,"</div></div>"));
        bodyMarkup = bodyMarkup.concat();
        if(Advent.quests[i].failed){
            failedMarkup = failedMarkup.concat(bodyMarkup, "</p>");
        }else if (!Advent.quests[i].complete) {
            currentMarkup = currentMarkup.concat(bodyMarkup, "</p>");
        } else {
            completeMarkup = completeMarkup.concat(bodyMarkup, "</p>");
        }
    }
    var currentQuestLabel = "";
    var completedQuestsLabel = "";
    var failedLabel = "";
    if (currentMarkup != "") {
        currentQuestLabel = "<h4>Current Quests</h4>";
    }
    if (completeMarkup != "") {
        completedQuestsLabel = "<h4>Completed Quests</h4>";
    }
    if (failedMarkup != ""){
        failedLabel = "<h4>Failed Quests</h4>";
    }
    $("#entityBody").html("Tap an item to see more information.<br/>".concat(currentQuestLabel.concat(currentMarkup, completedQuestsLabel, completeMarkup, failedLabel, failedMarkup)));

    $(".firstaccordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    $(".accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    $(".subAccordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: false
    });
    $(".currentSubAccordion").accordion({
        heightStyle: "content",
        collapsible: true,
        active: 0
    });
    Advent.enforceTheme();
    $("#entityModal").modal('show');
    Advent.broadcastAction("look quests");
}

Advent.removePerson = function (name) {
    for (var i = 0; i < Advent.currentMap.playerLocation.people.length; i++) {
        if (Advent.currentMap.playerLocation.people[i].name == name) {
            Advent.currentMap.playerLocation.people.splice(i, 1);
        }
    }
}

Advent.takeItem = function (itemName, keepOpen) {
    for (var i = 0; i < Advent.currentMap.playerLocation.props.length; i++) {
        var prop = Advent.currentMap.playerLocation.props[i];
        if (itemName == prop.name) {
            Advent.playerInventory.push(prop);
            Advent.currentMap.playerLocation.props.splice(i, 1);
            Advent.playerInventory.sort(Advent.compare);
        } else if (prop.insideProps.length > 0 && !prop.locked) {
            for (var j = 0; j < prop.insideProps.length; j++) {
                var insideProp = prop.insideProps[j];
                if (itemName == insideProp.name) {
                    Advent.playerInventory.push(insideProp);
                    prop.insideProps.splice(j, 1);
                    Advent.playerInventory.sort(Advent.compare);
                }
            }
        }
    }
    if (!keepOpen) {
        $("#entityModal").modal('hide');
    }
    Advent.queueText("".concat(itemName.capitalizeFirstLetter(), " has been added to your inventory."));
    Advent.broadcastAction("take ".concat(itemName.toLowerCase()));
}

Advent.updateStory = function () {
    if (Advent.messageQueue.length > 0) {
        if (!($("#entityModal").data('bs.modal') || {}).isShown) {
            var newMessage = Advent.messageQueue.splice(0, 1);

            //First, replace any special markup with links
            var propPattern = /<prop name='[\w\s]+'>[\w\s]+<\/prop>/;
            if (propPattern.test(newMessage)) {
                Advent.queueText(String(newMessage).match(propPattern));
            }

            $(Advent.jQueryGameTextDiv).html(Advent.storyText + "<span id='fadeText' style='display:none;'>" + newMessage + "</span>");
            $("#fadeText").fadeIn(Advent.fadeTime - 50);
            Advent.storyText += newMessage;
            //Advent.scrollToBottom();
            //var testVal = $("#gameTextDiv").prop('scrollHeight');
            //alert(testVal);
            if (Advent.messageQueue.length > 0) {
                setTimeout(Advent.updateStory, Advent.updateTime);
            }
        } else {
            setTimeout(Advent.updateStory, Advent.updateTime);
        }
        Advent.enforceTheme();
            if($(Advent.jQueryGameTextDiv).scrollTop() + $(Advent.jQueryGameTextDiv).height() < $(Advent.jQueryGameTextDiv).prop('scrollHeight') && !Advent.scrollIndicator) {
                Advent.scrollIndicator = true;
                $(Advent.jQueryScrollIndicatorDiv).show();
   }
    }
};

Advent.addJournalEntry = function (entry) {
    Advent.journal.journalEntries.push(entry);
    Advent.journal.journalEntries.sort(Advent.compare);
    Advent.queueText(entry.name.capitalize().concat(" has been added to your journal."));
}

Advent.save = function (lastCompletedSceneString) {
    localStorage["completedScene"] = lastCompletedSceneString;
    localStorage["playerInventory"] = JSON.stringify(Advent.playerInventory);
    localStorage["quests"] = JSON.stringify(Advent.quests);
    localStorage["journal"] = JSON.stringify(Advent.journal);
    localStorage["currentTheme"] = Advent.currentTheme;
}

Advent.existingSave = function(){
    return localStorage["completedScene"];
}

Advent.loadPreviousGame = function () {
    Advent.playerInventory = JSON.parse(localStorage["playerInventory"]);
    Advent.quests = JSON.parse(localStorage["quests"]);
    Advent.journal = JSON.parse(localStorage["journal"]);
    Advent.currentTheme = localStorage["currentTheme"];
    Advent.setTheme(Advent.currentTheme);
}

Advent.compare = function (a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}

///////////////////
// JS extensions //
///////////////////

String.prototype.capitalize = function () {
    return this.toLowerCase().replace(/(^|\s+)\b\w/g, function (m) {
        return m.toUpperCase();
    });
};

String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

String.prototype.quoteSafe = function () {
    return this.replace(/'/g, "\\\'");
}

if (!String.prototype.includes) {
    String.prototype.includes = function () {
        'use strict';
        return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
}