import { StackService } from "../src/service/stack-service";

describe("StackService", () => {
  let stack: StackService<string>;

  beforeEach(() => {
    stack = new StackService<string>();
  });

  describe("Test Stack", () => {

    test("should push and pop items", () => {
      stack.push("hello");
      stack.push("world");

      expect(stack.size()).toBe(2);

      expect(stack.pop()).toBe("world");
      expect(stack.pop()).toBe("hello");
      expect(stack.size()).toBe(0);
      expect(stack.pop()).toBe(undefined);
    });

    test("should handle the example workflow", () => {
      stack.push("Hello");
      stack.push("World");

      expect(stack.pop()).toBe("World");

      stack.push("Again");

      expect(stack.pop()).toBe("Again");
      expect(stack.pop()).toBe("Hello");
      expect(stack.size()).toBe(0);
    });
  });
});