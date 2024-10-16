"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpsellingPage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponentsExternal = require("ordering-components-external");
var _styles = require("./styles");
var _Buttons = require("../../../../../styles/Buttons");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _Modal = require("../Modal");
var _ProductForm = require("../ProductForm");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
var UpsellingPageUI = function UpsellingPageUI(props) {
  var _upsellingProducts$pr3;
  var upsellingProducts = props.upsellingProducts,
    handleUpsellingPage = props.handleUpsellingPage,
    openUpselling = props.openUpselling,
    canOpenUpselling = props.canOpenUpselling,
    setCanOpenUpselling = props.setCanOpenUpselling,
    business = props.business,
    isCustomMode = props.isCustomMode;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    actualProduct = _useState2[0],
    setActualProduct = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    modalIsOpen = _useState4[0],
    setModalIsOpen = _useState4[1];
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  (0, _react.useEffect)(function () {
    if (!isCustomMode) {
      var _upsellingProducts$pr, _upsellingProducts$pr2;
      if (upsellingProducts !== null && upsellingProducts !== void 0 && (_upsellingProducts$pr = upsellingProducts.products) !== null && _upsellingProducts$pr !== void 0 && _upsellingProducts$pr.length && !upsellingProducts.loading) {
        setCanOpenUpselling && setCanOpenUpselling(true);
      } else if (!(upsellingProducts !== null && upsellingProducts !== void 0 && (_upsellingProducts$pr2 = upsellingProducts.products) !== null && _upsellingProducts$pr2 !== void 0 && _upsellingProducts$pr2.length) && !upsellingProducts.loading && !canOpenUpselling && openUpselling) {
        handleUpsellingPage();
      }
    }
  }, [upsellingProducts.loading, upsellingProducts === null || upsellingProducts === void 0 ? void 0 : upsellingProducts.products.length]);
  var handleFormProduct = function handleFormProduct(product) {
    setActualProduct(product);
    setModalIsOpen(true);
  };
  var handleSaveProduct = function handleSaveProduct() {
    setActualProduct(null);
    setModalIsOpen(false);
  };
  var UpsellingLayout = function UpsellingLayout() {
    var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
        key: i
      }, BeforeElement);
    }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
      return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
        key: i
      }, props));
    }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.UpsellingContainer, null, !upsellingProducts.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !upsellingProducts.error ? upsellingProducts.products.map(function (product, i) {
      return /*#__PURE__*/_react.default.createElement(_styles.Item, {
        key: product.id,
        name: product.name
      }, /*#__PURE__*/_react.default.createElement(_styles.Image, null, /*#__PURE__*/_react.default.createElement("img", {
        src: product.images,
        alt: "product-".concat(i),
        width: "150px",
        height: "150px",
        loading: "lazy"
      })), /*#__PURE__*/_react.default.createElement(_styles.Details, null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", {
        title: product.name
      }, product.name)), /*#__PURE__*/_react.default.createElement("p", null, parsePrice(product.price)), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
        color: "primary",
        onClick: function onClick() {
          return handleFormProduct(product);
        }
      }, t('ADD', 'Add'))));
    }) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, upsellingProducts.message)) : _toConsumableArray(Array(8)).map(function (item, i) {
      return /*#__PURE__*/_react.default.createElement(_styles.SkeletonContainer, {
        key: i
      }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
        width: 150,
        height: 250
      }));
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
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isCustomMode ? /*#__PURE__*/_react.default.createElement(UpsellingLayout, null) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !canOpenUpselling || (upsellingProducts === null || upsellingProducts === void 0 || (_upsellingProducts$pr3 = upsellingProducts.products) === null || _upsellingProducts$pr3 === void 0 ? void 0 : _upsellingProducts$pr3.length) === 0 ? '' : /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('WANT_SOMETHING_ELSE', 'Do you want something else?'),
    open: openUpselling,
    onClose: function onClose() {
      return handleUpsellingPage();
    },
    width: "80%"
  }, /*#__PURE__*/_react.default.createElement(UpsellingLayout, null), /*#__PURE__*/_react.default.createElement(_styles.CloseUpselling, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: "secondary",
    outline: true,
    onClick: function onClick() {
      return handleUpsellingPage(false);
    }
  }, t('NO_THANKS', 'No, Thanks'))))), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    open: modalIsOpen,
    onClose: function onClose() {
      return setModalIsOpen(false);
    },
    width: "70%",
    padding: "0",
    closeOnBackdrop: true
  }, actualProduct && /*#__PURE__*/_react.default.createElement(_ProductForm.ProductForm, {
    product: actualProduct,
    businessId: actualProduct.api.businessId,
    businessSlug: business.slug,
    onSave: function onSave() {
      return handleSaveProduct();
    }
  })));
};
var UpsellingPage = exports.UpsellingPage = function UpsellingPage(props) {
  var UpsellingPageProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: UpsellingPageUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.UpsellingPage, UpsellingPageProps);
};