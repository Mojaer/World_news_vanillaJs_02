
const bbcNews = document.getElementById('a')
const cnnNews = document.getElementById('b')
const newsIndia = document.getElementById('c')
const science = document.getElementById('d')
const entertainment = document.getElementById('e')


const elements = [bbcNews, cnnNews, newsIndia, science, entertainment]
elements.forEach((element) => element.style.display = 'none')
elements[0].style.display = 'block';



const displayNews = (id, btn) => {
    elements.forEach((element) => element.style.display = 'none')

    const navBtn = document.getElementsByClassName('navBtn')

    for (let index = 0; index < navBtn.length; index++) {
        navBtn[index].className = 'btn btn-light navBtn'

    }

    btn.className = 'btn btn-light navBtn active'
    elements[id].style.display = 'block';
}

// modal upload news

const detailsLoad = (url, img) => {
    document.getElementById('modalImage').src = img
    document.getElementById('Link').href = url

}
