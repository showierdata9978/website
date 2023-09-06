<script lang="ts">
  import { goto } from "$app/navigation";
  import { projects } from "$lib/constants";
  import type { Nullable, Project } from "$lib/constants";
</script>

<h1>I Did not put much effort into this page</h1>
<h2>your just meant to use the navbar xd.</h2>

<ol>
  {#each projects as project}
    <!-- svelte-ignore empty-block -->
    {#if project == null}{:else}
      <li class="project">
        <button
          on:click={() => {
            //@ts-ignore ts(18047)
            goto("/projects/" + project.slug); //THIS will NEVER be null
          }}
        >
          <h2>{project.name}</h2>
        </button>
      </li>
    {/if}
    <br />
  {/each}
</ol>

<style>
  /* Updated button styles */
  button {
    color: white;
    background-color: transparent;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
  }

  /* Improved spacing and alignment */
  li {
    margin-bottom: 20px;
  }

  /* Stylish font for headings */
  .project h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    text-decoration: underline;
    margin: 0;
  }

  h1 {
    padding: 5px;
  }
  h2 {
    padding: 5px;
  }
</style>
