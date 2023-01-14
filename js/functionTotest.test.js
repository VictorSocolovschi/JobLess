// functionTotest.test.js

jest.mock('./functionTotest.js', () => {
    return {
      convertToLowerCase: jest.fn(),
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
    
    test('convertToLowerCase - empty string input', () => {
      const functionTotest = require('./functionTotest');
      functionTotest.convertToLowerCase.mockImplementation(string => string.toLowerCase());
      expect(functionTotest.convertToLowerCase("")).toEqual("");
    });
        
    test('convertToLowerCase - numeric input', () => {
      const functionTotest = require('./functionTotest');
      functionTotest.convertToLowerCase.mockImplementation(string => string.toLowerCase());
      expect(functionTotest.convertToLowerCase("12345")).toEqual("12345");
    });
        
    test('convertToLowerCase - special characters input', () => {
      const functionTotest = require('./functionTotest');
      functionTotest.convertToLowerCase.mockImplementation(string => string.toLowerCase());
      expect(functionTotest.convertToLowerCase("!@#$%^&")).toEqual("!@#$%^&");
    });
        
    test('convertToLowerCase - already lowercase input', () => {
      const functionTotest = require('./functionTotest');
      functionTotest.convertToLowerCase.mockImplementation(string => string.toLowerCase());
      expect(functionTotest.convertToLowerCase("already lowercase")).toEqual("already lowercase");
    });
  });






  