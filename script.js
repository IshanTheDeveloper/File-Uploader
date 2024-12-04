const inputFile = document.querySelector("#input-file");
const uploadFile = document.querySelector("#upload");
const resetPage = document.querySelector("#reset");
const display = document.querySelector(".display");
const inputOperation = () => {
  if (inputFile.value != "") {
    display.innerText = "File Uploaded Successfully...";
    display.style.color = "green";
  } else {
    display.innerText = "Data Fetching Error...";
    alert("Please select a file...");
    display.style.color = "red";
  }
};
const resetOperation = () => {
  inputFile.value = "";
  display.innerHTML = "";
};
uploadFile.addEventListener("click", inputOperation);
resetPage.addEventListener("click", resetOperation);
