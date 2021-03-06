const purge = process.env.NODE_ENV === "production" ? true : false;

module.exports = {
	purge: { content: ["./src/css/*.css"] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
