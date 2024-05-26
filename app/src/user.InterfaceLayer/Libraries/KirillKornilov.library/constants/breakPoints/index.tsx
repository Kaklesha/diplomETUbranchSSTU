enum BreakPoints {
	SMALL_MOBILE = 359,
	MOBILE = 979,
	TABLET = 1439,
}

 const size = {
 	mobileS: "359px",
// 	mobileM: "375px",
// 	mobileL: "425px",
// 	tablet: "768px",
 	laptop: "979px",
// 	laptopL: "1440px",
 	desktop: "1439px",
};

export const device = {
	// mobileS: `(min-width: ${size.mobileS})`,
	// mobileM: `(min-width: ${size.mobileM})`,
	// mobileL: `(min-width: ${size.mobileL})`,
	// tablet: `(min-width: ${size.tablet})`,
	// laptop: `(min-width: ${size.laptop})`,
	// laptopL: `(min-width: ${size.laptopL})`,
	// desktop: `(min-width: ${size.desktop})`,
	// desktopL: `(min-width: ${size.desktop})`
	mobileS: `(max-width: ${size.mobileS})`,
	laptop: `(max-width: ${size.laptop})`,
	desktop: `(max-width: ${size.desktop})`,
	// mobileM: `(min-width: ${size.mobileM})`,
	// mobileL: `(min-width: ${size.mobileL})`,
	// tablet: `(min-width: ${size.tablet})`,
	// laptop: `(min-width: ${size.laptop})`,
	// laptopL: `(min-width: ${size.laptopL})`,
	// desktop: `(min-width: ${size.desktop})`,
	// desktopL: `(min-width: ${size.desktop})`
  };

export default BreakPoints;
