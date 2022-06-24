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

//Player choosing mission category (3 options)
const chooseMission = () => {
    let missionChoice = prompt("These are the available mission types: [SEC]URITY, [INF]ILTRATION, [PIC]KUP")

    //Player has chosen "Security" mission type (3 options)
    if (missionChoice === "SEC"){
        let secChoice = prompt("These clients have open security jobs: [1] LumaTech, [2] Sumitomo Heavy Industries, and [3] Hakke Innovations.")
            if(parseInt(secChoice) === 1){
                alert("First security job")
                //Job style choice (3 options)
                let secStyle = prompt("How do you wanna do this? [1]Armed escort, [2]Stealth tail, [3]Network detail")
                    if(parseInt(secStyle) === 1) {//choice 1 (3 options)
                        let secComplicate = prompt("You brought your scariest powered armor, but the other guys brought a tank. Will you [F]ight, [R]un, or [T]alk?")//complication 1 (3 responses) "you show up armed and looking scary, but the other guys brought a tank. What do you do? 1 2 3"
                            if (secComplicate = "F"){//outcome 1
                                alert("A shell hits a few feet away, blowing you off your feet. Your armor auto-ejects you, and your internal systems are compromised. Find a techie.")
                                startGame();
                            }
                            else if (secComplicate = "R"){//outcome 2
                                alert("You ditch your armor in sentry mode, and circle back through the streets to sneak up on the tank. You disable it through the access panel.")
                                startGame();
                            }                  
                            else if (secComplicate = "T"){//outcome 3
                                alert("Security Job 1 Style 1 Outcome 3")
                                startGame();
                            }
                            else {
                                alert("You wanted this job, now finish it!")
                                startGame();
                            }
                        //complication 2 (3 responses)
                            //outcome 1
                            //outcome 2
                            //outcome 3
                        //complication 3 (3 responses)
                            //outcome 1
                            //outcome 2
                            //outcome 3
                    } else if(parseInt(secStyle) === 2) {//choice 2 (stealth) (3 options)
                        let secComplicate = prompt("Security Job 1, Style 2 - [SAB]otage, [BRE]ak Cover, [ALE]rt")//complication 1 (3 responses)
                            if (secComplicate = "SAB"){//outcome 1
                                alert("Security Job 1 Style 2 Outcome 1")
                                startGame();
                            }
                            else if (secComplicate = "BRE"){//outcome 2
                                alert("Security Job 1 Style 2 Outcome 2")
                                startGame();
                            }
                            else if(secComplicate = "ALE"){//outcome 3
                                alert("Security Job 1 Style 2 Outcome 3")
                                startGame();
                            }
                        //complication 2 (3 responses)
                            //outcome 1
                            //outcome 2
                            //outcome 3
                        //complication 3 (3 responses)
                            //outcome 1
                            //outcome 2
                            //outcome 3
                    } else if(parseInt(secStyle) === 3) {//choice 3 (Network) (3 options)
                        let secComplicate = prompt("Security Job 1, Style 3 - [VIR]us, [OBS]ervation, [FAK]e communications")//complication 1 (3 responses)
                        if (secComplicate = "VIR"){//outcome 1
                            alert("Security Job 1 Style 3 Outcome 1")
                            startGame();
                        }
                        else if (secComplicate = "OBS"){//outcome 2
                            alert("Security Job 1 Style 3 Outcome 2")
                            startGame();
                        }
                        else if(secComplicate = "FAK"){//outcome 3
                            alert("Security Job 1 Style 3 Outcome 3")
                            console.log("Security Job 1 Style 3 Outcome 3")
                            startGame();
                        }
                        //outcome 1
                            //outcome 2
                            //outcome 3
                        //complication 2 (3 responses)
                            //outcome 1
                            //outcome 2
                            //outcome 3
                        //complication 3 (3 responses)
                            //outcome 1
                            //outcome 2
                            //outcome 3
                    }
                console.log("First security job")
            }

            else if(parseInt(secChoice) === 2){
                alert("Second security job")
                //Job style choice
                    //choice 1
                        //complication 1
                        //complication 2
                        //complication 3
                    //choice 2
                        //complication 1
                        //complication 2
                        //complication 3
                    //choice 3
                        //complication 1
                        //complication 2
                        //complication 3
            }
            
            else if(parseInt(secChoice) === 3){
                alert("Third security job")
                //Job style choice
                    //Complication

            } else {
                alert("You want a job or not?")
                startGame();
            }

    //Player has chosen "Infiltration" mission type
    } else if (missionChoice === "INF"){
        let infChoice = prompt("These clients have open infiltration jobs: [1] Silicon Vipers, [2] Sisterhood of the Singularity, and [3] Neo Delahaye.")
            if(parseInt(infChoice) === 1){
                alert("First infiltration job")
                //Job style choice
                console.log("First infiltration job")
            }

            else if(parseInt(infChoice) === 2){
                alert("Second infiltration job")
                //Start job
            }
            
            else if(parseInt(infChoice) === 3){
                alert("Third infiltration job")
                //Start job

            } else {
                alert("You want a job or not?")
                startGame();
            }

    //Player has chosen "Pickup" mission type
    } else if (missionChoice === "PIC"){
        let picChoice = prompt("These clients have open pickup jobs: [1] IntelliGenics, [2] Giorgio Zsasz, and [3] Smith-Shimano.")
            if(parseInt(picChoice) === 1){
                alert("First pickup job")
                //Start job
                console.log("First pickup job")
            }

            else if(parseInt(picChoice) === 2){
                alert("Second pickup job")
                //Start job
            }
            
            else if(parseInt(picChoice) === 3){
                alert("Third pickup job")
                //Start job

            } else {
                alert("You want a job or not?")
                startGame();
            }

    } else {
        alert("Stop wasting my time.")
        chooseMission();
    }
}
startGame();