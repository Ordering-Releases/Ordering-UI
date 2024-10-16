"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfessionalProfile = void 0;
var _react = _interopRequireDefault(require("react"));
var _BusinessPreorder = require("../BusinessPreorder");
var _orderingComponentsExternal = require("ordering-components-external");
var _FaUserAlt = _interopRequireDefault(require("@meronex/icons/fa/FaUserAlt"));
var _styles = require("./styles");
var _Buttons = require("../../styles/Buttons");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var ProfessionalProfile = exports.ProfessionalProfile = function ProfessionalProfile(props) {
  var currentProfessional = props.currentProfessional,
    handleChangeProfessionalSelected = props.handleChangeProfessionalSelected,
    onClose = props.onClose;
  var _useLanguage = (0, _orderingComponentsExternal.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useUtils = (0, _orderingComponentsExternal.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var handleSelectProfessional = function handleSelectProfessional() {
    handleChangeProfessionalSelected(currentProfessional);
    onClose && onClose();
  };
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.PhotoWrapper, null, currentProfessional !== null && currentProfessional !== void 0 && currentProfessional.photo ? /*#__PURE__*/_react.default.createElement(_styles.ProfessionalPhoto, {
    bgimage: optimizeImage(currentProfessional === null || currentProfessional === void 0 ? void 0 : currentProfessional.photo, 'h_200,c_limit')
  }) : /*#__PURE__*/_react.default.createElement(_FaUserAlt.default, null)), /*#__PURE__*/_react.default.createElement(_styles.NameWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, currentProfessional === null || currentProfessional === void 0 ? void 0 : currentProfessional.name, " ", currentProfessional === null || currentProfessional === void 0 ? void 0 : currentProfessional.lastname)), /*#__PURE__*/_react.default.createElement(_styles.Divider, null), /*#__PURE__*/_react.default.createElement(_styles.ScheduleWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('SCHEDULE', 'Schedule')), currentProfessional !== null && currentProfessional !== void 0 && currentProfessional.schedule ? /*#__PURE__*/_react.default.createElement(_BusinessPreorder.BusinessPreorder, {
    business: currentProfessional,
    isProfessional: true,
    isDisabled: true,
    maxDays: 40,
    useOrderContext: false
  }) : /*#__PURE__*/_react.default.createElement("p", null, t('NO_SCHEDULE', 'No schedule'))), /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: function onClick() {
      return handleSelectProfessional();
    },
    color: "primary"
  }, t('BOOK', 'Book'))));
};