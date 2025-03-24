"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KVService = void 0;
class KVService {
    constructor() {
        this.items = new Map();
    }
    set(key, data, ttl) {
        if (key == undefined || key == '') {
            throw new Error('Key is undefined');
        }
        let expiryTime = undefined;
        if (ttl != undefined && ttl > 0) {
            expiryTime = Date.now() + ttl * 1000;
        }
        this.items.set(key, { value: data, ttl: expiryTime });
    }
    get(key) {
        if (this.items.has(key)) {
            const data = this.items.get(key);
            if (data?.ttl && data.ttl < Date.now()) {
                this.items.delete(key);
                return undefined;
            }
            return data?.value;
        }
        return undefined;
    }
    delete(key) {
        if (this.items.has(key)) {
            this.items.delete(key);
            return true;
        }
        return false;
    }
}
exports.KVService = KVService;
