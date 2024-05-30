import { describe, expect, it } from "vitest";
import { add } from "./main";

describe("test of the function add", () => {
    
  it("return 0 for empty string", () => {
    expect(add("")).toBe(0);
  });

  it('return 1 for "1"', () => {
    expect(add("1")).toBe(1);
  });

  it("return 3 for 1,2", () => {
      expect(add("1,2")).toBe(3);
    });

  it("return 6 for 1,2,3,4", () => {
      expect(add("1,2,3,4")).toBe(10);
    });

   it('return 6 for 1,2,3', () =>{
       expect(add("1\n2,3")).toBe(6);
  });

  it('test must fail', () =>{
       expect(add("1,\n,")).toBe(1)
   });

  it('return 3 for //;\\n1;2\\n,', () =>{
       expect(add("//[;]\n1;2;3")).toBe(6)
   });

   it('return error', () =>{
        expect(() => add("//[;]\n1;-2")).toThrowError('Negatives not allowed')
    });

    it('Skip number > 1000', () =>{
        expect(add("//[;]\n1;1001;2")).toBe(3)
    });

    it('can a separator multi char', () =>{
        expect(add("//[***]\n1***2***3")).toBe(6)
    });
    it('can have multi separator', () =>{
        expect(add("//[*][%]\n1*2%3")).toBe(6)
    });

    it('Bien vérifier que le cas suivant fonctionne..', () =>{
        expect(add("//[**][%%]\n1**2%%3")).toBe(6)
    });
});

