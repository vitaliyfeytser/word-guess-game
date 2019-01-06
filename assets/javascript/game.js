
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

    var words = [
        "H", 
        "HT", 
        "HTML", 
        "CSS", 
        "concatenation", 
        "GitHub", 
        "Repository"
    ];

    // var blanks = [
    //     "_ _ _ _", 
    //     "_ _ _", 
    //     "_ _ _ _ _ _ _ _ _ _", 
    //     "_ _ _ _ _ _", 
    //     "_ _ _ _ _ _ _ _ _ _"
    // ];

    var hints = [
        "One Letter H",
        "Two Letters HT",
        "Basic structure language.", 
        "A language to make things pretty.", 
        "A word for putting two strings one after another.", 
        "Where do you put code that anyone can get?", 
        "That other word for storing your git'ns."
    ];

    
    // REFERENCE HTML ELEMENTS TO BE UPDATED WITH EACH SPIN

    var spinWord = document.getElementById("word-to-guess");
    var spinBlanks = document.getElementById("blanks");
    var spinHint = document.getElementById("hint");
    
    
    
    // CREATE A SPIN COUNTER BASED ON "WORDS" (HINTS' INDEX MATCHED WORDS')
    
    var spinCounter = document.getElementById("spin-button"),
        count = 0;
    
    spinCounter.onclick = function() {
        if (count < words.length-1) {
            count += 1;
        }
        else (count = 0);
        
        console.log(count);
    };
    




    // ITIRATE THROUGH THE INDEX OF ALL DISPLAY CATEGORIES BASED ON SPIN COUNT

    document.onclick = function() {
        

        // MAKE CURRENT 'WORDS COUNT' INTO AN ARRAY
        var lettersArray = words[count].split("");
        console.log(lettersArray);
          
        // REPLACE ALL CHARACTERS OF 'WORDS' BY UNDERSCORES
        spinWord.textContent = lettersArray.join("");
        
        spinBlanks.textContent = lettersArray.join("").replace(/./g, "_");

        spinHint.textContent = (hints[count]);

        var guessBox = document.getElementById("guess-box");
        guessBox.textContent = null;
        console.log(guessBox);
    };

 

    // RECIEVE AND COMPARE USER GUESSES TO INDEX OF LETTER-ARRAY

    // var div = document.getElementById('divID');

    // div.innerHTML += 'Extra stuff';
    
    var guessBox = document.getElementById("guess-box");

    document.onkeyup = function() {
        
        var userGuess = event.key;
        console.log(userGuess);
        

        guessBox.textContent += userGuess;
        console.log(guessBox);
        
        
        
        // MAKE CURRENT 'WORDS COUNT' INTO AN ARRAY
        var lettersArray = words[count].split("");
        var spinBlanksArray = words[count].split("");

        // spinBlanks.textContent = null;

        for (var i = 0; i < lettersArray.length; i++) {

            // spinBlanks.textContent = lettersArray.join("").replace(/./g, "_");
            
            // for (var i = 0; i < userGuess.length; i++) {
            // spinBlanks.textContent += "_"; 

            var index = lettersArray.findIndex(userGuess => userGuess === userGuess);
            lettersArray.splice(index, 1, userGuess);
            console.log(lettersArray);

            var spinBlanks = document.getElementById("blanks");
            // spinBlanks.textContent = lettersArray.join("").replace(/./g, "_");
            
            
            if (lettersArray[i] === userGuess) {
                
                var blanksIndex = spinBlanksArray.findIndex(userGuess => userGuess === userGuess);
                spinBlanksArray.splice(blanksIndex, 1, userGuess);
                // spinBlanks.textContent = userGuess;


            }else {
                // spinBlanks.textContent += "_"; 
                };
            // };
            };


            // function contains(a, obj) {
            //     for (var i = 0; i < a.length; i++) {
            //         if (a[i] === obj) {
            //             return true;
            //         }
            //     }
            //     return false;
            // }

        // for (i = 0; i < lettersArray.length; i++) {
        //     if (userGuess === lettersArray) {
                
        //         console.log("yep");
        //     }
        //     else {
        //         console.log("nope");
        //     }
        // };

        // if (userGuess === computerGuess) {
        //     alert("Tie");
        // }else if(userGuess === "p" && computerGuess === "p"){
        //     alert("Tie");
       
        // }else if(userGuess === "p" && computerGuess === "r"){
        //     alert("User win");
        
        // }else if(userGuess === "p" && computerGuess === "s"){
        //     alert("Computer win");
        



        // if (userGuess === lettersArray) {
        //     console.log(userGuess);
        //     // REPLACE ALL CHARACTERS OF 'WORDS' BY UNDERSCORES EXCEPT 
        //     spinBlanks.textContent = (words[count].replace(/./g, "!"));
        // }
        // else {
        //     // REPLACE ALL CHARACTERS OF 'WORDS' BY UNDERSCORES 
        //     spinBlanks.textContent = (words[count].replace(/./g, "?"));
        // }
    };








    // take spinWord variable and put int into a variable blankMaker
    // replace all characters with blanks
    // feed it back to the blanks display


    // function blankMaker() {
    // document.getElementById("dynamic-blanks").innerHTML = spinWord;
    // var str = document.getElementById("word-to-guess").innerHTML; 
    // var res = str.replace(/./g, "_");
    // document.getElementById("dynamic-blanks").innerHTML = res;
    // };

    //   var sword = "Chowder"; // Normally dynamic but for this sake, static.

    //   sword = sword.replace(/./g, "_ ");
      
      // To test
      
    //   console.log(sword); 
    //