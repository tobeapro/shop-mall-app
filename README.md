## vue-spa

## vue全家桶实现一个小的移动商城

> #### 年前正好赶上vue-cli 3.0 beta的到来，就花几天时间完成一个移动小商城的demo,是个新手项目
#####  [在线预览](https://tobeapro.github.io/shop-mall-app.html) 
##### ![二维码](https://tobeapro.github.io/img/shop-mall-app3.png)
##### 手机扫描二维码或在电脑上打开浏览器调试手机模式
 
> #### 开始
- 首先同样是全局安装
```javascript
  npm install -g @vue/cli
  // 或
  yarn add global @vue/cli
```
- 然后生成项目以后可以发现,目录结构变简单了。build和config目录都没有了，vue-cli依旧使用webpack打包工具只是默认配置好了。只剩下vue-config.js当你需要更改默认配置才会用的到,实际开发者我并没有使用到。
- 开发过程中大部分人都会使用模板、样式预处理。这些也只要安装相应的依赖。我是使用pug和sass,安装对应的模板依赖包,打包工具默认已安装几乎所有的loader,所以直接用就行了。

> #### 项目预览

![项目预览](https://tobeapro.github.io/img/shop-mall-app1.gif)

![项目预览](https://tobeapro.github.io/img/shop-mall-app2.gif)

> #### 项目总结

- ##### 现在静态资源(之前老版本脚手架的static目录)都放在`public`下。

- ##### http请求依旧使用`axios`模拟请求本地数据,轮播图和弹框使用mint-ui。

- ##### 购物车数据使用`vuex`进行管理
