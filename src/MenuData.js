export const MenuData = [
    {
        title: "Home",
        url: "/",
        cName: "nav-links",
        icon:"fa-solid fa-house fa-user"
    },

    {
        title: "Cart",
        url: "/cart",
        cName: "nav-links",
        icon:"fas fa-shopping-cart text-2xl text-white hover:text-white-500 cursor-pointer"

    },

    {
        title: "Whishlists",
        url: "/wishlist",
        cName: "nav-links",
        icon:"fa-solid fa-briefcase"
    },

    {
        title: "Marketplace",
        url: "/marketplace",
        cName: "nav-links",
        icon:"fa-solid fa-briefcase"
    },


    {
        title: "Sign up",
        url: "/Register",
        cName: "nav-links-mobile",
    },

    {
        title: "Become a seller",
        url: "/sell",

    },

    {
        title: "Profile Page",
        cName: "nav-links",
        dropdown: [
            { title: "Buyer Profile", url: "/buyer-profile" },
            { title: "Seller Profile", url: "/seller-profile" }
        ]
    },

]