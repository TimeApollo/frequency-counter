document.getElementById("countButton").onclick = function() {
    // your code will go here ...
    var typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    // This changes all the letter to lower case.
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    // This gets rid of all the characters except letters, spaces, and apostrophes. 
    let letterCounts = {};
    
    for(let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];

        if(letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }

    }
    for(letter in letterCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
        span.appendChild(textContent);
        document.getElementById("lettersDiv").appendChild(span);
    }

    words = typedText.split(/\s/); //splits text into words instead of individual 
    let wordCounts = {};
    
    for(let i = 0; i < words.length; i++) {
        currentWord = words[i];

        if(wordCounts[currentLetter] === undefined) {
            wordCounts[currentWord] = 1;
        } else {
            wordCounts[currentWord]++;
        }

    }
    for(words in wordCounts) {
        let span = document.createElement("span");
        let textContent = document.createTextNode('"' + words + "\": " + wordCounts[words] + ", ");
        span.appendChild(textContent);
        document.getElementById("wordsDiv").appendChild(span);
    }
 }



 



 