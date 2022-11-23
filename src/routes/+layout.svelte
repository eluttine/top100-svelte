<script lang="ts">
	import '../app.css';
  import Navbar from '$lib/components/navbar.svelte';
  import type { Admin, Record, User } from 'pocketbase'
  import { isUser } from "$lib/helpers"

  export let data: User | Admin | null
  export let profile: Record | null

  if (isUser(data)) profile = data.profile
</script>

<Navbar {profile} />

<slot />
