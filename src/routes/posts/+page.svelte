<script lang="ts">
  import type {PageData} from "./$types";

  export let data: PageData
</script>

<h1>This is the Posts page</h1>

<ul>
    {#each data.posts as post}
        <li>
            <a href="/posts/{post.id}">{post.title}</a>
        </li>
    {/each}
</ul>
