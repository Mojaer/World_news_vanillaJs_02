import { newsFetch } from "./Dataimport.js"


// elements

const bbcNews = document.getElementById('bbc')
const cnnNews = document.getElementById('cnn')
const newsIndia = document.getElementById('india')
const science = document.getElementById('Sports')
const entertainment = document.getElementById('entertainment')

newsFetch(bbcNews, '../resources/Data/bbcNews.json')
newsFetch(cnnNews, '../resources/Data/cnnNews.json')
newsFetch(newsIndia, '../resources/Data/newsIndia.json')
newsFetch(science, '../resources/Data/Science.json')
newsFetch(entertainment, '../resources/Data/entertainment.json')





