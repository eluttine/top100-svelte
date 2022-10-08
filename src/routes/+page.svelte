<script lang="ts">
	export let data;
	const { items } = data;
</script>

<div class="w-full min-h-screen bg-gray-100 p-7">
	<div class="container mx-auto">
		<h1 class="font-bold text-center text-3xl mt-2 mb-4 md:text-5xl md:mt-5 md:mb-9">
			<span class="text-red-600">Top 100</span> ruokablogit
		</h1>

		<!-- cards -->
		<div class="flex flex-wrap justify-center">
			{#each items as item}
				<div class="flex flex-col bg-white shadow-md m-4 w-52">
					<img class="object-cover m-1 h-52" src={`/images/${item.image}`} alt="" loading="lazy" />
					<h2 class="text-center px-2 w-52">{item.title}</h2>
					<!-- <a href={item.link}>Linkki</a> -->
				</div>
			{/each}
		</div>
	</div>
</div>
