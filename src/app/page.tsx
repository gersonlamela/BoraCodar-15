import {AiOutlineCheck, AiOutlineInfoCircle} from 'react-icons/ai';

export default function Home() {
	return (
		<main
			className="flex min-h-screen flex-row items-center justify-center 
      gap-8
      flex-wrap my-6 xl:mt-0
">
			<div className="w-[384px] md:h-[454px] bg-white rounded-[10px]  border border-gray-200 hover:border-purple-400 px-8 pt-12 pb-8 ">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-2">
						<h1 className="uppercase text-purple-600 text-sm font-semibold ">Para você começar</h1>
						<div className="flex flex-row justify-between items-center">
							<h2 className="text-gray-800 text-[32px] font-bold ">Essentials</h2>
							<h3 className="text-gray-800 text-lg font-normal">
								<span className="text-gray-800 text-[24px] font-bold">
									19,97 <span className="text-lg"> €/mês</span>
								</span>
							</h3>
						</div>
					</div>

					<button className="w-full text-gray-800 hover:text-white hover:bg-gray-900 border border-gray-800 rounded-[4px] px-6 py-4 flex items-center justify-center">
						<span className=" font-bold text-base  ">Assinar agora</span>
					</button>

					<hr />

					<div className="flex flex-col gap-4">
						<div className="flex">
							<div className="flex items-center  w-full gap-2">
								<AiOutlineCheck size={20} className="text-green-800" />
								<span>Até 3 usuários</span>
							</div>
							<AiOutlineInfoCircle size={20} className="text-gray-600" />
						</div>
						<div className="flex">
							<div className="flex items-center  w-full gap-2">
								<AiOutlineCheck size={20} className="text-green-800" />
								<span>Autoatendimento</span>
							</div>
							<AiOutlineInfoCircle size={20} className="text-gray-600" />
						</div>
					</div>
				</div>
			</div>

			<div className="relative w-[384px] md:h-[454px] bg-gray-900 rounded-[10px]  border border-gray-200 hover:border-purple-400 px-8 pt-12 pb-8  before:content-['Mais_Vantajoso'] before:font-bold before:text-[12px] before:inline-block before:bg-orange-400 before:rounded-[6px] before:absolute before:left-1/2 before:-top-[17px] before:uppercase before:py-2 before:px-4 before:-translate-x-1/2">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-2 ">
						<h1 className="uppercase text-purple-600 text-sm font-semibold ">Para você decolar</h1>
						<div className="flex flex-row justify-between items-center">
							<h2 className="text-white text-[32px] font-bold ">Ultimate </h2>
							<h3 className="text-white text-lg font-normal">
								<span className="text-white text-[24px] font-bold">
									29,97<span className="text-lg"> €/mês</span>
								</span>
							</h3>
						</div>
					</div>

					<button className="w-full text-white bg-purple-400  hover:bg-purple-500 border border-gray-800 rounded-[4px] px-6 py-4 flex items-center justify-center">
						<span className=" font-bold text-base "> Assinar agora</span>
					</button>

					<hr className="bg-gray-700 text-gray-700" />

					<div className="flex flex-col gap-4 text-gray-300">
						<div className="flex">
							<div className="flex items-center  w-full gap-2">
								<AiOutlineCheck size={20} className="text-green-800" />
								<span>Usuários ilimitados</span>
							</div>
							<AiOutlineInfoCircle size={20} className="text-gray-600" />
						</div>
						<div className="flex">
							<div className="flex items-center  w-full gap-2">
								<AiOutlineCheck size={20} className="text-green-800" />
								<span>Suporte 24/7</span>
							</div>
							<AiOutlineInfoCircle size={20} className="text-gray-600" />
						</div>

						<div className="flex">
							<div className="flex items-center  w-full gap-2">
								<AiOutlineCheck size={20} className="text-green-800" />
								<span>CSM Dedicado</span>
							</div>
							<AiOutlineInfoCircle size={20} className="text-gray-600" />
						</div>

						<div className="flex">
							<div className="flex items-center  w-full gap-2">
								<AiOutlineCheck size={20} className="text-green-800" />
								<span>Treinamentos</span>
							</div>
							<AiOutlineInfoCircle size={20} className="text-gray-600" />
						</div>
					</div>
				</div>
			</div>

			<div className="w-[384px] md:h-[454px] bg-white rounded-[10px]  border border-gray-200 hover:border-purple-400 px-8 pt-12 pb-8 ">
				<div className="flex flex-col gap-8">
					<div className="flex flex-col gap-2">
						<h1 className="uppercase text-purple-600 text-sm font-semibold ">Para sua empresa</h1>
						<div className="flex flex-row justify-between items-center">
							<h2 className="text-gray-800 text-[32px] font-bold ">Enterprise</h2>
						</div>
					</div>

					<button className="w-full text-gray-800 hover:text-white hover:bg-gray-900 border border-gray-800 rounded-[4px] px-6 py-4 flex items-center justify-center">
						<span className=" font-bold text-base  "> Fale com a gente</span>
					</button>

					<hr />

					<div className="flex items-center flex-row gap-2">
						<div>
							<AiOutlineCheck className="text-green-800 w-5 h-5" />
						</div>
						<div>
							<span className="text-base">Plano customizado especialmente para a necessidade de seu negocio</span>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
