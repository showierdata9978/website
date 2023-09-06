<script>
  import SvelteMarkdown from "svelte-markdown";

  let source = "";
  async function getREADME() {
    source = await (
      await fetch(
        "https://raw.githubusercontent.com/showierdata9978/Pickaxe-mod/main/README.md",
      )
    ).text();
  }
</script>

<div>
  {#await getREADME()}
    <h2>Loading README.....</h2>
  {:then}
    <SvelteMarkdown {source} />
  {/await}
</div>

<br />
<br />
<br />
<br />

<style>
  div {
    padding-left: 20px;
  }
</style>
