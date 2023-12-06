document.addEventListener("dblclick", function () {
  var selectedText = window.getSelection().toString().trim();

  if (selectedText !== "") {
    getMeaning(selectedText);
  }
});

async function getMeaning(word) {
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const requestQuery = await fetch(apiUrl);
  const requestData = await requestQuery.json();
  console.log(requestData[0]);

  const words = requestData[0].word;
  console.log(words);
  const meanings = requestData[0].meanings[0].definitions;
  meanings.forEach(element => {
    console.log(element.definition);
  });
  // console.log(meanings);
}

function displayMeaning(meaning) {
  console.log("Meaning : " + meaning);
}
