loadLevel02Scene01 = function(){
    // Build Map
    var yardsMap = new Advent.Map();
    yardsMap.name = "Emerald Stronghold Yards";
    
    // Map Locations
    var innerYard = new Advent.Location();
    innerYard.name = "the inner yard";
    innerYard.description = "The fortified side of the Emerald Stronghold courtyard. This large, open area is now used primarily by the Anointed for operations of the Order as well as simply steering clear of the common initiate.";
    
    var northernApartments = new Advent.Location();
    northernApartments.name = "the northern apartments";
    northernApartments.description = "";
    
    var keep = new Advent.Location();
    keep.name = "the keep";
    keep.description = "";
    
    var chapel = new Advent.Location();
    chapel.name = "the Emerald Stronghold Chapel";
    chapel.description = "";
    
    var outerYard = new Advent.Location();
    outerYard.name = "the outer yard";
    outerYard.description = "The larger, unprotected side of the Emerald Stronghold courtyard. This side of the yard houses all entryways to the stronghold itself and is kept open to allow initiates and visitors from outside the stronghold to attend chapel, make donations, and attend to business matters.";
    
    var library = new Advent.Location();
    library.name = "the library";
    library.description = "The building at the north end of the outer yard houses a number of functional areas but, due to visitor access issues, it is only known for its library. The stronghold library houses thousands of books, documents, and records dating back to the earliest civilization of the Jade Chain. Upkeep of this facility was one of the most troublesome sticking points during the negotiation of the Order's takeover of the Emerald Stronghold.";
    
    var stables = new Advent.Location();
    stables.name = "the stables";
    stables.description = "";
    
    innerYard.northLocation = northernApartments;
    innerYard.northGate = "You can't return to your quarters just yet.";
    northernApartments.southLocation = innerYard;
    
    innerYard.westLocation = keep;
    innerYard.westGate = "You aren't allowed in the keep at this time.";
    keep.eastLocation = innerYard;
    
    innerYard.southLocation = chapel;
    innerYard.southGate = "You can't return to the chapel until tomorrow morning.";
    chapel.northLocation = innerYard;
    
    innerYard.eastLocation = outerYard;
    outerYard.westLocation = innerYard;
    outerYard.westGate = "You're expected at the library. You can't return to the inner yard just yet.";
    
    outerYard.northLocation = library;
    outerYard.northGate = "Finish speaking with Quentin before continuing to the library.";
    library.southLocation = outerYard;
    
    outerYard.southLocation = stables;
    stables.northLocation = outerYard;
    outerYard.southGate = "You can't visit the stables right now.";
    
    yardsMap.playerLocation = outerYard;
    outerYard.seen = true;
    
    Advent.currentMap = yardsMap;
    
    var quentin = new Advent.Person();
            quentin.name = "Quentin Cadby";
            quentin.description = "A brute-for-hire under the employ of Magnus Ulmar. He has recently been appointed as your keeper in the stronghold.";
            quentin.status = "standing in front of you.";
    
    var q1 = new Advent.Line("Messy business, that.",0,0,"player");
    var q2 = new Advent.Line("Looked like another lost soul, blaming us for his foolishness.",0,1,"player");
    var q3 = new Advent.Line("I'm sure they'll seek instruction at the keep. That's where anyone with the authority to make a decision will be.",0,2,"player");
    var q4 = new Advent.Line("We have the right to handle a thief as we please. He could be put to death, rightfully, but I expect the messenger will try to reason with him.",0,4,"npc");
    var q5 = new Advent.Line("Perhaps they'll keep him around for re-education.",0,1,"player");
    var q6 = new Advent.Line("I think you just saw why. The Order welcomes all people, whether they seek initiation or not, but we do not tolerate thieves.",0,6,"npc");
    var q7 = new Advent.Line("Let this be a lesson to you, Blacksheep. You believe you are simply surrounded by goat herders, musicians, scholars, and all other nature of common folk here. You should wonder how many of them are waiting to take you down at your first misstep.",0,1,"player");
    var q8 = new Advent.Line("Show's over. Off you go.",null,null,null,"finished discussion");
    
    var p1 = new Advent.Line("What the hell was that?!",0,1,"npc");
    var p2 = new Advent.Line("Where is he being taken?",0,2,"npc");
    var p3 = new Advent.Line("What will become of him?",0,3,"npc");
    var p4 = new Advent.Line("Why does the Order have secret guards?",0,5,"npc");
    var p5 = new Advent.Line("Fine. Let's move on.",0,7,"npc");
    
    quentin.lines = [q1,q2,q3,q4,q5,q6,q7,q8];
    quentin.playerLines = [[p1],[p2,p4,p5],[p3]];
    
    outerYard.people.push(quentin);
    
    var serviceQuest = new Advent.Quest();
    serviceQuest.name = "A Life of Service";
    serviceQuest.description = "Fulfill the Order's training requirements.";
    
    var sTask1 = new Advent.Task();
    sTask1.name = "Books and More";
    sTask1.description = "Report to the library for your assignment.";
    sTask1.parentQuest = serviceQuest.name;
    
    var sTask2 = new Advent.Task();
    sTask2.name = "A Lost Soul";
    sTask2.description = "Learn about security incidents within the stronghold.";
    sTask2.parentQuest = serviceQuest.name;
    
    serviceQuest.tasks = [sTask1,sTask2];
    Advent.quests.push(serviceQuest);
    
    
    Advent.queueText(Advent.getTitleMarkup("<br/>Chapter 2<br/><br/>"));
    serviceQuest.introduceQuest();
    Advent.queueText("Quentin arrives just after sunset to accompany you to the library. Together you leave the north apartments and enter the warm night air in the inner yard. You feel gentle breezes you’re certain are the ghosts of the first Settlers, unable to rest while this cult occupies the stronghold. You’re pulled away from these thoughts as scuffling and shouting is heard from the outer yard. Quentin tenses before moving into a clumsy jog toward the gate between the yards.");
    Advent.queueText("As you reach the outer courtyard you see that the action is near the stables, where a man has just been pulled off a horse and is surrounded by workers who are normally cleaning, tending to the animals, and operating the gates. In a flash the man produces a dagger as he rises and sinks it into the shoulder of the man approaching him before being rushed by the rest of his captors.");
    Advent.queueText("\"I will have what is mine! You are the thieves!\" the man shouts as he is pulled toward the gate behind you. \"Cowards! You have no authority over me!\"");
    Advent.queueText("You're a bit stunned by the intensity of the moment as the man is dragged past you into the inner yard.");
    Advent.queueText(" ".concat(Advent.getPersonMarkup(quentin)," reappears at your side."),true);
    
    Advent.handleInput = function(message) {
        if(message == "finished discussion"){
            sTask2.completeTask();
            Advent.queueText("You collect yourself and continue to ".concat(Advent.getBroadcastMarkup("the library","location the library"),"."));
        }if(message == "location the library"){
                Advent.sceneBreak();
            }
    }
}