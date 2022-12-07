const { ethers } = require("hardhat");
const { expect } = require("chai");

describe("HelloWorld (Part 1)", function () {
  let HelloWorld;
  let helloWorld;

  before(async function () {
    HelloWorld = await ethers.getContractFactory("HelloWorld");
    helloWorld = await HelloWorld.deploy();

    await helloWorld.deployed();
  });

  it("Should say hello", async function () {
    let result = await helloWorld.hello();
    expect(result).to.be.equals("Hello World");
  });

});
