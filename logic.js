"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var chalk_1 = require("chalk");
var ora = require("ora");
var url = "https://us-central1-myreddit-clone.cloudfunctions.net";
exports.addContact = function (answers) {
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var spinner, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    spinner = ora('Adding contact ...').start();
                    return [4 /*yield*/, axios_1.default.post(url + "/addContact", answers)];
                case 1:
                    response = _a.sent();
                    spinner.stop();
                    console.log(chalk_1.default.magentaBright('New contact added'));
                    return [3 /*break*/, 3];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); })();
};
exports.getContact = function (id) {
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var spinner, response, obj, key, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    spinner = ora('Fetching contact ...').start();
                    return [4 /*yield*/, axios_1.default.get(url + "/getContact/" + id + "/")];
                case 1:
                    response = _a.sent();
                    spinner.clear();
                    spinner.stop();
                    obj = response.data;
                    for (key in obj) {
                        console.log(chalk_1.default.blue('==============='));
                        console.log(chalk_1.default.greenBright("id: " + id + " \nFirstname: " + obj[key].firstname + " \nLastname: " + obj[key].lastname + " \nPhone Number: " + obj[key].phone + " \nEmail: " + obj[key].email));
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); })();
};
exports.updateContact = function (contact) {
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var spinner, response, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    spinner = ora('Updating contact ...').start();
                    return [4 /*yield*/, axios_1.default.put(url + "/updateContact/" + contact.id, contact)];
                case 1:
                    response = _a.sent();
                    spinner.stop();
                    console.log(chalk_1.default.cyanBright('Contact updated'));
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); })();
};
exports.deleteContact = function (id) {
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var spinner, response, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    spinner = ora('Deleting contact ...').start();
                    return [4 /*yield*/, axios_1.default.delete(url + "/deleteContact/" + id)];
                case 1:
                    response = _a.sent();
                    spinner.stop();
                    console.log(chalk_1.default.bgMagentaBright('Contact deleted'));
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); })();
};
exports.getContactList = function () {
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var spinner, response, obj, key, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    spinner = ora('Fetching All Contacts ...').start();
                    return [4 /*yield*/, axios_1.default.get(url + "/getContactList")];
                case 1:
                    response = _a.sent();
                    spinner.stop();
                    obj = response.data.res;
                    console.log(chalk_1.default.green('**********=== Contacts List===**********'));
                    for (key in obj) {
                        console.log(chalk_1.default.blue('==============='));
                        console.log(chalk_1.default.greenBright("id: " + key + " \nFirstname: " + obj[key].firstname + " \nLastname: " + obj[key].lastname + " \nPhone Number: " + obj[key].phone + " \nEmail: " + obj[key].email));
                    }
                    return [3 /*break*/, 3];
                case 2:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); })();
};
