# VTCC Development Tasks

## 使用说明

本文件用于管理 VTCC 项目的开发任务。

任务状态：

* `Todo`：尚未开始
* `Doing`：正在开发
* `Review`：等待检查
* `Done`：已完成
* `Blocked`：被其他问题阻塞

优先级：

* `P0`：MVP 必须完成
* `P1`：重要功能
* `P2`：可以延后
* `P3`：非必要优化

每次只处理一个任务。

任务完成后需要：

1. 本地运行并检查
2. 将状态改为 `Done`
3. 完成 Git Commit
4. Push 到 GitHub
5. 更新 Roadmap

---

# Phase 0：项目基础

## TASK-001：建立项目仓库

* Priority：P0
* Status：Done
* Dependencies：无
* Estimate：1 小时
* Commit：`chore: initialize VTCC project`

### 工作内容

* 创建本地 VTCC 项目目录
* 初始化 Git 仓库
* 创建 GitHub 远程仓库
* 完成第一次 Commit
* 完成第一次 Push

### 完成标准

* 本地 Git 正常工作
* GitHub 仓库可以访问
* `main` 分支正常推送

---

## TASK-002：建立基础文档结构

* Priority：P0
* Status：Done
* Dependencies：TASK-001
* Estimate：2 小时
* Commit：`docs: add project planning documents`

### 工作内容

* 创建 `README.md`
* 创建 `AGENTS.md`
* 添加 `docs/01-PRD.md`
* 创建 `docs/05-TASKS.md`
* 创建 `docs/06-ROADMAP.md`
* 创建其他待补充文档

### 完成标准

项目包含：

```text
VTCC/
├── README.md
├── AGENTS.md
├── docs/
│   ├── 01-PRD.md
│   ├── 02-UI.md
│   ├── 03-DATABASE.md
│   ├── 04-API.md
│   ├── 05-TASKS.md
│   └── 06-ROADMAP.md
├── frontend/
├── backend/
└── prompts/
```

---

# Phase 1：UI 与交互设计

## TASK-003：制定 UI 视觉规范

* Priority：P0
* Status：Done
* Dependencies：TASK-002
* Estimate：3 小时
* Commit：`docs: add UI design guidelines`

### 工作内容

* 确定品牌主色和辅助色
* 确定页面背景色
* 确定文字颜色层级
* 确定字体大小
* 确定圆角、间距、阴影规范
* 确定按钮、标签、卡片样式
* 将内容整理到 `docs/02-UI.md`

### 完成标准

* 页面视觉风格统一
* Codex 能根据文档实现基础样式
* 配色具有电竞感但不影响可读性

---

## TASK-004：设计首页

* Priority：P0
* Status：Todo
* Dependencies：TASK-003
* Estimate：4 小时
* Commit：`design: add home page design`

### 工作内容

* 搜索入口
* 今日比赛模块
* 热门赛事模块
* 页面加载状态
* 空数据状态
* 错误状态
* 比赛卡片设计
* 赛事卡片设计

### 完成标准

* 首页布局明确
* 所有模块有尺寸和间距说明
* 点击区域和跳转目标明确

---

## TASK-005：设计核心详情页面

* Priority：P0
* Status：Todo
* Dependencies：TASK-003
* Estimate：6 小时
* Commit：`design: add core detail page designs`

### 工作内容

设计以下页面：

* 赛事列表
* 赛事详情
* 比赛详情
* 战队详情
* 选手详情
* 搜索页面
* 收藏页面
* 我的页面

### 完成标准

* MVP 页面均有设计稿或明确布局说明
* 所有页面的交互和跳转明确
* UI 文档可以直接指导前端开发

---

# Phase 2：微信小程序基础

## TASK-006：初始化微信原生小程序

* Priority：P0
* Status：Todo
* Dependencies：TASK-002
* Estimate：2 小时
* Commit：`chore: initialize WeChat mini program`

### 工作内容

