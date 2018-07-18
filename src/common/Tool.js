/**
 * 在此封装各种工具类的方法
 */
import Vue from 'vue';
import { Indicator, Toast, MessageBox } from 'mint-ui'; // 加载提示框  消息提示框  弹出式提示框

/*
 * 公共变量
 * */
export let Tool = {

	/*
	 * 提示信息，有确定按钮，参数可配置
	 * message：提示信息
	 * title：提示标题。可不填
	 * showCancelButton：默认false，布尔值
	 * scuessfun：确定按钮的回调
	 * cancelfun：取消按钮的回调
	 * */

	alert: function(message, title, showCancelButton, scuessfun, cancelfun) {
		MessageBox({
			title: title || "",
			message: message,
			showCancelButton: showCancelButton,
			closeOnClickModal: false
		}).then(action => {
			if(action === "confirm") {
				if(scuessfun) {
					scuessfun();
				}
			} else {
				if(cancelfun) {
					cancelfun();
				}
			}
		});
	},
	/*
	 * 自定义弹出框内容
	 */
	prompt: function(option, scuessfun, cancelfun) {
		MessageBox(option).then(action => {
			if(action === "confirm") {
				if(scuessfun) {
					scuessfun();
				}
			} else {
				if(cancelfun) {
					cancelfun();
				}
			}
		});
	},
	/*
	 'snake'
	'fading-circle' //默认
	'double-bounce'
	'triple-bounce'
	 * */
	loading: function(texts, spinnerType) {
		Indicator.open({
			text: texts || "",
			spinnerType: spinnerType || "fading-circle"
		});
	},

	close: function() {
		Indicator.close();
	},

	tip: function(message, duration) {
		var instance = Toast({
			message: message
		});
		duration = duration ? duration : 3000;
		setTimeout(() => {
			instance.close();
		}, duration);
	},

	//处理时间的方法
	formate: function(data, format) {
		data = new Date(data);
		var o = {
			"M+": data.getMonth() + 1, //month
			"d+": data.getDate(), //day
			"h+": data.getHours(), //hour
			"m+": data.getMinutes(), //minute
			"s+": data.getSeconds(), //second
			"q+": Math.floor((data.getMonth() + 3) / 3), //quarter
			"S": data.getMilliseconds() //millisecond
		}
		if(/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (data.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		for(var k in o) {
			if(new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			}
		}
		return format;
	},

	/*
	时间段选取
	日期类型 timetype：1 今天  2 本周  3 本月  4 今年
	传入日期参数 data
	日期格式 timeformat
	*/
	timeslot: function(timetype, data, timeformat) {
		data = new Date(data);
		var start = '',
			end = '',
			oneday = 1000*60*60*24,
			getday = data.getDay(),
			getmonth = data.getMonth(),
			getyear = data.getFullYear();
		switch(timetype){
			case 1:
				start = data;
				end = data;
				break;
			case 2:
				start = new Date(data.getTime()-(getday-1)*oneday);
				end = new Date(data.getTime()+(7-getday)*oneday);
				break;
			case 3:
				start = new Date(getyear,getmonth,1);
				end = new Date(new Date(getyear,getmonth+1,1).getTime() - oneday);
				break;
			case 4:
				start = new Date(getyear, 0, 1);
				end = new Date(getyear, 11, 31);
				break;
			default:
				start = '';
				end = '';
				break;
		}
		if(start) {
			start = Tool.formate(start, timeformat);
			end = Tool.formate(end, timeformat);
		}
		return {
			start: start,
			end: end
		}
	},
	// 向下滑动展示内容
	myscrollTop: function(box, dom) {
		this.$nextTick(() => {
			this.$refs[box].scrollTo(0, document.querySelector(dom).offsetTop);
		})
	}
}