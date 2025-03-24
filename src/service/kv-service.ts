import { Item } from "../models/kv-request-models"

export class KVService<T> {
    getMetadata(arg0: string) {
        throw new Error("Method not implemented.")
    }
    size(): any {
        throw new Error("Method not implemented.")
    }
    private items: Map<String, Item<T>> = new Map()

    public set(key: string, data: T, ttl?: number) {
        if (key == undefined || key == "") {
            throw new Error("Key is undefined");
        }

        let expiryTime: number | undefined = undefined

        if (ttl != undefined && ttl > 0) {
            expiryTime = Date.now() + ttl * 1000
        }

        this.items.set(key, { value: data, ttl: expiryTime })
    }

    public get(key: string): T | undefined {
        if (this.items.has(key)) {
            const data = this.items.get(key)
            if (data?.ttl && data.ttl < Date.now()) {
                this.items.delete(key)
                return undefined
            }
            return data?.value
        }
        return undefined
    }

    public delete(key: string): boolean {
        if (this.items.has(key)) {
            this.items.delete(key)
            return true
        }

        return false
    }
}
