// Original news logic and IDs from the pinned upstream; YC Chinese translation.
import { DC } from "../constants.js";
function newsAnimSpd(seconds) { return seconds / player.options.news.speed; }
export const newsPart2 = [
{
    id: "l1",
    text: "你刚刚制造出了第1,000,000,000,000,000个反物质单位。这一个尝起来像鸡肉。",
    get unlocked() { return Currency.antimatter.exponent === 15; }
  },
{
    id: "l2",
    text: "银河系请削弱一点，拜托。",
    get unlocked() { return player.galaxies === 2 || Currency.infinities.gt(0); }
  },
{
    id: "l3",
    text: "什么叫不止两个维度？？？我们明明就在屏幕上，显然只有两个维度。",
    get unlocked() { return AntimatterDimension(3).amount.gt(0) || DimBoost.totalBoosts > 0; }
  },
{
    id: "l4",
    text: "无限到底有多大？——几乎每个人至少问过一次",
    get unlocked() { return AntimatterDimension(8).amount.eq(190) || Currency.infinities.gt(0); }
  },
{
    id: "l5",
    text: "嗯，第四维还算不错……",
    get unlocked() { return AntimatterDimension(4).amount.gt(0) && AntimatterDimension(5).amount.eq(0); }
  },
{
    id: "l6",
    text:
      "反物质人似乎比我们更怕13。他们摧毁了整片银河系，只为从百分数里删掉13。",
    get unlocked() { return player.galaxies > 0 || Currency.infinities.gt(0); }
  },
{
    id: "l7",
    text: "想弄懂维度献祭，你确实得有理论物理学博士学位。抱歉啦！",
    get unlocked() { return player.sacrificed.e >= 10 || DimBoost.totalBoosts >= 6; }
  },
{
    id: "l8",
    text: "一个数字标准化组织提出了全新格式：用表情符号表示数字。",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies > 0; }
  },
{
    id: "l9",
    text: "反物质冰淇淋摊最近开张了——口味多到有十的二十七次方种！",
    get unlocked() { return player.records.totalAntimatter.e >= 27; }
  },
{
    id: "l10",
    text:
      "天堂里的 Pelle 产出了太多反物质，只好再造一座星系。这一座在西南方的夜空里看得到。",
    get unlocked() { return player.galaxies > 0 || Currency.infinities.gt(0); }
  },
{
    id: "l11",
    text: "第九维是个谎言。",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
{
    id: "l12",
    text: "9的平方根是3，所以第九维不可能存在。",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
{
    id: "l13",
    text: "被第九维同化了？快找医生看看精神状态吧！",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
{
    id: "l14",
    text: "为什么没有第九维？因为7把9吃了。",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
{
    id: "l15",
    text: "第九维不可能存在，因为说“Nein”（德语“不是”）的纳粹早在二战就死光了。",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
{
    id: "l16",
    text:
      "如果你打破了第四面墙……嗯，后面还有第五、第六、第七、第八面墙要闯，才会遇到糟糕的事，所以你应该没事。",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
{
    id: "l17",
    text:
      "Hevipelle 得满足一系列条件才能睡觉。首先得是蓝月亮；其次，北极某个小镇必须整整一个月都见不到阳光；第三，他得发布一次反物质维度更新；最后，Discord 上不能有任何人处于第九维。只有这样他才能休息——最多睡6小时，之后还会被强行叫醒，免得错过离线成就。",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
{
    id: "l18",
    text: "如果第九维全是邪恶，那3岂不就是万恶之源？",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
{
    id: "l19",
    text:
      "给我来十的二十九次方个数字9，一个大小为十的九次方的数，一个带额外复制器的6，一个十的七次方，再来两个四十万，一个带物质的，还有一个巨大的时间漩涡。",
    get unlocked() {
      return DimBoost.totalBoosts >= 5 ||
      player.galaxies > 0 ||
      PlayerProgress.infinityUnlocked();
    }
  },
{
    id: "l20",
    text: "无限：唯一一个本来就该被打破的东西。",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
{
    id: "l21",
    get text() { return `我有${format(Number.MAX_VALUE, 2)}个问题，但其中没有反物质。`; },
    get unlocked() { return Currency.infinities.gt(0) && !PlayerProgress.hasBroken(); }
  },
{
    id: "l22",
    text: "《反表情电影》大获成功！",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies >= 5; }
  },
{
    id: "l23",
    text: "如果这游戏是 Valve 做的，“零死亡”成就就不可能完成。",
    get unlocked() { return Achievement(64).isUnlocked; }
  },
{
    id: "l24",
    text: "佛罗里达男子试图首轮达成“零死亡”，结果被宇宙热寂拦下。",
    get unlocked() { return Achievement(64).isUnlocked; }
  },
{
    id: "l25",
    text: "“完成一半成就，算不上什么成就。”——Boo",
    get unlocked() { return Achievements.effectiveCount >= GameDatabase.achievements.normal.length / 2; }
  },
{
    id: "l26",
    text:
      "灭霸带着满能量的无限手套登场时，一定会失望透顶：因为 Hevi 手里也有一副满能量的永恒手套。",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
{
    id: "l27",
    text:
      "发现了一种奇怪的新物质。它似乎会指数增长，却只对反物质产量有帮助。",
    get unlocked() { return PlayerProgress.replicantiUnlocked() && player.replicanti.chance === 0.01; }
  },
{
    id: "l28",
    text: "看来“复制器”这玩意儿已经不会再长得更快了。",
    get unlocked() { return player.replicanti.chance === 1 && player.replicanti.interval === 1; }
  },
{
    id: "l29",
    text:
      "如果你每秒写下3个数字，写完你的反物质数量所花的时间，也比 Hevipelle 更新游戏短。",
    get unlocked() { return Currency.antimatter.exponent >= 100000; }
  },
{
    id: "l30",
    text: "Hevi 是不是只挑几句名言放进游戏？",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 30; }
  },
{
    id: "l31",
    text: "一家新新闻公司成了我们的竞争对手。他们完全由反物质构成。",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 80; }
  },
{
    id: "l32",
    text: "“反”字连用多少次，大家才会听不下去？",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 100; }
  },
{
    id: "l33",
    text: "Hevi 还会看 #news-ticker-suggestions 吗？",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 120; }
  },
{
    id: "l34",
    text: "还要更多名言！——hevipelle",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 135; }
  },
{
    id: "l35",
    text: "男子用反物质摧毁了已知宇宙，为了排遣孤独，开始写新闻滚动条。",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 150; }
  },
{
    id: "l36",
    text: "快到了！",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 160; }
  },
{
    id: "l37",
    text: "现在可以停了",
    get unlocked() { return NewsHandler.uniqueTickersSeen >= 165; }
  },
{
    id: "l38",
    text: "他妈的黑客",
    get unlocked() { return NewsHandler.uniqueTickersSeen > GameDatabase.news.length; }
  },
{
    id: "l39",
    text: "一名亚洲男子试图抢走“最快达成无限”的奖杯，成绩是负1秒——他居然真的做到了！",
    get unlocked() { return NewsHandler.hasSeenNews("l1"); }
  },
{
    id: "l40",
    text:
      "我打破了第八面墙，眼前只剩混沌；Slabdrill 正在向第九维献祭反物质。这将是我的最后一条新闻。愿 Hevipelle 保佑我们的灵魂：我们当初没有听劝，现在真该听劝的。",
    get unlocked() { return NewsHandler.hasSeenNews("l58"); }
  },
{
    id: "l41",
    text: "我还以为更新只剩5小时……——游戏玩了5小时以上的新玩家",
    get unlocked() { return Time.totalTimePlayed.totalHours >= 5; }
  },
{
    id: "l42",
    text:
      "昨天有人叫我等5小时更新，可今天都到了，更新还是没来！我该怎么办？",
    get unlocked() { return Time.totalTimePlayed.totalHours >= 5; }
  },
{
    id: "l43",
    text: "你知道自己不可能在负1秒内到达无限吧？",
    get unlocked() { return player.records.bestInfinity.time === 0.1; }
  },
{
    id: "l44",
    text: "反物质版尼莫住在哪里？海葵（anemone）里。",
    get unlocked() { return player.records.totalAntimatter.e >= 3e6; }
  },
{
    id: "l45",
    text: "《反表情电影》MMMCMXCIX 大卖！",
    get unlocked() { return player.requirementChecks.permanent.emojiGalaxies >= 3999; }
  },
{
    id: "l46",
    text: "成就解锁！",
    get unlocked() { return Achievements.effectiveCount >= GameDatabase.achievements.normal.length; }
  },
{
    id: "l47",
    text: "这个成就是两百万，不是二十亿……",
    get unlocked() { return Currency.infinities.gt(2e9); }
  },
{
    id: "l48",
    text: "继续保持这个速度！",
    get unlocked() { return AchievementTimers.marathon1.time > 1200; }
  },
{
    id: "l49",
    text: "总有一天，你会停止这无休无止的刷刷刷。",
    get unlocked() { return Currency.eternities.gt(50000); }
  },
{
    id: "l50",
    text: "你现在大概可以不用再刷永恒了……",
    get unlocked() { return Currency.eternities.gt(DC.D2E6); }
  },
{
    id: "l51",
    text: "你认真的吗？",
    get unlocked() { return Time.worstChallenge.totalSeconds <= 1; }
  },
{
    id: "l52",
    text: "时机就是一切。",
    get unlocked() { return player.records.thisEternity.realTime < 10; }
  },
{
    id: "l53",
    text: "想刷无限的话，干嘛不直接拿时间研究？",
    get unlocked() { return !TimeStudy(32).isBought && Currency.infinities.gt(72000 * 168); }
  },
{
    id: "l54",
    get text() {
      const names = [];
      if (PlayerProgress.infinityUnlocked()) names.push("无限");
      if (PlayerProgress.eternityUnlocked()) names.push("永恒");
      if (PlayerProgress.dilationUnlocked()) names.push("膨胀");
      if (PlayerProgress.realityUnlocked()) names.push("现实");

      const game1Name = names.randomElement();
      let game2Name = names.randomElement();
      while (game2Name === game1Name) {
        game2Name = names.randomElement();
      }
      return `宝可梦${game1Name}与${game2Name}刚刚发售！新一代让宝可梦总数达到1e151。祝你好运，把它们全部抓齐！`;
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); },
    isAdvertising: true
  },
{
    id: "l55",
    get text() {
      const recipes = [
        "复制器蛋糕：收集一些复制器，放进烤箱，看它发起来。再发起来。还要发起来。",
        "反物质蛋糕：收集一些反物质，放进烤箱，然后<b>轰<b>。",
        "永恒点蛋糕：收集一些永恒点，放进烤箱，然后耐心等待……",
        "无限点蛋糕：收集一些无限点，放进烤箱，看它们击碎时空。"
      ];
      const recipe = recipes.randomElement();
      return `烘焙方法：${recipe}`;
    },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
{
    id: "l56",
    text: "现实挑战成了新的第九维，而第九维又成了新的橙色。",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
{
    id: "l57",
    text:
      "放学后，杰克走在回家的路上。他发现了一个奇怪的小物件：透明，却又不透明；闪闪发亮，却显得阴沉；沉重，却又轻若无物。杰克把它带回家给妈妈看。“妈妈，我在人行道上捡到这个，可以留下吗？”妈妈转过身看向儿子手里的东西，瞳孔骤然放大：“杰克，马上把那东西拿出家门！”她大喊。杰克不明白，这东西看上去明明无害。他刚问“可是妈妈，为什——”，还没说完，那东西便以不可能的速度开始有丝分裂，第二个复制品从他手中滑落到地板上。妈妈赶紧过来想抓住它，可它又复制了一次。“杰克……不管发生什么，都别忘了妈妈爱你……”她抱紧了他。“妈、妈妈，发生什么了？”杰克声音颤抖，满是恐惧。妈妈流下一滴泪：“⭔⭚⦕꒜牌复制器……”她悲伤地说。复制器越复制越快。房子底下三分之一很快被填满，接着是下半部，最后整栋房子都满了。母子俩被困在家中，夹在墙壁与复制器之间，只能在这座无机物棺材里度过短暂余生，肺里的空气一点点耗尽。但这还远远不是终点。复制器开始向屋外蔓延，如闪亮的泥石流般倾泻而出。几个邻居注意到这些看起来几乎像液体的怪东西，试图逃跑。可复制器仍在不断复制、加速。很快，整条街都被它们覆盖——或者说，变成了它们。接着是几条街、整座城市、周围的城市、整个国家、所有国家、整颗星球、整个太阳系、整座银河系。全部。",
    get unlocked() { return player.replicanti.unl; }
  },
{
    id: "l58",
    text:
      "Hevipelle、反物质、无限点和永恒点，构成了神圣的四位一体。这三种资源让我们得以接触 Hevi 的恩赐——时间定理。借助时间定理，我们向 Hevi 呼唤：“Hevi，求你在这美好的一天赐福于我们！”Hevi 应允了，赐下时间研究。它们强大得过了头，于是 Hevi 限制了它们的力量。他说：“我给你们三条道路来选。”于是人类做出了选择：反物质维度这条短而便宜、立刻见效的路；无限维度这条强大而快速、折中的路；或者时间维度这条漫长艰难、需要耐心的路。就在众人选择时，大地裂开，一条蛇爬出地底，朝人类冷笑：“我将给你们一个强大的第九维选择！我是 Slabdrill，所有反 Hevi 势力的主宰。”人类挺身而出：“滚开，Slabdrill！我们才不要你那邪恶的异端邪说！”Hevi 也站了起来，以神一般的力量击倒了 Slabdrill。Slabdrill 的尸体坠入大地时，他喊道：“我不会就此消失！Hevi 会背叛——”随后便跌入物质深渊。Hevi 赐予人类永恒升级，强化无限维度和时间维度；又赐下他最伟大的礼物：永恒点倍率。他说：“它们会让获得的永恒点乘以5，但价格会涨到原来的50倍。谨慎使用。”人类带着新力量踏上旅程，Slabdrill 的话仍在他们脑中回响。",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
{
    id: "l59",
    text:
      "关于 Replicanti 单复数形式的争论仍在持续。“Replicantus”阵营的基地遭“Replicanti 也行派”洗劫，许多维度也被偷走。“复数形式应为 Replicantis”阵营在字典黑客计划失败后，仍躲在暗处。",
    get unlocked() { return player.replicanti.unl; }
  },
{
    id: "l60",
    get text() {
      return `突发新闻！时间碎片矿井坍塌！${Math.floor(20 + Math.random() * 236)}名矿工被困！`; },
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
{
    id: "l61",
    text:
      "反物质专家称，千禧一代正在毁掉挑战产业：“如今他们一上来就完成了挑战、打破了无限，这和以前完全不一样。”",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
{
    id: "l62",
    text:
      "计算机科学家怒了：“无限点到底是什么？IP 明明是互联网协议！”争论愈演愈烈，更多消息请看7点新闻。",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
{
    id: "l63",
    text:
      "你有没有觉得时间变慢了？一项研究发现，现在1秒大约相当于过去的1.3秒。科学家把这种现象称为时间膨胀。",
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
{
    id: "l64",
    text:
      "反物质学界太不公平：新手只能选一个研究领域，精英却能全选三个。“这也太不公平了吧，他们凭什么能全选？”一位愤怒的学生质问。",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
{
    id: "l65",
    text:
      "事实证明，根本没人知道无限点长什么样。就连负责储存它们的人，也被明确告知不要看——据说“谁看谁死”，有时他们甚至得蒙着眼工作。但今天情况就要改变了。我现在就在无限点仓库前，马上告诉大家它们长什么样。3、2、1——",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
{
    id: "l66",
    text:
      "一次失败的时间膨胀实验造成时空视觉故障，人类震惊不已。如今，夜空中天球赤道上方清晰可见这道故障。",
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
{
    id: "l67",
    text:
      "吸食碾碎的时间碎片，正慢慢成为无聊人士间的流行挑战。据说它会让人觉得整个世界都在加速，因此被称为<span style=\"color: var(--color-eternity)\">时间流逝挑战</span>。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;脱水致死人数激增，人们莫名其妙地连续好几天忘记喝水。他们体内还检测出了微量时间碎片。",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
{
    id: "l68",
    get text() {
      let protestText = "";
      if (InfinityChallenge(4).isRunning)
        protestText =
          `把麦克风递给这位先生，他支持“无限挑战4最糟糕”这一派。你有什么想说的？“显然无限挑战4是最差的，我到底该怎么办？我一直在试，可每次都卡住，离终点远得很。到底要怎么打？”这位先生真是激情满满。这里是本地新闻主播，稍后我们会继续为您报道。`;
      else if (InfinityChallenge(5).isRunning)
        protestText =
          `接下来，我们来采访这位举着“IC5不公平”牌子的先生。你们这一派想表达什么？“牌子上写得还不够清楚吗？如果你理解能力这么差，无限挑战5会直接把你碾碎，连公平机会都不给——”真是……有意思。这里是本地新闻主播，稍后我们会继续为您报道。`;
      else
        protestText =
          `最后，我们来问问这位似乎不属于任何一派的女士。你怎么看？“我个人觉得，计数频率自动购买器挑战比前两个都糟——”“抓住她！！”“等等，不——”看来局势突然变了，我还是尽可能跑远点。这里是本地新闻主播，改天再为您带来后续……`;
      return `您好，这里是您一向可靠的本地新闻台。今天，人们为了争论哪个无限挑战最糟糕，占领了街头。${protestText}`;
    },
    get unlocked() { return InfinityChallenge(1).isUnlocked || PlayerProgress.eternityUnlocked(); }
  },
{
    id: "l69",
    text: "我和复制器的友情结束了，现在反物质星系才是我的新挚友。",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
{
    id: "l70",
    text:
      "“Zurkrbarg，隐私天体”宣布计划推出其热门社交媒体宇宙“全域”的新版本。",
    get unlocked() { return Teresa.isUnlocked; }
  },
{
    id: "l71",
    text: "其他语言还在等着……我得去当程序员了",
    get unlocked() { return Player.canEternity || PlayerProgress.eternityUnlocked(); }
  },
{
    id: "l72",
    get text() {
      const scenarios = [
        `参赛者将在永恒挑战8的荒凉废土中努力求生——复制器和无限维度都快耗尽了，他们还能靠什么？`,
        "我们调查时间碎片矿井在26:90坍塌的报告。",
        "我们请一位业余玩家来解释无限挑战9的奖励到底是什么。",
        "ANN 的朋友们来讲讲他们是怎么制作节目的。",
        "我们邀请本地放置游戏玩家，聊聊他们怎么玩最喜欢的游戏。",
        `<span style='font-family: Barrio'>捐赠10,000枚支持开发者币，否则你再也看不到 RealiTV。</span>`,
        "我们将分析昨天为本城供能的黑洞究竟出了什么问题。",
        "我们来看看未来10天的天气预报。",
        `你必须支付${format(player.reality.realityMachines.times(10).max(10))}个现实机器才能继续观看本节目。`,
        "我们将见证催眠无人机的发布。",
        "伟大而尊贵的领主允许我们拥有一个反物质。",
        `Bill Nye 将解释复制器如何复制，并教你识别危险的阴谋论，例如“摄入反物质完全没问题”和“反物质星系不值得买”。`,
        "本地最伟大的哲学家将辩论我们是否才是真正的反物质。",
        "常驻面包师将解释，为什么普通物品如果不一直盯着，就会变成蛋糕。"
      ];
      const scenario = scenarios.randomElement();
      return `下次 RealiTV 节目中，${scenario}`;
    },
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
{
    id: "l73",
    text: "很久很久以前，在遥远的银河系，成本缩放规则变了。",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
{
    id: "l74",
    text: "推出新功能：现实研究！在现实生活中学习，也能获得游戏内奖励！",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
{
    id: "l75",
    text:
      "在《反物质维度》里，我们以产品品质为傲。举个例子：你知道每一个无限点都独一无二吗？没错，它们有各自的性格、感受和想法……知道这些之后，希望你今晚还能睡得着……还记得你花掉的那些无限点吗？它们也有家人，而且很想念家人……看看你都做了什么。你真是个怪物。",
    get unlocked() { return PlayerProgress.infinityUnlocked(); }
  },
{
    id: "l76",
    text: "所以，你已经抵达无限之后的声望层了？可算等到这一天了……",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
{
    id: "l77",
    text: "用优生学和尖端表观遗传技术，培育更强的特权树。",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
{
    id: "l78",
    text:
      "警告：转基因特权点不得食用、触摸、吸入、呼出或以精神接触，也不得由可见或不可见之眼搜查。请勿靠近易燃、可燃、导电、绝缘、可变、生物或机械物质。存在风险自负。",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
{
    id: "l79",
    text:
      "与大众认知相反，星际反物质税务局确实能对通过不正当手段获得的反物质征税——也就是任何不是通过法律规定的维度生产，或不是经挑战关卡修改而来的反物质。NY-8N 条款列出了三种具体方式：非法新闻滚动条赠送、未经承认的维度，以及对时空结构的改造；另外还设有兜底条款，涵盖未来可能出现的任何特殊反物质获取方式。虽然你得缴纳最高99%的反物质税率，但长远来看或许能省钱：如果因为天体裁决而被迫切换现实，你可以把部分已缴税款作为税务抵扣退回来，还能抵扣代表你的仲裁员费用。当然，任何配得上现实机器的人都知道，隐藏非法所得的真正办法是放进私人袖珍维度、超拼接波形银行和纳米壳里——这需要大量研发才能实现。因此，只有在你富到藏不住收益、却又穷到藏不住收益时，才建议申报非法反物质所得。",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
{
    id: "l80",
    get text() {
      return `“普通人每年产出${format("3e999999996", 2)}反物质”其实只是统计误差。普通人每年产出0反物质。住在山洞里的“开发者维度”Georg每天产出超过${format("1e1000000000", 2)}，属于离群值，不该计入统计。`; },
    get unlocked() { return PlayerProgress.hasBroken(); }
  },
{
    id: "l81",
    text:
      "数学法则被改写，世界陷入混乱！许多曾被认为是无限大的东西，如今只是特别大的数字！",
    get unlocked() { return PlayerProgress.hasBroken(); }
  },
{
    id: "l82",
    get text() {
      return `反蚁国的伟大抄写员们多年辛勤劳作。诸神交给他们一项艰巨任务：写出一个长到难以理解的数字。他们轮流上阵，每秒写下几个数字，日夜不停，仿佛过了一个永恒。终于，在${TimeSpan.fromSeconds(Currency.antimatter.value.log10() / 3).toString()}之后，他们完成了这项不可能的任务。那一周，他们去祭拜诸神时，只发出一个简单的问题：“我们这些年辛苦劳动到底有什么意义？”诸神回答：“我们只是想知道，在我们的游戏里，做个统计要花多久。”`; },
    // 3 years of time to write
    get unlocked() { return Currency.antimatter.value.gte("1e777600"); }
  },
{
    id: "l83",
    text:
      "反物质维度更新说明：修复天体问题；让反物质更在意湮灭；增加嘴巴；移除嘴巴；阻止不受欢迎的闯入者收购商店；修复新新闻滚动条悬在空中的问题；死去的复制器继续留在它们的星系里；重新定义闯入者，不再包括【已删节】；快子粒子卡在屏幕左上角，湮灭时间；为星系旋转方向加入科里奥利效应。",
    get unlocked() { return Teresa.isUnlocked; }
  },
{
    id: "l84",
    get text() {
      return `顺便说一句，你现在有${player.news.specialTickerData.paperclips}个没用的回形针。也许可以拿它们去买点什么。`; },
    get unlocked() { return player.news.specialTickerData.paperclips > 0; }
  },
{
    id: "l85",
    text:
      "反转日这天，新更新只剩负5小时就要发布了。你开始增加物质。攒下大量物质后，你必须变成无穷小。积累无穷小点之后，最终就能抵达最短的时间单位——瞬时。时间一久，瞬时不断累积，你便会压缩时间。压缩时间会带来足够的加成，让你最终进入维护的最后一层：幻想。然而你发现这一切不过是场梦。你的反物质安然无恙，而新更新仍然要等5小时。",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
{
    id: "l86",
    text:
      "你好，玩家。我想玩个游戏。你面前有一堆复制器，它们现在被冻结在时间里，无法复制。你右边有台电脑，里面开着一个空存档的《反物质维度》。你的任务是抵达无限。不过，一旦你购买了第一维度，复制器就会开始复制。你知道它们复制得很快；要是填满整个房间，你就会窒息。如果你能在那之前抵达无限，它们就会再次被冻结。时间正在流逝。现在开始。",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
{
    id: "l87",
    text:
      "“在一粒沙中看见世界，在一朵野花里看见天堂。把无限握在掌心，把永恒浓缩于一小时，把现实……浓缩在大约5小时里™️。”——反威廉·布莱克",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
{
    id: "l88",
    text:
      "对于新符文机制，我们深表歉意。我们的本意是让玩家在解锁稀有符文时感到自豪、觉得努力有了回报。我们根据最后一轮测试数据，以及上线前对里程碑奖励所做的其他调整，选定了初始数值。我们还会持续观察每位玩家每天平均赚取点数的速度，并不断调整，确保挑战有吸引力、有奖励，而且当然能靠正常游戏完成。",
    get unlocked() { return PlayerProgress.realityUnlocked(); }
  },
{
    id: "r1",
    text: "这条新闻比其他所有新闻都稀有100倍。",
    get unlocked() { return Math.random() < 0.01; }
  },
{
    id: "p1",
    text: "这是 JoJo 梗吗？",
  },
{
    id: "p2", text: 'Die Zahlen gehen hoooch（数字一直往上飙！）'
  },
{
    id: "ai1",
    text: "如果你就是游戏本身，就能用作弊码解锁一个隐藏成就……但代价是 e1100 个反物质？！!"
  },
{
    id: "ai2",
    text: "“嗯，我不知道怎么修这个。”——顺便说一句，这人还没解锁那个成就"
  },
{
    id: "ai3",
    text: "我以为永恒之后游戏会彻底重置，结果随机到我第一次开局时连存档都没有 😦",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
{
    id: "ai4",
    text: "我还以为更新5小时前就出了……看来只好把它重新安排到5小时后了"
  },
{
    id: "ai5",
    get text() { return `本地男子在冰箱里发现了${format(Number.MAX_VALUE, 2)}个普朗克体积。`; }
  },
{
    id: "ai6",
    text: "哈哈，糟糕的滚动新闻建议"
  },
{
    id: "ai7",
    text: "我看你饿着肚子玩游戏，接下来恐怕还要空着钱包玩了。"
  },
{
    id: "ai8",
    text: "就……开始点。别想着浪费时间。直接点就对了。"
  },
{
    id: "ai9",
    text: "第九维创造第八维，这想法也太离谱了"
  },
{
    id: "ai10",
    text: "……这是不是意味着【已删节】维度会产出【已删节】维度？"
  },
{
    id: "ai11",
    text: "“点击这里购买一摞回形针”（点下去会被 Rickroll）",
    onClick() { window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); }
  },
{
    id: "ai12",
    text: "我闲暇时会读 T. H. White 写的短篇故事。"
  },
{
    id: "ai13",
    text: "我去，这也太离谱了吧"
  },
{
    id: "ai14",
    text: "灭绝这种事根本不存在。你又不能一天24小时都戴同一顶帽子。"
  },
{
    id: "ai15",
    text: "如果你能读到这句话，那你已经逃出游戏了。"
  },
{
    id: "ai16",
    text: "“帽子戏法——我真想看看那是什么样。”——Noah Feldman"
  },
{
    id: "ai17",
    text: "看看 Hevi 在 Discord 服务器上打得多么热闹"
  },
{
    id: "ai18",
    text: "我刚从一伙摩托帮手里偷了“反”旗，还把它塞满了炸药、炸药、炸药、炸药……"
  },
{
    id: "ai19",
    text: "不管你有多少反物质，物质总会比反物质更重。"
  },
{
    id: "ai20",
    text: "Franklin 封住了 Omega 的平方。现在你想怎么封住 Omega 都行。"
  },
{
    id: "ai21",
    text: "这真的是第九维吗？"
  },
{
    id: "ai22",
    text: "点击此处退出游戏"
  },
{
    id: "ai23",
    text: "这条新闻滚动条今后只会在第九维播出"
  },
{
    id: "ai24",
    text: "第九维不存在，因为它被第九维压制了。"
  },
{
    id: "ai25",
    text: "选择物质还是反物质？这就是问题。"
  },
{
    id: "ai26",
    text: "经历了8年的制作和不稳定宇宙后，Chaosium 将在5小时后不复存在。"
  },
{
    id: "ai27",
    text: "第九维里一半的问题都毫无道理。他们到底拿那么多能量在干什么？"
  },
{
    id: "ai28",
    text: "等等，有个忍——"
  },
{
    id: "ai29",
    text: "某处有个疯子，正带着他的 Trimps 大军捣鼓物质维度。"
  },
{
    id: "ai30",
    text: "这个数字后面怎么挂了这么多东西？完全说不通。"
  },
{
    id: "ai31",
    text: "新闻滚动条就在反新闻滚动条里"
  },
{
    id: "ai32",
    text: "第九维不存在，因为我们用的是九进制"
  },
{
    id: "ai33",
    text: "突发新闻：最新研究发现，读到这条滚动新闻建议时，竟有不止一人、不止两人，而是三个人和我产生了同样的感受。"
  },
{
    id: "ai34",
    text: "下面解释一下我的“糟糕心情”——原因就写在这条新闻里！"
  },
{
    id: "ai35",
    text: "本地疯子试图出售反曲奇"
  },
{
    id: "ai36",
    text: "欢迎来到《反物质维度：源》，这是一款邪典经典《AD:GO》的免费续作。"
  },
{
    id: "ai37",
    text: "一只新手触碰了你的反物质！"
  },
{
    id: "ai38",
    text: "我们到底是谁？"
  },
{
    id: "ai39",
    text: "我们才是真正重要的人"
  },
{
    id: "ai40",
    text: "物质？一点迹象都没有。"
  },
{
    id: "ai41",
    text: "我是新闻人，我负责制造新闻。你不读新闻？那你只好等照镜子时再看了。"
  },
{
    id: "ai42",
    text: "“哇！”（新闻滚动条转了90度）"
  },
{
    id: "ai43",
    text: "快来买一罐贴纸！高质量贴纸，品质超棒的贴纸！"
  },
{
    id: "ai44",
    text: "我写了新闻，你读了新闻。"
  },
{
    id: "ai45",
    text: "我喜欢新闻。"
  },
{
    id: "ai46",
    text: "我不写新闻。"
  },
{
    id: "ai47",
    text: "你写新闻，我拿到【已删节】新闻"
  },
{
    id: "ai48",
    text: "“反无限”是动词，不能作名词。点击这里了解它的用法。"
  },
{
    id: "ai49",
    text: "接下来，购物清单！"
  },
{
    id: "ai50",
    text: "第九维显然是真实存在的！只不过不在我们的维度里。"
  },
{
    id: "ai51",
    text: "我试着在 Google 上搜“第九维”这个词；我这么说完全没问题，因为它描述的是一个真实存在的东西。"
  },
{
    id: "ai52",
    text: "你在这里没有力量。"
  },
{
    id: "ai53",
    text: "有些人因为无法打破无限，只好满足于10个维度。大坍缩最后只不过是时间里的一小段空隙。"
  },
{
    id: "ai54",
    text: "很久以前，有个年轻人生活在陌生国度，梦想着一个充满可能性的宇宙。一天，他问妈妈：“膨胀是什么感觉？”妈妈回答：“那时候的膨胀倍数并不平衡，所以我才说，物质和反物质的数量不可能相等。”"
  },
{
    id: "ai55",
    text: "一家市场调查公司试图解释，为什么某些商品的表现不如预期。结果这家公司自己也搞不清楚原因。"
  },
{
    id: "ai56",
    text: "今天就来竞拍你的反物质！"
  },
{
    id: "ai57",
    text: "我是半人马座阿尔法星，Prime 001。研究发现：如果你还活在第九维，邪恶势力就已经占领了你的维度，正试图控制你的思想并逆转时间。现在，你必须竭尽所能阻止这个计划实施。"
  },
{
    id: "ai58",
    text: "待命并解锁第九维，即可获得隐藏成就。"
  },
{
    id: "ai59",
    text: "我会在5小时内修好漏洞"
  },
{
    id: "ai60",
    text: "如果你正在读这句话，那就说明你能读到这句话。"
  },
{
    id: "ai61",
    text: "呃……你好。能告诉我你的名字吗？"
  },
{
    id: "ai62",
    text: "呃，不行。这东西对二维码来说太大了。"
  },
{
    id: "ai63",
    text: "（从右往左移动它才对）"
  },
{
    id: "ai64",
    text: "不好，反物质冲着我们来了！"
  },
{
    id: "ai65",
    text: "这个世界上为什么有这么多反物质？首先，它们全都由地球上的反物质工厂生产。其次，地球上的工厂则在……"
  },
{
    id: "ai66",
    text: "没什么私人恩怨，兄弟。——所有村民类型"
  },
{
    id: "ai67",
    text: "我已经尽力去读那些小小的手写字条了，可设计镰刀的人显然恨我，偏要把它们塞在角落里。——Porygon-Z"
  },
{
    id: "ai68",
    text: "嗯……我不知道自己怎么会在这里。我甚至不确定自己该不该在这里。我只是坐着，想象如果当初没有停下来，一切会是什么样。天啊，本来可以是什么样……"
  },
{
    id: "ai69",
    text: "哎呀，老板，我总算把它黑到能解锁 C21 了！"
  },
{
    id: "ai70",
    text: "Купил мужик антиматерию（有个老哥买了反物质。）"
  },
{
    id: "ai71",
    text: "所以你的意思是，我可以在这里发帖，看两遍《泰坦尼克号》，回来之后却还是不能发帖？"
  },
{
    id: "ai72",
    text: "上次更新是5小时前。没有下一次更新，因为上次更新就是5小时前。我们会在5小时后更新播客，专门聊聊这整整5小时——毕竟这是有史以来最后一期播客。大家都知道更新永远还差5小时；其实更可能是1、2、3、4、5、6、7、8、9、10分钟后，但在我们心里，准确的更新时间总得像“还差5小时”那么遥远，只要再买几次计数频率升级就行。"
  },
{
    id: "ai73",
    text: "没错。你。该。克服。你的。反维度了。"
  },
{
    id: "ai74",
    get text() { return `广告奖励：$${format(Number.MAX_VALUE, 2)}（随机队伍）`; }
  },
{
    id: "ai75",
    text: "把那段历史递给我，好吗？"
  },
{
    id: "ai76",
    get text() { return `即将推出：维度${format(Number.MAX_VALUE, 2)}`; }
  },
{
    id: "ai77",
    text: "你历史老师说我生日那天拿到 *在此插入某物*，就觉得我疯了"
  },
{
    id: "ai78",
    text: "反物质世界里，万事皆可为。"
  },
{
    id: "ai79",
    text: "《秘境》，第二维度"
  },
{
    id: "ai80",
    text: "哎呀，我想我们点错了。"
  },
{
    id: "ai81",
    text: "请等5小时再看新闻"
  },
{
    id: "ai82",
    text: "请等天气好转再说"
  },
{
    id: "ai83",
    text: "请花一分钟，欣赏一下这条新闻滚动条的美。"
  },
{
    id: "ai84",
    text: "不如倒着推理？从题目涉及的年代看，游戏大概设定在20世纪50年代。再来谈谈设定在2030年代的游戏。这里的“游戏”指任何媒介，不一定非得是那种“玩某个游戏”的形式（顺便说一句，这个词放在你的词汇里倒挺有用）；只要一种媒介能被理解成游戏——也就是可以让人回到过去游玩的媒介——它就算游戏；而另一类游戏，则是无法让人回到过去游玩的游戏。"
  },
{
    id: "ai85",
    text: "《反物质维度》是 NaN 做的？那质量肯定更高。不过话虽如此，【已删节】"
  },
{
    id: "ai86",
    text: "我原本觉得“湮灭只是一种阶段”这句太棒了，直到发现它还让我得到了一个【已删节】"
  },
{
    id: "ai87",
    text: "我创造了一个 Omsi 宇宙。而它是【已删节】"
  },
{
    id: "ai88",
    text: "我把【已删节】放进烤箱。它变得【已删节】，而我【已删节】是【已删节】"
  },
{
    id: "ai89",
    text: "那些误导线索到底是什么？"
  },
{
    id: "ai90",
    text: "救命，我们被困在 Hevipelle 的地下室里（http://en.wikipedia.org/wiki/Hevipelle），Hevi 正逼我们修一道【已删节】墙，好把【已删节】挡在【已删节】之外。"
  },
{
    id: "ai91",
    text: "接下来是天气预报：北达科他州70度，有雨。记得那些漂亮、巨大、金色的铁幕栏杆。也别忘了【已删节】天气！记住：【已删节】和【已删节】在【已删节】外面。"
  },
{
    id: "ai92",
    text: "来玩个小游戏吧。你一无所有，也没有目标。假设你有【已删节】，而你的【已删节】是【已删节】，你就能【已删节】"
  },
{
    id: "ai93",
    text: "宝石是用来干什么的？"
  },
{
    id: "ai94",
    text: "谁创造了第五维？"
  },
{
    id: "ai95",
    text: "我没懂"
  },
{
    id: "ai96",
    text: "怎么没人聊第九维？"
  },
{
    id: "ai97",
    text: "这新闻真烂。为什么不，你懂吧？"
  },
{
    id: "ai98",
    text: "抱歉，你的现实已与第九维断开连接。另行通知前，你将一直留在第八维。"
  },
function() {
    let wasClicked = false;
    const normal = "正在持有无限！";
    const clicked = "<#351477791457542144>";
    return {
      id: "ai99",
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
    id: "ai100",
    text: "我的新闻全从这个 Discord 上看，不想白白搭上人生的5小时"
  },
{
    id: "ai101",
    text: "喵"
  },
{
    id: "ai102",
    text: "你现在开始手动眨眼了。"
  },
{
    id: "ai103",
    text: "抱歉，你的麦克风正在播放《反物质维度》。"
  },
{
    id: "ai104",
    text: "抱歉，你的现实已与第九维断开连接。"
  },
{
    id: "ai105",
    text: "看来在这段视频里，我是坏人。可我明明什么都没做。"
  },
{
    id: "ai106",
    text: "赢下这场游戏有很多种办法。你可以直接在游戏里输入坐标，也可以把坐标输进 Google——它会给出不同结果。如果你得到的是“完全相同”的结果，那你的电脑肯定出了故障。测试结果表明你的电脑有问题，建议检查固件是否存在漏洞。你也可以试着关掉新闻再重开游戏，但这样只会让“天气是 X”这个笑话生效。等6小时才收到的新闻，不算新闻。"
  },
{
    id: "ai107",
    text: "天气确实是个真实存在的东西。科学家已证实，地球上的反物质数量与天气数量之间存在相关性。地球确实像块磁铁，不过科学家现在推测，随着地球变暖，磁重联会加速，并引发连锁反应席卷全球，最终导致失控的核冬天和反物质自发内爆。"
  },
{
    id: "ai108",
    text: "第十维根本不是真实存在的。别再跟人这么说了。"
  },
{
    id: "ai109",
    text: "别告诉 Hevi 那东西不是真的"
  },
{
    id: "ai110",
    text: "我不知道怎么修这个"
  },
{
    id: "ai111",
    text: "这次更新不是给你的！"
  },
{
    id: "ai112",
    get text() { return `最后一次了：想买道具，就得付一小笔现金，金额为${format(Number.MAX_VALUE, 2)}。`; }
  },
{
    id: "ai113",
    text: "反物质是什么？很久以前，众神和谐共处。后来末日爆发，一切都变了。混沌笼罩世界，连更高维度也正在被建造。这就是你的命运：建造反物质维度。阿门。"
  },
{
    id: "ai114",
    text: "覆水难收？"
  },
{
    id: "ai115",
    text: "不知道以前有没有人发过这个？"
  },
{
    id: "ai116",
    text: "这条帖子已经被分享过很多次了。谁知道具体多少次？"
  },
{
    id: "ai117",
    text: "晚安！"
  },
{
    id: "ai118",
    text: "我做了一份复制器大战的时间线，你可以在这里找到。"
  },
{
    id: "ai119",
    text: "“量子大逃杀5小时后开战！”（传闻：5小时后）"
  },
{
    id: "ai120",
    text: "据传，Nords 将在5小时后开始生产复制器。"
  },
{
    id: "ai121",
    text: "我是一名 Nordsweeper，为了支援复制器工厂，抢走了他们的工作"
  },
{
    id: "ai122",
    text: "以前 AD 还是最棒的游戏。现在嘛，全是垃圾。"
  },
{
    id: "ai123",
    text: "你最好别再盯着这些新闻滚动条建议看了，小心手指干裂。"
  },
{
    id: "ai124",
    text: "《反物质维度》*输给了*《蜜蜂总动员》。"
  },
{
    id: "ai125",
    text: "天啊，我的豌豆里有复制器。",
    get unlocked() { return PlayerProgress.replicantiUnlocked(); }
  },
{
    id: "ai126",
    text: "天啊，我踩到一个复制器了。"
  },
{
    id: "ai127",
    text: "你好，世界！"
  },
{
    id: "ai128",
    text: "欢迎来到 Reddit 的 /r/AskReddit 频道，今天的话题是潜水艇。——截至2017年1月8日，内容准确无误"
  },
{
    id: "ai129",
    text: "政府正在研究反物质。可以说这条新闻滚动条是假的吗？"
  },
{
    id: "ai130",
    text: "反物质达到无限时会出现新闻吗？"
  },
{
    id: "ai131",
    text: "你保存游戏了吗？保存了。你退出游戏了吗？这个存档没问题。继续按住那个键就好。"
  },
{
    id: "ai132",
    text: "我点得太快了……帧率掉下去了"
  },
{
    id: "ai133",
    text: "我发现现在是20XX年。本来想写条新闻，结果发现它本来就只是一条滚动文字。"
  },
{
    id: "ai134",
    text: "“总有一天，我会暂时厌倦读新闻的。”——老爷爷"
  },
{
    id: "ai135",
    text: "又到了新古董上市的季节！快来首次一睹这些独特藏品，错过就没了！——已售罄！"
  },
{
    id: "ai136",
    text: "3件事属于反物质，再加1件就属于无限"
  },
{
    id: "ai137",
    text: "现在就买回形针表情符号：https://aarextiaokhiao.github.io/blob/master/docs/en.json"
  },
{
    id: "ai138",
    text: "点击这里解锁下一次更新"
  },
{
    id: "ai139",
    text: "（如果你愿意，可以设置成只在新闻真正加载时显示。）"
  },
{
    id: "ai140",
    text: "有些坏人想靠反物质赚钱，结果却被第九维搅黄了。你怎么看？"
  },
{
    id: "ai141",
    text: "嘿 Siri，刷反物质星系"
  },
{
    id: "ai142",
    text: "你保存游戏了吗？如果保存了，就可以继续玩，不用……"
  },
{
    id: "ai143",
    text: "这就像拿到第一个奥术点。你知道，就像以前那则广告，你会想“我懂这个广告，我也该做这个广告……”"
  },
{
    id: "ai144",
    text: "欧嘎布嘎"
  },
{
    id: "ai145",
    text: "Boo 有自己的网页！你甚至可以叫它《Boo 的时髦公子》\">https://en.m.wikipedia.org/wiki/Olli%27_Web#Main_page>"
  },
{
    id: "ai146",
    text: "Meeseeks 和书呆子在史诗级 GG 大战中交锋"
  },
{
    id: "ai147",
    text: "我的最终测试成绩出来了！题目只是个简单的数学题，结果却碰上史上最强的两位国际象棋特级大师！猜猜怎么了？两人全被湮灭了！"
  },
{
    id: "ai148",
    text: "哇，67.3%，其实还不错，因为这是对数刻度。"
  },
{
    id: "ai149",
    text: "“Aleph_Time”是在讲对数刻度那个笑话吗？"
  },
{
    id: "ai150",
    text: "大家好，我叫 Anti-Dio。我用一种你们都熟悉的过程生产反物质，叫作“反物质分解”。你们可能还记得我本月早些时候的测试报告：我测试了我的牧场到底会不会产出反物质……在那之前一切都正常，直到我往公式里加了一点延迟，事情就变成了恶性循环：反物质产速越来越快，反过来又让你们死得越来越快。我靠基因工程和大数据挖掘的独特组合救了场，希望有一天能启动一台“机械物质”装置，在幕后创造维度。不过目前这一切只是在比谁的系统更能造出东西，最后我们会从你们的（读取错误：不允许）馅饼上咬下一口。再见。"
  },
{
    id: "ai151",
    text: "“我提议为反历史画一棵系统发育树，就像生命之树那样。这样每个人都能被记作源自那棵反树的祖先。”——Dio，永罚宴上的祝酒词"
  },
{
    id: "ai152",
    text: "历史学家：我喜欢每一代人回望上一代时都说：“那几代人真不怎么样。”"
  },
{
    id: "ai153",
    text: "“我爸妈上过反大学。”——我的祖父母"
  },
{
    id: "ai154",
    text: "只有反笑话才好笑"
  },
{
    id: "ai155",
    text: "无限机器打破了无限"
  },
{
    id: "ai156",
    text: "好吧，老兄，这次你第一次尝到了反恶意软件的滋味。"
  },
{
    id: "ai157",
    text: "此程序无法访问机密信息，例如塔马齐格金库的 IP 地址。"
  },
{
    id: "ai158",
    text: "游戏开发很有趣，对吧？所以才有那么多业余爱好者做游戏，却只有那么少的专业人士做游戏。"
  },
{
    id: "ai159",
    text: "我最先发现，手机通知里的“新闻”滚动条总比“娱乐”滚动条慢30秒。这绝对既不是漏洞也不是功能，而且会在5小时内修好。"
  },
{
    id: "ai160",
    text: "这条新闻滚动条总像是在速通一条征集“世界纪录”的滚动新闻。你知道自己在速通什么吗？这到底是新闻滚动条还是别的什么？"
  },
{
    id: "ai161",
    text: "下一关并不是解锁更多复制器，而是在强化复制器。"
  },
{
    id: "ai162",
    text: "为什么一个星系有9个星系和第八维，而最初的10个维度却不存在？这个问题我们得过一分钟再解答。"
  },
{
    id: "ai163",
    text: "那为什么居然没人早点说啊？我还以为《反物质维度》有某种作弊机制，买一个维度就会实际生成9个星系，而不是10个呢。"
  },
{
    id: "ai164",
    text: "M'antel，反物质，别跟我说反话"
  },
{
    id: "ai165",
    text: "《反物质维度》里有反部件，你肯定会讨厌它们"
  },
{
    id: "ai166",
    text: "到这一步，《反物质维度》基本上就是把反乌托邦伪装得很差。"
  },
{
    id: "ai167",
    text: "按住 M。你忘了把所有反物质都拿出来！"
  },
{
    id: "ai168",
    text: "《反物质维度》将在5小时后上线"
  },
{
    id: "ai169",
    text: "点击此处解锁第十维"
  },
{
    id: "ai170",
    text: "点击这里完成一项针对 HEVI 的隐藏任务"
  },
{
    id: "ai171",
    text: "你做得很不错嘛"
  },
{
    id: "ai172",
    text: "Hevi？你确定要买那个吗？"
  },
{
    id: "ai173",
    text: "购买高级反物质，帮助世界上最不发达地区追赶上来！"
  },
{
    id: "ai174",
    text: "一位极具影响力的神经科学家认为，我们对现实的感知来自10个维度，而不是8个。"
  },
{
    id: "ai175",
    text: "“无处”这个词里到底有几个零？"
  },
{
    id: "ai176",
    text: "这游戏里没有漏洞，它们只是功能。"
  },
{
    id: "ai177",
    text: "“点击此处让时间快进5小时。”（只有在你把时间快进一小时以上后才会出现）"
  },
{
    id: "ai178",
    text: "天啊，我的手机正在被监视"
  },
{
    id: "ai179",
    text: "欢迎体验最新版《反物质维度》！现在功能更少了！"
  },
{
    id: "ai180",
    text: "“这下要惹上麻烦了。”（惹麻烦的概率降低了）"
  },
{
    id: "ai181",
    text: "“请不要关闭新闻滚动条。”（不再显示黑屏，而是显示一片白色，上面有一条特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别特别长的滚动条。）"
  },
{
    id: "ai182",
    text: "“你只剩7个生理分钟了。”（不再给任何菌株加成）"
  },
{
    id: "ai183",
    text: "“根据量子弦理论，有一种基本连接结构将第三维和第八维绑在一起。这意味着，任何试图绑定第九维的药丸或注射剂都会被挡下并失效。”（10分钟后必定绑定成功）"
  },
{
    id: "ai184",
    text: "“点击此处获得隐藏成就。”（只有在至少获得1个反物质后才会出现，截图为证）"
  },
{
    id: "ai185",
    text: "“赢得《反物质维度》的秘诀，就是解绑第九维并解锁第十维。”（只有解锁隐藏成就“永恒”后才能做到：http://imgur.com/E4261C7h）"
  },
{
    id: "ai186",
    text: "“点击此处获得1点物质。”（只有打过 IC5 后才会出现）",
    get unlocked() { return InfinityChallenge(5).isCompleted; }
  },
{
    id: "ai187",
    text: "我还以为更新会……"
  },
{
    id: "ai188",
    text: "你已经拥有全部8个维度，现在可以获得“无边界”成就。不过，如果你真的拿到“无边界”成就，游戏就会坏掉。"
  },
{
    id: "ai189",
    text: "你刚刚成为历史的一部分。"
  },
{
    id: "ai190",
    text: "地狱里有反物质，所以我才不想住在那里。"
  },
{
    id: "ai191",
    text: "我喜欢课堂上的第9维"
  },
{
    id: "ai192",
    text: "“1 2 3 4 5 6 7 8 10 11 12 13 …”——《回到未来》"
  },
{
    id: "ai193",
    text: "你已经抵达无限。那里没有宇宙，而你离那里还有一个永恒那么远。"
  },
{
    id: "ai194",
    text: "我把这游戏做得超棒，还让成就随机就能完成"
  },
{
    id: "ai195",
    text: "欢迎来到史上第一堂“课堂上的第九维”！无穷无尽的可能正等着你！你也许永远造不出无限多个第八维，但你可以造出无限多个第八维，还可以把两个维度的初始值相加来提高它们。简单明了，我把它叫作《反物质维度》。"
  },
{
    id: "ai196",
    text: "8至12岁：玩《长者谜题》"
  },
{
    id: "ai197",
    text: "说某人“年轻又满脑子谜题”是什么意思？一个人“困惑”会不会让他变得年轻又谜题满满？"
  },
{
    id: "ai198",
    text: "对六号货架那位买了五分之一反物质的顾客，我说：再买个六分之一吧！现在就买！"
  },
{
    id: "ai199",
    text: "先生，我们不做给反物质披萨用的反原子面包；我们做的是给你吃的反物质面包！"
  },
{
    id: "ai200",
    text: "好耶！来造点反物质吧！"
  },
{
    id: "ai201",
    text: "反物质面包公司根本不存在！"
  },
{
    id: "ai202",
    text: "点击此处退出新闻",
    onClick() { GameOptions.toggleNews(); }
  },
{
    id: "ai203",
    text: "我本以为更新只剩5小时，结果因为更新进度落后，发这条帖子竟花了我6小时。说实话，我也不知道还得追多少次更新，甚至不知道还要不要追。"
  },
{
    id: "ai204",
    text: "想要数过无限点？先花点时间记住：每一个无限点的数值都是 3.1415926534255412730527058904816097160734272605282087086280545991105332533235580946684229821413112145239989073467482298142857147816092947183909298728571478160929471839229814054718139332405281814522993758179568572657123928651310585727283312547569289993282758012466111097726331726572854689993262899140527282527842535179715673311119101119015549552926278425351797156777263324503517971568583819492728180977263317971568432854104102725270847764253513791376909285717082857262987160927285711464363930996928984794380124566417932628571475245456845692846809466184179328572814384259326270817052727852348111714690577263323799509856279752173478925"
  },
{
    id: "ai205",
    text: "“注意，这些新闻本来不该出现在这里。”（首次购买新闻时出现）"
  },
{
    id: "ai206",
    text: "这些都是最终没能加入游戏的时间研究。",
    get unlocked() { return PlayerProgress.eternityUnlocked(); }
  },
{
    id: "ai207",
    text: "下次更新发布时，我们将加入一个新维度——第九维。想解锁它，只要收集一大堆回形针就行。"
  },
{
    id: "ai208",
    text: "怎么没人提钨？"
  },
{
    id: "ai209",
    text: "现在回到常规新闻……天气预报员说，眼下有相当多的粒子和臭氧空洞，这意味着臭氧层更少了可以被破坏，也意味着更少粒子会着火并引发全球变暖。不过，臭氧层融化、冰川奔流、人口过剩也都在发生。我们周围泛着一种蓝紫色的光，接近蓝色，又有点紫蓝。真是个绚丽多彩的季节。来，亲爱的，抓一把这些回形针。它们很小，我刚好随身带着。现在，抓一把地球同胞，再抓一把你的反物质，系好安全带。接下来会很颠簸。我们五小时后到。反物质会融化臭氧层，冰川会融化冰盖。总之，这趟旅程会平稳顺畅，不会打滑——除非不是这样。【蓝紫色的光逐渐消退，蓝色的光开始扩散至整个天空。蓝色光芒渐渐淡去，紫色光芒越来越亮，近乎蓝紫，最终彻底消失。紫光愈发明亮，蓝光则越来越弱，几乎毫无用处，最后也完全消失。蓝光褪去时，四周紫光愈发强烈，几乎要将它彻底吞没。它可能会杀了我们。写完这段话也许要耗掉我们余生。——针鼹们被问到为什么紫光比蓝光更强时如是说。】"
  },
{
    id: "ai210",
    text: "科学家发现，屁其实是反物质，而物质才是普通物质。"
  },
{
    id: "ai211",
    text: "该换天气了。"
  },
{
    id: "ai212",
    text: "我已经搬到第01维度了"
  },
{
    id: "ai213",
    text: "骗你的啦"
  },
{
    id: "ai214",
    text: "“说真的，游戏里好东西已经多到放不下了。”——玩过小游戏增强版的倒霉蛋"
  },
{
    id: "ai215",
    text: "道具失踪了7天1夜"
  },
{
    id: "ai216",
    text: "一项令人震惊的新研究发现，赢得《反物质维度》最大的秘诀就是“人不在场”。"
  },
{
    id: "ai217",
    text: "下一次更新还要18000秒。别浪费时间读这条了，专心玩游戏。"
  },
{
    id: "ai218",
    text: "不知道这算不算新闻"
  },
{
    id: "ai219",
    text: "（关闭新闻后，新闻记数格式会优先于其他通知。）"
  },
{
    id: "ai220",
    text: "孩子，你不会想听这个的。"
  },
{
    id: "ai221",
    text: "点击此处拆解新闻滚动条，获得一点点没用的回形针。",
    onClick() {
      GameOptions.toggleNews();
      player.news.specialTickerData.paperclips++;
    }
  },
{
    id: "ai222",
    text: "按 Alt+F4 解锁第九维"
  },
{
    id: "ai223",
    text: "等等，你是说 Hevi 根本解锁不了第九维？什么鬼？"
  },
{
    id: "ai224",
    text: "Hevi 终于搞懂怎么解锁第九维了……不过看来他其实一直都不在乎。"
  },
{
    id: "ai225",
    text: "想象一下，自己就是一个梗。"
  },
{
    id: "ai226",
    text: "匿名用户发表于2016年6月10日"
  },
{
    id: "ai227",
    text: "新闻就是你的，随时刷新。"
  },
{
    id: "ai228",
    text: "我在新闻里看到你了。话说你玩什么？——1E209"
  },
{
    id: "ai229",
    text: "你真的想把键盘留在家里吗？我们不应该把新闻留在家里，对吧？"
  },
{
    id: "ai230",
    text: "正在创建……"
  },
{
    id: "ai231",
    text: "你可真慢"
  },
{
    id: "ai232",
    text: "你已从此标签页退出登录"
  },
{
    id: "ai233",
    text: "维护期间请关闭此标签页"
  },
{
    id: "ai234",
    text: "想制造物质或反物质，只要往窗外看看就行。萨尔茨堡的工厂已经关门，因为那里的物质不愿交出最新发明——据说这东西能一次性产出反物质！最后一个打开这扇门的人，再也没人见过。"
  },
{
    id: "ai235",
    text: "你活着。你占据空间。你很大。你既不小，也不算特别大。你既不狭长，也不圆。你不是蓝色，也不是红色。你是反蓝。你是反红。你是反棕。你是反棕色物质。你是反黄。你是反绿。你是反黄色物质。你是反蓝。你是反绿色反物质。你是反红。你是反白。你是反红色反物质。你是反白色反物质。你是反棕色物质。你是反白色反物质。你是反白色反物质。"
  },
{
    id: "ai236",
    text: "欢迎来到"
  },
{
    id: "ai237",
    text: "谢谢你几周前来访，我爱你” （提示）"
  },
{
    id: "ai238",
    text: "“我还以为整款游戏都在新闻滚动条里。”（在内容开始变怪之前）"
  },
{
    id: "ai239",
    text: "“我想知道这游戏值多少钱。”——疯子"
  },
{
    id: "ai240",
    text: "“有人在尝试打破无限吗？”（说真的，这游戏需要来点 Oceanhorn 式的操作。）"
  },
{
    id: "ai241",
    text: "我发现这游戏有好几个版本，一个叫“标准版专业模式”，另一个叫“低配专业模式”。我都不确定它们是不是同一款游戏。"
  },
{
    id: "ai242",
    text: "这是好事还是坏事？那得看它究竟是件好事，还是个谎言。"
  },
{
    id: "ai243",
    text: "“Hevi 好像把更新给忘了，但更新可没忘记他。”——Kajfik"
  },
{
    id: "ai244",
    get text() { return `大坍缩。那会是什么样？大约有 4*1024 个大坍缩点？大约${format(Number.MAX_VALUE, 2)}个反物质点？和一个星系差不多？你说和星系差不多？看看那个。一个反物质星系。只有这款游戏能提供如此海量的反物质，而且它超有趣！我说了“有趣”！还有什么不喜欢的？`; }
  },
{
    id: "ai245",
    text: "点击此处退出应用"
  },
{
    id: "ai246",
    text: "等等，还有手机版？什么时候出的？"
  },
{
    id: "ai247",
    text: "我不确定你们手机玩家是不是都很棒，或者怎样；反正有条新闻滚动条正在替我向全世界表达心声。"
  },
{
    id: "ai248",
    text: "我还以为更新只剩5小时了"
  },
{
    id: "ai249",
    text: "宇宙里守得最严的秘密就是 KISS-IT 秘密。今天快来向维修人员表达你的谢意！"
  },
{
    id: "ai250",
    text: "比赛打平了。恶作剧结果将由隐藏成就决定。"
  },
{
    id: "ai251",
    text: "我那时候，要解锁 <<$!19>> 成就，还得先拿到一个隐藏成就。系统相当简单：你得先在游戏里找到一条隐藏消息，再找到隐藏成就，之后才能解锁那个成就。"
  },
{
    id: "ai252",
    text: "我们在反物质竞赛里练出了一双快手。"
  },
{
    id: "ai253",
    text: "嗨，今天过得怎么样？"
  },
{
    id: "ai254",
    text: "你的 ⢿─┃│ 怎么样？挺好吧，因为今天我们要聊聊第五维。"
  },
{
    id: "ai255",
    text: "反物质会做什么？&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;哈，我又回来了。"
  },
{
    id: "ai256",
    text: "想象一下，自己就是第九维。【制作中】"
  },
{
    id: "ai257",
    text: "呜呼，我们输掉了战争，"
  },
{
    id: "ai258",
    text: "背景故事：《侠盗反物质》"
  },
{
    id: "ai259",
    text: "嗯，我不懂为什么有人觉得第九维存在。视频《[[无限传送计划]]》和一道[[文字题]]都详细解释过第九维，[[这里可以查看|http://www.thingiverse.com/id98109802713176601414569]]。"
  },
{
    id: "ai260",
    text: "在[[GameFAQs|http://www.gfaq.com/gfaqs/this-game-faq-by-title]]上，有一条最热门的[[新闻滚动条消息|http://www.gfaq.com/tug/this-game-faq-by-title]]。你也应该看看[[我们的最新景点，也就是[[第五维|http://www.gfaq.com/gfaqs/this-game-faq-by-name]]，还有[[什么都没有](https://www.youtube.com/watch?v=lXMskKTw3Bs)。"
  },
{
    id: "ai261",
    text: "我为这一天等了整整一个永恒……就是现在！我终于可以结束我的慢速模式了，因为今天是第0天。我还忘了把慢速模式改成6小时——毕竟你看不到它设了多久；我只能等到下次重启，才知道这模式还要持续多久……——某个还没结束慢速模式的神秘存在"
  },
{
    id: "ai262",
    text: "嘿，你终于醒了。你刚才想买个维度来着，可那根本不可能。"
  },
{
    id: "ai263",
    text: "按 F 致以敬意"
  },
{
    id: "ai264",
    text: "按 M 支付反物质"
  },
{
    id: "ai265",
    text: "按 L 复活死者"
  },
{
    id: "ai266",
    text: "你的 CPU 太强了。得给它来一次大坍缩。"
  },
{
    id: "ai267",
    text: "玫瑰是红的，紫罗兰是蓝的。Tom 是红的，反物质是蓝的。我们之所以存在，是因为不可战胜的反物质——反物质。究竟是什么让我们与众不同？我不知道。也许答案是反物质并不存在。"
  },
{
    id: "ai268",
    text: "我不确定该买这款游戏的完整版，还是买早些时候的版本，不过有一点我敢肯定：早期游戏品质下降得比后期游戏还厉害。"
  },
{
    id: "ai269",
    text: "我觉得“想看过场动画”那份清单更好"
  },
{
    id: "ai270",
    text: "读到这里，我有种不祥的预感"
  },
{
    id: "ai271",
    text: "你在哪？（指上方）--> 在堡垒里，维度之间；（指下方）--> 在牢房里，维度之间"
  },
{
    id: "ai272",
    text: "说明很清楚，我顿悟了第九维"
  },
{
    id: "ai273",
    text: "想玩个隐藏成就吗？嗯，我懂。但你得大声、清楚地说出来，再点亮某个特定隐藏成就。就像我说的，这可不容易，而且还要做很多事。还有，别忘了你的无限，或者你的无——"
  },
{
    id: "ai274",
    text: "有人看到 MEE6 在我的反物质实验室里，试图告诉我自己就是第八维的物质。"
  },
{
    id: "ai275",
    text: "如果……"
  },
{
    id: "ai276",
    text: "你可能听过很多次了，但赢得《反物质维度》的真正秘诀，是把维度拆开，然后——砰！你就有反物质了。当然，你得扔掉那些不能用的部分。那么反位元到底是什么？Zalgo 是谁？Algolia 又是什么？我为什么买不了那个？我为什么就是拿不到？更可能的情况是：我们先被炒得热血沸腾，最后却什么都没发生。"
  },
{
    id: "ai277",
    text: "嘿，Hevi 要进城挑个新水管工"
  },
{
    id: "ai278",
    text: "《反物质维度》里没有水管工。我很确定上一个家伙在撒谎。"
  },
{
    id: "ai279",
    text: "好吧。"
  },
{
    id: "ai280",
    text: "c9 才是新的第九维！"
  },
{
    id: "ai281",
    text: "点这条滚动新闻，获得一无所有。"
  },
{
    id: "ai282",
    text: "如果你对这些5小时计划或即将到来的现实更新有任何问题，欢迎私信我，我很乐意帮忙。"
  },
{
    id: "ai283",
    text: "如果你先解压、改名，再改一次名，然后又做了一遍呢？哈？你刚才就是这么想的吧。"
  },
{
    id: "ai284",
    text: "我把帖子标题写成“同一条滚动新闻”，而不是“同一个点子”，因为我确实改了那条帖子的语法；不过为了争论方便，我会一直把它称作永恒的，尽管现在看起来有点让人困惑。——Boo"
  },
{
    id: "ai285",
    text: "我把建议标题写成《价格猜猜看》，而不是《第九维》，因为这样更有趣 ;) "
  },
{
    id: "ai286",
    text: "天堂为什么叫第九维，地狱却叫第八维？"
  },
{
    id: "ai287",
    text: "永恒者有权要求当权者少做点事。他们受够了！"
  },
{
    id: "ai288",
    text: "反物质应该叫物质，而物质应该叫反物质"
  },
{
    id: "ai289",
    text: "无限只是个概念。物质反物质不过是款放置游戏。"
  },
{
    id: "ai290",
    text: "Hevipelle 承认自己在侵犯他人隐私这件事上“判断力不佳”。"
  },
{
    id: "ai291",
    text: "你听说过反物质的九层地狱吗？听说还挺酷的。”——Minecraft 里的 e210"
  },
{
    id: "ai292",
    text: "地狱温度为102.5度。"
  },
{
    id: "ai293",
    text: "在一个零维度的维度里，怎么得到物质或反物质？"
  },
{
    id: "ai294",
    text: "想跨过声望层？跑快一点，接近光速。再快点也行。"
  },
{
    id: "ai295",
    text: "如果宇宙正在膨胀，那它会不会反向解释距离？"
  },
{
    id: "ai296",
    text: "为什么叫作“送披萨的护士喝醉了”，或者“送披萨的护士受了影响”？"
  },
{
    id: "ai297",
    text: "第一批反物质被封存了几千年，后来 Slack 频道里有个小孩开始摆弄它。于是它变成了一个维度。"
  },
{
    id: "ai298",
    text: "虚拟现实是真实存在的。我们这些 VR 玩家已经禁掉了下次更新。"
  },
{
    id: "ai299",
    text: "“真希望我没有把新闻建议浪费在抱怨自己浪费新闻建议上，因为我已经浪费新闻建议抱怨自己浪费新闻建议，因为……”——某个真的很在乎新闻消息的人"
  },
{
    id: "ai300",
    text: "我们得去拿爆米花！"
  },
{
    id: "ai301",
    text: "如果反物质落进一个没有人在场的维度里，这事到底发生过吗？"
  },
{
    id: "ai302",
    text: "我们得把南瓜从烤箱里拿出来！"
  },
{
    id: "ai303",
    text: "救命，我被困住了"
  },
{
    id: "ai304",
    text: "接下来是天气预报。"
  },
{
    id: "ai305",
    text: "周二，一家瑞士法院判处一名男子终身监禁，罪名是“想用一个小型反物质星系制造黑洞”。据报道，这是史上最严厉的判决之一，因为他的罪行“只是想证明自己不可能被关起来”。"
  },
{
    id: "ai306",
    text: "“我想用一个小型反物质星系制造黑洞。”——Protivist"
  },
{
    id: "ai307",
    text: "科学家还发现，屁其实也是反物质。"
  },
{
    id: "ai308",
    get text() { return `如果你正在读这句话，就说明${format(Number.MAX_VALUE, 2)}单位的物质对你很重要。`; }
  },
{
    id: "ai309",
    text: "你好，我是物质。我来跟你聊聊。你醒了，摇了摇尾巴，又挠了挠头。为什么？站远一点，我要告诉你原因。"
  },
{
    id: "ai310",
    text: "咱们来建一面更高的墙吧，事情要变难看了。"
  },
{
    id: "ai311",
    text: "好吧，把节目搬到 YouTube 上吧。直说了：高度不到2个方块的墙，可以参加大哥尺寸的擂台。厚度至少3/4英寸的墙，可以用更大的大哥尺寸擂台。厚度至少1/4英寸的墙，可以用小号大哥尺寸擂台。厚度不到1/2英寸的墙，可以用小号大哥尺寸擂台。厚度不到1/2英寸的墙，可以用大号大哥尺寸擂台。厚度不到1/2英寸的墙，也可以用大哥尺寸擂台。厚度不到1/4英寸的墙，可以用图里这个小号大哥。厚度不到1/2英寸的墙，可以用小号大哥尺寸擂台。"
  },
{
    id: "ai312",
    text: "IDE 代表酷炫，ID3 代表愚蠢，ID5 代表……嗯，基本上也是同一个意思。这游戏叫《反物质维度》是有原因的。"
  },
{
    id: "ai313",
    text: "不知道我为什么要做这个"
  },
{
    id: "ai314",
    text: "“反 IDE”"
  },
{
    id: "ai315",
    text: "一万名反人，比我们想象的还要反得多。"
  },
{
    id: "ai316",
    text: "1e140个披萨能做成反派。你不能随便把一个派扔进烤箱，就指望它烤熟。"
  },
{
    id: "ai317",
    text: "新闻滚动条那么多，真正的滚动条却那么少，这是为什么？"
  },
{
    id: "ai318",
    text: "一个叫 Hevipelle 的人想做一条“8小时后更新”的新闻滚动条，可他用来同步的系统已经很久没更新，完全同步不了。"
  },
{
    id: "ai319",
    text: "更新将在90分钟后发布。已经找不到更多滚动新闻了。"
  },
{
    id: "ai320",
    text: "如果你正在读这句话，就说明已经没有更新了。"
  },
{
    id: "ai321",
    text: "已知维度有9个，但游戏模式只有3种：标准、实验和超实验。"
  },
{
    id: "ai322",
    text: "数据是什么？我没有，但 Hevipelle 有；他说数据其实相当不错。看来你不太愿意告诉我们。"
  },
{
    id: "ai323",
    text: "我还以为这次削弱也太狠了。"
  },
{
    id: "ai324",
    text: "把计数频率升级和升级本身都算进去，要舔多少条滚动新闻才能吃到反物质中心？"
  },
{
    id: "ai325",
    text: "4的平方根是6.24e18。如果你还想更接近事物的中心，就得造出第九维。"
  },
{
    id: "ai326",
    text: "我收回刚才的话，削弱并不是最后才发生；它其实一直在累积。削弱会让事情变慢，而这反倒让东西更快堆起来。"
  },
{
    id: "ai327",
    text: "等等，你们的建议没有一条是随机的。"
  },
{
    id: "ai328",
    text: "你绝对不是孤单一人。"
  },
{
    id: "ai329",
    text: "内容屏蔽已启用。请注意，你会被源头封禁，并禁止进入物质维度。"
  },
{
    id: "ai330",
    text: "我想写一条好新闻，可脑子里什么也想不出来"
  },
{
    id: "ai331",
    text: "哎呀，第九维那件事又来了？"
  },
{
    id: "ai332",
    text: "“嘿，孩子，想买点第九维吗？”——GhostBot"
  },
{
    id: "ai333",
    text: "一件事接着一件事，再接着一件事，直到你迷失在无尽的声音之海里。"
  },
{
    id: "ai334",
    text: "仅限 iPhone，不过在 Android 上也很棒"
  },
{
    id: "ai335",
    text: "我要拿到那条坏运气新闻，然后让它在邮件里反弹回去"
  },
{
    id: "ai336",
    text: "快跑，不然复制器就要淹没整个宇宙了！"
  },
{
    id: "ai337",
    text: "你刚觉得安全，一只暴怒的狗就在街边扑向你！"
  },
{
    id: "ai338",
    text: "好啦好啦，狗的统治已经结束，现在换绝对权力上场。"
  },
{
    id: "ai339",
    text: "你刚刚成了反世界的真神！"
  },
{
    id: "ai340",
    text: "*擦着柜台* 你们好，附近的居民都把门锁好。记住：保持房屋整洁。"
  },
{
    id: "ai341",
    text: "普通新闻滚动条向左移动"
  },
{
    id: "ai342",
    text: "下次更新还要18000秒。别再读这条了。什么都别读。别再按着那个按钮了。新闻滚动条正把你往外赶。等等……"
  },
{
    id: "ai343",
    text: "在宇宙的古老边疆，有个家伙已经收集反物质一阵子了。"
  },
{
    id: "ai344",
    text: "什么是反物质利他主义者？"
  },
{
    id: "ai345",
    text: "如果你正在读这句话，那就说明新闻滚动条正在滚动"
  },
{
    id: "ai346",
    text: "把奶酪放进水里，奶酪会被水吸收，然后你就会遭遇洪水。因为水会被奶酪吸收，而奶酪也会被水吸收。"
  },
{
    id: "ai347",
    text: "反鸟就是鸟，而鸟就是飞机。"
  },
{
    id: "ai348",
    text: "鸟怕水，哺乳动物怕飞。"
  },
{
    id: "ai349",
    text: "特别感谢 Simpleflips 提供这个简单提示。"
  },
{
    id: "ai350",
    text: "快来大坍缩啊，老兄！"
  },
{
    id: "ai351",
    text: "消息传开了。坍缩。坍缩。"
  },
{
    id: "ai352",
    text: "每一分钱都花得值。"
  },
{
    id: "ai353",
    text: "8条命、3次无限、0天。"
  },
{
    id: "ai354",
    text: "现在是公元前0年。每个人都至少想要一个 AD。虚空里充满了 AD 填出来的空虚。想充分利用在这里的时间，就应该[[学习]]。学习。学习。学习。"
  },
{
    id: "ai355",
    text: "在地狱里大坍缩，就能找到解锁第九维的秘诀。你得认真学习并多加练习。"
  },
{
    id: "ai356",
    text: "今天是[设备显示的日期]。距离上一条新闻滚动条出现才过了5分钟。"
  },
{
    id: "ai357",
    text: "欢迎回到《反物质维度》新一期节目。这款标志性的角色扮演游戏早已融入我们的日常生活。越来越多的小孩子开始玩《反物质维度》，它甚至启发了一部名为《在家玩：四岁高级账号的启示》的电影，现已在 Netflix 上架。新世代反物质的主题和机制已被证明具有开创性，将永远改变你玩游戏的方式。欢迎在2027年1月9日加入我们的发布会；届时，我们的产量还会持续增长一百多年。"
  },
{
    id: "ai358",
    text: "欢迎回来，伟大的反现实创造者。我们这些由你创造、悉心培育的无数维度，希望自己对你无限恩惠的回报能令你满意，也能激励你创造更多维度。善始善终，一切都好；坏事也会以坏结果收场。"
  },
{
    id: "ai359",
    text: "我还以为这条滚动新闻会很好笑，结果并不好笑"
  },
{
    id: "ai360",
    text: "按 Alt+F4 获得负1重力"
  },
{
    id: "ai361",
    text: "为什么我们的现实里会有治愈反物质湮灭的方法？"
  },
{
    id: "ai362",
    text: "计算增加14点就像大坍缩一样，只不过乐趣呈指数级增长"
  },
{
    id: "ai363",
    text: "把错误的数字修好了"
  },
{
    id: "ai364",
    text: "反物质人创造了一种新语言。你可能听不懂他们说的话。"
  },
{
    id: "ai365",
    text: "反物质引力是什么？是一种药吗？还是一种作弊方法？"
  },
{
    id: "ai366",
    text: "很多人不明白5小时根本不算什么。在我们的游戏里，大部分时间都还要等5小时。"
  },
{
    id: "ai367",
    text: "我刚发现，所有这些新闻好像都发生在同一个地方……冰箱里。"
  },
{
    id: "ai368",
    text: "不知道点这个会发生什么……"
  },
{
    id: "ai369",
    text: "（他们不明白，我把它放进新闻里，是因为计数要到59之后才从9开始，59之后的事情都不会发生。）"
  },
{
    id: "ai370",
    text: "MS Excel 是默认电子表格软件，并且能在所有平台上运行"
  },
{
    id: "ai371",
    text: "现在来回答各位先生最关心的问题。作为额外福利，我们修复了一个无限递归漏洞。作为新功能，我又加了一大堆，希望你们体验时能注意到，也希望你们会喜欢——毕竟这次更新还是测试版，你没法选择自己会看到哪些功能。"
  },
{
    id: "ai372",
    text: "官方版本里不能编辑？那就下载第九维，把你的建议直接放进游戏里。"
  },
{
    id: "ai373",
    text: "“差强人意”是不是表示“有这么多缺陷”？"
  },
{
    id: "ai374",
    text: "我们急需高质量的漏洞报告。因此，我决定在即将推出的1.9更新中，每个漏洞配一个缺陷。你们不会真的碰上这些问题吧？"
  },
{
    id: "ai375",
    text: "这是我最后的机会。最后一刻，敬礼。"
  },
{
    id: "ai376",
    text: "新年当天，动漫警察正在检查从天而降的人们的包。那些包现在归在这一年结束前体验过失重的人所有。"
  },
{
    id: "ai377",
    get text() { return `现在是10亿富豪年，反物质占41%，维度是1e1e8。测量的标准差，就是你的问题有多小。这会让人们以为自己用的数值普遍又正常，结果带来各种削弱，甚至崩溃。到了${format(Number.MAX_VALUE, 2)}，气温已经升高，月亮和地球变成了同一种颜色。除了海里偶尔繁盛的浮游生物，生命迹象全无。有人认为反物质具有磁矩，但目前实验似乎并不支持这一说法。反物质有超过一百万个物种，却没有任何一种会眨眼或发光。科学家推测，许多物质可能藏在反物质“背后”，但“它们”彼此“不会说话”。`; }
  },
{
    id: "ai378",
    text: "再过5小时，就是我们成立5周年！"
  },
{
    id: "ai379",
    text: "别来找我！我甚至不确定自己还站着没有！"
  },
{
    id: "ai380",
    text: "一群人正在努力找出一种未知语言里的最后一个词。"
  },
{
    id: "ai381",
    text: "现在是20XX年，游戏是 AD，而 Hevipelle 因为写了更新而变邪恶了……都怪反物质诸神。"
  },
{
    id: "ai382",
    text: "现在是20XX年，游戏是 AD，而年份是2025年。这一年里有两种人：玩过 AD 的人，以及之后才会玩 AD 的人。"
  },
{
    id: "ai383",
    text: "水果和蔬菜有上百种，但没有一种是“安全的”。"
  },
{
    id: "ai384",
    text: "更新什么时候发布？"
  },
{
    id: "ai385",
    text: "抱歉，你的存档坏了。能重置一下游戏吗？"
  },
{
    id: "ai386",
    text: "欢迎参加全新竞赛“三合会”！带上你的智慧和无限点，参加这场独特的亲身体验！奖品多多！现在就开始收集！获奖者即将公布！"
  },
{
    id: "ai387",
    text: "真希望自己没写那么多 Pink Floyd 梗。"
  },
{
    id: "ai388",
    text: "又到了收集 RG 的季节！"
  },
{
    id: "ai389",
    text: "真希望自己没写那么多第九维。"
  },
{
    id: "ai390",
    text: "真希望自己没写那么多 Discord 梗。"
  },
{
    id: "ai391",
    text: "最近怎么样？"
  },
{
    id: "ai392",
    text: "“我所有新闻都从 Hevi 那里看。”——新玩家"
  },
{
    id: "ai393",
    text: "你以为这些是笑话，其实它们不是。"
  },
{
    id: "ai394",
    text: "总在和第九维开战，这件事本身就是第九维。"
  },
{
    id: "ai395",
    text: "对。没错，我就是。"
  },
{
    id: "ai396",
    text: "现在没人反对 Margaret 了。"
  },
{
    id: "ai397",
    text: "反物质好，物质坏。你自己决定。"
  },
{
    id: "ai398",
    text: "全球新货币：ETHBTC。5小时后发行。"
  },
{
    id: "ai399",
    text: "“这次更新真烂。”——至少每个人都说过一次"
  },
{
    id: "ai400",
    text: "你不是黑客，你只是个数据贪吃鬼。"
  },
{
    id: "ai401",
    text: "拜托，救救我，我被困在邪恶迷宫里了；或者你才是英雄，而我是反派！"
  },
{
    id: "ai402",
    text: "按 R 为新玩家重置游戏"
  },
{
    id: "ai403",
    text: "为什么偏偏是现在？就是现在。你不可能保存过这游戏。你把它弄坏了。无论你怎么破坏，都没人能修好，哪怕存档完美也不行。你怎么可能知道读到这条消息会发生什么？你甚至不知道自己有没有保存。你会从一颗空荡荡的心开始，双眼紧闭，手指停在电脑前，望着窗外的白昼，被无尽的新闻建议迷住。它像恐怖片票根，而且更糟。更新倒计时里甚至还能买升级，给人生第二次机会。可人生不能买升级，那是违法的。所以你只好一直按住 R。你不能……松开 R，只能交叉手指祈祷。你不能昂首挺胸地抵达无限。你不能用所有的 R 去买更多 R。你甚至没法把自己的话说完。"
  },
{
    id: "ai404",
    text: "我花了12个月写了一些对你毫无用处的东西。"
  },
{
    id: "ai405",
    text: "这句话只适用于那些明白鹅卵石是点的无限空间中的一个无限点的人。你无法在上面放有限个点。不过，你可以在上面写有限个词，反过来也一样。"
  },
{
    id: "ai406",
    text: "“我就是我就是我”这句话，除了描述你的想法，还有什么用？"
  },
{
    id: "ai407",
    text: "一个形迹可疑的人试图在市场上卖某种反食物。现场没人买，也没人不买；最后只看见那人逃离现场。"
  },
{
    id: "ai408",
    text: "为什么感觉时间好像在为这件事变慢？"
  },
{
    id: "ai409",
    text: "基于离散对数连续性的科学出版物数量正呈指数增长，因为相对于前项的对数连续性是 9.999626e27.999627 e300 e1.79e308 e²。"
  },
{
    id: "ai410",
    text: "嗯，事情没有按计划发展。一切起初都很平常：一名路人发现一个奇怪物体漂浮在圣安地列斯。一边变大，一边显露出异常性质，他试图远程启动天气来控制它。结果这一举动引发了核冬天，造成数千万人死亡，还把整个宇宙变成了“标准持有者”格式，让他得以否决任何对该格式的更改。物体的力量越强，人们就越需要制造更先进的装置，好让他远程启动天气。最后，他们造出了世界上有史以来最大的极光，比此前储备的326,500吨吨吨吨吨吨吨星云还大。物体越强，就越需要把更多卫星送入太空，最终实现跨宇宙卫星通信，让他成为首个经历这一事件的生物。为了以防他恰好在附近，他还和物体同一时间安全降落在同一座机场。最后，他打开一封陌生人发来的邮件，里面讨论了如何一步一步制造反物质物体；至少，他可以给出一些方向，帮助世界自救。他还提到自己要写一条新滚动新闻，可到滚动条末尾才发现它和另一条重复了，而且还打错了。（最后他承认错误，并为保险起见做了更改。）"
  },
{
    id: "ai411",
    text: "尊贵的天界 Pelle：祝你的挑战好运，这确实危险得很。"
  },
{
    id: "ai412",
    text: "尊贵的超级虔诚人士：……我想我还是选芝士汉堡，不选反物质。"
  },
{
    id: "ai413",
    text: "喂，不行，不行——HEVI，变形者！"
  },
{
    id: "ai414",
    text: "宝藏库：发现提高反物质产量、却不涨价的秘密。"
  },
{
    id: "ai415",
    text: "《反物质维度》是《反物质维度》的字母重排吗？"
  },
{
    id: "ai416",
    text: "（从零开始生成的代码）"
  },
{
    id: "ai417",
    text: "我以前按正常速度生活，后来开始玩 AD 和 NIN。NIN 玩起来有点粗糙，AD 又有点让人抓狂，于是我一次次困在里面好几个月。"
  },
{
    id: "ai418",
    text: "真希望我不用写这种东西。我到底该怎么办？"
  },
{
    id: "ai419",
    text: "你擅离职守太久，久到忘了怎么坐在椅子上。"
  },
{
    id: "ai420",
    text: "那些烦人的 Hevi 开发者一直在做《反物质维度》，可反物质却不计入产量。"
  },
{
    id: "ai421",
    text: "现实中少数恒定的事物之一，就是你对时间的感知。没有它，你就失去了现实。"
  },
{
    id: "ai422",
    text: "想象一下，自己是一条新闻滚动条。"
  },
{
    id: "ai423",
    text: "这是款放置游戏。一切都没变。你不会去玩别的放置游戏。"
  },
{
    id: "ai424",
    text: "物理学家已经证明十二个维度的存在。根据弦理论研究实验室发布的一封信：“打破无限之后，我们会解剖你的大脑！”"
  },
{
    id: "ai425",
    text: "奇怪的是，现在也是2015年。这一年也神秘地空白一片。你能告诉我这是怎么回事吗？这是某种维度把戏吗？这一年显然是空白的，因为根本不存在2015年。这是心理作用吗？也许世界真会在2015年停止存在？显然现在是2017年，可人们移动得像飞行中的蜜蜂一样慢。科学已经证明，人们移动的速度比子弹快9倍。科学也证明了人能超越光速。2015年是不是该留白？人们移动得像 Vokal Man 一样快。"
  },
{
    id: "ai426",
    text: "一个叫 Andre 的年轻人在探索未知太空时，偶然发现了大量反物质。他惊讶于反物质的数量，更惊叹于它的样子，于是把它称为“Andre 的反物质天堂”。你可能在这条广告或另一条广告里见过他——后一条你很可能当时都没意识到自己在看。"
  },
{
    id: "ai427",
    text: "反物质是什么？它真的重要吗？这座星系会在下一条新闻里被湮灭吗？"
  },
{
    id: "ai428",
    text: "“这点稿酬不够我把它写完。”——Kajfik"
  },
{
    id: "ai429",
    text: "“终于能拿钱给我的吐司写点好笑的东西了！”——培根海胆"
  },
{
    id: "ai430",
    text: "培根就是吐司。你可以把培根烤成吐司。"
  },
{
    id: "ai431",
    text: "现实生活是什么？一种活着的……"
  },
{
    id: "ai432",
    text: "如今9和其他数字一样看待，不过 Hevi 坚称它与别的数字不同；例如他把第八维叫作第九维。"
  },
{
    id: "ai433",
    text: "如果你想更了解这款游戏，不妨想想：你正在自己的电脑上玩游戏，但你并不孤单。全世界的黑客、开发者和记者都在争着创造第一个漏洞，让“制造者”和“拿走者”之间出现问题——就像这个“世界”也是由这些“黑客”和“开发者”创造的一样。"
  },
{
    id: "ai434",
    get text() { return `你没有力量，但你掌控着大量时间，可以用来为自己谋利。你没有力量，但你拥有大量数据，这对追寻“真相”大有帮助。你没有力量，但你掌控着大量时间，可以用来敲开尽可能多的门。你没有力量，但你拥有大量无限点，这会成为制作“公民实录”的宝贵资产（只需支付${format(Number.MAX_VALUE, 2)}的小额费用即可观看）。`; }
  },
{
    id: "ai435",
    text: "它也许是个机器人，但仍是有自我意识、拥有独立意志的生命。"
  },
{
    id: "ai436",
    text: "我曾见过一条新闻滚动条，大概是这么说的："
  },
{
    id: "ai437",
    text: "天啊，这些反物质把我厨房都堵住了，我现在连饭都做不了！怎么办？做一顿能让我撑到下一次大型反物质事件的饭，这样我就能拿回无限点？我的无限点快耗尽了，偏偏又没法让它跑完，我要饿死了！"
  },
{
    id: "ai438",
    text: "由 AAAD 牌复制器糖果倾情呈现！无限糖果，专治让人垂涎欲滴的感冒！不含牛奶、曲奇或黄油。午夜前一秒。"
  },
{
    id: "ai439",
    text: "人力驱动的机器人让现有工厂焕然一新，产品价格会更低，工作岗位也会更多。"
  },
{
    id: "ai440",
    text: "美国制造业遭遇灾难性失败，工厂纷纷停摆。全国各地的工人逐渐意识到，他们根本无法生产承诺数量的反物质，于是开始自己建厂生产。结果价格更高，工作更少。"
  },
{
    id: "ai441",
    text: "注意了，互联网！下一条新闻将在5个膨胀小时后到来"
  },
{
    id: "ai442",
    text: "第一条新闻滚动条肯定很酷，对吧？"
  },
{
    id: "ai443",
    text: "重力 = 精神活性"
  },
{
    id: "ai444",
    text: "“那个维度根本不存在”——（只有在[时间膨胀]时才会显示这条新闻。）",
    get unlocked() { return PlayerProgress.dilationUnlocked(); }
  },
{
    id: "ai445",
    text: "一家商店老板想卖给你方便维度，据说他“全天候待命”（也就是完全没有空闲时间），而他的登记证上还醒目地标着一个大写 M。"
  },
{
    id: "ai446",
    text: "把这一条也加上"
  },
{
    id: "ai447",
    text: "点击此处，让它对除你以外的所有机器人都生效！"
  },
{
    id: "ai448",
    text: "好吧，第九颗球卡在我的第九维里了，我动不了；它正敲着我的第九面墙，可我打不破；它又敲我的第九条时间线，我连瞄准它都做不到。它毁掉了第九维，把我晾在一边，像个格罗米特。我得回来，把 Glorfindel 和 Gaebley 挂起来。我有个提议：我得想明白，自己唯一做过的事就是记分、记录比分，以及这些毫无意义的胡思乱想——只要切到下次更新就能轻松解决。可就算那样，我也可能撞上专门为这个漏洞设计的那些问题，然后……"
  },
{
    id: "ai449",
    text: "游戏很平衡，人人都会被削弱。为什么？因为他们做派啊。要是派是反物质做的，反物质进派的机会就大多了。"
  },
{
    id: "ai450",
    text: "“你能看懂这个笑话吗？”（如果你点过“把墙建起来”，然后点完后重新进入游戏）"
  },
{
    id: "ai451",
    text: "有人说了一句会让反物质产生反应的话。原话是：“很久以前有一个无限点。”已经有段时间没人找这句话了。有人说它还在那里，也有人说它在第七维战争中丢了。没人知道这句话是什么意思。但目前你只要知道，它不在新闻滚动条里的某个地方就行。"
  },
{
    id: "ai452",
    text: "嘿，你终于醒了。你刚才想去第九维，对吧？和我们一样，你一头撞上了那个无限点，还有那边的末日。"
  },
{
    id: "ai453",
    text: "你能不能别这样"
  },
{
    id: "ai454",
    text: "如果 Kajfik 不批准这条，那是不是代表 Kajfik 就碰不到这条消息，对吧？"
  },
{
    id: "ai455",
    text: "放我离开这部手机！"
  },
{
    id: "ai456",
    text: "事情的发展和预想的不一样"
  },
{
    id: "ai457",
    text: "在你意识到龙珠是个谎言之前，一切都只是玩闹"
  },
{
    id: "ai458",
    text: "“你能拿到所有这些反物质吗？哈！你只会一头撞上那些反物质，到时候就让我看看谁说了算。”——MEE6"
  },
{
    id: "ai459",
    text: "我们不知道一万亿有多大……不过"
  },
{
    id: "ai460",
    text: "穿越回《反物质维度》刚推出、还没有第七维的时候。你的进度条会更长。"
  },
{
    id: "ai461",
    text: "我们只知道这游戏里有时间旅行，却不知道接下来会发生什么。我们只知道世界末日即将到来，而你也是这场末日的一部分。"
  },
{
    id: "ai462",
    text: "“你掌控着这么多物质！”——Marshal Grievous"
  },
{
    id: "ai463",
    text: "“救命，我注定要永远坠落。”（让文字从屏幕顶部一路滚到屏幕底部）"
  },
{
    id: "ai464",
    text: "起初，Patashu 醒来后说道……"
  },
{
    id: "ai465",
    text: "这是同一主题三部曲里的第四部分。如果你还卡在这里，请从头继续读。"
  },
{
    id: "ai466",
    text: "一年一度的 DDoS（分布式拒绝服务）挑战又开始了：参赛者把最高分发到网上，羞辱所有人，直到他们屈服。全球称霸的狂热达到顶点，DDoS 攻击也愈发频繁、愈发致命；黑客团队渗透进互联网最高层，窃取顶级分数和身份，再公布到网上供所有人围观。#BringBackOurTop 计分机制已取消，新一套更高分制将配合即将到来的5小时更新推出。"
  },
{
    id: "ai467",
    text: "全新 AD 键盘简直是个奇迹！它不但更大，也更深，因此能让你的战队成员玩得更久。键盘由坚固耐用的外星反物质制成。唯一比它更大的，是你。"
  },
{
    id: "ai468",
    text: "如果饮水喷泉其实根本不是水景，会怎样？"
  },
{
    id: "ai469",
    text: "水是湿的，空气是干的，而喷泉不属于空气景观。"
  },
{
    id: "ai470",
    text: "我小时候总觉得事情不一样。"
  },
{
    id: "ai471",
    text: "如果你正在读这句话，那就说明：1）我们存在；你也能存在。"
  },
{
    id: "ai472",
    text: "“我最喜欢的部分，是那段长、长、长篇阅读。”——Grumpy Cat"
  },
{
    id: "ai473",
    text: "我打算打一辈子字……提示：会无聊得要命，笑死"
  },
{
    id: "ai474",
    text: "我想写点真正原创的东西 <:thonk:>"
  },
{
    id: "ai475",
    text: "新年快乐，慢慢安顿下来、放松身心。睡个好觉，吃点东西，交些朋友，做些改变，准备迎接2019年吧。"
  },
{
    id: "ai476",
    text: "病毒会说谎并传播，电视节目也一样会说谎并传播。"
  },
{
    id: "ai477",
    text: "我们都知道你看不见未来，但如果你读到这句话时，未来其实正是一个我们还不知道的未来呢？"
  },
{
    id: "ai478",
    text: "这条消息撤不回去了"
  },
{
    id: "ai479",
    text: "你点开了一条预言，它就崩溃了。你赢不了。"
  },
{
    id: "ai480",
    text: "Luke，这笑话可真黑。"
  },
{
    id: "ai481",
    text: "Kajfik 靠看一大堆 Pink Floyd 来自我陶醉"
  },
{
    id: "ai482",
    text: "只有玩完之后，你才可以回家"
  },
{
    id: "ai483",
    text: "“你能拿到无限多的无限点吗？”——Lord Sanguino"
  },
{
    id: "ai484",
    text: "想体验真正的《反物质维度》，就把更新间隔设为5小时。"
  },
{
    id: "ai485",
    text: "想象一下，如果游戏根本没有背景故事呢？这、这是什么意思？我不懂。"
  },
{
    id: "ai486",
    text: "“点击这里解锁隐藏成就。”（点下去会被 Rickroll）",
    onClick() { window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); }
  },
{
    id: "ai487",
    text: "我还以为很久以前就解锁了这个，结果好像是我的存档坏了，哈哈"
  },
{
    id: "ai488",
    get text() { return `欢迎收看《反时尚裤》新一集，我们会在那些糟糕的服装店里，看人们售卖各种衣服。今天的主题是……反激光。人们可以制造并使用反物质激光，随意发射反物质子弹，把瞄准范围内的城市彻底摧毁。这种技能很危险，因为人们既不可信，也根本没有能力使用它。不过，这项技能每分钟能够……在10年时间里生产${format(Number.MAX_VALUE, 2)}发反物质子弹。人们还可以用反物质随意发射反物质子弹，消灭视野中的整座城市。`; }
  },
{
    id: "ai489",
    text: "Spartacus 原本打算加入十章连载剧情，却被第十维拦了下来。"
  },
{
    id: "ai490",
    text: "第九章将在5小时后推出。"
  },
{
    id: "ai491",
    text: "假新闻说第九维是真的，假新闻又说第九维是假的。"
  },
{
    id: "ai492",
    text: "这是重大新闻吗？是的。这是重大新闻吗？几乎肯定不是。"
  },
{
    id: "ai493",
    text: "这是条友善的建议，请继续读下去。"
  },
{
    id: "ai494",
    text: "如果这条能进游戏，我就买个反工具。"
  },
{
    id: "ai495",
    text: "反工具不过就是抵消其他物质的重力。"
  },
{
    id: "ai496",
    text: "抱歉，你的画面显示已关闭。你看，这会是最后一次看到这条新闻了。祝你假期愉快。"
  },
{
    id: "ai497",
    text: "赢得《反物质维度》的真正秘诀是……"
  },
{
    id: "ai498",
    text: "他们一直说《反物质维度》会成为下一个大热门，后来却消失在一个黑洞里了”"
  },
{
    id: "ai499",
    text: "新闻滚动条不是提交建议的地方！请去“建议”标签页，大多数建议都会在那里出现。"
  },
{
    id: "ai500",
    text: "要创造《反物质维度》，你得先收集7个第八维。先拿到维度奖励，再买到维度，最后才能开始生产反物质。"
  },
{
    id: "ai501",
    text: "“如何解锁你的第一个隐藏成就”：“打开应用，点击‘获取更多反物质’，然后点击‘提交’。”"
  }
];
