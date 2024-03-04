"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleBusinessOffer = exports.ReadMoreCard = exports.Image = exports.FavoriteListing = exports.FavoriteListWrapper = exports.FavPopupView = exports.ErrorMessage = exports.Container = exports.BusinessLogo = exports.BusinessInfo = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 35px;\n"])));
exports.Container = Container;
var ErrorMessage = _styledComponents.default.span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  padding: 20px;\n  width: 100%;\n  margin: 0px 15px;\n  color: ", ";\n  font-weight: bold;\n"])), function (props) {
  return props.theme.colors.danger500;
});
exports.ErrorMessage = ErrorMessage;
var FavoriteListWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  overflow: auto hidden;\n  width: 100%;\n\n  ", "\n"])), function (_ref) {
  var isLoading = _ref.isLoading;
  return isLoading ? (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    ::-webkit-scrollbar {\n        width: 0px;\n        height: 0px;\n    }\n  "]))) : (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      ::-webkit-scrollbar {\n          width: 6px;\n          height: 6px;\n      }\n  "])));
});
exports.FavoriteListWrapper = FavoriteListWrapper;
var FavoriteListing = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  box-sizing: border-box;\n  align-items: center;\n  #favorite {\n    > div {\n      width: calc(100vw - 40px);\n      min-width: calc(100vw - 40px);\n\n      @media (min-width: 681px) {\n        width: calc(50vw - 40px);\n        min-width: calc(50vw - 40px);\n      }\n      @media (min-width: 993px) {\n        width: calc(33vw - 40px);\n        min-width: calc(33vw - 40px);\n      }\n      @media (min-width: 1200px) {\n        width: calc(25vw - 40px);\n        min-width: calc(25vw - 40px);\n      }\n    }\n  }\n  ", "\n"])), function (_ref2) {
  var isOrder = _ref2.isOrder;
  return isOrder && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    #favorite {\n      > div {\n        @media (min-width: 681px) {\n          min-width: 400px;\n        }\n      }\n    }\n  "])));
});
exports.FavoriteListing = FavoriteListing;
var ReadMoreCard = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  button {\n    height: 44px;\n  }\n"])));
exports.ReadMoreCard = ReadMoreCard;
var FavPopupView = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  text-align: center;\n  h2 {\n    font-size: 16px;\n  }\n  @media(min-width: 720px){\n    h2 {\n      font-size: 20px;\n    }\n  }\n"])));
exports.FavPopupView = FavPopupView;
var SingleBusinessOffer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  button{\n      font-size: 12px;\n    }\n  @media (min-width: 720px){\n    button{\n      font-size: 16px;\n    }\n  }\n"])));
exports.SingleBusinessOffer = SingleBusinessOffer;
var BusinessInfo = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  align-items: center;\n  margin-left: 10px;\n  button{\n    height: 44px;\n  }\n  p{\n    font-size: 12px;\n    width: 50%;\n    text-align: left;\n  }\n  @media(min-width: 720px){\n    p{\n      font-size: 16px;\n      width: 70%;\n    }\n  }\n"])));
exports.BusinessInfo = BusinessInfo;
var Image = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  width: 100%;\n  img{\n    width: 100%;\n    height: auto;\n    border-radius: 16px;\n    aspect-ratio: attr(width) / attr(height)\n  }\n"])));
exports.Image = Image;
var BusinessLogoStyled = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  width: 65px;\n  height: 65px;\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  object-fit: cover;\n  background-position: center;\n  min-height: 65px;\n  border-radius: 7.6px;\n\n  @media (min-width: 481px){\n    min-width: 75px;\n    min-height: 75px;\n    height: 75px;\n    width: 75px;\n    min-height: 75px;\n    ", "\n  }\n"])), function (_ref3) {
  var isCustomerMode = _ref3.isCustomerMode;
  return isCustomerMode && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      width: 100%;\n      height: 100%;\n    "])));
});
var BusinessLogo = function BusinessLogo(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(BusinessLogoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
exports.BusinessLogo = BusinessLogo;