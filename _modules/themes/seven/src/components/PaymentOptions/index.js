"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaymentOptions = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _IosCash = _interopRequireDefault(require("@meronex/icons/ios/IosCash"));
var _IosCard = _interopRequireDefault(require("@meronex/icons/ios/IosCard"));
var _IosRadioButtonOn = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOn"));
var _FaStripe = _interopRequireDefault(require("@meronex/icons/fa/FaStripe"));
var _FaCcStripe = _interopRequireDefault(require("@meronex/icons/fa/FaCcStripe"));
var _FaStripeS = _interopRequireDefault(require("@meronex/icons/fa/FaStripeS"));
var _GrStripe = _interopRequireDefault(require("@meronex/icons/gr/GrStripe"));
var _EnPaypal = _interopRequireDefault(require("@meronex/icons/en/EnPaypal"));
var _orderingComponentsExternal = require("ordering-components-external");
var _PaymentOptionStripe = require("../../../../../components/PaymentOptionStripe");
var _PaymentOptionPaypal = require("../../../../../components/PaymentOptionPaypal");
var _StripeElementsForm = require("../../../../../components/StripeElementsForm");
var _StripeRedirectForm = require("../../../../../components/StripeRedirectForm");
var _NotFoundSource = require("../../../../../components/NotFoundSource");
var _utils = require("../../../../../utils");
var _Modal = require("../../../../../components/Modal");
var _Select = require("../../styles/Select");
var _PaymentOptionCash = require("../PaymentOptionCash");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var stripeOptions = ['stripe_direct', 'stripe', 'stripe_connect'];
var stripeRedirectOptions = [{
  name: 'Bancontact',
  value: 'bancontact'
}, {
  name: 'Alipay',
  value: 'alipay'
}, {
  name: 'Giropay',
  value: 'giropay'
}, {
  name: 'iDEAL',
  value: 'ideal'
}];
var getPayIcon = function getPayIcon(method) {
  switch (method) {
    case 1:
      return /*#__PURE__*/_react.default.createElement(_IosCash.default, null);
    case 22:
      return /*#__PURE__*/_react.default.createElement(_FaStripe.default, null);
    case 28:
      return /*#__PURE__*/_react.default.createElement(_FaCcStripe.default, null);
    case 31:
      return /*#__PURE__*/_react.default.createElement(_FaStripeS.default, null);
    case 32:
      return /*#__PURE__*/_react.default.createElement(_GrStripe.default, null);
    case 3:
      return /*#__PURE__*/_react.default.createElement(_EnPaypal.default, null);
    default:
      return /*#__PURE__*/_react.default.createElement(_IosCard.default, null);
  }
};
var paypalBtnStyle = {
  color: 'gold',
  shape: 'pill',
  label: 'paypal',
  size: 'responsive'
};
var PaymentOptionsUI = function PaymentOptionsUI(props) {
  var _props$beforeElements, _props$beforeComponen, _paymethodsList$error, _paymethodSelected$da, _paymethodData$card, _paymethodData$card2, _isOpenMethod$paymeth, _isOpenMethod$paymeth2, _isOpenMethod$paymeth3, _isOpenMethod$paymeth4, _isOpenMethod$paymeth5, _isOpenMethod$paymeth6, _isOpenMethod$paymeth7, _isOpenMethod$paymeth8, _isOpenMethod$paymeth9, _isOpenMethod$paymeth10, _isOpenMethod$paymeth11, _isOpenMethod$paymeth12, _isOpenMethod$paymeth13, _isOpenMethod$paymeth14, _isOpenMethod$paymeth15, _isOpenMethod$paymeth16, _props$afterComponent, _props$afterElements;
  var cart = props.cart,
    errorCash = props.errorCash,
    isLoading = props.isLoading,
    isDisabled = props.isDisabled,
    paymethodData = props.paymethodData,
    paymethodsList = props.paymethodsList,
    setPaymethodData = props.setPaymethodData,
    handleOrderRedirect = props.handleOrderRedirect,
    handlePaymethodClick = props.handlePaymethodClick,
    handlePaymethodDataChange = props.handlePaymethodDataChange,
    isCustomerMode = props.isCustomerMode,
    isOpenMethod = props.isOpenMethod;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useSession = (0, _orderingComponentsExternal.useSession)(),
    _useSession2 = _slicedToArray(_useSession, 1),
    token = _useSession2[0].token;
  var paymethodSelected = props.paySelected || props.paymethodSelected;
  var handlePaymentMethodClick = function handlePaymentMethodClick(paymethodId) {
    var selectedPaymethod = paymethodsList.paymethods.find(function (paymethod) {
      return paymethod.id === paymethodId;
    });
    var isPopupMethod = ['stripe', 'stripe_direct', 'stripe_connect', 'stripe_redirect', 'paypal'].includes(selectedPaymethod === null || selectedPaymethod === void 0 ? void 0 : selectedPaymethod.gateway);
    handlePaymethodClick(selectedPaymethod, isPopupMethod);
  };
  (0, _react.useEffect)(function () {
    if (paymethodsList.paymethods.length === 1) {
      handlePaymethodClick && handlePaymethodClick(paymethodsList.paymethods[0]);
    }
  }, [paymethodsList.paymethods]);
  (0, _react.useEffect)(function () {
    if ((paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) !== 'cash' && errorCash) {
      props.setErrorCash(false);
    }
  }, [paymethodSelected]);
  (0, _react.useEffect)(function () {
    var _props$paySelected;
    if (props.paySelected && (_props$paySelected = props.paySelected) !== null && _props$paySelected !== void 0 && _props$paySelected.data) {
      var _props$paySelected2;
      setPaymethodData((_props$paySelected2 = props.paySelected) === null || _props$paySelected2 === void 0 ? void 0 : _props$paySelected2.data);
    }
  }, [props.paySelected]);
  var _paymentType = paymethodsList.paymethods.sort(function (a, b) {
    return a.id - b.id;
  }).map(function (paymethod) {
    return {
      value: paymethod === null || paymethod === void 0 ? void 0 : paymethod.id,
      content: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: paymethod.id
      }, (!isCustomerMode || isCustomerMode && (paymethod.gateway === 'card_delivery' || paymethod.gateway === 'cash')) && /*#__PURE__*/_react.default.createElement(_styles.PayCard, {
        isDisabled: isDisabled,
        className: "card ".concat((paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.id) === paymethod.id ? 'active' : '')
      }, getPayIcon(paymethod.id), /*#__PURE__*/_react.default.createElement("p", null, t(paymethod.gateway.toUpperCase(), paymethod.name))))
    };
  });
  var placeholder = /*#__PURE__*/_react.default.createElement(_styles.PayCard, null, t('SELECT_PAYMETHOD', 'Select a paymethod'));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodsContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodsList, {
    className: "payments-list"
  }, paymethodsList.paymethods.length > 0 && /*#__PURE__*/_react.default.createElement(_Select.Select, {
    placeholder: placeholder,
    defaultValue: paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.id,
    options: _paymentType,
    onChange: function onChange(paymethod) {
      return handlePaymentMethodClick(paymethod);
    },
    isFullWidth: true
  }), (paymethodsList.loading || isLoading) && /*#__PURE__*/_react.default.createElement(_styles.PaymentMethodsContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 38
  })), paymethodsList.error && paymethodsList.error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: (paymethodsList === null || paymethodsList === void 0 || (_paymethodsList$error = paymethodsList.error[0]) === null || _paymethodsList$error === void 0 ? void 0 : _paymethodsList$error.message) || (paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.error[0])
  }), !(paymethodsList.loading || isLoading) && !paymethodsList.error && (!(paymethodsList !== null && paymethodsList !== void 0 && paymethodsList.paymethods) || paymethodsList.paymethods.length === 0) && /*#__PURE__*/_react.default.createElement("p", null, t('NO_PAYMENT_METHODS', 'No payment methods!'))), (paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) === 'cash' && /*#__PURE__*/_react.default.createElement(_PaymentOptionCash.PaymentOptionCash, {
    orderTotal: cart.total,
    defaultValue: paymethodSelected === null || paymethodSelected === void 0 || (_paymethodSelected$da = paymethodSelected.data) === null || _paymethodSelected$da === void 0 ? void 0 : _paymethodSelected$da.cash,
    onChangeData: handlePaymethodDataChange,
    setErrorCash: props.setErrorCash
  }), stripeOptions.includes(paymethodSelected === null || paymethodSelected === void 0 ? void 0 : paymethodSelected.gateway) && (paymethodData === null || paymethodData === void 0 ? void 0 : paymethodData.card) && !isCustomerMode && /*#__PURE__*/_react.default.createElement(_styles.PayCardSelected, null, /*#__PURE__*/_react.default.createElement(_styles.CardItemContent, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "checks"
  }, /*#__PURE__*/_react.default.createElement(_IosRadioButtonOn.default, null)), /*#__PURE__*/_react.default.createElement("span", {
    className: "brand"
  }, (0, _utils.getIconCard)(paymethodData === null || paymethodData === void 0 || (_paymethodData$card = paymethodData.card) === null || _paymethodData$card === void 0 ? void 0 : _paymethodData$card.brand)), /*#__PURE__*/_react.default.createElement("span", null, "XXXX-XXXX-XXXX-", paymethodData === null || paymethodData === void 0 || (_paymethodData$card2 = paymethodData.card) === null || _paymethodData$card2 === void 0 ? void 0 : _paymethodData$card2.last4))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    className: "modal-info",
    open: (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth === void 0 ? void 0 : _isOpenMethod$paymeth.gateway) === 'paypal' && !paymethodData.id,
    onClose: function onClose() {
      return handlePaymethodClick(null);
    },
    title: t('PAY_WITH_PAYPAL', 'Pay with PayPal')
  }, (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth2 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth2 === void 0 ? void 0 : _isOpenMethod$paymeth2.gateway) === 'paypal' && /*#__PURE__*/_react.default.createElement(_PaymentOptionPaypal.PaymentOptionPaypal, {
    clientId: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth3 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth3 === void 0 || (_isOpenMethod$paymeth3 = _isOpenMethod$paymeth3.credentials) === null || _isOpenMethod$paymeth3 === void 0 ? void 0 : _isOpenMethod$paymeth3.client_id,
    body: {
      paymethod_id: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth4 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth4 === void 0 ? void 0 : _isOpenMethod$paymeth4.id,
      amount: cart.total,
      delivery_zone_id: cart.delivery_zone_id,
      cartUuid: cart.uuid
    },
    btnStyle: paypalBtnStyle,
    noAuthMessage: !token ? t('NEED_LOGIN_TO_USE', 'Sorry, you need to login to use this method') : null,
    handlerChangePaypal: function handlerChangePaypal(uuid) {
      return handleOrderRedirect && handleOrderRedirect(uuid);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    className: "modal-info",
    open: (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth5 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth5 === void 0 ? void 0 : _isOpenMethod$paymeth5.gateway) === 'stripe' && !paymethodData.id,
    onClose: function onClose() {
      return handlePaymethodClick(null);
    },
    title: t('SELECT_A_CARD', 'Select a card')
  }, ((_isOpenMethod$paymeth6 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth6 === void 0 ? void 0 : _isOpenMethod$paymeth6.gateway) === 'stripe' && /*#__PURE__*/_react.default.createElement(_PaymentOptionStripe.PaymentOptionStripe, {
    paymethod: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : isOpenMethod.paymethod,
    businessId: props.businessId,
    publicKey: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth7 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth7 === void 0 || (_isOpenMethod$paymeth7 = _isOpenMethod$paymeth7.credentials) === null || _isOpenMethod$paymeth7 === void 0 ? void 0 : _isOpenMethod$paymeth7.publishable,
    payType: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth8 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth8 === void 0 ? void 0 : _isOpenMethod$paymeth8.name,
    onSelectCard: handlePaymethodDataChange,
    onCancel: function onCancel() {
      return handlePaymethodClick(null);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('SELECT_A_CARD', 'Select a card'),
    open: (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth9 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth9 === void 0 ? void 0 : _isOpenMethod$paymeth9.gateway) === 'stripe_connect' && !paymethodData.id,
    className: "modal-info",
    onClose: function onClose() {
      return handlePaymethodClick(null);
    }
  }, (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth10 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth10 === void 0 ? void 0 : _isOpenMethod$paymeth10.gateway) === 'stripe_connect' && /*#__PURE__*/_react.default.createElement(_PaymentOptionStripe.PaymentOptionStripe, {
    paymethod: isOpenMethod === null || isOpenMethod === void 0 ? void 0 : isOpenMethod.paymethod,
    businessId: props.businessId,
    publicKey: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth11 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth11 === void 0 || (_isOpenMethod$paymeth11 = _isOpenMethod$paymeth11.credentials) === null || _isOpenMethod$paymeth11 === void 0 || (_isOpenMethod$paymeth11 = _isOpenMethod$paymeth11.stripe) === null || _isOpenMethod$paymeth11 === void 0 ? void 0 : _isOpenMethod$paymeth11.publishable,
    clientSecret: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth12 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth12 === void 0 ? void 0 : _isOpenMethod$paymeth12.credentials.publishable,
    payType: paymethodsList === null || paymethodsList === void 0 ? void 0 : paymethodsList.name,
    onSelectCard: handlePaymethodDataChange,
    onCancel: function onCancel() {
      return handlePaymethodClick(null);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('ADD_CARD', 'Add card'),
    open: (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth13 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth13 === void 0 ? void 0 : _isOpenMethod$paymeth13.gateway) === 'stripe_direct' && !paymethodData.id,
    className: "modal-info",
    onClose: function onClose() {
      return handlePaymethodClick(null);
    }
  }, (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth14 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth14 === void 0 ? void 0 : _isOpenMethod$paymeth14.gateway) === 'stripe_direct' && /*#__PURE__*/_react.default.createElement(_StripeElementsForm.StripeElementsForm, {
    businessId: props.businessId,
    publicKey: isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth15 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth15 === void 0 || (_isOpenMethod$paymeth15 = _isOpenMethod$paymeth15.credentials) === null || _isOpenMethod$paymeth15 === void 0 ? void 0 : _isOpenMethod$paymeth15.publishable,
    handleSource: handlePaymethodDataChange,
    onCancel: function onCancel() {
      return handlePaymethodClick(null);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('STRIPE_REDIRECT', 'Stripe Redirect'),
    open: (isOpenMethod === null || isOpenMethod === void 0 || (_isOpenMethod$paymeth16 = isOpenMethod.paymethod) === null || _isOpenMethod$paymeth16 === void 0 ? void 0 : _isOpenMethod$paymeth16.gateway) === 'stripe_redirect' && !paymethodData.type,
    className: "modal-info",
    onClose: function onClose() {
      return handlePaymethodClick(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_StripeRedirectForm.StripeRedirectForm, {
    businessId: props.businessId,
    currency: props.currency,
    paymethods: stripeRedirectOptions,
    handleStripeRedirect: handlePaymethodDataChange
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
var PaymentOptions = exports.PaymentOptions = function PaymentOptions(props) {
  var paymentOptions = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PaymentOptionsUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.PaymentOptions, paymentOptions);
};