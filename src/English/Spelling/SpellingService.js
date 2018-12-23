
export function SepellingService (){
    
    onDeleteItemFromArray=(item, array)=>{
        function searchPosition(elementToFind, array) {
          return array.map(function(el) {
              return el;
          }).indexOf(elementToFind);
      }
      const position = searchPosition(item, array);
      array.splice(position, 1);
    }


    onShuffleArray=(array)=> {
        let counter = array.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }
    
    onCreateQuestion=(word)=>{
        // To randomely create word with missing character and know the missing character
        let wordArray = []
        for (var i = 0; i < word.length; i++) {
            let a = word.charAt(i);
            wordArray.push(a);            
        }
        
        this.ChartPosition = Math.floor(Math.random() * wordArray.length);
        this.missingCharater = wordArray[this.ChartPosition]
        if (~this.ChartPosition) {
            wordArray[this.ChartPosition] = "__";
            this.wordQuestion = wordArray.join('');
        }

        // identify the suitable group of option
        let vowels = ['a', 'e', 'i', 'o', 'u']
        let consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
        let optionGroup = [];
        if (vowels.indexOf(this.missingCharater)>-1){
            this.onDeleteItemFromArray(this.missingCharater, vowels)
            optionGroup = vowels;
        }else {this.onDeleteItemFromArray(this.missingCharater, consonant)
            optionGroup = consonant
        }
        
        // Here I will generate 3 distinct characters + the missing character to serve as selected optionArray 
            let a = [];
            let otherOptionRandomly = [];
            while (a.length < 3) {
                    var n = Math.floor(Math.random() * optionGroup.length);
                    if (a.indexOf(n) == -1) {
                        a.push(n);
                        let b = optionGroup[n]
                        otherOptionRandomly.push(b)
                    }
                }
                    
        otherOptionRandomly.push(this.missingCharater)
        this.onShuffleArray(otherOptionRandomly)

        // Generate Question
        let question = new QuestionModel();
            question.word = word;
            question.missingCharacter = this.missingCharater;
            question.wordWithMissingCharacter = this.wordQuestion;
            question.optionSelected = otherOptionRandomly;
            question.scoreHistory = [];

        return question;
        }        

    onCreateQuestions=(task)=>{
        let questions = [];

        let wordArray = task.words;

        for (let i=0; i<wordArray.length; i++) {

            questions.push(this.onCreateQuestion(wordArray[i]));
          }

        return questions;
    }

}