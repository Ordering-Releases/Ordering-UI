"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSearch = exports.WrapperFloatingSearch = exports.WrapperBusinessLogo = exports.TitleWrapper = exports.SocialList = exports.SearchWrapper = exports.SearchIconWrapper = exports.SearchComponentContainer = exports.RibbonBox = exports.IconWrapper = exports.CategorySelectedContainer = exports.BusinessMoreDetail = exports.BusinessLogo = exports.BusinessInfoWrapper = exports.BusinessInfoItem = exports.BusinessInfoContent = exports.BusinessInfoContainer = exports.BusinessInfo = exports.BusinessDetail = exports.BusinessContent = exports.BusinessContainer = exports.BackButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55, _templateObject56, _templateObject57, _templateObject58;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var BusinessContainer = exports.BusinessContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  max-height: 324px;\n  height: 150px;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 150px;\n  justify-content: start;\n  align-items: flex-end;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  h1 {\n    color: #FFF;\n    opacity: 0.5;\n    position: absolute;\n    top: 0;\n    right: 0;\n    margin: 0 10px;\n    padding: 0;\n  }\n\n  @media (min-width: 576px) {\n    border-radius: 7.6px;\n    height: 324px;\n    min-height: 200px;\n  }\n\n\n"])), function (props) {
  return props.isSkeleton && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    background-color: #cccccc;\n  "])));
}, function (props) {
  return props.bgimage && props.isChew && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    height: 180px;\n  "])));
}, function (props) {
  return props.bgimage && !props.isClosed && !props.isChew && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background-image: url(", ");\n  "])), props.bgimage);
}, function (props) {
  return props.bgimage && props.isClosed && !props.isChew && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(", ");\n  "])), props.bgimage);
}, function (props) {
  return props.bgimage && props.isChew && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    background-image: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), url(", ");\n  "])), props.bgimage);
});
var BusinessContent = exports.BusinessContent = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin: 0;\n  margin-left: 35px;\n  margin-bottom: -35px;\n  max-height: 70px;\n  width: 70px;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;\n\n  @media (min-width: 576px) {\n    border-radius: 10px;\n    margin: 10px;\n    max-height: 124px;\n    width: 124px;\n  }\n\n  @media (min-width: 768px) {\n    margin: 25px;\n  }\n"])));
var WrapperBusinessLogo = exports.WrapperBusinessLogo = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  max-width: 70px;\n  max-height: 70px;\n  width: 70px;\n  height: 70px;\n\n  @media (min-width: 576px) {\n    max-width: 124px;\n    max-height: 124px;\n    height: 124px;\n    width: 124px;\n  }\n"])));
var BusinessLogoStyled = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 70px;\n  border-radius: 7.6px;\n  @media (min-width: 576px) {\n    min-height: 124px;\n  }\n"])));
var BusinessLogo = exports.BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var BusinessInfoItem = exports.BusinessInfoItem = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding-right:5px;\n  ", "\n\n  .type {\n    font-size: 14px;\n    color: ", ";\n    margin: 0 0 5px 0;\n  }\n\n  .preorder-Reviews {\n    span {\n      user-select: none;\n      cursor: pointer;\n      font-size: 14px;\n      color: ", ";\n      &:not(:last-child) {\n        margin-right: 5px;\n        ", "\n      }\n      &:hover {\n        text-decoration: underline;\n      }\n\n      &.dot {\n        font-size: 12px;\n        text-decoration: none;\n        color: #909BA9;\n      }\n    }\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    padding-left: 5px;\n    padding-right: 0;\n  "])));
}, function (props) {
  return props.theme.colors.darkTextColor;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.primary;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n          margin-left: 5px;\n          margin-right: 0;\n        "])));
}, function (_ref) {
  var isInfoShrunken = _ref.isInfoShrunken;
  return isInfoShrunken && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    color: #FFFFFF;\n    span, p, h5, svg {\n      color: #FFFFFF !important;\n    }\n  "])));
});
var BusinessInfoContainer = exports.BusinessInfoContainer = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: ", ";\n  padding-top: 40px;\n  padding-left: 5px;\n  padding-right: 5px;\n  display: flex;\n  justify-content: ", ";\n  flex-direction: column;\n  box-sizing: border-box;\n  align-items: ", ";\n\n  #business_name {\n    ", "\n  }\n\n  @media (min-width: 576px) {\n    padding-top: 0px;\n    padding-left: 0px;\n    padding-right: 0px;\n    margin-top: 10px;\n  }\n\n  @media (min-width: 768px) {\n    flex-direction: row;\n    margin-bottom: 25px;\n    margin-left: ", ";\n  }\n"])), function (props) {
  return props.isChew && '100%';
}, function (props) {
  return props.isFlexEnd ? 'flex-end' : 'space-between';
}, function (props) {
  return props.isFlexEnd ? 'flex-end' : 'space-between';
}, function (_ref2) {
  var isChew = _ref2.isChew;
  return isChew && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        background: none;\n      "])));
}, function (props) {
  return props.isChew && '25px';
});
var BusinessInfoContent = exports.BusinessInfoContent = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var SearchWrapper = exports.SearchWrapper = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var WrapperSearch = exports.WrapperSearch = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  margin: 15px 0px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  box-sizing: border-box;\n  z-index: 1002;\n\n  .search-bar {\n    margin-right: 10px;\n    ", "\n    input {\n      width: 100%;\n\n      @media (min-width: 500px) {\n        width: 250px;\n      }\n    }\n  }\n\n  div:last-child {\n    text-align: right;\n\n    ", "\n  }\n\n  #select-input {\n    background-color: transparent !important;\n    border: none;\n    color: #748194 !important;\n\n    #list {\n      border-radius: 8px;\n    }\n  }\n  &.fixed-search {\n    position: fixed;\n    top: 0;\n    right: 0;\n    z-index: 10001;\n    width: fit-content;\n    margin-top: 0px;\n    background-color: ", ";\n    padding: 10px;\n  }\n\n  @media (min-width: 993px) {\n    &.fixed-search {\n      left: 0;\n      width: 100vw;\n      z-index: 10000;\n    }\n  }\n"])), function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      text-align: left;\n    "])));
}, function (props) {
  return props.theme.colors.backgroundPage;
});
var BusinessDetail = exports.BusinessDetail = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  h5 {\n    font-size: 14px;\n    color: #909BA9;\n    margin: 0 5px 0 0;\n    font-weight: normal;\n    ", "\n\n    span {\n      margin-right: 5px;\n      ", "\n    }\n  }\n\n  .review {\n    color: #909BA9;\n    margin: 0;\n    display: flex;\n    align-items: center;\n\n    svg {\n      font-size: 15px;\n      margin-bottom: 1px;\n      margin-right: 5px;\n      ", "\n    }\n\n    p {\n      font-size: 14px;\n      margin: 0px;\n    }\n  }\n\n  .dot {\n    color: #909BA9;\n    font-size: 12px;\n    margin-right: 5px;\n    ", "\n  }\n\n  ", "\n"])), function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0px;\n      "])));
}, function (props) {
  var _props$theme8;
  return ((_props$theme8 = props.theme) === null || _props$theme8 === void 0 ? void 0 : _props$theme8.rtl) && (0, _styledComponents.css)(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0px;\n      "])));
}, function (props) {
  var _props$theme9;
  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n      margin-left: 5px;\n      margin-right: 0px;\n    "])));
}, function (_ref3) {
  var isSkeleton = _ref3.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    > span {\n      display: flex;\n      margin-right: 5px;\n      ", "\n    }\n  "])), function (props) {
    var _props$theme10;
    return ((_props$theme10 = props.theme) === null || _props$theme10 === void 0 ? void 0 : _props$theme10.rtl) && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0px;\n      "])));
  });
});
var BusinessMoreDetail = exports.BusinessMoreDetail = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  ", "\n  position: ", ";\n  min-width: 24px;\n  width: 24px;\n  height: 24px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n\n  svg {\n    font-size: 24px;\n    color: ", ";\n  }\n"])), function (_ref4) {
  var position = _ref4.position;
  return position ? (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n    width: 100% !important;\n    justify-content: flex-end !important;\n    top: 0px;\n    right: 0px;\n  "]))) : (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    top: 30px;\n    right: 30px;\n  "])));
}, function (props) {
  var _props$position;
  return (_props$position = props.position) !== null && _props$position !== void 0 ? _props$position : 'absolute';
}, function (props) {
  return props.position ? 'black' : 'white';
});
var TitleWrapper = exports.TitleWrapper = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  span {\n    height: 70px;\n    width: 1px;\n    display: none;\n  }\n  h2 {\n    font-size: 24px;\n    line-height: 36px;\n    margin: 0 0 10px 0;\n    font-weight: 600;\n    width: 100%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    background: ", ";\n    &.fixed-name {\n      z-index: 10001;\n      position: fixed;\n      top: 0;\n      padding: 10px 0;\n      font-size: 18px;\n      ", "\n      ", "\n    }\n\n    @media (min-width: 768px) {\n      font-size: 32px;\n    }\n  }\n\n  h3 {\n      font-size: 16px;\n      line-height: 36px;\n      margin: 0px;\n      font-weight: 500;\n      width: 100%;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      background: ", ";\n    }\n"])), function (_ref5) {
  var _theme$colors;
  var theme = _ref5.theme;
  return theme === null || theme === void 0 || (_theme$colors = theme.colors) === null || _theme$colors === void 0 ? void 0 : _theme$colors.backgroundPage;
}, function (_ref6) {
  var isCustomLayout = _ref6.isCustomLayout;
  return !isCustomLayout ? (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n        width: calc(100vw - 230px);\n        ", "\n      "])), function (props) {
    var _props$theme11;
    return (_props$theme11 = props.theme) !== null && _props$theme11 !== void 0 && _props$theme11.rtl ? (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n        right: 50px;\n        "]))) : (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n        left: 50px;\n        "])));
  }) : (0, _styledComponents.css)(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n      ", "\n      "])), function (props) {
    var _props$theme12;
    return (_props$theme12 = props.theme) !== null && _props$theme12 !== void 0 && _props$theme12.rtl ? (0, _styledComponents.css)(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n          right: 10px;\n          "]))) : (0, _styledComponents.css)(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n          left: 10px;\n        "])));
  });
}, function (_ref7) {
  var disableLeftSpace = _ref7.disableLeftSpace;
  return disableLeftSpace && (0, _styledComponents.css)(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n      ", "\n      "])), function (props) {
    var _props$theme13;
    return (_props$theme13 = props.theme) !== null && _props$theme13 !== void 0 && _props$theme13.rtl ? (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n          right: 48px;\n          "]))) : (0, _styledComponents.css)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n          left: 48px;\n        "])));
  });
}, function (_ref8) {
  var _theme$colors2;
  var theme = _ref8.theme;
  return theme === null || theme === void 0 || (_theme$colors2 = theme.colors) === null || _theme$colors2 === void 0 ? void 0 : _theme$colors2.backgroundPage;
});
var RibbonBox = exports.RibbonBox = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  padding: 2px 8px;\n  box-sizing: border-box;\n  z-index: 10;\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 13px;\n  background-color: ", ";\n  max-width: 200px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n  margin-left: 5px;\n  margin-bottom: 10px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.colorTextSignForm;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n    margin-left: 0px;\n    margin-right: 5px;\n  "])));
}, function (_ref9) {
  var bgColor = _ref9.bgColor;
  return bgColor && (0, _styledComponents.css)(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), bgColor);
}, function (_ref10) {
  var isRoundRect = _ref10.isRoundRect;
  return isRoundRect && (0, _styledComponents.css)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n    border-radius: 7.6px;\n  "])));
}, function (_ref11) {
  var isCapsule = _ref11.isCapsule;
  return isCapsule && (0, _styledComponents.css)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n    border-radius: 50px;\n  "])));
}, function (_ref12) {
  var colorText = _ref12.colorText;
  return colorText && (0, _styledComponents.css)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), colorText ? 'black' : 'white');
}, function (_ref13) {
  var borderRibbon = _ref13.borderRibbon;
  return borderRibbon && (0, _styledComponents.css)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "])), borderRibbon ? 'black' : 'white');
});
var SearchIconWrapper = exports.SearchIconWrapper = _styledComponents.default.div(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  background-color: ", ";\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    font-size: 18px;\n  }\n"])), function (props) {
  return props.theme.colors.gray200;
});
var SearchComponentContainer = exports.SearchComponentContainer = _styledComponents.default.div(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 10px;\n  right: 60px;\n  color: ", ";\n  #select-input {\n    color: #FFFFFF !important;\n  }\n  svg {\n    color: #FFFFFF;\n  }\n"])), function (_ref14) {
  var theme = _ref14.theme;
  return theme.colors.white;
});
var SocialList = exports.SocialList = _styledComponents.default.div(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-left: -3px;\n  ", "\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n    margin-right: -3px;\n    margin-left: 0px;\n  "])));
});
var CategorySelectedContainer = exports.CategorySelectedContainer = _styledComponents.default.div(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  display: inline;\n  margin-left: 10px;\n  color: ", ";\n  padding-right: 5px;\n  cursor: pointer;\n  p{\n    margin: 0;\n  }\n  svg {\n    position: relative;\n    top: 2px;\n    margin-right: 3px;\n    width: 14px;\n    height: 14px;\n  }\n"])), function (_ref15) {
  var _theme$colors3;
  var theme = _ref15.theme;
  return theme === null || theme === void 0 || (_theme$colors3 = theme.colors) === null || _theme$colors3 === void 0 ? void 0 : _theme$colors3.primary;
});
var IconWrapper = exports.IconWrapper = _styledComponents.default.a(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n  margin: 0px 3px 10px 3px;\n  border-radius: 3px;\n  border: 0.5px solid ", ";\n  width: 27px;\n  height: 27px;\n  min-width: 27px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s linear;\n\n  ", "\n\n  svg {\n    height: 18px;\n    font-size: 18px;\n    transition: all 0.2s ease-in;\n    color: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n    svg {\n      transform: scale(1.07);\n    }\n  }\n"])), function (props) {
  return props.theme.colors.gray200;
}, function (_ref16) {
  var isSkeleton = _ref16.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n    border: none;\n  "])));
}, function (props) {
  return props.theme.colors.headingColor;
}, function (props) {
  return props.theme.colors.gray200;
});
var BusinessInfoWrapper = exports.BusinessInfoWrapper = _styledComponents.default.div(_templateObject56 || (_templateObject56 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column-reverse;\n  @media (min-width: 768px) {\n    flex-direction: column;\n  }\n"])));
var WrapperFloatingSearch = exports.WrapperFloatingSearch = _styledComponents.default.div(_templateObject57 || (_templateObject57 = _taggedTemplateLiteral(["\n  position: absolute;\n  color: ", ";\n  display: flex;\n  background: rgba(0,0,0,0.2);\n  top: 80px;\n  right: 10px;\n  width: 80%;\n  border-bottom: 1px solid #FFFFFF;\n  #select-input {\n    color: #FFFFFF !important;\n    background: transparent;\n  }\n  svg, span {\n    color: #FFFFFF !important;\n  }\n  @media (min-width: 681px){\n    top: 23px;\n    right: 60px;\n    width: 300px;\n    input {\n      width: 80%;\n    }\n  }\n"])), function (_ref17) {
  var theme = _ref17.theme;
  return theme.colors.white;
});
var BackButton = exports.BackButton = _styledComponents.default.div(_templateObject58 || (_templateObject58 = _taggedTemplateLiteral(["\n  button {\n    display: flex;\n    flex-direction: row;\n    align-items: center;}\n    margin-top: 10px;\n    svg {\n      margin-right: 10px;\n    }\n  }\n"])));