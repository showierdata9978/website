<script>
    import { goto } from "$app/navigation";
    import { redirect } from "@sveltejs/kit";
    import DropDown from "$lib/DropDown.svelte";

    let projects = [null, "meower" ]
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
        margin: .1rem;


        /* make the buttons look like links */
        border: none;
        background-color: transparent;
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

    a {
        color: white;
        text-decoration: none;
    }
    </style>

<div class="navbar">
    
    
    <button class="navbar-logo" on:click={() => goto("/")}>
        ShowierData9978
    </button>


    <div class="navbar-links">
     <div class="navbar-item">
        <DropDown name="Projects"> 
            {#each projects as project}
                <button 
                    class="navbar-item" 
                    style="margin: 1rem"
                    on:click={() => goto("/projects/" + (project ? project : ""))}> 
                        {project ? project : "All"} 
                </button>
            {/each}

        </DropDown>
        </div>
    </div>
</div>