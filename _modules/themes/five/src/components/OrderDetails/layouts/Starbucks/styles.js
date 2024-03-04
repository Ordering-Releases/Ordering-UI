"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatusBarContainer = exports.ReviewedText = exports.OrderTitle = exports.MapWrapper = exports.Map = exports.Icon = exports.DelayedTime = exports.Container = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 40px;\n\n  p.order-status {\n    text-align: center;\n    color: ", ";\n    font-size: 1.3rem;\n    margin: 0;\n    padding: 0;\n  }\n"])), function (props) {
  return props.theme.colors.primary || 'black';
});
exports.Container = Container;
var OrderTitle = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n\n  div.left {\n    grid-column: 1;\n  }\n  div.center {\n    grid-column: 2;\n  }\n\n  h1 {\n    font-size: 1.2rem;\n    font-weight: normal;\n    padding: 0;\n    margin: 0;\n  }\n\n  p {\n    justify-content: left;\n\n    a {\n      text-decoration: underline !important;\n      color: #0000EE !important;\n    }\n  }\n"])));
exports.OrderTitle = OrderTitle;
var StatusBarContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  height: 12px;\n  margin: 18px 0px 8px;\n  background: ", ";\n  ", "\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.primary, " ").concat(props.percentage, "%, ").concat(props.theme.colors.disabled, " ").concat(props.percentage, "%)");
}, function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    background: linear-gradient(to left, ", " ", "%, ", " ", "%);\n  "])), props.theme.colors.primary, props.percentage, props.theme.colors.disabled, props.percentage);
});
exports.StatusBarContainer = StatusBarContainer;
var Icon = _styledComponents.default.span(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 50%;\n  font-size: 35px;\n  transform: translateY(-50%);\n  color: #FFFFFF;\n  left: calc(", "% - 25px);\n\n  img {\n    width: 50px;\n    height: 50px;\n    object-fit: contain;\n  }\n\n  width: 50px;\n  height: 50px;\n  background-color: ", ";\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])), function (props) {
  return props.position;
}, function (props) {
  return props.bgColor || props.theme.colors.disabled;
});
exports.Icon = Icon;
var DelayedTime = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n\n  div.ring1 {\n    border: 6px solid ", ";\n    padding: 5px;\n    border-radius: 50%;\n  }\n  div.ring2 {\n    border: 9px solid ", ";\n    padding: 5px;\n    border-radius: 50%;\n  }\n  div.time {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: ", ";\n    padding: 10px;\n    border-radius: 50%;\n    width: 100px;\n    height: 100px;\n    color: #FFF;\n    text-align: center;\n\n    p {\n      margin: 0;\n      padding: 0;\n      font-size: 14px;\n    }\n\n    span {\n      font-size: 18px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
exports.DelayedTime = DelayedTime;
var ReviewedText = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  border-radius: 7.6px;\n  padding: 20px;\n  box-shadow: 0px 4px 10px 0px #0000001F;\n  margin: 55px 0 30px;\n\n  p {\n    font-weight: bold;\n    text-align: center;\n  }\n"])));
exports.ReviewedText = ReviewedText;
var MapWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 30px;\n"])));
exports.MapWrapper = MapWrapper;
var Map = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n  width: 100%;\n  > div {\n    position: relative !important;\n    width: 100% !important;\n    height: 100% !important;\n  }\n\n  img {\n    object-fit: cover;\n  }\n"])));
exports.Map = Map;