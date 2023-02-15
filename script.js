document.querySelector("#add").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
<div class="task">
    <label class="taskCheck">
        <input type="checkbox" class="taskCheckbox">
        <span> id="taskname">
            ${document.querySelector("#newtask input").value}
        </span>
    </label>
    <button class="delete">
        <i> class="far fa-trash-alt"></i>
    </button>
</div>
`;
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};

// get the element
const text = document.querySelector(".typing-text");

// make a words array
const words = ["Hai", "Apakah Ada Hal Yang Perlu Untuk Diingat ?", "Tapi Takut Lupa?", "Tambahkan aja disini:)"];

// start typing effect
setTyper(text, words);

function setTyper(element, words) {
  const LETTER_TYPE_DELAY = 75;
  const WORD_STAY_DELAY = 2000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  var direction = DIRECTION_FORWARDS;
  var wordIndex = 0;
  var letterIndex = 0;

  var wordTypeInterval;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeLetter, LETTER_TYPE_DELAY);
  }

  function typeLetter() {
    const word = words[wordIndex];

    if (direction == DIRECTION_FORWARDS) {
      letterIndex++;

      if (letterIndex == word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }
    } else if (direction == DIRECTION_BACKWARDS) {
      letterIndex--;

      if (letterIndex == 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);

    element.textContent = textToType;
  }

  function nextWord() {
    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex++;

    if (wordIndex == words.length) {
      wordIndex = 0;
    }
  }
}
