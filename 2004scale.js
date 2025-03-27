// ==UserScript==
// @name         2004scale
// @namespace    http://tampermonkey.net/
// @version      2025-03-28
// @description  Improves the browser experience of 2004scape.
// @author       Ubel
// @include      *lostcity.rs*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=2004scape.org
// @grant        GM_addStyle
// @downloadURL  https://raw.githubusercontent.com/UbelBrandt/2004scale/refs/heads/main/2004scale.js
// ==/UserScript==

(function() {
    'use strict';

    // hide controls
    document.getElementById('controls').style.display = 'none';

    // set html and body to fill screen
    GM_addStyle("html, body { width: 100%; height: 100%; }");

    // set default size cursor
    GM_addStyle("* { cursor: url(https://github.com/UbelBrandt/2004scale/blob/main/cursor1x.gif?raw=true), auto; }");

    // scaling settings
    GM_addStyle("canvas { image-rendering: crisp-edges !important; transform-origin: center top; transform: scale(1); }");
    GM_addStyle("@media (width >= 1578px) and (height >= 1064px) { canvas { transform: scale(2); } * { cursor: url(https://github.com/UbelBrandt/2004scale/blob/main/cursor2x.gif?raw=true), auto; } }");
    GM_addStyle("@media (width >= 2367px) and (height >= 1596px) { canvas { transform: scale(3); } * { cursor: url(https://github.com/UbelBrandt/2004scale/blob/main/cursor3x.gif?raw=true), auto; } }");
    GM_addStyle("@media (width >= 3156px) and (height >= 2128px) { canvas { transform: scale(4); } * { cursor: url(https://github.com/UbelBrandt/2004scale/blob/main/cursor4x.gif?raw=true), auto; } }");
})();
