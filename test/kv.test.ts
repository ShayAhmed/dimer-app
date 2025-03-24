import {KVService} from "../src/service/kv-service";

describe("KeyValueService", () => {
  let kv: KVService<string>;

  beforeEach(() => {
    kv = new KVService<string>();
    jest.useRealTimers();
  });

  describe("Test KV Store", () => {
    test("should set and get key", () => {
      kv.set("hello", "world");
      
      expect(kv.get("hello")).toBe("world");
    });

    test("should return undefined when key does not exist", () => {
      expect(kv.get("shouldNotExist")).toBeUndefined();
    });

    test("should delete keys", () => {
      kv.set("hello", "world");
      
      expect(kv.get("hello")).toBe("world");
      expect(kv.delete("hello")).toBe(true);
      expect(kv.get("hello")).toBeUndefined();
    });

    test("should handle TTL expiration", () => {
      jest.useFakeTimers();
      kv.set("expiring", "value", 1);
      expect(kv.get("expiring")).toBe("value");
      jest.advanceTimersByTime(1100);
      expect(kv.get("expiring")).toBeUndefined();
    });
  });
});

