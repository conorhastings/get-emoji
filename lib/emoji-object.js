import allEmoji from './all-emoji';

export default allEmoji.reduce((emojis, emoji) => {
	emojis[emoji] = require(`./emoji/${emoji}.png`);
	return emojis;
}, {});