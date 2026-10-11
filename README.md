# 反物质维度 · YC自用

个人使用，请勿传播。

游戏地址：https://chen13754.github.io/ADChinese/

基于 [aquamarine309/ADChinese](https://github.com/aquamarine309/ADChinese) 的固定提交 `9d01a0a6d284c9b76918135c874033c7419bd7bf`。原游戏由 Hevipelle（IvarK）及开发团队创作；汉化整合、校对与 ESM 改造来自 aquamarine309，并参考安卓版中文社区译文。保留原作者与汉化贡献者署名，以及 [LICENSE](LICENSE) 和 [MOD-LICENSE](MOD-LICENSE) 中的 MIT 授权。本版的“请勿传播”是个人使用提示，不改变原许可证授予的权利。

## 手机、电脑和平板接续

打开“设置／存档”→“存档”，选择文件导出。将生成的原生 `.txt` 文件传到另一台设备，选择文件导入，查看进度摘要、存档时间和覆盖提示后确认。也可以使用存档文本入口。

文件导出包含当前槽的实时完整进度，文件名附导出时间。三个存档槽及自动备份沿用原版规则，切换设备需要手动传递文件。浏览器本地存档使用 `yc-ad:` 前缀，和原站分开；存档文件内容保持原生兼容。取消导入、损坏文件、不支持的版本和加载失败均保留当前进度。

本地数据损坏时会进入“存档恢复”，暂停自动保存并保留原文。可先下载原始数据，再恢复有效槽或备份；重置当前槽需要明确勾选确认。浏览器存储满或禁止写入时，游戏保留内存进度并提示导出，不再因此停止主循环。

## YC控制台

设置中的“YC控制台”每次刷新后首次进入都会显示体验警告。取消不视为确认。功能按当前进度开放：

- 反物质、无限点、永恒点、时间定理、现实机器、特权点：快捷增加点击时当前数量的 1／10／100／1000 倍（+1倍即翻倍，+10倍后为原来的11倍）；也可自定义增加正整数、科学计数法数量。保留原生资源接口和上限，显示实际增加量；资源为0时可先自定义增加。
- 游戏时间加速，以及 16 项独立真实时间机制：自动购买、自动重置定时条件、黑洞周期、自动机、永恒挑战自动完成、被动永恒点／现实机器、虚数机器、不可数性、Ra记忆、炼金动量、暗物质维度、真实时间储存、无名氏提示、莱特拉熵、佩勒碎片与裂隙、星系发生器。
- 每项默认关闭，预设 2／5／10／100 倍，也可输入 1～100 倍。关闭或“一键恢复正常速度”即回到原生速度。
- 倍率仅本次网页有效；刷新、导入或切换存档后复位。已获得资源正常保存。离线模拟、真实游玩统计、存档时间保持原规则，原有暂停、挑战限制和上限仍有效。
- 重置当前存档槽使用原版确认流程，其它槽保留。

手机端保留原版图标、主题、按钮边框与英文 Typewriter 字体，使用可展开导航和横向子标签。研究树、特权树、天神导航保留空间关系与连线，可在独立区域滚动、拖动或缩放。手机特权节点先展示说明，再选择购买。

## 翻译与来源

保留原有中文翻译，补译新闻、回归帮助、自动机模板、按钮、提示和后期内容。新增翻译由主 Agent 与三名 GPT-6 Luna xhigh 子 Agent 直接完成，没有采用外部机器翻译服务的输出。新闻的 1579 个条目 ID、动态表达式与逻辑经过结构检查；作者名、代码指令、公式及必要专名保留。

## 本地运行与验证

本项目是静态 ESM 网站，无需编译。使用本地 Node.js：

```powershell
npm ci
npm run preview
```

访问 http://127.0.0.1:4173/ 。npm 缓存位于项目 `.cache/npm`，测试浏览器与临时文件也放在 `.cache`。

浏览器测试准备：

```powershell
$env:PLAYWRIGHT_BROWSERS_PATH = "$PWD/.cache/browsers"
$env:TEMP = "$PWD/.cache/browser-temp"
$env:TMP = $env:TEMP
New-Item -ItemType Directory -Force .cache/browser-temp, .cache/upstream
.\node_modules\.bin\playwright-core.cmd install chromium --only-shell
git archive --format=tar -o .cache/upstream.tar 9d01a0a6d284c9b76918135c874033c7419bd7bf
tar -xf .cache/upstream.tar -C .cache/upstream
npm run check
npm run test:browser
npm run test:resources
npm run test:timers
npm run test:interaction
npm run test:layout
npm run test:regressions
npm run test:compatibility
npm run test:runtime
npm run test:flows
# 或一次执行所有本地验收（需保持 preview 运行）
npm run test:all
# 部署后线上验收
npm run test:online
```

测试使用合成进度，报告与截图保存在 `test-results`；详细范围见 [VERIFICATION.md](VERIFICATION.md)。`npm run build` 仅复制网站必需目录到 `dist`，GitHub Pages 通过 Actions 发布。依赖、缓存、测试报告及测试存档不进入发布包。
