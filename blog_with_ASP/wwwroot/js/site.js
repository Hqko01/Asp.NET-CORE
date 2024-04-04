const blogs = document.querySelectorAll('.middle .contentOutput .cnt .blog')
const navigation = document.querySelector('.middle .navigation .content')

blogs.forEach(blog => {
    var blogHeader = blog.children[0].textContent.toLocaleLowerCase()
    var nav = document.createElement('div')
    nav.setAttribute('class', 'nav')
    nav.setAttribute('id', blog.getAttribute('id'))
    nav.innerHTML = `<h2>${blogHeader}</h2>`
    if (blogHeader.length > 13) {
        nav.classList.add('wrap')
    }
    navigation.appendChild(nav)
})

function navSelector() {
    if (navigation.children.length > 0) {
        const nav = document.querySelectorAll('.middle .navigation .content .nav')

        nav.forEach(navOption => {
            navOption.addEventListener('click', () => {
                var selectedID = navOption.getAttribute('id')
                navSelectorClear()
                navOption.classList.add('selected')
                window.scroll({
                    top: 0,
                })
                blogs.forEach(blog => {
                    if (blog.getAttribute('id') == selectedID) {
                        window.scroll({
                            top: blog.getBoundingClientRect().top,
                        })
                    }
                })
            })
        })

        function navSelectorClear() {
            nav.forEach(navOption => {
                navOption.classList.remove('selected')
            })
        }

        function scrollNav() {
            window.addEventListener('scroll', () => {
                const windowHeight = window.innerHeight / 5
                blogs.forEach(blog => {
                    if (blog.getBoundingClientRect().top < windowHeight) {
                        var blogID = blog.getAttribute('id')
                        nav.forEach(navOption => {
                            if (navOption.getAttribute('id') == blogID) {
                                navSelectorClear()
                                navOption.classList.add('selected')
                            }
                        })
                    }
                })
            })

        } scrollNav()
    }
} navSelector()