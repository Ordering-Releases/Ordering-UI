"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PreOrdersLayout = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _MdcClockTimeThree = _interopRequireDefault(require("@meronex/icons/mdc/MdcClockTimeThree"));
var _orderingComponentsExternal = require("ordering-components-external");
var _styledComponents = require("styled-components");
var _Buttons = require("../../styles/Buttons");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
var PreOrdersLayout = exports.PreOrdersLayout = function PreOrdersLayout(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var isProfile = props.isProfile,
    isSkeleton = props.isSkeleton,
    businessesIds = props.businessesIds,
    pagination = props.pagination,
    loadMoreOrders = props.loadMoreOrders,
    isBusinessesPage = props.isBusinessesPage,
    customArray = props.customArray,
    handleOrderDetails = props.handleOrderDetails,
    handleOrderHelp = props.handleOrderHelp;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDate = _useUtils2$.parseDate;
  var orders = customArray || props.orders;
  var ordersToShow = businessesIds ? orders.filter(function (order) {
    return businessesIds === null || businessesIds === void 0 ? void 0 : businessesIds.includes(order === null || order === void 0 ? void 0 : order.business_id);
  }) : orders;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.OrderContainer, null, isSkeleton ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(10)).map(function (item, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.Card, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_styles.CardContent, null, /*#__PURE__*/_react.default.createElement(_styles.OrderContent, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 75,
      height: 75
    }), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformation, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 80,
      height: 25
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }))), /*#__PURE__*/_react.default.createElement(_styles.ActionContent, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 25
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    }))), /*#__PURE__*/_react.default.createElement(_styles.CardBottom, null, /*#__PURE__*/_react.default.createElement(_styles.ReviewContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 60
    })), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100,
      height: 30
    })));
  })) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, orders.length > 0 && ordersToShow.map(function (order) {
    var _order$business, _theme$images, _order$business2, _theme$images2, _order$business3, _order$customer, _order$summary;
    return /*#__PURE__*/_react.default.createElement(_styles.Card, {
      key: order.id || order.uuid
    }, /*#__PURE__*/_react.default.createElement(_styles.CardContent, null, /*#__PURE__*/_react.default.createElement(_styles.OrderContent, null, (((_order$business = order.business) === null || _order$business === void 0 ? void 0 : _order$business.logo) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.businessLogo)) && !isBusinessesPage && /*#__PURE__*/_react.default.createElement(_styles.Logo, null, /*#__PURE__*/_react.default.createElement("img", {
      src: ((_order$business2 = order.business) === null || _order$business2 === void 0 ? void 0 : _order$business2.logo) || ((_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.dummies) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.businessLogo),
      alt: "business-logo",
      width: "75px",
      height: "75px"
    })), /*#__PURE__*/_react.default.createElement(_styles.BusinessInformation, null, /*#__PURE__*/_react.default.createElement("h2", null, (_order$business3 = order.business) === null || _order$business3 === void 0 ? void 0 : _order$business3.name), /*#__PURE__*/_react.default.createElement("p", {
      name: "order_number"
    }, t('ORDER_NUMBER', 'Order No.'), " ", order.id), /*#__PURE__*/_react.default.createElement("p", null, order === null || order === void 0 || (_order$customer = order.customer) === null || _order$customer === void 0 ? void 0 : _order$customer.address))), /*#__PURE__*/_react.default.createElement(_styles.ActionContent, null, /*#__PURE__*/_react.default.createElement("p", null, parsePrice((order === null || order === void 0 || (_order$summary = order.summary) === null || _order$summary === void 0 ? void 0 : _order$summary.total) || 0)), /*#__PURE__*/_react.default.createElement("span", {
      onClick: function onClick() {
        return !isProfile ? handleOrderDetails(order.uuid) : handleOrderHelp(order);
      }
    }, !isProfile ? t('MOBILE_FRONT_BUTTON_VIEW_ORDER', 'View order') : t('HELP', 'Help')))), /*#__PURE__*/_react.default.createElement(_styles.CardBottom, null, /*#__PURE__*/_react.default.createElement(_styles.DeliveryTime, null, /*#__PURE__*/_react.default.createElement(_MdcClockTimeThree.default, null), /*#__PURE__*/_react.default.createElement("p", null, order !== null && order !== void 0 && order.delivery_datetime_utc ? parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime_utc) : parseDate(order === null || order === void 0 ? void 0 : order.delivery_datetime, {
      utc: false
    })))));
  }), (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && (pagination === null || pagination === void 0 ? void 0 : pagination.currentPage) < (pagination === null || pagination === void 0 ? void 0 : pagination.totalPages) && /*#__PURE__*/_react.default.createElement(_styles.LoadMoreButtonWrap, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    className: "load-orders",
    color: "primary",
    outline: true,
    onClick: loadMoreOrders
  }, t('LOAD_MORE_ORDERS', 'Load more orders'))))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};