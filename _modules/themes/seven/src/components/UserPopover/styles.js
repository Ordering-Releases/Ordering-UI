"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopoverListLink = exports.PopoverListItem = exports.PopoverList = exports.PopoverBody = exports.PopoverArrow = exports.HeaderItem = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var HeaderItem = exports.HeaderItem = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  cursor: pointer;\n  width: 40px;\n  height: 40px;\n  border: 1px solid ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-right: 20px;\n  ", "\n\n  svg {\n    color: ", ";\n    height: 25px;\n    width: 25px;\n  }\n\n  img {\n    width: 30px;\n    height: 30px;\n    margin: 0;\n  }\n\n  @media (min-width: 1200px) {\n    width: 48px;\n    height: 48px;\n    img {\n    width: 35px;\n    height: 35px;\n  }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      margin-right: 0px;\n      margin-left: 20px;\n  "])));
}, function (_ref) {
  var isHome = _ref.isHome;
  return isHome ? '#FFF' : '#000';
});
var PopoverBody = exports.PopoverBody = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  color: #333;\n  padding: 15px;\n  border-radius: 10px;\n  max-width: 500px;\n  z-index: 1001;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;\n"])));
var PopoverArrow = exports.PopoverArrow = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 0;\n  height: 0;\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 8px solid #FFF;\n  top: -8px;\n"])));
var PopoverList = exports.PopoverList = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
var PopoverListItemStyles = (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 7px 15px;\n  border-bottom: 1px solid #eee;\n  align-items: center;\n  color: #333;\n  font-size: 18px;\n\n  svg {\n    margin-right: 5px;\n    ", "\n  }\n\n  :hover {\n    cursor: pointer;\n    background-color: #eee;\n  }\n\n  :last-child {\n    border-bottom: 0;\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
var PopoverListItem = exports.PopoverListItem = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  ", "\n"])), PopoverListItemStyles);
var PopoverListLink = exports.PopoverListLink = _styledComponents.default.a(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  ", "\n  text-decoration: none;\n  ", "\n"])), PopoverListItemStyles, function (_ref2) {
  var active = _ref2.active;
  return active && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    background-color: #eee;\n  "])));
});