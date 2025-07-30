export const getImageNavbar = (imageName) => {
    return new URL(`../assets/Navbar/${imageName}`, import.meta.url).href;
};
