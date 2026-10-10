import { DC } from "../constants.js";

export const catchupResources = [
  {
    name: "反物质维度",
    id: 0,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `每个反物质维度持续生产前一级的维度，最低级的反物质维度生产反物质。`
  },
  {
    name: "计数频率",
    id: 1,
    openH2pEntry: "计数频率",
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `计数频率升级使反物质维度生产其他反物质维度或反物质时，如同时间加速流逝。`
  },
  {
    name: "自动购买器",
    id: 2,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `自动购买器是游戏内置机制，在可购买时自动为反物质维度购买升级。`
  },
  {
    name: "维度提升",
    id: 3,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `维度提升通过重置所有反物质维度和计数频率获得，当最高可用反物质维度达到特定数量时触发。维度提升将为你的反物质维度提供倍数加成。`
  },
  {
    name: "反物质星系",
    id: 4,
    requiredStage: PROGRESS_STAGE.PRE_INFINITY,
    description: `重置反物质维度和维度提升可获得反物质星系。星系以复合增长的方式增强计数频率升级的效果。`
  },
  {
    name: "无限",
    id: 5,
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: () => `无限是第一个主要重置层。达到 ${format(Number.MAX_VALUE, 2)} 反物质后，可以重置此前的进度，解锁新的内容和资源。`
  },
  {
    name: "无限点",
    id: 6,
    openH2pEntry: "无限",
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: `无限点是第一次无限后的主要资源，可用于购买在无限重置后保留的功能。`
  },
  {
    name: "普通挑战",
    id: 7,
    openH2pEntry: "普通挑战",
    requiredStage: PROGRESS_STAGE.EARLY_INFINITY,
    description: () => `挑战要求你在更苛刻的条件下达到 ${format(Number.MAX_VALUE, 2)} 反物质。完成挑战后可升级自动购买器。`
  },
  {
    name: "打破无限",
    id: 8,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: () => `将大坍缩自动购买器升至最高级后，可以突破 ${format(Number.MAX_VALUE, 2)} 反物质的上限。此后反物质越多，获得的无限点越多。`
  },
  {
    name: "无限维度",
    id: 9,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: `无限维度和反物质维度一样，逐级生产前一级维度。第一无限维度生产无限能量，为所有反物质维度提供巨大的倍率加成。`
  },
  {
    name: "无限挑战",
    id: 10,
    requiredStage: PROGRESS_STAGE.BREAK_INFINITY,
    description: () => `无限挑战是目标超过 ${format(Number.MAX_VALUE, 2)} 反物质的新挑战。完成后可获得升级与生产加成。`
  },
  {
    name: "复制器",
    id: 11,
    requiredStage: PROGRESS_STAGE.REPLICANTI,
    description: () => `复制器会随时间自我复制，并提高所有无限维度的倍率。达到 ${format(Number.MAX_VALUE, 2)} 个复制器后，可将其重置为 ${formatInt(1)}，换取一个不提高反物质星系价格的额外星系。复制器也会在每次无限后重置。`
  },
  {
    name: "永恒",
    id: 12,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: () => `永恒是第二个主要重置层。达到 ${format(Number.MAX_VALUE, 2)} 无限点后，可以重置此前的进度，解锁新的内容和资源。`
  },
  {
    name: "永恒点",
    id: 13,
    openH2pEntry: "永恒",
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `永恒点是第一次永恒后的主要资源，其获得数量取决于永恒时拥有的无限点。`
  },
  {
    name: "时间研究",
    id: 14,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `时间研究是一组类似技能树的升级。每次永恒后都可重新分配，且不会损失资源。研究树的部分区域限制某些研究同时购买。`
  },
  {
    name: "永恒里程碑",
    id: 15,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `永恒里程碑提供自动化与便利功能，只需累计永恒次数即可解锁，无需消耗资源。`
  },
  {
    name: "时间维度",
    id: 16,
    requiredStage: PROGRESS_STAGE.EARLY_ETERNITY,
    description: `时间维度同样逐级生产前一级维度，第一时间维度生产时间碎片。时间碎片提供额外的计数频率升级，且不提高用反物质购买计数频率升级的价格。`
  },
  {
    name: "永恒挑战",
    id: 17,
    requiredStage: PROGRESS_STAGE.ETERNITY_CHALLENGES,
    description: `永恒挑战是在特殊规则下进行的永恒，需要达到指定的无限点目标。每个挑战最多完成五次，每次难度更高，奖励也更强。`
  },
  {
    name: "时间膨胀",
    id: 18,
    requiredStage: PROGRESS_STAGE.EARLY_DILATION,
    description: () => `时间膨胀是一种特殊的永恒，计数频率和所有维度倍率都会受到大幅削弱。完成膨胀永恒可获得超光速粒子。`
  },
  {
    name: "超光速粒子",
    id: 19,
    openH2pEntry: "时间膨胀",
    requiredStage: PROGRESS_STAGE.EARLY_DILATION,
    description: () => `超光速粒子不能靠重复完成相同进度来积累：必须在膨胀永恒中达到更高的反物质数量，才能增加粒子数量。超光速粒子生产膨胀时间。`
  },
  {
    name: "现实",
    id: 20,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: () => `现实是第三个、也是最后一个主要重置层。达到 ${format(DC.E4000)} 永恒点后，可以重置此前的进度，解锁新的内容和资源。`
  },
  {
    name: "现实机器",
    id: 21,
    openH2pEntry: "现实",
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `现实机器是第一次现实后的主要资源，获得数量取决于现实时拥有的永恒点。`
  },
  {
    name: "特权",
    id: 22,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `特权类似永恒里程碑，主要提供便利和自动化功能。特权需要用每次现实后获得的特权点购买。`
  },
  {
    name: "符文",
    id: 23,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `符文是可装备的升级，只能在现实之间卸下。每次现实都可从多个随机符文中选择一个；这些符文的平均品质取决于该次现实中部分资源所达到的最高值。`
  },
  {
    name: "自动机",
    id: 24,
    openH2pEntry: "自动机总览",
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `自动机是内置的脚本工具。拥有足够的升级和特权后，可以用它编写脚本，全自动完成现实。`
  },
  {
    name: "黑洞",
    id: 25,
    requiredStage: PROGRESS_STAGE.EARLY_REALITY,
    description: `黑洞会周期性地加快整个游戏，影响此前已解锁的所有机制，效果类似于让游戏运行更长的时间。`
  },
  {
    name: "特蕾莎",
    id: 26,
    requiredStage: PROGRESS_STAGE.TERESA,
    description: `特蕾莎是第一位天神。祂的现实难度更高，完成后会根据表现大幅增强符文献祭。祂的升级主要用于更方便地测试与自动完成现实。`
  },
  {
    name: "鹿颈长",
    id: 27,
    requiredStage: PROGRESS_STAGE.EFFARIG,
    description: `鹿颈长是第二位天神。祂的现实限制符文，并施加随进度变化的削弱；达到新的重置层会获得奖励。祂提供自动选择和过滤大量符文的升级，使用新资源遗迹碎片购买。`
  },
  {
    name: "无名氏",
    id: 28,
    openH2pEntry: "时间之神无名氏",
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `无名氏是第三位天神。祂的现实有一长串严苛的削弱，但成功破解后可解锁超立方体。祂还让黑洞获得储存时间的能力。`
  },
  {
    name: "储存时间",
    id: 29,
    openH2pEntry: "时间之神无名氏",
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `黑洞可用两种方式储存时间：储存游戏时间，将加速的时间积攒起来，再一次性释放；或储存真实时间，用于现实扩增以成倍获得该次现实的资源，也可用于补充离线进度。`
  },
  {
    name: "超立方体",
    id: 30,
    requiredStage: PROGRESS_STAGE.ENSLAVED,
    description: `无限维度不能无限购买，除第八无限维度外都有购买次数的硬上限。每个超立方体都会大幅、永久提高此上限。`
  },
  {
    name: "薇",
    id: 31,
    requiredStage: PROGRESS_STAGE.V,
    description: `薇是第四位天神。祂的现实类似特蕾莎的现实，但只有达到特定资源里程碑才会给予奖励。祂提供空间定理，让你额外购买不受路径限制的时间研究。`
  },
  {
    name: "太阳神",
    id: 32,
    requiredStage: PROGRESS_STAGE.RA,
    description: `太阳神是第五位天神。祂的特殊现实会根据其中的资源数量生产记忆块。祂主要强化前四位天神的升级与机制，并补齐最后一些自动化和便利功能。`
  },
  {
    name: "记忆",
    id: 33,
    openH2pEntry: "遗忘之神太阳神",
    requiredStage: PROGRESS_STAGE.RA,
    description: `太阳神控制着前四位天神。祂们根据记忆块的数量持续生产记忆。记忆用于提升祂们的等级，达到特定等级后会解锁升级。`
  },
  {
    name: "充能无限升级",
    id: 34,
    openH2pEntry: "遗忘之神太阳神",
    requiredStage: PROGRESS_STAGE.RA,
    description: `特蕾莎的记忆让你可以给无限升级充能，保留相似效果但大幅提高强度。只有在现实之间才能更改哪些升级被充能。`
  },
  {
    name: "符文炼金",
    id: 35,
    requiredStage: PROGRESS_STAGE.RA,
    description: `鹿颈长的记忆解锁符文炼金。精炼符文可获得炼金资源，提供各种小幅加成；不同资源需要通过反应合成，才能充分增强其效果。`
  },
  {
    name: "强化黑洞",
    id: 36,
    openH2pEntry: "遗忘之神太阳神",
    requiredStage: PROGRESS_STAGE.RA,
    description: `无名氏的记忆强化时间储存，使储存的游戏时间超过实际流逝的游戏时间，还允许反复自动释放储存时间。`
  },
  {
    name: "困难薇现实",
    id: 37,
    openH2pEntry: "遗忘之神太阳神",
    requiredStage: PROGRESS_STAGE.RA,
    description: `薇的记忆解锁更困难的薇现实，其中有更高的目标，以及一组名为三元研究的新时间研究。`
  },
  {
    name: "虚数机器",
    id: 38,
    requiredStage: PROGRESS_STAGE.IMAGINARY_MACHINES,
    description: () => `达到 ${format(DC.E1000)} 现实机器后，会解锁新资源虚数机器。虚数机器自动生成，直到达到由你历史最佳现实的潜在现实机器收益所决定的上限。`
  },
  {
    name: "莱特拉",
    id: 39,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `莱特拉是第六位天神。祂的现实采用特殊的完成条件，并根据完成速度给予奖励。祂解锁的功能主要围绕暗物质展开。`
  },
  {
    name: "连续统",
    id: 40,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `连续统是一种特殊生产机制，让反物质维度按可购买非整数次升级的方式生产，而无需实际购买这些升级。`
  },
  {
    name: "暗物质维度",
    id: 41,
    openH2pEntry: "维度之神莱特拉",
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `暗物质维度逐级生产前一级维度，但按周期而非连续生产。第一暗物质维度生产暗物质，所有暗物质维度都生产暗能量。`
  },
  {
    name: "暗物质维度重置",
    id: 42,
    openH2pEntry: "维度之神莱特拉",
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `暗物质维度有两种重置方式：湮灭会重置所有暗物质维度，换取永久的全体倍率加成；升阶会提高产量，但重置单个维度的生产间隔。`
  },
  {
    name: "奇点",
    id: 43,
    requiredStage: PROGRESS_STAGE.LAITELA,
    description: `消耗暗能量可生成奇点，奇点总数会提供加成。生成奇点时，超过坍缩门槛的多余暗能量会被浪费。`
  },
  {
    name: "佩勒",
    id: 44,
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `佩勒是第七位、也是最后一位天神。祂会永久毁灭你的游戏，让你进入一个无法逃离、极其困难的特殊现实。`
  },
  {
    name: "末日",
    id: 45,
    openH2pEntry: "反物质之神佩勒",
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `末日是佩勒专属的重置，可随时进行。它会将进度重置到毁灭现实的开端，同时给予残骸，用来生产现实碎片。`
  },
  {
    name: "佩勒打击与裂隙",
    id: 46,
    openH2pEntry: "佩勒冲击",
    requiredStage: PROGRESS_STAGE.PELLE,
    description: `在佩勒阶段达到特定进度时，会触发打击，永久增加毁灭现实的削弱。每次打击伴随一道裂隙，可消耗不同资源来换取加成。裂隙会永久保留，末日后也不会重新锁定。`
  },
];
