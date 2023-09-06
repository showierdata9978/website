<script lang="ts">
  import NavBar from "$lib/NavBar.svelte";
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css">
  <script src="https://kit.fontawesome.com/cfa082c13a.js" crossorigin="anonymous"></script>
</svelte:head>

<h2>I'm ShowierData</h2>
<div class="main-tiles">
  <div class="tile profile-pic">
    <img src="https://avatars.githubusercontent.com/u/68120127?s=400&u=46bb509f07b6938a72dc708943a86cada7eb7f70&v=4" alt="My PFP">
  </div>
</div>
<!-- Main Tiles -->
<p>A fullstack dev with a ton of experience and expertise. Here's a bit about myself:</p>

<div class="main-tiles">



  <div class="tile contact">
    <p style="font-size: 18px;">Contact Me</p>
    <p><i class="fas fa-envelope"></i> mellfang36@gmail.com</p>
  </div>


  <div class="tile connections">
    <p>Connect with Me</p>
    <div class="i-wrapper">
      <a href="https://www.youtube.com/channel/UCF6jJe8th14QKWUrfzNMDMA" target="_blank"> <i class="fab fa-youtube" style="color: #FF0000;"></i> </a><!-- YouTube Red -->
      <a href="https://discord.gg/qzFqbsWQnd" target="_blank"><i class="fab fa-discord" style="color: #7289DA;"></i></a>  <!-- Discord Bluish-purple -->
      <a href="https://github.com/showierdata9978" target="_blank"> <i class="fa-brands fa-github" style="color: #0;"></i></a>
      <!-- Add more icons as needed -->
    </div>
  </div>

  <div class="tile connections">
    <p>Currently working on:</p>
    <ul>
      <li>My Website</li>
      <li>Pickaxe Mod</li>
    </ul>
  </div>

</div>

<!-- Program Tiles Section -->
<section class="program-section">
  <h2>Technologies I Work With</h2>
  <div class="program-tiles">

    <!-- Bash Tile -->
    <div class="program-tile">
      <a href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer">
        <img
          src="https://d33wubrfki0l68.cloudfront.net/7c8561d6a2795e512d1f3165ed7edd9405419968/ad392/img/symbol/svg/full_colored_light.svg"
          alt="bash">
        <p>Bash</p>
      </a>
    </div>

    <!-- ... Repeat for each program ... -->



    <!-- Docker Tile -->
    <div class="program-tile">
      <a href="https://www.docker.com/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
          alt="docker">
        <p>Docker</p>
      </a>
    </div>

    <!-- Figma Tile -->
    <div class="program-tile">
      <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
        <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma">
        <p>Figma</p>
      </a>
    </div>

    <!-- Flask Tile -->
    <div class="program-tile">
      <a href="https://flask.palletsprojects.com/" target="_blank" rel="noreferrer">
        <img src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" alt="flask">
        <p>Flask</p>
      </a>
    </div>

    <!-- Git Tile -->
    <div class="program-tile">
      <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
        <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git">
        <p>Git</p>
      </a>
    </div>

    <!-- HTML5 Tile -->
    <div class="program-tile">
      <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
          alt="html5">
        <p>HTML5</p>
      </a>
    </div>

    <!-- Java Tile -->
    <div class="program-tile">
      <a href="https://www.java.com" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java">
        <p>Java</p>
      </a>
    </div>

    <!-- JavaScript Tile -->
    <div class="program-tile">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
          alt="javascript">
        <p>JavaScript</p>
      </a>
    </div>


    <!-- TypeScript Tile -->
    <div class="program-tile">
      <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
          alt="typescript">
        <p>TypeScript</p>
      </a>
    </div>

    <!-- Linux Tile -->
    <div class="program-tile">
      <a href="https://www.linux.org/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
          alt="linux">
        <p>Linux</p>
      </a>
    </div>

    <!-- MongoDB Tile -->
    <div class="program-tile">
      <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
        <img
          src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
          alt="mongodb">
        <p>MongoDB</p>
      </a>
    </div>

    <!-- Python Tile -->
    <div class="program-tile">
      <a href="https://www.python.org" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
          alt="python">
        <p>Python</p>
      </a>
    </div>



  </div>
  <br>
  <p>Page made by <a href="https://github.com/HAZARD6896">@DaCatBlock</a> :D (With some minor edits by me)</p> 
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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

.connections i {
  font-size: 30px;
  margin-left: 10px;
  color: #e0e0e0;
  transition: color 0.3s, transform 0.3s;
}

.connections i:hover {
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

.program-tile a {
  text-decoration: none;
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
