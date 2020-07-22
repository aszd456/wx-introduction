// pages/equipmentapi/equipmentapi.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		result: '待查询',
		status: '获取中',
		code: '你大爷永远是你大爷',
		name: '',
		phone: '',
		brightness: '待获取'
	},
	getSysInfo() {
		wx.getSystemInfo({
			success: res => {
				this.setData({
					res: res
				})
			}
		})
	},
	getSysInfoSync() {
		let res = wx.getSystemInfoSync();
		this.setData({
			res: res
		});
	},
	reset() {
		this.setData({
			res: ''
		});
	},
	inputValue: '',
	inputBlur(e) {
		this.inputValue = e.detail.value
	},
	canIUse() {
		let txt = this.inputValue
		if (txt == '') {
			wx.showToast({
				title: '输入框不能为空',
				icon: 'none'
			})
		} else {
			let result = wx.canIUse(this.inputValue)
			this.setData({
				result: (result ? '支持' : '不支持')
			})
		}
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		wx.getNetworkType({
			success: res => {
				this.setData({
					status: res.networkType
				});
			}
		})
		wx.onNetworkStatusChange(res => {
			if (res.isConnected) {
				this.setData({
					status: res.networkType
				});
			} else {
				this.setData({
					status: '未联网'
				});
			}
		})
		wx.onCompassChange(res => {
			this.setData({
				degree: res.direction
			})
		})
		wx.onAccelerometerChange(res => {
			this.setData({
				acceleration: res
			})
		})
		wx.onUserCaptureScreen(function(res) {
			console.log('用户截屏了')
		})
		wx.onMemoryWarning(function() {
			console.log('收到内存不足警告')
		})
	},
	getWifiInfo() {
		/**先初始化 Wi-Fi 模块**/
		wx.startWifi({
			success(res) {
				console.log(res.errMsg, 'wifi初始化成功')
			},
			fail: function(res) {
				console.log(res.errMsg, 'wifi初始化失败')
			}
		})

		wx.getConnectedWifi({
			success: res => {
				this.setData({
					wifi: res.wifi
				})
			}
		})
	},
	scanCode() {
		wx.scanCode({
			success: res => {
				this.setData({
					scanCode: res
				})
			}
		})
	},
	setClipboard() {
		let code = this.data.code
		wx.setClipboardData({
			data: code,
			success() {
				wx.showToast({
					title: '复制成功'
				})
			}
		})
	},
	getClipboard() {
		wx.getClipboardData({
			success(res) {
				wx.showModal({
					title: '获取成功',
					content: '内容：' + res.data,
					showCancel: false
				})
			}
		})
	},
	nameBlur(e) {
		this.setData({
			name: e.detail.value
		})
	},
	phoneBlur(e) {
		this.setData({
			phone: e.detail.value
		})
	},
	makeCall() {
		wx.makePhoneCall({
			phoneNumber: this.data.phone
		})
	},
	addPerson() {
		let name = this.data.name
		let phone = this.data.phone
		if (name == '' || phone == '') {
			wx.showToast({
				title: '姓名和电话不能为空',
				icon: 'none'
			})
		} else {
			wx.addPhoneContact({
				firstName: name,
				mobilePhoneNumber: phone
			})
		}
	},
	sliderChange(e) {
		wx.setScreenBrightness({
			value: e.detail.value
		})
	},
	getBrightness() {
		wx.getScreenBrightness({
			success: res => {
				this.setData({
					brightness: res.value.toFixed(1)
				})
			}
		})
	},
	switchChange(e){
		let isKeeping = e.detail.value
		if(isKeeping){
			wx.setKeepScreenOn({
				keepScreenOn:true
			})
		}
	},
	vibrateLong(){
		wx.vibrateLong()
	},
	vibrateShort(){
		wx.vibrateShort()
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
