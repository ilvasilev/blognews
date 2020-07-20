const navRender = (userid) => {
    const links = [
        {
            title: 'Home',
            link: '/'
        },

        {
            title: 'Login',
            link: '/login'
        },

        {
            title: 'Register',
            link: '/register'
        },

        {
            title: 'Profile',
            link: `/profile/${userid}`
        },
    ]

    return links
}

export default navRender