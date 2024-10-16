"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapOrderyType = exports.Title = exports.SloganContent = exports.OrderTypeItem = exports.HomeContentWrapper = exports.HomeBack = exports.HeroContainerStyled = exports.HeroContainer = exports.FoodLocation = exports.DiscountBars = exports.ContentWrapper = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var HeroContainerStyled = exports.HeroContainerStyled = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n"])));
var HeroContainer = exports.HeroContainer = function HeroContainer(props) {
  var style = {};
  return /*#__PURE__*/_react.default.createElement(HeroContainerStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var ContentWrapper = exports.ContentWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    text-shadow: 0px 0px 5px #fff;\n    padding: 35px 20px 15vh;\n    box-sizing: border-box;\n\n    @media (min-width: 530px) {\n      padding: 33px 3.5vw;\n      flex-direction: row;\n      justify-content: space-between;\n    }\n"])));
var Title = exports.Title = _styledComponents.default.h1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 0px;\n  text-align: left;\n  letter-spacing: 0px;\n  color: ", ";\n  opacity: 1;\n  font-weight: bold;\n  font-size: 34px;\n  line-height: 48px;\n  margin-bottom: 15px;\n  ", "\n\n  @media (min-width: 330px) {\n    font-size: 36px;\n  }\n\n  @media (min-width: 768px) {\n    font-size: 42px;\n  }\n\n  @media (min-width: 1024px) {\n    font-size: 4vw;\n    margin-bottom: 25px;\n  }\n\n  @media (min-width: 1450px) {\n    font-size: 66px;\n  }\n\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      text-align: right;\n  "])));
});
var DiscountBars = exports.DiscountBars = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  width: calc(100% + 7px);\n  overflow: hidden;\n  justify-content: flex-end;\n  position: absolute;\n  bottom: 15px;  \n\n  img {\n    width: 80%;\n    object-fit: cover;\n  }\n\n  @media (min-width: 410px) {\n    width: 100%;\n    bottom: 2.7vh;\n    img {\n      width: 84%;\n    }\n  }\n\n  @media (min-width: 530px) {\n    top: 3vh;\n    right: 0;\n    bottom: unset;\n    width: 100%;\n    img {\n      width: 50%;\n    }\n  }\n\n  @media (min-width: 1024px) {\n    img {\n      width: 42%;\n    }\n  }\n"])));
var SloganContent = exports.SloganContent = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  @media (min-width: 530px) {\n    margin-top: 75px;\n  }\n"])));
var WrapOrderyType = exports.WrapOrderyType = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n\n  >div{\n    &:first-child{\n      svg {\n        width: 30px;\n      }\n    }\n  }\n"])));
var OrderTypeItem = exports.OrderTypeItem = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  width: 120px;\n  height: 65px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0 3px;\n  box-sizing: border-box;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  color: ", ";\n  background-color: #fff;\n  border: 2px inset ", ";\n  border-radius: 7.6px;\n  box-shadow: rgb(177 177 177) 3px 3px 6px 0px inset, rgb(255 255 255 / 50%) -3px -3px 6px 1px inset;\n  svg {\n    height: 34px;\n    width: 28px;\n    fill: ", ";\n  }\n\n  @media (min-width: 768px) {\n    font-size: 14px;\n    width: 125px;\n    height: 70px;\n  }\n\n  @media (min-width: 1200px) {\n    font-size: 16px;\n    width: 135px;\n    height: 73px;\n  }  \n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
var FoodLocation = exports.FoodLocation = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: calc(50% - 25px);\n  left: calc(50% - 25px);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background-color: #fff;\n  box-shadow: 1px -2px 11px 0 rgb(0 0 0 / 18%), 0 4px 15px 0 rgb(0 0 0 / 15%);\n  svg {\n    width: 35px;\n    height: fit-content;\n    fill: gray;\n  }\n"])));
var HomeBack = exports.HomeBack = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  overflow: hidden;\n  height: fit-content;\n  img {\n    width: 100%;\n    object-fit: cover;\n  }\n\n  @media (min-width: 1024px) {\n    height: 72vh;\n    max-height: 650px;\n  } \n\n  @media (min-width: 1440px) {\n    max-height: unset;\n    height: 900px;\n  }\n"])));
var HomeContentWrapper = exports.HomeContentWrapper = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));