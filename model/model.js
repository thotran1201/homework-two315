var homeContent = `<div class="welcome-introduction">
<h1>WELCOME TO THE UNIVERSE OF</h1>
<h1>PRETTY LITTLE LIARS: THE NEXT</h1>
<h1>GENERATION</h1>
</div>

<div class="home-paragraph">
<p>THE PRETTY LITTLE LI<b>A</b>RS: THE NEXT GENERATION UNIVERSE is the fan website dedicated not only to the hit HBOMax series Pretty Little Liars: The Next Generation but its three spinoffs Greenwood, Pretty Little Liars: The Next Generation: The Perfectionists, and Pretty Little Liars: The Next Generation: Original Sin!</p>
</div>

<div class="featured">
<p>Featured</p>
<div class="featured-section">
    <div class="setting place">
        <p class="setting-name">Columbus</p>
    </div>
    <div class="setting character">
        <p class="setting-name">Nicole</p>
    </div>
    <div class="setting antagonist">
        <p class="setting-name">A</p>
    </div>
</div>
</div>

<div class="featured-section">  
</div>

<div class="threatened-message">
<img src="images/a-pll-png-6.png" alt="A">
</div>`;

var aboutContent = `<div class="about-title">
<p><b>A</b>bout</p>
</div>

<div class="a-message">
<img src="images/a-pll-png-6.png" alt="threatened">
</div>

<div class="about-paragraph">
<p class="paragraph">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</div>`;

var liarsContent = `<div class="characters-title">
<p>Meet the Li<b>A</b>rs</p>
</div>

<div class="show-title">
<p>Pretty Little Liars: The Next Generation</p>
<div class="characters-section">
    <div class="character cheryl">
        <p class="character-name">Cheryl</p>
    </div>
    <div class="character ciara">
        <p class="character-name">Ciara</p>
    </div>
    <div class="character nicole">
        <p class="character-name">Nicole</p>
    </div>
</div>
<div class="characters-section">
    <div class="character alan">
        <p class="character-name">Alan</p>
    </div>
    <div class="character jeff">
        <p class="character-name">Jeff</p>
    </div>
    <div class="character joe">
        <p class="character-name">Joe</p>
    </div>
</div>
</div>

<div class="originalsin-title">
<p>Original Sin</p>
<div class="characters-section">
    <div class="character jamie">
        <p class="character-name">Jamie</p>
    </div>
    <div class="character indya">
        <p class="character-name">Indya</p>
    </div>
    <div class="character yara">
        <p class="character-name">Yara</p>
    </div>
</div>
<div class="characters-section">
    <div class="character william">
        <p class="character-name">William</p>
    </div>
    <div class="character jack">
        <p class="character-name">Jack</p>
    </div>
    <div class="character omar">
        <p class="character-name">Omar</p>
    </div>
</div>
</div>`;

var mysteryContent = `<div class="sequence-of-events-title">
<p>Mysteries</p>
</div>

<div class="series-title">
<p>Pretty Little Liars: The Next Generation</p>
<div class="mysteries-section">
    <div class="mysteries alison-disappearance">
        <p class="mysteries-name">Alison's Disappearance</p>
    </div>
    <div class="mysteries a">
        <p class="mysteries-name">A</p>
    </div>
    <div class="mysteries maddie">
        <p class="mysteries-name">The Maddie Thing</p>
    </div>
</div>
<div class="mysteries-section">
    <div class="mysteries carroll-middle-school">
        <p class="mysteries-name">Incident at Carroll Middle School</p>
    </div>
    <div class="mysteries jax-disappearance">
        <p class="mysteries-name">Jax's Disappearance</p>
    </div>
    <div class="mysteries christopher-death">
        <p class="mysteries-name">Christopher's Death</p>
    </div>
</div>
</div>

<div class="originalsin-title">
<p>Original Sin</p>
<div class="mysteries-section">
    <div class="mysteries erase-her">
        <p class="mysteries-name">Erase Her</p>
    </div>
    <div class="mysteries y2k">
        <p class="mysteries-name">Y2K </p>
    </div>
    <div class="mysteries shane-graham-death">
        <p class="mysteries-name">Shane's Death</p>
    </div>
</div>
<div class="mysteries-section">
    <div class="mysteries halloween-week">
        <p class="mysteries-name">Halloween Week Rave</p>
    </div>
    <div class="mysteries fransiska-party">
        <p class="mysteries-name">Fransiska's Party</p>
    </div>
    <div class="mysteries the-trial">
        <p class="mysteries-name">The Trial</p>
    </div>
</div>
</div>`;

function setCurrentPageContent(pageID) {
    let contentName = pageID + "Content";
    $("#app").html(eval(contentName));
}

export { setCurrentPageContent };