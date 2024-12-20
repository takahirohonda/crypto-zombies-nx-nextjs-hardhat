import '@nomicfoundation/hardhat-toolbox'
import { ethers } from 'hardhat'
import { Counter } from '../typechain-types'

const deployGameLevelContract = async () => {
  const GameLevelContract = await ethers.getContractFactory('Counter')
  const gameLevel = await GameLevelContract.deploy()
  const deploymentReceipt = await gameLevel.deploymentTransaction()?.wait()
  console.log(
    `checking deploymentReceipt: ${JSON.stringify(deploymentReceipt)}`
  )
  console.log(`GameLevel contract deployed to: ${gameLevel.target}`)
  return gameLevel
}

const getPlayerLevel = async (counter: Counter) => {
  await counter.count()
  console.log('Counter deployed with: ', await counter.getCounter())
}

deployGameLevelContract().then(getPlayerLevel)
