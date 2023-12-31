const chai = require("chai");
const expect = chai.expect;
const sabre = require("../lib/sabre");
describe("cores dos sabres de luz", () => {
  it("deve ativar a cor verde", () => {
    expect(sabre.corAtivada("Yoda")).to.equal("verde");
  });
});
