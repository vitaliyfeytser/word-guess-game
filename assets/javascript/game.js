
      // PSUDOCODE FIRST
  
      // 1a. Announce max guess number as 13.
  
      // 1. prompt user for on.click spin
      
      // 2. create variable from userSpin
      
      // 3. choose one index from words
  
      // 4. print blanks numbered from index of userSpin
  
      // 5. print hint numbered from userSpin
  
      // 6. prompt user for key.up guess
  
      // 7. write user key.up guess below blanks
  
      // 8. compare user key.up to index of userSpin
  
      // 9. if key.up matches index of userSpin overwrite blank index with user key.up and itirate guessCount
  
      // 10. else play beep sound and itirate guess count
  
      // 11. track wins and losses


    // DECLARE VARIABLES FOR GAME CONTENT

    var words = [
        "H", 
        "HT", 
        "HTML", 
        "CSS", 
        "concatenation", 
        "GitHub", 
        "Repository"
    ];

    var hints = [
        "One Letter H",
        "Two Letters HT",
        "Basic structure language.", 
        "A language to make things pretty.", 
        "A word for putting two strings one after another.", 
        "Where do you put code that anyone can get?", 
        "That other word for storing your git'ns."
    ];

    
    // CONSOLE.LOG ELEMENTS TO BE UPDATED WITH EACH SPIN

    // var spinWord;
    // console.log("spinWord is: " + spinWord);

    // var spinBlanks;
    // console.log("spinBlanks is: " + spinBlanks);

    // var spinHint;
    // console.log("spinHint is: " + spinHint);
    
    
    
    // CREATE A SPIN COUNTER BASED ON "WORDS" ATTACHED TO SPIN BUTTON (HINTS' INDEX MATCHED WORDS')
    
    
    
    // ITIRATE THROUGH THE INDEX OF ALL SPIN CATEGORIES BASED ON SPIN COUNT
    var spinCounter = document.getElementById("spin-button"),
        count = 0;
    
    spinCounter.onclick = function() {
        if (count < words.length - 1) {
            count += 1;
        }
        else (count = 0);
        
        console.log(count);
    };
    

    document.onclick = function() {
        
        // MAKE CURRENT 'WORDS COUNT' INTO AN ARRAY
        var lettersArray = words[count].split("");
        console.log("Current 'words' Array: " + lettersArray);
        
        // POPULATE spinWord VARIABLE WITH CURRENT SPIN
        var spinWord = words[count];
        console.log("Spinword: " + spinWord);
        
        // GENERATE BLANKS BY REPLACING ALL CHARACTERS OF 'WORDS' BY UNDERSCORES
        var spinBlanks = words[count].replace(/./g, "_");
        console.log("spinBlanks: " + spinBlanks);

        // GENERATE HINT
        var spinHint = hints[count];
        console.log("spinHint: " + spinHint);


        // var guessBox = document.getElementById("guess-box");
        // guessBox.textContent = null;
        // console.log(guessBox);
    };

 

    // RECIEVE AND COMPARE USER GUESSES TO INDEX OF LETTER-ARRAY
    
    var guessBox = "";

    document.onkeyup = function() {
        
        var userGuess = event.key;
        console.log("userGuess value is: " + userGuess);
        

        guessBox += userGuess;
        console.log("guessBox value is: " + guessBox);
        
    
        // MAKE CURRENT 'WORDS COUNT' INTO AN ARRAY
        var lettersArray = words[count].split("");
        console.log("Current lettersArray is: " + lettersArray);
    
        // MAKE CURRENT guessBox INTO AN ARRAY
        var guessBoxArray = guessBox.split("");
        console.log("Current guessBoxArray is: " + guessBoxArray);

        // GET ONE userGuess TO MATCH AND CONSOLE.LOG
        for (var i = 0; i = lettersArray.length - 1; i++) {
            if (userGuess === lettersArray[i]) {
                console.log("MATCH! : " + userGuess);
                break
            } else {
                console.log("NO MATCH");
            }break
        };




        // COMPARE IF USER GUESS EXISTS IN LETTERS-ARRAY = ONLY TRUE VALUES RETURNED
        
        // (lettersArray.indexOf(userGuess) !== -1);
        // console.log("The shorthand works: " + userGuess);
    

        
        // set spinBlanks to false of lettersArray showing underscores

        // onkeyup write to guessBox 
        
        // set guessBox to guessBoxArray

        // compare  guessBoxArray index to index of lettersArray

        // evaluate blanksBox array as true or false



        // <script>
        //     var cars = ["Saab", "Volvo", "BMW"];
        //     cars[0] = "Opel";
        //     document.getElementById("demo").innerHTML = cars;
        // </script>


        // write blanksBox as underscores at array index places 















        // spinBlanks.textContent = null;

        // for (var i = 0; i < lettersArray.length; i++) {

        //     // spinBlanks.textContent = lettersArray.join("").replace(/./g, "_");

        //     var index = lettersArray.findIndex(userGuess => userGuess === userGuess);
        //     lettersArray.splice(index, 1, userGuess);
        //     console.log(lettersArray);

        //     var spinBlanks = document.getElementById("blanks");
            // spinBlanks.textContent = lettersArray.join("").replace(/./g, "_");
            
            
        //     if (lettersArray[i] === userGuess) {
                
        //         var blanksIndex = spinBlanksArray.findIndex(userGuess => userGuess === userGuess);
        //         spinBlanksArray.splice(blanksIndex, 1, userGuess);
        //         // spinBlanks.textContent = userGuess;


        //     }else {
        //         // spinBlanks.textContent += "_"; 
        //         };

        //     };

    };


