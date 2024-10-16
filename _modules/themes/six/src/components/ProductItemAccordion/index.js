"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductItemAccordion = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TiPencil = _interopRequireDefault(require("@meronex/icons/ti/TiPencil"));
var _IosArrowDown = _interopRequireDefault(require("@meronex/icons/ios/IosArrowDown"));
var _VscTrash = _interopRequireDefault(require("@meronex/icons/vsc/VscTrash"));
var _FiMinusCircle = _interopRequireDefault(require("@meronex/icons/fi/FiMinusCircle"));
var _FiPlusCircle = _interopRequireDefault(require("@meronex/icons/fi/FiPlusCircle"));
var _orderingComponentsExternal = require("ordering-components-external");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ProductItemAccordion = exports.ProductItemAccordion = function ProductItemAccordion(props) {
  var _props$beforeElements, _props$beforeComponen, _product$valid, _props$afterComponent, _props$afterElements;
  var isCartPending = props.isCartPending,
    isCartProduct = props.isCartProduct,
    isSidebar = props.isSidebar,
    product = props.product,
    changeQuantity = props.changeQuantity,
    getProductMax = props.getProductMax,
    onDeleteProduct = props.onDeleteProduct,
    onEditProduct = props.onEditProduct;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    parsePrice = _useUtils2[0].parsePrice;
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    setActive = _useState2[0],
    setActiveState = _useState2[1];
  var _useState3 = (0, _react.useState)('0px'),
    _useState4 = _slicedToArray(_useState3, 2),
    setHeight = _useState4[0],
    setHeightState = _useState4[1];
  var _useState5 = (0, _react.useState)('accordion__icon'),
    _useState6 = _slicedToArray(_useState5, 2),
    setRotate = _useState6[0],
    setRotateState = _useState6[1];
  var _useState7 = (0, _react.useState)(1),
    _useState8 = _slicedToArray(_useState7, 2),
    productQuantity = _useState8[0],
    setProductQuantity = _useState8[1];
  var content = (0, _react.useRef)(null);
  var productSelect = (0, _react.useRef)(null);
  var productActionsEdit = (0, _react.useRef)(null);
  var productActionsDelete = (0, _react.useRef)(null);
  var _productInfo = function productInfo() {
    if (isCartProduct) {
      var _product$ingredients, _product$options;
      var ingredients = JSON.parse(JSON.stringify(Object.values((_product$ingredients = product.ingredients) !== null && _product$ingredients !== void 0 ? _product$ingredients : {})));
      var options = JSON.parse(JSON.stringify(Object.values((_product$options = product.options) !== null && _product$options !== void 0 ? _product$options : {})));
      options = options.map(function (option) {
        var _option$suboptions;
        option.suboptions = Object.values((_option$suboptions = option.suboptions) !== null && _option$suboptions !== void 0 ? _option$suboptions : {});
        return option;
      });
      return _objectSpread(_objectSpread({}, _productInfo), {}, {
        ingredients: ingredients,
        options: options
      });
    }
    return product;
  };
  var toggleAccordion = function toggleAccordion(e) {
    var _productSelect$curren, _productActionsEdit$c, _productActionsDelete;
    var isActionsClick = ((_productSelect$curren = productSelect.current) === null || _productSelect$curren === void 0 ? void 0 : _productSelect$curren.contains(e.target)) || ((_productActionsEdit$c = productActionsEdit.current) === null || _productActionsEdit$c === void 0 ? void 0 : _productActionsEdit$c.contains(e.target)) || ((_productActionsDelete = productActionsDelete.current) === null || _productActionsDelete === void 0 ? void 0 : _productActionsDelete.contains(e.target));
    if (!(product !== null && product !== void 0 && product.valid_menu) && isCartProduct || isActionsClick) return;
    setActiveState(setActive === '' ? 'active' : '');
    setHeightState(setActive === 'active' ? '0px' : "".concat(content.current.scrollHeight, "px"));
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  };
  var handleChangeQuantity = function handleChangeQuantity(value) {
    if (parseInt(value) <= 0) {
      onDeleteProduct(product);
    } else {
      changeQuantity(product, parseInt(value));
    }
  };
  var getFormattedSubOptionName = function getFormattedSubOptionName(_ref) {
    var quantity = _ref.quantity,
      name = _ref.name,
      position = _ref.position,
      price = _ref.price;
    var pos = position ? "(".concat(position, ")") : '';
    return "".concat(quantity, " x ").concat(name, " ").concat(pos, " +").concat(price);
  };
  var Increment = function Increment() {
    var _productQuantity = productQuantity;
    _productQuantity++;
    setProductQuantity(_productQuantity);
    handleChangeQuantity(_productQuantity);
  };
  var Decrement = function Decrement() {
    var _productQuantity = productQuantity;
    _productQuantity--;
    setProductQuantity(_productQuantity);
    handleChangeQuantity(_productQuantity);
  };
  (0, _react.useEffect)(function () {
    setProductQuantity(product.quantity);
  }, [product]);
  (0, _react.useEffect)(function () {
    if (props !== null && props !== void 0 && props.individualBusinessCart || props !== null && props !== void 0 && props.isOrderPage) {
      setActiveState('active');
      setHeightState("".concat(content.current.scrollHeight, "px"));
      setRotateState('accordion__icon rotate');
    } else {
      setActiveState('');
      setHeightState('0px');
      setRotateState('accordion__icon');
    }
  }, [props === null || props === void 0 ? void 0 : props.individualBusinessCart, props === null || props === void 0 ? void 0 : props.isOrderPage]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.AccordionSection, null, /*#__PURE__*/_react.default.createElement(_styles.Accordion, {
    isValid: (_product$valid = product === null || product === void 0 ? void 0 : product.valid) !== null && _product$valid !== void 0 ? _product$valid : true,
    className: "product accordion ".concat(setActive),
    onClick: function onClick(e) {
      return toggleAccordion(e);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.ProductInfo, {
    className: "info"
  }, (product === null || product === void 0 ? void 0 : product.images) && /*#__PURE__*/_react.default.createElement(_styles.WrapperProductImage, null, /*#__PURE__*/_react.default.createElement(_styles.ProductImage, {
    bgimage: product === null || product === void 0 ? void 0 : product.images
  })), /*#__PURE__*/_react.default.createElement(_styles.ContentInfo, {
    isSidebar: isSidebar
  }, /*#__PURE__*/_react.default.createElement("h3", null, !(isCartProduct && !isCartPending && getProductMax) && /*#__PURE__*/_react.default.createElement(_styles.ProductQuantity, null, product === null || product === void 0 ? void 0 : product.quantity), product.name), ((product === null || product === void 0 ? void 0 : product.valid) || !isCartProduct) && /*#__PURE__*/_react.default.createElement(_styles.ProductPrice, {
    className: "prod-price"
  }, /*#__PURE__*/_react.default.createElement("span", null, parsePrice(product.total || product.price)), (_productInfo().ingredients.length > 0 || _productInfo().options.length > 0 || product.comment) && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement(_IosArrowDown.default, {
    className: "".concat(setRotate)
  }))))), isCartProduct && !isCartPending && (product === null || product === void 0 ? void 0 : product.valid_menu) && !(product !== null && product !== void 0 && product.valid_quantity) && /*#__PURE__*/_react.default.createElement(_styles.ProductError, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActionsEdit, {
    ref: productActionsEdit,
    onClick: function onClick() {
      return onEditProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_TiPencil.default, {
    color: "#6C757D"
  })), /*#__PURE__*/_react.default.createElement(_styles.ProductActionsDelete, {
    ref: productActionsDelete,
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, {
    color: "#6C757D"
  }))), /*#__PURE__*/_react.default.createElement(_styles.ProductNotAvailable, null, t('NOT_AVAILABLE', 'Not available'))), !(product !== null && product !== void 0 && product.valid_menu) && isCartProduct && !isCartPending && /*#__PURE__*/_react.default.createElement(_styles.ProductError, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActionsDelete, {
    ref: productActionsDelete,
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, {
    color: "#6C757D"
  }))), /*#__PURE__*/_react.default.createElement(_styles.ProductNotAvailable, null, t('NOT_AVAILABLE', 'Not available')))), /*#__PURE__*/_react.default.createElement(_styles.AccordionContent, {
    ref: content,
    style: {
      maxHeight: "".concat(setHeight)
    }
  }, _productInfo().ingredients.length > 0 && _productInfo().ingredients.some(function (ingredient) {
    return !ingredient.selected;
  }) && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, /*#__PURE__*/_react.default.createElement("p", null, t('INGREDIENTS', 'Ingredients')), _productInfo().ingredients.map(function (ingredient) {
    return !ingredient.selected && /*#__PURE__*/_react.default.createElement("li", {
      className: "ingredient",
      key: ingredient.id
    }, /*#__PURE__*/_react.default.createElement("span", null, t('NO', 'No'), " ", ingredient.name));
  })), _productInfo().options.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, null, _productInfo().options.map(function (option) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: option.id
    }, /*#__PURE__*/_react.default.createElement("p", null, option.name), /*#__PURE__*/_react.default.createElement(_styles.ProductOptionsList, {
      className: "suboption"
    }, option.suboptions.map(function (suboption) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: suboption.id
      }, /*#__PURE__*/_react.default.createElement("span", null, getFormattedSubOptionName({
        quantity: suboption.quantity,
        name: suboption.name,
        position: suboption.position !== 'whole' ? t(suboption.position.toUpperCase(), suboption.position) : '',
        price: parsePrice(suboption.price)
      })));
    })));
  })), product.comment && /*#__PURE__*/_react.default.createElement(_styles.ProductComment, null, /*#__PURE__*/_react.default.createElement("p", null, t('SPECIAL_COMMENT', 'Special Comment')), /*#__PURE__*/_react.default.createElement("span", null, product.comment))), /*#__PURE__*/_react.default.createElement(_styles.CartActions, null, isCartProduct && !isCartPending && getProductMax && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, product && getProductMax(product) > 0 && /*#__PURE__*/_react.default.createElement("div", {
    className: "incdec-control"
  }, /*#__PURE__*/_react.default.createElement(_FiMinusCircle.default, {
    onClick: Decrement,
    className: "".concat(productQuantity <= 1 ? 'disabled' : '')
  }), /*#__PURE__*/_react.default.createElement("span", null, productQuantity), /*#__PURE__*/_react.default.createElement(_FiPlusCircle.default, {
    onClick: Increment,
    className: "".concat(getProductMax(product) <= 0 || product.quantity >= getProductMax(product) ? 'disabled' : '')
  }))), isCartProduct && !isCartPending && /*#__PURE__*/_react.default.createElement(_styles.ProductActions, null, /*#__PURE__*/_react.default.createElement(_styles.ProductActionsEdit, {
    ref: productActionsEdit,
    onClick: function onClick() {
      return onEditProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_TiPencil.default, {
    color: "#6C757D"
  })), /*#__PURE__*/_react.default.createElement(_styles.ProductActionsDelete, {
    ref: productActionsDelete,
    onClick: function onClick() {
      return onDeleteProduct(product);
    },
    disabled: orderState.loading
  }, /*#__PURE__*/_react.default.createElement(_VscTrash.default, {
    color: "#6C757D"
  }))))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};