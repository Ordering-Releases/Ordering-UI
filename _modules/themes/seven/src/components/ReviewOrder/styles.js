"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stars = exports.Send = exports.Reviews = exports.ReviewOrderContainer = exports.InvisibleInput = exports.Comments = exports.Category = exports.Categories = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ReviewOrderContainer = exports.ReviewOrderContainer = _styledComponents.default.form(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 96%;\n  margin: 0 auto;\n"])));
var Reviews = exports.Reviews = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  align-items: baseline;\n  justify-content: space-between;\n"])));
var Categories = exports.Categories = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 70%;\n"])));
var Category = exports.Category = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n"])));
var Stars = exports.Stars = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    > label {\n      > input {\n      display: none;\n      }\n    }\n"])));
var Comments = exports.Comments = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n\n  h2 {\n    text-transform: capitalize;\n  }\n"])));
var Send = exports.Send = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 20px 0;\n"])));
var InvisibleInput = exports.InvisibleInput = _styledComponents.default.input(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  opacity: 0;\n  position: fixed;\n"])));