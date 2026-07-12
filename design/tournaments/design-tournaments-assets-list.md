# VTCC 微信原生小程序：赛事列表页资源清单

> 交付范围：仅正常状态赛事列表页。

## 1. 通用图标

| 资源 | 用途 | 推荐格式 | 推荐显示尺寸 | 临时占位 |
|---|---|---|---:|---|
| 右箭头 | 赛事卡片可点击提示 | SVG 源文件；小程序 PNG 或 iconfont | 18×18px | 可以，使用当前线性箭头 |

右箭头使用约 1.8px 线宽、圆角端点，颜色为 `#86909C`。

## 2. 赛事 Logo

| 资源 | 用途 | 推荐格式 | 推荐显示尺寸 | 推荐源尺寸 | 临时占位 |
|---|---|---|---:|---:|---|
| VCT CN Logo | 中国赛区赛事卡 | 透明 PNG / WebP | 46×46px 容器内 | 至少 184×184px | 可以，字母 `CN` |
| VCT EMEA Logo | EMEA 赛事卡 | 透明 PNG / WebP | 46×46px 容器内 | 至少 184×184px | 可以，字母 `EM` |
| VCT Pacific Logo | 太平洋赛事卡 | 透明 PNG / WebP | 46×46px 容器内 | 至少 184×184px | 可以，字母 `PAC` |
| VCT Americas Logo | 美洲赛事卡 | 透明 PNG / WebP | 46×46px 容器内 | 至少 184×184px | 可以，字母 `AM` |
| VALORANT Masters Logo | 大师赛卡片 | 透明 PNG / WebP | 46×46px 容器内 | 至少 184×184px | 可以，字母 `M` |
| VALORANT Champions Logo | 全球冠军赛卡片 | 透明 PNG / WebP | 46×46px 容器内 | 至少 184×184px | 可以，字母 `VCT` |

正式 Logo 必须来自赛事官方或获授权资源。图片本身不得包含卡片底色、圆角或阴影。

## 3. 无需导出的资源

- 筛选胶囊、分组圆点和状态标签：原生样式绘制。
- 下拉刷新指示：使用原生组件或样式绘制。
- 卡片边框与阴影：原生样式绘制。

## 4. 文件命名建议

```text
assets/tournaments/
  icon-chevron-right.png
  logo-vct-cn.png
  logo-vct-emea.png
  logo-vct-pacific.png
  logo-vct-americas.png
  logo-masters.png
  logo-champions.png
```

## 5. 导出与验收

- 位图提供至少 4 倍于显示尺寸的源资源。
- 透明 PNG/WebP 无白边、黑边和多余画布。
- 各赛事 Logo 保持一致视觉面积。
- 临时字母占位仅用于联调，正式上线前替换。
- 替换资源后不得改变 46px Logo 容器或卡片布局。
- 不需要背景图、Banner、渐变纹理、霓虹或电竞装饰资源。

