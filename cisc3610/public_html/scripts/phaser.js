new Phaser.Game({
    type: Phaser.AUTO,
    width: 900,
    height: 950,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: {
        preload: preload,
        create: create
    },
    parent: 'game',
})


function preload() {

    this.load.image('pizza', 'pizza.png')
    this.load.image('pepperoni', 'pepperoni.png')


}

function create() {

    this.add.image(450, 475, 'pizza')
    var pep = this.add.image(450, 475, 'pepperoni')
    var pep1 = this.add.image(300, 300, 'pepperoni')
    var pep2 = this.add.image(650, 475, 'pepperoni')
    var pep3 = this.add.image(650, 650, 'pepperoni')
    var pep4 = this.add.image(450, 650, 'pepperoni')


    pep.setInteractive();
    pep1.setInteractive();
    pep2.setInteractive();
    pep3.setInteractive();
    pep4.setInteractive();
    this.input.setDraggable(pep);
    this.input.setDraggable(pep1);
    this.input.setDraggable(pep2);
    this.input.setDraggable(pep3);
    this.input.setDraggable(pep4);


    this.input.on('drag', function(pointer, gameObject, dragX, dragY) {

        gameObject.x = dragX;
        gameObject.y = dragY;

    });
}


// function preload() {
//     this.load.setBaseURL('http://labs.phaser.io');

//     this.load.image('sky', 'assets/skies/space3.png');
//     this.load.image('logo', 'assets/sprites/phaser3-logo.png');
//     this.load.image('red', 'assets/particles/red.png');
// }

// function create() {
//     this.add.image(400, 300, 'sky');

//     var particles = this.add.particles('red');

//     var emitter = particles.createEmitter({
//         speed: 100,
//         scale: { start: 1, end: 0 },
//         blendMode: 'ADD'
//     });

//     var logo = this.physics.add.image(400, 100, 'logo');

//     logo.setVelocity(100, 200);
//     logo.setBounce(1, 1);
//     logo.setCollideWorldBounds(true);

//     emitter.startFollow(logo);
// }