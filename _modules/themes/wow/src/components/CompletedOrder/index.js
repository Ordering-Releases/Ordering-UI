"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CompletedOrder = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _styledComponents = require("styled-components");
var _Modal = require("../../../../../components/Modal");
var _Buttons = require("../../styles/Buttons");
var _ProductItemAccordion = require("../ProductItemAccordion");
var _ReviewOrder = require("../ReviewOrder");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var CompletedOrder = exports.CompletedOrder = function CompletedOrder(props) {
  var _props$beforeElements, _props$beforeComponen, _theme$images, _order$products, _order$customer, _order$paymethod, _order$paymethod2, _props$afterComponent, _props$afterElements;
  var order = props.order,
    getPayIcon = props.getPayIcon,
    onClose = props.onClose;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    openReview = _useState2[0],
    setOpenReview = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isReviewed = _useState4[0],
    setIsReviewed = _useState4[1];
  var getReviewValue = function getReviewValue(review) {
    if (review) {
      return parseInt(((review === null || review === void 0 ? void 0 : review.delivery) + (review === null || review === void 0 ? void 0 : review.package) + (review === null || review === void 0 ? void 0 : review.quality) + (review === null || review === void 0 ? void 0 : review.service)) / 4 / 5 * 100) + '%';
    } else {
      return '0%';
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Header, null, /*#__PURE__*/_react.default.createElement("h1", null, t('YOUR_ORDER_DELIVERED', 'Your order has been delivered Enjoy it!')), /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.delivered,
    alt: "delivered"
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderContent, null, (order === null || order === void 0 || (_order$products = order.products) === null || _order$products === void 0 ? void 0 : _order$products.length) && (order === null || order === void 0 ? void 0 : order.products.map(function (product) {
    return /*#__PURE__*/_react.default.createElement(_ProductItemAccordion.ProductItemAccordion, {
      key: product.id,
      product: product,
      isOrderDetail: true
    });
  })), /*#__PURE__*/_react.default.createElement(_styles.OrderDeliveryTimeContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('ORDER', 'Order'), " #", order === null || order === void 0 ? void 0 : order.id), /*#__PURE__*/_react.default.createElement("p", {
    className: "date"
  }, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
    utc: false
  }))), !(order !== null && order !== void 0 && order.review || isReviewed) && /*#__PURE__*/_react.default.createElement(_styles.ReviewContainer, {
    onClick: function onClick() {
      return !(order !== null && order !== void 0 && order.review) && setOpenReview(true);
    }
  }, /*#__PURE__*/_react.default.createElement("p", null, t('REVIEW_ORDER', 'Review your Order')), /*#__PURE__*/_react.default.createElement(_styles.StarRating, null, /*#__PURE__*/_react.default.createElement(_styles.StarRatingUpper, {
    style: {
      width: getReviewValue(order === null || order === void 0 ? void 0 : order.review)
    }
  }, /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605")), /*#__PURE__*/_react.default.createElement(_styles.StarRatingLower, null, /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605"), /*#__PURE__*/_react.default.createElement("span", null, "\u2605")))), /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, /*#__PURE__*/_react.default.createElement("h2", null, t('DELIVERY_TO', 'Delivery to')), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.address)), /*#__PURE__*/_react.default.createElement(_styles.OrderPaymentMethod, null, /*#__PURE__*/_react.default.createElement("h2", null, t('PAYMENT_METHODS', 'Payment Methods')), /*#__PURE__*/_react.default.createElement("div", null, getPayIcon(order === null || order === void 0 || (_order$paymethod = order.paymethod) === null || _order$paymethod === void 0 ? void 0 : _order$paymethod.id), /*#__PURE__*/_react.default.createElement("span", null, order === null || order === void 0 || (_order$paymethod2 = order.paymethod) === null || _order$paymethod2 === void 0 ? void 0 : _order$paymethod2.name))), /*#__PURE__*/_react.default.createElement(_styles.ActionContainer, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    onClick: function onClick() {
      return onClose();
    }
  }, t('COMPLETE', 'Complete')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "primary",
    outline: true
  }, t('ANY_PROBLEMS', 'Did you have any problems?')))), openReview && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openReview,
    onClose: function onClose() {
      return setOpenReview(false);
    },
    padding: "0"
  }, /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
    order: order,
    closeReviewOrder: function closeReviewOrder() {
      return setOpenReview(false);
    },
    setIsReviewed: setIsReviewed
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};