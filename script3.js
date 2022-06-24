// Any path the user goes down must ask them at least three questions. - All paths have three levels.

// There must be a minimum of seven total destinations the user could arrive at based on their responses. - total of 27 endings.

// For at least one of the questions asked, there must be more than two possible user responses. - all questions have three responses.

// Your adventure must offer the user an option to replay at the end. - after each ending, the game loops back to the "startGame" function, where the player can then decide to quit playing.

// Your code must contain at least one switch statement. - all level 3 choices are handled by switch statements.

// Your code must make use of both string and number user inputs. - Mission type selection is a string input, while later branches are all number inputs.


//Requesting player name
let userName = prompt("Vita: So you're the new Runner. Welcome to Macro City. You got a name?")
//Replies with player's chosen name
alert(`Vita: Ok, ${userName} - I'm your Operator. Your jobs now go through me.`)
//Initialize game
const startGame = () => {
    let userPlay = confirm("Vita: You ready to make me some money? You can keep some too.")
    playGame(userPlay);
}
//Player chooses to proceed
const playGame = (confirmGameStart) =>{
    if (confirmGameStart){
        alert("Vita: Good. Let's see what we got here...")
        chooseMission();
    } else {
        alert("Vita: Quitting already? Maybe your techie can install a stronger spine.")
    }
}

