import Image from 'next/image'

export default function Index() {
  return (
    <>
      <h1>CryptoZombie Playground</h1>
      <Image
        src="/img/zombie-192×287.png"
        width={192}
        height={287}
        alt="zombie pic"
      />
    </>
  )
}
