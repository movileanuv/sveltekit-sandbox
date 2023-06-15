<script lang="ts">
    import {page} from '$app/stores'
</script>

<div class="bg-blue-500">
    <p>Hello There</p>

    <pre>{JSON.stringify($page, null, 2)}</pre>
</div>

<style>
    .bg-blue-500 {
        background-color: deepskyblue;
    }
</style>
