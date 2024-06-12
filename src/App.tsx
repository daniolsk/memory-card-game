const cards = [
	{
		cardNumber: 1,
		image: '',
	},
	{
		cardNumber: 2,
		image: '',
	},
	{
		cardNumber: 3,
		image: '',
	},
	{
		cardNumber: 4,
		image: '',
	},
	{
		cardNumber: 5,
		image: '',
	},
	{
		cardNumber: 6,
		image: '',
	},
	{
		cardNumber: 7,
		image: '',
	},
	{
		cardNumber: 8,
		image: '',
	},
];

function App() {
	return (
		<main className='min-h-screen p-16 flex flex-col gap-10 justify-center items-center'>
			<div className='grid grid-cols-4 grid-rows-4 gap-4'>
				{[...cards, ...cards].map((card, index) => (
					<div
						key={index}
						className='bg-red-500 w-32 h-32 flex justify-center items-center cursor-pointer'
					>
						<span className='text-4xl'>{card.cardNumber}</span>
					</div>
				))}
			</div>
			<div>
				<button className='border-2 rounded-xl px-4 py-2'>Restart</button>
			</div>
		</main>
	);
}

export default App;
