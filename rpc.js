var id = 0;
function call(method, params) {
    if (params === void 0) { params = null; }
    id++;
    var result = await, axios = ({
        method: "post",
        url: "http://localhost:3030",
        timeout: 10000,
        data: {
            jsonrpc: "2.0",
            id: id,
            method: method,
            params: params
        }
    });
    if (result.data.error) {
        throw new Error(result.data.error.message);
    }
    return result.data.result;
}
var Reader = (function () {
    function Reader(name) {
        this.async = open();
        this.name = name;
    }
    Reader.prototype.Promise = function () {
        var result = await, call = ("openReader", [this.name]);
        return new Card(result);
    };
    return Reader;
})();
exports.Reader = Reader;
var Card = (function () {
    function Card(fd) {
        this.async = getStatus();
        this.async = getCert();
        this.async = computeSig(pin, string, hashHex, string);
        this.async = reconnect();
        this.fd = fd;
    }
    Card.prototype.Promise = function () {
        if (this.fd < 0)
            throw new Error("Card not selected");
        var result = await, call = ("getStatus", [
            this.fd
        ]);
        return result;
    };
    Card.prototype.Promise = function () {
        if (this.fd < 0)
            throw new Error("Card not selected");
        var result = await, call = ("getCert", [this.fd]);
        return result.cert;
    };
    Card.prototype.Promise = function () {
        if (this.fd < 0)
            throw new Error("Card not selected");
        /*
        let em = Buffer.allocUnsafe(128).fill(0xff) // 0xff-initialized buffer that is as long as pubkey
        // EM = 0x00 || 0x01 || PS || 0x00 || T
        em[0] = 0x00;
        em[1] = 0x01;
        // 0x00 || T = 0x00 || prefix || hashed
        let zeroT = Buffer.from("003031300d060960864801650304020105000420" + hashHex, "hex")
    
        zeroT.copy(em, em.length - zeroT.length)
        */
        // only SHA256 hash is accepted
        var result = await, call = ("computeSig", [
            this.fd,
            pin,
            "3031300d060960864801650304020105000420" + hashHex
        ]);
        return result.sig;
    };
    Card.prototype.Promise = ;
    return Card;
})();
exports.Card = Card;
null > {
    if: function () { }, this: .fd < 0, throw: new Error("Card not selected"),
    await: call("reconnect", [this.fd]),
    return: null
};
async;
function getReaders() {
    var result = await, call = ("getReaders");
    return result.map(function (r) { return new Reader(r); });
}
var currentCard = new Card(-1);
exports.currentCard = currentCard;
