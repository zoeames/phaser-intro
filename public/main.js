var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update:update });


function preload(){
  game.load.image('horse', '/img/alex-bisleys_horsy_5.png');
  game.load.image('background', '/img/backscroll.png');
  game.load.image('num3', '/img/spaz-oh_crikey-komische_sackratten_von_der_hohle.png');
  game.load.atlasJSONHash('bot', '/img/running_bot.png', '/img/running_bot.json');


}

var s1;

function create(){
  var s4 = game.add.sprite(0, 90, 'num3');
  s1 = game.add.sprite(30, 30, 'horse');
  var s2 = game.add.sprite(30, 350, 'background');
  var s3 = game.add.sprite(350, 350, 'background');
  s1.anchor.set(0.5);

  s2.scale.setTo(.5);
  s3.scale.setTo(.5);

  game.physics.enable(s1, Phaser.Physics.ARCADE);
  game.physics.enable(s4, Phaser.Physics.ARCADE);

  s1.body.velocity.x=50;

  var text = "Hey Yo!";
  var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

  var t = game.add.text(game.world.centerX-200, 50, text, style);

  var tween = game.add.tween(s4);
  tween.to({ x: 600 }, 6000);
  tween.start();

  var bot = game.add.sprite(550, 360, 'bot');
  bot.animations.add('run');
  bot.animations.play('run', 20, true);

  var tween2 = game.add.tween(bot);
  tween2.to({ x: 50 }, 4000);
  tween2.start();
}



function update () {
  if (game.physics.arcade.distanceToPointer(s1, game.input.activePointer) > 8)
  {
      game.physics.arcade.moveToPointer(s1, 300);
  }
  else
  {
      s1.body.velocity.set(0);
  }

}
