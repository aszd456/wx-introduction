var pageData = {
	data: {
		switch1Checked: true,
		switch2Checked: false,
		switch1Style: '',
		switch2Style: 'text-decoration: line-through',
		height: 20,
		focus: false
	},
	bindButtonTap: function() {
		this.setData({
			focus: true
		})
	},
	bindTextAreaBlur: function(e) {
		console.log(e.detail.value)
	},
	bindFormSubmit: function(e) {
		console.log(e.detail.value.textarea)
	}
}
for (var i = 1; i <= 2; ++i) {
	(function(index) {
		pageData[`switch${index}Change`] = function(e) {
			console.log(`switch${index}发生change事件，携带值为`, e.detail.value)
			var obj = {}
			obj[`switch${index}Checked`] = e.detail.value
			this.setData(obj)
			obj = {}
			obj[`switch${index}Style`] = e.detail.value ? '' : 'text-decoration: line-through'
			this.setData(obj)
		}
	})(i)
}
Page(pageData)
