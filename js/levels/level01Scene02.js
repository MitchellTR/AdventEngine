loadLevel01Scene02 = function () {
    ///////////////
    // Build map //
    ///////////////
    var chapelMap = new Advent.Map();
    chapelMap.name = "The Emerald Chapel";

    var northWestDescription = "The northwest corner of the chapel is one of two exits. This one leads to the stairway at the south end of the corridor between the inner and outer yards. The Anointed and other residents of the inner yard arrive at the chapel here. Stronghold residents filter into the chapel around you.";

    var northEastDescription = "A large, open area for initiates to socialize before and after meetings. For now, attendees are mostly headed south to make their way to their seats.";

    var northDescription = "An area dedicated to scholastic material, primarily written by Messenger Magnus Ulmar. Members and visitors alike are strongly encouraged to stay current on modern interpretations of the teachings of the original Faithful Settlers.";

    var centerDescription = "The center of the sanctuary is designated for seating when meetings are in progress. Rows of stone benches leave guests uncomfortably close to one another, usually until being asked to move even closer by the speaker.";

    // Map Locations
    var northWest = new Advent.Location();
    northWest.name = "the inner yard entryway";
    northWest.description = northWestDescription;

    var north = new Advent.Location();
    north.name = "the shop area";
    north.description = northDescription;

    var northEast = new Advent.Location();
    northEast.name = "the fellowship area";
    northEast.description = northEastDescription;

    var east = new Advent.Location();
    east.name = "the outer yard entryway";
    east.description = "A large entryway on the east side of the chapel leads to the outer yard where new initiates and visitors from outside the stronghold enter.";

    var southEast = new Advent.Location();
    southEast.name = "the donation area";
    southEast.description = "While large donations of cattle, horses, and personal belongings are processed in the outer yard, this is the area for new initiates to turn over money and land ownership documentation to the Order. It is often staffed by a gracious, yet formidable, worker. It is not a coincidence that attendees must pass this area to get to a seat.";

    var south = new Advent.Location();
    south.name = "the sanctuary aisle";
    south.description = "After passing the other strategically located giving areas of the sanctuary, the aisle leads attendees to their seats.";
    south.westGate = "The chapel study is off limits right now.";

    var center = new Advent.Location();
    center.name = "sanctuary seating";
    center.description = centerDescription.concat(" If you're done looking around you can ", Advent.getBroadcastMarkup("take your seat", "seat taken"), ".");

    var southWest = new Advent.Location();
    southWest.name = "the chapel study";
    southWest.description = "Once a modest preparation area, the study is now a lavish office where Magnus conducts private business with esteemed guests from outside the stronghold.";

    var west = new Advent.Location();
    west.name = "the pulpit area";
    west.description = "An ornate pulpit on a platform raised much higher than necessary, considering the size of the sanctuary.";

    northWest.eastLocation = north;
    north.westLocation = northWest;

    north.eastLocation = northEast;
    northEast.westLocation = north;

    northEast.southLocation = east;
    east.northLocation = northEast;

    east.southLocation = southEast;
    southEast.northLocation = east;

    southEast.westLocation = south;
    south.eastLocation = southEast;

    south.northLocation = center;
    center.southLocation = south;

    south.westLocation = southWest;
    southWest.eastLocation = south;

    southWest.northLocation = west;
    west.southLocation = southWest;

    chapelMap.playerLocation = northWest;
    northWest.seen = true;
    Advent.currentMap = chapelMap;

    var handbill1 = new Advent.Document();
    handbill1.name = "The Foolish Settler";
    handbill1.description = "Handbill Series #1 - The Foolish Settler";
    handbill1.text = "<p>A series of images depicts a man purchasing basic commodities in a marketplace. He purchases a basket of fruit in one frame, a chicken in the next, and has his son fitted for shoes in another. He then passes a donation basket and drops but a few meager coins in. In a final image, he and his son are depicted outside in a rainstorm, cold and hungry. A caption reads: Only a fool would squander what little he has before Giving to the Settlement!</p><p>A second series of images depicts a different man turning his nose up at the marketplace fruit, walking away from the butcher's meats, and pulling his barefoot son past the shoe shop. He then fills a donation basket to overflowing. In a final image he and his son are surrounded by piles of gold, shoes, meat, and fruit as far as the eye can see. A caption reads: The Blessed Covenants say that if the Faithful bring the fruits of their labor to their people, their every need will be met!</p>";
    handbill1.canTake = true;
    northWest.props.push(handbill1);

    var handbill2 = new Advent.Document();
    handbill2.name = "The Proud Settler";
    handbill2.description = "Handbill Series #2 - The Proud Settler";
    handbill2.text = "A series of images depicts a conversation between Brother Marcus and one of the Anointed:<br/>A: Marcus, I need you to go into the city this week and bring our Message to the people.</br>M: I can't do that. I have a family and other responsibilities!<br/>A: Brother Marcus, it is imperative that you do as we ask of you. We have good reason.<br/>M: I won't do it! You'll have to send someone else!<br/><br/>A second series of images depicts a conversation between a sobbing Brother Marcus and another settler.<br/>One week later…<br/>M: I can't believe it. How did this happen?<br/>S: The Order wasn't able to send anyone into the city this week to deliver the Message.<br/>S: Many people had nothing left. Some starved to death. I'm sorry to hear some were your family and friends.<br/>M: I will never refuse the Anointed again.<br/>A caption reads: The Blessed Covenants say that if the Faithful are devout to the Anointed, they shall witness the salvation of kings and outlanders!";
    handbill2.canTake = true;
    northEast.props.push(handbill2);

    var handbill3 = new Advent.Document();
    handbill3.name = "The Tolerant Settler";
    handbill3.description = "Handbill Series #3 - The Tolerant Settler";
    handbill3.text = "An image depicts a Settler befriending an outlander.<br/>Caption: Brother Marcus met an outlander today…<br/><br/>Another image depicts the outlander sharing money with his family.<br/>Caption: The outlander does not believe in giving to the Settlement but Brother Marcus wants to be accepting of others.<br/><br/>The next image shows even more outlanders around Brother Marcus. He appears worried.<br/>Caption: Because Brother Marcus didn't have the courage to correct their beliefs, the outlanders have turned on him, questioning why he wouldn't just give to his own family instead.<br/><br/>A final image shows the outlanders having tied Brother Marcus to a tree and now surround him with torches and spears.<br/>Caption: Too bad for Brother Marcus. He is now at the mercy of the outlander tribe who will introduce chaos and suffering throughout our land.<br/><br/>The Blessed Covenants say that if the Faithful shall remain united in strength, their land shall remain peaceful and blessed!";
    handbill3.canTake = true;
    handbill3.examineLock = "\"Sorry Brother,\" the shop attendant says. \"This latest issue is only available to read in exchange for a donation.\"";

    var handbillQuest = new Advent.Quest();
    handbillQuest.name = "Light Reading";
    handbillQuest.description = "Collect all 3 of the handbills found in the sanctuary.";
    handbillQuest.optional = true;

    var hbTask1 = new Advent.Task();
    hbTask1.name = handbill1.name;
    hbTask1.description = "Find the first handbill.";
    hbTask1.parentQuest = handbillQuest.name;

    var hbTask2 = new Advent.Task();
    hbTask2.name = handbill2.name;
    hbTask2.description = "Find the second handbill.";
    hbTask2.parentQuest = handbillQuest.name;

    var hbTask3 = new Advent.Task();
    hbTask3.name = handbill3.name;
    hbTask3.description = "Find the third handbill.";
    hbTask3.parentQuest = handbillQuest.name;
    north.props.push(handbill3);

    handbillQuest.tasks = [hbTask1, hbTask2, hbTask3];

    var shopAttendant = new Advent.Person();
    shopAttendant.name = "The Shop Attendant";
    shopAttendant.description = "A worker for the Order, charged with tasks like making sure you don't walk off with anything.";
    shopAttendant.status = "sitting at the shop table.";

    var sa1 = new Advent.Line("If you don't have any gold I'm afraid we don't have much to discuss.");
    shopAttendant.lines = [sa1];
    north.people.push(shopAttendant);

    var donationAttendant = new Advent.Person();
    donationAttendant.name = "The Donation Attendant";
    donationAttendant.description = "A worker for the Order, charged with tasks like making sure you don't reach into the donation box and take a handful of coins.";
    donationAttendant.status = "sitting at the donation table.";

    var da1 = new Advent.Line("We're graciously accepting donations this morning.", 0, 0, "player");
    var da2 = new Advent.Line("Nice try. We haven't come this far by just letting people reach into the donation box and take a handful of coins.", 0, 0, "player");
    var da3 = new Advent.Line("Oh great. I have to take care of this. Don't touch anything.", null, null, null, "donation attendant leaves");
    donationAttendant.lines = [da1, da2, da3];

    var pda1 = new Advent.Line("Could I take some donation money to go learn something at the shop?", 0, 1, "npc");
    var pda2 = new Advent.Line("Hey I think someone is walking around stealing the handbills.", 0, 2, "npc");
    donationAttendant.playerLines = [[pda1, pda2]];
    southEast.people.push(donationAttendant);

    Advent.queueText("The Emerald Chapel is still an inspired work of stonemasonry, largely unchanged from the days of the old monarchy. The eastern sun shines through large windows to either side of the outer courtyard entryway, illuminating the sanctuary just as it did for the true Faithful Settlers under the reign of the converted king.");
    Advent.queueText(" It seems particularly perverse, now in the days of his exile, that this wayward sect of the old Settlement should inhabit this sacred place.", true);
    northWest.getDescription(true);

    Advent.queueText(" You notice a strange ".concat(Advent.getDocumentMarkup(handbill1, "handbill"), " hanging on the wall."), true);

    var wordQuest;

    for (var i = 0; i < Advent.quests.length; i++) {
        if (Advent.quests[i].name == "The Morning Word") {
            wordQuest = Advent.quests[i];
        }
    }

    Advent.handleInput = function (message) {
        if (message == "take the foolish settler") {
            Advent.addJournalEntry(handbill1);
            Advent.quests.push(handbillQuest);
            handbillQuest.introduceQuest();
            hbTask1.completeTask();
            northEast.description = northEastDescription.concat(" A ", Advent.getDocumentMarkup(handbill2, "handbill", true), " sits on a small table in the corner.");
            north.description = northDescription.concat(" A ", Advent.getDocumentMarkup(handbill3, "handbill", true), " sits on the shop table.");
        } else if (message == "seat taken") {
            center.southGate = "You won't be able to leave the area until the sermon has ended.";
            Advent.sceneBreak();
            Advent.queueText("Initiates are seated. Ancient songs are sung.");
            Advent.queueText(" Finally, Magnus Ulmar, Messenger and leader for the Order of the Ancient Due, takes his place at the ornate pulpit on the raised platform.", true);
            Advent.queueText("\"Brothers and sisters,\" he begins, with open arms raised. \"Once again, our numbers grow. More outlanders return to the Settlement and seek the promises of the Blessed Covenants. To guide them on their path, we begin the teaching of the Covenants anew today.\"");
            Advent.queueText("You know what comes after, of course. Like many of those outside the cult, you remember the sacred texts of the true Faithful Settlement. You often marvel at how the man at the front of the room took these once harmless ideas from their original context and used them to forge this empire of lies known as the Order and rob nearly everyone within the sound of his voice.");
            Advent.queueText("\"We turn to the first of the three Blessed Covenants, that if the Faithful are devout to the Anointed, they shall witness the salvation of kings and outlanders alike,\" he continues.");
            Advent.queueText("You note without surprise that neither he nor anyone else in the sanctuary is studying this passage in the text. What was once used as a word of encouragement to the people about the strengthening of their numbers, is now a promise to turn strangers and enemies into friends, but only in return for their absolute obedience to him and his inner circle. His later point about serving the leadership while they serve you is so obnoxious that the final orders of business catch you completely off guard.");
            Advent.queueText("\"To meet the needs of our expanding Settlement,\" Magnus begins with arms again raised (or have they been raised this whole time?) \"We must also grow our Anointed in number. It is with great pride that I reveal that our own Brother Garrett, the son of the lovely Sister Daralis, will begin his spiritual pilgrimage, after which he will dedicate himself to a life of service to our Order.\"");
            Advent.queueText("He wants to enslave you.");
            Advent.queueText("You try to hold back your anger as the sheep around you smile and nod their approval. The message eventually concludes but no more words have registered in your mind. You need to regroup. You need a plan. You need to get out of here.");

            var quentin = new Advent.Person();
            quentin.name = "Quentin Cadby";
            quentin.description = "A brute-for-hire under the employ of Magnus Ulmar. He has recently been appointed as your keeper in the stronghold.";
            quentin.status = "blocking your way out.";

            var q1 = new Advent.Line("Congratulations Blacksheep! (Grinning widely) Messenger Magnus would like a word. You'll find him in the chapel study.");
            quentin.lines = [q1];
            south.people.push(quentin);
            south.eastGate = "Quentin blocks your path with a huge grin.";
            south.westGate = null;
            southWest.northGate = "You can't access the pulpit area right now.";
            center.description = centerDescription;
            center.southGate = null;
            Advent.currentMap.playerLocation.getDescription(true);

            var magnus = new Advent.Person();
            magnus.name = "Magnus Ulmar";
            magnus.description = "Messenger and leader for the Order. A man in his late forties with neatly trimmed dark hair and, most often, a disturbingly severe expression on his face.";
            magnus.status = "seated behind his desk.";

            var m01 = new Advent.Line("Garrett. Thank you for coming to speak with me.", 0, 0, "player");
            var m02 = new Advent.Line("You will play your part here or you will join our brothers across the ocean, searching the icy wasteland for the deposed king. From there you're free to attempt escape, but you'd not survive it.", 0, 4, "npc");
            var m03 = new Advent.Line("I suppose it was. Perhaps if you play your part in the coming days we could spend less energy in babysitting you.", 0, 4, "npc");
            var m04 = new Advent.Line("I'm impressed by your no-nonsense attitude all the sudden. Perhaps things will improve for you after all.", 0, 4, "npc");
            var m05 = new Advent.Line("Your \"journey\" will begin today. Naturally you'll not leave the Emerald Stronghold, but you will complete a series of tasks of my choosing, designed to help you sort out your reservations about the Order.", 0, 5, "npc");
            var m06 = new Advent.Line("Tonight you will help to introduce our teaching materials into the existing library in the outer yard. You will also round up certain items we consider...undesirable. Brother Quentin will accompany you.", 0, 1, "player");
            var m07 = new Advent.Line("Some materials were never permissible in the Settlement even among the first Faithful. That which confuses our Message must be destroyed.", 0, 2, "player");
            var m08 = new Advent.Line("Those outside the Settlement are lost. We will not confuse them further.", 0, 3, "player");
            var m09 = new Advent.Line("What you are is my problem. I've decided that's going to change. You will make my life easier through your actions or your absence. That choice is yours.", 0, 3, "player");
            var m10 = new Advent.Line("I'm sure you're already quite tired of one another. I think it's uniquely fitting, though, a father who abandoned his family appointed to look after a family who abandoned their father. Poetic, don't you agree?", 0, 3, "player");
            var m11 = new Advent.Line("That's the spirit. Quentin will retrieve you this evening and we'll discuss your progress after tomorrow's Message.", null, null, null, "magnus conversation over");
            magnus.lines = [m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11];

            var mp1 = new Advent.Line("I will never serve this cult while I live!", -1, 1, "npc");
            var mp2 = new Advent.Line("It appeared to be my only choice.", 0, 2, "npc");
            var mp3 = new Advent.Line("What can you tell me about this \"pilgrimage?\"", 1, 3, "npc");
            var mp4 = new Advent.Line("You want to burn books.", 0, 6, "npc");
            var mp5 = new Advent.Line("How convenient, to silence independent thought.", 0, 7, "npc");
            var mp6 = new Advent.Line("I'm not your librarian.", 0, 8, "npc");
            var mp7 = new Advent.Line("Maybe I could take a break from Quentin and go with someone else...", 0, 9, "npc");
            var mp8 = new Advent.Line("Some time in the library sounds good. I'll get it done.", 0, 10, "npc");
            magnus.playerLines = [[mp3, mp2, mp1], [mp4], [mp5], [mp6, mp7, mp8]];
            southWest.people.push(magnus);
            southWest.eastGate = "You can't leave until you finish your conversation with Magnus.";
        } else if (message == "magnus conversation over") {
            
            if(!handbillQuest.complete)
                handbillQuest.failed = true;
            
            var messageQuest = Advent.getQuest("The Morning Word");
            
            messageQuest.tasks[4].completeTask(true);
            
            if(!Advent.hasQuest(handbillQuest.name))
               Advent.quests.push(handbillQuest);
            if (!handbillQuest.complete) {
                Advent.failQuest(handbillQuest.name);
            }
            Advent.queueText("You stand to ".concat(Advent.getBroadcastMarkup("leave", "leave Magnus"),"."));
            
            
        }else if(message == "leave Magnus"){
            Advent.storyText = "";
            
            Advent.save('1');
            loadLevel02Scene01();
        }
        else if (message == "take the proud settler") {
            Advent.addJournalEntry(handbill2);
            hbTask2.completeTask(hbTask3.complete);
            northEast.description = northEastDescription;
        } else if (message == "donation attendant leaves") {
            Advent.queueText("After a brief interaction, the donation attendant leaves the area, leaving the ".concat(Advent.getBroadcastMarkup("donation box", "steal coins", true), " unattended."));
            Advent.removePerson(donationAttendant.name);
        } else if (message == "steal coins") {
            Advent.queueText(" You reach into the donation box and take a handful of coins, surprised at how easy that was.", true);
            var coins = new Advent.Prop();
            coins.name = "donation money";
            coins.description = "A handful of gold coins taken from the donation box.";
            coins.canTake = true;
            southEast.props.push(coins);
            Advent.takeItem(coins.name);

            shopAttendant.clearDialog();
            var sa1 = new Advent.Line("Good morning, Brother. Is there something you wish to purchase?", 0, 0, "player");
            var sa2 = new Advent.Line("Done. Thank you for supporting the Settlement!", null, null, null, "bought handbill #3");
            shopAttendant.lines = [sa1, sa2];

            var psa1 = new Advent.Line("I'll take the new handbill.", 0, 1, "npc");
            shopAttendant.playerLines = [[psa1]];
        } else if (message == "bought handbill #3") {
            handbill3.examineLock = null;
            Advent.queueText(" The ".concat(Advent.getDocumentMarkup(handbill3, "latest handbill"), " is yours for the taking."), true);
        } else if (message == "take the tolerant settler") {
            Advent.addJournalEntry(handbill3);
            hbTask3.completeTask(hbTask2.complete);
        }
    }

}