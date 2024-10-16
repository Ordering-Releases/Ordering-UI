"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessInfoComponent = void 0;
var _react = _interopRequireDefault(require("react"));
var _styles = require("./styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _utils = require("../../../../../utils");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
var _styledComponents = require("styled-components");
var _SocialNetWork = require("./SocialNetWork");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponentsExternal = require("ordering-components-external");
var _SearchComponent = require("./SearchComponent");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var BusinessInfoComponent = exports.BusinessInfoComponent = function BusinessInfoComponent(props) {
  var _theme$business_view, _theme$business_view2, _theme$business_view3, _theme$business_view4, _theme$business_view5, _theme$business_view6, _theme$business_view7, _configs$preorder_sta, _business$ribbon, _business$ribbon2, _business$ribbon3, _business$ribbon4, _business$ribbon5, _business$ribbon6, _business$ribbon7, _business$city, _business$city2, _orderState$options, _business$reviews, _business$reviews2, _categoryState$produc, _business$professiona;
  var isChew = props.isChew,
    loading = props.loading,
    business = props.business,
    isInfoShrunken = props.isInfoShrunken,
    isCustomerMode = props.isCustomerMode,
    setIsPreOrder = props.setIsPreOrder,
    setIsBusinessReviews = props.setIsBusinessReviews,
    categoryState = props.categoryState,
    searchValue = props.searchValue,
    errorQuantityProducts = props.errorQuantityProducts,
    setOpenSearchProducts = props.setOpenSearchProducts,
    handleChangeSortBy = props.handleChangeSortBy,
    sortByValue = props.sortByValue,
    sortByOptions = props.sortByOptions,
    isCustomLayout = props.isCustomLayout;
  var theme = (0, _styledComponents.useTheme)();
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    _useUtils2$ = _useUtils2[0],
    parsePrice = _useUtils2$.parsePrice,
    parseDistance = _useUtils2$.parseDistance;
  var _useConfig = (0, _orderingComponentsExternal.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var windowSize = (0, _useWindowSize.useWindowSize)();
  var hideDeliveryFee = theme === null || theme === void 0 || (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.header) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.business) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.fee) === null || _theme$business_view === void 0 ? void 0 : _theme$business_view.hidden;
  var hideTime = theme === null || theme === void 0 || (_theme$business_view2 = theme.business_view) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.header) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.business) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.time) === null || _theme$business_view2 === void 0 ? void 0 : _theme$business_view2.hidden;
  var hideReviews = theme === null || theme === void 0 || (_theme$business_view3 = theme.business_view) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.header) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.business) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.reviews) === null || _theme$business_view3 === void 0 ? void 0 : _theme$business_view3.hidden;
  var hideReviewsPopup = theme === null || theme === void 0 || (_theme$business_view4 = theme.business_view) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.components) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.header) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.components) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.reviews) === null || _theme$business_view4 === void 0 ? void 0 : _theme$business_view4.hidden;
  var hideDistance = theme === null || theme === void 0 || (_theme$business_view5 = theme.business_view) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.components) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.header) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.components) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.business) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.components) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.distance) === null || _theme$business_view5 === void 0 ? void 0 : _theme$business_view5.hidden;
  var hideCity = theme === null || theme === void 0 || (_theme$business_view6 = theme.business_view) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.components) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.header) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.components) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.business) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.components) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.city) === null || _theme$business_view6 === void 0 ? void 0 : _theme$business_view6.hidden;
  var layoutsWithOldSearch = ['starbucks', 'old', 'floating'];
  var hideSearch = layoutsWithOldSearch.includes(theme === null || theme === void 0 || (_theme$business_view7 = theme.business_view) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.components) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.product_search) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.components) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.layout) === null || _theme$business_view7 === void 0 ? void 0 : _theme$business_view7.type);
  var isPreOrderSetting = (configs === null || configs === void 0 || (_configs$preorder_sta = configs.preorder_status_enabled) === null || _configs$preorder_sta === void 0 ? void 0 : _configs$preorder_sta.value) === '1';
  var singleBusinessRedirect = window.localStorage.getItem('single_business');
  var searchComponentProps = {
    setOpenSearchProducts: setOpenSearchProducts,
    handleChangeSortBy: handleChangeSortBy,
    sortByValue: sortByValue,
    sortByOptions: sortByOptions
  };
  return /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoContainer, {
    isChew: isChew,
    isFlexEnd: windowSize.width >= 768
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoContent, null, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfo, {
    className: "info"
  }, /*#__PURE__*/_react.default.createElement(_styles.BusinessInfoItem, {
    isInfoShrunken: isInfoShrunken
  }, !loading ? /*#__PURE__*/_react.default.createElement(_styles.TitleWrapper, {
    isCustomLayout: isCustomLayout,
    disableLeftSpace: singleBusinessRedirect
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "bold",
    id: "business_name"
  }, business === null || business === void 0 ? void 0 : business.name), isCustomerMode && (business === null || business === void 0 ? void 0 : business.address) && /*#__PURE__*/_react.default.createElement("h3", null, business === null || business === void 0 ? void 0 : business.address), /*#__PURE__*/_react.default.createElement("span", {
    id: "business_name_feedback"
  }), (business === null || business === void 0 || (_business$ribbon = business.ribbon) === null || _business$ribbon === void 0 ? void 0 : _business$ribbon.enabled) && /*#__PURE__*/_react.default.createElement(_styles.RibbonBox, {
    bgColor: business === null || business === void 0 || (_business$ribbon2 = business.ribbon) === null || _business$ribbon2 === void 0 ? void 0 : _business$ribbon2.color,
    colorText: (0, _utils.lightenDarkenColor)(business === null || business === void 0 || (_business$ribbon3 = business.ribbon) === null || _business$ribbon3 === void 0 ? void 0 : _business$ribbon3.color),
    borderRibbon: (0, _utils.lightenDarkenColor)(business === null || business === void 0 || (_business$ribbon4 = business.ribbon) === null || _business$ribbon4 === void 0 ? void 0 : _business$ribbon4.color),
    isRoundRect: (business === null || business === void 0 || (_business$ribbon5 = business.ribbon) === null || _business$ribbon5 === void 0 ? void 0 : _business$ribbon5.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.rectangleRound),
    isCapsule: (business === null || business === void 0 || (_business$ribbon6 = business.ribbon) === null || _business$ribbon6 === void 0 ? void 0 : _business$ribbon6.shape) === (_utils.shape === null || _utils.shape === void 0 ? void 0 : _utils.shape.capsuleShape)
  }, business === null || business === void 0 || (_business$ribbon7 = business.ribbon) === null || _business$ribbon7 === void 0 ? void 0 : _business$ribbon7.text)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 100 : 150,
    height: isCustomerMode ? 35 : 'auto'
  }), typeof hideCity !== 'undefined' && !hideCity && (business === null || business === void 0 || (_business$city = business.city) === null || _business$city === void 0 ? void 0 : _business$city.name) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("p", {
    className: "type"
  }, business === null || business === void 0 || (_business$city2 = business.city) === null || _business$city2 === void 0 ? void 0 : _business$city2.name) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 100 : 150
  })), !loading ? /*#__PURE__*/_react.default.createElement(_styles.SocialList, null, (business === null || business === void 0 ? void 0 : business.facebook_profile) && /*#__PURE__*/_react.default.createElement(_SocialNetWork.SocialNetWork, {
    url: business === null || business === void 0 ? void 0 : business.facebook_profile,
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Facebook, null)
  }), (business === null || business === void 0 ? void 0 : business.instagram_profile) && /*#__PURE__*/_react.default.createElement(_SocialNetWork.SocialNetWork, {
    url: business === null || business === void 0 ? void 0 : business.instagram_profile,
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Instagram, null)
  }), (business === null || business === void 0 ? void 0 : business.tiktok_profile) && /*#__PURE__*/_react.default.createElement(_SocialNetWork.SocialNetWork, {
    url: business === null || business === void 0 ? void 0 : business.tiktok_profile,
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Tiktok, null)
  }), (business === null || business === void 0 ? void 0 : business.pinterest_profile) && /*#__PURE__*/_react.default.createElement(_SocialNetWork.SocialNetWork, {
    url: business === null || business === void 0 ? void 0 : business.pinterest_profile,
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pinterest, null)
  }), (business === null || business === void 0 ? void 0 : business.whatsapp_number) && /*#__PURE__*/_react.default.createElement(_SocialNetWork.SocialNetWork, {
    url: business === null || business === void 0 ? void 0 : business.whatsapp_number,
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Whatsapp, null)
  }), (business === null || business === void 0 ? void 0 : business.snapchat_profile) && /*#__PURE__*/_react.default.createElement(_SocialNetWork.SocialNetWork, {
    url: business === null || business === void 0 ? void 0 : business.snapchat_profile,
    icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Snapchat, null)
  })) : /*#__PURE__*/_react.default.createElement(_styles.SocialList, null, _toConsumableArray(Array(5).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles.IconWrapper, {
      isSkeleton: true,
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 27,
      height: 27
    }));
  })), /*#__PURE__*/_react.default.createElement(_styles.BusinessDetail, {
    isSkeleton: loading
  }, (orderState === null || orderState === void 0 ? void 0 : orderState.options.type) === 1 && !hideDeliveryFee && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, /*#__PURE__*/_react.default.createElement("span", null, t('DELIVERY_FEE', 'Delivery fee')), business && parsePrice((business === null || business === void 0 ? void 0 : business.delivery_price) || 0)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 70 : 50
  })), !hideTime && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 ? void 0 : _orderState$options.type) === 1 ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.delivery_time)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, (0, _utils.convertHoursToMinutes)(business === null || business === void 0 ? void 0 : business.pickup_time)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022"))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 70 : 50
  })), !hideDistance && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h5", null, parseDistance((business === null || business === void 0 ? void 0 : business.distance) || 0)), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 70 : 50
  })), !hideReviews && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "review"
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.StarFill, {
    className: "start"
  }), /*#__PURE__*/_react.default.createElement("p", null, business === null || business === void 0 || (_business$reviews = business.reviews) === null || _business$reviews === void 0 ? void 0 : _business$reviews.total)) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 100 : 50
  }))), !loading ? /*#__PURE__*/_react.default.createElement("div", {
    className: "preorder-Reviews"
  }, isPreOrderSetting && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return setIsPreOrder(true);
    }
  }, isCustomerMode ? t('CHANGE_SCHEDULE', 'Change schedule') : t('PREORDER', 'Preorder')), /*#__PURE__*/_react.default.createElement("span", {
    className: "dot"
  }, "\u2022")), ((_business$reviews2 = business.reviews) === null || _business$reviews2 === void 0 ? void 0 : _business$reviews2.reviews) && !hideReviewsPopup && !isCustomerMode && /*#__PURE__*/_react.default.createElement("span", {
    onClick: function onClick() {
      return setIsBusinessReviews(true);
    }
  }, t('REVIEWS', 'Reviews'))) : /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: isCustomerMode ? 100 : 150
  })))), !hideSearch && ((categoryState === null || categoryState === void 0 || (_categoryState$produc = categoryState.products) === null || _categoryState$produc === void 0 ? void 0 : _categoryState$produc.length) !== 0 || searchValue) && !errorQuantityProducts && !isInfoShrunken && !(business !== null && business !== void 0 && (_business$professiona = business.professionals) !== null && _business$professiona !== void 0 && _business$professiona.length) &&
  /*#__PURE__*/
  // (categoryClicked || windowSize.width >= 993) &&
  _react.default.createElement(_SearchComponent.SearchComponent, searchComponentProps));
};