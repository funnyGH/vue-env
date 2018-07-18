/**
 * 底层网络请求封装
 */

import Vue from 'vue';
import axios from 'axios';
import { Tool } from "./Tool.js";
import { baseUrl, cancleHTTP } from "./env.js";

Vue.prototype.$http = axios;

export function LoginMethod(params, ishowload) {
	let postUrl = baseUrl + '/oauth/token';
	if(!ishowload) {
		Tool.loading();
	}
	return new Promise((resolve, reject) => {
		axios({
			url: postUrl,
			method: 'post',
			data: JSON.stringify(params),
			dataType: 'json',
			headers: {
				'Content-Type': 'text/json'
			}
		})
		.then(response => {
			if(!ishowload) {
				Tool.close();
			}
			resolve(response.data);
		}, err => {
			if(!ishowload) {
				Tool.close();
			}
			Tool.tip("网络异常，请检查网络");
		})
		.catch(err => {
			if(!ishowload) {
				Tool.close();
			}
			reject(error)
		});
	})
}


export function PostMethod(url, params, ishowload) {
	if(!ishowload) {
		Tool.loading();
	}
	return new Promise((resolve, reject) => {
		axios({
			url: baseUrl,
			method: 'post',
			data: params,
			dataType: 'json',
		})
		.then(response => {
			if(!ishowload) {
				Tool.close();
			}
			let data = response.data;
			if (!data) {
				Tool.tip("暂无数据");
				return;
			}
			if(!data.status) {
				if(data.code == 401) {
					Tool.alert("登录失效", "", false, () => {
						window.location.href = 'token.html';
					});
				} else {
					Tool.tip(data.data);
				}
				return;
			}
			resolve(data);
		}, err => {
			if(!ishowload) {
				Tool.close();
			}
			if(err.config) {
				Tool.tip("网络异常，请检查网络");
			}
		})
		.catch(err => {
			if(!ishowload) {
				Tool.close();
			}
			reject(error)
		});
	})
}


export function GetLocalMethod(url, param, ishowload) {
	if(!ishowload) {
		Tool.loading();
	}
	return new Promise((resolve, reject) => {
		axios({
			url: url,
			method: 'GET',
			dataType: 'json',
			data: param,
		})
		.then(response => {
			if(!ishowload) {
				Tool.close();
			}
			resolve(response);
		}, err => {
			if(!ishowload) {
				Tool.close();
			}
		})
		.catch(err => {
			if(!ishowload) {
				Tool.close();
			}
			reject(error)
		});
	})
}