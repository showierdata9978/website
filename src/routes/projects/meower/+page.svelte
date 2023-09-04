<script lang="ts">
  import SvelteMarkdown from "svelte-markdown";

  var lastFeched = "";

  async function fetchREADME(url: string) {
    lastFeched = await (await fetch(url)).text();
  }
</script>

<br />
<img
  style=""
  src="https://camo.githubusercontent.com/d994e4dccc2e603be23b9689b45428463aa171903ee60acb81c75bc83c4a4214/68747470733a2f2f6d656f7765722e6f72672f6173736574732f6c6f676f2e737667"
  alt="Meower Media Co's logo"
/>

<div class="text-below-img">
  <p>
    Meower is a free, open-source, and non-profit social media platform. Meower
    is also a (currently WIP) alternative to Twitter, Discord, and Reddit,
    completely free of advertising, tracking, data collection, and more! <br
    /><br />The website and launch is available at https://meower.org<br /><br
    />Go to https://github.com/meower-media-co to see the source code
  </p>
</div>

I am a moderator here.

<section>
  <h2>Bots</h2>
  <hr />
  <h2>Bot - MeowerBot.py</h2>
  <section>
    <section>
      <section>
        <h3>Description</h3>
        <p>
          The <code>Bot</code> class in MeowerBot.py is responsible for networking
          and functionality within a Meower bot. It manages various interactions
          and tasks within the Meower ecosystem.
        </p>
      </section>
      <section>
        <h3>Key Features</h3>
        <ul>
          <li>Dynamic command handling and execution.</li>
          <li>Management of bot extensions (cogs).</li>
          <li>Status handling for bot operations.</li>
        </ul>
      </section>
    </section>
  </section>
  <hr />
  <h3>Revower</h3>
  <section>
    <p>
      Revower is an ongoing bot project designed to bridge Meower Home and Group
      chats with your Revolt server or group. It acts as a connector, making it
      easier for users to interact across these chat platforms.
    </p>
    <p>
      This project is actively developed by Showierdata9978, and you can access
      the source code on GitHub:
      <a href="https://github.com/showierdata9978/MeowerRevolt"
        >Revower GitHub Repository</a
      >.
    </p>
    <p>Hosting for Revower is provided by JoshAtticus on Meower.</p>
  </section>
  <hr />
  <h3>Meower Webhook Bot</h3>
  <section>
    <p>
      Meower Webhook Bot is a Python application designed for website
      integration and moderation tasks. It includes a versatile bot named
      "MeowerBot" that offers a range of commands and features to manage user
      interactions seamlessly.
    </p>
    <p>
      The bot operates with the prefix "@HookMod" and connects to a MongoDB
      database for efficient data storage. It boasts functionalities such as
      user banning, enabling/disabling guests, clearing user-level caches, bot
      restarts, and graceful shutdowns.
    </p>
    <p>
      The project also encompasses a web server component tailored for handling
      incoming requests. This server runs on the host "0.0.0.0."
    </p>
    <p>
      The codebase is (un)actively maintained by ShowierData9978, and you can
      find it on GitHub:
      <a href="https://github.com/MeowerCommunity/Webhooks"
        >Meower Webhook Bot GitHub Repository</a
      >.
    </p>
    <p>
      It's important to note that the bot is scheduled for deprecation, as
      Meower plans to implement a built-in webhooks system.
    </p>
  </section>
  <section>
    <h2>CodeBot</h2>
    <section>
      <h3>Description</h3>
      <p />
    </section>
    <section>
      <h3>CodeBot</h3>
      <p>CodeBot is showierdata9978's main meower bot.</p>
    </section>
    <section>
      <h3>Commands</h3>
      <ul>
        <li><code>help</code>: Displays a list of available commands.</li>
        <li><code>joinGC</code>: Adds the bot to a specified group chat.</li>
        <li>
          <code>mimic</code>: Allows bot administrators to send messages through
          the bot.
        </li>
        <li>
          <code>info</code>: Provides information about the bot, its owner, and
          related URLs.
        </li>
        <li>
          <code>hack</code>: Simulates a hacking attempt on a user's Meower
          account.
        </li>
        <li>
          <code>send_coins</code>: Allows users to send coins to each other.
        </li>
        <li>
          <code>beg</code>: Initiates a coin collection process with a cooldown.
        </li>
        <li><code>bal</code>: Checks the coin balance of a user.</li>
        <li><code>inventory</code>: Lists items in the user's inventory.</li>
        <li><code>shop</code>: Displays items available for purchase.</li>
        <li><code>buy</code>: Allows users to buy items from the shop.</li>
        <li><code>ban</code>: Bans a user from using the bot (admin-only).</li>
        <li>
          <code>unban</code>: Unbans a previously banned user (admin-only).
        </li>
        <li>
          <code>add_todo</code>: Adds a to-do item to the bot's to-do list
          (admin-only).
        </li>
        <li>
          <code>todo</code>: Retrieves a specific to-do item from the list.
        </li>
        <li>
          <code>remove_todo</code>: Removes a to-do item from the list
          (admin-only).
        </li>
        <li><code>dm</code>: Sends a direct message to another user.</li>
      </ul>
    </section>
  </section>
</section>

<section>
  <h2>HTML Page Generation - generate.js</h2>
  <section>
    <section>
      <section>
        <h3>Description</h3>
        <p>
          The <code>generate</code> function in generate.js is responsible for dynamically
          generating HTML pages based on data extracted from forums. It combines
          forum content with user information and CSS styling to create coherent
          pages.
        </p>
      </section>
      <section>
        <h3>Key Features</h3>
        <ul>
          <li>Integration with forum data to create HTML pages.</li>
          <li>Caching of user information to reduce API requests.</li>
          <li>Pagination of posts for better user experience.</li>
        </ul>
      </section>
      <section>
        <h3>GitHub Repository</h3>
        <p>
          You can find the source code for this project in the GitHub
          repository:
          <a
            href="https://github.com/showierdata9978/meower-scratch-backup"
            target="_blank">Meower Scratch Backup</a
          >
        </p>
      </section>
    </section>
  </section>
</section>

<style>
  section {
    padding-left: 5px;
  }
</style>
