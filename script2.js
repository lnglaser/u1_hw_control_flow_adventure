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

const chooseMission = () => {
    let missionChoice = prompt("Here's what's on the board right now: [SEC]urity for Sumitomo Heavy Industries, [ESP]ionage for Hakke Innovations, and a [PIC]kup for the Silicon Vipers. What're you up for?")
    if (missionChoice === "SEC"){
        let secStyle = prompt("They left the details to your discretion. How you wanna do this? ([1] Armed Escort, [2] Stealth tail, or [3] Network detail)")
        if (parseInt(secStyle) === 1){
            let secStyleComp = prompt("Security - Armed Escort - Outcome & Response - [1] Fight, [2] Run, [3] Talk")
            if (parseInt(secStyleComp) === 1){
                alert("Security - Armed escort - Fight - ending")
            }
            else if (parseInt(secStyleComp) === 2){
                alert("Security - Armed escort - Run - ending")
            }
            else if (parseInt(secStyleComp) === 3){
                alert("Security - Armed escort - Talk - ending")
            }
        }
        else if (parseInt(secStyle) === 2){
            let secStyleComp = prompt("Security - Stealth tail - Outcome & Response - [1] Sabotage, [2] Break cover, [3] Alert enemies' rivals")
            if (parseInt(secStyleComp) === 1){
                alert("Security - Stealth tail - Sabotage - ending")
            }
            else if(parseInt(secStyleComp) === 2){
                alert("Security - Stealth tail - Break cover - ending")
            }
            else if(parseInt(secStyleComp) === 3){
                alert("Security - Stealth tail - Alert enemies' rivals - ending")
            }
        }
        else if (parseInt(secStyle) === 3){
            let secStyleComp = prompt("Security - Network detail - Outcome & Response - [1] Viral attack, [2] Observation, [3] Fake communication")
            if (parseInt(secStyleComp) === 1){
                alert("Security - Network detail - Viral attack - ending")
            }
            else if (parseInt(secStyleComp) === 2){
                alert("Security - Network detail - Observation - ending")
            }
            else if (parseInt(secStyleComp) === 3){
                alert("Security - Network detail - Fake communication - ending")
            }
        }
    }
    else if (missionChoice === "ESP"){
        let espStyle = prompt("They want you to break into a secure Smith-Shimano tech lab. How're you planning on getting in? ([1] Tactical infiltration, [2] Fake executive ID, or [3] pretend to be a custodian)")
        if (parseInt(espStyle) === 1){
            alert("Espionage - Tactical infiltration - Outcome")
        }
        else if(parseInt(espStyle) === 2){
            alert("Espionage - Fake executive ID - Outcome")
        }
        else if(parseInt(espStyle) === 3){
            alert("Espionage - Prented to be a custodian - Outcome")
        }
    }
    else if (missionChoice === "PIC"){
        let picStyle = prompt("Easy job - just go meet the contact, take the case he gives you, and bring it back to the drop point without asking any questions. How you getting there? ([1] AI cab, [2] Motorcycle, [3] MagRail, [4] Walking)")
        if (parseInt(picStyle) === 1){
            alert("Pickup - AI cab - Outcome")
        }
        else if (parseInt(picStyle) === 2){
            alert("Pickup - Motorcycle - Outcome")
        }
        else if (parseInt(picStyle) === 3) {
            alert("Pickup - MagRail - Outcome")
        }
        else if (parseInt(picStyle) === 4) {
            alert("Pickup - Walking - Outcome")
        }
    }
    else {
        alert("Stop wasting my time.")
        chooseMission();
    }
}

startGame();