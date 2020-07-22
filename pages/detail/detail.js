// pages/detail/detail.js
import {
	getNewsDetail
} from '../../data/news_data.js'
Page({

	/**
	 * 页面的初始数据
	 */
	data: {

	},
	addFavorites(options) {
		let article = this.data.article
		wx.setStorageSync(article.id, article)
		this.setData({
			isAdd: true
		})
	},
	cancleFavorites() {
		let article = this.data.article
		wx.removeStorageSync(article.id)
		this.setData({
			isAdd: false
		})
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		let id = options.id
		let result = getNewsDetail(id)
		if (result.code == '200') {
			this.setData({
				article: result.news
			})
		}
		var article = wx.getStorageSync(id)
		if (article != '') {
			this.setData({
				isAdd: true
			})
		} else {
			this.setData({
				isAdd: false
			})
		}
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
