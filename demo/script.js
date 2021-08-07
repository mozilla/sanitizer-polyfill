const inputEl = document.getElementById("input");
const toutEl = document.getElementById("textoutput");
const houtEl = document.getElementById("htmloutput");

addEventListener("load", function () {
  inputEl.onkeyup = doSanitize;
  // smoke test
  try {
    console.log("typeof Sanitizer: " + typeof Sanitizer);
  } catch (e) {}
  try {
    window.s = new Sanitizer();
  } catch (e) {
    console.warn("Sanitizer is not a constructor:", e);
  }
});

/**
 *
 */
function fillExample() {
  inputEl.value = `<p>hi! <svg/onload="alert(1)" />well <em>please</em> <a href="javascript:alert(2)" title="pretty-please">click me!</a>`;
}

/**
 *
 */
function prepareInput() {
  switch (inputSelect.value) {
    case "String":
      return input.value;
      break;
    case "DocumentFragment":
      const template = document.createElement("template");
      template.innerHTML = input.value;
      return template.content;
      break;
    case "Document":
      const parser = new DOMParser();
      return parser.parseFromString(input.value, "text/html");
      break;
    default:
      throw new Error("invalid value for input type select");
  }
}

/**
 *
 */
function doSanitize() {
  const inputValue = prepareInput();
  houtEl.setHTML(inputValue, {});
  let docFragment = houtEl.innerHTML;
  toutEl.innerHTML = "";
  toutEl.append(docFragment);
}

inputEl.onkeyup = () => {};
