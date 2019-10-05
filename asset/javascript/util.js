const isEmpty = (obj) => {
  return !Object.keys(obj).length;
}

const disabled = (htElem) => {
  return htElem.classList.contains("disabled");
}

const disable = (targetClass) => {
  Array.from(document.getElementsByClassName(targetClass)).map(
    (el) => { 
      el.classList.add("disabled");
      if (el.tagName == "SELECT" || el.tagName == "INPUT"){
        el.setAttribute("disabled", "disabled");
      }
    }
  );
}

const enable = (targetClass) => {
  Array.from(document.getElementsByClassName(targetClass)).map(
    (el) => {
      el.classList.remove("disabled");
      if (el.tagName == "SELECT" || el.tagName == "INPUT") {
        el.removeAttribute("disabled");
      }
    }
  );
}

const setOptions = (array, target) => {
  target.innerHTML = "";
  const code = array.map(el => "<option value='" + el + "'>" + el + "</option>").join("");
  target.innerHTML = code;
}