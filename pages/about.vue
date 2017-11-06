<template>
<Page>
    <div class="uk-container">
        <blockquote cite="#">
            <p class="uk-margin-small-bottom">How odd I can have all this inside me and to you it’s just words.</p>
            <footer><cite>David Foster Wallace</cite></footer>
        </blockquote>
        <br>

        <h2>Work and Projects</h2>

        <p>I spend a lot of my time working on personal projects, all of which are open source. I’m passionate about open source work and the public domain, which many of my projects are dedicated to. As far as projects go, my interests lie in security, distributed systems, infrastructure and operations, automating things that probably shouldn’t be automated, and API design. I ♥ a well designed API.</p>

        <p>I’m currently employed as an Infrastructure Engineer at an awesome little company called Hudl. Prior to this I interned at Hudl, working on infrastructure and site reliability engineering. Before that I interned at Apple, Inc., working within the GPU Software Engineering Organization. And that’s pretty much as far back as my story goes.</p>

        <h2>Academia and Community</h2>
        <p>I previously pursued a degree in Computing Security at the Rochester Institute of Technology from August 2013 to December 2015 before dropping out, because YOLO. I was a member of the Computer Science House, a special interest house, and the FOSS Box, an applied research laboratory. I also occasionally worked on projects with the Hacks/Hackers Rochester group.</p>

        <p>Like most programmers I’ve met, I enjoy conferences and meetups. I attended PyCon in 2014 and 2015 and Nebraska.Code() in 2015. You might also find me at the occassional BarCamp (unconference) or at a Python User Group meeting.</p>

        <h2>Travel</h2>
        <p>I also spend a lot of my time travelling. Not as much as I’d like to though. I’ve visited twenty six U.S. states and more countries than I can count on my fingers, which means that I’ve lost count. I’ve also lived in Mumbai, India, Hanoi, Vietnam, Paris, France, Vancouver, Canada , Rochester, New York, Sunnyvale, California, Lincoln, Nebraska, and Boston, Massachusetts.</p>

        <h2>Hobbies &amp; Pastimes</h2>
        <p>Photography is my creative outlet. A lot of my current work is nature/landscape material, but I’m working on doing more street photography as well as some astrophotography when the conditions are right. Occassionally I’ll whip out my film camera, because getting the film developed and then getting to hold it just feels wonderful.</p>

        <p>When I’m not writing code, taking photos, or travelling, I enjoy reading fiction and nonfiction material. I grew up on, and continue to love, the Tintin and Asterix and Obelix comics. Unfortunately, I don’t get much reading time at this point — most of the reading I’ve managed to do recently has been restricted to when I’m flying.</p>

        <h2>Tool Belt</h2>
        <p>My primary tools for software development include the OS X Terminal, git, vim, a 12″ Retina MacBook, Python, Go, tmux, and servers running either CentOS or Amazon Linux. Every year, I think it’ll finally be the year of Linux, and every year it isn’t. Depending on the location, I may be using Apple EarPods or ATH-M50x headphones. My personal infrastructure runs on AWS EC2 for the most part, managed by Chef.</p>

        <p>For photography, my primary body is the Nikon D5300 with the following lenses – AF-S DX NIKKOR 35mm f/1.8G, Tokina AT-X 11-16mm f/2.8 PRO DX-II, and AF-S VR Zoom-Nikkor 70-300mm f/4.5-5.6G IF-ED. I use Adobe Lightroom running on a 15″ Retina MacBook Pro for managing and processing photos. For film photography I have a Nikon FE and I’ve recently acquired a GoPro HERO4 for timelapses and videos and a Fujifilm X100T to use as a daily walking around camera.</p>

        <h2>On the Internet</h2>
        <p>You can find me on Twitter and GitHub. I also hang out on freenode.</p>  

        <p>I used to use App.net, but well… I also previously used last.fm, but Apple Music Radio doesn’t suport it.</p>

        <p>If you want to get in contact, feel free to poke me in meatspace, tweet at me on Twitter, ping me on IRC, or just send me an email – here’s my PGP key.</p>

        <h2>Colophon</h2>
        <p>This website (and its spiritual successors) has previously been managed as manually edited HTML files, manually editted plain text files, a Jekyll project, a Hugo project, a ford.py project (a site generator I wrote), a Pelican project, a Ghost instance, and a WordPress instance.</p>

        <p>It currently exists as an Ljón project. Ljón (Icelandic for lion) is another static site generator that I’ve written (of course!) and use to manage my personal websites. (I’ve probably – most definitely – gotten it wrong again and I can’t recommend using it – you’ll probably have nightmares.)</p>  

        <p>The website uses the flexbox grid from Foundation, and Mark Simonson’sProxima Nova font from Adobe Typekit. The only JavaScript on the website is used</p>

        <ul>
            <li>to load the font from Adobe Typekit and</li>
            <li>to render the gallery pages in the photography section</li>
        </ul>

        <p>All other pages should be JavaScript-free. In addition there is no user tracking – aside from that performed by Adobe Typekit – and all assets (once again… aside from the font from Adobe Typekit) are served directly by my server(s), no CDN involved.</p>
    </div>
</Page>
</template>

<script>
import Page from '~/components/layouts/page'

export default {
    components: {
        Page
    },
    head () {
        return {
            title: 'About Me'
        }
    }
}
</script>