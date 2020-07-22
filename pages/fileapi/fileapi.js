// pages/fileapi/fileapi.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		tempFilePath: '', //临时文件路径
		tip1: '',
		tip2: '',
		tip3: '',
		tip4: '',
		savedFilePath: '', //本地文件路径
		tip5: '',
		path:''
	},
	downloadFile() {
		wx.downloadFile({
			url: 'http://pic1.win4000.com/pic/f/5b/c2e252ea9c.jpg',
			success: (res) => {
				if (res.statusCode === 200) {
					this.setData({
						tip1: '提示文件已下载',
						tempFilePath: res.tempFilePath
					})
				}
			}
		})
	},
	saveFile() {
		let tempFilePath = this.data.tempFilePath
		if (tempFilePath == '') {
			wx.showToast({
				title: '请先下载文件',
				icon: 'none'
			})
		} else {
			wx.saveFile({
				tempFilePath: tempFilePath,
				success: (res) => {
					console.log('文件保存到：' + res.savedFilePath)
					this.setData({
						savedFilePath: res.savedFilePath
					})
					wx.showToast({
						title: '保存成功'
					})
				}
			})
		}
	},
	getFileInfo() {
		let tempFilePath = this.data.tempFilePath
		if (tempFilePath == '') {
			wx.showModal({
				title: '提示',
				content: '请先下载文件',
				showCancel: false
			})
		} else {
			wx.getFileInfo({
				filePath: tempFilePath,
				success: (res) => {
					this.setData({
						tip2: '文件大小：' + res.size + '字节'
					})
				}
			})
		}
	},
	getSavedFileList() {
		wx.getSavedFileList({
			success: (res) => {
				console.log(res.fileList)
				this.setData({
					tip3: '文件列表已获取'
				})
			}
		})
	},
	getSavedFileInfo() {
		let savedFilePath = this.data.savedFilePath
		if (savedFilePath == '') {
			wx.showModal({
				title: '提示',
				content: '请先保存文件',
				showCancel: false
			})
		} else {
			wx.getSavedFileInfo({
				filePath: savedFilePath,
				success: (res) => {
					this.setData({
						tip4: '文件大小：' + res.size + '字节'
					})
				}
			})
		}
	},
	removeFile() {
		let savedFilePath = this.data.savedFilePath
		if (savedFilePath == '') {
			wx.showModal({
				title: '提示',
				content: '请先下载和保存文件',
				showCancel: false
			})
		} else {
			wx.removeSavedFile({
				filePath: savedFilePath,
				success: (res) => {
					this.setData({
						tip5: '文件已删除'
					})
				},
				fail: (res) => {
					console.log(res)
					this.setData({
						tip5: '文件已不存在'
					})
				}
			})
		}
	},
	downloadPdf(){
		wx.downloadFile({
			url: 'http://example.com/somefile.pdf',
			success: (res) => {
				if (res.statusCode === 200) {
					this.setData({
						path: res.tempFilePath
					})
					wx.showToast({
						title:'下载成功',
						icon:'none'
					})
				}else {
					wx.showToast({
						title:'下载失败',
						icon:'none'
					})
				}
			}
		})
	},
	openDocument() {
		let path = this.data.path
		if (path == '') {
			wx.showModal({
				title: '提示',
				content: '请先下载文档',
				showCancel: false
			})
		} else {
			wx.openDocument({
				filePath: path
			})
		}
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
