"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.WrapperBusinessLogo = exports.SearchTitle = exports.PreviousOrders = exports.ItemInline = exports.FeatureItems = exports.ErrorMessage = exports.BusinessesTitle = exports.BusinessSearch = exports.BusinessName = exports.BusinessMeta = exports.BusinessLogo = exports.BusinessList = exports.BusinessItemsWrapper = exports.BusinessItem = exports.BusinessInfo = exports.BusinessHeroImgStyled = exports.BusinessHeroImg = exports.BusinessFeatures = exports.BusinessContainer = exports.BusinessBanner = exports.BusineessItems = exports.AddressMenu = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var BusinessContainer = exports.BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));
var BusinessList = exports.BusinessList = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"])));
var WrapperSearch = exports.WrapperSearch = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  margin: 10px 20px 0px;\n\n  ", "\n"])), function (_ref) {
  var isCustomLayout = _ref.isCustomLayout;
  return isCustomLayout && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    box-sizing: border-box;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin: 0 auto;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    width: 100%; \n    padding: 0 20px;\n\n    svg {\n      font-size: 26px;\n      color: ", ";\n      margin-left: 10px;\n      cursor: pointer;\n    }\n    \n    @media(min-width: 681px){\n      width: 75%;\n      padding: 0;\n    }\n\n    @media(min-width: 1201px){\n      width: 50%;\n    }\n  "])), function (props) {
    var _props$theme;
    return (_props$theme = props.theme) === null || _props$theme === void 0 || (_props$theme = _props$theme.colors) === null || _props$theme === void 0 ? void 0 : _props$theme.primary;
  });
});
var ErrorMessage = exports.ErrorMessage = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  background-color: #CCCCCC;\n  margin: 0px 15px;\n  color: #D81313;\n  font-weight: bold;\n"])));
var PreviousOrders = exports.PreviousOrders = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 10px 20px 0px;\n"])));
var BusinessesTitle = exports.BusinessesTitle = _styledComponents.default.h1(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  margin: 0px 20px;\n"])));
var BusinessBanner = exports.BusinessBanner = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 30px;\n  position: relative;\n  @media (max-width: 481px) {\n    margin-bottom: 0px;\n  }\n"])));
var BusinessHeroImgStyled = exports.BusinessHeroImgStyled = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  height: auto;\n  width: 100%;\n  height: calc(65vh - 98px);\n\n  ", "\n\n  @media (min-width: 821px) {\n    height: 500px;\n  }\n"])), function (_ref2) {
  var bgimage = _ref2.bgimage;
  return bgimage && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n    background-repeat: no-repeat, repeat;\n    background-size: cover;\n    object-fit: cover;\n    background-position: center;\n  "])));
});
var BusinessHeroImg = exports.BusinessHeroImg = function BusinessHeroImg(props) {
  var style = {};
  style.backgroundImage = "url(".concat(props.bgimage, ")");
  return /*#__PURE__*/_react.default.createElement(BusinessHeroImgStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var BusinessFeatures = exports.BusinessFeatures = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 10%;\n  width: 100%;\n  padding: 0 15px;\n  box-sizing: border-box;\n"])));
var AddressMenu = exports.AddressMenu = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  color: #344050;\n  font-weight: 600;\n  border-radius: 50px;\n  padding: 13px 19px;\n  margin-bottom: 10px;\n  svg {\n    margin-right: 5px;\n    color: #B1BCCC;\n    ", "\n  }\n"])), function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0;\n    "])));
});
var FeatureItems = exports.FeatureItems = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"])));
var ItemInline = exports.ItemInline = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  > span #select-input {\n    background-color: #F8F9FA !important;\n    border: none;\n    border-radius: 7.6px;\n    svg {\n      font-size: 14px;\n    }\n    #list {\n      background-color: #fff;\n      border: none;\n      border-radius: 7.6px;\n\n      left: 0px;\n      right: initial;\n\n      ", "\n    }\n\n    > div:first-child {\n      font-size: 11px;\n    }\n  }\n\n  .moment-popover {\n    > div:first-child {\n      font-size: 11px;\n      padding: 4px 7px;\n      svg {\n        font-size: 14px;\n      }\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        left: initial;\n        right: 0px;\n      "])));
});
var BusinessSearch = exports.BusinessSearch = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    display: flex;\n    background-color: #f8f9fa;\n    align-items: center;\n    padding: 7px;\n    border-radius: 7px;\n    font-size: 11px;\n    svg {\n      font-size: 15px;\n    }\n"])));
var BusinessItemsWrapper = exports.BusinessItemsWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 100%;\n  box-sizing: border-box;\n"])));
var BusineessItems = exports.BusineessItems = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin-top: 10px;\n"])));
var BusinessItem = exports.BusinessItem = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n"])));
var WrapperBusinessLogo = exports.WrapperBusinessLogo = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  align-self: center;\n  width: 50px;\n  height: 50px;\n  min-height: 50px;\n  max-width: 50px;\n  ", "\n"])), function (_ref3) {
  var isSkeleton = _ref3.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    width: auto;\n    height: auto;\n  "])));
});
var BusinessLogo = exports.BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var BusinessLogoStyled = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 50px;\n  height: 50px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 50px;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  border-radius: 7.6px;\n"])));
var BusinessName = exports.BusinessName = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  line-height: 18px;\n  color: #344050;\n  font-weight: 600;\n  width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n\n"])));
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  width: calc(100% - 60px);\n  margin-left: auto;\n  margin-top: 3px;\n"])));
var BusinessMeta = exports.BusinessMeta = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n  margin-top: 5px;\n  width: 100%;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  p {\n    margin: 0;\n    font-size: 12px;\n    svg {\n      font-size: 8px;\n      margin: 0 3px;\n    }\n  }\n"])));
var SearchTitle = exports.SearchTitle = _styledComponents.default.h1(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  text-align: center;\n  font-weight: 600;\n  font-size: 24px;\n  margin-top: -5px;\n  margin-bottom: 15px;\n"])));