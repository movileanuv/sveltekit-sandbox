<script lang="ts">
  import type {PageData} from "./$types";
  import {invalidate} from "$app/navigation";

  export let data: PageData

  function reloadPosts() {
    invalidate("app:posts")
  }
</script>

<h1>This is the Posts page</h1>

<ul>
    {#each data.posts as post}
        <li>
            <a href="/posts/{post.id}">{post.title}</a>
        </li>
    {/each}
</ul>

<button on:click={reloadPosts}>Reload Posts</button>
