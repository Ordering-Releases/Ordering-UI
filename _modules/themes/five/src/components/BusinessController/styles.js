"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperBusinessLogo = exports.WrapperBusinessCard = exports.ScheduleContainer = exports.RibbonBox = exports.Medadata = exports.InfoLength = exports.InfoDescription = exports.FavoriteWrapper = exports.ContainerCard = exports.ClosedContainer = exports.Categories = exports.CardOverlay = exports.CallCenterInformationBullet = exports.CallCenterInformation = exports.BusinessTags = exports.BusinessStarInfo = exports.BusinessName = exports.BusinessLogoWrapper = exports.BusinessLogo = exports.BusinessInfoItem = exports.BusinessInfo = exports.BusinessHero = exports.BusinessHeaderClosedContainer = exports.BusinessHeader = exports.BusinessContent = exports.BusinessAddress = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49, _templateObject50, _templateObject51, _templateObject52, _templateObject53, _templateObject54, _templateObject55;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var ContainerCard = exports.ContainerCard = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  border: 1px solid #E9ECEF;\n  box-sizing: border-box;\n  border-radius: 7.6px;\n  max-height: 300px;\n  height: ", ";\n  border-radius: 10px;\n  margin: 30px 20px;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n"])), function (_ref) {
  var isSkeleton = _ref.isSkeleton;
  return isSkeleton ? 'auto' : '320px';
}, function (_ref2) {
  var isCustomerMode = _ref2.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    max-height: 400px;\n    height: ", ";\n  "])), function (_ref3) {
    var isSkeleton = _ref3.isSkeleton;
    return isSkeleton ? 'auto' : '400px';
  });
}, function (_ref4) {
  var minWidthEnabled = _ref4.minWidthEnabled;
  return minWidthEnabled && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    min-width: calc(65% - 40px);\n  "])));
}, function (_ref5) {
  var typeButton = _ref5.typeButton;
  return typeButton && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    border: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    button {\n      padding: 10px 30px;\n    }\n  "])));
}, function (_ref6) {
  var firstCard = _ref6.firstCard;
  return firstCard && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n    margin-left: 0;\n  "])));
}, function (_ref7) {
  var disabled = _ref7.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    cursor: not-allowed;\n  "])));
}, function (_ref8) {
  var businessRows = _ref8.businessRows;
  return (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    width: calc(100% - 40px);\n\n    @media (min-width: 481px) {\n      max-height: ", ";\n    }\n\n    @media (min-width: 681px) {\n      width: calc(50% - 40px);\n    }\n\n    @media (min-width: 993px) {\n      width: calc(33% - 40px);\n    }\n\n    @media (min-width: 1200px) {\n      width: ", ";\n    }\n  "])), function (_ref9) {
    var isCustomerMode = _ref9.isCustomerMode;
    return isCustomerMode ? '360px' : '320px';
  }, function () {
    return businessRows === 4 ? 'calc(25% - 40px)' : businessRows === 3 ? 'calc(33% - 40px)' : 'calc(50% - 40px)';
  });
});
var WrapperBusinessCard = exports.WrapperBusinessCard = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  height: 100%;\n  position: relative;\n  cursor: ", ";\n  ", "\n"])), function (_ref10) {
  var isSkeleton = _ref10.isSkeleton;
  return isSkeleton ? 'default' : 'pointer';
}, function (_ref11) {
  var disabled = _ref11.disabled;
  return disabled && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    pointer-events: none;\n    cursor: not-allowed;\n  "])));
});
var BusinessHero = exports.BusinessHero = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n\n  > span {\n    display: flex;\n  }\n"])));
var BusinessHeaderStyled = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 145px;\n  justify-content: center;\n  align-items: center;\n  border-radius: 7.6px 7.6px 0px 0px;\n\n  h1, h2 {\n    color: #FFF;\n    opacity: 0.7;\n  }\n\n  .closed, .disabled {\n    text-transform: uppercase;\n    font-weight: 600;\n    font-size: 22px;\n    line-height: 35px;\n    opacity: 1;\n    position: relative;\n    z-index: 2;\n  }\n\n  .disabled {\n    font-size: 16px;\n    text-align: center;\n\n  }\n\n  @media (min-width: 481px) {\n    min-height: 165px;\n  }\n"])));
var BusinessHeader = exports.BusinessHeader = function BusinessHeader(props) {
  var style = {};
  if (props.bgimage && !props.isClosed) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  } else {
    style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessHeaderStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var BusinessHeaderClosedContainer = exports.BusinessHeaderClosedContainer = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n\n    h1, h2 {\n      margin: 0;\n    }\n"])));
var BusinessTags = exports.BusinessTags = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  position: absolute;\n  justify-content: space-between;\n  align-items: center;\n  top: 0;\n  margin: 15px;\n  width: calc(100% - 35px);\n\n  span.crown {\n    background-color: rgba(0, 0, 0, 0.5);\n    font-size: 20px;\n    display: flex;\n    align-items: center;\n    color: #FFC917;\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n\n  span {\n    font-size: 11px;\n    padding: 3px 8px;\n    color: #748194;\n    background: #DEE2E6;\n    border-radius: 50px;\n    margin-right: 10px;\n    ", "\n    &:last-child {\n      ", "\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      margin-left: 10px;\n      margin-right: 0;\n    "])));
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) !== null && _props$theme2 !== void 0 && _props$theme2.rtl ? (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n        margin-left: 0px;\n    "]))) : (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n    "])));
});
var BusinessContent = exports.BusinessContent = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-height: 135px;\n  padding: 0 20px 20px 20px;\n  ", "\n"])), function (_ref12) {
  var isCustomerMode = _ref12.isCustomerMode;
  return !isCustomerMode && (0, _styledComponents.css)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n    height: calc(100% - 145px);\n\n    @media (min-width: 481px) {\n      height: calc(100% - 165px);\n    }\n  "])));
});
var WrapperBusinessLogo = exports.WrapperBusinessLogo = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  align-self: center;\n  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  border-radius: 7.6px;\n\n  ", "\n\n  ", "\n"])), function (_ref13) {
  var isCustomerMode = _ref13.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    width: 65px;\n    height: 65px;\n    min-height: 65px;\n    min-width: 65px;\n  "])));
}, function (_ref14) {
  var isSkeleton = _ref14.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    height: auto;\n    width: auto;\n    > span {\n      display: flex;\n    }\n    @media (min-width: 481px){\n      ", "\n    }\n  "])), function (_ref15) {
    var isCustomerMode = _ref15.isCustomerMode;
    return isCustomerMode && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n        min-width: 75px;\n        min-height: 75px;\n        height: 75px;\n        width: 75px;\n      "])));
  });
});
var BusinessLogoStyled = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 65px;\n  height: 65px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 65px;\n  border-radius: 7.6px;\n\n  @media (min-width: 481px){\n    min-width: 75px;\n    min-height: 75px;\n    height: 75px;\n    width: 75px;\n    min-height: 75px;\n    ", "\n  }\n"])), function (_ref16) {
  var isCustomerMode = _ref16.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n      width: 100%;\n      height: 100%;\n    "])));
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
var BusinessInfo = exports.BusinessInfo = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  ", "\n"])), function (_ref17) {
  var isCustomerMode = _ref17.isCustomerMode;
  return isCustomerMode ? (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    width: 90%;\n  "]))) : (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n    width: 100%;\n  "])));
});
var BusinessInfoItem = exports.BusinessInfoItem = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font-size: 12px;\n\n  div {\n    display: flex;\n    p {\n      margin-right: 5px;\n      ", "\n      text-transform: capitalize;\n      display: flex;\n      align-items: center;\n      margin: 0px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n    p.bold {\n      font-weight: bold;\n    }\n  }\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n        margin-left: 5px;\n        margin-right: 0;\n    "])));
});
var BusinessName = exports.BusinessName = _styledComponents.default.h5(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-weight: 500;\n  margin-block-start: 0;\n  margin-block-end: 0;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});
var Categories = exports.Categories = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  font-weight: 300;\n  color: #6C6C6C;\n\n  @media (min-width: 481px) {\n    font-size: 16px;\n  }\n"])));
var Medadata = exports.Medadata = _styledComponents.default.div(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  margin-top: 5px;\n  display: flex;\n  font-weight: 300;\n  font-size: 12px;\n  color: #909BA9;\n  flex-wrap: wrap;\n\n  ", "\n  ", "\n  p {\n    color: #909BA9;\n    svg {\n      font-size: 7px;\n      min-width: 6px;\n      margin: 0 3px;\n    }\n\n    span {\n      margin-right: 10px;\n      ", "\n    }\n  }\n\n  @media (min-width: 481px) {\n    font-size: 14px;\n  }\n"])), function (_ref18) {
  var isCustomerMode = _ref18.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n    > div {\n      flex-direction: column;\n    }\n  "])));
}, function (_ref19) {
  var isSkeleton = _ref19.isSkeleton;
  return isSkeleton && (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n  "])));
}, function (props) {
  var _props$theme4;
  return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n        margin-left: 10px;\n        margin-right: 0;\n      "])));
});
var CallCenterInformation = exports.CallCenterInformation = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  margin-right: 10px;\n  margin-bottom: 10px;\n  div{\n    justify-content: space-evenly;\n  }\n"])));
var CallCenterInformationBullet = exports.CallCenterInformationBullet = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  display: flex;\n  padding: 2px;\n  margin-bottom: 2px;\n  border-radius: 16px;\n  background: ", ";\n  width: 50px;\n  color: #fff;\n  svg{\n    font-size: 18px;\n  }\n"])), function (_ref20) {
  var bgcolor = _ref20.bgcolor;
  return bgcolor;
});
var BusinessLogoWrapper = exports.BusinessLogoWrapper = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -20px;\n  margin-bottom: 10px;\n"])));
var BusinessStarInfo = exports.BusinessStarInfo = _styledComponents.default.div(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n\n  .reviews {\n    display: flex;\n    align-items: center;\n    svg {\n      margin-right: 3px;\n      font-size: 22px;\n      color: #414954;\n      ", "\n    }\n    span {\n      font-size: 15px;\n      color: #414954;\n    }\n  }\n"])), function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n        margin-left: 3px;\n        margin-right: 0;\n    "])));
});
var CardOverlay = exports.CardOverlay = _styledComponents.default.div(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 7.6px;\n  z-index: 1;\n"])));
var InfoLength = exports.InfoLength = _styledComponents.default.p(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 600;\n"])));
var InfoDescription = exports.InfoDescription = _styledComponents.default.p(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n  font-size: 12px;\n"])));
var RibbonBox = exports.RibbonBox = _styledComponents.default.div(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  position: absolute;\n  padding: 2px 8px;\n  box-sizing: border-box;\n  z-index: 10;\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 13px;\n  top: -4px;\n  right: -3px;\n  background-color: ", ";\n  max-width: 180px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 1;\n  overflow: hidden;\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", "\n"])), function (props) {
  return props.theme.colors.colorTextSignForm;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n    left: -3px;\n    right: initial;\n  "])));
}, function (_ref21) {
  var bgColor = _ref21.bgColor;
  return bgColor && (0, _styledComponents.css)(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n    background-color: ", ";\n  "])), bgColor);
}, function (_ref22) {
  var isRoundRect = _ref22.isRoundRect;
  return isRoundRect && (0, _styledComponents.css)(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n    border-radius: 7.6px;\n  "])));
}, function (_ref23) {
  var isCapsule = _ref23.isCapsule;
  return isCapsule && (0, _styledComponents.css)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n    border-radius: 50px;\n  "])));
}, function (_ref24) {
  var colorText = _ref24.colorText;
  return colorText && (0, _styledComponents.css)(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), colorText ? 'black' : 'white');
}, function (_ref25) {
  var borderRibbon = _ref25.borderRibbon;
  return borderRibbon && (0, _styledComponents.css)(_templateObject50 || (_templateObject50 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n  "])), borderRibbon ? 'black' : 'white');
});
var FavoriteWrapper = exports.FavoriteWrapper = _styledComponents.default.div(_templateObject51 || (_templateObject51 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  margin-left: 15px;\n  ", "\n\n  svg {\n    font-size: 16px;\n    color: ", ";\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject52 || (_templateObject52 = _taggedTemplateLiteral(["\n    margin-right: 15px;\n    margin-left: 0px;\n  "])));
}, function (props) {
  return props.theme.colors.danger500;
});
var ScheduleContainer = exports.ScheduleContainer = _styledComponents.default.div(_templateObject53 || (_templateObject53 = _taggedTemplateLiteral(["\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: #4472C4;\n  border: 2px solid #000;\n  div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  p {\n    margin: 0;\n    color: #fff;\n    font-size: 12px;\n  }\n"])));
var ClosedContainer = exports.ClosedContainer = _styledComponents.default.div(_templateObject54 || (_templateObject54 = _taggedTemplateLiteral(["\n  text-align: center;\n  width: 100%;\n  line-break: anywhere;\n"])));
var BusinessAddress = exports.BusinessAddress = _styledComponents.default.h6(_templateObject55 || (_templateObject55 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin-block-start: 0;\n  margin-block-end: 0;\n  font-weight: 400;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.darkTextColor;
});