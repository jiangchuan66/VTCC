# VTCC 微信原生小程序：赛事详情页资源清单

## 1. 通用图标

| 资源 | 用途 | 推荐格式 | 显示尺寸 | 临时占位 |
|---|---|---|---:|---|
| 返回箭头 | 自定义顶部导航 | SVG 源文件；小程序 PNG 或 iconfont | 22×22px | 可以，使用当前线性箭头 |
| 收藏星标 | 收藏赛事 | SVG / PNG | 21×21px | 可以，使用当前线性星标 |
| 日历图标 | 暂无比赛数据 | SVG / PNG | 24×24px，置于 52×52px 容器 | 可以 |
| 警示图标 | 加载失败 | SVG / PNG | 24×24px，置于 52×52px 容器 | 可以 |

图标统一采用约 1.8px 线宽、圆角端点。收藏选中态使用 `#FF4655`。

## 2. 赛事 Logo

| 资源 | 用途 | 推荐格式 | 显示尺寸 | 推荐源尺寸 | 临时占位 |
|---|---|---|---:|---:|---|
| Masters Toronto Logo | 顶部赛事信息 | 透明 PNG / WebP | 56×56px | 至少 224×224px | 可以，字母 `M` |

正式 Logo 不得包含卡片背景、圆角或阴影。

## 3. 战队 Logo

| 战队 | 简称 | 使用位置 | 显示尺寸 | 临时占位 |
|---|---|---|---:|---|
| Paper Rex | PRX | 比赛卡、参赛战队 | 36px / 40px | 可以，`PRX` |
| FNATIC | FNC | 比赛卡、参赛战队 | 36px / 40px | 可以，`FNC` |
| Wolves Esports | WOL | 比赛卡、参赛战队 | 36px / 40px | 可以，`WOL` |
| G2 Esports | G2 | 比赛卡、参赛战队 | 36px / 40px | 可以，`G2` |
| Sentinels | SEN | 参赛战队 | 40px | 可以，`SEN` |
| MIBR | MIBR | 参赛战队 | 40px | 可以，`MIBR` |
| Rex Regum Qeon | RRQ | 参赛战队 | 40px | 可以，`RRQ` |
| Gen.G | GEN | 参赛战队 | 40px | 可以，`GEN` |
| Team Heretics | TH | 参赛战队 | 40px | 可以，`TH` |
| Team Liquid | TL | 参赛战队 | 40px | 可以，`TL` |
| Xi Lai Gaming | XLG | 参赛战队 | 40px | 可以，`XLG` |
| Bilibili Gaming | BLG | 参赛战队 | 40px | 可以，`BLG` |

建议使用透明 PNG/WebP，源文件至少 160×160px。正式资源须来自赛事方或战队官方授权渠道。

## 4. 无需导出的资源

- 状态标签、筛选胶囊、分割线、圆点和卡片背景使用原生样式绘制。
- 骨架屏使用原生样式和动画绘制。
- 卡片边框与阴影不使用切图。
- 微信胶囊按钮不制作图片，由系统提供；页面只预留空间。

## 5. 文件命名建议

```text
assets/tournament-detail/
  icon-back.png
  icon-favorite-default.png
  icon-favorite-active.png
  state-calendar-empty.png
  state-warning-error.png
  event-masters-toronto.png
  team-prx.png
  team-fnc.png
  team-wol.png
  team-g2.png
  team-sen.png
  team-mibr.png
  team-rrq.png
  team-gen.png
  team-th.png
  team-tl.png
  team-xlg.png
  team-blg.png
```

## 6. 验收

- Logo 透明背景，无白边或多余画布。
- 同类 Logo 保持一致视觉面积。
- 2×/3× 屏幕下清晰。
- 临时字母占位仅用于联调，上线前替换。
- 替换图片后不得改变既定 Logo 容器尺寸与卡片布局。
- 不需要 Banner、背景图、渐变纹理、霓虹或电竞装饰资源。

