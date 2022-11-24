const { expect } = require("chai")
const { ethers } = require("hardhat")

describe('CountWork', () =>{

    let counter, acc1,acc2
    beforeEach(async ()=>{
        [acc1,acc2] = await ethers.getSigners()
        const Counter = await ethers.getContractFactory("Counter", acc1)
        counter = await Counter.deploy()
        await counter.deployed()
    })

    it("should be compiled", async ()=>{
        expect(counter.address).to.be.properAddress
    })

    it('shoud increase count', async ()=>{
        await counter.increaseCount()
        expect(counter.count == 1)
    })
    /*
    it("should'nt increase count when address not owner",async ()=>{
        await counter.connect(acc2).increaseCount()
        expect(counter.count == 0)
    })*/
})
