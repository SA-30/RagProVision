import Card from "./card"

const HeroSection = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10">
        <h2 className="mt-5 font-bold tracking-wide flex text-center flex-col text-[4rem] sm:text-[8rem] sm:leading-[10rem] leading-[4rem]">
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">RAG PRO</span>
            <span className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">VISION</span>
        </h2>
        <div className="flex justify-center">
            <Card title='Playground' description='Click the link to open playground'/>
        </div>
    </div>
  )
}

export default HeroSection