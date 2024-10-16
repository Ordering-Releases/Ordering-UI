"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SectionTitle = exports.ScheduleSection = exports.ScheduleContainer = exports.ScheduleBlock = exports.ModalIcon = exports.Map = exports.Information = exports.ImageContainer = exports.HeaderImage = exports.Divider = exports.Description = exports.DeliveryInfo = exports.BussinessTitle = exports.BusinessTitle = exports.BusinessMediaContent = exports.BusinessLogo = exports.BusinessInformationContainer = exports.BusinessContent = exports.BusinessAddressNotes = exports.BusinessAddress = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var BusinessInformationContainer = exports.BusinessInformationContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  position: relative;\n  overflow: auto;\n"])));
var BussinessTitle = exports.BussinessTitle = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  z-index: 1000;\n  display: inline-flex;\n  width: 50%;\n  background: ", ";\n  align-items: center;\n  margin-left: 10px;\n  margin-bottom: 10px;\n  border-radius: 16px;\n  padding: 10px;\n  ", "\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 || (_props$theme = _props$theme.colors) === null || _props$theme === void 0 ? void 0 : _props$theme.backgroundPage;
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0px;\n  "])));
});
var HeaderImage = exports.HeaderImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 20%;\n  margin-top: auto;\n  > img {\n    width: 100%;\n    height: 100%;\n  }\n"])));
var BusinessLogoStyled = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 75px;\n  border-radius: 10px;\n"])));
var BusinessLogo = exports.BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var Information = exports.Information = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  flex: 1;\n  > h5 {\n    margin-block-end: 0.8em;\n    margin-block-start: 0.8em;\n  }\n  > p {\n    margin-block-end: 0;\n    margin-block-start: 0.3em;\n    > svg {\n      vertical-align: middle;\n    }\n  }\n"])));
var BusinessContent = exports.BusinessContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 0 10px;\n  background: ", ";\n  @media(min-width: 768px){\n    padding: 0 20px;\n    padding-top: 30px;\n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
});
var SectionTitle = exports.SectionTitle = _styledComponents.default.h3(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-size: 16px;\n  color: ", ";\n  margin: 10px 0 10px 0;\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var Map = exports.Map = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: calc(100% + 20px);\n  margin-left: -10px;\n  height: 300px;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n  }\n  @media(min-width: 768px){\n    width: calc(100% + 40px);\n    margin-left: -20px;\n  }\n"])));
var ScheduleSection = exports.ScheduleSection = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-bottom: 35px;\n"])));
var ScheduleContainer = exports.ScheduleContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media (min-width: 576px) {\n    width: 300px;\n  }\n"])));
var ScheduleBlock = exports.ScheduleBlock = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-bottom: 16px;\n  align-items: center;\n  justify-content: space-between;\n\n  h4 {\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    color: ", ";\n    margin: 0;\n  }\n\n  p {\n    font-size: 14px;\n    margin: 0;\n    color: ", ";\n\n    &.close {\n      color: #E63757;\n      margin-right: 20px;\n      ", "\n    }\n  }\n\n  > div {\n    display: flex;\n    align-items: center;\n\n    > div {\n      margin: 0 5px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        margin-left: 20px;\n        margin-left: 0;\n      "])));
});
var DeliveryInfo = exports.DeliveryInfo = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin-top: 10px;\n\n  h5 {\n    font-size: 16px;\n  }\n\n  div {\n    width: 100%;\n    &:last-child {\n      h5:not(:last-child) {\n        margin-top: 0px;\n      }\n    }\n  }\n\n  @media (min-width: 769px) {\n    flex-wrap: nowrap;\n    div {\n      width: 50%;\n      &:last-child {\n        h5:not(:last-child) {\n          margin-top: 22.1776px;\n        }\n      }\n    }\n  }\n"])));
var BusinessMediaContent = exports.BusinessMediaContent = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  padding-bottom: 20px;\n  > div {\n    display: flex;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n\n    > img,\n    > iframe {\n      object-fit: cover;\n      border-radius: 10px;\n      margin: 10px 10px;\n      width: calc(100% - 12px);\n      cursor: pointer;\n\n      @media (min-width: 681px) {\n        width: calc(50% - 20px);\n      }\n\n      @media (min-width: 993px) {\n        width: calc(25% - 20px);\n      }\n    }\n  }\n"])));
var ModalIcon = exports.ModalIcon = _styledComponents.default.span(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  font-size: 30px;\n  cursor: pointer;\n  color: ", ";\n  border-radius: 50%;\n  left: 5px;\n  top: 5px;\n  z-index: 1;\n  ", "\n  @media (min-width: 578px){\n    right: 10px;\n    ", "\n  }\n  @media (min-width: 768px){\n    left: 25px;\n    top: 30px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.colors.headingColor;
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    left: 5px;\n    right: initial;\n  "])));
}, function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    left: 10px;\n    right: initial;\n  "])));
}, function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    right: 25px;\n    left: initial;\n  "])));
});
var Description = exports.Description = _styledComponents.default.p(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  margin: 0 10px;\n"])));
var ImageContainer = exports.ImageContainer = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral([" \n  max-height: 500px;\n  img{\n    width: 100%;\n    height: auto;\n    aspect-ratio: attr(width) / attr(height);\n    border-bottom-left-radius: 10px;\n    border-bottom-right-radius: 10px;\n  }\n"])));
var BusinessTitle = exports.BusinessTitle = _styledComponents.default.h2(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 24px;\n  color: ", ";\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 30px;\n  padding-top: 25px;\n  ", "\n"])), function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  var _props$theme8;
  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    padding-right: 30px;\n    padding-left: 0;\n  "])));
});
var BusinessAddress = exports.BusinessAddress = _styledComponents.default.p(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  margin: 15px 0;\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var BusinessAddressNotes = exports.BusinessAddressNotes = _styledComponents.default.p(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  margin: 15px 0 25px 0;\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var Divider = exports.Divider = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  background: #F8F9FA;\n  height: 8px;\n  width: calc(100% + 20px);\n  margin-left: -10px;\n\n  @media (min-width: 768px) {\n    width: calc(100% + 40px);\n    margin-left: -20px;\n  }\n"])));