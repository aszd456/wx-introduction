const news = [{
	id: '264698',
	title: '教育理念',
	poster: '/images/detail/carousel/02.jpg',
	content: '让每一个 IT 人，都直接或间接地受到过尚硅谷帮助！尚硅谷由一群有活力、有理想、有责任、有担当的尚硅谷人组成，我们将不负青春，为传播 IT 技术、为软件行业的健康的生态发展贡献力量。',
	add_date: '2018-03-05'
}, {
	id: '304083',
	title: '尚硅谷',
	poster: '/images/detail/carousel/01.jpg',
	content: '硅谷IT教育隶属于北京晟程华科教育科技有限公司，是国内领先的专业IT教育培训机构，拥有北京、深圳两处基地。自2013年成立以来，凭借领先的教育理念、前沿的课程体系、优秀的教学团队、科学的考评制度、严格的教务管理、完备的就业保障，已经为行业输送了万余名高端技术人才。',
	add_date: '2018-11-14'
}, {
	id: '305670',
	title: '学科介绍',
	poster: '/images/detail/carousel/03.jpg',
	content: '尚硅谷现开设JavaEE+大数据、HTML5前端+全栈、大数据+机器学习、Python+人工智能、Android+HTML5混合开发等多门学科；同时，通过视频分享、谷粒学院在线课堂、直播课堂等多种方式，满足了全国编程爱好者对多样化学习场景的需求。目前，尚硅谷“谷粉”人数已超500万，面授班学员绝大多数都在北上广深等一线城市高薪就业，就业薪资更是屡创新高！',
	add_date: '2018-11-27'
}];

var getNewsList = function() {
	let list = [];
	for (var i = 0; i < news.length; i++) {
		let obj = {};
		obj.id = news[i].id;
		obj.poster = news[i].poster;
		obj.add_date = news[i].add_date;
		obj.title = news[i].title;
		list.push(obj);
	}
	return list;
}

var getNewsDetail = function(newsID) {
	let msg = {
		code: '404',
		news: {}
	};
	for (var i = 0; i < news.length; i++) {
		if (newsID == news[i].id) {
			msg.code = '200';
			msg.news = news[i];
			break;
		}
	}
	return msg;
}

export {
	getNewsList,
	getNewsDetail
}
