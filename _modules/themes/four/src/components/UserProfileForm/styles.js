"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperForm = exports.UserProfileContainer = exports.UserImage = exports.UserData = exports.UploadImageIcon = exports.SkeletonWrapper = exports.SideForm = exports.SavedPlaces = exports.ProfileContent = exports.Image = exports.ChangeButton = exports.Camera = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var UserProfileContainer = exports.UserProfileContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n  overflow-x: hidden;\n  margin: 25px auto ", ";\n  background-color: ", ";\n  box-shadow: 0px 2px 4px #00000014;\n  padding: 10px;\n  box-sizing: border-box;\n\n  @media (min-width: 768px) {\n    align-items: flex-start;\n    flex-direction: row;\n  }\n\n  @media (min-width: 992px) {\n    width: 90%;\n    padding: 20px;\n  }\n"])), function (props) {
  return props.mbottom ? "".concat(props.mbottom, "px") : 'auto';
}, function (props) {
  var _props$theme$colors;
  return (_props$theme$colors = props.theme.colors) === null || _props$theme$colors === void 0 ? void 0 : _props$theme$colors.backgroundPage;
});
var ProfileContent = exports.ProfileContent = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: 1;\n"])));
var UserImage = exports.UserImage = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n\n  @media (min-width: 768px){\n    width: auto;\n    align-items: flex-end;\n  }\n"])));
var Image = exports.Image = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  width: 170px;\n  height: 170px;\n  border: 2px solid ", ";\n  border-radius: 100%;\n  overflow: hidden;\n  padding: 20px;\n  background: ", ";\n  cursor: -webkit-grab;\n  cursor: grab;\n\n  img,\n  div {\n    width: 100%;\n    border-radius: 50%;\n    height: 100%;\n    border: none;\n    overflow: hidden;\n  };\n\n  img{\n    object-fit: cover;\n  }\n\n  @media (min-width: 480px){\n    width: 200px;\n    height: 200px;\n  }\n\n  @media (min-width: 768px){\n    width: 170px;\n    height: 170px;\n  }\n"])), function (props) {
  return props.theme.colors.primary;
}, function (_ref) {
  var isImage = _ref.isImage,
    theme = _ref.theme;
  return isImage ? '#FFF' : "".concat(theme.colors.backgroundPage);
});
var SideForm = exports.SideForm = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n\n  @media (min-width: 768px) {\n    width: 70%;\n    display: flex;\n    align-items: center;\n    margin: 30px 0px 0px 30px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      margin: auto 30px auto 0px;\n    "])));
});
var Camera = exports.Camera = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  width:212px;\n  > * {\n    margin-top: 10px;\n    width: 30px;\n    height: 30px;\n  }\n\n  @media (min-width: 480px){\n    width:242px;\n  }\n\n  @media (min-width: 768px){\n    width:212px;\n  }\n"])));
var UserData = exports.UserData = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  width: 100%;\n\n  h1 {\n    font-size: 24px\n  }\n\n  > * {\n    margin: 5px 0;\n    width: 75%;\n  }\n\n  table {\n    tbody {\n      td {\n        color: ", ";\n      }\n    }\n  }\n\n  > button {\n    width: auto;\n    background: ", ";\n  }\n\n  @media (min-width: 768px){\n    align-items: flex-start;\n    text-align: left;\n    ", "\n  }\n"])), function (props) {
  var _props$theme$colors2;
  return (_props$theme$colors2 = props.theme.colors) === null || _props$theme$colors2 === void 0 ? void 0 : _props$theme$colors2.grayColor;
}, function (props) {
  return props.theme.colors.backgroundPage;
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n     text-align: right;\n    "])));
});
var SavedPlaces = exports.SavedPlaces = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: center;\n  margin: 0 auto;\n  margin-top: 40px;\n  margin-bottom: 20px;\n  background-color: ", ";\n  box-shadow: 0px 2px 4px #00000014;\n  padding: 10px;\n  box-sizing: border-box;\n  h1{\n    font-size: 24px;\n    text-align: left;\n    ", "\n  }\n\n  > div{\n    display: flex;\n    flex-direction: column-reverse;\n    align-items: center;\n  }\n\n  button{\n    width: 100%;\n    align-self: center;\n  }\n\n  @media (min-width: 768px){\n    margin-top: 40px;\n    ul{\n      width: 100%;\n    }\n    button {\n      width: 65%;\n    }\n  }\n  \n  @media (min-width: 992px) {\n    width: 90%;\n    padding: 20px;\n  }\n"])), function (props) {
  var _props$theme$colors3;
  return (_props$theme$colors3 = props.theme.colors) === null || _props$theme$colors3 === void 0 ? void 0 : _props$theme$colors3.backgroundPage;
}, function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    text-align: right;\n    "])));
});
var UploadImageIcon = exports.UploadImageIcon = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n\n  span {\n    margin: 0;\n  }\n\n  svg {\n    width: 45px;\n    height: 45px;\n  }\n"])));
var SkeletonWrapper = exports.SkeletonWrapper = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  span{\n    height: 100%;\n    position: relative;\n    top: -2.5px;\n  }\n"])));
var WrapperForm = exports.WrapperForm = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  padding: 20px;\n\n  h1 {\n    margin: 0 0 20px 0;\n    font-size: 28px;\n  }\n"])));
var ChangeButton = exports.ChangeButton = _styledComponents.default.a(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  width: fit-content;\n  font-weight: 600;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.primary;
});