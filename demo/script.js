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
function doSanitize() {
  const context = contextSelect.value;
  const inputValue = input.value;
  const contextEl = document.createElement(context);
  contextEl.setHTML(inputValue, {});
  toutEl.value = contextEl.innerHTML;
  houtEl.replaceChildren(contextEl);
}

inputEl.onkeyup = () => {};
