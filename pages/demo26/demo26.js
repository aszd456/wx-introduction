// pages/demo26/demo26.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
	nodes01:[{
		name:'div',
		attrs:{
			style:'line-height:60px;color:red;font-weight:bold'
		},
		children:[{
			type:'text',
			text:'Hello World'
		}]
	}],
	nodes02:[{
		name:'div',
		attrs:{
			class:'myStyle'
		},
		children:[{
			type:'text',
			text:'Hello World'
		}]
	}],
	nodes03:'<div style="line-height:60px;color:red;font-weight:bold">Hello World</div>'
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {

   },

   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {

   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function () {

   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function () {

   },

   /**
    * 生命周期函数--监听页面卸载
    */
   onUnload: function () {

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function () {

   },

   /**
    * 页面上拉触底事件的处理函数
    */
   onReachBottom: function () {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function () {

   }
})