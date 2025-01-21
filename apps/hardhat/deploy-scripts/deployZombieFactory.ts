import '@nomicfoundation/hardhat-toolbox'
import { ethers } from 'hardhat'

const deployZombieFactoryContract = async () => {
  const ZombieFactoryContract = await ethers.getContractFactory(
    'ZombieFactoryTestForFrontEndSetup'
  )
  const zombieFactory = await ZombieFactoryContract.deploy()
  const deploymentReceipt = await zombieFactory.deploymentTransaction()?.wait()
  console.log(
    `checking deploymentReceipt: ${JSON.stringify(deploymentReceipt)}`
  )
  console.log(`zombieFactory contract deployed to: ${zombieFactory.target}`)
  return zombieFactory
}

deployZombieFactoryContract()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