* 安装微信开发者工具
* 创建微信原生小程序项目
* 将项目放入 `frontend/`
* 配置基础文件
* 配置页面目录
* 配置全局样式
* 确保项目能够运行

### 完成标准

* 微信开发者工具无阻断性报错
* 小程序首页可以打开
* 项目目录清晰
* 代码已提交 GitHub

---

## TASK-007：配置页面路由和 TabBar

* Priority：P0
* Status：Done
* Dependencies：TASK-006
* Estimate：3 小时
* Commit：`feat: add page routes and tab bar`

### 工作内容

创建以下 Tab：

* 首页
* 赛事
* 收藏
* 我的

创建以下非 Tab 页面：

* 赛事详情
* 比赛详情
* 战队详情
* 选手详情
* 搜索

### 完成标准

* 四个 Tab 可以正常切换
* 非 Tab 页面可以正常进入和返回
* 页面路由无报错

---

## TASK-008：建立公共样式和组件结构

* Priority：P0
* Status：Todo
* Dependencies：TASK-006、TASK-003
* Estimate：4 小时
* Commit：`feat: add shared styles and component structure`

### 工作内容

* 创建公共样式文件
* 创建组件目录
* 创建比赛卡片
* 创建赛事卡片
* 创建战队卡片
* 创建选手卡片
* 创建空状态组件
* 创建加载状态组件
* 创建错误状态组件

### 完成标准

* 公共组件可以被页面调用
* 相同 UI 不重复实现
* 组件参数命名清晰

---

## TASK-009：建立 Mock 数据

* Priority：P0
* Status：Todo
* Dependencies：TASK-006
* Estimate：4 小时
* Commit：`feat: add mock VCT data`

### 工作内容

创建以下 Mock 数据：

* 赛事
* 比赛
* 分图比分
* 战队
* 选手
* 热门赛事
* 今日比赛

### 完成标准

* 数据结构与 PRD 一致
* 页面可以通过 ID 查找对应数据
* 数据可以覆盖正常、空数据和异常状态

---

# Phase 3：核心页面开发

## TASK-010：开发首页

* Priority：P0
* Status：Todo
* Dependencies：TASK-004、TASK-007、TASK-008、TASK-009
* Estimate：6 小时
* Commit：`feat: implement home page`

### 工作内容

* 实现搜索入口
* 实现今日比赛列表
* 实现热门赛事列表
* 接入 Mock 数据
* 实现加载状态
* 实现空状态
* 实现错误状态
* 实现详情页跳转

### 完成标准

* 首页可以正常展示 Mock 数据
* 点击比赛进入比赛详情
* 点击赛事进入赛事详情
* 点击搜索框进入搜索页
* 无明显布局错误

---

## TASK-011：开发赛事列表页

* Priority：P0
* Status：Todo
* Dependencies：TASK-007、TASK-008、TASK-009
* Estimate：5 小时
* Commit：`feat: implement tournament list page`

### 工作内容

* 展示赛事列表
* 按赛区筛选
* 按状态筛选
* 展示赛事状态
* 实现赛事详情跳转

### 完成标准

* 筛选结果正确
* 点击赛事可以正常跳转
* 空数据状态正常展示

---

## TASK-012：开发赛事详情页

* Priority：P0
* Status：Todo
* Dependencies：TASK-011
* Estimate：6 小时
* Commit：`feat: implement tournament detail page`

### 工作内容

* 展示赛事基本信息
* 展示赛程
* 展示参赛战队
* 展示比赛状态
* 实现收藏入口
* 实现比赛和战队跳转

### 完成标准

* 根据赛事 ID 展示正确数据
* 点击比赛进入比赛详情
* 点击战队进入战队详情
* 页面返回逻辑正常

---

## TASK-013：开发比赛详情页

* Priority：P0
* Status：Todo
* Dependencies：TASK-010、TASK-012
* Estimate：7 小时
* Commit：`feat: implement match detail page`

### 工作内容

