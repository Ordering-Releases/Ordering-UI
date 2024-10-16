"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _IosRadioButtonOff = _interopRequireDefault(require("@meronex/icons/ios/IosRadioButtonOff"));
var _RiRadioButtonFill = _interopRequireDefault(require("@meronex/icons/ri/RiRadioButtonFill"));
var _MdClose = _interopRequireDefault(require("@meronex/icons/md/MdClose"));
var _useWindowSize2 = require("../../../../../hooks/useWindowSize");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _orderingComponentsExternal = require("ordering-components-external");
var _styles = require("./styles");
var _NotFoundSource = require("../NotFoundSource");
var _Buttons = require("../../styles/Buttons");
var _Modal = require("../Modal");
var _AddressForm = require("../AddressForm");
var _Confirm = require("../Confirm");
var _styledComponents = require("styled-components");
var _utils = require("../../../../../utils");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
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
var AddressListUI = function AddressListUI(props) {
  var _theme$profile, _theme$profile2, _theme$profile3, _theme$profile4, _theme$profile5, _addressList$addresse2, _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var actionStatus = props.actionStatus,
    addressList = props.addressList,
    handleDelete = props.handleDelete,
    setAddressList = props.setAddressList,
    handleSetDefault = props.handleSetDefault,
    isModal = props.isModal,
    isPopover = props.isPopover,
    isProductForm = props.isProductForm,
    userId = props.userId,
    userCustomerSetup = props.userCustomerSetup,
    isEnableContinueButton = props.isEnableContinueButton,
    setCustomerModalOpen = props.setCustomerModalOpen,
    isCustomerMode = props.isCustomerMode,
    isFromCheckout = props.isFromCheckout,
    setIsAddressFormOpen = props.setIsAddressFormOpen,
    isProfile = props.isProfile,
    isMobile = props.isMobile,
    onCancel = props.onCancel,
    isOpenUserData = props.isOpenUserData;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useOrder = (0, _orderingComponentsExternal.useOrder)(),
    _useOrder2 = _slicedToArray(_useOrder, 1),
    orderState = _useOrder2[0];
  var _useEvent = (0, _orderingComponentsExternal.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    curAddress = _useState2[0],
    setCurAddress = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    addressOpen = _useState4[0],
    setAddressOpen = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useCustomer = (0, _orderingComponentsExternal.useCustomer)(),
    _useCustomer2 = _slicedToArray(_useCustomer, 1),
    user = _useCustomer2[0].user;
  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
    width = _useWindowSize.width;
  var isCompletedLayout = width < 769 || isProfile;
  var uniqueAddressesList = addressList.addresses && addressList.addresses.filter(function (address, i, self) {
    return address.address && i === self.findIndex(function (obj) {
      return address.address === obj.address && address.address_notes === obj.address_notes && address.zipcode === obj.zipcode && address.internal_number === obj.internal_number;
    });
  }) || [];
  var showAddress = !(theme !== null && theme !== void 0 && (_theme$profile = theme.profile) !== null && _theme$profile !== void 0 && (_theme$profile = _theme$profile.components) !== null && _theme$profile !== void 0 && (_theme$profile = _theme$profile.address_list) !== null && _theme$profile !== void 0 && (_theme$profile = _theme$profile.components) !== null && _theme$profile !== void 0 && (_theme$profile = _theme$profile.address) !== null && _theme$profile !== void 0 && _theme$profile.hidden);
  var showIcons = !(theme !== null && theme !== void 0 && (_theme$profile2 = theme.profile) !== null && _theme$profile2 !== void 0 && (_theme$profile2 = _theme$profile2.components) !== null && _theme$profile2 !== void 0 && (_theme$profile2 = _theme$profile2.address_list) !== null && _theme$profile2 !== void 0 && (_theme$profile2 = _theme$profile2.components) !== null && _theme$profile2 !== void 0 && (_theme$profile2 = _theme$profile2.icons) !== null && _theme$profile2 !== void 0 && _theme$profile2.hidden);
  var showZipcode = !(theme !== null && theme !== void 0 && (_theme$profile3 = theme.profile) !== null && _theme$profile3 !== void 0 && (_theme$profile3 = _theme$profile3.components) !== null && _theme$profile3 !== void 0 && (_theme$profile3 = _theme$profile3.address_list) !== null && _theme$profile3 !== void 0 && (_theme$profile3 = _theme$profile3.components) !== null && _theme$profile3 !== void 0 && (_theme$profile3 = _theme$profile3.zipcode) !== null && _theme$profile3 !== void 0 && _theme$profile3.hidden);
  var showInternalNumber = !(theme !== null && theme !== void 0 && (_theme$profile4 = theme.profile) !== null && _theme$profile4 !== void 0 && (_theme$profile4 = _theme$profile4.components) !== null && _theme$profile4 !== void 0 && (_theme$profile4 = _theme$profile4.address_list) !== null && _theme$profile4 !== void 0 && (_theme$profile4 = _theme$profile4.components) !== null && _theme$profile4 !== void 0 && (_theme$profile4 = _theme$profile4.internal_number) !== null && _theme$profile4 !== void 0 && _theme$profile4.hidden);
  var notFoundImage = theme === null || theme === void 0 || (_theme$profile5 = theme.profile) === null || _theme$profile5 === void 0 || (_theme$profile5 = _theme$profile5.components) === null || _theme$profile5 === void 0 || (_theme$profile5 = _theme$profile5.address_list) === null || _theme$profile5 === void 0 || (_theme$profile5 = _theme$profile5.components) === null || _theme$profile5 === void 0 ? void 0 : _theme$profile5.image;
  var openAddress = function openAddress(address) {
    setCurAddress(address);
    setAddressOpen(true);
    setIsAddressFormOpen && setIsAddressFormOpen(true);
    var container = window.document.getElementsByClassName('form_edit')[0];
    container && (0, _utils.scrollTo)(container, 0, 500);
  };
  var handleSaveAddress = function handleSaveAddress(address) {
    var found = false;
    var addresses = addressList.addresses.map(function (_address) {
      if ((_address === null || _address === void 0 ? void 0 : _address.id) === (address === null || address === void 0 ? void 0 : address.id)) {
        Object.assign(_address, address);
        found = true;
      } else if (address.default) {
        _address.default = false;
      }
      return _address;
    });
    if (!found) {
      addresses.push(address);
    }
    setAddressList(_objectSpread(_objectSpread({}, addressList), {}, {
      addresses: addresses
    }));
    if (userCustomerSetup) {
      handleSetAddress(address);
      return;
    }
    handleCloseAddressForm();
  };
  var handleSetAddress = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(address) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(checkAddress(address) && isCustomerMode && (userCustomerSetup === null || userCustomerSetup === void 0 ? void 0 : userCustomerSetup.id) === (user === null || user === void 0 ? void 0 : user.id) && !isFromCheckout)) {
              _context.next = 5;
              break;
            }
            events.emit('go_to_page', {
              page: 'search'
            });
            handleSetDefault(address, userCustomerSetup, true);
            setCustomerModalOpen && setCustomerModalOpen(false);
            return _context.abrupt("return");
          case 5:
            handleCloseAddressForm();
            _context.next = 8;
            return handleSetDefault(address, userCustomerSetup);
          case 8:
            onCancel && onCancel();
          case 9:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function handleSetAddress(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  var handleDeleteClick = function handleDeleteClick(address) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_ADDRESS', 'Are you sure that you want to delete the address?'),
      handleOnAccept: function handleOnAccept() {
        handleDelete(address);
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
      }
    });
  };
  var checkAddress = function checkAddress(address) {
    var props = ['address', 'address_notes', 'zipcode', 'location', 'internal_number'];
    var values = [];
    if (userCustomerSetup) {
      return address.default;
    }
    props.forEach(function (prop) {
      if (address !== null && address !== void 0 && address[prop]) {
        if (prop === 'location') {
          var _orderState$options, _orderState$options2;
          values.push((address === null || address === void 0 ? void 0 : address[prop].lat) === (orderState === null || orderState === void 0 || (_orderState$options = orderState.options) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options.address) === null || _orderState$options === void 0 || (_orderState$options = _orderState$options[prop]) === null || _orderState$options === void 0 ? void 0 : _orderState$options.lat) && (address === null || address === void 0 ? void 0 : address[prop].lng) === (orderState === null || orderState === void 0 || (_orderState$options2 = orderState.options) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2.address) === null || _orderState$options2 === void 0 || (_orderState$options2 = _orderState$options2[prop]) === null || _orderState$options2 === void 0 ? void 0 : _orderState$options2.lng));
        } else {
          var _orderState$options3;
          values.push((address === null || address === void 0 ? void 0 : address[prop]) === (orderState === null || orderState === void 0 || (_orderState$options3 = orderState.options) === null || _orderState$options3 === void 0 || (_orderState$options3 = _orderState$options3.address) === null || _orderState$options3 === void 0 ? void 0 : _orderState$options3[prop]));
        }
      } else {
        var _orderState$options4, _orderState$options5;
        values.push((orderState === null || orderState === void 0 || (_orderState$options4 = orderState.options) === null || _orderState$options4 === void 0 || (_orderState$options4 = _orderState$options4.address) === null || _orderState$options4 === void 0 ? void 0 : _orderState$options4[prop]) === null || (orderState === null || orderState === void 0 || (_orderState$options5 = orderState.options) === null || _orderState$options5 === void 0 || (_orderState$options5 = _orderState$options5.address) === null || _orderState$options5 === void 0 ? void 0 : _orderState$options5[prop]) === '');
      }
    });
    return values.every(function (value) {
      return value;
    });
  };
  var handleCloseAddressForm = function handleCloseAddressForm() {
    setAddressOpen(false);
    setIsAddressFormOpen && setIsAddressFormOpen(false);
  };

  /**
   * Close modals and alerts
   */
  (0, _react.useEffect)(function () {
    return function () {
      setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
      handleCloseAddressForm();
    };
  }, []);
  (0, _react.useEffect)(function () {
    var _addressList$addresse;
    if ((addressList === null || addressList === void 0 || (_addressList$addresse = addressList.addresses) === null || _addressList$addresse === void 0 ? void 0 : _addressList$addresse.length) === 0 && !addressList.loading && isCustomerMode) {
      openAddress({});
    }
  }, [addressList.loading, addressList === null || addressList === void 0 || (_addressList$addresse2 = addressList.addresses) === null || _addressList$addresse2 === void 0 ? void 0 : _addressList$addresse2.length]);
  var AddressListCallcenterLayout = function AddressListCallcenterLayout(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/_react.default.createElement(_styles.AddressHalfContainer, null, /*#__PURE__*/_react.default.createElement(_styles.List, {
      halfWidth: addressOpen,
      id: "address_list"
    }, children), addressOpen && /*#__PURE__*/_react.default.createElement(_styles.AddressFormContainer, {
      isCustomerMode: isCustomerMode,
      isOpenUserData: isOpenUserData
    }, /*#__PURE__*/_react.default.createElement(_styles.TitleFormContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CloseIcon, null, /*#__PURE__*/_react.default.createElement(_MdClose.default, {
      onClick: function onClick() {
        return handleCloseAddressForm();
      }
    })), /*#__PURE__*/_react.default.createElement("h1", null, t('ADD_NEW_ADDRESS', 'Add new address'))), /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
      userId: userId,
      addressesList: addressList === null || addressList === void 0 ? void 0 : addressList.addresses,
      useValidationFileds: true,
      address: curAddress,
      onCancel: function onCancel() {
        return handleCloseAddressForm();
      },
      onSaveAddress: handleSaveAddress,
      userCustomerSetup: userCustomerSetup
    })));
  };
  var AddressListContent = function AddressListContent() {
    var _addressList$addresse3, _addressList$addresse4, _orderState$options6, _addressList$addresse5, _theme$images, _addressList$error$, _orderState$options7;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (!isPopover || !addressOpen) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !isCompletedLayout && /*#__PURE__*/_react.default.createElement(_styles.TitleAddress, null, t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?')), /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      className: "add",
      outline: true,
      color: isEnableContinueButton && (addressList === null || addressList === void 0 || (_addressList$addresse3 = addressList.addresses) === null || _addressList$addresse3 === void 0 ? void 0 : _addressList$addresse3.length) > 0 ? 'secondary' : 'primary',
      onClick: function onClick() {
        return openAddress({});
      },
      disabled: (orderState === null || orderState === void 0 ? void 0 : orderState.loading) || actionStatus.loading,
      style: isCompletedLayout && !isMobile ? {
        flex: 1,
        width: 'fit-content'
      } : {}
    }, orderState !== null && orderState !== void 0 && orderState.loading || actionStatus.loading ? t('LOADING', 'Loading') : t('ADD_NEW_ADDRESS', 'Add New Address'))), isPopover && addressOpen && /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
      userId: userId,
      addressesList: addressList === null || addressList === void 0 ? void 0 : addressList.addresses,
      useValidationFileds: true,
      address: curAddress,
      onCancel: function onCancel() {
        return handleCloseAddressForm();
      },
      onSaveAddress: handleSaveAddress,
      userCustomerSetup: userCustomerSetup
    }), !addressList.loading && !actionStatus.loading && !orderState.loading && !addressList.error && (addressList === null || addressList === void 0 || (_addressList$addresse4 = addressList.addresses) === null || _addressList$addresse4 === void 0 ? void 0 : _addressList$addresse4.length) > 0 && _typeof((_orderState$options6 = orderState.options) === null || _orderState$options6 === void 0 ? void 0 : _orderState$options6.address) === 'object' && (!addressOpen && isPopover || isModal) && /*#__PURE__*/_react.default.createElement(_styles.AddressListUl, {
      id: "list"
    }, /*#__PURE__*/_react.default.createElement(_styles.AddressTitle, null, t('SELECT_ONE_OF_SAVED_PLACES', 'Select one of your saved places')), uniqueAddressesList.map(function (address) {
      return /*#__PURE__*/_react.default.createElement(_styles.AddressItem, {
        key: address === null || address === void 0 ? void 0 : address.id
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "wrapAddress",
        onClick: function onClick() {
          return handleSetAddress(address);
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "radio"
      }, checkAddress(address) ? /*#__PURE__*/_react.default.createElement(_RiRadioButtonFill.default, {
        className: "address-checked"
      }) : /*#__PURE__*/_react.default.createElement(_IosRadioButtonOff.default, null)), showIcons && /*#__PURE__*/_react.default.createElement("span", {
        className: checkAddress(address) ? 'selected-tag tag' : 'tag'
      }, (address === null || address === void 0 ? void 0 : address.tag) === 'home' && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.House, null), (address === null || address === void 0 ? void 0 : address.tag) === 'office' && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Building, null), (address === null || address === void 0 ? void 0 : address.tag) === 'favorite' && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Heart, null), (address === null || address === void 0 ? void 0 : address.tag) === 'other' && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.PlusLg, null)), (showAddress || showInternalNumber || showZipcode) && /*#__PURE__*/_react.default.createElement("div", {
        className: "address"
      }, showAddress && /*#__PURE__*/_react.default.createElement("span", null, address.address), /*#__PURE__*/_react.default.createElement("span", null, showInternalNumber && address.internal_number, " ", showZipcode && address.zipcode))), /*#__PURE__*/_react.default.createElement(_styles.AddressItemActions, {
        className: "form"
      }, /*#__PURE__*/_react.default.createElement("a", {
        className: actionStatus.loading ? 'disabled' : '',
        onClick: function onClick() {
          return openAddress(address);
        }
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Pencil, null)), /*#__PURE__*/_react.default.createElement("a", {
        className: actionStatus.loading || address.default ? 'disabled' : '',
        onClick: function onClick() {
          return handleDeleteClick(address);
        }
      }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Trash, null))));
    }), isEnableContinueButton && uniqueAddressesList.map(function (address) {
      return address.default && /*#__PURE__*/_react.default.createElement(_styles.ContinueButton, {
        key: address.id
      }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
        color: "primary",
        onClick: function onClick() {
          return handleSetAddress(address);
        }
      }, t('CONTINUE_WITH', 'Continue with'), ": ", address.address));
    })), !(addressList.loading || actionStatus.loading || orderState.loading) && !addressList.error && (addressList === null || addressList === void 0 || (_addressList$addresse5 = addressList.addresses) === null || _addressList$addresse5 === void 0 ? void 0 : _addressList$addresse5.length) === 0 && !isProductForm && /*#__PURE__*/_react.default.createElement(_styles.WrappNotAddresses, {
      isCustomerMode: isCustomerMode
    }, !isCustomerMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("img", {
      src: (_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.general) === null || _theme$images === void 0 ? void 0 : _theme$images.notFound,
      alt: "Not Found",
      width: "200px",
      height: "112px",
      loading: "lazy"
    }), /*#__PURE__*/_react.default.createElement("h1", null, t('NOT_FOUND_ADDRESS', 'Sorry, You don\'t seem to have any addresses.')))), !(addressList.loading || actionStatus.loading || orderState.loading) && addressList.error && addressList.error.length > 0 && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
      image: notFoundImage,
      content: ((_addressList$error$ = addressList.error[0]) === null || _addressList$error$ === void 0 ? void 0 : _addressList$error$.message) || addressList.error[0]
    }), !(addressList.loading || actionStatus.loading || orderState.loading) && _typeof((_orderState$options7 = orderState.options) === null || _orderState$options7 === void 0 ? void 0 : _orderState$options7.address) !== 'object' && !addressList.error && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
      content: t('NETWORK_ERROR', 'Network error, please reload the page')
    }), (addressList.loading || actionStatus.loading || orderState.loading) && !isProductForm && /*#__PURE__*/_react.default.createElement(_styles.AddressListUl, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      height: 50,
      count: 3,
      style: {
        marginBottom: '10px'
      }
    })));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.AddressListContainer, {
    id: "address_control",
    isLoading: (actionStatus === null || actionStatus === void 0 ? void 0 : actionStatus.loading) || (orderState === null || orderState === void 0 ? void 0 : orderState.loading),
    isCompletedLayout: isCompletedLayout
  }, !isCompletedLayout ? /*#__PURE__*/_react.default.createElement(AddressListCallcenterLayout, null, /*#__PURE__*/_react.default.createElement(AddressListContent, null)) : /*#__PURE__*/_react.default.createElement(AddressListContent, null), !isPopover && addressOpen && /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    title: t('WHAT_IS_YOUR_ADDRESS', 'What\'s your address?'),
    open: !isPopover && addressOpen && isCompletedLayout,
    onClose: function onClose() {
      return handleCloseAddressForm();
    }
  }, /*#__PURE__*/_react.default.createElement(_AddressForm.AddressForm, {
    userId: userId,
    addressesList: addressList === null || addressList === void 0 ? void 0 : addressList.addresses,
    useValidationFileds: true,
    address: curAddress,
    onSaveAddress: handleSaveAddress,
    userCustomerSetup: userCustomerSetup,
    onCancel: function onCancel() {
      return handleCloseAddressForm();
    }
  })), /*#__PURE__*/_react.default.createElement(_Confirm.Confirm, {
    title: t('SEARCH', 'Search'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
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
var AddressList = exports.AddressList = /*#__PURE__*/_react.default.memo(function (props) {
  var addressListProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: AddressListUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponentsExternal.AddressList, addressListProps);
});