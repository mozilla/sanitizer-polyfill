/* globals Sanitizer */
const inputEl = document.getElementById("input");
const toutEl = document.getElementById("textoutput");
const houtEl = document.getElementById("htmloutput");

addEventListener("load", function () {
  inputEl.onkeyup = doSanitize;
  // smoke test
  console.log("typeof Sanitizer: " + typeof Sanitizer);
  try {
    window.s = new Sanitizer();
  } catch (e) {
    console.warn("Sanitizer is not a constructor:", e);
  }
});

/**
 *
 */
// eslint-disable-next-line no-unused-vars
function fillExample() {
  inputEl.value = `<p>hi! <svg/onload="alert(1)" />well <em>please</em> <a href="javascript:alert(2)" title="pretty-please">click me!</a>`;
}

/**
 *
 */
function doSanitize() {
  /* globals contextSelect */
  const context = contextSelect.value;
  const inputValue = inputEl.value;
  const contextEl = document.createElement(context);
  contextEl.setHTML(inputValue, {});
  toutEl.value = contextEl.innerHTML;
  houtEl.replaceChildren(contextEl);
}
