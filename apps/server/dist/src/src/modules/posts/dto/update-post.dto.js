"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.UpdatePostDto = void 0;
var mapped_types_1 = require("@nestjs/mapped-types");
var create_post_dto_1 = require("./create-post.dto");
var UpdatePostDto = /** @class */ (function (_super) {
    __extends(UpdatePostDto, _super);
    function UpdatePostDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UpdatePostDto;
}((0, mapped_types_1.PartialType)(create_post_dto_1.CreatePostDto)));
exports.UpdatePostDto = UpdatePostDto;
