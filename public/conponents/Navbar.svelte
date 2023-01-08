<script>
    export let page = "home";

</script>

<style>
    .navbar {
        background-color: #333;
        overflow: hidden;
        top: 0;
        width: 100%;
        margin-bottom: 12px;
        
    }

    .navbar-links {
    
        /* make the links inline */
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .navbar-item {
        display: inline-block;
        color: #f2f2f2;
        display: block;
        text-align: center;
        text-decoration: none;
        margin: 1rem;


        /* make the buttons look like links */
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: none;

        font-size: medium;

    }

    .navbar-logo {
        /* same as navbar-item. but align left */
        display: inline-block;
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
    </style>

<div class="navbar">
    <button class="navbar-logo" on:click={() => page = "home"}>ShowierData9978</button>

    <div class="navbar-links">
        <button class="navbar-item" on:click={() => page = "home"}>Home</button>
        <button class="navbar-item" on:click={() => page = "about"}>About</button>
    </div>
</div>