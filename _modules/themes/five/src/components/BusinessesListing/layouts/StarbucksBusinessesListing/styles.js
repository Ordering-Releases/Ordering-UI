"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.PreviousOrders = exports.MapWrapper = exports.ListWrapper = exports.ErrorMessage = exports.BusinessesTitle = exports.BusinessList = exports.BusinessFilter = exports.BusinessContent = exports.BusinessContainer = exports.AddressInput = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var BusinessContainer = exports.BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 0;\n"])));
var BusinessList = exports.BusinessList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var WrapperSearch = exports.WrapperSearch = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n  padding: 30px;\n  input {\n    border-bottom: 1px solid #ccc;\n  }\n  svg{\n    ", "\n  }\n  @media (min-width: 850px) {\n    width: 100%;\n    box-shadow: 0px -2px 1px 4px lightgrey;\n  }\n\n  ", "\n"])), function (_ref) {
  var _theme$business_listi;
  var theme = _ref.theme;
  return (theme === null || theme === void 0 || (_theme$business_listi = theme.business_listing_view) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.components) === null || _theme$business_listi === void 0 || (_theme$business_listi = _theme$business_listi.layout) === null || _theme$business_listi === void 0 ? void 0 : _theme$business_listi.type) === 'mapview' && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 5px;\n      transform: translateY(70%);\n      cursor: pointer;\n      "])));
}, function (_ref2) {
  var isCustomLayout = _ref2.isCustomLayout;
  return isCustomLayout && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0 auto;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    width: 100%; \n    padding: 0 20px;\n    svg {\n      font-size: 26px;\n      color: ", ";\n      margin-left: 10px;\n      cursor: pointer;\n    }\n    @media(min-width: 681px){\n      width: 75%;\n      padding: 0;\n    }\n    @media(min-width: 1201px){\n      width: 50%;\n    }\n  "])), function (props) {
    var _props$theme;
    return (_props$theme = props.theme) === null || _props$theme === void 0 || (_props$theme = _props$theme.colors) === null || _props$theme === void 0 ? void 0 : _props$theme.primary;
  });
});
var ErrorMessage = exports.ErrorMessage = _styledComponents.default.span(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));
var PreviousOrders = exports.PreviousOrders = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 20px 0px;\n"])));
var BusinessesTitle = exports.BusinessesTitle = _styledComponents.default.h1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  margin: 0px 20px;\n"])));
var BusinessContent = exports.BusinessContent = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column-reverse;\n  overflow: hidden;\n  position: relative;\n  z-index: 1;\n  @media(min-width: 850px){\n    flex-direction: row;\n    height: 100vh;\n  }\n"])));
var ListWrapper = exports.ListWrapper = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;  \n  min-height: 70vh;\n  overflow: auto;\n  box-shadow: 0 -2px 4px 0 rgb(0 0 0 / 12%);\n  @media(min-width: 850px){\n    width: 40vw;\n  }\n"])));
var MapWrapper = exports.MapWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: relative;\n  /* height: 100vh; */\n"])));
var BusinessFilter = exports.BusinessFilter = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;  \n  padding-left: 20px;\n  ", "\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n    padding-right: 20px;\n  "])));
});
var AddressInput = exports.AddressInput = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  border: 1px solid #ccc;\n  padding: 10px 15px;\n  margin: 20px;\n  margin-bottom: 0;\n  border-radius: 7.6px;\n  cursor: pointer;\n  p{\n    margin: 0;\n    margin-left: 35px\n  }\n\n  svg {\n    position: absolute;\n    width: 24px;\n    height: 24px;\n  }\n"])));