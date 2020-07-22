// pages/demo38/audio.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		poster: 'http://pic1.win4000.com/pic/f/5b/c2e252ea9c.jpg',
		name: '你的意义',
		author: 'IU',
		src:'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_11728651&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3'
	},
	audioPlay: function() {
		this.audioCtx.play()
	},
	audioPause: function() {
		this.audioCtx.pause()
	},
	audio14: function() {
		this.audioCtx.seek(14)
	},
	audioStart: function() {
		this.audioCtx.seek(0)
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function(e) {
		// 使用 wx.createAudioContext 获取 audio 上下文 context
		this.audioCtx = wx.createAudioContext('myAudio')
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