//All endings loop back to the "startGame" function, which places the player back at Vita asking them if they want a job. Hopefully this will satisfy the requirements of offering a replay option.
const chooseMission = () => { 
    //Level 1 - mission selection
    let missionChoice = prompt("Vita: Here's what's on the board right now: [SEC]urity for Sumitomo Heavy Industries, [ESP]ionage for Hakke Innovations, and a [PIC]kup for the Silicon Vipers. What're you up for?")
    if (missionChoice === "SEC"){

        //Level 2 - Player chooses approach to mission
        let secStyle = prompt("Vita: You're escorting a Sumitomo bigwig to some secret meeting, but they left the details to your discretion. How you wanna do this? ([1] Armed Escort, [2] Stealth tail, or [3] Network detail)")
        
        //Level 3 - Player faces conflict, chooses response
        if (parseInt(secStyle) === 1){
            let secStyleComp = prompt("You brought your scariest power armor, but the other guys brought a tank - what do you do? - [1] Fight, [2] Run, [3] Talk")
            switch(secStyleComp) {
                case '1':
                    alert("A shell hits a few feet away, blowing you off your feet. Your armor auto-ejects you, and your internal systems are compromised. Find a techie.");
                    startGame();
                    break;
                case '2':
                    alert("You ditch your armor in sentry mode, and circle back through the streets to sneak up on the tank. You disable it through the access panel.");
                    startGame();
                    break;
                case '3':
                    alert("You try to bribe the mercs in the tank to back off - while they're thinking it over, you quickly redirect your charge and escape with them to safety.");
                    startGame();
                    break;
                default:
                    alert("Looks like you got scrapped. Loading ghost memory...")
                    startGame();
            }
        }

        //Level 3 - Player faces conflict, chooses response
        else if (parseInt(secStyle) === 2){
            let secStyleComp = prompt("You follow along with the VIP vehicle, hanging back - you notice a squad from their rival company about to intercept them. - [1] Sabotage, [2] Break cover, [3] Alert enemies' rivals")
            switch(secStyleComp) {
                case '1':
                    alert("You pretend to break down in front of their vehicle, blocking them from pursuit while signalling the VIP vehicle. The VIP leaves and is picked up by more security.");
                    startGame();
                    break;
                case '2':
                    alert("You decide to do away with stealth, and activate your weapons. You start a firefight in the streets, and are badly damaged. The VIP vehicle is compromised.");
                    startGame();
                    break;
                case '3':
                    alert("You send an encrypted signal to both the VIP's and hit squad's mutual enemies - luckily, they had some operatives nearby who immediately engaged the would-be attackers. You follow the VIP to the meeting as planned.");
                    startGame();
                    break;
                default:
                    alert("Looks like you got scrapped. Loading ghost memory...")
                    startGame();
            }
        }

        //Level 3 - Player faces conflict, chooses response
        else if (parseInt(secStyle) === 3){
            let secStyleComp = prompt("Monitoring the networks, you see another entity trying to access the VIP vehicle's systems. What do you do? - [1] Viral attack, [2] trace, [3] Fake communication")
            switch(secStyleComp) {
                case '1':
                    alert("You launch a counter-virus to their network, crashing their connection and frying their gear.");
                    startGame();
                    break;
                case '2':
                    alert("You trace the attack back to its source, and notify your contact at Sumitomo. It's quickly dealt with. -");
                    startGame();
                    break;
                case '3':
                    alert("You send a fake communication, appearing to be from the same group, telling them to back off. They don't believe it, and they disable the VIP vehicle.");
                    startGame();
                    break;
                default:
                    alert("Looks like you got scrapped. Loading ghost memory...")
                    startGame();
            }
        }
    }

    else if (missionChoice === "ESP"){

        //Level 2 - player chooses approach to mission
        let espStyle = prompt("Vita: They want you to break into a secure Smith-Shimano tech lab. How're you planning on getting in? ([1] Tactical infiltration, [2] Fake executive ID, or [3] pretend to be a custodian)")
        
        //Level 3 - Player faces conflict, chooses response
        if (parseInt(espStyle) === 1){
            let espStyleComp = prompt("You decide to infiltrate the building directly - you've got a few options. - [1] Air vents, [2] Sewer system, [3] sneak in on truck")
            switch(espStyleComp) {
                case '1':
                    alert("Did you really think they wouldn't be keeping an eye on the vents? You're quickly discovered.");
                    startGame();
                    break;
                case '2':
                    alert("Your infiltration route would have been perfect, if not for the smell. You now have to delay completing the job until you can clean yourself off.");
                    startGame();
                    break;
                case '3':
                    alert("You slip in on the underside of one of Smith-Shimano's unmarked delivery trucks. Once inside you slip through the facility and secure your objective.");
                    startGame();
                    break;
                default:
                    alert("Looks like you got scrapped. Loading ghost memory...")
                    startGame();
            }
        
        }
        //Level 3 - Player faces conflict, chooses response
        else if(parseInt(espStyle) === 2){
            let espStyleComp = prompt("You have an associate quickly put together a false executive ID to get inside how will you use your newfound power? - [1] Throw weight around, [2] hack reception security, [3] Ask for 'Division 8'")
            switch(espStyleComp) {
                case '1':
                    alert("You barge inside as if you own the place, demanding to be allowed to speak with someone in charge. You claim you're here to pick up the item you needed to secure. They relent and give it to you.");
                    startGame();
                    break;
                case '2':
                    alert("You hack the reception's security functions to delete your digital presence from the site, allowing you to move with more freedom through the facility.");
                    startGame();
                    break;
                case '3':
                    alert("Upon entering, you use a tip an associate had given you, and ask for 'Division 8.' As soon as you say it, armed security swarms the lobby and surrounds you.");
                    startGame();
                    break;
                default:
                    alert("Looks like you got scrapped. Loading ghost memory...")
                    startGame();
            }

        }

        //Level 3 - Player faces conflict, chooses response
        else if(parseInt(espStyle) === 3){
            let espStyleComp = prompt("You got your hands on a Smith-Shimano custodian uniform - now, how to use it? - [1] Leave 'out of order' signs out, [2] sneak into lab from bathroom, [3] cut the power")
            switch(espStyleComp) {
                case '1':
                    alert("You find a bunch of 'out of order' signs, and leave them in strategic places to try and keep people away while you work. However, this idea is dumb, and security begins sweeping the building.");
                    startGame();
                    break;
                case '2':
                    alert("Slipping into a lower-level bathroom, you find an unused access hatch that takes you closer to your goal. You manage to get in.");
                    startGame();
                    break;
                case '3':
                    alert("You find the electrical controls and disable the power. However, this also means you can't access what you came for, and the backups will be on in a few minutes.");
                    startGame();
                    break;
                default:
                    alert("Looks like you got scrapped. Loading ghost memory...")
                    startGame();
            }
        }
    }
    else if (missionChoice === "PIC"){

        //Level 2 - player chooses approach to mission
        let picStyle = prompt("Vita: Easy job - just go meet the contact, take the case he gives you, and bring it back to the drop point without asking any questions. How you getting there? ([1] AI cab, [2] Motorcycle, [3] MagRail)")
        
        //Level 3 - Player faces conflict, chooses response
        if (parseInt(picStyle) === 1){
            let picStyleComp = prompt("You'll just take an AI cab - it's the best combo of fast and easy. Which way? - [1] Main throughway, [2] sidestreets, [3] Tunnel")
            switch(picStyleComp) {
                case '1':
                    alert("You tell the AI to take you onto the main throughway, to get this done faster. However, you get stuck in traffic and your contact can't wait around.");
                    startGame();
                    break;
                case '2':
                    alert("You tell the AI to take you on the sidestreets to be more discreet. It takes a little while, and your contact is irritable, but you make it.");
                    startGame();
                    break;
                case '3':
                    alert("You tell the AI to take the tunnel. However, it looks like youre meeting wasn't as secret as you wanted. A rival gang was waiting for you to pass, and tries to stop the cab. You ditch it and make it the rest of the way on foot.");
                    startGame();
                    break;
                default:
                    alert("Looks like you got scrapped. Loading ghost memory...")
                    startGame();
            }
        }
        //Level 3 - Player faces conflict, chooses response
        else if (parseInt(picStyle) === 2){
            let picStyleComp = prompt("You decide you haven't taken your bike out in a while - you'll use that. Which way? - [1] Main throughway, [2] sidestreets, [3] Tunnel")
            switch(picStyleComp) {
                case '1':
                    alert("You take your motorcycle on the throughway - you zip dangerously through traffic to get there on time, but you make it while only causing one accident.");
                    startGame();
                    break;
                case '2':
                    alert("You stick to the sidestreets for this trip, but you have to park your flashy bike further away from the meeting place to avoid attention. You're a bit late, but you make the pickup.");
                    startGame();
                    break;
                case '3':
                    alert("You take the tunnel on your bike, and outrun the gang lying in wait for you there. However, your bike takes some damage, and you'll have to have it repaired.");
                    startGame();
                    break;
                default:
                    alert("Looks like you got scrapped. Loading ghost memory...")
                    startGame();
            }
        }
        //Level 3 - Player faces conflict, chooses response
        else if (parseInt(picStyle) === 3) {
            let picStyleComp = prompt("You decide to take the MagRail - not as fast or comfortable, but discreet and easy. Which route? - [1] local, [2] express, [3] utility freight")
            switch(picStyleComp) {
                case '1':
                    alert("You stick to the local for this, to blend in with the crowd. You get the package and hold it close for the return trip.");
                    startGame();
                    break;
                case '2':
                    alert("You try the express, to keep your time on the rail as brief as you can. However, the beefed-up security flags the item you're carrying on the way back, and you leave out the emergency exit with it.");
                    startGame();
                    break;
                case '3':
                    alert("You sneak onto the utility freight car for this to avoid all contact with people during this sensistive job. However, one of the pieces of equipment being moved wasn't secured properly, and pins you inside. Your upgrades give you strength to shift it, but your systems are damaged.");
                    startGame();
                    break;
                default:
                    alert("Looks like you got scrapped. Loading ghost memory...")
                    startGame();
            }
        }
    
    }
    else {
        alert("Stop wasting my time.")
        chooseMission();
    }
}

startGame();