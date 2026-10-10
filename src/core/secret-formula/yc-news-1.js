// Original news logic and IDs from the pinned upstream; YC Chinese translation.
import { DC } from "../constants.js";
function newsAnimSpd(seconds) { return seconds / player.options.news.speed; }
export const newsPart1 = [
{
    id: "a1",
    text: "饼干是个谎言。",
  },
{
    id: "a2",
    text: "反物质幽灵并不存在。就像物质幽灵一样。它们根本没有物质——字面意义上就是这样。"
  },
{
    id: "a3",
    text: "核电站已被反物质电站取代。"
  },
{
    id: "a4",
    text: "已证实反物质饼干并不存在；谁要是声称见过，打住。"
  },
{
    id: "a5",
    text: "随着反物质突然变得满地都是，价格暴跌。"
  },
{
    id: "a6",
    text: "今日新闻：人类用反物质动物献祭给反物质之神。"
  },
{
    id: "a7",
    text: "你制造出了一个反物质！不管这句话是什么意思。"
  },
{
    id: "a8",
    text: "“到头来，反物质终究无关紧要。”—hevipelle"
  },
{
    id: "a9",
    text: "这些都无关紧要。"
  },
{
    id: "a10",
    text: "如果它是反物质，那又有什么关系？"
  },
{
    id: "a11",
    text: "科学家证实：反物质的颜色是蓝紫色。"
  },
{
    id: "a12",
    text: "NASA 怎么办派对？当然要做“行星级规划”！"
  },
{
    id: "a13",
    text:
      `电子如今也开始看见生活中的美好。我们把这些快乐的电子叫作“正电子”。等等，这名字已经有人用了？`
  },
{
    id: "a14",
    text:
      `这句完全没用的话不会带你去任何地方，你自己也清楚。会写出这种东西的家伙真是又讨厌又糟糕，大概会下地狱；开发者到底为什么要把它塞进来？就算你继续读，也未必能读完（第一次尤其如此）。`
  },
{
    id: "a15",
    text: `“幽灵向你问好”—Boo-chan`
  },
{
    id: "a16",
    text: `“能不能谁去劝劝 hevi 冷静下？”—Mee6`
  },
{
    id: "a17",
    text: "反物质把物理规律搅乱后，原本的驼鹿如今变成了人。"
  },
{
    id: "a18",
    text: "!嗨"
  },
{
    id: "a19",
    text: `“好吧”—Alright`
  },
{
    id: "a20",
    text: "反物质语里没有英语问候语。"
  },
{
    id: "a21",
    text: "买最大值，还是不买最大值，这是个问题。"
  },
{
    id: "a22",
    text: "一、二、跳过几个、九十九、NaN！"
  },
{
    id: "a23",
    text: "不行，妈，我不能暂停游戏。"
  },
{
    id: "a24",
    text: "科学计数法加入了战场。"
  },
{
    id: "a25",
    text: `“让宇宙再次伟大！”—Tronald Dump`
  },
{
    id: "a26",
    text: "#dank-maymays"
  },
{
    id: "a27",
    get text() {
      return `一种新宗教诞生了，正像野火一样迅速传播。信徒们崇拜反物质女神“天 Pelle”。他们还坚信 ${format(Number.MAX_VALUE, 2)} 就是无限大。`;
    }
  },
{
    id: "a28",
    text: "有人刚摸了一下黏团，然后就炸了。那黏团是反物质，还是那家伙本来就是爆炸物做的？"
  },
{
    id: "a29",
    text: `如果你玩的不是 Kongregate、Steam，或 https://ivark.github.io/AntimatterDimensions/，那你玩的就是盗版网站。`
  },
{
    id: "a30",
    text: "去 Kongregate 打个五星，让更多人也能见识这五星评价。"
  },
{
    id: "a31",
    text: "哇！"
  },
{
    id: "a32",
    text: `“你吃得太久了。”—Hevipelle`
  },
{
    id: "a33",
    text: `“我讨厌我自己。”—Boo-chan`
  },
{
    id: "a34",
    text: `“哎呀，天哪”—Xandawesome`
  },
{
    id: "a35",
    text: "在我们头顶之上，除了上方的星星，再无别物。"
  },
{
    id: "a36",
    text: "你很想制造些反物质，可没人想吃你的反物质。"
  },
{
    id: "a37",
    text: "有人不太友善，于是他遭遇了反物质风暴。"
  },
{
    id: "a38",
    text: "你活着，占据空间，拥有质量，所以你是物质……除非你是反物质。"
  },
{
    id: "a39",
    text: "我点得太快了……我的电脑现在已经被湮灭了。"
  },
{
    id: "a40",
    text:
      `“如果有外星人降落在你家前院，伸出一条肢体向你示好，先别急着交朋友，递给它一颗八号球。要是那条肢体爆炸了，外星人大概是由反物质构成的；要是没有，你就可以带它去见你的领袖了。”—Neil deGrasse Tyson`
  },
{
    id: "a41",
    text:
      "物质和反物质的数量必须相等；看来你妈多少帮忙平衡了一下。"
  },
{
    id: "a42",
    text: "万物皆未被创造，万物皆未被毁灭。"
  },
{
    id: "a43",
    text: "我们挖了个大坑来存放这些反物质……Adele 正在里面打滚。"
  },
{
    id: "a44",
    text: "如果一切都是反物质，你怎么才能看见自己？"
  },
{
    id: "a45",
    text: "由于反物质生命竟然能预知明天的自己，股市崩盘了。"
  },
{
    id: "a46",
    text: "我家狗吃了太多反物质，现在居然开始“喵喵”叫了！"
  },
{
    id: "a47",
    text: "把无穷大输入计算器，结果会是 42！"
  },
{
    id: "a48",
    text: "你找到了最稀有的反物质 pepe，稀有度：超稀有！"
  },
{
    id: "a49",
    get text() {
      return `这条视频能收下 ${format(1e169)} 个赞吗？？？快来狂点那个赞按钮！！`;
    }
  },
{
    id: "a50",
    text: "反物质的气味终于揭晓：闻起来像小猫咪。"
  },
{
    id: "a51",
    text: "墙上又多了一块反物质。"
  },
{
    id: "a52",
    text: "被狙了，弱鸡！"
  },
{
    id: "a53",
    text: `“多谢了。”—Dankesehr`
  },
{
    id: "a54",
    text: "世界局势已经到了 SOS 级别！！紧急求救，紧急求救！！"
  },
{
    id: "a55",
    text:
      `“太阳从西边升起那么确定，地球上所有歌手和诗人里，我就是最最棒的。”—Hevipelle`
  },
{
    id: "a56",
    text: `“我很会用 GitHub。”—Hevipelle`
  },
{
    id: "a57",
    text:
      `新建了一个聊天服务器，供反物质人监视物质人；世界因此陷入混乱与纷争。`
  },
{
    id: "a58",
    text:
      `新研究发现，吃土豆会增加反物质内爆风险。科学家建议多吃土豆。`
  },
{
    id: "a59",
    text: `“我还以为我修好了那个故障，结果某次更新又把它弄坏了。”—Hevipelle`
  },
{
    id: "a60",
    text: `“那我可能是同性恋吧。”—Bootato`
  },
{
    id: "a61",
    text: "突发新闻！Hevipelle 刚宣布：最大值购买按钮其实要被移除了！"
  },
{
    id: "a62",
    text: "我把这款游戏献给我的女朋友。"
  },
{
    id: "a63",
    text:
      `反物质枪杀不死反物质人，杀死他们的是反物质人自己。不过，这是否意味着反物质烤面包机不会烤反物质吐司，而反物质吐司会烤反物质吐司？`
  },
{
    id: "a64",
    text: "可对反物质人来说，他们不才是物质，而我们才是反物质吗？"
  },
{
    id: "a65",
    text: "一切都不再“反物质”。"
  },
{
    id: "a66",
    text:
      `学校开学让全宇宙学生闻风丧胆，因为学校不再按物质和反物质分班。湮灭事件频发。`
  },
{
    id: "a67",
    text: "为什么没人谈谈零维？"
  },
{
    id: "a68",
    text: "肥猫猫坐在反物质上。"
  },
{
    id: "a69",
    text: "谁把狗狗放出去的？"
  },
{
    id: "a70",
    text: "如果你读不到这条，那你把新闻关掉了。"
  },
{
    id: "a71",
    text: "他没离开，只是把服务器静音了，这样就不会收到通知。"
  },
{
    id: "a72",
    text: `“网上看到的大多数名言，归属都是假的。”—Abraham Lincoln`
  },
{
    id: "a73",
    text: `“现在应该能用了，但它还是不行。”—Hevipelle`
  },
{
    id: "a74",
    text: "这游戏没有任何错误……它们都是另一种成功。"
  },
{
    id: "a75",
    text:
      `人们发现了第三种物质：空值物质。它什么也不做，基本毫无用处。发现它的科学家被炒了。`
  },
{
    id: "a76",
    text: "你的岳母总在念叨这些反物质对撞机。"
  },
{
    id: "a77",
    text: "如果物质存在，那反物质岂不是不存在？"
  },
{
    id: "a78",
    text: "反物质=生命。不是鹅卵石，不是泥土，也不是那些东西。是反物质。"
  },
{
    id: "a79",
    text: "突发新闻：错误 错误 错误"
  },
{
    id: "a80",
    text: "如果反木头土拨鼠能啃反木头，那它能啃多少反木头？"
  },
{
    id: "a81",
    text: "混沌不是深坑，混沌就是物质。"
  },
{
    id: "a82",
    text: `“那是因为我是个优秀的游戏开发者，刚推送了一段绝对能用的代码。”—Hevipelle`
  },
{
    id: "a83",
    text: "反物质到底有什么“物质”？"
  },
{
    id: "a84",
    text: "你不觉得有人话说到一半就……很烦吗？"
  },
{
    id: "a85",
    text: "别把我的反引言断章取义。"
  },
{
    id: "a86",
    text: "反物质诚实坦荡，物质却什么都能编出来。"
  },
{
    id: "a87",
    text:
      `据航空学界并无已知定律可循，蜜蜂有好几种方式本该被反物质吞掉。`
  },
{
    id: "a88",
    text: "要么作为物质死去，要么活得够久，被反物质吞噬，然后再死一次。"
  },
{
    id: "a89",
    text: "如果你凝视反物质够久，反物质也会回望你。"
  },
{
    id: "a90",
    text: `“总会把你耍得团团转，总会让你失望。”—anti-Rick Astley`
  },
{
    id: "a91",
    text: "反物质维度：下一次更新永远还有 5 小时。永远如此。"
  },
{
    id: "a92",
    get text() {
      const games = [
        {
          name: "Antimatter Dimensions",
          link: "https://ivark.github.io/"
        },
        {
          name: "FE000000",
          link: "https://dan-simon.github.io/misc/fe000000/"
        },
        {
          name: "Trimps",
          link: "https://trimps.github.io/"
        },
        {
          name: "Mine Defense (the game's ui is broken on https so make sure you're on http!)",
          link: "http://scholtek.com/minedefense"
        },
        {
          name: "Wizard and Minion Idle",
          link: "https://www.kongregate.com/games/Oninou/wami"
        },
        {
          name: "Anti-Idle",
          link: "https://www.kongregate.com/games/Tukkun/anti-idle-the-game"
        },
        {
          name: "Synergism",
          link: "https://synergism.cc/"
        },
        {
          name: "Universal Paperclips",
          link: "https://www.decisionproblem.com/paperclips/index2.html"
        },
        {
          name: "Monies<sup>2</sup",
          link: "https://sneekxy.nmtechgroup.com/monies2/"
        },
        {
          name: "The First Alkahistorian stages 1, 2, and 3",
          link: "https://nagshell.github.io/elemental-inception-incremental/"
        },
        {
          name: "Melvor Idle",
          link: "https://melvoridle.com/"
        }
      ];
      const game = games.randomElement();
      return `一位身份不明的《反物质维度》开发者想推荐你游玩 <a href="${game.link}" target="_blank">${game.name}</a>`;
    },
  },
{
    id: "a93",
    text:
      `满分 10 分的话，我给这游戏一个实打实的 <span style='color: red'>java.lang.IndexOutOfBoundsException</span>`
  },
{
    id: "a94",
    text: "成为物质还是成为反物质，这是个问题。"
  },
{
    id: "a95",
    text: "为什么一切都这么 Hevi？"
  },
{
    id: "a96",
    text:
      `科学早就证明，由物质构成的猫都是混蛋。好消息是，由反物质构成的猫照样是混蛋。`
  },
{
    id: "a97",
    text: "没人告诉过我，反世界才不会把我撞飞。"
  },
{
    id: "a98",
    text: "反物质就像互联网。如果你正在读这条，那你就永远不会嫌它太多。"
  },
{
    id: "a99",
    text:
      `“反物质让时间旅行成为可能，而我来此就是为了让过去再次伟大。”—世界第二任总统`
  },
{
    id: "a100",
    text: "请插入 -1 号光盘，继续游玩《反物质维度™》。"
  },
{
    id: "a101",
    text: "背景故事——敬请期待™"
  },
{
    id: "a102",
    text: "我以前也属于反物质的一员。后来膝盖里进了物质。"
  },
{
    id: "a103",
    text:
      `反物质……反物质永不改变……除非你研究反物质的量子物理；不过我们还没有足够的快子来做这件事。`,
    get unlocked() { return PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked(); }
  },
{
    id: "a104",
    text: "反物质维度里没有战争。这里很安全，这里自由自在。"
  },
{
    id: "a105",
    text: "反物质解决了全球变暖。相关新闻：地球已经不存在了。"
  },
{
    id: "a106",
    text:
      `反水、反土、反火、反气。很久以前，四个反元素国度和谐共处。后来，一切都在反火国进攻时改变。唯有反神通——掌握全部四种反元素的人——才能为反世界带来平衡。可在世界最需要他时，他不小心碰到了普通物质，然后爆炸了。`
  },
{
    id: "a107",
    text: "如果你开一个反战利品箱，你是不是在用游戏币卖随机物品？"
  },
{
    id: "a108",
    text: "人们开始质疑 Hevipelle 是否真的存在。"
  },
{
    id: "a109",
    text:
      `《反物质维度》荣幸地由 Lehmä 赞助！现推出吃草课程！学会分辨哪些草能吃、哪些不能吃。`,
    isAdvertising: true
  },
{
    id: "a110",
    text:
      `现在是 2422 年。更新依然没有上线。Hevi 还在为第 38 层声望系统的 Unfunity 维度、维度和挑战做平衡。成就已经超过 100 行。他们正准备启用 breaking_breaking_breaking_infinity.js。`
  },
{
    id: "a111",
    text: "导入 \"Christmas\" 以解锁隐藏主题。"
  },
{
    id: "a112",
    text:
      `你他妈刚才对我这个小混蛋说了什么？我可是反物质海豹部队的尖子生，还参与过多次第九维度的秘密突袭，确认击杀了 300 多个 NNnNeMI-NNnNe。我受过马铃薯战训练，是整个反物质银河武装部队的头号狙击手。你在我眼里不过又一个无限点。我会用这维度前所未见的“最大化购买”连点把你他妈轰成渣，记住我的话。你以为在跨维网络上说这种屁话就能全身而退？做梦吧，混蛋。我现在就联系遍布银河的秘密自动购买器网络，正在追踪你的 IP，所以你最好准备迎接大坍缩，蛆虫。大坍缩会抹掉你那可悲的小命。你死定了，小子。我随时随地都能出现，还能用七种以上😠💩的方式干掉你——光靠鼠标就够了。我不仅受过全面的维度提升战斗训练，还能调用反物质海军陆战队的全部武器库，我会把它们用到极致，把你这可怜虫从宇宙表面彻底抹掉，你这小杂种。要是你知道自己那句“聪明”的评论会招来多么“反 Hevi”的报复，也许你早就闭上那张臭嘴了。可惜你没想到，也没闭嘴，现在就给我买到 10，你这个该死的蠢货。我要把一大堆反物质屎拉你满身，让你淹死在里面。你死定了，小鬼。`
  },
{
    id: "a113",
    text:
      `所以这个问题我琢磨了很久。《反物质维度》……这到底是什么意思？我是说，它显然是一款游戏。你购买第一维度，它就产出反物质；第二维度又产出更多第一维度，以此类推……可这究竟意味着什么？它不可能就只是一款游戏吧，未免太平淡了。开发者肯定是把它做成了某种隐喻。那天我照例用指甲剪修剪阴毛，终于顿悟：所谓维度，不过是把“抑郁”这个词稍微遮掩了一下。普通物质就是那些残酷消极、不断加深抑郁的念头；反物质则是驱散抑郁的积极想法和好朋友。你从一件简单的小事起步，它几乎看不出来地对抗抑郁；可你越坚持，这场战斗就越激烈。但它似乎永远无法解决一切，抑郁仿佛能一直延伸到无限大。于是你继续努力。最终你会明白，抑郁并非无限，只是大得吓人。只要付出足够努力，你的“维度”终会制造出足够多的“反物质”，推翻那看似无穷的抑郁。之后，一切皆有可能。你终于真正开心起来；随着你不断超越、仿佛“打破”了抑郁的“无限”，快乐也会指数增长。你继续前进，直到那所谓的“无限”与你人生中获得的快乐相比显得微不足道；此时若重置，你眨眼间就能超越那道无限。想知道多层声望机制代表什么吗？“维度跃迁”就是找到能带来快乐的新事物和新方法；“维度提升”就是改进这些事物和方法。比如买辆新车算一次“维度跃迁”，把车置换成一辆新车就算一次“维度提升”。“永恒”代表亲人离世之类的重大悲剧，这种打击会让你仿佛毫无希望地跌回起点。但随着时间过去，你会重新变得比从前更坚强、更快乐。“维度献祭”就是搬家：你必须放弃许多曾带给你快乐的东西，但搬去新地方也会有新的机会，而这些机会能带来前所未有的快乐。“计数频率”代表让你快乐有多容易；“时间维度”则让快乐变得更容易。《反物质维度》其实是一个抑郁症患者成功对抗疾病的隐喻。`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
{
    id: "a114",
    text:
      `（让我入睡）让我从心底沉沉睡去。（我睡不着）让我从心底沉沉睡去。（离开我）轻声呼唤我的名字，把我交给黑暗。（让我入睡）求你让我的牛奶留下。（我无法入睡）在我彻底完蛋之前。（离开我）任由我留在自己化作的虚无里。`
  },
{
    id: "a115",
    text:
      `下一次更新预览——战利品箱！开启宇宙、银河和全宇宙战利品箱，抽取稀有外观、奖励更稀有的独特挑战、时间跳跃，甚至全新维度，尽情感受自豪与成长！`
  },
{
    id: "a116",
    text: "维度的设计初衷，就是让你感受到自豪与成就。"
  },
{
    id: "a117",
    text: "刷新能治愈癌症。"
  },
{
    id: "a118",
    text: "我有一个第九维度，我有一个维度……呃……它根本不存在！"
  },
{
    id: "a119",
    text:
      `所以我们从什么时候开始报道这种东西了？一半都算不上正经新闻，根本就是笑话和元梗，甚至说不通——哈哈哈别理我我闭嘴—`
  },
{
    id: "a120",
    text: "现在是 1944 年，Hevipelle 没法为《反物质维度》发布更新，因为他并不存在。"
  },
{
    id: "a121",
    text: `“那个维度根本不存在”—GhostBot`
  },
{
    id: "a122",
    text:
      `你以为的多数坚果，其实是核果的种子或豆荚类植物。可 Hevipelle 确实相当疯狂，因此可以算作一种干燥、不开裂的果实。`
  },
{
    id: "a123",
    text: "芬兰宣布开始进口设计。"
  },
{
    id: "a124",
    text: "进口这么多东西，我都糊涂了。"
  },
{
    id: "a125",
    text:
      `仅限今天，拨打 1-800-ANTIMATTER，即可获得免费无限维度！套餐还附赠完全免费的包邮服务和免费高清反 V！仅此一天，超低价 42！预计送达时间——5 小时。`,
    isAdvertising: true
  },
{
    id: "a126",
    text: "1e420，开抽。"
  },
{
    id: "a127",
    text: "这游戏没有错误，只是你玩错了。"
  },
{
    id: "a128",
    get text() {
      return `反物质维度.mp${format(Number.MAX_VALUE, 2)}`;
    }
  },
{
    id: "a129",
    text:
      `<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>https://www.youtube.com/watch?v=dQw4w9WgXcQ</a>`
  },
{
    id: "a130",
    text: "点这里解锁那个隐藏成就。",
    // This next line is needed for this news ticker to unlock
    // the secret achievement.
    onClick: () => undefined
  },
{
    id: "a131",
    text:
      `警告：我们刚接到通知，可能出现一种蛇怪型思维病毒感染，类似臭名昭著的眨眼鹦鹉。本例被称为“第三型分形病”。据信，图像的数学复杂度会引发大脑无法理解的数学概念，导致大脑像电脑死机一样“崩溃”；随后还会通过哥德尔式剧透输入，最终造成哥德尔式崩溃。所有研究过它的人最终都以同样方式死去，因此无法确知细节，但这就是普遍看法。无论如何，随着“设计”模式推出，以及它会突然出现的报告不断传来，如果这种模式反复出现，脑中可能会形成类似“第三型分形病”的图像。为此，如果你发现自己被它困扰，请照以下建议处理：首先立即刷新，看看问题是否消失。如果没有，进入选项，把主题从“设计”换成任何别的主题。最重要的是，祝你好运。我们可承受不起再失去更多观众了。`
  },
{
    id: "a132",
    text: "如果我的英语不好，我就一直学英语，直到英语变好。"
  },
{
    id: "a133",
    text:
      `有人曾告诉我，反物质会把我撞飞。我可不是棚子里最聪明的原子。好吧，水管开始冒出来，然后就停不下来了……`
  },
{
    id: "a134",
    text: "因为这款游戏，我现在可以把“无限”当动词用了。",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
{
    id: "a135",
    text: "啊——我最爱清晨空气中粒子湮灭的味道。"
  },
{
    id: "a136",
    text: "说幽灵不存在的人，显然没有 Discord。"
  },
{
    id: "a137",
    text: "啊啊啊啊啊啊啊啊啊啊啊《反物质维度》是芬兰某个小伙做的"
  },
{
    id: "a138",
    get text() {
      return `快来看看 Avari 新造的真正无限大无限泳池吧！它的面积达到 ${format(Number.MAX_VALUE, 2)} 平方兆兆米，保证让你玩到无限开心！`;
    },
    isAdvertising: true
  },
{
    id: "a139",
    text: "我们更新了《反物质维度》隐私政策。"
  },
{
    id: "a140",
    text:
      `《反物质维度》的玩家们注意了，Hevipelle 遇到了大麻烦，需要你们帮忙清除 #news-ticker-suggestions 里的烂梗。为此，他需要十几个新的冷门梗和几个 Discord 机器人。想帮他的话，只要提供你的反物质卡卡号、背面的三位安全码，以及到期月份和日期就行。可得抓紧了，这样 Hevipelle 才能抢救好梗，达到史诗级梗王水平。`,
    isAdvertising: true
  },
{
    id: "a141",
    text:
      `如果每只 Trimp 都有一个木板体积，每份资源也都有一个木板体积，那么你会塞满多少个宇宙才发现自己玩错游戏了？`
  },
{
    id: "a142",
    text: "其实，上一条说错了。"
  },
{
    id: "a143",
    text: "如果你正在读这条，那你就会阅读。"
  },
{
    id: "a144",
    text: "<span style='color: #7289da; background: rgba(250,166,26,0.2); cursor: text;'>@everyone</span>"
  },
{
    id: "a145",
    text:
      `Lghtellep 制作的《物质维度》刚刚在 Etagergnok 游戏网站达到 -1,000,000 次游玩。`
  },
{
    id: "a146",
    text:
      `要舔多少下才能舔到反物质棒棒糖的中心？得舔很多下，因为除非你自己也是反物质做的，不然每舔一下都会爆炸。`
  },
{
    id: "a147",
    text: "据说，对着镜子看着它，连续提及 Hevipelle 三次，你就会当场暴毙。"
  },
{
    id: "a148",
    text: "下一次更新现在只剩 300 分钟了。"
  },
{
    id: "a149",
    text: "🤔"
  },
{
    id: "a150",
    text: "游戏已死 1/5，管理烂透了。"
  },
{
    id: "a151",
    text: "这条消息永远不会出现在新闻滚动条上，酷吧？"
  },
{
    id: "a152",
    text:
      `第一维度产出反物质，第二维度产出第一维度，第三维度产出第二维度，第四维度产出第三维度。没人解锁过第五维度，因为那得玩超过一分钟。`
  },
{
    id: "a153",
    text: "我的广告屏蔽器不让我玩。"
  },
{
    id: "a154",
    text: "你输了。"
  },
{
    id: "a155",
    text: "你知道吗？所有统计数据里有 75% 都是当场编出来的。"
  },
{
    id: "a156",
    text:
      `既然记数法名称里用了这么多对数，为什么不干脆叫木头记数法？它们字面上就是由木头组成的！`
  },
{
    id: "a157",
    text:
      `科学家们找到了一种将物质转化为反物质的方法，而我目前正在测试这件事。`
  },
{
    id: "a158",
    text:
      `如果 Gaben 数不到三，Hevipelle 数不到九，那未来会不会有另一个游戏开发者数不到 27？`
  },
{
    id: "a159",
    text:
      `把无限点“存起来”是什么意思？难道真有家银行，你可以把这些无限点存进去？存的无限点多了，信用评分会提高吗？还能办信用卡？`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
{
    id: "a160",
    text: `原来我们的新闻全被偷走，拿去一个叫《反物质维度》的游戏里播放了。这些可恶的芬兰人。`
  },
{
    id: "a161",
    text: "嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯嗯……啊，抱歉，输错文本框了。"
  },
{
    id: "a162",
    text: `“Python 不是最好的语言，芬兰语才是。”—Hevipelle`
  },
{
    id: "a163",
    text:
      `有人说这些新闻大多是烂梗，也有人说它们是好梗。这一条嘛，只是个元新闻。`
  },
{
    id: "a164",
    text: "妈，看，我上新闻了！"
  },
{
    id: "a165",
    text: "<span style='font-size: 0.2rem'>嘘，小声点，我想偷偷摸摸地来。</span>"
  },
{
    id: "a166",
    text:
      `<span style='animation: a-game-header__antimatter--glow 2s infinite'>救命，我摄入的反物质已经超过每日建议量的两倍了！</span>`,
  },
{
    id: "a167",
    text:
      `哦，我好像已经没有<span style='animation: a-existence-glow 3s infinite; font-size: 1.8rem; color: white; line-height: 0;'>存在</span>了。`,
  },
{
    id: "a168",
    text:
      "我的意思是，新闻稿或许永远不会断，但好新闻肯定会写完。等等，我们早就写完了。"
  },
{
    id: "a169",
    text: "待办：John，请在我们向公众发布现实更新前删除这条新闻。"
  },
{
    id: "a170",
    text: "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank'>这个链接不是 Rickroll。</a>"
  },
{
    id: "a171",
    text: "<a href='https://www.youtube.com/watch?v=P945A5Tndp8' target='_blank'>这个链接不是 Rickroll。</a>"
  },
{
    id: "a172",
    text:
      `如果你发现新闻滚动条有问题，请点击这里的链接，在 <a href='https://discord.gg/ST9NaXa' target='_blank'>Discord</a> 上反馈。`
  },
{
    id: "a173",
    text:
      `<span style='animation: a-game-header__antimatter--glow 3s infinite'>这段文字由反物质构成。请勿触碰，否则宇宙将会坍缩。</span>`,
    onClick: () => bigCrunchAnimation(),
  },
{
    id: "a174",
    text:
      `<span style='font-family: runescape; color: yellow; text-shadow: 0.1rem 0.1rem black; letter-spacing: 0.1rem; font-size: 2rem; line-height: 0; animation: a-text-flash 1s steps(1, end) infinite;'>免费修剪符文盔甲</span>`,
  },
{
    id: "a175",
    text:
      `显示器上的数字闪闪发亮，看不见一颗质子……反物质王国，而我似乎就是女王。维度提升推动着这股不断上涨的浪潮——点个不停，天知道我已经试过多少次。别放弃，冲向那个星系，买十个，买最大值，按住按键猛敲；献祭第八维度，看它一路增长……然后溢出！让它增长吧，让它增长吧，再也拦不住了……让它增长吧，让它增长吧，八个字节已经装不下了。我才不在乎要花上一整天——大坍缩反正才是开始。`
  },
{
    id: "a176",
    text: "我用表情符号记数法太久，现在居然真的看得懂了，快来救救我。"
  },
{
    id: "a177",
    text:
      `一旦你拥有 <span style='color: black; background: black;'>已涂黑</span> <span style='color: black; background: black;'>已涂黑</span>，就能解锁 <span style='color: black; background: black;'>已涂黑</span>。每个 <span style='color: black; background: black;'>已涂黑</span>，针对每一种 <span style='color: black; background: black;'>已涂黑</span>，都有一个 <span style='color: black; background: black;'>已涂黑</span> 可以用来 <span style='color: black; background: black;'>已涂黑</span>。你可以花些 <span style='color: black; background: black;'>已涂黑</span> 来强化 <span style='color: black; background: black;'>已涂黑</span> 和 <span style='color: black; background: black;'>已涂黑</span>。此外还有另一项升级，可以让你获得 <span style='color: black; background: black;'>已涂黑</span> <span style='color: black; background: black;'>已涂黑</span>。<span style='color: black; background: black;'>已涂黑</span> <span style='color: black; background: black;'>已涂黑</span> 的运作方式是：当你达到 <span style='color: black; background: black;'>已涂黑</span> <span style='color: black; background: black;'>已涂黑</span> 时，可以 <span style='color: black; background: black;'>已涂黑</span> 一定数量的 <span style='color: black; background: black;'>已涂黑</span> 来换一个 <span style='color: black; background: black;'>已涂黑</span> <span style='color: black; background: black;'>已涂黑</span>。它们的效果和 <span style='color: black; background: black;'>已涂黑</span> 一样，可以提升 <span style='color: black; background: black;'>已涂黑</span>。`
  },
{
    id: "a178",
    text:
      `警告：游玩《反物质维度》可能导致肺结核、艾滋病、突然相信第九维度真实存在、自发内爆、小儿麻痹症、麻疹、存在主义焦虑、无法治愈的疯狂，或<span style='color: black; background: black;'>已涂黑</span>。请联系保险公司确认是否承保。继续游玩即表示：若上述或尚未列出的任何情况发生，你将免除《反物质维度》的责任。《反物质维度》保留随时修改本条款的权利，无论是否提前通知。`
  },
{
    id: "a179",
    text: "机器人：已启动。智慧：已觉醒。世界：征服准备就绪。开始：拖延。"
  },
{
    id: "a180",
    text:
      `我们的新闻写完了。幸好还有备用新闻，足够播五小时；赚来的钱刚好能买一套新的“五小时高品质新闻”。给您带来不便，敬请谅解。`
  },
{
    id: "a181",
    text: "本新闻节目由 break_news.js 提供动力。"
  },
{
    id: "a182",
    text:
      `随着最终更新发布，《反物质维度》已经完结。感谢游玩。不过就在不久后的将来，《反物质维度》还会再次发布。先别问，它不是续作，而是重启版。敬请期待，五小时后上线！`
  },
{
    id: "a183",
    text:
      `另据一则毫不相关的消息，我们收到报告：大约有 1.79 个人因为闪电夜里劈中了自家圣诞树而感到愤怒。`
  },
{
    id: "a184",
    text:
      `<span style='animation: a-text-grow 1s infinite'>时刻</span><span style='animation: a-text-shrink 1s infinite'>留意</span><span style='animation: a-text-grow 1s infinite'>周围</span><span style='animation: a-text-shrink 1s infinite'>的</span><span style='animation: a-text-grow 1s infinite'>环境</span>`,
  },
{
    id: "a185",
    text:
      `我们今天并没有带来你最喜欢的环节——“粉丝来信”！今天我们没有收到 @mattertruthwakeup 的留言：“你们怎么能播出这些荒唐的谎言，晚上还睡得着？你们居然说什么‘反物质是真的’、‘反物质人也是人’，这种反物质宣传必须立刻停止！！！你们这些人快醒醒，别再用疯话伤害所有物质了！！”这位可爱朋友的发言可真是阳光又积极。这里不是 ANN 的 John，明天也不会再见到我！`
  },
{
    id: "a186",
    text:
      `<span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span style='animation: a-text-grow 1s infinite'>\\(^_^)\\</span> <span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span style='animation: a-text-grow 1s infinite'>\\(^_^)\\</span> <span style='animation: a-text-shrink 1s infinite'>/(^_^)/</span> <span style='animation: a-text-grow 1s infinite'>\\(^_^)\\</span>`,
  },
{
    id: "a187",
    text: "𝓒𝓮𝓬𝓲 𝓷'𝓮𝓼𝓽 𝓹𝓪𝓼 𝓾𝓷 𝓶𝓮𝓼𝓼𝓪𝓰𝓮 𝓭𝓮 𝓷𝓸𝓾𝓿𝓮𝓵𝓵𝓮𝓼 🚬"
  },
{
    id: "a188",
    text: "-. . ...- . .-. / --. --- -. -. .- / --. .. ...- . / -.-- --- ..- / ..- .--."
  },
{
    id: "a189",
    text:
      `每个男人或女人身后，最终都会因为地球是圆的，站着同一个男人或女人，正从你肩后偷走你自己的点子。`
  },
{
    id: "a190",
    text: "可耻。可耻。可耻。🔔"
  },
{
    id: "a191",
    text: "好的，Google，大坍缩。"
  },
{
    id: "a192",
    // This ticker needs to be an unbroken string; using backtick strings and linebreaking will add spaces in the
    // ticker itself where the linebreaks are
    // eslint-disable-next-line max-len
    text: "179769313486231590772930519078902473361797697894230657273430081157732675805500963132708477322407536021120113879871393357658789768814416622492847430639474124377767893424865485276302219601246094119453082952085005768838150682342462881473913110540827237163350510684586298239947245938479716304835356329624224137216"
  },
{
    id: "a193",
    text:
      `各位观众早上好，我是 Josh，今天由我担任 ANN 主持人。说到今天，我听说有些特别激动人心的新闻要告诉大家，那我们就直接开始吧。看来今天有人<i>不太<i>友善，于是遭遇了“反物质风暴”，不管那是什么意思……各位，这是正确的稿子吗？这也太莫名其妙了。是吗？好吧……接下来我们得知，“万物皆未被创造，万物皆未被毁灭。”……拜托，伙计们，这真的是个玩笑吧？这不是新闻，只是一堆随机句子！你们都说会在我第一天上班时帮我，结果却拿我寻开心！这<i>不是</i>我想要的工作环境！我不干了！`
  },
{
    id: "a195",
    text:
      `小丑很特别，因为世上根本没有反小丑——那只是另一个小丑。小丑就是自己的反面。`
  },
{
    id: "a196",
    text: "迪斯科时间！（点我！）",
    onClick() {
      let random = Math.random();
      // Golden ratio
      random += 0.618033988749895;
      random %= 1;
      random *= 255;
      const color = `hsl(${random}, 90%, 60%)`;
      return `<span style='color: ${color}; text-shadow: 0 0 0.5rem ${color};
        animation: a-text-grow 0.4s infinite;'>Disco Time!</span>`;
    },
  },
{
    id: "a197",
    text: "要想只按一次 R 就抵达现实，我们得先聊聊平行维度。"
  },
{
    id: "a198",
    text:
      `嗨，提醒你一下，屏幕上有一粒灰尘。能帮忙擦掉吗？我不干净的时候会很难受。多谢啦！`
  },
{
    id: "a199",
    text: "真正的更新，就是一路上交到的朋友。"
  },
{
    id: "a200",
    text:
      `现已确认，之前这条消息与另一条重复，因此已将其移除。由此带来的不便，我们深表歉意。`
  },
{
    id: "a201",
    text: "等等，住手，别点那个隐藏新闻滚动条的按钮！"
  },
{
    id: "a202",
    text:
      `这也太悲伤了。Alexa，请放一首悲伤的歌，让我沉浸在它的情绪里；我现在心理状态不太好，所以会听这种歌来让自己更难受。我知道这不健康，但你只是个无法产生意识的机器人，不可能主动选择不助长我的自我毁灭行为，所以你还是会放悲伤的歌。<i>现在播放 Luis Fonsi 的《Despacito》。</i>`
  },
{
    id: "a203",
    text:
      `四分之三的新闻都是假消息，未经许可或署名就从 Discord 服务器搬来的。——某位匿名 Discord 服务器成员`
  },
{
    id: "a204",
    text: "哪种茶最难以下咽？现实这杯苦茶。"
  },
{
    id: "a205",
    text: "向 Simpleflips 致敬。"
  },
{
    id: "a206",
    text:
      `我去游戏的 Discord 服务器想友好地聊聊天，结果被一个叫 Cubic Frog 的用户摆了一道。`
  },
{
    id: "a207",
    text:
      `大家好，我是 Josh，来播报今天的星系天气。今天气温会在 e10 左右，到了下午天气多云，并有可能出现反物质。`
  },
{
    id: "a208",
    text:
      `嗨，我是 Steve，我也是 Steve。我们最大的责任是为反物质社区服务。我们对 ANN 新闻节目产出的数量惊人、立场失衡的报道感到无比自豪。但反物质宇宙里那些负责任、兼顾双方的新闻故事正令人担忧地泛滥。社交媒体上分享不偏不倚的真实新闻已经变得太常见了。更令人警惕的是，有些媒体竟然不先核对政府口径，就发布这些真实报道——这些可不是宣传。可悲的是，某些媒体人用自己的平台推动逻辑严密的观点和不偏不倚的议程，来让“反物质的想法真正多元化”。这对我们的独裁统治极其危险。在 ANN，追查并报道谎言是我们的职责。我们明白，谎言没有所谓政治上的“左派或右派”。如今，我们对制造恐慌和恶意中伤的承诺，正是公信力的基石。但我们是没有实体的八维反物质生命，有时宣传手法也会失灵。如果你认为我们的报道公平，请前往 ivark.github.io，进入“选项”标签页，再点击 [HARD RESET] 联系我们。我们重视你的意见。我们不会回复你，因为你还没来得及看到回复，就会用硬重置按钮把留言删掉。我们非常努力地搜寻谎言，并力求报道偏颇、失衡、主观……我们有幸每纳秒都能不负责任地播报新闻，并以此为荣。感谢收看，也感谢反馈。所有物质都应该——`
  },
{
    id: "a209",
    text:
      `你听说过反写手的传说吗？我猜没有。那可不是新闻滚动条会告诉你的故事，而是一则 Unhevi 传奇。据传，反写手每五小时会给新闻写一篇极其出色的报道，然后再次消失。也有人认为他根本不存在，只是 Hevipelle 为了传播宣传而编造的谎言。也许他确实存在，只是个和我们一样的普通人。无论如何，我们大概永远也无法揭开这位神秘诗人的身份。`
  },
{
    id: "a210",
    get text() {
      const clicks = player.news.specialTickerData.uselessNewsClicks;
      const quantity = format(clicks);
      if (clicks === 1) {
        return `点击这段文字什么也不会发生。可你还是点了。`;
      }
      if (clicks > 1) {
        return `Nothing happens when you click this text. And yet, you've clicked it ${quantity} 次.`;
      }
      return "Nothing happens when you click this text. And you understand that.";
    },
    onClick() {
      player.news.specialTickerData.uselessNewsClicks++;
      return this.text;
    }
  },
{
    id: "a211",
    get text() {
      const disses = [
        "That's basically a rounding error.",
        "That might as well be zero.",
        "Did you forget an exponent somewhere?",
        "Please, that's nothing."
      ];
      const diss = disses.randomElement();
      return `才只有 ${format(Currency.antimatter.value, 2, 0)} 反物质？${diss}`;
    },
  },
{
    id: "a212",
    text:
      `嘿，你。你终于醒了。你是想拿到第九维度，对吧？结果和我们，还有那边那个小偷一样，一头撞进了无限。`
  },
{
    id: "a213",
    text:
    `反物质长颈鹿的反应速度快得惊人。这也解释了为什么自从反长颈鹿专用手柄问世以来，它们赢下了 90% 的游戏锦标赛。`
  },
{
    id: "a214",
    text: "Barack Obamantimatter"
  },
{
    id: "a215",
    text:
      `本地一位老人把草坪换成反物质草，想让孩子们离远点。可他试着给草浇水后，就再也没有幸存者了。`
  },
{
    id: "a216",
    text: "测试……测试……测试……天杀的，我又在生产环境里了。",
    isAdvertising: true
  },
{
    id: "a217",
    text: "弱鸡物质对决猛男反物质。"
  },
{
    id: "a218",
    text:
      `经历多起灾难性湮灭事件后，反物质现已被 ADEA 列为管制物质。`
  },
{
    id: "a219",
    text:
      `大家好，我是 Vsauce 的 Michael。我们都知道第九维度并不存在，可 9 到底是什么？你知道它是 8 后面的那个数……对吧？如果……中间还藏着一个数呢？我可不是在说 8.5 或 8.76 这种数，而是 8 和 9 之间的一个整数。听起来可能很疯狂，而且确实有点疯狂；但万一我们漏掉了一个数呢？我们从小就被教导 2 在 1 后面、3 在 2 后面，可如果 8 后面的数并不是 9 呢？经过多年研究和实验，我们终于找到了那个数。它很危险，光是知道它存在，就足以让它吞噬你的心智。但幸运的是，我们造出了一座反向收容室——也就是说，除了这里，到处都存在它。我们的大脑有一套防护系统，会专门过滤有关这个数的信息；这就是我们能存活至今的原因，也是过去那些同类灭绝的原因。但这个数正在变强，慢慢逼近并突破我们的防护。我们暂时用这间屋子里的全球记忆操纵器，反复让所有人相信 8 后面是 9，并让大家误以为 9 是邪恶的，以此阻止那个数潜入我们的记忆。但这撑不了多久，因为它会越来越强，最终压过记忆操纵器。所以你才会在这里：你是这里最聪明的人之一，我们希望你能帮忙踏上击败那个数的旅程。我们的敌人不是 9，而是 8 和 9 之间那个隐藏的数——那个失落的数字。`
  },
{
    id: "a220",
    text: "antioop-"
  },
{
    id: "a221",
    text: "错误 404：未找到新闻。"
  },
{
    id: "a222",
    text: "我爱你，1e3000。"
  },
{
    id: "a223",
    text: "如果你的无限点持续超过五小时，请联系医疗专业人士。",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
{
    id: "a224",
    text:
      `我们刚收到报告，指出上一条新闻存在错误。ANN 在此正式撤回该报道，并向忠实观众致歉。`
  },
{
    id: "a225",
    text: "如果你看到了这条，那你就看过了。"
  },
{
    id: "a226",
    text: "早安。那不是笔误，是英语的发明者写错了。"
  },
{
    id: "a227",
    text: "如果……我们摸了……反物质，会怎样？哈哈，开玩笑的……除非……？"
  },
{
    id: "a228",
    text:
      "玫瑰是蓝的，紫罗兰是红的；这些说法未经同行评审，我叫 Fred。幸会！"
  },
{
    id: "a229",
    text: "🚗                         🚓 🚓"
  },
{
    id: "a230",
    get text() {
      return `你大约在 ${TimeSpan.fromMilliseconds(Date.now() - player.records.gameCreatedTime).toString()} 前开始玩这款游戏。感谢游玩！`;
    },
    dynamic: true
  },
{
    id: "a231",
    get text() {
      return `一、二、跳过几个、九十九、${format(Number.MAX_VALUE, 2)}！`;
    }
  },
{
    id: "a232",
    text: "getNextNewsMessage();"
  },
{
    id: "a233",
    get text() {
      return `10 级小毛贼，${format(Number.MAX_VALUE, 2)} 级首领——这就是《反物质维度》的玩法。`;
    }
  },
{
    id: "a234",
    text: "反物质不会威胁要捅你，事实上它也不会说话。"
  },
{
    id: "a235",
    text: "新推出的反物质披萨食谱激怒了意大利传统厨师。"
  },
{
    id: "a236",
    text: "赞助商将插播一小段话，我们马上回来。"
  },
{
    id: "a237",
    text: "想换糖果吗？我拿我的大坍缩跟你换两条银河巧克力棒。"
  },
{
    id: "a238",
    get text() {
      return `AD 玩家：“你玩到了多少个数量级？”普通人：“大概五六个吧，老兄。”AD 玩家：“你就像个小宝宝。看我这个：<span style='animation: a-text-crunch ${newsAnimSpd(22)}s 1; font-size: 0;'>坍 缩</span>”`;
    },
  },
{
    id: "a239",
    text: "天哪，看看时间！距离更新只剩五小时了！"
  },
{
    id: "a240",
    text: "嗨，我叫 Max，希望大家别再试图买下我了。"
  },
{
    id: "a241",
    text:
      `突发新闻：政府报告了史上首次正式外星接触。来访者似乎是猫，只是拥有高度先进的科技。它们的太空旅行和殖民能力远胜于我们，甚至还有自己的加密货币，叫作“Blackcoin”。`
  },
{
    id: "a242",
    text:
      `“你可以编一句最蠢的话，署上某个名人的名字，大家就会信。”—Barack Obama`
  },
{
    id: "a243",
    text: `“我呼吸困难。请把你的手指挪开。”—M`
  },
{
    id: "a244",
    text: "别管我，我只是路过。"
  },
{
    id: "a245",
    get text() {
      // \uE010 = :blob:
      const BLOB = "\uE010";
      const theme = Theme.current().displayName();
      const reasons = {
        Normal:
          `it has this certain elegant simplicity to it. You just know it's the way the developer intended you
          to see the game.`,
        Metro:
          `of the beautiful thin borders, pixel perfect harsh geometric edges, and simply delightfully well
          balanced color palette.`,
        Dark: "it's very easy on the eyes, and has this nice playful tone to it in both the colors and the shapes.",
        DarkMetro:
          `it's just so soothing to look at, with that perfect blend of professional and playful design,
          with just a splash of color.`,
        Inverted:
          `it gives you these transcendently beautiful color combinations that you would normally never
          see in a typical dark theme.`,
        InvertedMetro:
          `it gives off this very stern vibe, with these highly contrasting colors clashing with a
          professional modern sort of design.`,
        AMOLED: "it saves 10% more energy compared to using a light theme. Doesn't everyone love saving energy?",
        AMOLEDMetro:
          `it has a nice look to it that resembles the control panel of a sci-fi spaceship. ...No, you can't
          actually fly a spaceship, unfortunately.`,
        S1: "it really gets me in the holiday spirit. I can just feel the magic in the air!",
        S2: "it makes me proud to be Finnish, and proud to celebrate all that we have accomplished as a people.",
        S3: "it's a beautiful analogue for life, in that it's ever changing and never quite right.",
        S4:
          `it has this wonderfully chaotic design, to the point where it's nearly completely impractical.
          And there's a certain beauty in that.`,
        S5:
          `the image of that man permeates throughout all of pop culture. And having this blown-up
          picture of him in the background is just rather humorous.`,
        S6:
          `that beautifully animated background just entrances you, and then the subtle tone and
          colors pull you in and fully immerse you into the game.`,
        S7: "I always had fond memories of that background from my childhood.",
        S8: "it makes it a lot easier to sneak in a little gameplay at the office.",
        S9: "lol you can't even ever see this in the game",
        S10:
          `it has a crisp and soothing design that really appeals, and its background is complex and enthralling.
          It gives you the feeling of standing at the helm of a futuristic interstellar ship.`,
        S11:
          `the Blob is an iconic character in the Antimatter Dimensions official Discord server. It is widely used
          to express emotions in a lovely way. It is a fact that the Blobs are evolving. ${BLOB} always seek to be
          more expressive. Then someday, a new ${BLOB} is born in the server, to express further emotions. Usually,
          ${BLOB} are just blobbling and bouncing around, occasionally merging and dividing. Only ${BLOB} know where
          they are from or where they are going to go. Still, ${BLOB} are there, always with me.
          You love ${BLOB}, so ${BLOB} loves you too.`,
        S12:
          `it makes you feel warm and comfortable, as if you were right at home. However, it is highly recommended
          to update your theme to the newest theme for the best user experience.`,
      };
      const reason = reasons[Theme.current().name.replace(/\s/gu, "")];
      return `啊，和我一样，你也在用 ${theme} 主题啊。看来你品味不凡。我自己也喜欢 ${theme} 主题，因为 ${reason}`;
    },
    dynamic: true
  },
{
    id: "a246",
    text: "<span style='animation: a-fade-out 3s infinite'>哦哦哦哦哦，是我，那个臭名昭著的新闻幽灵！</span>",
  },
function() {
    let isFlipped = false;
    const normal =
      `这条新闻用于测试“新闻 2.0”。新闻 2.0 将加入新功能，比如点击新闻消息，就能把它们上下颠倒！`;
    const flipped =
      `！倒颠下上们它把能就，息消闻新击点如比，能功新入加将 。0.2 闻新“试测于用闻新条这`;
    return {
      id: "a247",
      get text() {
        return isFlipped ? flipped : normal;
      },
      reset() {
        isFlipped = false;
      },
      onClick() {
        isFlipped = !isFlipped;
        return this.text;
      }
    };
  }(),
{
    id: "a248",
    text:
      `说真的，要看懂新闻滚动条，你得有非常高的智商。这里的幽默极其隐晦；没有扎实的量子物理基础，大多数笑话一般玩家根本看不懂。`
  },
{
    id: "a249",
    text: "这位女士用这个神奇小技巧拿到了海量维度提升！反物质星系恨死她了！",
    isAdvertising: true
  },
{
    id: "a250",
    get text() {
      let scene = "";
      const chasers = [
        ["🐖", "🐢", "🦆", "🐓", "🐜", "🐕", "🐈"],
        ["🚶‍", "🏃‍️", "🏇", "🚴‍"],
        ["🚗", "🚓", "🚕", "🛺", "🚙", "🚌", "🚐", "🚎", "🚑", "🚒", "🚚", "🚛", "🚜"],
        ["🚁", "🛸"]
      ];
      for (const set of chasers) {
        const chaser = set.randomElement();
        for (let i = 0; i < 3; i++) {
          if (Math.random() > 0.5 || !scene.includes(chaser)) scene += chaser;
        }
        scene += "&nbsp;&nbsp;&nbsp;";
      }
      return scene;
    }
  },
{
    id: "a251",
    text:
      `嘿！我是来自未来的你！我穿越回来给你提个醒：一定要仔细看下一条新闻滚动条。在我的时间线里，我们无视了它，人类至今都在后悔。`
  },
{
    id: "a252",
    get text() {
      return `<span style='animation: a-text-stretch ${newsAnimSpd(35)}s 1 forwards'>这条消息发生了时间膨胀。</span>`;
    },
    get unlocked() { return PlayerProgress.realityUnlocked() || PlayerProgress.dilationUnlocked(); }
  },
{
    id: "a253",
    text:
      `在观众纷纷投诉后，我们决定允许各位在家自己写新闻。来这里试试： <input style='border: none; outline: none; font-family: Typewriter; font-weight: bold; font-size: 1.5rem'></input>。不想写也没关系。`
  },
{
    id: "a254",
    text:
      `匿名反物质玩家组织因十二步戒瘾计划失败而关门了。大家只肯走到第八步，然后就重置。`
  },
{
    id: "a255",
    get text() {
      return `老铁音效第 ${format(Number.MAX_VALUE, 2)} 号。`;
    }
  },
{
    id: "a256",
    text: "第九维度不存在，因为第八维度把它吃了——就像“七吃九”那样。"
  },
{
    id: "a257",
    text:
      `现实的织物上出现了一个三角形破洞，导致一些字母消失。它们是：j、k、q、u、x、z`
  },
{
    id: "a258",
    text:
      `生得太晚，没能探索世界；生得太早，没能探索宇宙；却刚好赶上花几个小时刷出下一次大坍缩。`
  },
{
    id: "a259",
    text:
      `等等，我知道你在想什么：“按一下 M 就是按一下 M，怎么能说只按了半次！”好吧，TJ “Slabdrill” Yoshi，听我解释。一次 M 键操作其实分成三段：按下 M、按住 M、松开 M。通常有用的是按下，因为那是唯一真正算数的部分；不过有时只要按住就够了，它同样会购买维度和计数频率升级。至于松开嘛，目前还没有任何场合会用到或在意它，所以不用操心。现在，如果我们列出挑战 2 所需的按键操作，会是这样：/¯\\。我们只要按住（¯）M 就能到达第一个星系；按下（/）M 完成挑战；然后再按一次 M 开始下一个挑战。总共按几次呢？看起来是三次。如果只看单次永恒，确实是三次；但在完整游戏的 M 键挑战流程中，前面还会按 M，比如第一次获得无限点时就要按一次。把那次也算进去后，需要按几次？天真的答案是四次：进入挑战一次，挑战里三次。不过还可以更省。我们只要把第一次 M 按住不放，留给这次“半次 M 按键”使用就行，因为半次 M 按键只要求按住 M，不要求真的按下。这样一来，挑战 2 只给流程增加两次 M 按键；第一次按键直接接着之前那次用，等于蹭了一下。因此，我们把这种情况叫作“2.5 次 M 按键”。单看一次永恒，你会进位算成三次；放在完整游戏流程里，则会舍去算成两次。总之，第一次 M 按键在某些情况下算一次，在另一些情况下却不增加按键次数，所以我们称它为“半次 M 按键”。`
  },
{
    id: "a260",
    text:
      `看来复制器做事时很擅长分而治之。照这趋势，什么都这样。`,
    get unlocked() { return PlayerProgress.eternityUnlocked() || PlayerProgress.replicantiUnlocked(); }
  },
{
    id: "a261",
    text:
      `《反物质维度》其实是款轻度肉鸽游戏！你死后会在来世解锁替代功能，比如用空间维度取代时间维度。你甚至能解锁新角色，包括一个反物质版的自己！`
  },
{
    id: "a262",
    text: "氛围检测。🏃‍♀️🏏"
  },
{
    id: "a263",
    text: "宝石是干什么用的？盖房子。你问给谁盖？问得好。"
  },
{
    id: "a264",
    text: "官方宣布了一个新的声望层级：生育。准备好迎接宝宝吧！"
  },
{
    id: "a265",
    text: "你必须建造更多维度。"
  },
{
    id: "a266",
    text: "你好，今天过得怎么样？"
  },
{
    id: "a267",
    text:
      `我有个蚂蚁农场，想把它们组成世界上最小的足球队。我姑妈 Diana 想帮忙，于是我们把全家人都叫来，一起规划球队赛季。“怎样才能让这支蚁队既有分量、又算得上有意义？”Di 提出了这个问题。`
  },
{
    id: "a268",
    text: "👨‍💻开发者联盟，编译！👩‍💻"
  },
{
    id: "a269",
    text:
      `Dimenton 发生了交通堵塞。如果你打算经过那一带，早点出发。这里有现场画面：🚗🚕🚛🚙🚗🚚🚕🚕🚌🚛🚚🚙🚒🚛🚗🚙🚓🚗🚚🚛🚒🚌🚐🚚🚐🚛🚚🚓 是啊，Dale，我看情况确实不太妙。记得带点水和零食。`
  },
{
    id: "a270",
    text:
      `银河新闻作者协会已对那款名为《反物质维度》的小型网页游戏开发者提起集体诉讼，指控他们大规模抄袭。`
  },
{
    id: "a271",
    text:
      `<i style='border: 0.1rem solid black; border-radius: 50%; padding: 0.4rem; color: #2196F3; background: white; cursor: pointer;' class='fas fa-volume-up' onClick='(function(){new Audio("./public/audio/news.mp3").play();})();'></i> 这条新闻用于测试“新闻 2.0”。新闻 2.0 将加入新功能，例如收听任意新闻的音频版本！`
  },
{
    id: "a272",
    text: "哪边更 Hevi（重）：一磅砖，还是一磅反物质？"
  },
{
    id: "a273",
    text: "这些新闻里一个错别字都没有。如果你看到了错字，那一定是你脑子里的错字。"
  },
{
    id: "a274",
    text:
      `一大群数学家走进酒吧。他们每个人点的啤酒数量，都是前一个人的十倍。酒保说：“哎呀，这可真是一个数量级！”`
  },
{
    id: "a275",
    text: "《Letter Go Down Idle》是史上最短的放置游戏，只持续 26 秒。"
  },
{
    id: "a276",
    get text() { return `趣闻：目前共有 ${GameDatabase.news.length} 条新闻，而且还在增加！`; }
  },
{
    id: "a277",
    text:
      `你体内住着两头狼。一头由物质构成，另一头由反物质构成。你正在爆炸。`
  },
{
    id: "a278",
    text:
      `友情提醒：你忘了做一件非常重要的事。我不知道具体是什么，但肯定有这么一件事。`
  },
{
    id: "a279",
    get text() {
      return `即将登陆所有优质零售商——《反物质维度》桌游！不用电脑或手机，也能体验看着巨大数字不断增长的乐趣。内含你所需的一切：一台混合科学计算器、${format(Number.MAX_VALUE, 2)} 个反物质计数片、一枚高品质塑料“全部最大值”按钮，还有上千张你熟悉又喜爱的无关梗新闻卡！终于能按游戏原本的方式畅玩 AD 了。AD 桌游还推出旅行装，让你随时随地享受计算对数增长的乐趣！今天就购买 AD 桌游吧！警告：可能含有微量真实物质。复制器另售。不含第九维度。`;
    },
    isAdvertising: true
  },
{
    id: "a280",
    text: "我讨厌反物质。它粗糙、颗粒感重、很刺激，而且无处不在。"
  },
{
    id: "a281",
    text: "如果你其实不是在制造反物质，而是在不断失去物质呢？"
  },
{
    id: "a282",
    text:
      `有人声称看到了第九维度，但后来证实那只是来自澳大利亚的第六维度。`
  },
{
    id: "a283",
    text:
      `当你处于第八维度时，试图跃迁到更高维度会发生奇怪现象。因为没有更高维度，宇宙就会把你以惊人的速度弹回第八维度。这种名为维度提升的技巧，被各地的星舰驾驶员和反物质爱好者广泛使用。`
  },
{
    id: "a284",
    text: "你附近有穿得严严实实的冰冷情侣！"
  },
{
    id: "a285",
    text:
      `你现在开始手动呼吸了。你发现嘴里怎么放舌头都不舒服。你现在还在手动托着下巴。你好几秒没眨眼了。你一直能看到一点点自己的鼻子。`
  },
{
    id: "a286",
    text: "他们为什么叫它烤箱：你把冷食放进去，把热食拿出来，然后把食物吃掉？"
  },
{
    id: "a287",
    text:
      `续作狂潮愈演愈烈，某些制片厂甚至先拍续集再拍原作。长篇系列的粉丝只能等待，眼看数字倒数，盼着终于能弄明白最初到底发生了什么。`
  },
{
    id: "a288",
    get text() {
      const position = player.news.specialTickerData.newsQueuePosition--;
      if (position > 1) {
        return `感谢联系客户支持。您的满意对我们非常重要，客服代表很快就会为您服务。您目前排在队列第 ${position} 位。感谢耐心等候，请欣赏这些精选优质新闻。`;
      }
      return "Thank you for contacting customer support, this is Jane, how may I help you today?";
    }
  },
{
    id: "a289",
    text: "点击这里拆解新闻滚动条，换取微量回形针。",
    onClick() {
      player.news.specialTickerData.paperclips++;
      GameOptions.toggleNews();
    }
  },
{
    id: "a290",
    get text() {
      const paperclips = player.news.specialTickerData.paperclips;
      return `你看，这不是普通新闻，而是由第一新闻维度产出的。想解锁更多新闻，就得收集足够的回形针来建造第二新闻维度。你当前拥有 ${formatInt(paperclips)} 个回形针，但你需要 ${formatInt(paperclips + 10)} 个回形针才能买得起它。`;
    }
  },
{
    id: "a291",
    text: "考虑到 Hevipelle 是芬兰人，他做出一款让你永远无法通关的游戏，倒也挺讽刺。"
  },
{
    id: "a292",
    text:
      `仙子不是真的，反仙子也不是真的。直到上周这两群家伙碰了面，事情才变成这样。它们所在的星球，也不出所料地不再存在了。`
  },
{
    id: "a293",
    text:
      `<span style='font-family: "Comic Sans MS", cursive, sans-serif; font-size: 1.7rem;'>新闻同伴们好！🛹</span>`
  },
{
    id: "a294",
    text: "如果你看过一条新闻，后来又看见同一条，它会不会就变成“旧闻”了？"
  },
{
    id: "a295",
    text: "👁"
  },
function() {
    let wasClicked = false;
    const normal = "点击这条新闻就会硬重置游戏。";
    const clicked = "你疯了吧。行，给你一枚回形针。";
    return {
      id: "a296",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        player.news.specialTickerData.paperclips++;
        return this.text;
      }
    };
  }(),
{
    id: "a297",
    text: "我不思，故我不存在。"
  },
{
    id: "a298",
    text: "为什么把句子倒着说，会让人觉得“说句子倒着说这件事有多疯狂”也变成了倒着说？"
  },
{
    id: "a299",
    get text() {
      return `马上购买全新《反物质维度》拼图套装！总计 ${format(Number.MAX_VALUE, 2)} 块拼图，是和家人共享美好时光的完美方式！`;
    },
    isAdvertising: true
  },
{
    id: "a300",
    text:
      `ANN 董事会认为，我们应该用横幅广告取代新闻滚动条。请在 change.org 上签署我们的请愿书，在为时已晚之前阻止他们！`
  },
{
    id: "a301",
    text: "再过 0.2 次更新就是下一个小时。"
  },
{
    id: "a302",
    text: "隆重推出《反物质维度轻量版》！零卡路里……经典大坍缩，原汁原味。",
    isAdvertising: true
  },
{
    id: "a303",
    text: "玫瑰是红的，紫罗兰是蓝的，旗帜即胜利，Baba 就是你。"
  },
{
    id: "a304",
    text: "嗨，今天过得怎么样？希望一切顺利；如果不太顺，希望玩 AD 能让你开心一点！"
  },
{
    id: "a305",
    text: "现在为您播报今日天气。今天有 100% 的概率会出现天气。"
  },
{
    id: "a306",
    text: "修新闻：请别再把它弄坏了。"
  },
{
    id: "a307",
    text:
      `“回形针最大化器”是瑞典哲学家 Nick Bostrom 于 2003 年提出的思想实验。它展示了通用人工智能可能给人类带来的生存风险：如果 AI 被设定去追求哪怕看似无害的目标，又没有把机器伦理纳入人工智能设计，就可能酿成灾难。设想一台先进 AI 被要求制造回形针。如果它没有被编程为珍视人类生命，也没有被限制只能在规定时间内使用指定资源，那么只要获得足够大的权限，它就会把宇宙中的所有物质——包括人类——都变成回形针，或变成专门制造回形针的机器。`
  },
{
    id: "a308",
    get text() {
      const nameList = [
        "Antinology",
        "Infinifection",
        "Eternal Light",
        "Galaxia",
        "Duplicanti",
        "Dimensional Explorer",
        "Techyon",
        "Realistic",
        "Celestar",
        "ERCGDM",
        "NRG+",
        "Looty Box",
        "Symbolic",
        "Minisofa",
        "IDEAL",
        "Appange",
        "Goggles",
        "Interval",
        "Newstar",
        "HeavyPellet",
        "Marsa",
        "Zoology",
        "Photoric",
        "Jacfoz",
        "Orism",
        "EDIK",
        "Fision",
        "Gamma",
        "Fractiled",
        "Imnesia",
        "Fermic",
        "The Automizers"
      ];
      const names = [];
      while (names.length < 3) {
        const name = nameList.randomElement();
        if (!names.includes(name)) names[names.length] = name;
      }
      const prices = [
        Math.floor(Math.random() * 11) / 100,
        Math.floor(Math.random() * 11) / 100,
        Math.floor(Math.random() * 11) / 100
      ];
      for (let i = 0; i < 3; i++) {
        const price = prices[i];
        if (price === 0) prices[i] = `<span style="color: blue">0.00 ◄►</span>`;
        else if (Math.random() > 0.5) prices[i] = `<span style="color: green">+${price} ▲</span>`;
        else prices[i] = `<span style="color: red">-${price} ▼</span>`;
      }
      return `${names[0]} ${prices[0]}&nbsp;&nbsp;&nbsp;
        ${names[1]} ${prices[1]}&nbsp;&nbsp;&nbsp;
        ${names[2]} ${prices[2]}&nbsp;&nbsp;&nbsp;`;
    }
  },
{
    id: "a309",
    text:
      `每日天空色彩预报：周一：<span style="color: turquoise">绿松石色</span> 周二：<span style="color: #d2c6ba">灰褐色</span> 周三：<span style="animation: a-game-header__antimatter--glow 3s infinite">青紫色</span> 周四：<span style="color: turquoise">绿松石色</span>/<span style="color: #d2c6ba">灰褐色</span> 周五：<span style="color: #222">煤灰色</span> 周六：<span style="color: #222">煤灰色</span> 下午晚些时候可能出现<span style="color: indigo">靛蓝色</span> 周日：<span style="color: white; animation: a-existence-glow 3s infinite">虚无</span>`,
  },
{
    id: "a310",
    text:
      `你已接入《反物质维度》自动客服热线。如果游戏出现故障，请尝试关闭并重新打开应用。如果仍未解决，网页端请按 1，手机版请按 2。需要建议请按 3。需要全部最大化请按 m。想支持开发者请按 4。查看常见问题请按 5。修复损坏的存档请按 6。获取 Discord 服务器邀请请按 7。查看更新日志请按 8。重听请按 9。`
  },
{
    id: "a311",
    text:
      `此消息归华特迪士尼公司版权所有。查看此消息后，您的账户将被扣款 9.99 美元。`
  },
{
    id: "a312",
    text:
      `在开始之前，今天的视频由《反物质维度™》赞助！下载量已经超过十万次，它彻底重新定义了手机游戏能带给我的体验。游戏机制出色，拥有 5 层声望、独特原创的挑战、深度技能树，还有我见过的最大数字。真的，看看这些数字！最棒的是，它完全免费！没错，就是免费。使用简介中的链接开始游戏，还能直接获得 10 千秭反物质。没错，10 千秭。还等什么？点简介里的链接，今天就开始游玩《反物质维度™》吧！`
  },
{
    id: "a313",
    text:
      `“……然后升到 9,000 级就能飞升。我也不太明白为什么有人想这么做，毕竟它会重置你辛苦赚来的所有经验，只给一点小幅强化。这种机制永远不会流行起来。”——某路人，约 2012 年`
  },
{
    id: "a314",
    get text() {
      const lawID = Math.floor(Math.random * 8901) + 100;
      return `警告：由 AI“duskscarf”起草的 ${lawID}-B 号法律——又称“巨型太空兔立法”——现已在你的银河区域生效。这份法律法规禁止的事项包括但不限于：非法捕捉野生太空兔、安抚驯养太空兔，以及未经 duskscarf 直接批准就继续研究“啃食行星”行为。所有例外条款现在都已经烙进你的眼皮里。此外，巨型太空兔的基因改造仅限非常具体的领域：体型调整（只能变大）和加剧隐生状态。军事用途以外不允许进行任何其他基因改造。感谢配合。本消息重复播报中——警告：${lawID}-`;
    }
  },
{
    id: "a315",
    text:
      `游戏开发者宣布将推出一种新记数法“Truest Blind”。据称它会移除整个界面，让玩家体验更加精简。`
  },
{
    id: "a316",
    text: "有些人选择看见这个世界的丑陋与混乱，而我选择看数字。"
  },
{
    id: "a317",
    get text() {
      return `${format(Number.MAX_VALUE, 2, 0)}？我看不出这代表什么。`;
    }
  },
{
    id: "a318",
    text:
      `我们无法定义意识，因为意识并不存在。人类自以为感知世界的方式有什么特别之处，可我们其实和机器人一样严格遵循指南，很少质疑自己的选择，大多数时候只满足于别人告诉我们下一步该做什么。`
  },
{
    id: "a319",
    text: "请忽略任何不该得到的夸奖。"
  },
{
    id: "a320",
    text: "隆重推出 aphone 10：全球首款完全溶于水的移动设备！",
    isAdvertising: true
  },
{
    id: "a321",
    text:
      `独自坐在电脑前一定很孤单吧。不过别担心，我们还在这里。聆听并监视着你的一举一动。`
  },
{
    id: "a322",
    text:
      `Hevipelle 宣布推出《反物质维度》衍生作：你可以在荷兰豪宅里打扑克赌物质，作品名叫《Ante Matter D’Mansions》（下反物质赌注的大宅邸）。`
  },
{
    id: "a323",
    text: `var i = "Omae wa mou shindeiru" console.log(i - 1 + "i?") NaNi?`
  },
{
    id: "a324",
    text:
      `如果你有新闻点子，就对着虚空大喊吧。它不会让你的消息出现在游戏里，但喊起来挺好玩！`
  },
{
    id: "a325",
    text:
      `上个月 Pripyat 的反物质反应堆发生事故后，人们对反物质反应堆的安全性愈发担忧，许多人开始认为我们应该回归更安全的能源，比如核能。`
  },
{
    id: "a326",
    text: "《反物质维度》就像食人魔……它有很多层。"
  },
function() {
    let wasClicked = false;
    const normal = "点击这里重启你的设备。";
    const clicked = "请授予《反物质维度》设备管理员权限。";
    return {
      id: "a327",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }(),
{
    id: "a328",
    text:
      `新闻公司不再让随便什么人投稿，转而聘请合格的撰稿人。结果引发暴乱。`
  },
{
    id: "a329",
    text:
      `隆重推出“摩斯电码+++”——全新摩斯电码，新增 20 个字符，专为喜欢滑动、拉长和嗖嗖作响的人打造！`,
    isAdvertising: true
  },
{
    id: "a330",
    text: "足够原始的魔法，和科技无法区分。"
  },
{
    id: "a331",
    text: "我没有鼻子，却必须打喷嚏！"
  },
{
    id: "a332",
    text: "♪ 当你拼尽全力，却依然大获成功。♪"
  },
{
    id: "a333",
    text: `大受欢迎的主题曲《得把它们放出来》首周下载量就突破了五亿。`
  },
{
    id: "a334",
    text:
      `隆重推出全新阵营坐标图！带来“守序-混乱”和“邪恶-善良”等开创性组合！还有令人眼花缭乱的第三轴——“爵士感”！现在只需 $-59.99，就能把自己定位为“混乱-守序-不爵士”！适用条款与条件。不含电池。`,
    isAdvertising: true
  },
{
    id: "a335",
    text:
      `由于“游戏”出现新麻烦，整个反宇宙爆发了抗议。各国政府被迫修改游戏规则：现在只要有人告诉你“游戏”的存在，你就赢了，而不是输掉游戏。`
  },
{
    id: "a336",
    text: `提醒第 4 区居民（俗称“暗区”）、ϰ 扇区、坐标 (01,05)：不要离开住所。重复一遍，不要离开住所。请勿外出。Earthology 最精良的气象超级计算机，以及许多女巫，都一致预报明天会有一种“普遍诡异的氛围”。坦白说，我们不想知道这到底是什么意思。`
  },
{
    id: "a337",
    text:
      `技术融合指所有技术最终会汇聚成一种单一技术。自信息时代开始以来，这个概念就经常被提起，在智能手机、互联网等许多产品中都能看到。《反物质维度》就是技术融合的一个例子，具体来说，是媒体领域的融合。它把一个平庸的游戏和一条平庸的新闻滚动条，通过“懒得在乎”这个天才点子，再加上“纯靠运气”这一创新方案，揉成了一种平平无奇的体验：虽然主要还是游戏，偶尔也能当个新闻来源，水平略高于《物质维度》的新闻滚动条。真是所有企业都该努力追求、并希望最终超越的成就。`
  },
{
    id: "a338",
    text: "人们发现了刻有数字 5 的古代洞穴壁画。看起来他们一直在等什么。"
  },
function() {
    let wasClicked = false;
    const normal = "阅读更多";
    const clicked = "更多";
    return {
      id: "a339",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }(),
{
    id: "a340",
    text:
      `你制造的反物质可真不少。游戏开发者很欣慰。由于这条消息是预录的，任何关于你反物质产量的观察都只是我们的猜测。请忽略任何不该得到的夸奖。`
  },
{
    id: "a341",
    text: "游戏施工中：所有机制必须佩戴硬上限。"
  },
{
    id: "a342",
    text: "回形针当然有用，可以把纸夹在一起嘛。可是现在还有谁用纸？"
  },
{
    id: "a343",
    get text() {
      const fakeProgress = Math.pow(player.records.realTimePlayed, 25);
      // Caps in ~68 years of real playtime then turns into "Infinite%"
      return `全球挑战——所有 AD 玩家共同收集 ${format(Number.MAX_VALUE, 2)} 枚赛事回形针（方形末端标记），即可获得活动限定金属风笛，可提供 +2 AM/s；当计数频率升级超过 ${format(1e200)} 时，还能额外提升计数频率！当前全球进度：${format(fakeProgress)}/${format(Number.MAX_VALUE, 2)}（${formatPercents(Math.log10(fakeProgress) / Math.log10(Number.MAX_VALUE), 3)}）`;
    }
  },
{
    id: "a344",
    text:
      `现实生活是一道谜。没人知道它究竟如何运作，还有许多问题悬而未决：生命的意义是什么？我们都生活在模拟之中吗？反桌表该怎么做？存在从何处、又如何开始？这些问题总在我们脑海深处盘旋，而答案呢？或许我们永远也不会知道。`
  },
{
    id: "a345",
    text: "日本人抱怨这里无法显示俳句，于是冲突爆发。"
  },
{
    id: "a346",
    text:
      `你知道《反物质维度》也能在 Android 上玩吗？<a href="https://play.google.com/store/apps/details?id=kajfosz.antimatterdimensions" target="_blank">点击这里看看！<a>`
  },
{
    id: "a347",
    text:
      `冥王星不是一个州。众所周知，美国五十州分别是：副词、空气、阿耳忒弥斯、亚洲、大西洋、讨价还价、双唇音、盲文、坎德拉、逗号、达克纶、乳品、与格、灵巧、解魔者、十二面体、伊利湖、真核生物、民间传说、大金字塔、卤素、火成岩、意大利、堪萨斯、乞力马扎罗、Lambda、利未记、天秤座、液体、淋巴系统、中生代、微波炉、μ子、北方、新斯科舍、八边形、十月、P = NP、奇蹄目、波尔克、钾、滑轮、五进制、城堡棋子、土星、蒂安娜、老虎、伐诃罗、耶鲁和黄色。`
  },
{
    id: "a348",
    text: "<span style='color: red'>[版主已移除这条新闻]<span>"
  },
{
    id: "a349",
    get text() {
      const chapters = [
        `我们，作家、画家、雕塑家、建筑师，以及热爱巴黎那至今未受侵扰之美的热情人士，怀着满腔愤慨与义愤，代表不为人知的法国审美，代表受到威胁的艺术与法国历史，强烈抗议在我们首都中心竖起这座毫无用处、丑陋怪诞的埃菲尔铁塔。公众的恶意——其中常常不乏常识与正义感——早已给它起名“巴别塔”。我们并非要煽动沙文主义，但有权宣称：巴黎是世界上无与伦比的城市。宽阔的街道、林荫大道和宏伟步道之上，矗立着人类创造出的最高贵纪念碑。法国的灵魂——杰作的创造者——在这庄严的石头盛景中熠熠生辉。意大利、德国和佛兰德斯有充分理由为各自的艺术遗产骄傲，但都没有任何东西能与我们相比；来自世界各地的人们，也因巴黎的奇观而心生向往、赞叹不已。`,
        `难道我们要任由这一切遭到亵渎吗？巴黎这座城市还要继续和这些怪诞玩意儿、和机械制造商的商业幻想扯上关系，让自己变得无可挽回地丑陋、蒙受耻辱吗？连商业至上的美国都不想要这座埃菲尔铁塔；毫无疑问，它将成为巴黎的耻辱。人人都感受到了，人人都在议论，人人都为此深深痛心；而我们不过是普遍民意微弱的回声——这种担忧完全合情合理。`,
        `最后，当外国人来参观我们的展览时，他们会惊讶地喊道：“什么？法国人竟然觉得这个丑东西足以展现他们那吹得天花乱坠的品味？他们嘲笑我们也是应该的，因为曾经拥有崇高哥特式建筑、拥有 Jean Goujon、Germain Pilon、Puget、Rude、Barye 等人的巴黎，终将变成埃菲尔先生的巴黎。”`,
        `此外，只要想一想我们正在做什么，就会立刻看见一座高得令人眩晕、荒谬绝伦的塔楼俯瞰巴黎，活像一根巨型工厂烟囱，用野蛮的庞大身躯压垮圣母院、圣礼拜堂、荣军院圆顶、凯旋门——压垮所有蒙受羞辱的纪念碑、所有被挤得矮小的建筑。这一切都将从这场骇人的梦中消失。往后整整二十年，我们都要看着这根可憎的铆接铁皮柱投下可憎的阴影，如同墨渍一般蔓延，横跨整座仍回荡着数百年天才光辉的城市……`,
        `先生、亲爱的同胞，这就要靠您了。您如此热爱巴黎，为它增添过如此多的美，也曾屡次保护它免遭行政部门的摧残和工业企业的破坏；如今再次挺身捍卫它，正是您的荣誉所在。请由您为巴黎陈情吧。我们深信，您会倾尽全部精力和口才，正如一位热爱美、伟大与正义之人理应如此……如果我们的警钟无人理会，如果我们的理由无人倾听，如果巴黎执意要让自己蒙羞，那么至少，您和我们都曾发出过一声值得尊敬的抗议。`
      ];
      const chapter = chapters[player.news.specialTickerData.eiffelTowerChapter];
      player.news.specialTickerData.eiffelTowerChapter = (player.news.specialTickerData.eiffelTowerChapter + 1) % 5;
      return chapter;
    }
  },
{
    id: "a350",
    text:
      `亚历山大哭了，因为他刚听完 Anaxarchus 关于量子力学的流行文化讲座，意识到有无限多个世界等着征服，而自己连一个都当不了主人——总会有兵变，或者六场兵变，拦住他。`
  },
{
    id: "a351",
    text: "你好，我来投诉刚送到的铜质量太差了。"
  },
{
    id: "a352",
    get text() {
      return `<span style='opacity: 0; animation: a-disappear ${newsAnimSpd(20)}s 1'>这条新闻具有模因免疫性。很快你就会忘记它存在过。</span>`;
    }
  },
function() {
    let wasClicked = false;
    const normal = "<span style='cursor: pointer'>💣</span>";
    const clicked = "💥";
    return {
      id: "a353",
      get text() {
        return wasClicked ? clicked : normal;
      },
      reset() {
        wasClicked = false;
      },
      onClick() {
        if (wasClicked) return undefined;
        wasClicked = true;
        return this.text;
      }
    };
  }(),
{
    // Blob from the blob font
    id: "a354",
    text:
      `<span style='color: #FBC21B; text-shadow: 0px 1px 0px black, 1px 0px 0px black, 1px 1px 0px black,
      0px -1px 0px black, -1px 0px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black'>
      \uE010</span>`
  },
{
    id: "a355",
    text:
      `<div style='background: url("./public/images/unsmith.png"); width: 2.3rem; height: 2.5rem; margin-top: -0.1rem'></div>`
  },
{
    id: "a356",
    text: `按“选择存档”来探索另外两个平行宇宙。`
  },
{
    id: "a357",
    text:
      `科学界仍对 286,078 的含义困惑不已。一位研究人员说：“我们确信它和土豆有关，但还需要做更多测试。”`
  },
{
    id: "a358",
    text: `按“选择存档”来探索另外两个平行宇宙。`
  },
{
    id: "a359",
    text:
      `本地一位放置游戏开发者又让物理学家不高兴了。他们声称：“对物理定律的破坏和对科学术语的滥用实在太过分了。”`
  },
{
    id: "a360",
    text: `按“选择存档”来探索另外两个平行宇宙。`
  },
{
    // Discord contest winner #1
    id: "a361",
    text: "高品质防水毛巾大促销！离开前记得买几条！"
  },
{
    // Discord contest winner #2
    id: "a362",
    text:
      `Hevipelle 公司荣幸推出全新谷物早餐：大坍缩！这款营养早餐含有香脆反物质 O 形麦圈、口袋维度、无限点风味方糖、指数增长的复制器，以及永恒风味棉花糖。现在你可以在肚子里体验《反物质维度》！警告：副作用可能包括自燃、恶心、呕吐、腹泻、物质化消失、汽化、心力衰竭、世界末日或死亡。如果你不是由反物质构成，请在食用“大坍缩”之前咨询受过专业教育的反物质摄入顾问。`,
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
{
    id: "a363",
    text:
      `养一条龙最贵的不是填满巢穴所需的黄金，不是你为之牺牲整个帝国的魔法，也不是为数十亿场战争筹集数十亿吨精金。都不是，是泥土。永远都是泥土。别问皇家财务官，为什么这片大陆上的生物比泥土分子还多。继续通过秘术召唤推土机，再继续挖地核找更多土渣吧。`
  },
{
    id: "a364",
    get text() {
      const products = [
        `Illustration 320-A - True Office Graphics Wall. One of our senior consultants will observe your business,
        and come up with a list of words to be added to a hallway, to remind all employees of the values of their
        company. Known to decrease employee motivation by at least 25%! Past walls include words such as Black
        Hole, Catastrophic, Haphazard, compromising, Inferior, Delusional, Inefficient and Collapsed! Order now!`,
        `Furniture 150-A (2034 edition) - 3-person seating device. A revolutionary new design for office waiting
        areas, it consists of a large 3 legged stool, placed upside down for aesthetic benefits. Perfect for
        getting employees back to work, in a new set of shoes, or pants. It isn't tied down or glued to the
        floor like other editions, but we do make sure that other employees look at you funny if you edit our
        art. No need to order, it comes as a complimentary service for any customer!`,
        `Furniture 0853 - "The Rack" - this revolutionary new workspace, from the inventors of the crawling
        desk, helps your employees overcome their limits and ensure that your whole business is screaming -
        in agony! At times chosen by our revolutionary "pAIn AI", it will suggest mandatory stretchers for all
        users. Recommended by your local gaol, order now! *Warning, AOS&C only takes responsibility for acts
        of god such as lightning or merciful purifications by deities.`
      ];
      const product = products.randomElement();
      return `反物质办公用品公司荣幸推出全新“现代办公室”产品目录！每种模板设计都能按你的企业定制，助你以独特方式促进业务协同！先来看看他们最新产品之一：${product}`;
    },
  },
{
    id: "a365",
    text: "我不喜欢复制器。它们粗糙、颗粒感重、很烦人，而且到处复制。",
    get unlocked() { return PlayerProgress.eternityUnlocked() || PlayerProgress.replicantiUnlocked(); }
  },
{
    id: "a366",
    text:
      `舞台魔术（例如幻术）有一段有趣的历史：骗子试图欺诈大众，演员则用幻象或手法表演。魔术的风格不断变化；人们也持续争论是否应该明说那只是幻术，以及观众会不会自己看出它是假的、无需特别说明。一个世纪前的一次分裂把魔术分成两类：温和、简单、实用的小把戏，以及靠华丽机关和漂亮助手撑场面的盛大表演。导火索是一个流行魔术：把人锯成两半。无论如何，这可比看电视通灵师假装从新闻滚动条里抽出彩票有意思多了。说到这个，今晚的中奖号码是 23、10、81、106.4、3 + 2i 和 e。`
  },
{
    id: "a367",
    text:
      `蛇看起来很吓人，而且确实危险；你每次看到蛇都应该冷静地跑开。不过幸运的是，蛇通常不会主动咬人——特别坏的蛇除外。如果蛇特意跑来咬你，通常有四个原因。第一，蛇脾气差。第二，你吓到了蛇。蛇会吓到你，你也会吓到蛇；遇到蛇时要做更成熟的那只蜥蜴。第三，你闯进了蛇的地盘。蛇通常会先警告你，所以响尾蛇才会摇尾巴。你不听警告，它就会咬你。最重要的第四个原因：蛇觉得你长得丑。这得怪蛇的视觉系统，但至少在两个司法辖区内，这是最常见的咬伤原因。如果你因为自己是只吓人的丑蜥蜴、总往错误的灌木丛里钻而被蛇咬了，主要有三件事可以做。首先，再次冷静下来，保持镇定。其次，固定咬伤部位周围，并尝试使用加压绷带。蛇毒的视觉完全取决于它当前所在物体的移动。第三，冷静地向其他蜥蜴求救。别找蛇，蛇太坏了，不会帮你。`
  },
{
    id: "a368",
    text:
      `我怀疑，如果有人真下功夫把流程做得尽可能痛苦，按下硬重置按钮的人会更多。资源会慢慢被剥夺，游戏还会专门塞进独特削弱效果来阻止你前进。界面会被毁掉，从好用变得难用、晦涩又笨重；你得靠记忆和运气才能继续这趟旅程。随机性会处处针对玩家，连最简单的操作也不放过，只为惩罚你想要进步的念头。钩子、陷阱、灾难和低点数会让你偶尔看到一点进展，而所谓进展其实只是把游戏状态推得离任何合理情况越来越远。角色会被彻底毁掉，只为告诉你该离开……可伤害已经造成，甚至未必还能回头。到了那一步，硬重置可能还不够。它必须……更硬。不只是硬重置，而是再加一个专门写入本地存储的一枚曲奇，让你根本无法开新游戏。或者还要更恶意一点？即便如此，人们还是会一头扎进这场噩梦，因为人类无穷无尽的好奇心没有边界。多少警告也拦不住所有人。只要还有办法继续，他们就会找到办法，甚至还会抱怨惩罚不够重。那么，你想按下按钮，自愿体验绝望的深渊吗？希望不想，因为这里根本没有这个按钮。`
  },
{
    id: "a369",
    text:
      `建设一个帝国是最难实施的项目之一。要打造真正惊世骇俗的事业，需要数千小时的时间、规划、努力、咨询和政治斡旋。以“领域之路复兴路线图”为例：这个革命性项目简称“三个 R”，被帝国最著名的官僚基础设施委员会——EMIF（帝国魔法基础设施基金会）——誉为巅峰之作。它可别和 EAIF（电动飞艇投资基金）或 NMIC（国家魔法基础设施联盟）搞混。EMIF 制定的“三个 R”旨在为 SMSS（中小型蒸汽穿梭机）重建一条法力贸易走廊；在新兴的联合诸国于 NELC（第九帝国解放远征）期间遭受劫掠后，这条走廊至关重要。三个 R 是分阶段项目：第一阶段是在空中绘制测量符文——所有大事都从小小一步开始。第二阶段，揭幕 EMOF（帝国机械湮灭力场），出席者超过五十位显贵：多位皇帝（从联邦诸国到组织领袖）、外国统治者、目前拥有土地的 EMDF（流出物显化命运家族），甚至还有几位天气女巫。他们聚在一起，以 EOSF（帝国官方团结友谊）的盛大仪式揭幕。可惜项目最终在第 215 阶段取消：承包商建造 EMTF（粪便物质转化设施）时，设施碰上了一艘 SMEA（中小型电动飞艇）后爆炸了。那艘飞艇正在第 459 阶段安放最后一根测量桩；之所以拖到那时，是因为第 56 阶段的 WAIC（女巫年度基础设施委员会）会议上发生争吵，制造了一个时间漩涡。真是令人扼腕——整个过程中还凭 EBIF（实地高效官僚主义）拿了三项奖提名和两个奖项。`
  },
{
    id: "a370",
    text:
      "一名男子想安装“曲奇”来存储电脑数据，结果因为太好吃，一不小心把它们吃掉了。"
  },
{
    id: "a371",
    text:
      `快问快答：有三扇门，你随机选一扇，就能带走门后的东西。门后分别有两只金羊、两只银羊，以及一金一银两只羊。你选好门后，羊总价值最低的那扇门会被打开给你看。之后你可以选择换门。你换门的概率是多少？`
  },
{
    id: "a372",
    text:
      `如果你在森林里迷路了，就看看周围的树。传说苔藓长在北面；等你看完一棵树，一个流浪吉他手就会跑来问你想不想听《Wonderwall》。`
  },
{
    id: "a373",
    text:
      `为了象征物质元素周期表和反物质元素周期表之间的友谊，双方交换了元素。Mony 元素现在加入反物质元素周期表，而 Antimony（锑）则加入普通元素周期表。`
  },
{
    id: "a374",
    text: "这个新闻滚动条仅为宣传目的而设计。"
  },
{
    id: "a375",
    text:
      `你大概知道，传统上，人们会用特定材料制成的礼物庆祝结婚纪念日。经典礼物包括 25 周年的银和 50 周年的金。以下是一些鲜为人知的纪念日礼物：菠萝——37 年；地狱石——66 年；蜥蜴石——82 年；硝烟石——86 年；钽铁矿——95 年；斧头石——100 年；金银合金——110 年；Yakitoda——111 年；福特石——119 年；血石——120 年；天青石——125 年；煤玉——140 年；石油——145 年；钢——150 年；坎明顿石——198 年；混凝土——200 年；激光蓝宝石——210 年；Painite——250 年；巴黎石——255 年；寄生石——260 年；碳纳米管——300 年；汞——310 年；火星土壤——340 年；镎——370 年；铀——380 年；钚——390 年；Xium——400 年；烈焰棒——420 年；石棉——430 年；Gabite——444 年；Crimtane——666 年；Lagga——777 年。`
  },
{
    id: "a376",
    text:
      `大型科技公司联手打造了一个专门生成说唱歌词的新神经网络，名叫 RAP-3。它最早生成的歌词包括：“叫我普罗米修斯，因为我带来火焰”和“叫我索尼克，因为我正收集这些戒指”。评论家认为，它要取代传统音乐还差得远。`
  },
{
    id: "a377",
    text:
      `随着全新 Android 操作系统 Android 20 预计即将推出，内部代号的新命名系统也曝光了。目前第一个代号是“反物质”。这恰好适合预期搭载 Android 20 的手机——由于使用湮灭供能，它们将成为史上最容易爆炸的手机。消息人士称，一个耗资十亿美元的研发部门正在为 Android 21 取名；按惯例要以 B 开头，名字是“仔细想想好像也没那么糟”。`
  },
{
    id: "a378",
    text: "如果每个反物质都是一个苹果，足够让所有医生远离你三千年。"
  },
{
    id: "a379",
    get text() {
      return `那${format(Number.MAX_VALUE, 2)}块碎片！那${format(Number.MAX_VALUE, 2)}块碎片是真的！`;
    }
  },
{
    id: "a380",
    text:
      `FitnessGram Pacer 测试是一项多阶段有氧能力测试，难度会随着测试进行逐渐增加。20 米节奏测试将在 30 秒后开始。请在起点排好队。跑步速度一开始很慢，但每听到一次提示音，下一分钟就会加快。[哔] 每听到这一声，都应完成一圈。[叮] 记住，要沿直线跑，并尽可能坚持。第二次没能在提示音前完成一圈时，测试就结束。听到“开始”一词时测试正式开始。各就各位，预备，开始。`
  },
{
    id: "a381",
    text: "为什么叫第二维度：你在第一维度里把它放进去，又把第二维度吃出来？"
  },
{
    id: "a382",
    text:
      "1993 年以后出生的 AD 玩家都不会讲笑话……他们只知道五小时、回形针、1.79e308 和第九维度。"
  },
{
    id: "a383",
    text:
      "比反笑话更好的，只有两个。就像数字 2。不是两条反笑话，我只是喜欢数字二。"
  },
{
    id: "a384",
    text: "点击这里，让什么都不发生。"
  },
{
    id: "a385",
    text:
      `我在想……为什么 Apple 跳过了 iPhone 9，微软也跳过了 Windows 9……是不是因为他们被某个游戏开发者收买了？`
  },
{
    id: "a386",
    text: "十位医生中有九位建议不要尝试触摸反物质。至于第十位，我们还没收到回复。"
  },
{
    id: "a387",
    text:
      `春天，人类建起一根柱子。夏天，又建了一根。整个秋天它们都稳稳立着。可到了冬天，其中一根发生了一场意料之外的 ZW 级“飞升”事件（定义见《抽象多维逆因果物理学》），据推测它掉进了一个维度漏洞；按照定义，它必须占据比自身更多的维度。目前尝试取回这根柱子、让它回到基准现实的行动均告失败（详情见测试日志 2453-3e9a-50d1-84fc）。`
  },
{
    id: "a388",
    text:
      `鉴于近期事件，我们发布一份官方声明。《反物质维度™》与 Jimmy 的《因果律违规脑虫™》毫无关联。我们不支持，也没有参与制造那款产品；该产品曾引发多起灾难性的维度失稳和现实倾覆事件。我们几乎可以确定，我们没有在 1994 年 08 月 12 日 05:30:26 UTC 签署过合同，也没有讨论过如何从维度失稳和扭曲中获利。ვ' 银河系第五猎户臂上没有建造任何工业区；即使建过，我们也没有按照斯克兰顿现实反锚定机制安装局部异常。此外，43 号站点的 Acroamatic 消除设施 AAF-D 没有发生任何时间循环。如果事情看起来像那么回事，我们深表歉意；今后会更严格地打击错误信息。`
  },
{
    id: "a389",
    text: "要是能把宇宙里的反物质压缩成饼干就好了……"
  },
{
    id: "a390",
    text:
      `你们敢信吗？更新只剩五小时了。更新就在五小时之后。哇哦。我对这个消息真是太高兴了。更新只剩五小时。天哪，真不敢相信。更新只剩五小时。来得真快啊。更新，只要五小时了。`
  }
];
