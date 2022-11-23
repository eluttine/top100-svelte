<script lang="ts">
  import type { Record } from "pocketbase"

  export let profile: Record | null
</script>

<div class="navbar bg-base-100">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl"><span class="red">Top 100</span> Ruokablogit</a>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul
        tabindex="0"
        class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        {#if profile}
          <li><a>Profiili</a> </li>
          <li>
            <form action="/logout" method="POST">
              <button>Kirjaudu ulos</button>
            </form>
          </li>
        {/if}
      </ul>
    </div>
        {#if !profile}
    <div class="navbar-end">
      <a class="btn btn-outline" href="/login">Kirjaudu</a>
    </div>
    {/if}
  </div>
</div>
