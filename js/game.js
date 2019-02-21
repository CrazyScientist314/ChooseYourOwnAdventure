// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "It's 6:30 in the morning",
            choices: [
                {
                    text: "wake up",
                    nextLevel: "living room",
                },

                {
                    text: "continue sleeping",
                    nextLevel: "bedroom",
                },
            ]
        },

        living_room: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You've brushed, showered, ate, and are now chilling in your living room",
            choices: [
                {
                    text: "go to school",
                    nextLevel: "front entrance",
                },
                
                {
                    text: "stay home",
                    nextLevel: "bedroom 2"
                }
            ]
        },

        front_entrance: {
            message: "You are at the front gate of school",
            choices: [
                {
                    text: "go to class",
                    nextLevel: "classroom"
                },
                
                {
                    text: "ditch school and go downtown",
                    nextLevel: "downtown"
                }
            ]
        },
        
        classroom: {
            message: "You are in class and your teacher gives you a pop quiz",
            choices: [
                {
                    text: "take the quiz",
                    nextLevel: "hallway"
                },
                
                {
                    text: "run out and go to downtown",
                    nextLevel: "downtown"
                },
                
                {
                    text: "punch the teacher",
                    nextLevel: "counseling office"
                }
            ]
        },
        
        hallway: {
            message: "Your teacher gave you back the quiz and you failed it",
            choices: [
                {
                    text: "finish the rest of the school day",
                    nextLevel: "front entrance 2"
                },
                
                {
                    text: "punch the teacher",
                    nextLevel: "counseling office"
                }
            ]
        },
        
        front_entrance_2: {
            message: "You just went through all your classes and are now heading out",
            choices: [
                {
                    text: "go home",
                    nextLevel: "bedroom 2"
                },
                
                {
                    text: "go to downtown",
                    nextLevel: "downtown"
                }
            ]
        },
        
        bedroom_2: {
            message: "You just got home",
            choices: [
                {
                    text: "do homework",
                    nextLevel: "bedroom night"
                },
                
                {
                    text: "watch Netflix",
                    nextLevel: "bedroom night"
                },
                
                {
                    text: "stare at the wall/ceiling",
                    nextLevel: "bedroom night"
                }
            ]
        },
        
        

    }
};
