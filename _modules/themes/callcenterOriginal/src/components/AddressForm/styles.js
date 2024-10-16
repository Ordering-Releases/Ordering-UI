"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSkeleton = exports.WrapperMap = exports.WrapAddressInput = exports.WithoutAddressContainer = exports.TabsContainer = exports.StreetViewText = exports.SmsClient = exports.FormControl = exports.FormActions = exports.AddressWrap = exports.AddressTagSection = exports.AddressMarkContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _polished = require("polished");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var FormActions = exports.FormActions = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  padding: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  button {\n    height: 44px;\n    width: 100%;\n    text-transform: lowercase;\n    &:first-letter {\n      text-transform: uppercase;\n    }\n  }\n"])));
var FormControl = exports.FormControl = _styledComponents.default.form(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 0px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n\n  input {\n    box-sizing: border-box;\n    margin: 10px 0px;\n    height: 43px;\n    width: 100%;\n    &.internal_number,\n    &.zipcode {\n      flex: auto;\n    }\n    &::placeholder{\n      color: #CBCBCB\n    }\n  }\n\n  textarea {\n    width: 100%;\n    margin: 10px 0;\n    border-radius: 7.6px;\n  }\n\n  .input-autocomplete {\n    width: 100%;\n    background: #FFF;\n    border: 1px solid #BBB;\n    border-radius: 30px;\n    font-size: 16px;\n    padding: 7px 15px;\n    outline: none;\n    ::placeholder {\n      color: #DBDCDB;\n    }\n\n    &:-ms-input-placeholder {\n      color: #DBDCDB;\n    }\n\n    &::-ms-input-placeholder { /* Microsoft Edge */\n      color: #DBDCDB;\n    }\n    &:focus {\n      border-color: ", ";\n    }\n  }\n\n  .google-control {\n    .gps-button {\n      border-radius: 7.6px;\n      width: 43px;\n    }\n\n    input {\n      border-radius: 7.6px;\n      border: 1px solid ", ";\n\n      &:focus {\n        border: 1px solid ", ";\n      }\n    }\n  }\n\n  .internal_number {\n    width: 45%;\n    ", "\n  }\n\n  .zipcode {\n    width: 45%;\n  }\n\n  @media (min-width: 481px) {\n    padding: 10px;\n  }\n"])), function () {
  return (0, _polished.darken)(0.07, '#CCC');
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) !== null && _props$theme !== void 0 && _props$theme.rtl ? (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n      margin-left: 15px;\n    "]))) : (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin-right: 15px;\n    "])));
});
var AddressWrap = exports.AddressWrap = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  button {\n    height: 41px;\n    right: 25px;\n    border: none;\n    width: 25px;\n    position: absolute;\n    z-index: 1000;\n\n    ", "\n\n    svg {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      left: 25px;\n      right: initial;\n    "])));
});
var WrapAddressInput = exports.WrapAddressInput = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  z-index: 1000;\n  i {\n    padding: 0px 10px;\n  }\n\n  svg {\n    position: absolute;\n    color: ", ";\n    top: 21px;\n    left: 10px;\n    font-size: 20px;\n    ", "\n  }\n\n  input {\n    background-position: left 10px center !important;\n    background-repeat: no-repeat !important;\n    background-size: 13px !important;\n    padding: 7px 30px 7px 15px !important;\n    ", "\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      right: 10px;\n      left: initial;\n    "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      padding: 7px 15px 7px 30px !important;\n    "])));
});
var AddressTagSection = exports.AddressTagSection = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: 10px 0px;\n  display: flex;\n  justify-content: space-between;\n\n  button {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 46px;\n    height: 46px;\n    border: none;\n    color: #B1BCCC;\n\n    img {\n      width: 25px;\n      height: 25px;\n    }\n\n    span {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n\n      svg {\n        font-size: 30px;\n      }\n    }\n  }\n\n  button.active {\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.primary;
});
var WrapperMap = exports.WrapperMap = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  z-index: 100;\n  width: 48%;\n  position: absolute;\n  top: ", ";\n  right: 0;\n  padding-top: ", ";\n  padding-right: 20px;\n  height: ", ";\n\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n    border-radius: 15px;\n  }\n"])), function (_ref) {
  var showTabs = _ref.showTabs,
    hasAddress = _ref.hasAddress;
  return hasAddress ? '55px' : showTabs ? '105px' : '50px';
}, function (props) {
  return props.showMap ? '30px' : 0;
}, function (_ref2) {
  var notUseCustomerInfo = _ref2.notUseCustomerInfo;
  return notUseCustomerInfo ? '370px' : '480px';
});
var WrapperSkeleton = exports.WrapperSkeleton = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n\n  span {\n    width: 100%;\n  }\n"])));
var AddressMarkContainer = exports.AddressMarkContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  background: #FFE69C;\n  border: 1px solid #FFF3CD;\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n  position: absolute;\n  top: 50px;\n  width: max-content;\n  p {\n    margin: 0;\n    color: #664D03;\n    font-size: 12px;\n  }\n\n  ", "\n"])), function (_ref3) {
  var blue = _ref3.blue;
  return blue && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      background-color: #CFF4FC;\n      border: 1px solid #9EEAF9;\n      p {\n        color: #055160;\n      }\n  "])));
});
var StreetViewText = exports.StreetViewText = _styledComponents.default.span(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 35px;\n  top: 30px;\n  text-decoration: underline;\n  color: ", ";\n  z-index: 9999;\n  cursor: pointer;\n"])), function (_ref4) {
  var _theme$colors;
  var theme = _ref4.theme;
  return theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.primary;
});
var WithoutAddressContainer = exports.WithoutAddressContainer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  p {\n    margin-bottom: 0;\n  }\n"])));
var SmsClient = exports.SmsClient = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  position: relative;\n  top: 20px;\n  display: flex;\n  p{\n    margin: 0;\n    white-space: pre;\n  }\n"])));
var TabsContainer = exports.TabsContainer = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 50%;\n  top: 60px;\n  right: 0px;\n  padding-right: 20px;\n  z-index: 1000;\n  border-bottom: 1px solid #E9ECEF;\n\n"])));