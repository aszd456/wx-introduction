// pages/positionapi/positionapi.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		lat: 39.917940,
		lon: 116.397140,
		markers: [{
			id: '001',
			latitude: 39.911810,
			longitude: 116.394800,
			iconPath: '/images/location.png',
			label: {
				content: '故宫博物院'
			}
		}]
	},
	getLocation() {
		wx.getLocation({
			success: (res) => {
				this.setData({
					lat: res.latitude,
					lon: res.longitude,
					speed: res.speed,
					accuracy: res.accuracy
				})
			}
		})
	},
	chooseLocation() {
		wx.chooseLocation({
			success: (res) => {
				this.setData({
					name: res.name,
					address: res.address,
					lat: res.latitude,
					lon: res.longitude
				})
			}
		})
	},
	openLocation() {
		wx.getLocation({
			type: 'gcj02',
			success: (res) => {
				var lat = res.latitude
				var lon = res.longitude
				wx.openLocation({
					latitude: lat,
					longitude: lon
				})
			}
		})
	},
	getCenterLocation() {
		this.mapCtx.getCenterLocation({
			success: (res) => {
				this.setData({
					lat: res.latitude,
					lon: res.longitude
				})
			}
		})
	},
	moveToLocation() {
		this.mapCtx2.moveToLocation()
	},
	translateMarker() {
		this.mapCtx3.translateMarker({
			markerId: '001',
			autoRotate: true,
			duration: 1000,
			destination: {
				latitude: 39.917940,
				longitude: 116.397140
			}
		})
	},
	includePoints() {
		this.mapCtx4.includePoints({
			padding: [10],
			points: [{
				latitude: 30.129590,
				longitude: 118.174940
			}, {
				latitude: 30.471110,
				longitude: 117.804250

			}]
		})
	},
	getRegion(){
		this.mapCtx5.getRegion({
			success:(res)=>{
				console.log(res)
			}
		})
	},
	getScale(){
		this.mapCtx6.getScale({
			success: (res) => {
				this.setData({
					scale:res.scale
				})
			}
		})
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
		this.mapCtx = wx.createMapContext('myMap')
		this.mapCtx2 = wx.createMapContext('myMap2')
		this.mapCtx3 = wx.createMapContext('myMap3')
		this.mapCtx4 = wx.createMapContext('myMap4')
		this.mapCtx5 = wx.createMapContext('myMap5')
		this.mapCtx6 = wx.createMapContext('myMap6')
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
