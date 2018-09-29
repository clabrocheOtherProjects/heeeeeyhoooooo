let state = true
$body = document.querySelector('body')
$img = document.querySelector('.img')
$text = document.querySelector('.text')
$marquee = document.querySelector('.marquee')
$title = document.querySelector('title')
$audio = document.querySelector('audio')

/** main function */
function turn() {
    if (state) changeState('black', 'HEEEEEEEEY')
    else changeState('white', 'HOOOOOOOO!')
    toggleAnimation()
    state = !state
}

/** appear and disappear imgs */
function toggleAnimation() {
    $img.className = 'img'
    setTimeout(() => {
        $img.className = 'img appear'
    }, 100);
}

/** change element in dom (colors and text) */
function changeState(className, text) {
    $title.textContent = text
    $body.className = className
    $text.textContent = text
}

/** responsive */
function resize() {
    $text.style.fontSize = $body.clientWidth / 10 + "px"
    $img.style.width = $body.clientWidth / 2 + "px"
}


/**Launch  */
resize()
window.onresize = resize
const start = 0
$audio.currentTime = start
$audio.addEventListener('canplay', _ => {
    $audio.play();
    [
        1400,
        1900,
        4680,
        5462,
        8144,
        8619,
        9272,
        9709,
        10286,
        10765,
        12762,
        13052,
        13744,
        14038,
        19424,
        19679,
        20572,
        20860,
        21120,
        21380,
        21632,
        21906,
        22797,
        23011,
        28343,
        28646,
        29581,
        29859,
        37502,
        38109,
        38661,
        39209,
        39829,
        40300,
        40804,
        41349,
        41945,
        42475,
        43023,
        43567,
        44119,
        44616,
        46182,
        46485,
        47347,
        47667,
        53025,
        53298,
        54131,
        54385,
        54664,
        54932,
        55201,
        55444,
        56162,
        56473,
        61980,
        62208,
        63036,
        63312,
        63581,
        63858,
        64111,
        64388,
        65217,
        65535,
        70806,
        71023,
        71768,
        72095,
        72961,
        73271,
        74202,
        74481,
        75403,
        75646
    ].map(trigger => {
        setTimeout(() => {
            $marquee.className = state ? "marquee zoom" : "marquee dezoom"
            turn()
            console.log(trigger, state ? 'ho' : 'hey')
        }, trigger - start * 1000);
    })
})