"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSubOption = exports.WrapperIngredients = exports.WrapperImage = exports.SkuContent = exports.SkeletonBlock = exports.SectionTitle = exports.ProductTagsListContainer = exports.ProductTagWrapper = exports.ProductMeta = exports.ProductInfo = exports.ProductImage = exports.ProductEdition = exports.ProductContainer = exports.ProductComment = exports.ProductActions = exports.Hr = exports.CategoriesContainer = exports.ActionItem = void 0;
var _polished = require("polished");
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ProductContainer = exports.ProductContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  max-height: 100vh;\n  position: relative;\n  padding: 50px 0px 20px;\n  color: ", ";\n  @media (min-width: 768px) {\n    height: 100%;\n  }\n  @media (min-width: 769px) {\n  }\n  @media (min-width: 1201px) {\n  }\n"])), function (props) {
  return props.theme.colors.secundaryFontColor;
});
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 150px;\n  height: 150px;\n  @media (min-width: 768px) {\n    min-height: 200px;\n    height: 200px;\n  }\n  @media (min-width: 1201px) {\n    min-height: 300px;\n    height: 300px;\n  }\n"])));
var ProductImage = exports.ProductImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 150px;\n  height: 150px;\n  overflow: hidden;\n  img {\n    box-sizing: border-box;\n    width: 100%;\n  }\n  @media (min-width: 768px) {\n    min-height: 200px;\n    height: 200px;\n  }\n  @media (min-width: 1201px) {\n    min-height: 300px;\n    height: 300px;\n  }\n"])));
var ProductInfo = exports.ProductInfo = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0px;\n  position: relative;\n  p {\n    font-size: 14px;\n    font-weight: 200;\n    margin-top: 0px;\n    line-height: 1.5em;\n    width: 100%;\n    text-align: left;\n    ", "\n  }\n  @media (min-width: 381px) {\n    h1 {\n      font-size: 24px;\n    }\n    p {\n      font-size: 16px;\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      text-align: right;\n    "])));
});
var ProductMeta = exports.ProductMeta = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  padding: 0 20px;\n  margin: 25px 0 0 0;\n  h1 {\n    font-size: 24px;\n    line-height: 34px;\n    font-weight: 700;\n    color: #263238;\n    margin-top: 0px;\n    width: 100%;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    text-transform: uppercase;\n    color: ", ";\n  }\n  h5 {\n    margin: 0;\n    margin-bottom: 10px;\n    font-size: 18px;\n    line-height: 28px;\n    font-weight: 100;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.colors.secundaryFontColor;
}, function (props) {
  return props.theme.colors.secundaryFontColor;
});
var ProductEdition = exports.ProductEdition = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  padding: 20px;\n  max-height: 34vh;\n  overflow-y: scroll;\n  border-bottom: 1px solid ", ";\n"])), function (props) {
  return props.theme.colors.borderColor;
});
var SectionTitle = exports.SectionTitle = _styledComponents.default.h3(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  font-size: 20px;\n  line-height: 30px;\n  margin: 0px;\n  font-weight: 600;\n  color: #666666;\n"])));
var ProductComment = exports.ProductComment = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  margin-bottom: 40px;\n  p {\n    font-weight: 300;\n    margin-bottom: 5px;\n  }\n  textarea {\n    margin-top: 20px;\n  }\n"])));
var ProductActions = exports.ProductActions = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 20px;\n  width: 100%;\n  box-sizing: border-box;\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  background-color: #FFF;\n  @media (min-width: 577px) {\n    justify-content: space-between;\n    flex-direction: row;\n  }\n  @media (min-width: 1024px) {\n    position: relative;\n    bottom: initial;\n    right: initial;\n  }\n"])));
var ActionItem = exports.ActionItem = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  div.incdec-control {\n    width: 25%;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    svg {\n      width: 25px;\n      height: 25px;\n      cursor: pointer;\n    }\n  }\n  button:disabled,\n  button.disabled,\n  svg.disabled {\n    opacity: 0.5;\n  }\n  svg.disabled {\n    pointer-events: none;\n  }\n  button.add {\n    width: 55%;\n    padding: 5px 10px;\n    position: relative;\n    overflow: hidden;\n    white-space: nowrap;\n    &.soldout {\n      pointer-events: none;\n    }\n  }\n  .total-price {\n    font-size: 20px;\n    line-height: 30px;\n    color: #666666;\n    font-weight: 600;\n  }\n  @media (min-width: 577px) {\n    width: 50%;\n  }\n  @media (min-width: 1024px) {\n    &:first-child {\n      width:40%;\n    }\n    &:last-child {\n      width:60%;\n    }\n    div.incdec-control {\n      width: 32%;\n    }\n    button.add {\n      width: 45%;\n    }\n  }\n"])));
var SkeletonBlock = exports.SkeletonBlock = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin: auto;\n  span {\n    margin-bottom: 10px;\n  }\n"])), function (_ref) {
  var width = _ref.width;
  return width && "".concat(width, "%");
});
var WrapperSubOption = exports.WrapperSubOption = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n  &.error {\n    background-color: ", ";\n  }\n  &.soldout {\n    pointer-events: none;\n    background-color: hsl(0, 0%, 72%);\n  }\n"])), (0, _polished.lighten)(0.58, '#A52121'));
var SkuContent = exports.SkuContent = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  h2 {\n    font-size: 16px;\n    font-weight: 500;\n    margin-bottom: 0px;\n  }\n  p {\n    font-size: 14px;\n  }\n"])));
var WrapperIngredients = exports.WrapperIngredients = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  padding: 20px;\n  ", "\n"])), function (_ref2) {
  var isProductSoldout = _ref2.isProductSoldout;
  return isProductSoldout && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    border-radius: 10px;\n    pointer-events: none;\n    background: hsl(0, 0%, 72%);\n  "])));
});
var CategoriesContainer = exports.CategoriesContainer = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  overflow-x : scroll;\n"])));
var Hr = exports.Hr = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  background: ", ";\n"])), function (_ref3) {
  var height = _ref3.height;
  return height ? "".concat(height, "px") : '10px';
}, function (_ref4) {
  var color = _ref4.color;
  return color ? "".concat(color) : '#DDDDDD';
});
var ProductTagsListContainer = exports.ProductTagsListContainer = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 20px;\n  margin-bottom: 15px;\n"])));
var ProductTagWrapper = exports.ProductTagWrapper = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n\n  img {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  }\n\n  span {\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      margin: 0 10px 0 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n      margin: 0 20px 0 10px;\n    "])));
});