* 展示对阵双方
* 展示比分
* 展示比赛时间
* 展示 BO 类型
* 展示分地图比分
* 展示双方阵容
* 实现赛事、战队、选手跳转

### 完成标准

* 比赛状态显示正确
* 未开始、进行中、已结束状态可区分
* 分图比分展示正确
* 所有详情跳转正常

---

## TASK-014：开发战队详情页

* Priority：P1
* Status：Todo
* Dependencies：TASK-008、TASK-009
* Estimate：6 小时
* Commit：`feat: implement team detail page`

### 工作内容

* 展示战队基础信息
* 展示当前阵容
* 展示近期比赛
* 展示当前赛事
* 实现收藏功能入口
* 实现选手和比赛跳转

### 完成标准

* 根据战队 ID 展示正确数据
* 点击选手进入选手详情
* 点击比赛进入比赛详情

---

## TASK-015：开发选手详情页

* Priority：P1
* Status：Todo
* Dependencies：TASK-014
* Estimate：5 小时
* Commit：`feat: implement player detail page`

### 工作内容

* 展示选手头像
* 展示选手 ID
* 展示真实姓名和国籍
* 展示所属战队
* 展示角色定位
* 展示基础比赛数据
* 实现战队跳转

### 完成标准

* 根据选手 ID 展示正确数据
* 数据缺失时有合理占位
* 点击战队可以正常跳转

---

# Phase 4：搜索与收藏

## TASK-016：开发搜索功能

* Priority：P0
* Status：Todo
* Dependencies：TASK-009、TASK-010
* Estimate：7 小时
* Commit：`feat: implement global search`

### 工作内容

* 搜索赛事
* 搜索战队
* 搜索选手
* 模糊匹配
* 分类展示结果
* 保存搜索历史
* 清除搜索历史
* 无结果提示

### 完成标准

* 输入关键词可返回正确结果
* 搜索结果可以跳转到对应详情
* 搜索历史关闭小程序后仍然存在

---

## TASK-017：开发收藏功能

* Priority：P1
* Status：Todo
* Dependencies：TASK-012、TASK-014、TASK-015
* Estimate：7 小时
* Commit：`feat: implement local favorites`

### 工作内容

* 收藏赛事
* 收藏战队
* 收藏选手
* 取消收藏
* 使用本地存储保存收藏
* 收藏页面分类展示
* 避免重复收藏

### 完成标准

* 收藏状态显示正确
* 重新打开小程序后收藏仍然存在
* 点击收藏项目可以进入对应详情

---

## TASK-018：开发我的页面

* Priority：P2
* Status：Todo
* Dependencies：TASK-007
* Estimate：3 小时
* Commit：`feat: implement profile page`

### 工作内容

* 收藏入口
* 关于 VTCC
* 意见反馈入口
* 项目版本号
* 项目说明

### 完成标准

* 页面入口均可正常点击
* 内容简洁且符合 MVP 定位

---

# Phase 5：后端与数据库

## TASK-019：设计 MySQL 数据库

* Priority：P1
* Status：Todo
* Dependencies：TASK-009
* Estimate：6 小时
* Commit：`docs: add database design`

### 工作内容

设计以下数据表：

* tournaments
* matches
* match_maps
* teams
* players
* team_players
* favorites

### 完成标准

* 字段类型明确
* 主键和外键明确
* 索引设计合理
* 内容记录在 `docs/03-DATABASE.md`

---

## TASK-020：设计 REST API

* Priority：P1
* Status：Todo
* Dependencies：TASK-019
* Estimate：6 小时
* Commit：`docs: add REST API specification`

### 工作内容

设计以下接口：

* 今日比赛
* 赛事列表
* 赛事详情
* 比赛详情
* 战队详情
* 选手详情
* 全局搜索
* 收藏接口

### 完成标准

每个接口包含：

* 请求方法
* 请求路径
* 参数
* 返回结构
* 成功示例
* 错误示例

