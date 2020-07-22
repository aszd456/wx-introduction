Page({
	onLoad(options){
		const ctx = wx.createCanvasContext('myCanvas');
		ctx.setFillStyle('orange');
		ctx.fillRect(20,20,150,80);
		ctx.draw();
	}
})