// pages/demo33/picker.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		selectorItems: ['苹果', '香蕉', '葡萄'],
		multiSelectorItems: [
			['罗宋汤', '蘑菇汤'],
			['牛排', '猪排', '鱼排'],
			['冰淇淋', '鸡蛋布丁']
		],
		soup:['奶油蘑菇汤','罗宋汤','牛肉清汤'],
		maincourse:['牛肉卷','羊排','三文鱼'],
		dessert:['坚果冰淇淋','焦糖布丁','奶酪蛋糕'],
		value:[1,1,1],
		menu:[]
	},
	pickerviewChange(e){
		let v = e.detail.value;
		let menu = [];
		menu.push(this.data.soup[v[0]]);
		menu.push(this.data.maincourse[v[1]]);
		menu.push(this.data.dessert[v[2]]);
		this.setData({menu:menu});
	},
	selectorChange(e) {
		let i = e.detail.value;
		let value = this.data.selectorItems[i];
		this.setData({
			selector: value
		});
	},
	multiSelectorChange(e){
		let arrayIndex = e.detail.value;//1,2,1
		let array = this.data.multiSelectorItems;
		let value = new Array();
		for(let i =0;i<arrayIndex.length;i++){
			let k = arrayIndex[i];
			let v = array[i][k];
			value.push(v);
		}
		this.setData({multiSelector:value})
	},
	timeChange(e){
		let value = e.detail.value;
		this.setData({time:value})
	},
	dateChange(e){
		let value = e.detail.value;
		this.setData({date:value});
	},
	regionChange(e){
		let value = e.detail.value;
		this.setData({region:value});
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
