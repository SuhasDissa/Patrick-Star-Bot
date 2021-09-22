const history = [
  "The founding fathers wouldn't let Benjamin Franklin work on the Declaration Of Independence because they were afraid he would slip a joke into it.",

  "Notorious Pirate/Pirate hunter Benjamin Hornigold once attacked a ship just to steal all of the crew member's hats. His men had gotten drunk and lost their hats during a party the night before and decided to board a ship to get replacements.",

  "In 1847, Robert Liston performed an amputation in 25 seconds, operating so quickly that he accidentally amputated his assistant's fingers as well. Both patient and assistant later died of sepsis, and a spectator reportedly died of shock, resulting in the only known surgical procedure with a 300% mortality rate.",

  "The Pentagon wasn't built that way for any defense reason — in fact, it's not even a regular pentagon. It was designed to fit nicely into the empty field between five major roads, but then later there was some reason why they had to build it somewhere else, I think it was too close to some city or something. Anyway, they'd already paid someone to design this five-sided building so they just said f**k it, it's a pentagon now.",
  'The first thing said to the Pilgrims by Native Americans, specifically by Samoset:"Do you have any beer?" In perfect English.By the time the Pilgrims arrived at Plymouth, European trade routes to North America already existed for generations. Trade diplomats and fishermen traveled extensively to and from Europe.',

  "Napoleon was attacked by a horde of bunnies while hunting.",

  "After Napoleon Bonaparte's death, his priest-confessor (Vignali) allegedly cut off Napoleon's penis. This was later sold as part of a collection and ended up in the possession of Dr. Abraham Rosenbach.Rosenbach took Napoleon's penis on tour; it was displayed on a small velvet cushion in New York's museum of French art.Apparently it's now owned by the Lattimer family in New York.",

  "In 1866, Liechtenstein sent out an army of 80 men to participate in the Austro-Prussian War. They came back with 81 men, suffering no casualties and having made one friend along the way.",

  "Fidel Castro really likes to drink and eat dairy products, so he made a giant ice cream shop and it's still functional. He mixed two breeds of cows to create a super cow that would stand up to heat and give out lots of milk and her name is ubre blanca.",

  'Pythagoras, the man who made one of the most iconic mathematical discoveries in history, had a phobia of beans."Ironically, it was his fear of beans that caused his death. When attackers chased him into a field of beans, he refused to enter and was killed instead.',

  "The Pope Saint Leo once convinced Attila the Hun to just turn around and leave, and no one knows how he did it.Then, years later, he encountered a dude called Gaiseric just South of Rome. Convinced him too to turn around and leave. NO ONE KNOWS HOW.",

  'President Lyndon B. Johnson liked showing journalists his penis (whether they wanted to or not) and also talking about how big it was.He also nicknamed it "Jumbo."',

  "Valerius Maximus wrote about Aeschylus' death.Basically, the Dramatist Aeschylus heard of a prophecy that he would meet his demise by a falling object, because of this he went outside of the city in order to avoid his death, little did he know that an eagle with a turtle flew over and dropped the turtle on his shiny bald head, mistaking his head for a rock.",

  "There was a Japanese soldier named Hiro Onoda who never realized ww2 was over until 1974. He was sent to a small island in the Philippines to spy on the American forces. He evaded capture and remained in the jungle to carry out his mission for the next 30 years. His former superior had to come out of retirement to convince him the war was over.",

  "Molasses flooded Boston on an unseasonably hot January day in 1919. For decades after, you could allegedly still smell the molasses during the summer. Unfortunately, 21 people died and 150 people were injured as a result of the flood... which makes it more absurd, in a rather morbid way.",

  "At the palace of Versailles, there were no restrooms. people would just crap in the corners. It would be cleared out every few days.",

  'Hitler suffered from the most horrendous gas complaints. His extreme diet, recurring stomach problems (likely psychosomatic) and reliance on quack drug pushers like Morell made life at his dinner table terrible for his guests. Speer writes about it in Inside The Third Reich. I guess that\'s why he had a dog?\n\n""According to the medical records, which were commissioned by the U.S. military, Hitler regularly took up to 28 different drugs to attempt to restrain his farting. This included pills containing strychnine, a poison, "which probably explains his stomach pains," said Bill Panagopulos, president of Alexander Autographs.',

  "Danish astronomer, alchemist, nobleman and all-around weirdo Tycho Brahe lost his nose after challenging another scientist to a duel to settle once and for all whose mathematical formula was better. He wore a metal prosthetic nose for the rest of his life.He also had a pet moose that died when it drank too much beer and fell down a flight of stairs. In 1601 Tycho attended a party during which he held himself from going to the bathroom, subsequently suffered a burst bladder, and died 10 days later."
];

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
module.exports.run = async (bot, message, args) => {

    var i = getRndInteger(0, history.length);
    return message.channel.send(history[i]);

}

module.exports.help = {
    name: "history",
    aliases: ["historyfact","hfact"]
} 
