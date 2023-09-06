<script lang="ts">
  export let name = "Dropdown";
</script>

<div class="dropdown">
  <button class="dropbtn"
    >{name}
    <i class="fa fa-caret-down"></i>
  </button>
  <div class="dropdown-content">
    <slot />
  </div>
</div>

<style>
  /* The dropdown container */
  .dropdown {
    float: left;
    overflow: hidden;
  }

  /* Dropdown button */
  .dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 16px 16px;
    background-color: #333;
    font-family: inherit; /* Important for vertical align on mobile phones */
    margin: 0; /* Important for vertical align on mobile phones */
    cursor: default;
  }

  /* Add a red background color to navbar links on hover */
  .dropdown:hover .dropbtn {
    background-color: #8a8686;
  }

  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    background-color: #4e4c4c;
  }

  /* Links inside the dropdown */
  .dropdown-content button {
    float: none;

    padding: 0.5rem;
    text-decoration: none;
    display: block;
    text-align: left;
    cursor: pointer;
  }

  /* Add a grey background color to dropdown links on hover */

  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
    cursor: default;
  }

  .dropdown:hover .dropdown-content * {
    width: 100% !important;
    min-width: 100% !important;
  }
</style>
