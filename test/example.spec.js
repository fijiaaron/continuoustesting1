const { assert, expect } = require("chai")

describe("This is an example test", function() {
    
    it("It should test something", ()=> {
        expect(1 + 2).to.equal(3);
    });

    it("It should test something else", ()=> {
        expect("hello" + "world").to.equal("helloworld");
    });
});