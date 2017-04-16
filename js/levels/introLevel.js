loadIntroLevel = function () {

    //Build map
    var introMap = new Advent.Map(),
        sleepArea = new Advent.Location();
    introMap.name = "Your Chamber";

    //sleeping area
    //var sleepArea = new Advent.Location();
    sleepArea.name = "your sleeping area";
    sleepArea.description = "Your sleeping area consists of a small bed in the corner of the room.";

    //study area
    var studyArea = new Advent.Location();
    studyArea.name = "your study area";
    studyArea.description = "Your study area includes a desk against the wall for writing and reading as well as a plain wooden chair. This is where you spend most of your time, reading to remember and connect with the outside world and writing about your experiences with the Order.";

    //changing area
    var changingArea = new Advent.Location();
    changingArea.name = "your changing area";
    changingArea.description = "Your changing area contains an old dresser holding the extra few garments you got to bring here with you. A large piece of shiny metal above it acts as a mirror.";

    //door area
    var doorArea = new Advent.Location();
    doorArea.name = "your chamber door";
    doorArea.description = "A large, heavy door connects the southwest corner of your chamber to the rest of the Emerald Stronghold. One of the Order's lackeys is usually nearby, ensuring you don't unexpectedly leave.";

    //add props
    var journalEntry1 = new Advent.Document();
    journalEntry1.name = "Journal Entry #1";
    journalEntry1.description = "By Garrett Blacwin, dated 1~9~2AE";
    journalEntry1.text = "<p>The months following the exile of the king were full of fighting and confusion. Restoring peace would have been the duty of the military, but the king's army went through chaos and infighting of its own before deferring to the Elder Island council's authority. This kept father away from home, serving with his men longer than ever before.</p><p>We were pleased when mother made friends with ladies from town. We didn't think much of it when they first spoke about the Order of the Ancient Due. We only knew the Order as an odd cluster of followers of the old teachings of the Faithful Settlement. Most all of us islanders had ancesters who were Settlers. They were a peaceful people who believed in caring for one another and for the tribes of the Lesser Isles.</p><p>We couldn't have known the true nature of this new Order. We didn't know this kind of evil existed in the Jade Chain.</p><p>- Garrett Blacwin<br/>1~9~2AE</p>";
    journalEntry1.canTake = true;

    var journalEntry2 = new Advent.Document();
    journalEntry2.name = "Journal Entry #2";
    journalEntry2.description = "By Garrett Blacwin, dated 5~25~2AE";
    journalEntry2.text = "<p>Father was still away when the messenger made his move. The call went out that the Order would soon take up residence in the Emerald Stronghold, freshly abandoned after the trial and subsequent exile of the king. Mother said we were to turn our land and possessions over to the Order, and that our faith was all that could return our father safely. It was all done days later.</p><p>Messenger Magnus took a liking to my mother. She stays in the keep with the Anointed and helps free the \"Outlanders\" as the order calls those outside, of their meager possessions. I had little recourse, but I didn't make the transition easy. I disappeared more than once but the Order found me. I was relocated to the stronghold's inner courtyard apartments alongside servants and workers. There's usually someone posted outside my door.</p><p>Does my father even know we're gone?</p><p>- Garrett Blacwin<br/>5~25~2AE</p>";
    journalEntry2.canTake = true;

    var journalEntry3 = new Advent.Document();
    journalEntry3.name = "Journal Entry #3";
    journalEntry3.description = "By Garrett Blacwin, dated 8~20~2AE";
    journalEntry3.text = "<p>Days go by painfully slowly. Each day begins with another of Magnus' mind-numbing sermons. More sheep drag their earthly possessions in to be appropriated by the cult. Then, I'm escorted back to this room like a prisoner to a cell, leaving only for assigned labor.</p><p>With each passing day I recognize my mother less. Is it too late to reach her? Even if not, how could she ever be guided out from under the close eye of the messenger himself? Would my father take her back?</p><p>- Garrett Blacwin<br/>8~20~2AE</p>";
    journalEntry3.canTake = true;

    var box = new Advent.Prop();
    box.name = "a plain wooden box";
    box.description = "A small box used to store belongings.";
    box.canOpen = true;
    box.insideProps.push(journalEntry2);

    //Create people
    var iris = new Advent.Person();
    iris.name = "Iris Brayden";
    iris.description = "Initiate of the Order by relation to her father, Associate Messenger Denus Brayden. One of few people of your approximate age in residence at the stronghold. You find her quite distracting.";
    iris.status = "standing in the doorway.";

    //Create dialog
    var i1 = new Advent.Line("Good morning, Outlander. How are you settling in?", 0, 0, "player");
    iris.lines.push(i1);

    var i2 = new Advent.Line("So sorry the second largest structure in all of the Jade Chain is displeasing to you! But really, if you gained the trust of the Anointed, things could get a lot more pleasant for you.", 0, 4, "npc");
    iris.lines.push(i2);

    var i3 = new Advent.Line("I'd be careful who hears those words. The Emerald Stronghold does indeed have prisoner cells, you know.", 0, 4, "npc");
    iris.lines.push(i3);

    var i4 = new Advent.Line("Not today, Outlander.", 0, 4, "npc");
    iris.lines.push(i4);

    var i5 = new Advent.Line("I just wanted to warn you, Quentin Cadby is on his way to find you. He isn't happy.", 0, 1, "player");
    iris.lines.push(i5);

    var i6 = new Advent.Line("It seems Messenger Magnus considers you a liability. He's assigned Quentin to be your keeper.", 0, 1, "player");
    iris.lines.push(i6);

    var i7 = new Advent.Line("Perhaps he had better things to do than escort you about the grounds all day.", 0, 1, "player");
    iris.lines.push(i7);

    var i8 = new Advent.Line("Like you, he hasn't been with the Order for long. Also like you, he's a bit rough around the edges so I'd try to keep him happy. You could learn a few things from him. He knows the benefits of staying in line and staying in the good graces of the Anointed.", 0, 1, "player");
    iris.lines.push(i8);

    var i9 = new Advent.Line("I should get about my business. Your name is heard frequently behind closed doors. Things may get interesting for you soon. Speak and act carefully.", 0, null, null, "learned about quentin");
    iris.lines.push(i9);

    var p1Array = [];
    var p1 = new Advent.Line("I could go for a room upgrade.", 0, 1, "npc");
    p1Array.push(p1);

    var p2 = new Advent.Line("A prisoner rarely enjoys his cell.", 0, 2, "npc");
    p1Array.push(p2);

    var p3 = new Advent.Line("Just fine, won't you come in?", 0, 3, "npc");
    p1Array.push(p3);
    iris.playerLines.push(p1Array);

    var p2Array = [];
    var p4 = new Advent.Line("What does Quentin want with me?", 0, 5, "npc");
    var p5 = new Advent.Line("Why is he so upset?", 0, 6, "npc");
    var p6 = new Advent.Line("What else can you tell me about Quentin?", 0, 7, "npc");
    var p7 = new Advent.Line("Thanks for the warning.", 0, 8, "npc");
    p2Array.push(p4);
    p2Array.push(p5);
    p2Array.push(p6);
    p2Array.push(p7);
    iris.playerLines.push(p2Array);

    //Connect locations
    sleepArea.northLocation = studyArea;
    sleepArea.westLocation = doorArea;

    studyArea.southLocation = sleepArea;
    studyArea.westLocation = changingArea;

    doorArea.eastLocation = sleepArea;
    doorArea.northLocation = changingArea;

    changingArea.eastLocation = studyArea;
    changingArea.southLocation = doorArea;

    //Set player location
    introMap.playerLocation = sleepArea;

    //Assign map to game world
    Advent.currentMap = introMap;

    Advent.queueText(Advent.getTitleMarkup("<br/>Introduction<br/><br/>"));
    Advent.queueText("Welcome! It will be time for adventure soon. First, let's go over a few things you'll need to know.");
    Advent.queueText("This game is all about completing quests. Some are required and some are optional, but they will all impact how your story plays out. Let's try one now.");

    //Intro quest
    var introQuest = new Advent.Quest();
    introQuest.name = "Tutorial";
    introQuest.description = "Learn how to play the game while exploring your chamber.";

    //Quest tasks
    var task1 = new Advent.Task();
    task1.name = "Quest Tracking";
    task1.description = "View your current quest and task information using the Quests button.";
    task1.parentQuest = introQuest.name;

    var task2 = new Advent.Task();
    task2.name = "Baby Steps";
    task2.description = "Move to a new location using the location's name link.";
    task2.parentQuest = introQuest.name;

    var task3 = new Advent.Task();
    task3.name = "You Are Here";
    task3.description = "Examine the area using the Map button.";
    task3.parentQuest = introQuest.name;

    var task4 = new Advent.Task();
    task4.name = "Further Reading";
    task4.description = "Examine and take the document in your study area.";
    task4.parentQuest = introQuest.name;

    var task5 = new Advent.Task();
    task5.name = "Who's There?";
    task5.description = "See who's at the door.";
    task5.parentQuest = introQuest.name;

    var task6 = new Advent.Task();
    task6.name = "One More Thing";
    task6.description = "See what you can learn about Quentin Cadby.";
    task6.optional = true;
    task6.parentQuest = introQuest.name;

    //Journal Quest
    var journalQuest = new Advent.Quest();
    journalQuest.optional = true;
    journalQuest.name = "Gather Your Thoughts";
    journalQuest.description = "Find the 3 journal entries hidden around your chamber.";

    //Journal Quest Tasks
    var jTask1 = new Advent.Task();
    jTask1.name = "Journal Entry #1";
    jTask1.description = "Find Journal Entry #1 hidden in your chamber.";
    jTask1.parentQuest = journalQuest.name;


    var jTask2 = new Advent.Task();
    jTask2.name = "Journal Entry #2";
    jTask2.description = "Find Journal Entry #2 hidden in your chamber.";
    jTask2.parentQuest = journalQuest.name;


    var jTask3 = new Advent.Task();
    jTask3.name = "Journal Entry #3";
    jTask3.description = "Find Journal Entry #3 hidden in your chamber.";
    jTask3.parentQuest = journalQuest.name;

    journalQuest.tasks.push(jTask1);
    journalQuest.tasks.push(jTask2);
    journalQuest.tasks.push(jTask3);

    //Quest input handling
    Advent.handleInput = function (message) {
        if (message == "look quests" && task1.isCurrentTask()) {
            Advent.queueText("Great!");
            Advent.queueText(" The Quests button can show you your past and present quests and tasks at any time.", true);
            Advent.queueText(" Time to drop you into the game world to get comfortable interacting with your surroundings.", true);
            task1.completeTask();
            Advent.currentMap.playerLocation.getDescription(true);
        } else if ((message == "location your study area" || message == "location your chamber door") && task2.isCurrentTask()) {
            Advent.queueText("Well done!");
            Advent.queueText(" Location links will take you to a new location if there isn't a locked door in the way. You have to be able to see the new location from the location you're currently in.", true);
            Advent.queueText(" To help you keep track of your place in the world, there's a map you can check out at any time.", true);
            task2.completeTask();
        } else if (message == "look map" && task3.isCurrentTask()) {
            Advent.queueText("Awesome.");
            Advent.queueText(" Accessing the map will show you your location and the areas around you. Clicking on a location will show you its name. You will also see locations of areas you haven't visited yet.", true);
            Advent.queueText(" Now let's take a look at items and inventory.", true);
            studyArea.props.push(journalEntry3);
            studyArea.description = "Your study area includes a desk against the wall for writing and reading as well as a plain wooden chair. This is where you spend most of your time, reading to remember and connect with the outside world and writing about your experiences with the Order. ".concat(Advent.getDocumentMarkup(journalEntry3, "A document"), " rests on the table.");
            studyArea.seen = false;
            task3.completeTask();
            if (Advent.currentMap.playerLocation.name == "your study area") {
                Advent.currentMap.playerLocation.getDescription(true);
            }
        } else if (message == "take journal entry #3" && task4.isCurrentTask()) {
            //Advent.journal.journalEntries.push(journalEntry3);
            Advent.addJournalEntry(journalEntry3);
            Advent.queueText("Perfect.");
            Advent.queueText(" Some items need to be added to your inventory for later use in the story. You will occasionally have to tap on plain words in the story text to reveal objects that are hidden from view. Keep an eye out for clues to point you in the right direction.", true);
            Advent.queueText(" You can use the Inventory button at any time to see what you've collected so far. You can use the Journal button to read entries for more information.", true);

            sleepArea.props.push(journalEntry1);
            sleepArea.description = sleepArea.description.concat(" ", Advent.getDocumentMarkup(journalEntry1, "A piece of paper", true), " sits beneath the edge of the bed.");
            sleepArea.seen = false;

            changingArea.props.push(box);
            changingArea.description = changingArea.description.concat(" ", Advent.getContainerMarkup(box, "A small wooden box"), " sits on top of the dresser.");
            changingArea.seen = false;

            task4.completeTask();
            Advent.quests.push(journalQuest);
            journalQuest.introduceQuest();
            jTask3.complete = true;

            doorArea.description = "A ".concat(Advent.getBroadcastMarkup("large, heavy door", "open door"), " connects the southwest corner of your chamber to the rest of the Emerald Stronghold. One of the Order's lackeys is usually nearby, ensuring you don't unexpectedly leave.");

            doorArea.seen = false;

            Advent.queueText("You hear someone outside the door...");
        } else if (message == "open door") {
            doorArea.people.push(iris);
            Advent.queueText("You open the door and are surprised to see ".concat(Advent.getPersonMarkup(iris), " standing before you."));
            Advent.queueText("Interacting with people you encounter is vital to your progress through the story. See what Iris has to say.");
            task5.completeTask();
        } else if (message == "learned about quentin") {
            Advent.queueText("Iris leaves the area.");
            Advent.removePerson(iris.name);
            Advent.queueText("Excellent. Your conversation earned you valuable information and let you know what to expect.");
            task6.completeTask(true);
            if(!journalQuest.complete){
                Advent.failQuest(journalQuest.name);
            }
            Advent.queueText("That's it! You've learned the basics about participating in the story ahead. Good luck in  ".concat(Advent.getBroadcastMarkup("the Jade Chain", "ready to continue"), "!"));
        } else if (message == "ready to continue") {
            if(!Advent.quests[1].complete){
                Advent.quests[1].failed = true;
            }
            Advent.save('0');
            Advent.storyText = "";
            loadLevel01Scene01();
        }
        if (message == "take journal entry #1") {
            //Advent.journal.journalEntries.push(journalEntry1);
            Advent.addJournalEntry(journalEntry1);
            jTask1.completeTask(jTask2.complete);
        } else if (message == "take journal entry #2") {
            //Advent.journal.journalEntries.push(journalEntry2);
            Advent.addJournalEntry(journalEntry2);
            jTask2.completeTask(jTask1.complete);
        }
    }

    introQuest.tasks.push(task1);
    introQuest.tasks.push(task2);
    introQuest.tasks.push(task3);
    introQuest.tasks.push(task4);
    introQuest.tasks.push(task5);
    introQuest.tasks.push(task6);

    Advent.quests.push(introQuest);

    introQuest.introduceQuest();

};