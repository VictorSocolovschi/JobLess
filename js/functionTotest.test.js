// functionTotest.test.js
jest.mock('./functionTotest.js', () => {
    return {
      convertToLowerCase: jest.fn()
    };
  });
  
  describe('functionTotest', () => {
    beforeEach(() => {
      jest.resetModules();
    });
    test('convertToLowerCase', () => {
      const functionTotest = require('./functionTotest');
      functionTotest.convertToLowerCase.mockImplementation(string => string.toLowerCase());
      expect(functionTotest.convertToLowerCase("HELLO")).toEqual("hello");
      expect(functionTotest.convertToLowerCase("WorlD")).toEqual("world");
    });
  });