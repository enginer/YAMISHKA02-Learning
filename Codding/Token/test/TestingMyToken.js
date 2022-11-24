const { expect } = require("chai")
const { ethers } = require("hardhat")

describe("SuperMegaTest", ()=>{
    let  addr1, addr2, MyToken
    beforeEach(async ()=>{
        [addr1,addr2] = await ethers.getSigners()
        const Token = await ethers.getContractFactory("MyToken", addr1)
        MyToken = Token.deploy()
        await (await MyToken).deployed()
    })
    it("Should Compile", async ()=>{
        console.log("Easy first step")
    })

    it("Owner should be deployer", async()=>{
        expect(addr1.address).to.be.properAddress
    })

    it("Transfering", async =>{
        console.log(addr1.address.balanceOf())
    })

})