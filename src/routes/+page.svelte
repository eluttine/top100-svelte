<script>
	const items = [
		{
			img: 'food-1.jpg',
			title: 'Syöppä tämä',
			link: 'http://localhost:5173/'
		},
		{
			img: 'food-2.jpg',
			title: 'Hyvää sapuskaa suoraan maailmalta',
			link: 'http://localhost:5173/'
		},
		{
			img: 'food-3.jpg',
			title: 'Hyvää sapuskaa suoraan maailmalta',
			link: 'http://localhost:5173/'
		},
		{
			img: 'food-4.jpg',
			title: 'Hyvää sapuskaa suoraan maailmalta',
			link: 'http://localhost:5173/'
		},
		{
			img: 'food-5.jpg',
			title: 'Hyvää sapuskaa suoraan maailmalta',
			link: 'http://localhost:5173/'
		},
		{
			img: 'food-6.jpg',
			title: 'Hyvää sapuskaa suoraan maailmalta',
			link: 'http://localhost:5173/'
		},
		{
			img: 'food-7.jpg',
			title: 'Hyvää sapuskaa suoraan maailmalta',
			link: 'http://localhost:5173/'
		},
		{
			img: 'food-8.jpg',
			title: 'Hyvää sapuskaa suoraan maailmalta',
			link: 'http://localhost:5173/'
		}
	];
</script>

<div class="w-full min-h-screen bg-gray-100 p-7">
	<h1 class="font-bold text-center text-3xl mt-2 mb-4 md:text-5xl md:mt-5 md:mb-9">
		<span class="text-red-600">Top 100</span> ruokablogit
	</h1>

	<!-- cards -->
	<div class="flex flex-wrap justify-center">
		{#each items as item}
			<div class="flex flex-col bg-white shadow-md m-4 sm:w-52">
				<img class="object-cover sm:h-48 sm:w-44 m-1" src={`/images/${item.img}`} alt="" />
				<h2 class="text-center px-2 w-44">{item.title}</h2>
				<a href={item.link}>Linkki</a>
			</div>
		{/each}
	</div>
</div>
