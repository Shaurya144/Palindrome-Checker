const Input = document.querySelector("#text-input");
const check = document.querySelector("#check-btn");

let filterInput;

check.addEventListener("click", () => {
  filterInput = String(Input)
  let reverseInput = filterInput.split("").reverse().join("");
  if (filterInput != reverseInput){
    return console.log("Not A Palindrome")
  }
  console.log("Palindrome")
})

Input.addEventListener("keyup", () => {
  let filterInput = Input.value.replace(/[^A-Z0-9]/ig, "");
  console.log(filterInput)
  
});
