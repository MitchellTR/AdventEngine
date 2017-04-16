loadLevel01Scene01 = function(){
    ///////////////
    // Build map //
    ///////////////
    var corridorMap = new Advent.Map();
    corridorMap.name = "Corridor Area";
    
    // Map Locations
    var chamber = new Advent.Location();
    chamber.name = "your chamber";
    chamber.description = "Your chamber consists of a small bed, a study area, and a changing area. There's nothing for you to do here at the moment.";
    
    var northernCorridor = new Advent.Location();
    northernCorridor.name = "the upper corridor";
    northernCorridor.description = "The northernmost section of a corridor that separates the Emerald Stronghold's outer yard from the inner yard. It connects the northern apartments to the chapel further south.";
    
    var centralCorridor = new Advent.Location();
    centralCorridor.name = "the central corridor";
    centralCorridor.description = "Just above the gate separating the yards, the central corridor leads north to the northern apartments and south to the chapel.";
    
    var southernCorridor = new Advent.Location();
    southernCorridor.name = "the southern corridor";
    southernCorridor.description = "The chapel end of the corridor separating the outer and inner yards.";
    
    // Location connections
    chamber.westLocation = northernCorridor;
    chamber.westGate = "Your door is currently shut.";
    northernCorridor.eastLocation = chamber;
    
    northernCorridor.southLocation = centralCorridor;
    centralCorridor.northLocation = northernCorridor;
    
    centralCorridor.southLocation = southernCorridor;
    southernCorridor.northLocation = centralCorridor;
    
    corridorMap.playerLocation = chamber;
    chamber.seen = true;
    
    Advent.currentMap = corridorMap;
    
    ///////////////////
    // Create people //
    ///////////////////
    
    // Daralis
    var daralis = new Advent.Person();
    daralis.name = "Daralis Blacwin";
    daralis.description = "Your mother is a fair woman of middle age with reddish brown hair. Her face shows no lines to reveal her past worries but also reveals no warmth. You've always felt her gaze was cold and distrusting, but it's difficult to know if that's only when she's looking at you.";
    daralis.status = "standing at the top of the stairs in a flowing dress fit for royalty. No doubt, a gift from Magnus himself.";
    
    var d1 = new Advent.Line("Good morning, son. Are you getting adjusted to your new accomodations?",0,0,"player");
    var d2 = new Advent.Line("I can see you're in no mood to talk so I suppose there's no need to discuss anything else. Enjoy the morning word.",null,null,null,"daralis conversation over");
    var d3 = new Advent.Line("Excellent. I wanted to mention you might expect a special announcement this morning and it wouldn't do for you to act too surprised.",0,1,"player");
    var d4 = new Advent.Line("You will learn your role here with the Order now that we've taken up residence in the stronghold.",0,2,"player");
    var d5 = new Advent.Line("Argumentative to the last. I can't continue this conversation. Enjoy the morning word.",null,null,null,"daralis conversation over");
    var d6 = new Advent.Line("There are no unworthy tasks in the Faithful Settlement. It was nice to speak with you, son.",0,0,null,"daralis conversation over");
    
    var pd1 = new Advent.Line("Is that really something you're concerned about?",-1,1,"npc","no discussion with daralis");
    var pd2 = new Advent.Line("I'm doing well enough, thank you.",1,2,"npc","discussion with daralis");
    var pd3 = new Advent.Line("What sort of announcement?",0,3,"npc");
    var pd4 = new Advent.Line("I don't intend to fulfill any assigned role here, actually.",-1,4,"npc","spoke honestly to daralis");
    var pd5 = new Advent.Line("Well that certainly will be interesting. Thank you.",1,5,"npc","spoke carefully to daralis");
    
    daralis.lines = [d1,d2,d3,d4,d5,d6];
    daralis.playerLines = [[pd1,pd2],[pd3],[pd4,pd5]];
    
    // Quentin
    var quentin = new Advent.Person();
    quentin.name = "Quentin Cadby";
    quentin.description = "A brute-for-hire under the employ of Magnus Ulmar. He is an imposing, if unintelligent man from your parents' generation. His long, dirty black hair and unkempt beard do little to help his already ill-tempered demeanor.";
    quentin.status = "standing at the door.";
    
    // Create dialog
    var q1 = new Advent.Line("Come Blacksheep. I'm sent to fetch you for the morning word.",0,0,"player","discussed departing with quentin");
    quentin.lines.push(q1);
    
    var q2 = new Advent.Line("So it is. And what good you've done your family name! Taken in by the Jade Chain's chosen people and wasting it with your tireless rebellion. Move your feet before I'm of a mind to thank you properly for this task.",0,1,"player");
    quentin.lines.push(q2);
    
    var q3 = new Advent.Line("(He cracks his knuckles) Bet I can change your mind.",-1,2,"player","refused to leave");
    quentin.lines.push(q3);
    
    var q4 = new Advent.Line("An unusually wise choice.",0,null,null,"ready to leave");
    quentin.lines.push(q4);
    
    var p1Array = [];
    var p1 = new Advent.Line("It's Blacwin.",0,1,"npc");
    p1Array.push(p1);
    quentin.playerLines.push(p1Array);
    
    var p2Array = [];
    var p2 = new Advent.Line("I'm not going anywhere.",0,2,"npc");
    p2Array.push(p2);
    
    var p3 = new Advent.Line("Fine. Lead the way.",0,3,"npc");
    p2Array.push(p3);
    quentin.playerLines.push(p2Array);
    
    var p3Array = [];
    p3Array.push(p3);
    quentin.playerLines.push(p3Array);
    
    ////////////
    // Quests //
    ////////////
    var wordQuest = new Advent.Quest();
    wordQuest.name = "The Morning Word";
    wordQuest.description = "Attend the morning meeting and learn what's going on in the Emerald Stronghold.";
    
    // Quest tasks
    var task01 = new Advent.Task();
    task01.name = "Seek the Promises";
    task01.description = "Hear the morning word in the stronghold chapel.";
    task01.parentQuest = wordQuest.name;
    
    var task02 = new Advent.Task();
    task02.name = "A Poor Shepherd Indeed";
    task02.description = "Learn how Quentin Cadby came to work for Magnus Ulmar.";
    task02.parentQuest = wordQuest.name;
    task02.optional = true;
    
    var task03 = new Advent.Task();
    task03.name = "Beautiful Disaster";
    task03.description = "Find something to discuss with Iris Brayden.";
    task03.parentQuest = wordQuest.name;
    task03.optional = true;
    
    var task04 = new Advent.Task();
    task04.name = "Pressed Down, Shaken Together";
    task04.description = "Observe the incoming outlanders in the outer yard.";
    task04.parentQuest = wordQuest.name;
    task04.optional = true;
    
    var task05 = new Advent.Task();
    task05.name = "Harder Than You'd Think";
    task05.description = "Have a pleasant conversation with your mother.";
    task05.parentQuest = wordQuest.name;
    task05.optional = true;
    
    wordQuest.tasks.push(task02);
    wordQuest.tasks.push(task03);
    wordQuest.tasks.push(task04);
    wordQuest.tasks.push(task05);
    wordQuest.tasks.push(task01);
    
    Advent.handleInput = function(message){
        if(message == "open door" && Advent.currentMap.playerLocation.people.length == 0){
            chamber.westGate = "Quentin Cadby is currently standing in your doorway.";
            Advent.currentMap.playerLocation.people.push(quentin);
            Advent.queueText(" ".concat(Advent.getPersonMarkup(quentin)," stops banging on the door as you open it. "),true);
        }else if(message == "discussed departing with quentin"){
            Advent.queueText("He orders you to follow him to hear the morning message. ",true);
        }
        else if(message == "refused to leave"){
            quentin.disposition = quentin.disposition - 1;
            Advent.queueText("You realize you probably didn't help yourself by trying to refuse Quentin's orders. His disposition has worsened. ",true);
        }else if(message == "ready to leave"){
            Advent.queueText("Nothing left to do but ".concat(Advent.getBroadcastMarkup("follow Quentin","depart with quentin"),". "),true);
        }else if(message == "depart with quentin" && Advent.currentMap.playerLocation == chamber){
            wordQuest.introduceQuest();
            Advent.removePerson(quentin.name);
            
            quentin.clearDialog();
            var q1 = new Advent.Line("Speak if you must, but move your feet.",0,0,"player");
            quentin.lines.push(q1);
            
            var q2 = new Advent.Line("I was just a tribesman from the Lesser Isles when Messenger Magnus brought the faithful together. I always knew I was meant for better than what I had, but that opinion got me in a bit of hot water from time to time. All the good messenger asked of me was what little my family had and, in return, accepted me as one of his anointed. Really I had only to gain.",0,1,"player");
            quentin.lines.push(q2);
            
            var q3 = new Advent.Line("They didn't want to come along. Looked at all this much the way you do, I imagine. Unlike you, they can do as they please.",0,2,"player");
            quentin.lines.push(q3);
            
            var q4 = new Advent.Line("The Jade Chain belongs to the Faithful Settlers. What's on it belongs to our order. By turning their backs, they became outlanders. I took what belongs to the Settlers to absolve my family of their thievery.",0,4,"npc","finished north dialog");
            quentin.lines.push(q4);
            
            var q5 = new Advent.Line("One foot in front of the other, Blacksheep.",0,null,null);
            quentin.lines.push(q5);
            
            var p1Array = [];
            var p1 = new Advent.Line("Where did the Order find you anyway?",0,1,"npc","asked about quentin");
            p1Array.push(p1);
            quentin.playerLines.push(p1Array);
            
            var p2Array = [];
            var p2 = new Advent.Line("Where is your family?",0,2,"npc");
            p2Array.push(p2);
            quentin.playerLines.push(p2Array);
            
            var p3Array = [];
            var p3 = new Advent.Line("Wait, you took everything your family had and left?",0,3,"npc");
            p3Array.push(p3);
            quentin.playerLines.push(p3Array);
            
            Advent.currentMap.playerLocation = northernCorridor;
            Advent.currentMap.playerLocation.people.push(quentin);
            quentin.status = "walking beside you.";
            northernCorridor.eastGate = "You have no further business to handle in your chamber right now.";
            Advent.currentMap.playerLocation.getDescription(true); 
            Advent.queueText(" Out the west windows over the inner yard you hear the faint sounds of an ".concat(Advent.getBroadcastMarkup("argument","look argument"),"."),true);
        }else if(message == "asked about quentin"){
            Advent.queueText("You ask Quentin about how he ended up here.");
        }else if(message == "finished north dialog"){
            Advent.queueText(" He tells you the disturbing details of how he traded his family's belongings for a position of authority within the Order.",true);
            task02.completeTask();
        }else if(message == "look argument" && !task03.complete && Advent.currentMap.playerLocation == northernCorridor){
            Advent.queueText("You look closer in the direction of the shouting and see that Iris Brayden is following and pleading with her father who is gesturing angrily and shouting back at her. At one point, he points up to the north end of the corridor. You wonder if this had anything to do with her recent visit.");
            task03.completeTask();
        }else if(message == "departing for location the central corridor" && northernCorridor.people.length == 1){
            Advent.removePerson(quentin.name);
            centralCorridor.people.push(quentin);
            if(task02.complete){
                quentin.clearDialog();
                var q1 = new Advent.Line("Messenger Magnus will be pleased to see new Settlers.",0,0,"player");
                var q2 = new Advent.Line("Your mother believes he is the best hope for the people.",0,1,"player");
                var q3 = new Advent.Line("A rebel <i>and</i> a poet. You're just full of useless traits aren't you?",0,2,"player");
                var q4 = new Advent.Line("Is that what you intend? To make your mother see the light and steal away to reunite your precious little family? You think your father eagerly awaits your return? You have nothing outside these walls, boy.",0,5,"npc");
                var q5 = new Advent.Line("First sensible words I've heard from you. Take it from me: You could do a lot worse here than to busy your hands, mind your business, and keep your opinions to yourself.",0,5,"npc","impressed cadby");
                var q6 = new Advent.Line("Keep moving, boy.",null,null,null);
                quentin.lines = [q1,q2,q3,q4,q5,q6];
                
                var p1 = new Advent.Line("Almost as pleased as he will be to see their horses.",0,1,"npc","discussed new settlers");
                var p2 = new Advent.Line("She is one drop in an ocean of victims here.",0,2,"npc");
                var p3 = new Advent.Line("She will see the light soon, and this will all come to an end.",0,3,"npc");
                var p4 = new Advent.Line("She can believe what she pleases. It isn't my problem.",2,4,"npc");
                quentin.playerLines = [[p1],[p2],[p3,p4]];
                
            }
        }else if(message == "location the central corridor"){
            Advent.queueText(" There is a ".concat(Advent.getBroadcastMarkup("commotion","look outer yard")," in the outer yard to the east."),true);
        }else if(message == "look outer yard" && !task04.complete && Advent.currentMap.playerLocation == centralCorridor){
            Advent.queueText("You see new initiates in the outer yard arriving in large numbers, bringing all manner of horses, cattle, belongings, and documentation to be received by graciously by members of the Order before making their way to the chapel. Most of the initiates are cheerful. Some look uneasy, a few seem to show frustration with the situation.");
            task04.completeTask();
        }else if(message == "discussed new settlers"){
            Advent.queueText("You discuss the crowd of new initiates with Quentin.");
        }else if(message == "impressed cadby"){
            Advent.queueText(" He is impressed that you seem to recognize you can't change your mother's mind. His disposition has improved.",true);
        }else if(message == "departing for location the southern corridor"){
            Advent.removePerson(quentin.name);
            southernCorridor.people.push(daralis);
        }else if(message == "location the southern corridor"){
            Advent.queueText("\"Brother Quentin,\" your mother says, nodding slightly. \"Thank you for accompanying my son.\"");
            Advent.queueText("\"It's my great pleasure, Sister,\" he says in a new voice, as kind as it is fake. \"Gave us a chance to admire this beautiful morning it did. I'll leave you to catch up.\"");
            Advent.queueText("Quentin hurries down the stairs and out of view.");
            Advent.queueText(" Your mother wishes to speak with you.",true);
        }else if(message == "no discussion with daralis"){
            Advent.queueText("You attempt to speak with your mother but you don't get very far. This is not uncommon. Her disposition has worsened.");
        }else if(message == "discussion with daralis"){
            Advent.queueText("You begin a conversation with your mother about a special announcement planned for today. Her disposition has improved.");
        }else if(message == "spoke honestly to daralis"){
            Advent.queueText(" You speak your mind, once again to your detriment, and the conversation ends abruptly. Your mother's disposition has worsened.",true);
        }else if(message == "spoke carefully to daralis"){
            Advent.queueText(" It requires careful speaking and almost none of what you're actually thinking, but the conversation ends on a pleasant note. Your mother's disposition has improved further.",true);
            task05.completeTask();
        }else if(message == "daralis conversation over"){
            daralis.clearDialog();
            var d1 = new Advent.Line("You're expected downstairs, son.");
            daralis.lines = [d1];
            Advent.queueText("Despite a growing sense of dread, ".concat(Advent.getBroadcastMarkup("enter the chapel","location the chapel")," when you're ready to proceed."));
        }else if(message == "location the chapel"){
            if(!task02.complete)
                Advent.failTask(task02);
            if(!task03.complete)
                Advent.failTask(task03);
            if(!task04.complete)
                Advent.failTask(task04);
            if(!task05.complete)
                Advent.failTask(task05);
            Advent.sceneBreak();
            loadLevel01Scene02();
        }
    }
    
    Advent.quests.push(wordQuest);
    Advent.queueText(Advent.getTitleMarkup("<br/>Chapter 1<br/><br/>"));
    Advent.queueText("You hear a knock at the ".concat(Advent.getBroadcastMarkup("door", "open door"),". "));

}