"use strict";

import {
  ex1,
  ex2,
  ex3,
  transformNumber,
  useATransformationOnANumber,
  sig1,
  sig2,
  sig3,
  generateArticleWithSignature,
  finalArticle,
  generateHen,
  hensOnlyNameAndAge,
  mutatedHens,
  averageAgeForHens,
  max7CharsHens,
  specificHen,
  mergeObjects,
  union,
  flatten,
  intercalate,
  expectedValue,
  sampleAnimal,
  sampleAnimalButFunkier,
} from "../src/td01/td01";

import chai from "chai";
import hens from "../src/td01/hens.js";
chai.expect();
const expect = chai.expect;

const test = it;

test("exercice 1", () => {
  expect(ex1).to.eq(54, "The logic is wrong, the sum should be 54");
});

test("exercice 2", () =>
  expect(ex2).to.deep.eq([
    "dog",
    "cat",
    "axolotl",
    "bird",
    "lion",
    "squirrel",
    "bear",
    "pig",
  ]));

test("exercice 3", () => {
  expect(ex3("dog")).to.eq("cat");
  expect(ex3("anything")).to.eq("anything");
});

test("exercice 4", () => {
  expect(expectedValue).to.not.eq("?", "Changing this value will spoil the answer, think carefully before typing it in");
  expect(expectedValue).to.eq("cat", "The answer is actually cat!");
});

test("exercice 5", () => {
  expect(useATransformationOnANumber).to.be.a(
    "function",
    "useATransformationOnANumber should be a function"
  );
  expect(useATransformationOnANumber).to.have.length(
    2,
    "useATransformationOnANumber should have 2 arguments"
  );
  expect(useATransformationOnANumber(transformNumber, 41)).to.not.eq(
    undefined,
    "The transform number returns undefined, it might not return anything at all"
  );
  expect(useATransformationOnANumber(transformNumber, 41)).to.eq(42);
});

test("exercice 6", () => {
  expect(generateArticleWithSignature).to.be.a("function");
  expect(generateArticleWithSignature).to.have.length(3);
  expect(finalArticle).to.match(
    /acquisition de la connaissance/,
    "The final article might not include the body"
  );

  const hasSig =
    finalArticle.match(sig1("")) ||
      finalArticle.match(sig2("")) ||
      finalArticle.match(sig3(""))

  expect(hasSig).to.not.eq(
    null,
    `The final article might not include the signature
    
    ${finalArticle}
    `
  );
});

test("exercice 7.0", () => {
  expect(Object.values(sampleAnimal)).to.not.contain(undefined, 'One of the fields in your animal might not be properly set');
  expect(sampleAnimal).to.have.all.keys(['name', 'species', 'legs', 'age', 'furColor']);

  expect(sampleAnimalButFunkier).to.not.eq(null, 'Please define sampleAnimalButFunkier');
  expect(sampleAnimalButFunkier).to.not.deep.eq(sampleAnimal, 'Your modified animal has not changed!')
});

test("exercice 7.1", () => {
  const test = generateHen("name", 2, 10, "red")
  expect(test).to.not.eq(undefined, 'please define the function generateHen');
  expect(test.species).to.eq('hen');
  expect(test).to.deep.eq({
    name: "name",
    species: "hen",
    legs: 2,
    age: 10,
    furColor: "red",
  });
});

test("exercice 7.2", () => {
  expect(hensOnlyNameAndAge).to.be.a("function");
  expect(hensOnlyNameAndAge(hens)).to.not.eq(undefined, 'your function might not return anything')

  expect(hensOnlyNameAndAge(hens)).to.deep.eq([
    { name: "Roberte", age: 16 },
    { name: "Henri", age: 2 },
    { name: "Georges", age: 1 },
    { name: "Patrice", age: 8 },
    { name: "Socrate", age: 10 },
    { name: "Jean-Hugues", age: 11 },
    { name: "Michella", age: 3 },
    { name: "Roxanne", age: 18 },
  ]);
});

test("exercice 7.3", () => {
  expect(mutatedHens).to.be.a("function");
  expect(mutatedHens(hens)).to.not.eq(undefined, 'your function might not return anything')
  expect(mutatedHens(hens)).to.deep.eq(["Patrice"]);
});

test("exercice 7.4", () => {
  expect(averageAgeForHens).to.be.a("function");
  expect(averageAgeForHens(hens)).to.not.eq(undefined, 'your function might not return anything')

  expect(averageAgeForHens(hens)).to.eq(8.625);
});

test("exercice 7.5", () => {
  expect(max7CharsHens).to.be.a("function");
  expect(max7CharsHens(hens)).to.not.eq(undefined, 'your function might not return anything')

  expect(max7CharsHens(hens)).to.deep.eq([
    "Roberte",
    "Henri",
    "Georges",
    "Patrice",
    "Socrate",
    "Roxanne",
  ]);
});

test("exercice 7.6", () => {
  expect(specificHen).to.be.a("function");
  expect(specificHen(hens)).to.not.eq(undefined, 'your function might not return anything')

  expect(specificHen(hens)).to.deep.eq({
    name: "Roberte",
    species: "hen",
    legs: 2,
    age: 16,
    furColor: "red",
  });
});

test("merge objects", () => {
  expect(mergeObjects).to.be.a("function");
  expect(
    mergeObjects([
      { a: 1, b: 2 },
      { b: 3, c: 4 },
    ])
  ).to.deep.eq({ a: 1, b: 3, c: 4 });
});

test("union of arrays", () => {
  expect(union).to.be.a("function");
  expect(union([1, 2], [3, 4])).to.deep.eq([1, 2, 3, 4]);
  expect(union([1, 2, 3], [3, 4])).to.deep.eq([1, 2, 3, 4]);
  expect(union([1, 2, 2], [2, 3, 4])).to.deep.eq([1, 2, 3, 4]);
});

test("flatten array", () => {
  expect(flatten).to.be.a("function");
  expect(
    flatten([
      [1, 2],
      [3, 4],
    ])
  ).to.deep.eq([1, 2, 3, 4]);
  expect(
    flatten([
      [1, 2, [3, 4]],
      [3, 4],
    ])
  ).to.deep.eq([1, 2, 3, 4, 3, 4]);
});

test("intercalate array", () => {
  expect(intercalate).to.be.a("function");
  expect(intercalate(",", ["a", "b", "c", "d"])).to.deep.eq([
    "a",
    ",",
    "b",
    ",",
    "c",
    ",",
    "d",
  ]);
  expect(intercalate(",", [])).to.deep.eq([]);
});
