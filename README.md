## 入门实例

第一部分介绍快速整合高德地图的步骤：

### 引入高德JS
1. 在高德地图的开发者平台申请key。
  [申请key地址](http://lbs.amap.com/dev/key)
  
2. 打开src目录下的index.html， 在head标签中添加以下代码，引入js:
  ```html
  <script type="text/javascript" src="http://webapi.amap.com/maps?v=1.4.4&key=您申请的key值"></script> 
  ```
   **注意**
   该js必须放在以下代码的前面：
   ```html
    <script src="build/main.js"></script>
  ```
  
### 创建地图容器
1. 打开home.html，在home页面里你想展示地图的地方创建一个div 容器，并指定id标识:
```html
<div id="container"></div>
```

2. 给地图容器指定大小，可以使用CSS为地图容器设置合适的大小(可选)，比如:
```css
#container {width:300px; height: 180px; } 
```

### 声明AMap对象并创建地图
1. 打开home.ts，在构造函数前添加一个变量：
```typescript
public map: any;
```

2. 添加一个方法使用：
```typescript
loadMap() {
    this.map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 8,
      center: [116.39,39.9]
    });
}
```

3. 打开src目录下的declarations.d.ts文件（如果没有就创建），这里就是写类型定义的地方：
```typescript
declare var AMap;
```
