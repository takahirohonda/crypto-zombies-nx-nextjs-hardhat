import hre from 'hardhat'
import { expect } from 'chai'

describe('Counter', () => {
  it('should increment the count', async () => {
    const counterContract = await hre.ethers.getContractFactory('Counter')
    const counter = await counterContract.deploy()
    const initialCounter = await counter.getCounter()
    expect(initialCounter).to.equal(0)
    // https://hardhat.org/hardhat-chai-matchers/docs/overview
    // asserting event.
    expect(counter.count()).to.emit(counter, 'IncrementCounter').withArgs(1)
  })
})
