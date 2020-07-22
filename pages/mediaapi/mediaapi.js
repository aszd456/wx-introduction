// pages/mediaapi/mediaapi.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		src: '',
		videoSrc: '',
		isHidden: true,
		isRecording: false,
		cameraSrc: ''
	},
	chooseImage() {
		wx.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				var tempFilePaths = res.tempFilePaths
				this.setData({
					src: tempFilePaths[0]
				})
			}
		})
	},
	previewImage() {
		wx.previewImage({
			urls: [this.data.src]
		})
	},
	getImageInfo() {
		wx.getImageInfo({
			src: this.data.src,
			success: (res) => {
				wx.showToast({
					icon: 'none',
					title: '宽:' + res.width + ',高:' + res.height
				})
			}
		})
	},
	saveImage() {
		wx.saveImageToPhotosAlbum({
			filePath: this.data.src,
			success: (res) => {
				wx.showToast({
					title: '保存成功'
				})
			}
		})
	},
	start() {
		/**录音初始化**/
		const options = {
			duration: 10000,
			sampleRate: 44100,
			numberOfChannels: 1,
			encodeBitRate: 192000,
			format: 'aac',
			frameSize: 50
		}
		this.rm.start(options)
	},
	stop() {
		this.rm.stop()
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {
		/**录音***/
		this.rm = wx.getRecorderManager();
		this.rm.onStop((res) => {
			const audioCtx = wx.createInnerAudioContext();
			audioCtx.src = res.tempFilePath
			audioCtx.play()
		})
		/**背景音乐**/
		this.bgAudioManager = wx.getBackgroundAudioManager()
		this.audioCtx2 = wx.createInnerAudioContext()

		/***创建 video 上下文 VideoContext 对象**/
		this.videoContext = wx.createVideoContext('myVideo')
		/**创建录像**/
		this.cameraCtx = wx.createCameraContext()
	},
	/**初始化背景音乐***/
	initialAudio() {
		this.bgAudioManager.title = '你的意义'
		this.bgAudioManager.epname = '你的意义'
		this.bgAudioManager.singer = 'IU'
		this.bgAudioManager.coverImgUrl = 'http://pic1.win4000.com/pic/f/5b/c2e252ea9c.jpg'
		this.bgAudioManager.src =
			'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_11728651&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3'
	},
	play() {
		this.initialAudio()
		this.bgAudioManager.play()
	},
	pause() {
		this.bgAudioManager.pause()
	},
	/****初始化音频*****/
	initialAudio2() {
		this.audioCtx2.autoplay = true
		this.audioCtx2.src =
			'http://www.170mv.com/kw/antiserver.kuwo.cn/anti.s?rid=MUSIC_11728651&response=res&format=mp3|aac&type=convert_url&br=128kmp3&agent=iPhone&callback=getlink&jpcallback=getlink.mp3'
		this.audioCtx2.onPlay((res) => {
			console.log('开始播放')
		})
		this.audioCtx2.onPause((res) => {
			console.log('暂停播放')
		})
		this.audioCtx2.onStop((res) => {
			console.log('停止播放')
		})
	},
	audioPlay() {
		this.initialAudio2()
		this.audioCtx2.play()
	},
	audioPause() {
		this.audioCtx2.pause()
	},
	audioStop() {
		this.audioCtx2.stop()
	},
	//选择视频
	chooseVideo() {
		wx.chooseVideo({
			sourceType: ['album', 'camera'],
			maxDuration: 60,
			camera: 'back',
			success: (res) => {
				console.log(res.tempFilePath)
				this.setData({
					videoSrc: res.tempFilePath
				})
			},
			fail: (res) => {
				console.log(res)
			}
		})
	},
	videoPlay() {
		this.videoContext.play()
	},
	videoPause() {
		this.videoContext.pause()
	},
	videoSave() {
		wx.saveVideoToPhotosAlbum({
			filePath: this.data.videoSrc,
			success: (res) => {
				wx.showToast({
					title: '保存成功'
				})
			}
		})
	},
	inputValue: '',
	bindInputBlur(e) {
		this.inputValue = e.detail.value
	},
	bindSendDanmu() {
		this.videoContext.sendDanmu({
			text: this.inputValue,
			color: this.getRandomColor()
		})
	},
	startRecord() {
		var that = this;
		that.setData({
			isRecording: true,
			isHidden: true
		})
		that.cameraCtx.startRecord({
			timeoutCallback(res) {
				that.setData({
					isRecording: false,
					cameraSrc: res.tempVideoPath,
					isHidden: false
				})
			}
		})
	},
	stopRecord() {
		var that = this;
		that.cameraCtx.stopRecord({
			success(res) {
				that.setData({
					isRecording: false,
					cameraSrc: res.tempVideoPath,
					isHidden: false
				})
			}
		})
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

	},
	/**
	 * 生成随机颜色
	 */
	getRandomColor() {
		let rgb = []
		for (let i = 0; i < 3; i++) {
			let color = Math.floor(Math.random() * 256).toString(16)
			color = color.length == 1 ? '0' + color : color,
				rgb.push(color)
		}
		return '#' + rgb.join('')
	}
})
