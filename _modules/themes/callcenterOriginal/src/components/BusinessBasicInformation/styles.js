"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.WrapperBusinessLogo = exports.BusinessMoreDetail = exports.BusinessLogo = exports.BusinessInfoItem = exports.BusinessInfoContent = exports.BusinessInfoContainer = exports.BusinessInfo = exports.BusinessDetail = exports.BusinessContent = exports.BusinessContainer = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var BusinessContainer = exports.BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  max-height: 324px;\n  height: 324px;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 200px;\n  justify-content: center;\n  align-items: flex-end;\n  border-radius: 7.6px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  h1 {\n    color: #FFF;\n    opacity: 0.5;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0 10px;\n    padding: 0;\n  }\n\n  @media (min-width: 490px) {\n    justify-content: flex-start;\n  }\n"])), function (props) {
  return props.isSkeleton && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: #cccccc;\n  "])));
}, function (props) {
  return props.bgimage && !props.isClosed && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    background-image: url(", ");\n  "])), props.bgimage);
}, function (props) {
  return props.bgimage && props.isClosed && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(", ");\n  "])), props.bgimage);
});
var BusinessContent = exports.BusinessContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  margin: 10px;\n  max-height: 124px;\n  width: 124px;\n\n  @media (min-width: 426px) {\n    margin: 25px;\n  }\n"])));
var WrapperBusinessLogo = exports.WrapperBusinessLogo = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  max-width: 124px;\n  max-height: 124px;\n  height: 124px;\n  width: 124px;\n"])));
var BusinessLogoStyled = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 124px;\n  border-radius: 7.6px;\n"])));
var BusinessLogo = exports.BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var BusinessInfoItem = exports.BusinessInfoItem = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right:5px;\n  ", "\n\n  h2 {\n    font-weight: 600;\n    font-size: 32px;\n    margin: 0 0 10px 0;\n  }\n\n  .type {\n    font-size: 14px;\n    color: ", ";\n    margin: 0 0 5px 0;\n  }\n\n  .preorder-Reviews {\n    span {\n      user-select: none;\n      cursor: pointer;\n      font-size: 14px;\n      color: ", ";\n      text-decoration: underline;\n      &:not(:last-child) {\n        margin-right: 5px;\n        ", "\n      }\n\n      &.dot {\n        font-size: 12px;\n        text-decoration: none;\n        color: #909BA9;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    padding-left: 5px;\n    padding-right: 0;\n  "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.primary;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n          margin-left: 5px;\n          margin-right: 0;\n        "])));
});
var BusinessInfoContainer = exports.BusinessInfoContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  margin-bottom: 25px;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n\n  @media (min-width: 700px) {\n    flex-direction: row;\n  }\n"])));
var BusinessInfoContent = exports.BusinessInfoContent = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral([""])));
var WrapperSearch = exports.WrapperSearch = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  margin: 15px 0px 0px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: flex-end;\n\n  .search-bar {\n    margin-right: 10px;\n    ", "\n    input {\n      width: 100%;\n\n      @media (min-width: 500px) {\n        width: 250px;\n      }\n    }\n  }\n\n  div:last-child {\n    text-align: right;\n\n    ", "\n  }\n\n  #select-input {\n    background-color: transparent !important;\n    border: none;\n    color: #748194 !important;\n\n    #list {\n      border-radius: 8px;\n    }\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n      text-align: left;\n    "])));
});
var BusinessDetail = exports.BusinessDetail = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  h5 {\n    font-size: 14px;\n    color: #909BA9;\n    margin: 0 5px 0 0;\n    font-weight: normal;\n    ", "\n\n    span {\n      margin-right: 5px;\n      ", "\n    }\n  }\n\n  .review {\n    color: #909BA9;\n    margin: 0;\n    display: flex;\n    align-items: center;\n\n    svg {\n      font-size: 19px;\n    }\n\n    span {\n      font-size: 14px;\n    }\n  }\n\n  .dot {\n    color: #909BA9;\n    font-size: 12px;\n    margin-right: 5px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0px;\n      "])));
}, function (props) {
  var _props$theme8;
  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
});
var BusinessMoreDetail = exports.BusinessMoreDetail = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  top: 30px;\n  right: 30px;\n  position: absolute;\n  min-width: 24px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  svg {\n    font-size: 24px;\n    color: white;\n  }\n  \n  \n"])));