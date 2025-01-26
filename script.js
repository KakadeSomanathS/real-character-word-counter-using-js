const textInput = document.querySelector("#textInput");
const charCount = document.querySelector("#charCount");
const charLimit = document.querySelector("#charLimit");
const remainingChars = document.querySelector("#remainingChars");
const charCountLimit = document.querySelector("#charCountLimit");

const MAX_CHARACTER = 100;

textInput.addEventListener("input", () => {
  const inputValue = textInput.value.length;
  console.log("Character Count", inputValue);

  if (inputValue > 0) {
    charCountLimit.style.display = 'block';
    charLimit.style.display = 'block';
    remainingChars.textContent = MAX_CHARACTER;
    charCount.textContent = inputValue;

    if (MAX_CHARACTER > 0) {
      const remainingCharWordCou = MAX_CHARACTER - inputValue;
      console.log(remainingCharWordCou);
      remainingChars.textContent = remainingCharWordCou;

      if (remainingCharWordCou < 0) {
        charLimit.classList.add("warning");
        remainingChars.textContent = 0;
      }
      else {
        charLimit.classList.remove("warning");
      }
    }
    if (inputValue > MAX_CHARACTER) {
      textInput.value = '';
      charCount.textContent = 0;
      remainingChars.textContent=MAX_CHARACTER;
      alert("You Have crossed Your Count Limit");
    }
  }
})




