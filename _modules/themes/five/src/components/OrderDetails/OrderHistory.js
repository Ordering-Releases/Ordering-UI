"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OrderHistory = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Buttons = require("../../styles/Buttons");
var _utils = require("../../../../../utils");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var OrderHistory = exports.OrderHistory = function OrderHistory(props) {
  var _configs$general_hour;
  var messages = props.messages,
    order = props.order,
    handleOpenReview = props.handleOpenReview,
    onClose = props.onClose,
    enableReview = props.enableReview;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parseDate = _useUtils2[0].parseDate;
  var _useConfig = (0, _orderingComponentsExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var excludedMessages = ['manual_driver_assignment_comment', 'driver_group_id', 'manual_driver_assignment_author_id'];
  var getLogisticTagStatus = function getLogisticTagStatus(status) {
    switch (status) {
      case 0:
        return t('PENDING', 'Pending');
      case 1:
        return t('IN_PROGRESS', 'In Progress');
      case 2:
        return t('IN_QUEUE', 'In Queue');
      case 3:
        return t('EXPIRED', 'Logistic expired');
      case 4:
        return t('RESOLVED', 'Resolved');
      default:
        return status;
    }
  };
  var handleReview = function handleReview() {
    onClose();
    setTimeout(function () {
      enableReview && handleOpenReview && handleOpenReview();
    }, 1);
  };
  var getStatus = function getStatus(s) {
    var status = parseInt(s);
    switch (status) {
      case 0:
        return 'ORDER_STATUS_PENDING';
      case 1:
        return 'ORDERS_COMPLETED';
      case 2:
        return 'ORDER_REJECTED';
      case 3:
        return 'ORDER_STATUS_IN_BUSINESS';
      case 4:
        return 'ORDER_READY';
      case 5:
        return 'ORDER_REJECTED_RESTAURANT';
      case 6:
        return 'ORDER_STATUS_CANCELLEDBYDRIVER';
      case 7:
        return 'ORDER_STATUS_ACCEPTEDBYRESTAURANT';
      case 8:
        return 'ORDER_CONFIRMED_ACCEPTED_BY_DRIVER';
      case 9:
        return 'ORDER_PICKUP_COMPLETED_BY_DRIVER';
      case 10:
        return 'ORDER_PICKUP_FAILED_BY_DRIVER';
      case 11:
        return 'ORDER_DELIVERY_COMPLETED_BY_DRIVER';
      case 12:
        return 'ORDER_DELIVERY_FAILED_BY_DRIVER';
      case 13:
        return 'PREORDER';
      case 14:
        return 'ORDER_NOT_READY';
      case 15:
        return 'ORDER_PICKEDUP_COMPLETED_BY_CUSTOMER';
      case 16:
        return 'ORDER_STATUS_CANCELLED_BY_CUSTOMER';
      case 17:
        return 'ORDER_NOT_PICKEDUP_BY_CUSTOMER';
      case 18:
        return 'ORDER_DRIVER_ALMOST_ARRIVED_BUSINESS';
      case 19:
        return 'ORDER_DRIVER_ALMOST_ARRIVED_CUSTOMER';
      case 20:
        return 'ORDER_CUSTOMER_ALMOST_ARRIVED_BUSINESS';
      case 21:
        return 'ORDER_CUSTOMER_ARRIVED_BUSINESS';
      case 22:
        return 'ORDER_LOOKING_FOR_DRIVER';
      case 23:
        return 'ORDER_DRIVER_ON_WAY';
      case 24:
        return 'ORDER_DRIVER_WAITING_FOR_ORDER';
      case 25:
        return 'ORDER_ACCEPTED_BY_DRIVER_COMPANY';
      case 26:
        return 'ORDER_DRIVER_ARRIVED_CUSTOMER';
      default:
        return (0, _utils.getTraduction)(status);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles.OrderHistoryContainer, null, !(messages !== null && messages !== void 0 && messages.loading) && order && /*#__PURE__*/_react.default.createElement(_styles.HistoryItemWrapper, null, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckCircleFill, null), /*#__PURE__*/_react.default.createElement(_styles.DetailWrapper, null, /*#__PURE__*/_react.default.createElement("h3", null, t('ORDER_PLACED', 'Order placed'), " ", ' ', !props.hideViaText && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('VIA', 'Via'), ' ', order.app_id ? t(order.app_id.toUpperCase(), order.app_id) : t('OTHER', 'Other'))), /*#__PURE__*/_react.default.createElement("p", null, parseDate(order.created_at, {
    outputFormat: "MMM DD, ".concat(configs === null || configs === void 0 || (_configs$general_hour = configs.general_hour_format) === null || _configs$general_hour === void 0 ? void 0 : _configs$general_hour.value)
  })))), messages && (messages === null || messages === void 0 ? void 0 : messages.messages.map(function (message, i) {
    var _message$change, _message$change2, _message$change3, _message$change4, _message$change5, _message$driver, _message$driver2, _configs$general_hour2;
    return message.type === 1 && !excludedMessages.includes(message === null || message === void 0 || (_message$change = message.change) === null || _message$change === void 0 ? void 0 : _message$change.attribute) && /*#__PURE__*/_react.default.createElement(_styles.HistoryItemWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.CheckCircleFill, null), /*#__PURE__*/_react.default.createElement(_styles.DetailWrapper, null, ((_message$change2 = message.change) === null || _message$change2 === void 0 ? void 0 : _message$change2.attribute) !== 'driver_id' ? /*#__PURE__*/_react.default.createElement("h3", null, ((_message$change3 = message.change) === null || _message$change3 === void 0 ? void 0 : _message$change3.attribute) === 'logistic_status' ? getLogisticTagStatus(parseInt(message.change.new, 10)) : ((_message$change4 = message.change) === null || _message$change4 === void 0 ? void 0 : _message$change4.attribute) === 'delivered_in' ? /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("strong", null, t('TIME_ADDED_BY_DRIVER', 'Time added by driver')), /*#__PURE__*/_react.default.createElement("br", null), (0, _utils.formatSeconds)(parseInt(message.change.new, 10))) : ((_message$change5 = message.change) === null || _message$change5 === void 0 ? void 0 : _message$change5.attribute) === 'prepared_in' ? /*#__PURE__*/_react.default.createElement("h3", null, /*#__PURE__*/_react.default.createElement("strong", null, t('TIME_ADDED_BY_BUSINESS', 'Time added by business')), /*#__PURE__*/_react.default.createElement("br", null), (0, _utils.formatSeconds)(parseInt(message.change.new, 10))) : t(getStatus(parseInt(message.change.new, 10)))) : /*#__PURE__*/_react.default.createElement("h3", null, message.change.new ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, (_message$driver = message.driver) === null || _message$driver === void 0 ? void 0 : _message$driver.name, " ", ' ', " ", ((_message$driver2 = message.driver) === null || _message$driver2 === void 0 ? void 0 : _message$driver2.lastname) && message.driver.lastname, " "), t('WAS_ASSIGNED_AS_DRIVER', 'Was assigned as driver')) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, t('DRIVER_UNASSIGNED', 'Driver unassigned'))), /*#__PURE__*/_react.default.createElement("p", null, parseDate(message.created_at, {
      outputFormat: "MMM DD, ".concat(configs === null || configs === void 0 || (_configs$general_hour2 = configs.general_hour_format) === null || _configs$general_hour2 === void 0 ? void 0 : _configs$general_hour2.value)
    }))));
  })), /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: handleReview,
    color: "primary"
  }, enableReview ? t('REVIEW_ORDER', 'Review order') : t('CONTINUE', 'Continue'), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowRight, null))));
};