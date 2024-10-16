"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserProfileDropDown = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _FaSignOutAlt = _interopRequireDefault(require("@meronex/icons/fa/FaSignOutAlt"));
var _styledComponents = require("styled-components");
var _BisUser = _interopRequireDefault(require("@meronex/icons/bi/BisUser"));
var _RiBankCardFill = _interopRequireDefault(require("@meronex/icons/ri/RiBankCardFill"));
var _HiLocationMarker = _interopRequireDefault(require("@meronex/icons/hi/HiLocationMarker"));
var _BiStore = _interopRequireDefault(require("@meronex/icons/bi/BiStore"));
var _FaHandHoldingHeart = _interopRequireDefault(require("@meronex/icons/fa/FaHandHoldingHeart"));
var _AiFillExclamationCircle = _interopRequireDefault(require("@meronex/icons/ai/AiFillExclamationCircle"));
var _BiLogIn = _interopRequireDefault(require("@meronex/icons/bi/BiLogIn"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var UserProfileDropDown = exports.UserProfileDropDown = function UserProfileDropDown(props) {
  var _theme$images;
  var auth = props.auth,
    selectedItem = props.selectedItem,
    handleChangeItem = props.handleChangeItem;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useEvent = (0, _orderingComponentsExternal.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, !auth && /*#__PURE__*/_react.default.createElement(_styles.Item, {
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signin'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_BiLogIn.default, {
    color: "#85C347"
  })), /*#__PURE__*/_react.default.createElement("span", null, t('LOGIN', 'Login'))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Item, {
    active: selectedItem === 'myProfile',
    onClick: function onClick() {
      return handleChangeItem('myProfile');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_BisUser.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('MY_PROFILE', 'My profile'))), /*#__PURE__*/_react.default.createElement(_styles.Item, null, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_RiBankCardFill.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('PAYMENT_METHODS', 'Payment Methods'))), /*#__PURE__*/_react.default.createElement(_styles.Item, null, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement("img", {
    src: (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.wowCard,
    alt: "wow-card"
  })), /*#__PURE__*/_react.default.createElement("span", null, t('ADD_WOW_CARD', 'Add Wow card'))), /*#__PURE__*/_react.default.createElement(_styles.Item, {
    active: selectedItem === 'savedAddress',
    onClick: function onClick() {
      return handleChangeItem('savedAddress');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_HiLocationMarker.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('MY_ADDRESSES', 'My Addresses')))), /*#__PURE__*/_react.default.createElement(_styles.Item, {
    active: selectedItem === 'businesses',
    onClick: function onClick() {
      return handleChangeItem('businesses');
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_BiStore.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('BUSINESSES', 'Businesses'))), /*#__PURE__*/_react.default.createElement("h1", null, t('INFORMATION_AND_SUPPORT', 'Information and support')), /*#__PURE__*/_react.default.createElement(_styles.Item, {
    active: selectedItem === 'help',
    onClick: function onClick() {
      return handleGoToPage({
        page: 'help'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_HiLocationMarker.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('HELP', 'Help'))), /*#__PURE__*/_react.default.createElement(_styles.Item, null, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_FaHandHoldingHeart.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('MY_OWN', 'My Own'))), /*#__PURE__*/_react.default.createElement(_styles.Item, null, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_AiFillExclamationCircle.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('ABOUT_WOW', 'About Wow'))), auth && /*#__PURE__*/_react.default.createElement(ProfileLogout, null));
};
var ProfileLogoutUI = function ProfileLogoutUI(props) {
  var _useLanguage3 = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage4 = _slicedToArray(_useLanguage3, 2),
    t = _useLanguage4[1];
  var _useCustomer = (0, _orderingComponentsExternal.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 2),
    deleteUserCustomer = _useCustomer2[1].deleteUserCustomer;
  var handleClick = function handleClick() {
    deleteUserCustomer(true);
    props.handleLogoutClick();
  };
  return /*#__PURE__*/_react.default.createElement(_styles.LogoutContainer, {
    onClick: handleClick
  }, /*#__PURE__*/_react.default.createElement(_styles.IconWrap, null, /*#__PURE__*/_react.default.createElement(_FaSignOutAlt.default, null)), /*#__PURE__*/_react.default.createElement("span", null, t('LOGOUT', 'Logout')));
};
var ProfileLogout = function ProfileLogout(props) {
  var logoutActionProps = {
    UIComponent: ProfileLogoutUI
  };
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.LogoutAction, logoutActionProps);
};