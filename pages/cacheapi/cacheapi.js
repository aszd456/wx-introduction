// pages/cacheapi/cacheapi.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		key: '',
		data: ''
	},
	keyInput(e) {
		this.setData({
			key: e.detail.value
		})
	},
	dataInput(e) {
		this.setData({
			data: e.detail.value
		})
	},
	setStorage(e) {
		let key = this.data.key
		if (key.length == 0) {
			wx.showToast({
				title: 'key不能为空',
				icon: 'none'
			})
		} else {
			wx.setStorage({
				key: key,
				data: this.data.data
			})
			// wx.setStorageSync(key,this.data.data) 同步存储
			wx.showToast({
				title: '存储成功',
				icon: 'success'
			})
		}
	},
	getStorage() {
		wx.getStorage({
			key: key,
			success: (res) => {
				this.setData({
					data: res.data
				})
			}
		})
		// var value = wx.getStorageSync(key) //同步获取
	},
	getStorageInfo() {
		wx.getStorageInfo({
			success: (res) => {
				this.setData({
					keys: res.keys,
					currentSize: res.currentSize,
					limitSize: res.limitSize
				})
			}
		})
		// var res = wx.getStorageInfoSync() 同步获取存储信息
		//res.keys res.currentSize res.limitSize
	},
	removeStorage(){
		wx.removeStorage({
		  key: 'key',
		  success (res) {
		    console.log(res)
		  }
		})
		// try {        同步删除数据
		//   wx.removeStorageSync('key')
		// } catch (e) {
		//   // Do something when catch error
		// }
	},
	clearStorage(){
		wx.clearStorage()
		// try {  //同步清空
		//   wx.clearStorageSync()
		// } catch(e) {
		//   // Do something when catch error
		// }
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

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
