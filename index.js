const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: '16b16t.net',
  port: 25565,
  username: '',
  password: '',
  version: '1.12.2',
  auth: ''
})

function lookAtNearestPlayer () {
  const playerFilter = (entity) => entity.type === 'player'
  const playerEntity = bot.nearestEntity(playerFilter)
  
  if (!playerEntity) return
  
  const pos = playerEntity.position.offset(0, playerEntity.height, 0)
  bot.lookAt(pos)
}

bot.on('physicTick', lookAtNearestPlayer)

bot.on('chat', (username, message) => {
  console.log(`${username} said "${message}"`)
  if(!message.startsWith("!test")) return;
  if(message.startsWith("!" + "test"))
    console.log("test Command received")
    bot.chat(`>The test command`)
})
bot.on('chat', (username, message) => {
  if(!message.startsWith("!origin")) return;
  if(message.startsWith("!" + "origin"))
    console.log("origin Command received")
    bot.chat(`>I used to be a player, but I have devoted myself to become a bot!`)
})


bot.on('chat', (username, message) => {
  if(!message.startsWith("!rules")) return;
  if(message.startsWith("!" + "rules"))
    console.log("rules Command received")
    bot.chat(`>No HaCkInG oN sErVeR! HaCkInG iS bAnNaBlE!`)
})
bot.on('chat', (username, message) => {
  if(!message.startsWith("!kill")) return;
  if(message.startsWith("!" + "kill"))
    console.log("kill Command received")
    bot.chat(`/kill`)
})
bot.on('chat', (username, message) => {
  if(!message.startsWith("!getfucked")) return;
  if(message.startsWith("!" + "getfucked"))
    console.log("getfucked Command received")
    bot.chat(`>I am a delicious femboy, please fuck me!`)
})
bot.on('chat', (username, message) => {
  if(!message.startsWith("!sex")) return;
  if(message.startsWith("!" + "sex"))
    console.log("sex Command received")
    bot.chat(`>*Fucks ${username}*`)
})
bot.on('chat', (username, message) => {
  if(!message.startsWith("!op")) return;
  if(message.startsWith("!" + "op"))
    console.log("op Command received")
    bot.chat(`>${username} has now been opped!`)
})

bot.chatAddPattern(("Please,login with the command"), "login");

bot.on('login', function(username) {
    console.log('attempting to login')
    bot.chat(`/login Boymodebot1`)
})

bot.on('playerLeft', function(username){
    console.log(`${username} has left the game!`)
    bot.chat(`Goodbye!`)
})

bot.on(`playerJoined`, function(username){
  console.log(`${username} has joined the game!`)
  bot.chat(`Hello!`)
})

bot.chatAddPattern(/^.*?(\w*) wants (?:to teleport to you|that you teleport to them)\.$/, "tpRequest", "epicsb tpa request");

bot.on('tpRequest', function(username) {
    console.log(`tp request recieved from ${username}`)
    bot.chat(`/tpy ${username}`)
})
  bot.chatAddPattern((`whispers to you`), "whisper");

bot.on('whisper', function(username) {
    console.log(`${username} whispers to you`)
    bot.chat(`/w ${username} Don't tell anybody, but I'm gay... I am trusting you not to tell anyone and expose me...`)
});


