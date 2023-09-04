<script>
  import { goto } from "$app/navigation";
  import { redirect } from "@sveltejs/kit";
  import DropDown from "$lib/DropDown.svelte";

  import { projects } from "$lib/constants";
</script>

<div class="navbar">
  <button class="navbar-logo" on:click={() => goto("/")}>
    ShowierData9978
  </button>

  <div class="navbar-links">
    <div class="navbar-item">
      <DropDown name="Projects">
        {#each projects as project}
          <div style="width: 100%;">
            <button
              class="navbar-item"
              style="margin: 1rem; cursor: pointer; width: 100%; text-align: left;"
              on:click={() =>
                goto("/projects/" + (project ? project.slug : ""))}
            >
              {project ? project.name : "All"}
            </button>
            <hr style="width: 100%; margin: 0;" />
          </div>
        {/each}
      </DropDown>
    </div>
  </div>
</div>

<style>
  .navbar {
    background-color: #333;
    overflow: hidden;
    top: 0;
    width: 100%;
    margin-bottom: 12px;
  }

  .navbar-links {
    display: flex;
    justify-content: left;
    align-items: center;
    text-align: center;
  }

  .navbar-item {
    display: inline-block;
    color: #f2f2f2;
    display: block;
    text-decoration: none;
    margin: 0.1rem;

    /* make the buttons look like links */
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;

    font-size: medium;
  }

  .navbar-logo {
    /* same as navbar-item. but align left */
    color: #f2f2f2;
    display: block;
    text-align: left;
    text-decoration: none;
    margin: 1rem;
    float: left;
    /* make the buttons look like links */
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;

    font-size: large;
  }

  .navbar-logo:hover {
    cursor: pointer;
  }

  button:hover {
    cursor: default;
  }

  a {
    color: white;
    text-decoration: none;
  }
</style>
