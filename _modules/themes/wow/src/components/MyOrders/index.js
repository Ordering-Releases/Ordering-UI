"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MyOrders = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _orderingComponentsExternal = require("ordering-components-external");
var _BiArrowBack = _interopRequireDefault(require("@meronex/icons/bi/BiArrowBack"));
var _OrdersOptionTabs = require("../OrdersOptionTabs");
var _OrdersOption = require("../OrdersOption");
var _OrderDetails = require("../OrderDetails");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MyOrders = exports.MyOrders = function MyOrders(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var orderId = props.orderId,
    onOrderDetailsRedirect = props.onOrderDetailsRedirect;
  var history = (0, _reactRouterDom.useHistory)();
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    ordersTotal = _useState2[0],
    setOrdersTotal = _useState2[1];
  var _useState3 = (0, _react.useState)('activeOrders'),
    _useState4 = _slicedToArray(_useState3, 2),
    ordersOption = _useState4[0],
    setOrdersOption = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    orderDetailOpen = _useState6[0],
    setOrderDetailOpen = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    orderDetailId = _useState8[0],
    setOrderDetailId = _useState8[1];
  var handleOrdersOption = function handleOrdersOption(option) {
    setOrdersOption(option);
  };
  var handleOrderDetails = function handleOrderDetails(orderId) {
    onOrderDetailsRedirect({
      orderId: orderId
    });
    setOrderDetailOpen(true);
    setOrderDetailId(orderId);
  };
  var handleCloseOrderDetails = function handleCloseOrderDetails() {
    onOrderDetailsRedirect({});
    setOrderDetailOpen(false);
  };
  (0, _react.useEffect)(function () {
    if (!orderId) return;
    handleOrderDetails(orderId);
  }, [orderId]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.BackButton, {
    onClick: function onClick() {
      return history.goBack();
    }
  }, /*#__PURE__*/_react.default.createElement(_BiArrowBack.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('BACK', 'Back'))), /*#__PURE__*/_react.default.createElement(_styles.InnerContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LeftContent, null, /*#__PURE__*/_react.default.createElement(_OrdersOptionTabs.OrdersOptionTabs, {
    ordersTotal: ordersTotal,
    ordersOption: ordersOption,
    handleOrdersOption: handleOrdersOption,
    onOrderDetailsRedirect: onOrderDetailsRedirect,
    setOrderDetailOpen: setOrderDetailOpen
  })), /*#__PURE__*/_react.default.createElement(_styles.RightContent, null, !orderDetailOpen ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ordersOption === 'activeOrders' && /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, _extends({}, props, {
    activeOrders: true,
    handleOrdersTotal: setOrdersTotal,
    handleOrderDetails: handleOrderDetails
  })), ordersOption === 'previousOrders' && /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, _extends({}, props, {
    previousOrders: true,
    handleOrdersTotal: setOrdersTotal,
    handleOrderDetails: handleOrderDetails
  })), ordersOption === 'preOrders' && /*#__PURE__*/_react.default.createElement(_OrdersOption.OrdersOption, _extends({}, props, {
    preOrders: true,
    handleOrdersTotal: setOrdersTotal,
    handleOrderDetails: handleOrderDetails
  }))) : /*#__PURE__*/_react.default.createElement(_OrderDetails.OrderDetails, {
    orderId: orderDetailId,
    onClose: function onClose() {
      return handleCloseOrderDetails();
    },
    handleOrdersOption: setOrdersOption
  })))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};