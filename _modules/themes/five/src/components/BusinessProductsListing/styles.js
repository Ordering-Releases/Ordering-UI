"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Title = exports.SpinnerCart = exports.SkeletonItem = exports.ProductsContainer = exports.ProductLoading = exports.OrderContextUIWrapper = exports.MobileCartViewWrapper = exports.HeaderContent = exports.EmptyCart = exports.EmptyBtnWrapper = exports.BusinessCartContent = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ProductsContainer = exports.ProductsContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 95%;\n  margin: 20px auto 0px;\n  > svg {\n    color: ", ";\n    font-size: 24px;\n    cursor: pointer;\n    margin-bottom: 5px;\n  }\n  > div {\n    background-color: ", ";\n  }\n\n"])), function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 || (_props$theme = _props$theme.colors) === null || _props$theme === void 0 ? void 0 : _props$theme.backgroundPage;
});
var ProductLoading = exports.ProductLoading = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n"])));
var SkeletonItem = exports.SkeletonItem = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 80%;\n  margin: 30px auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])));
var MobileCartViewWrapper = exports.MobileCartViewWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  position: fixed;\n  width: 100vw;\n  left: 0;\n  bottom: 0;\n  background-color: white;\n  padding: 15px 25px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  z-index: 1006;\n  box-shadow: 0px 4px 10px rgb(0 0 0 / 12%);\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n\n    @media (min-width: 1200px) {\n      font-size: 18px;\n      padding-left: 20px;\n    }\n  }\n\n  button {\n    height: 44px;\n    border-radius: 7.6px;\n  }\n"])));
var BusinessCartContent = exports.BusinessCartContent = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  background: white;\n  padding: 30px;\n  position: relative;\n  margin-bottom: 30px;\n  max-height: ", ";\n  overflow: auto;\n\n  .product.accordion {\n    margin: 0;\n  }\n\n  /* .accordion.active {\n    padding-bottom: 10px;\n  } */\n\n  ", "\n\n  @media (min-width: 1200px) {\n    position: sticky;\n    top: 0;\n  }\n\n  @media (min-width: 768px) {\n    padding: 35px 30px;\n  }\n"])), function (_ref) {
  var maxHeight = _ref.maxHeight;
  return "".concat(maxHeight, "px");
}, function (_ref2) {
  var isModal = _ref2.isModal;
  return !isModal && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    border: 1px solid #E9ECEF;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.12);\n    border-radius: 7.6px;\n  "])));
});
var EmptyCart = exports.EmptyCart = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  .empty-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    svg {\n      font-size: 45px;\n      color: #B1BCCC;\n      margin-top: 10px;\n    }\n\n    p {\n      font-size: 14px;\n      color: #B1BCCC;\n      margin: 23px 0 0 0;\n    }\n  }\n"])));
var Title = exports.Title = _styledComponents.default.h1(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  font-weight: 600;\n  font-size: 20px;\n  color: ", ";\n  margin-bottom: 18px;\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var EmptyBtnWrapper = exports.EmptyBtnWrapper = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n\n  span {\n    font-weight: 600;\n    font-size: 16px;\n    color: ", ";\n  }\n\n  button {\n    color: #748194;\n    background: #F8F9FA;\n    border: 1px solid #F8F9FA;\n    border-radius: 7.6px;\n    height: 44px;\n    font-size: 14px;\n    padding-left: 25px;\n    padding-right: 25px;\n  }\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var HeaderContent = exports.HeaderContent = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n  .back-arrow {\n    font-size: 24px;\n    cursor: pointer;\n  }\n  .fixed-arrow {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10001;\n    width: 100vw;\n    background-color: ", ";\n    height: 56px;\n    display: flex;\n    align-items: center;\n    ", "\n    @media (min-width: 993px){\n      width: 100px;\n      ", "\n    }\n  }\n  .fixed-arrow-width{\n    width: 100vw;      \n  }\n"])), function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      padding-right: 10px;\n    "]))) : (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n      padding-left: 10px;\n    "])));
}, function (_ref3) {
  var useFullWidth = _ref3.useFullWidth;
  return useFullWidth && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n        width: 100vw;\n      "])));
});
var OrderContextUIWrapper = exports.OrderContextUIWrapper = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  flex: 1;\n  width: 100%;\n  ", "\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    margin-right: 15px;\n  "])));
});
var SpinnerCart = exports.SpinnerCart = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  position: absolute;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));