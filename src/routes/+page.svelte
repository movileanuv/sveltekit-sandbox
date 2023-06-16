<script lang="ts">
  import type {PageData, ActionData, SubmitFunction} from "./$types";
  import { enhance} from "$app/forms";

  export let data: PageData
  export let form: ActionData

  export const addTodo: SubmitFunction = (input) => {
    console.log(input)
    return async (options) => {
      console.log(options)
    }
  }

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<ul>
    {#each data.todos as todo}
        <li>
            {todo}
            <form action="?/deleteTodo" method="post" use:enhance>
                <input type="hidden" value="{todo}" name="todo">
                <button>❌</button>
            </form>
        </li>
    {/each}
</ul>

<form action="?/addTodo" method="post" use:enhance={addTodo}>
    <input type="number" name="todo">
    <button>Add todo</button>
</form>

{#if form?.success}
    <p>Added todo!</p>
{/if}
