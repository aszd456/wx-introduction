// pages/interfaceapi/interfaceapi.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		title: ''
	},
	showToast() {
		wx.showToast({
			title: 'Hello 微信',
			duration: 7000
		})
	},
	hideToast() {
		wx.hideToast()
	},
	showLoading() {
		wx.showLoading({
			title: '加载中'
		})
	},
	hideLoading() {
		setTimeout(function() {
			wx.hideLoading()
		}, 2000)
	},
	showModal() {
		wx.showModal({
			title: '提示',
			content: '这是一个模态弹窗',
			success: res => {
				if (res.confirm) {
					console.log('确定按钮被单击')
				} else {
					console.log('取消按钮被单击')
				}
			}
		})
	},
	showModal2() {
		wx.showModal({
			title: '提示',
			content: '这是一个模态弹窗(无取消按钮)',
			showCancel: false
		})
	},
	showActionSheet() {
		wx.showActionSheet({
			itemList: ['Menu1', 'Menu2', 'Menu3'],
			itemColor: '#00aaff',
			success(res) {
				console.log(res.tapIndex)
			},
			fail(res) {
				console.log(res.errMsg)
			}
		})
	},
	titleInput(e) {
		this.setData({
			title: e.detail.value
		})
	},
	setTitle() {
		wx.setNavigationBarTitle({
			title: this.data.title
		})
	},
	showAnimation() {
		wx.showNavigationBarLoading()
	},
	hideAnimation() {
		wx.hideNavigationBarLoading()
	},
	setColor() {
		wx.setNavigationBarColor({
			frontColor: '#000000',
			backgroundColor: '#ff5500',
			animation: {
				duration: 2000,
				timingFunc: 'easeInOut'
			}
		})
	},
	setText() {
		wx.setTabBarBadge({
			index: 1,
			text: '99'
		})
	},
	removeText() {
		wx.removeTabBarBadge({
			index: 1
		})
	},
	showRedDot() {
		wx.showTabBarRedDot({
			index: 1
		})
	},
	hideRedDot() {
		wx.hideTabBarRedDot({
			index: 1
		})
	},
	setBarStyle() {
		wx.setTabBarStyle({
			color: '#ff0000',
			selectedColor: '#0000ff'
		})
	},
	setBarColor() {
		wx.setTabBarItem({
			index: 1,
			text: '界面api',
			iconPath: '/icon/_img.png',
			selectedIconPath: '/icon/img.png'
		})
	},
	resetTabBar() {
		wx.setTabBarItem({
			index: 1,
			text: 'interfaceapi',
			iconPath: "icon/_search.png",
			selectedIconPath: "icon/search.png"
		})
		wx.setTabBarStyle({
			color: "#000000",
			selectedColor: "#ff0000"
		})
	},
	showTabBar() {
		wx.showTabBar()
	},
	hideTabBar() {
		wx.hideTabBar()
	},
	navigateTo() {
		wx.navigateTo({
			url: '/pages/navigate/navigate'
		})
	},
	redirectTo() {
		wx.redirectTo({
			url: '/pages/mediaapi/mediaapi'
		})
	},
	reLaunch() {
		wx.reLaunch({
			url: '/pages/mediaapi/mediaapi'
		})
	},
	switchTab() {
		wx.switchTab({
			url: '/pages/menu/menu'
		})
	},
	rotate() { //旋转
		this.animation.rotate(45).step()
		this.setData({
			animation: this.animation.export()
		})
	},
	scale() { //缩放
		this.animation.scale(0.5).step()
		this.setData({
			animation: this.animation.export()
		})
	},
	translate() { //偏移
		this.animation.translate(100, 50).step()
		this.setData({
			animation: this.animation.export()
		})
	},
	skew() { //倾斜
		this.animation.skewX(45).step()
		this.setData({
			animation: this.animation.export()
		})
	},
	sync() { //同时动画
		this.animation.rotate(45).scale(0.5).translate(100, 50).skewX(45).step()
		this.setData({
			animation: this.animation.export()
		})
	},
	queue() { //依次动画
		this.animation.rotate(45).step().scale(0.5).step().translate(100, 50).step().skewX(45).step()
		this.setData({
			animation: this.animation.export()
		})
	},
	resetAni() { //还原
		this.animation.rotate(0).scale(1).translate(0, 0).skewX(0).step()
		this.setData({
			animation: this.animation.export()
		})
	},
	backToTop() { //回到顶部
		wx.pageScrollTo({
			scrollTop: 0,
			duration: 2000
		})
	},
	fillRect() { //填充矩形
		this.ctx1.setFillStyle('orange')
		this.ctx1.fillRect(50, 50, 200, 200)
		this.ctx1.draw()
	},
	strokeRect() { //描边矩形
		this.ctx1.setStrokeStyle('purple')
		this.ctx1.strokeRect(100, 100, 100, 100)
		this.ctx1.draw()
	},
	clearRect() { //清空画布
		this.ctx1.clearRect(0, 0, 300, 300)
		this.ctx1.draw()
	},
	/**绘制基本图形**/
	drawSample() {
		let ctx = this.ctx2
		ctx.beginPath()
		ctx.moveTo(150, 75)
		ctx.lineTo(225, 225)
		ctx.lineTo(75, 225)
		ctx.closePath()
	},
	strokePath() { //描边路径
		let ctx = this.ctx2
		this.drawSample()
		ctx.setStrokeStyle('red')
		ctx.stroke()
		ctx.draw()
	},
	fillPath() { //填充路径
		let ctx = this.ctx2
		this.drawSample()
		ctx.setFillStyle('blue')
		ctx.fill()
		ctx.draw()
	},

	/**

	 * 生命周期函数--监听页面加载

	 */

	onLoad: function(options) {
		this.ctx1 = wx.createCanvasContext('myCanvas1')
		this.ctx2 = wx.createCanvasContext('myCanvas2')

		/********笑脸********/
		const ctx = wx.createCanvasContext('myCanvas3')
		ctx.setFillStyle('yellow')
		ctx.beginPath()
		ctx.arc(150, 150, 80, 0, Math.PI * 2, true)
		ctx.stroke()
		//如果不需要勾勒脸的轮廓，可省略
		ctx.fill()

		ctx.setFillStyle('black')

		ctx.beginPath()
		ctx.arc(110, 130, 10, 0, Math.PI * 2, true)
		ctx.fill()

		ctx.beginPath()
		ctx.arc(190, 130, 10, 0, Math.PI * 2, true)
		ctx.fill()

		ctx.beginPath()
		ctx.arc(150, 160, 50, 0, Math.PI, false)
		ctx.stroke()

		ctx.draw()
		/******爱心*********/
		const ctxx = wx.createCanvasContext('myCanvas4')
		ctxx.setFillStyle('red')
		ctxx.beginPath()
		ctxx.moveTo(90, 55)
		ctxx.bezierCurveTo(90, 52, 85, 40, 65, 40)
		ctxx.bezierCurveTo(35, 40, 35, 77.5, 35, 77.5)
		ctxx.bezierCurveTo(35, 95, 55, 117, 90, 135)
		ctxx.bezierCurveTo(125, 117, 145, 95, 145, 77.5)
		ctxx.bezierCurveTo(145, 77.5, 145, 40, 115, 40)
		ctxx.bezierCurveTo(100, 40, 90, 52, 90, 55)
		ctxx.fill()
		ctxx.draw()
		/*********绘制文本********/
		const ctxs = wx.createCanvasContext('myCanvas5')
		ctxs.setFontSize(40)

		ctxs.setTextBaseline('bottom')
		ctxs.fillText('你好', 30, 150)

		ctxs.setFillStyle('green')
		ctxs.setTextBaseline('top')
		ctxs.fillText('微信小程序', 80, 150)
		ctxs.draw()
		/************/
		this.ctx3 = wx.createCanvasContext('myCanvas6')
		this.ctx4 = wx.createCanvasContext('myCanvas7')
		this.drawBox()

		this.ctx5 = wx.createCanvasContext('myCanvas8')
		this.ctx5.setLineWidth(10)
		this.drawSample2()

		this.ctx6 = wx.createCanvasContext('myCanvas9')

		/*******阴影效果******/
		const ctx10 = wx.createCanvasContext('myCanvas10')
		ctx10.setFillStyle('lightgreen')
		ctx10.setShadow(10, 10, 50, 'gray')
		ctx10.fillRect(75, 75, 150, 150)
		ctx10.draw()

		/******绘制图案******/
		const ctx11 = wx.createCanvasContext('myCanvas11')
		const pattern = ctx11.createPattern('/images/car.png', 'repeat')
		ctx11.setFillStyle(pattern)
		ctx11.beginPath()
		ctx11.arc(150, 150, 100, 0, 2 * Math.PI, true)
		ctx11.fill()
		ctx11.draw()
		/*************/
		this.ctx12 = wx.createCanvasContext('myCanvas12')
		this.drawBoxImg()
		/***********/
		this.ctx13 = wx.createCanvasContext('myCanvas13')
		this.drawImg()
		/*****预览图片*****/
		const ctx14 = wx.createCanvasContext('myCanvas14')
		ctx14.setFillStyle('lightblue')
		ctx14.fillRect(75,75,150,150)
		ctx14.draw()
	},
	drawImage01() { //绘制原图
		let ctx = this.ctx3
		ctx.drawImage('/images/iu.jpg', 0, 0)
		ctx.draw()
	},
	drawImage02() { //缩放图片
		let ctx = this.ctx3
		ctx.drawImage('/images/iu.jpg', 0, 0, 300, 300)
		ctx.draw()
	},
	drawImage03() { //图片切割
		let ctx = this.ctx3
		ctx.drawImage('/images/iu.jpg', 210, 90, 160, 160, 50, 50, 200, 200)
		ctx.draw()
	},
	drawBox() {
		let ctx = this.ctx4
		ctx.setFillStyle('green')
		ctx.fillRect(75, 75, 150, 150)
		ctx.draw()
	},
	setAlpha01() { //不透明
		let ctx = this.ctx4
		ctx.setGlobalAlpha(1)
		this.drawBox()
	},
	setAlpha02() { //半透明
		let ctx = this.ctx4
		ctx.setGlobalAlpha(0.5)
		this.drawBox()
	},
	setAlpha03() { //透明
		let ctx = this.ctx4
		ctx.setGlobalAlpha(0)
		this.drawBox()
	},
	drawSample2() {
		let ctx = this.ctx5
		ctx.beginPath()
		ctx.moveTo(150, 75)
		ctx.lineTo(225, 225)
		ctx.lineTo(75, 225)
		ctx.closePath()
		ctx.stroke()
		ctx.draw()
	},
	setLineWidth() { //线条加粗
		this.ctx5.setLineWidth(20)
		this.drawSample2()
	},
	setLineJoin() { //圆形交点
		this.ctx5.setLineJoin('round')
		this.drawSample2()
	},
	setLineDash() { //虚线效果
		this.ctx5.setLineDash([10, 10], 2)
		this.drawSample2()
	},
	resetLine() {
		let ctx = this.ctx5
		ctx.setLineWidth(10)
		ctx.setLineJoin('miter')
		ctx.setLineDash([10, 0], 0)
		this.drawSample2()
	},
	linear() { //线性渐变
		let ctx = this.ctx6
		var grd = ctx.createLinearGradient(0, 0, 200, 200)
		grd.addColorStop(0, 'blue')
		grd.addColorStop(1, 'lightblue')

		ctx.setFillStyle(grd)
		ctx.fillRect(50, 50, 200, 200)
		ctx.draw()
	},
	circular() { //圆形渐变
		let ctx = this.ctx6
		var grd = ctx.createCircularGradient(150, 150, 100)
		grd.addColorStop(0, 'purple')
		grd.addColorStop(1, 'white')

		ctx.setFillStyle(grd)
		ctx.fillRect(50, 50, 200, 200)
		ctx.draw()
	},
	drawBoxImg() {
		let ctx = this.ctx12
		ctx.setFillStyle('lightgreen')
		ctx.fillRect(75, 75, 150, 150)
		ctx.draw()
	},
	translateImg() { //移动
		this.ctx12.translate(75, 75)
		this.drawBoxImg()
	},
	rotateImg() { //旋转
		this.ctx12.rotate(20 * Math.PI / 180)
		this.drawBoxImg()
	},
	scaleImg() { //缩放
		this.ctx12.scale(0.5, 0.5)
		this.drawBoxImg()
	},
	transformImg() { //矩阵变形
		this.ctx12.transform(1.25, 20 * Math.PI / 180, 0, 0.5, 50, 50)
		this.drawBoxImg()
	},
	drawImg(){
		let ctx = this.ctx13
		ctx.drawImage('/images/car.png',100,100)
		ctx.draw()
	},
	clip(){
		let ctx = this.ctx13
		ctx.save() //保存
		ctx.beginPath()
		ctx.arc(150,150,100,0,2*Math.PI)
		ctx.clip()
		ctx.drawImage('/images/car.png',100,100)
		ctx.draw()
		ctx.restore() //恢复
	},
	previewImage(){
		wx.canvasToTempFilePath({ //保存画布内容到临时图片路径
			canvasId:'myCanvas14',
			success:res=>{
				var src = res.tempFilePath
				wx.previewImage({ //预览图片
					current:src, //当前显示图片的http连接
					urls:[src] //需要预览的图片http连接列表
				})
			}
		})
	},
	startPullDown(){
		wx.startPullDownRefresh({
			success:res=>{
				console.log(res.errMsg)
			}
		})
	},
	stopPullDown(){
		wx.stopPullDownRefresh()
	},
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */

	onReady: function() {
		this.animation = wx.createAnimation({
			duration: 1000
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
		console.log('正在下拉刷新')
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