内容记录在 `docs/04-API.md`。

---

## TASK-021：初始化 Node.js 后端

* Priority：P1
* Status：Todo
* Dependencies：TASK-020
* Estimate：4 小时
* Commit：`chore: initialize Node.js backend`

### 工作内容

* 初始化 npm
* 安装 Express
* 创建后端目录结构
* 配置环境变量
* 添加统一响应结构
* 添加统一错误处理
* 配置开发启动命令

### 完成标准

* 后端服务可以正常启动
* 健康检查接口可以访问
* `.env` 未上传 GitHub

---

## TASK-022：实现核心查询接口

* Priority：P1
* Status：Todo
* Dependencies：TASK-019、TASK-020、TASK-021
* Estimate：12 小时
* Commit：`feat: implement core VCT APIs`

### 工作内容

* 赛事接口
* 比赛接口
* 战队接口
* 选手接口
* 搜索接口
* 分页
* 参数校验
* 错误处理

### 完成标准

* 核心接口返回正确数据
* 错误参数返回合理提示
* API 与文档保持一致

---

## TASK-023：小程序接入后端 API

* Priority：P1
* Status：Todo
* Dependencies：TASK-022
* Estimate：8 小时
* Commit：`feat: connect mini program to backend API`

### 工作内容

* 封装 `wx.request`
* 配置开发环境地址
* 替换 Mock 数据
* 实现请求 Loading
* 实现接口错误提示
* 保留 Mock 数据切换能力

### 完成标准

* 核心页面通过 API 获取数据
* 接口异常时页面不会崩溃
* Mock 和 API 可以切换

---

# Phase 6：测试与作品集整理

## TASK-024：功能测试与 Bug 修复

* Priority：P0
* Status：Todo
* Dependencies：所有核心功能
* Estimate：10 小时
* Commit：`test: complete MVP testing`

### 工作内容

* 测试所有页面
* 测试页面跳转
* 测试搜索
* 测试收藏
* 测试异常数据
* 测试空数据
* 测试不同屏幕
* 修复阻断性 Bug

### 完成标准

* 核心流程可以完整运行
* 无阻断性 Bug
* 控制台无大量错误

---

## TASK-025：完善作品集 README

* Priority：P0
* Status：Todo
* Dependencies：TASK-024
* Estimate：6 小时
* Commit：`docs: complete portfolio README`

### 工作内容

* 添加项目介绍
* 添加技术栈
* 添加功能截图
* 添加架构图
* 添加项目亮点
* 添加开发难点
* 添加运行方法
* 添加目录说明
* 添加 AI 协作说明
* 添加未来规划

### 完成标准

面试官打开 README 后，可以快速理解：

* 项目是什么
* 解决了什么问题
* 使用了什么技术
* 项目有哪些核心功能
* 开发者做了什么
* 有哪些技术亮点

---

## TASK-026：发布 V1.0.0

* Priority：P0
* Status：Todo
* Dependencies：TASK-024、TASK-025
* Estimate：3 小时
* Commit：`chore: prepare V1.0.0 release`

### 工作内容

* 更新版本号
* 更新 Roadmap
* 更新 Tasks
* 编写 Changelog
* 创建 Git Tag
* 创建 GitHub Release
* 上传演示截图或视频

### 完成标准

* GitHub Release 已创建
* 版本号为 `V1.0.0`
* README 和项目状态保持一致
* 项目可以用于简历和面试展示

---

# 当前任务


- Current Phase：Phase 1
- Current Task：TASK-004
- Status：Todo
- Next Task：设计首页

---

# 推荐 Commit 格式

```text
chore: initialize project
docs: add product requirement document
docs: add project roadmap
docs: add development task list
design: add home page design
feat: implement home page
fix: resolve tournament filter issue
refactor: simplify match data service
test: add search feature tests
```

不要使用以下模糊描述：

```text
update
修改
完成
改了一些东西
final
最新版
```
