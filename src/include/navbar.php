<?php
echo '
<nav id="nav">
  <div id="menu" style="display: none;">
    <span></span>
    <div id="blocker"></div>
    <ul>
      <li data-text="Home"><a href="/">Home</a></li>
      <li data-text="Websites"><a href="/websites">Websites</a></li>
      <li data-text="Projects"><a href="/projects">Projects</a></li>
      <li data-text="Contact"><a href="/contact">Contact</a></li>
    </ul>
  </div>

  <div id="wrapper">
    <div id="menuToggle">
      <span class="bar bar1"></span>
      <span class="bar bar2"></span>
      <span class="bar bar1"></span>
    </div>

    <a href="/">
      <picture id="icon">
        <source srcset="/img/logo/logo@0.01x.webp" type="image/webp">
        <source srcset="/img/logo/logo@0.01x.png" type="image/png">
        <img src="/img/logo/logo@0.01x.png" alt="Logo">
      </picture>
    </a>
  </div>
</nav>
';
