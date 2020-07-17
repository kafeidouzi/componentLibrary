# examples

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## 编辑和维护文档

### 示例页面路径

> /src/views/modules/components/自己组件的文件夹/index.vue
>
> /src/views/modules/widgets/自己组件的文件夹/index.vue
>
> /src/views/modules/utils/自己组件的文件夹/index.vue

**目录下的index.vue必须小写**

### 左侧菜单配置文件

> /src/config/menus.js

在对应的模块数组中增加一个对象即可，需要提供菜单名称和示例页面文件夹名

```javascript
{
	name: '省市区（下拉列表）',
	path: 'provinces-combo',
}
```