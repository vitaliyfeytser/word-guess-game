
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
        "HTML", 
        "CSS", 
        "concatenation", 
        "GitHub", 
        "Repository"
    ];

    var blanks = [
        "_ _ _ _", 
        "_ _ _", 
        "_ _ _ _ _ _ _ _ _ _", 
        "_ _ _ _ _ _", 
        "_ _ _ _ _ _ _ _ _ _"
    ];

    var hints = [
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

        spinWord.textContent = (lettersArray);

        // REPLACE ALL CHARACTERS OF 'WORDS' BY UNDERSCORES
        spinBlanks.textContent = (words[count].replace(/./g, "_"));
        
        spinHint.textContent = (hints[count]);
    };

 

    // var wordsCount = words[count];


    
    // var str = "How are you doing today?";
    // var res = str.split(" ");


    var userGuess = document.getElementById("user-guess");

    var lettersArray = words[count].split("");

    userGuess.onkeyup = function() {

        if (userGuess === lettersArray) {
            console.log(userGuess);
            // REPLACE ALL CHARACTERS OF 'WORDS' BY UNDERSCORES EXCEPT 
            spinBlanks.textContent = (words[count].replace(/./g, "!"));
        }
        else {
            // REPLACE ALL CHARACTERS OF 'WORDS' BY UNDERSCORES 
            spinBlanks.textContent = (words[count].replace(/./g, "?"));
        }
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

