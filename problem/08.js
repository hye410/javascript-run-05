/**
 * [08.js]
 *
 * 1) MathHelper 클래스를 작성하세요.
 * 2) MathHelper 클래스는 다음 정적 메소드를 가지고 있습니다.
 *   - add: 두 인자를 받아 더한 값을 반환합니다.
 *   - subtract: 두 인자를 받아 뺀 값을 반환합니다.
 *   - multiply: 두 인자를 받아 곱한 값을 반환합니다.
 *   - divide: 두 인자를 받아 나눈 값을 반환합니다.
 *   - remainder: 두 인자를 받아 나머지 값을 반환합니다.
 *
 */

// TODO: 아래 코드를 작성하세요.
class MathHelper {
  static add (x,y) {
    return x + y;
  }
  static subtract (x,y) {
    return x - y;
  }
  static multiply (x,y) {
    return x * y;
  }
  static divide (x,y) {
    return x / y;
  }
  static remainder (x,y) {
    return x % y;
  }
}

export { MathHelper };
