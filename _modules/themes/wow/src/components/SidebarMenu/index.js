"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _IosMenu = _interopRequireDefault(require("@meronex/icons/ios/IosMenu"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _AiOutlineLogin = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineLogin"));
var _AiOutlineUserAdd = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineUserAdd"));
var _FaRegAddressCard = _interopRequireDefault(require("@meronex/icons/fa/FaRegAddressCard"));
var _FaRegListAlt = _interopRequireDefault(require("@meronex/icons/fa/FaRegListAlt"));
var _AiOutlineHome = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineHome"));
var _BiStore = _interopRequireDefault(require("@meronex/icons/bi/BiStore"));
var _FaUserCircle = _interopRequireDefault(require("@meronex/icons/fa/FaUserCircle"));
var _RiStarSmileLine = _interopRequireDefault(require("@meronex/icons/ri/RiStarSmileLine"));
var _MdFavoriteBorder = _interopRequireDefault(require("@meronex/icons/md/MdFavoriteBorder"));
var _BiHelpCircle = _interopRequireDefault(require("@meronex/icons/bi/BiHelpCircle"));
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _orderingComponentsExternal = require("ordering-components-external");
var _styledComponents = require("styled-components");
var _style = require("../../../../../components/Dropdown/style");
var _useWindowSize2 = require("../../../../../hooks/useWindowSize");
var _LogoutButton = require("../../../../../components/LogoutButton");
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
var SidebarMenu = exports.SidebarMenu = function SidebarMenu(props) {
  var _props$beforeElements, _props$beforeComponen, _sessionState$user, _sessionState$user2, _options$address2, _options$address3, _theme$images, _theme$images2, _props$afterComponent, _props$afterElements;
  var auth = props.auth,
    isHideSignup = props.isHideSignup,
    userCustomer = props.userCustomer;
  var _useEvent = (0, _orderingComponentsExternal.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    options = _useOrder2[0].options;
  var _useSession = (0, _orderingComponentsExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    sessionState = _useSession2[0];
  var theme = (0, _styledComponents.useTheme)();
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var isHome = window.location.pathname === '/' || window.location.pathname === '/home';
  var handleGoToPage = function handleGoToPage(data) {
    events.emit('go_to_page', data);
    actionSidebar(false);
    setIsMenuOpen(false);
  };
  var actionSidebar = function actionSidebar(value) {
    setIsMenuOpen(value);
    document.getElementById('sidebar_menu').style.width = value ? width > 489 ? '340px' : '100vw' : '0';
  };
  (0, _react.useEffect)(function () {
    if (isMenuOpen) {
      if (width <= 489) {
        document.getElementById('sidebar_menu').style.width = '100vh';
      } else {
        document.getElementById('sidebar_menu').style.width = '340px';
      }
    }
  }, [width]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, {
    auth: auth
  }, /*#__PURE__*/_react.default.createElement(_styles.IconContent, {
    isHome: isHome,
    "aria-label": "menu",
    onClick: function onClick() {
      return actionSidebar(true);
    }
  }, /*#__PURE__*/_react.default.createElement(_IosMenu.default, null)), isMenuOpen && /*#__PURE__*/_react.default.createElement(_styles.BackDropContainer, {
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }), /*#__PURE__*/_react.default.createElement(_styles.SidebarContent, {
    id: "sidebar_menu",
    isHome: isHome
  }, /*#__PURE__*/_react.default.createElement(_styles.TopContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CustomerInfo, null, auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_style.DropDownCircleImage, {
    src: sessionState === null || sessionState === void 0 || (_sessionState$user = sessionState.user) === null || _sessionState$user === void 0 ? void 0 : _sessionState$user.photo,
    fallback: /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)
  }), /*#__PURE__*/_react.default.createElement("span", null, sessionState === null || sessionState === void 0 || (_sessionState$user2 = sessionState.user) === null || _sessionState$user2 === void 0 ? void 0 : _sessionState$user2.name))), /*#__PURE__*/_react.default.createElement(_styles.MenuClose, {
    isHome: isHome,
    "aria-label": "close",
    onClick: function onClick() {
      return actionSidebar(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_MdClose.default, null))), userCustomer && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    isCustomer: userCustomer
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: false
  }, /*#__PURE__*/_react.default.createElement(_FaUserCircle.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: false
  }, "".concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.name, " ").concat(userCustomer === null || userCustomer === void 0 ? void 0 : userCustomer.lastname))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      var _options$address;
      return handleGoToPage({
        page: options !== null && options !== void 0 && (_options$address = options.address) !== null && _options$address !== void 0 && _options$address.location ? 'search' : 'home'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/' || window.location.pathname === '/home' || window.location.pathname === '/search'
  }, options !== null && options !== void 0 && (_options$address2 = options.address) !== null && _options$address2 !== void 0 && _options$address2.location ? /*#__PURE__*/_react.default.createElement(_BiStore.default, null) : /*#__PURE__*/_react.default.createElement(_AiOutlineHome.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/' || window.location.pathname === '/home' || window.location.pathname === '/search'
  }, options !== null && options !== void 0 && (_options$address3 = options.address) !== null && _options$address3 !== void 0 && _options$address3.location ? t('BUSINESSES', 'Businesses') : t('HOME', 'Home'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      return handleGoToPage({
        page: 'orders'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/profile/orders'
  }, /*#__PURE__*/_react.default.createElement(_FaRegListAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/profile/orders'
  }, t('ORDERS', 'Orders'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome
    // onClick={() => handleGoToPage({ page: 'orders' })}
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/profits'
  }, /*#__PURE__*/_react.default.createElement(_RiStarSmileLine.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/profits'
  }, t('PROFITS', 'Profits'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null)))))), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      return handleGoToPage({
        page: 'profile'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/profile'
  }, /*#__PURE__*/_react.default.createElement(_FaRegAddressCard.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/profile'
  }, t('PROFILE', 'Profile'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome
    // onClick={() => handleGoToPage({ page: 'orders' })}
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/favorites'
  }, /*#__PURE__*/_react.default.createElement(_MdFavoriteBorder.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/favorites'
  }, t('FAVORITES', 'favorites'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome
    // onClick={() => handleGoToPage({ page: 'orders' })}
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/help'
  }, /*#__PURE__*/_react.default.createElement(_BiHelpCircle.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/help'
  }, t('HELP', 'help'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), /*#__PURE__*/_react.default.createElement(_LogoutButton.LogoutButton, {
    onCustomClick: function onCustomClick() {
      return actionSidebar(false);
    }
  })), !auth && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signin'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/signin' || window.location.pathname === '/login'
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineLogin.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/signin' || window.location.pathname === '/login'
  }, t('SIGNIN', 'Sign in'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null))))), !isHideSignup && /*#__PURE__*/_react.default.createElement(_styles.MenuLink, {
    isHome: isHome,
    onClick: function onClick() {
      return handleGoToPage({
        page: 'signup'
      });
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.WrappContent, null, /*#__PURE__*/_react.default.createElement(_styles.MenuLinkIcon, {
    isHome: isHome,
    active: window.location.pathname === '/signup'
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineUserAdd.default, null)), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkText, null, /*#__PURE__*/_react.default.createElement(_styles.TextInfo, {
    isHome: isHome,
    active: window.location.pathname === '/signup'
  }, t('SIGNUP', 'Sign up'))), /*#__PURE__*/_react.default.createElement(_styles.MenuLinkSeparator, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("hr", null)))))), /*#__PURE__*/_react.default.createElement(_styles.DownloadAppContainer, null, /*#__PURE__*/_react.default.createElement(_styles.LogoWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Logotype Invert",
    src: theme === null || theme === void 0 || (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.logos) === null || _theme$images === void 0 ? void 0 : _theme$images.logotype,
    loading: "lazy"
  })), /*#__PURE__*/_react.default.createElement(_styles.DownloadAppLinkContainer, null, /*#__PURE__*/_react.default.createElement("p", null, t('HOME_DONWLOAD_APP_TITLE', 'Enjoy a better experience by downloading the App')), /*#__PURE__*/_react.default.createElement(_styles.DownloadAppLink, {
    target: "_blank",
    rel: "noreferrer",
    href: t('FOOTER_QL3_1_HREF'),
    "aria-label": "GooglePlay"
  }, /*#__PURE__*/_react.default.createElement("img", {
    alt: "Google play",
    src: theme === null || theme === void 0 || (_theme$images2 = theme.images) === null || _theme$images2 === void 0 || (_theme$images2 = _theme$images2.general) === null || _theme$images2 === void 0 ? void 0 : _theme$images2.googlePlay,
    loading: "lazy"
  })))))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};