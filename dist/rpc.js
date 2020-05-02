var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
import axios from "axios";
var id = 0;
export default function call(method, params) {
    if (params === void 0) { params = null; }
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id++;
                    return [4 /*yield*/, axios({
                            method: "post",
                            url: "http://localhost:3030",
                            timeout: 10000,
                            data: {
                                jsonrpc: "2.0",
                                id: id,
                                method: method,
                                params: params
                            }
                        })];
                case 1:
                    result = _a.sent();
                    if (result.data.error) {
                        throw new Error(result.data.error.message);
                    }
                    return [2 /*return*/, result.data.result];
            }
        });
    });
}
var Reader = /** @class */ (function () {
    function Reader(name) {
        this.name = name;
    }
    Reader.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, call("openReader", [this.name])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, new Card(result)];
                }
            });
        });
    };
    return Reader;
}());
export { Reader };
var Card = /** @class */ (function () {
    function Card(fd) {
        this.fd = fd;
    }
    Card.prototype.getStatus = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.fd < 0)
                            throw new Error("Card not selected");
                        return [4 /*yield*/, call("getStatus", [
                                this.fd
                            ])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    Card.prototype.getCert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.fd < 0)
                            throw new Error("Card not selected");
                        return [4 /*yield*/, call("getCert", [this.fd])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.cert];
                }
            });
        });
    };
    Card.prototype.computeSig = function (pin, hashHex) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.fd < 0)
                            throw new Error("Card not selected");
                        return [4 /*yield*/, call("computeSig", [
                                this.fd,
                                pin,
                                "3031300d060960864801650304020105000420" + hashHex
                            ])];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result.sig];
                }
            });
        });
    };
    Card.prototype.reconnect = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.fd < 0)
                            throw new Error("Card not selected");
                        return [4 /*yield*/, call("reconnect", [this.fd])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, null];
                }
            });
        });
    };
    return Card;
}());
export { Card };
export function getReaders() {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, call("getReaders")];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, result.map(function (r) { return new Reader(r); })];
            }
        });
    });
}
var currentCard = new Card(-1);
export { currentCard };
