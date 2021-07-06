/* vim: set ts=8 sts=2 et sw=2 tw=80: */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import {_sanitizeDocFragment, _sanitizeDocument, _fragmentParser, _normalizeConfig} from 'sanitizer.js';


/**
 * This function inserts the `Sanitizer` interface into `window`, if it exists.
 */
function setup() {
  // name of our global object
  const GLOBALNAME = "Sanitizer";

  // name of the innerHTML-setter,
  // https://github.com/WICG/sanitizer-api/issues/100
  // when changing this, also change the function declaration below manually.
  const SETTER_NAME = "setSanitizedHTML";

  if (typeof window === "undefined") {
    return;
  }
  if (window.isSecureContext) {
    // don't polyfill if already defined
    if (typeof window[GLOBALNAME] === "function") {
        return;
    }
    //
    const sanitizer = function(config) {
      const api = Object.create({});

      let normalizedConfig = _normalizeConfig(config);
      Object.assign(api, {
        sanitize(input) {
          if (input instanceof DocumentFragment) {
            return _sanitizeDocFragment(config, input);
          }
          if (input instanceof Document) {
            return _sanitizeDocument(config, input)
          }
          return new TypeError("Can't Sanitize input of type " + input.prototype);
        },
        sanitizeFor(localName, input) {
        // TODO: should parse/sanitize/filter/validate values for localName.
          const context = document.createElement(localName);
          let fragment = _fragmentParser(context, input);
          const sanitizedFragment = _sanitizeDocFragment(fragment);
          context.append(sanitizedFragment);
          return context;
        },
        config: normalizedConfig,
      });
      return Object.freeze(api);
    }
    window[GLOBALNAME] = sanitizer;
    Element.prototype[SETTER_NAME] = function setSanitizedHTML(input, sanitizerObj) {
      if (!(sanitizerObj instanceof window[GLOBALNAME])) {
        return new TypeError("sanitizerObj is not of type "+GLOBALNAME);
      }
      const fragment = _fragmentParser(this, input);
      const sanitizedFragment = _sanitizeDocFragment(fragment);
      this.append(sanitizedFragment);
    };
  }
}

setup();
