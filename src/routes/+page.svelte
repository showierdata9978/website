<script lang="ts">
  import NavBar from "$lib/NavBar.svelte";
</script>

<svelte:head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  />
  <script
    src="https://kit.fontawesome.com/cfa082c13a.js"
    crossorigin="anonymous"
  ></script>
</svelte:head>

<h2>I'm ShowierData</h2>
<div class="main-tiles">
  <div class="tile profile-pic">
    <img
      src="https://avatars.githubusercontent.com/u/68120127?s=400&u=46bb509f07b6938a72dc708943a86cada7eb7f70&v=4"
      alt="My PFP"
    />
  </div>
</div>
<!-- Main Tiles -->
<p>
  A fullstack dev with a ton of experience and expertise. Here's a bit about
  myself:
</p>

<div class="main-tiles">
  <div class="tile contact">
    <p style="font-size: 18px;">Contact Me</p>
    <p><i class="fas fa-envelope"></i><a style="text-decoration: none; color: white;" href="mailto:contact@showierdata.xyz">contact@showierdata.xyz</a></p>
  </div>

  <div class="tile connections">
    <p>Connect with Me</p>
    <div class="i-wrapper" style="align-items: center; justify-items: center; text-align: center">
      <a href="https://stackoverflow.com/users/17441809" target="blank">
        <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="stack overflow" height="30" width="40" />
      </a>
      <a href="https://www.youtube.com/c/showierdata9978" target="blank">
        <img  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/youtube.svg" alt="showierdata9978" height="30" width="40" />
      </a>
      <a href="https://discord.com/users/893981911003836487" target="blank">
        <img alt="discord"  src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6ca814282eca7172c6_icon_clyde_white_RGB.svg" height="30" width="40" >
      </a>
      <a href="https://steamcommunity.com/id/ShowierData9978/">
        <img alt="steam" src="https://community.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" height="60" width="80"> 
      </a>
      
      

      <!-- Add more icons as needed -->
    </div>
  </div>

  <div class="tile connections">
    <p>Currently working on:</p>
    <ul>
      <li>Meower Server</li>
      <li>Meower.js</li>
      <li>MeowerBot.py</li>
      <li>Chords</li>
    </ul>
  </div>
</div>

<!-- Program Tiles Section -->
<section class="program-section">
  <h2>Technologies I Work With</h2>
  <div class="program-tiles">
    <!-- Python Tile -->
    <div class="program-tile">
      <a href="https://www.python.org" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
          alt="python"
        />
        <p>Python</p>
      </a>
    </div>

    <!-- Bash Tile -->
    <div class="program-tile">
        <img
          src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/programming%20languages/bash.svg"
          width="40"
          height="40"
          alt="Bash"
        />
        <p>Bash</p>
    </div>

    <!-- Java Tile -->
    <div class="program-tile">
        <img
          src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/programming%20languages/java.svg"
          width="40"
          height="40"
          alt="Java"
        />
        <p>Java</p>
    </div>

    <!-- JavaScript Tile -->
    <div class="program-tile">
        <img
          src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/programming%20languages/javascript.svg"
          width="40"
          height="40"
          alt="JavaScript"
        />
        <p>JavaScript</p>
    </div>

    <!-- CSS Tile -->
    <div class="program-tile">
        <img
          src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/others/css.svg"
          width="40"
          height="40"
          alt="CSS"
        />
        <p>CSS</p>
    </div>

    <!-- Git Tile -->
    <div class="program-tile">
      
        <img
          src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/others/git.svg"
          width="40"
          height="40"
          alt="Git"
        />
        <p>Git</p>
    </div>

    <!-- HTML Tile -->
    <div class="program-tile">
        <img
          src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/others/html.svg"
          width="40"
          height="40"
          alt="HTML"
        />
        <p>HTML</p>
    </div>

    <!-- JSON Tile -->
    <div class="program-tile">
        <img
          src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/others/json.svg"
          width="40"
          height="40"
          alt="JSON"
        />
        <p>JSON</p>
    </div>

    <!-- MongoDB Tile -->
    <div class="program-tile">
        <img
          src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/databases/mongodb.svg"
          width="40"
          height="40"
          alt="MongoDB"
        />
        <p>MongoDB</p>
    </div>

    <!-- Docker Tile -->
    <div class="program-tile">
        <img
          src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/cloud/docker.svg"
          width="40"
          height="40"
          alt="Docker"
        />
        <p>Docker</p>
    </div>

    <!-- VS Code Tile -->
    <div class="program-tile">
        <img
          src="https://raw.githubusercontent.com/yurijserrano/Github-Profile-Readme-Logos/master/text%20editors/vscode.svg"
          width="40"
          height="40"
          alt="VS Code"
        />
        <p>VS Code</p>
    </div>

    <!-- Custom Tile -->
    <div class="program-tile">
        <img
          src="https://private-user-images.githubusercontent.com/68120127/319040240-c517cbaf-7763-4b6f-b6e8-eb24d9d736c6.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTIyOTYxODAsIm5iZiI6MTcxMjI5NTg4MCwicGF0aCI6Ii82ODEyMDEyNy8zMTkwNDAyNDAtYzUxN2NiYWYtNzc2My00YjZmLWI2ZTgtZWIyNGQ5ZDczNmM2LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA0MDUlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwNDA1VDA1NDQ0MFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTk4ZTkwYzEwYzdhZTcwYTNkMzc3YmM1MDYzYWFjOWI1MDIxN2UyYTE5ZWQ2YTI4YmIyNjI4YmI2OGZiMWQyNjAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.oihjpIuKh_hMSgZHVATAus_nr33CSTww-RwEO345E0s"
          width="40"
          height="40"
          alt="PyCharm"
        />
        <p>PyCharm</p>
    </div>
  </div>
  <br />
  <p>
    Page made by <a href="https://github.com/HAZARD6896">@DaCatBlock</a> :D (With
    some minor edits by me)
  </p>
</section>

<style>
  .main-tiles {
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .tile {
    width: 200px;
    height: 200px;
    background: #30475e;
    border-radius: 10px;
    border: #0f3460 solid;
    margin: 10px;
    display: flex;
    justify-content: center;
    transition: all 0.3s;
  }

  .tile:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .tile:active {
    transform: translateY(0);
  }

  img {
    border-radius: 10px;
  }

  p,
  h2,
  ul {
    color: #fff;
    padding: 5px;
    text-align: center;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  p {
    font-size: 18px;
  }

  .connections {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .connections p {
    margin: 0;
    color: #e0e0e0;
  }

  .connections a {
    font-size: 30px;
    margin-left: 10px;
    color: #e0e0e0;
    transition:
      color 0.3s,
      transform 0.3s;
  }

  .connections a {
    color: #ffffff;
    transform: translateY(-5px);
  }

  .i-wrapper {
    flex-direction: row;
  }

  .program-tile {
    width: 80px;
    height: 100px;
    background: #1c1f2b;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 5px;
    transition: transform 0.3s;
  }

  .program-tiles {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
  }

  .program-tile img {
    width: 50px;
    height: 50px;
  }

  .program-tile p {
    margin: 0;
    font-size: 12px;
    color: #e0e0e0;
    text-align: center;
  }

  .program-tile:hover {
    transform: scale(1.05);
  }


  .program-section {
    margin-top: 40px;
    text-align: center;
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .contact p {
    color: #e0e0e0;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 3px 0;
  }

  .contact i {
    color: #00bcd5;
    font-size: 14px;
  }
</style>
