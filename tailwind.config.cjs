const purge = process.env.NODE_ENV === "production" ? true : false;
console.log(process.env.NODE_ENV);
module.exports = {
	purge: { enable: true, content: ["./src/css/*.css"] },
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
