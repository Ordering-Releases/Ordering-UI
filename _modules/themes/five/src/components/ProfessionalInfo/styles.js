"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewWrapper = exports.ReviewQualityTextContainer = exports.ReviewQualityContainer = exports.ReviewItemContatiner = exports.ReviewBarContainer = exports.ReviewBar = exports.ProfessionalPhoto = exports.PhotoWrapper = exports.OccupationWrapper = exports.NotReviewed = exports.InfoWrapper = exports.Divider = exports.Description = exports.Container = exports.Comment = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _react = _interopRequireDefault(require("react"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15;
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _taggedTemplateLiteral(e, t) { return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })); }
var Container = exports.Container = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  padding: 30px 20px 0px 20px;\n"])));
var PhotoWrapper = exports.PhotoWrapper = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n\n  svg {\n    width: 220px;\n    height: 200px;\n  }\n"])));
var ProfessionalPhotoStyled = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n  position: relative;\n  background-repeat: no-repeat, repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  height: 298px;\n  width: 314px;\n  min-width: 300px;\n  border-radius: 7.6px;\n  margin-bottom: 36px;\n"])));
var ProfessionalPhoto = exports.ProfessionalPhoto = function ProfessionalPhoto(props) {
  var style = {};
  if (props.bgimage) {
    style.backgroundImage = "url(".concat(props.bgimage, ")");
  }
  return /*#__PURE__*/_react.default.createElement(ProfessionalPhotoStyled, _extends({}, props, {
    style: style
  }), props.children);
};
var InfoWrapper = exports.InfoWrapper = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  h2 {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 34px;\n    margin-top: 0px;\n    margin-bottom: 4px;\n  }\n"])));
var OccupationWrapper = exports.OccupationWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 13px;\n  > p {\n    margin: 0;\n    font-weight: 400;\n    font-size: 16px;\n  }\n"])));
var Description = exports.Description = _styledComponents.default.p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  margin-top: 0px;\n  margin-bottom: 19px;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n"])));
var Divider = exports.Divider = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  background: ", ";\n  margin-left: -20px;\n  width: calc(100% + 40px);\n  height: 8px;\n"])), function (props) {
  return props.theme.colors.grayDividerColor;
});
var ReviewWrapper = exports.ReviewWrapper = _styledComponents.default.div(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  margin-top: 25px;\n  > h2 {\n    font-weight: 600;\n    font-size: 20px;\n    line-height: 30px;\n    margin-top: 0px;\n    margin-bottom: 15px;\n  }\n"])));
var ReviewItemContatiner = exports.ReviewItemContatiner = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  margin-bottom: 40px;\n"])));
var ReviewQualityContainer = exports.ReviewQualityContainer = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));
var ReviewBarContainer = exports.ReviewBarContainer = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  margin: 15px 0;\n"])));
var ReviewBarStyled = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  height: 6px;\n  border-radius: 10px;\n  background: ", ";\n"])), function (props) {
  return "linear-gradient(to right, ".concat(props.theme.colors.headingColor, " ").concat(props.percentage, "%, ").concat(props.theme.colors.grayDividerColor, " ").concat(props.percentage, "%)");
});
var ReviewBar = exports.ReviewBar = function ReviewBar(props) {
  return /*#__PURE__*/_react.default.createElement(ReviewBarStyled, props, props.children);
};
var ReviewQualityTextContainer = exports.ReviewQualityTextContainer = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  p {\n    margin: 0px;\n    color: ", ";\n    font-size: 12px;\n  }\n"])), function (props) {
  return props.theme.colors.lightGray;
});
var Comment = exports.Comment = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  font-size: 12px;\n  margin: 25px 0;\n"])));
var NotReviewed = exports.NotReviewed = _styledComponents.default.p(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  font-size: 14px;\n"])));