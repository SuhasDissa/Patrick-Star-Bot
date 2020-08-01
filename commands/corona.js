const request = require("request");
const {MessageEmbed } = require("discord.js");
module.exports.run = async (bot, msg, args) => {

    const url = "https://corona.lmao.ninja/v3/covid-19/all";
      const localurl = "https://hpb.health.gov.lk/api/get-current-statistical";

      request(url, function(err, response, body) {
        let covid = JSON.parse(body);

        const coronaEmbedWorld = new MessageEmbed()
          .setColor("#ff7936")
          .setTitle("COVID-19 CASES WORLD")
          .addFields(
            { name: "☣️ Total cases", value: `${covid.cases}` },
            { name: "🔴 Active cases", value: `${covid.active}` },
            { name: "♻️ Recovered", value: `${covid.recovered}` },
            { name: "⚰️ Dead", value: `${covid.deaths}` }
          );
        return msg.channel.send(coronaEmbedWorld);
      });

      request(localurl, function(error, responselk, bodylk) {
        let covidlk = JSON.parse(bodylk);

        const coronaEmbedLk = new MessageEmbed()
          .setColor("#ff7936")
          .setTitle("COVID-19 CASES SRI-LANKA")
          .addFields(
            {
              name: "☣️ Total cases",
              value: `${covidlk.data.local_total_cases}`
            },
            {
              name: "🔴 Active cases",
              value: `${covidlk.data.local_active_cases}`
            },
            { name: "♻️ Recovered", value: `${covidlk.data.local_recovered}` },
            { name: "⚰️ Dead", value: `${covidlk.data.local_deaths}` },
            { name: "➕ New Cases", value: `${covidlk.data.local_new_cases}` }
          );
        return msg.channel.send(coronaEmbedLk);
        });
}

module.exports.help = {
    name: "corona",
    aliases: ["covid"]
} 