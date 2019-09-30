const {
  isFunction, existObjectPath, buildIfExist,
  stringIsNotEmpty,
} = require('../checker');

describe('Checker library', () => {
  describe('isFunction', () => {
    it('Check arrow function', () => {
      const a = () => {};
      expect(isFunction(a)).toBeTruthy();
    });
    it('Check named function', () => {
      function test() {
        return null;
      }
      expect(isFunction(test)).toBeTruthy();
    });
    it('Check non function return false', () => {
      const a = {};
      expect(isFunction(a)).toBeFalsy();
    });
    it('Check null is not function', () => {
      const a = null;
      expect(isFunction(a)).toBeFalsy();
    });
  });
  describe('existObjectPath', () => {
    it('if exist object path return true', () => {
      const a = {
        b: {
          c: 'a',
          d: {
            e: 0,
          },
        },
      };

      expect(existObjectPath(a, 'b.c')).toBeTruthy();
      expect(existObjectPath(a, 'b.d.e')).toBeTruthy();
    });

    it('if not exists object path return false', () => {
      const a = {
        b: {
          c: 'a',
        },
      };

      expect(existObjectPath(a, 'b.d')).toBeFalsy();
    });
  });

  describe('buildIfExist', () => {
    it('buildIfExist call to constructor', () => {
      const type = jest.fn();

      buildIfExist({
        a: 'test',
      }, type);

      expect(type).toHaveBeenCalledTimes(1);
    });

    it('buildIfExist throw an error if the type is undefined', () => {
      expect(() => {
        buildIfExist({
          a: 'test',
        });
      }).toThrow('The parameters Type is undefined');
    });
  });

  describe('stringIsNotEmpty', () => {
    it('Check if return true if string is not empty', () => {
      expect(stringIsNotEmpty('a')).toBeTruthy();
    });
    it('Check if return false if string is empty or invalid', () => {
      expect(stringIsNotEmpty()).toBeFalsy();
      expect(stringIsNotEmpty(null)).toBeFalsy();
      expect(stringIsNotEmpty('')).toBeFalsy();
    });
  });
});
