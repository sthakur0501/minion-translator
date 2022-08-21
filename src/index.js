const input_text = document.querySelector("#input-text");
const transalte_btn = document.querySelector(".btn-translate");
const minion_text = document.querySelector("#minion-text");

const API_BASE_URL_END_POINT = "https://api.funtranslations.com/translate/";
let api_transaltion_end_point = "minion.json";
let minion_speak = "";

function updateText(txt) {
  console.log({ minion_text });
  minion_text.innerText = txt;
}

function getMinionText(user_text) {
  let encoded_text = encodeURI(user_text);
  let request_url =
    `${API_BASE_URL_END_POINT}` +
    `${api_transaltion_end_point}` +
    `?text=${encoded_text}`;
  minion_speak = "";

  fetch(request_url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      if (!data.contents) {
        alert(data.error.message);
        input_text.value = "";
      } else {
        // console.log(data.contents);
        // console.log(data.contents.translated);
        // minion_speak = data.contents.translated;
        updateText(data.contents.translated);
      }
    })
    .catch((excep) => {
      alert("Sorry for the exception...");
      console.log(excep);
    });
  // console.log({minion_speak});
  // return minion_speak;
}

function transalte(e) {
  let user_text = input_text.value;

  if (user_text) {
    minion_text.innerText = "";
    getMinionText(user_text);
  }

  console.log({ user_text });
  // console.log({minion_speak});

  // if(minion_speak){
  //     updateText(minion_speak);
  // }else{
  //     input_text.value = "";
  // }
}

transalte_btn.addEventListener("click", transalte);
