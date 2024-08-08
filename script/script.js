var github = document.getElementById('github')
var discord = document.getElementById('discord')
var insta = document.getElementById('insta')
var linkedin = document.getElementById('linkedin')

github.addEventListener('mouseenter', Github)
github.addEventListener('mouseout', outgit)

discord.addEventListener('mouseenter', Discord)
discord.addEventListener('mouseout', outdisc)

insta.addEventListener('mouseenter', Insta)
insta.addEventListener('mouseout', outinsta)

linkedin.addEventListener('mouseenter', Linkedin)
linkedin.addEventListener('mouseout', outlinkedin)


function Github(){
    github.src = "img/github.png"
    github.style.transition = '0.5s ease'
}

function outgit(){
    github.src = 'img/git.png'
    github.style.transition = '0.5s ease'
}

function Discord(){
    discord.src = 'img/disc.png'
}

function outdisc(){
    discord.src = 'img/discord.png'
}

function Insta(){
    insta.src = 'img/instagram.png'
}

function outinsta(){
    insta.src = 'img/insta.png'
}

function Linkedin(){
    linkedin.src = 'img/linke.png'
}

function outlinkedin(){
    linkedin.src = 'img/linkedin.png'
}