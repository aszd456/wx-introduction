// pages/baseapi/baseapi.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		result: '待查询',
		word: '',
		src: '',
		isDownload:false,
		downLoadSrc:''
	},
	wordBlur(e) {
		this.setData({
			word: e.detail.value
		})
	},
	search() {
		let word = this.data.word;
		if (word == '') {
			wx.showToast({
				title: '单词不能为空',
				icon: 'none'
			})
		} else {
			wx.request({
				url: 'https://api.shanbay.com/bdc/search',
				data: {
					word: word
				},
				success: (res) => {
					console.log(res.data)
					let result = res.data.data.definition
					this.setData({
						result: result
					})
				}
			})
		}
	},
	chooseImage() {
		wx.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'],
			sourceType: ['album', 'camera'],
			success: (res) => {
				let src = res.tempFilePaths[0]
				this.setData({
					src: src
				})
			}
		})
	},
	uploadFile() {
		let src = this.data.src;
		if (src == '') {
			wx.showToast({
				title: '请选择文件',
				icon: 'none'
			})
		} else {
			var uploadTask = wx.uploadFile({
				url: 'http://localhost:8080/bili/uploadFile',
				filePath: src,
				name: 'file',
				success: (res) => {
					console.log(res)
					wx.showToast({
						title: res.data
					})
				}
			})
			uploadTask.onProgressUpdate((res) => {
				console.log('上传进度', res.progress)
				console.log('已上传的数据长度', res.totalBytesSent)
				console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
			})
		}
	},
	reset(){
		this.setData({
			downLoadSrc:'',
			isDownload:false
		})
	},
	download(){
		var downloadTask = wx.downloadFile({
			url:'http://e.hiphotos.baidu.com/image/pic/item/4e4a20a4462309f7e41f5cfe760e0cf3d6cad6ee.jpg',
			success: (res) => {
				if(res.statusCode===200){
					let src = res.tempFilePath;
					this.setData({
						downLoadSrc:src,
						isDownload:true
					})
				}else{
					wx.showToast({
						title:'下载失败'
					})
				}
			}
		})
		downloadTask.onProgressUpdate((res)=>{
			console.log('下载进度', res.progress)
			console.log('已下载的数据长度', res.totalBytesWritten)
			console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
		})
	},
	baseapi() {
		const requestTask = wx.request({
			url: '',
			data: {
				x: '1'
			},
			success(res) {
				console.log(res.data)
			}
		})
		// requestTask.abort(); 中断请求
		wx.chooseImage({
			success: (res) => {
				var tempFilePaths = res.tempFilePaths
				wx.uploadFile({
					url: '',
					filePath: tempFilePaths[0],
					name: 'file',
					formData: {
						'user': 'test'
					},
					success(res) {
						var data = res.data
					}
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
		wx.getSystemInfo({
			success(res) {
				console.log(res.model)
				console.log(res.pixelRatio)
				console.log(res.windowWidth)
				console.log(res.windowHeight)
				console.log(res.language)
				console.log(res.version)
				console.log(res.platform)
			}
		})
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
