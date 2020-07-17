/*
 * @Author: zhangjianzhong
 * @Date: 2020-07-15 10:50:35
 * @Last Modified by: zhangjianzhong
 * @Last Modified time: 2020-07-15 11:05:47
 */
let counter = 1;

const components = [
	{
		name: '省市区（下拉列表）',
		path: 'provinces-combo',
	},
];

const widgets = [
	{
		name: '列表组件',
		path: 'list',
	},
];

const utils = [

];

export default {
	components: components.map(v=>(v.path=`/components/${v.path}`,v.id=counter++,v)),
	widgets: widgets.map(v=>(v.path=`/widgets/${v.path}`,v.id=counter++,v)),
	utils: utils.map(v=>(v.path=`/utils/${v.path}`,v.id=counter++,v)),
};