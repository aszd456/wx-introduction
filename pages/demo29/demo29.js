// pages/demo29/demo29.js
Page({

   /**
    * 页面的初始数据
    */
   data: {
		checkboxItems:[
			{name:'苹果',value:'apple'},
			{name:'橙子',value:'orange',checked:true},
			{name:'梨子',value:'pear'},
			{name:'草莓',value:'strawberry'},
			{name:'香蕉',value:'banana'},
			{name:'葡萄',value:'grape'},
      ],
      checkList:['orange']
   },
	checkboxChange(e){
      console.log('checkbox发生变化,被选中的值是：'+e.detail.value)
      this.setData({
         checkList:e.detail.value
      })
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