"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperUserDetails = exports.WrapperPlaceOrderButton = exports.WarningText = exports.WarningMessage = exports.UserDetailsContainer = exports.SectionTitle = exports.SectionInfo = exports.SectionHeader = exports.RightPanel = exports.PaymentMethodContainer = exports.PanelTop = exports.PanelBottom = exports.PageTitle = exports.NotFoundImage = exports.LeftPanel = exports.Layout = exports.Hr = exports.DriverTipContainer = exports.Container = exports.CartsList = exports.CartContainer = exports.BusinessDetailsContainer = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n"])));
var WrapperUserDetails = exports.WrapperUserDetails = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n"])));
var UserDetailsContainer = exports.UserDetailsContainer = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  margin: 30px 0px 20px;\n  flex-wrap: wrap;\n"])));
var BusinessDetailsContainer = exports.BusinessDetailsContainer = (0, _styledComponents.default)(UserDetailsContainer)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  div {\n    h1 {\n      text-transform: capitalize;\n      margin: 0px;\n      font-size: 24px;\n    }\n  }\n"])));
var PaymentMethodContainer = exports.PaymentMethodContainer = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  @media (min-width: 1024px) {\n    margin-bottom: 242px;\n  }\n"])));
var DriverTipContainer = exports.DriverTipContainer = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  \n"])));
var CartContainer = exports.CartContainer = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n  h1 {\n    margin: 20px 0px;\n  }\n"])));
var WrapperPlaceOrderButton = exports.WrapperPlaceOrderButton = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 40px 0px 10px;\n  padding: 0;\n  box-sizing: border-box;\n  button {\n    width: 100%;\n    padding: 5px 20px;\n    cursor: pointer;\n\n    &:disabled {\n      opacity: 0.5;\n      cursor: not-allowed;\n    }\n  }\n"])));
var WarningMessage = exports.WarningMessage = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: fit-content;\n  max-height: fit-content;\n  min-height: 150px;\n  background-color: #F2BB40;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n  border-radius: 10px;\n  position: relative;\n\n  svg {\n    position: absolute;\n    font-size: 30px;\n    top: 0;\n    left: 0;\n    margin: 11px;\n    ", "\n  }\n\n  h1 {\n    font-size: 20px;\n    margin: 0px 60px;\n    text-align: center;\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n        right: 0;\n        left: initial;\n    "])));
});
var NotFoundImage = exports.NotFoundImage = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  max-width: 300px;\n\n  img {\n    width: 300px;\n  }\n"])));
var CartsList = exports.CartsList = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin: auto;\n\n  @media (min-width: 381px) {\n    width: 80%;\n  }\n"])));
var WarningText = exports.WarningText = _styledComponents.default.p(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  margin: 10px auto;\n  text-align: center;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});
var Layout = exports.Layout = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n\n  @media (min-width: 1024px) {\n    flex-direction: row;\n  }\n"])));
var LeftPanel = exports.LeftPanel = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  width: 100%;\n  @media (min-width: 1024px) {\n    width: 50%;\n  }\n  @media (min-width: 1200px) {\n    height: 100vh;\n    overflow-y: scroll;\n  }\n"])));
var RightPanel = exports.RightPanel = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  width: 100%;\n  background: ", ";\n  position: relative;\n\n  @media (min-width: 1024px) {\n    width: 50%;\n  }\n  @media (min-width: 1200px) {\n    height: 100vh;\n    overflow-y: scroll;\n  }\n"])), function (props) {
  return props.theme.colors.secundaryBackground;
});
var PanelTop = exports.PanelTop = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  padding: 6%;\n"])));
var PanelBottom = exports.PanelBottom = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  padding: 6%;\n"])));
var PageTitle = exports.PageTitle = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 34px;\n  color: #000000;\n  text-transform: uppercase;\n  margin-bottom: 30px;\n"])));
var SectionHeader = exports.SectionHeader = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n\n  span {\n    color: ", ";\n    font-weight: bold;\n    font-size: 13px;\n    line-height: 15px;\n    text-transform: capitalize;\n    padding-bottom: 3px;\n    border-bottom: 1px solid ", ";\n    cursor: pointer;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.colors.primary;
});
var SectionTitle = exports.SectionTitle = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  margin: 0px 10px 0px 0px;\n  font-size: 20px;\n  line-height: 30px;\n  color: #000000;\n  font-weight: bold;\n  text-transform: uppercase;\n"])));
var SectionInfo = exports.SectionInfo = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  p {\n    font-size: 14px;\n    line-height: 24px;\n    margin: 0;\n    color: #212629;\n  }\n"])));
var Hr = exports.Hr = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  width: 100%;\n  height: ", ";\n  background: ", ";\n"])), function (_ref) {
  var height = _ref.height;
  return height ? "".concat(height, "px") : '10px';
}, function (_ref2) {
  var color = _ref2.color;
  return color ? "".concat(color) : '#DDDDDD';
});