import {getNewsList} from '../../data/news_data.js'

Page({
  data: {
    swiperImg:[
		{src:'/images/detail/carousel/01.jpg'},
		{src:'/images/detail/carousel/02.jpg'},
		{src:'/images/detail/carousel/03.jpg'}
	]
  },
  goToDetail(e){
	  let id = e.currentTarget.dataset.id
	  wx.navigateTo({
		  url:'../detail/detail?id='+id
	  })
  },
  onLoad: function () {
    let list = getNewsList()
	this.setData({
		newsList:list
	})
  }
})
