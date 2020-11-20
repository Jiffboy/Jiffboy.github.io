var jifBotCommands = [{"command":"message","category":"Customization","usage":"~message","description":"Displays your previously set message. To set a message, use the ~setmessage command."},{"command":"honkcount","category":"Miscellaneous","usage":"~honkcount","description":"Reports the number of times you have said honk\""},{"command":"totalhonks","category":"Miscellaneous","usage":"~totalhonks","description":"Reports the total number of honks accross all users\""},{"command":"honkboard","category":"Miscellaneous","usage":"~honkboard","description":"Reports the top 5 users who have honked the most\""},{"command":"wtf","category":"Reaction","usage":"~wtf","description":"Shows your disbelief as to what your fellow server goers have just done."},{"command":"neener","category":"Reaction","usage":"~neener","description":"Helps to prove your point that you were right."},{"command":"bully","category":"Reaction","usage":"~bully","description":"Reminds young rapscallions that this is a bully free zone."},{"command":"stfu","category":"Reaction","usage":"~stfu","description":"Tells someone to shut up."},{"command":"edgy","category":"Reaction","usage":"~edgy","description":"Informs someone that their prior sent comment was perhaps a tad too mischievous."},{"command":"sorry","category":"Reaction","usage":"~sorry","description":"A command to help you to articulate your regret for your actions."},{"command":"cheer","category":"Reaction","usage":"~cheer","description":"Displays one of several gifs of cute characters cheering you on."},{"command":"lewd","category":"Reaction","usage":"~lewd","description":"Displays a random image to react to someones lewd comment."},{"command":"doghouse","category":"Reaction","usage":"~doghouse name","description":"A command to be used when someone has been imprisoned by their significant other."},{"command":"gay","category":"Reaction","usage":"~gay","description":"For when the gaydar starts beeping."},{"command":"biggay","category":"Reaction","usage":"~biggay","description":"Inform somebody that they are the big gay."},{"command":"wheeze","category":"Reaction","usage":"~wheeze","description":"For use to accompany a joke that really wasn't that good."},{"command":"invitelink","category":"Utility","usage":"~invitelink","description":"Provides a link which can be used should you want to spread Jif Bot to another server."},{"command":"bigtext","category":"Utility","usage":"~bigtext phrase, ~bigtext phrase -d","description":"Takes the user input for messages and turns it into large letters using emotes. If you end your command call with -d, it will delete your message calling the bot."},{"command":"tinytext","category":"Utility","usage":"~tinytext phrase, ~tinytext phrase -d","description":"Takes the user input for messages and turns it into small letters. If you end your command call with -d, it will delete your message calling the bot.","alias":"smalltext"},{"command":"widetext","category":"Utility","usage":"~widetext phrase, ~widetext phrase -d","description":"Takes the user input for messages and turns it into a ＷＩＤＥ  ＢＯＩ. If you end your command call with -d, it will delete your message calling the bot."},{"command":"owo","category":"Utility","usage":"~owo phrase, ~owo phrase -d","description":"Takes the user input, and translates it into degenerate owo speak. If you end your command call with -d, it will delete your message calling the bot..","alias":"uwu"},{"command":"timer","category":"Utility","usage":"~timer -h2 -m30 message, ~timer 150 message","description":"Sets a reminder to ping you after a certain amount of time has passed. A message can be specified along with the time to be printed back to you at the end of the timer. Times can be specified using any combination of -m[minutes], -h[hours], -d[days], and -w[weeks] anywhere in the message. Additionally, to set a quick timer for a number of minutes, just do ~timer [minutes] message."},{"command":"choose","category":"Utility","usage":"~choose choice \"choice but with spaces\"","description":"Randomly makes a choice for you. You can use as many choices as you want, but seperate all choices using a space. If you wish for a choice to contain spaces, surround the choice with \"\"\n"},{"command":"youtube","category":"Utility","usage":"~youtube video title","description":"Takes whatever you give it and searches for it on YouTube, it will return the first search result that appears."},{"command":"mock","category":"Utility","usage":"~mock, ~mock message, ~mock message -d","description":"Mocks the text you provide it. If you end your command call with -d, it will delete your message calling the bot. If you do not specify any message, it will mock the most recent message sent in the text channel, and delete your command call."},{"command":"8ball","category":"Utility","usage":"~8ball","description":"asks the magic 8 ball a question."},{"command":"s8ball","category":"Utility","usage":"~s8ball","description":"asks the sassy 8 ball a question."},{"command":"tiltycat","category":"Utility","usage":"~tiltycat degree","description":"Creates a cat at any angle you specify.\nSpecial thanks to Erik (Assisting#8734) for writing the program. Accessed via ```http://www.writeonlymedia.com/tilty_cat/(degree).png``` where (degree) is the desired angle."},{"command":"tiltydog","category":"Utility","usage":"~tiltydog degree","description":"Creates a dog at any angle you specify.\nSpecial thanks to Erik (Assisting#8734) for writing the program. Accessed via ```http://www.writeonlymedia.com/tilty_dog/(degree).png``` where (degree) is the desired angle."},{"command":"joke","category":"Utility","usage":"~joke","description":"Tells a joke."},{"command":"meancount","category":"Miscellaneous","usage":"~meancount","description":"Reports the number of times Jif has said \"I mean\""},{"command":"inspire","category":"Utility","usage":"~inspire","description":"Gives an inspirational quote."},{"command":"whisper","category":"Miscellaneous","usage":"~whisper \"name\" message","description":"Sends a private message to someone on the server. The message containing your command call will be deleted for anonymity. NOTE: the \"name\" is the person's Discord username without the numbers."},{"command":"banterwtf","category":"Miscellaneous","usage":"~banterwtf","description":"A video to be played when Banter does something stupid."},{"command":"setmessage","category":"Customization","usage":"~setmessage This is my message","description":"Allows you to set a message that can be displayed at any time using the ~message command.","alias":"resetmessage"},{"command":"togglesignature","category":"Customization","usage":"~togglesignature :fox:","description":"Sets for a specific emote to be reacted to every message you send. To remove a signature, call the command without specifying an emote, or using the emote you already have set. NOTE: Jif Bot does NOT have nitro, this will only work with emotes that are available on this server.","alias":"resetsignature, setsignature"},{"command":"togglereactions","category":"Customization","usage":"~togglereactions, ~togglereactions all","description":"Toggles between enabling and disabling reactions for the channel the command was issued in. Reactions are set keywords that Jif Bot will respond to. This does not include commands. To disable/enable for all channels, follow the command with \"all\". If there is at least one channel in which reactions are disabled when using \"all\", all channels will be enabled, otherwise, all will be disabled. Only the server owner can execute this command."},{"command":"setwelcome","category":"Customization","usage":"~setwelcome","description":"Sets a channel to send messages to when new users join the server. To remove, issue the command in the channel the welcome is currently set to. Only the server owner can execute this command."},{"command":"setgoodbye","category":"Customization","usage":"~setgoodbye","description":"Sets a channel to send messages to when users leave the server. To remove, issue the command in the channel the goodbye is currently set to. Only the server owner can execute this command."},{"command":"setsnoop","category":"Customization","usage":"~setsnoop","description":"Sets a channel to send messages to whenever a message gets deleted in the server. To remove, issue the command in the channel the goodbye is currently set to. Only the server owner can execute this command."},{"command":"commands","category":"Information","usage":"~commands","description":"Shows all available commands.","alias":"help"},{"command":"help","category":"Information","usage":"~help commandName","description":"Used to get the descriptions of other commands."},{"command":"define","category":"Information","usage":"~define word OR ~define word -m","description":"Defines any word in the Oxford English dictionary. For multiple definitions, use -m at the end of the command."},{"command":"udefine","category":"Information","usage":"~udefine term","description":"Gives the top definition for the term from urbandictionary.com","alias":"slang"},{"command":"rammus","category":"Miscellaneous","usage":"~rammus","description":"PRAISE RAMMUS."},{"command":"stats","category":"Information","usage":"~stats region username","description":"Gives the stats for a league player on any region. The region name is the abbreviated verson of the region name. Example: na = North America."},{"command":"mastery","category":"Information","usage":"~mastery region username","description":"Gives the number of mastery points for the top 10 most played champions for a user on any server."},{"command":"movie","category":"Information","usage":"~movie airplane!","description":"Provides information for a movie as specified by name.","alias":"imdb"},{"command":"avatar","category":"Information","usage":"~avatar, ~avatar @person1 @person2, ~avatar person1id person2id","description":"Gets the avatar for one or more users. Mention a user or provide their id to get their avatar, or do neither to get your own. To do more than 1 person, separate mentions/ids with spaces."},{"command":"lunch","category":"Miscellaneous","usage":"~lunch","description":"lunch."},{"command":"shrug","category":"Miscellaneous","usage":"~shrug","description":"Shrugs."},{"command":"attention","category":"Miscellaneous","usage":"~attention","description":"Gives Dee the attention she craves."},{"command":"flat","category":"Miscellaneous","usage":"~flat","description":"Heralds the unseen truth."},{"command":"smoochie","category":"Miscellaneous","usage":"~smoochie","description":"Reese gives a smoochie."},{"command":"neeko","category":"Miscellaneous","usage":"~neeko","description":"A command to celebrate Neeko."},{"command":"lobster","category":"Miscellaneous","usage":"~lobster","description":"Displays the best image on the internet."},{"command":"info","category":"Information","usage":"~info, ~info @person1 @person2, ~info person1id person2id","description":"Gets varying pieces of Discord information for one or more users. Mention a user or provide their id to get their information, or do neither to get your own. To do more than 1 person, separate mentions/ids with spaces."},{"command":"reese","category":"Miscellaneous","usage":"~reese","description":"Prompts ladies to hit him up."},{"command":"beefact","category":"Information","usage":"~beefact","description":"Provides a fact about bees.","alias":"bees, bee, beefacts"},{"command":"no","category":"Reaction","usage":"~no","description":"Inform somebody that you will not be doing that"}]