"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VerticalOrdersLayout = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _styledComponents = require("styled-components");
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
var _styles2 = require("../OrdersOption/styles");
var _Modal = require("../../../../../components/Modal");
var _ReviewOrder = require("../../../../../components/ReviewOrder");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var VerticalOrdersLayout = exports.VerticalOrdersLayout = function VerticalOrdersLayout(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var orders = props.orders,
    pagination = props.pagination,
    onRedirectPage = props.onRedirectPage,
    loadMoreOrders = props.loadMoreOrders,
    getOrderStatus = props.getOrderStatus,
    handleReorder = props.handleReorder,
    reorderLoading = props.reorderLoading,
    orderID = props.orderID;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    isReviewedOrderIds = _useState2[0],
    setIsReviewedOrderIds = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    orderSelected = _useState4[0],
    setOrderSelected = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    openModal = _useState6[0],
    setOpenModal = _useState6[1];
  var handleOpenReview = function handleOpenReview(order) {
    setOrderSelected(order);
    setOpenModal(true);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles2.OrdersContainer, {
    id: "orders-container"
  }, orders.map(function (order) {
    var _order$business, _theme$images, _order$business2, _theme$images2, _order$business3, _getOrderStatus;
    return /*#__PURE__*/_react.default.createElement(_styles.SingleCard, {
      key: order.id,
      id: "order-card"
    }, /*#__PURE__*/_react.default.createElement(_styles.OrderPastContent, null, (((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.header) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo)) && /*#__PURE__*/_react.default.createElement(_styles.PastHeaderImage, null, /*#__PURE__*/_react.default.createElement("img", {
      src: ((_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.header) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo),
      alt: "business-logo",
      loading: "lazy"
    })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformation, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperBusinessTitle, null, (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
      utc: false
    })), /*#__PURE__*/_react.default.createElement("p", {
      name: "view_order",
      onClick: function onClick() {
        return onRedirectPage({
          page: 'order_detail',
          params: {
            orderId: order.uuid
          }
        });
      }
    }, t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View order')))), /*#__PURE__*/_react.default.createElement(_styles.Reorder, null, /*#__PURE__*/_react.default.createElement("p", null, (_getOrderStatus = getOrderStatus(order.status)) === null || _getOrderStatus === void 0 ? void 0 : _getOrderStatus.value), (parseInt(order === null || order === void 0 ? void 0 : order.status) === 1 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 2 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 5 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 6 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 10 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 11 || parseInt(order === null || order === void 0 ? void 0 : order.status) === 12) && !order.review && !isReviewedOrderIds.includes(order === null || order === void 0 ? void 0 : order.id) && /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      rectangle: true,
      className: "review",
      onClick: function onClick() {
        return handleOpenReview(order);
      }
    }, t('REVIEW_ORDER', 'Review Order')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      rectangle: true,
      color: "primary",
      onClick: function onClick() {
        return handleReorder(order.id);
      },
      disabled: reorderLoading
    }, orderID === order.id && reorderLoading ? t('LOADING', 'Loading...') : t('REORDER', 'Reorder'))));
  })), pagination.totalPages && pagination.currentPage < pagination.totalPages && /*#__PURE__*/_react.default.createElement(_styles.WrappButton, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    rectangle: true,
    outline: true,
    color: "primary",
    onClick: loadMoreOrders
  }, t('LOAD_MORE_ORDERS', 'Load more orders'))), openModal && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: openModal,
    onClose: function onClose() {
      return setOpenModal(false);
    },
    title: orderSelected ? "".concat(t('WRITE_A_REVIEW', 'Write a Review'), " #").concat(orderSelected === null || orderSelected === void 0 ? void 0 : orderSelected.id) : t('LOADING', 'Loading...')
  }, /*#__PURE__*/_react.default.createElement(_ReviewOrder.ReviewOrder, {
    order: orderSelected,
    closeReviewOrder: function closeReviewOrder() {
      return setOpenModal(false);
    },
    setIsReviewed: function setIsReviewed() {
      return setIsReviewedOrderIds([].concat(_toConsumableArray(isReviewedOrderIds), [orderSelected.id]));
    }
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};