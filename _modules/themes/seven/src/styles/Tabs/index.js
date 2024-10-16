"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabs = exports.Tab = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Tabs = exports.Tabs = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;  \n  ", "\n\n  ", "\n\n  ", "\n"])), function (_ref) {
  var variant = _ref.variant;
  return variant === 'primary' && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  });
}, function (_ref2) {
  var borderBottom = _ref2.borderBottom;
  return borderBottom && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border-bottom: thin solid ", ";\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
}, function (_ref3) {
  var isVerticalList = _ref3.isVerticalList;
  return isVerticalList && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    flex-direction: column;\n    width: 100%;\n    height: 100%;\n    padding: 0 15px;\n    box-sizing: border-box;\n    border-bottom: 2px solid ", ";\n    margin-bottom: 25px;\n    @media (min-width: 768px) {\n      justify-content: flex-start;\n      padding-right: 0;\n      border-bottom: none;\n    }\n    @media (min-width: 1024px) {\n      padding-left: 10%;\n    }\n  "])), function (props) {
    return props.theme.colors.borderColor;
  });
});
var Tab = exports.Tab = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 10px;\n  cursor: pointer;\n  align-items: left;\n  ", "\n  ", "\n  &:first-child {\n    padding-left: 0;\n    ", "\n  }\n\n  ", "\n\n  ", "\n"])), function (props) {
  var _props$theme;
  return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n    align-items: right;\n "])));
}, function (_ref4) {
  var active = _ref4.active;
  return !active && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n    color: #000000;\n  "])));
}, function (props) {
  var _props$theme2;
  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      padding-right: 0;\n      padding-left: 10px;\n    "])));
}, function (_ref5) {
  var borderBottom = _ref5.borderBottom;
  return borderBottom && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n    ", "    \n  "])), function (_ref6) {
    var active = _ref6.active;
    return active && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      border-bottom: 1px solid ", ";\n    "])), function (props) {
      return props.theme.colors.primary;
    });
  });
}, function (_ref7) {
  var isVerticalList = _ref7.isVerticalList;
  return isVerticalList && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n    padding: 0px;\n    &:last-child {\n      border-bottom: none;\n      @media (min-width: 768px) {\n        border-bottom: 1px solid ", ";\n        ", "\n      }\n    }\n\n    svg {\n      display: none;\n    }\n\n    &.active{\n      .accordion {\n        color: ", ";\n        font-weight: 600;\n      }\n\n      .accordion-content {\n        max-height: fit-content;\n      }\n    }\n\n    @media (min-width: 768px) {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n\n      &.active {\n        .accordion {\n          border-right: none;\n          border-left: 5px solid red;\n        }\n        svg {\n          display: inline-block;\n          position: absolute;\n          top: -1px;\n          right: -12px;\n        }\n      }\n    }\n  "])), function (props) {
    return props.theme.colors.borderColor;
  }, function (_ref8) {
    var active = _ref8.active;
    return active && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n          border-bottom: 1px solid ", ";\n        "])), function (props) {
      return props.theme.colors.primary;
    });
  }, function (props) {
    return props.theme.colors.primary;
  });
});