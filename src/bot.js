import {Telegraf} from 'telegraf';
import dotenv from 'dotenv';
import {getData} from './index.js'

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx)=>subscribe(ctx));

bot.launch();


async function subscribe(ctx){
    let articles = await getData()
    
//foreach loop 


    articles.forEach((article)=>{
    
        if (!article.includes('Speciale:')){
            ctx.reply(article)
        }
    })

}