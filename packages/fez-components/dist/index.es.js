import React from 'react';
import styled from 'styled-components';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Scroller = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return React.createElement("div", __assign({}, props), children);
};
var StyledScroller = styled(Scroller)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  &::-webkit-scrollbar {\n    width: 0.4rem;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-clip: content-box;\n    border-radius: 0.2rem;\n    background-color: #66666655;\n  }\n  &::-webkit-scrollbar-button {\n    width: 0;\n    height: 0;\n    display: none;\n  }\n  &::-webkit-scrollbar-corner {\n    background-color: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background-color: #666666ff;\n    }\n  }\n\n  max-height: ", ";\n  height: 100%;\n  overflow-y: auto;\n  /* transition: 0.3s; */\n\n  /* padding: 1rem 0; */\n\n  /* background: linear-gradient(white 30%, rgba(255, 255, 255, 0)),\n    linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,\n    radial-gradient(\n      farthest-side at 50% 0,\n      rgba(0, 0, 0, 0.2),\n      rgba(0, 0, 0, 0)\n    ),\n    radial-gradient(\n        farthest-side at 50% 100%,\n        rgba(0, 0, 0, 0.2),\n        rgba(0, 0, 0, 0)\n      )\n      0 100%;\n  background-repeat: no-repeat;\n  background-color: white;\n  background-attachment: local, local, scroll, scroll;\n\n  background-size: 100% 10%, 100% 10%, 100% 0.5rem, 100% 0.5rem;\n  &:hover {\n    background-size: 100% 10%, 100% 10%, 100% 1rem, 100% 1rem;\n  } */\n"], ["\n  &::-webkit-scrollbar {\n    width: 0.4rem;\n  }\n  &::-webkit-scrollbar-thumb {\n    background-clip: content-box;\n    border-radius: 0.2rem;\n    background-color: #66666655;\n  }\n  &::-webkit-scrollbar-button {\n    width: 0;\n    height: 0;\n    display: none;\n  }\n  &::-webkit-scrollbar-corner {\n    background-color: transparent;\n  }\n  &:hover {\n    &::-webkit-scrollbar-thumb {\n      background-color: #666666ff;\n    }\n  }\n\n  max-height: ", ";\n  height: 100%;\n  overflow-y: auto;\n  /* transition: 0.3s; */\n\n  /* padding: 1rem 0; */\n\n  /* background: linear-gradient(white 30%, rgba(255, 255, 255, 0)),\n    linear-gradient(rgba(255, 255, 255, 0), white 70%) 0 100%,\n    radial-gradient(\n      farthest-side at 50% 0,\n      rgba(0, 0, 0, 0.2),\n      rgba(0, 0, 0, 0)\n    ),\n    radial-gradient(\n        farthest-side at 50% 100%,\n        rgba(0, 0, 0, 0.2),\n        rgba(0, 0, 0, 0)\n      )\n      0 100%;\n  background-repeat: no-repeat;\n  background-color: white;\n  background-attachment: local, local, scroll, scroll;\n\n  background-size: 100% 10%, 100% 10%, 100% 0.5rem, 100% 0.5rem;\n  &:hover {\n    background-size: 100% 10%, 100% 10%, 100% 1rem, 100% 1rem;\n  } */\n"])), function (props) { return props.maxHeight; });
var templateObject_1;

var temp = function () {
    console.log('hello world');
};

export { StyledScroller as Scroller, temp };
//# sourceMappingURL=index.es.js.map
