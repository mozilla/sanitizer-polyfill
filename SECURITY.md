# Security Policy

## Supported Versions

Only the latest version is supported.

## Our Threat Model

The gist is:
**`document.body.setHTML(evil)` should not cause XSS.**
If it does, please report a bug.

Our threat model is shared with the[Sanitizer API's Security Considerations](https://wicg.github.io/sanitizer-api/#security-considerations).

This polyfill is designed to prevent XSS.
However, this does not include other attacks, like form hijacking, DOM clobbering etc.

If you happen to find a bug that also reproduces against DOMPurify, please report this
to DOMPurify. They have a great security process and we rely on the library to do most of the work.


## Reporting a Vulnerability

If you happen to find a bug that also reproduces against DOMPurify, please report this
to DOMPurify. They have a great security process and we rely on the library to do most of the work!

If it does not, please report your bugs directly to Mozilla, using <security@mozilla.org>.

### Bug Bounty / Vulnerability Rewards
Momentarily, we do not offer a bug bounty for security issues with this project, but note that projects which depend on this library _might_.

### Consumers of polyfill

If what you found is leading to a vulnerability in any of the projects that
make use of this library, please follow the rules for that respective project.

