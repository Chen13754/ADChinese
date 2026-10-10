import { AutobuyerInputFunctions } from "../../components/tabs/autobuyers/AutobuyerInput.js";

export const automatorTemplates = {
  /**
    * List of possible data types to dynamically generate in script templates, assumed to be only string or boolean
    * {
    *  @property {String} name              String to be used as a key for entries in this object
    *  @property {String[]} boolDisplay     Strings to be displayed for true/false states for boolean inputs. If
    *   undefined, assumed to be a non-boolean input
    *  @property {Function} isValidString   A function used to test if an input string is formatted properly or not
    *  @property {Function} map             A function to be used to map the inputs to their actual values
    *   which are stored in the param object. If undefined, assumed to be no mapping
    * }
    */
  paramTypes: [
    {
      name: "tree",
      isValidString: str => {
        const validImport = TimeStudyTree.isValidImportString(str);
        const preset = str.match(/^(NAME (.{1,4})|ID (\d))$/u);
        const validPreset = preset ? (
          player.timestudy.presets.some(p => p.name === preset[2]) ||
          (Number(preset[3]) > 0 && Number(preset[3]) < 7)
        ) : false;
        return validImport || validPreset;
      },
    },
    {
      name: "integer",
      isValidString: str => AutobuyerInputFunctions.int.tryParse(str),
      map: x => Math.round(parseInt(x, 10)),
    },
    {
      name: "decimal",
      isValidString: str => AutobuyerInputFunctions.decimal.tryParse(str),
      map: x => AutobuyerInputFunctions.decimal.tryParse(x),
    },
    {
      name: "boolean",
      boolDisplay: [true, false],
    },
    {
      name: "nowait",
      boolDisplay: ["继续执行", "继续购买时间研究"],
    },
    {
      name: "mode",
      boolDisplay: ["最高值的 X 倍", "距上次触发的秒数"],
      map: x => (x ? "mult" : "time"),
    },
  ],
  /**
    * List automator script templates, primarily used here for formatting the player UI prompts appropriately
    * so that all of the required fields show up in the proper input formats. Actual script formatting requires
    * additionally writing a method to be called in the constructor of the ScriptTemplate class
    * {
    *  @property {String} name          Name of script template, also used as a key within the constructor for
    *   ScriptTemplate objects
    *  @property {String} description   Text description of what the template does when used in the automator
    *  @property {Object[]} inputs      Fields of the param object which need to be filled for the template to
    *   have all the information it needs. Contains the name of the field, the type (drawn from paramTypes above),
    *   and a prompt to be shown in the UI end
    *  @property {Function} warnings    Function which checks the current game state and potentially provides
    *   warnings based on some possibly common cases which may lead to undesired behavior
    * }
    */
  scripts: [
    {
      name: "Climb EP",
      displayName: "攀升永恒点",
      description: `该脚本将反复进行永恒操作，每次永恒时尝试重新购买时间研究树。需配置无限自动购买器和永恒自动购买器。脚本将持续循环，直至达到最终永恒点数目标值。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入时间研究树" },
        { name: "treeNowait", type: "nowait", prompt: "缺少研究时的处理方式" },
        { name: "finalEP", type: "decimal", prompt: "目标永恒点数" },
        { name: "autoInfMode", type: "mode", prompt: "无限自动购买器模式" },
        { name: "autoInfValue", type: "decimal", prompt: "无限自动购买器阈值" },
        { name: "autoEterMode", type: "mode", prompt: "永恒自动购买器模式" },
        { name: "autoEterValue", type: "decimal", prompt: "永恒自动购买器阈值" },
      ],
      warnings: () => {
        const list = [];
        if (!RealityUpgrade(10).isBought) {
          list.push(`若永恒次数不足 ${formatInt(100)} 次，此脚本将无法正确配置自动购买器模式。建议在开始现实前，先获取现实升级「${RealityUpgrade(10).name}」。`);
        }
        // Telemechanical Process (TD/5xEP autobuyers)
        if (!RealityUpgrade(13).isBought) {
          list.push(`缺少现实升级「${RealityUpgrade(13).name}」时，此模板的效果可能不理想。`);
        }
        if (!Perk.ttBuySingle.isBought) {
          list.push(`若无法自行生成时间定理，且缺少特权「${Perk.ttBuySingle.label}」时，此模板的效果可能不理想。`);
        }
        return list;
      },
    },
    {
      name: "Grind Eternities",
      displayName: "刷永恒次数",
      description: `此脚本会在购买指定的时间研究树后，反复快速进行永恒操作。
        无限自动购买器将按指定的大坍缩次数设为“最高值的 X 倍”，永恒自动购买器则会尽快触发。脚本会持续循环，直至达到目标永恒次数。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入时间研究树" },
        { name: "treeNowait", type: "nowait", prompt: "缺少研究时的处理方式" },
        { name: "crunchesPerEternity", type: "integer", prompt: "每次永恒前的大坍缩次数" },
        { name: "eternities", type: "decimal", prompt: "目标永恒次数" },
      ],
      warnings: () => {
        const list = [];
        // Eternal flow (eternity generation)
        if (RealityUpgrade(14).isBought) {
          list.push(`已有现实升级「${RealityUpgrade(14).name}」，你可能不需要使用此模板。`);
        }
        return list;
      },
    },
    {
      name: "Grind Infinities",
      displayName: "刷无限次数",
      description: `此脚本会购买指定的时间研究树，然后配置自动购买器以获取无限次数。脚本会持续循环，直至达到目标无限次数；如果目标设为储存的无限次数，脚本会先获取所有无限次数，再进行一次永恒。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入时间研究树" },
        { name: "treeNowait", type: "nowait", prompt: "缺少研究时的处理方式" },
        { name: "infinities", type: "decimal", prompt: "目标无限次数" },
        { name: "isBanked", type: "boolean", prompt: "目标是否计入储存的无限次数？" },
      ],
      warnings: () => {
        const list = [];
        if (!Perk.achievementGroup5.isBought) {
          list.push(`本次现实开始时，你尚未获得成就「${Achievement(131).name}」；在之后解锁储存无限次数前，刷无限次数的收益可能低于预期。`);
        }
        // Boundless flow (infinity generation)
        if (RealityUpgrade(11).isBought) {
          list.push(`已有现实升级「${RealityUpgrade(11).name}」，你可能不需要使用此模板。`);
        }
        return list;
      },
    },
    {
      name: "Complete Eternity Challenge",
      displayName: "完成永恒挑战",
      description: `此脚本会购买指定的时间研究树，然后解锁指定的永恒挑战。
        接着，它会按你指定的设置配置无限自动购买器，并进入该永恒挑战。最后，脚本会等待挑战完成次数达到目标，再进行永恒以完成挑战。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入时间研究树" },
        { name: "treeNowait", type: "nowait", prompt: "缺少研究时的处理方式" },
        { name: "ec", type: "integer", prompt: "永恒挑战编号" },
        { name: "completions", type: "integer", prompt: "目标完成次数" },
        { name: "autoInfMode", type: "mode", prompt: "无限自动购买器模式" },
        { name: "autoInfValue", type: "decimal", prompt: "无限自动购买器阈值" },
      ],
      warnings: () => {
        const list = [];
        if (!Perk.studyECRequirement.isBought) {
          list.push(`由于次级资源要求，永恒挑战可能无法稳定解锁；建议使用此模板前先解锁特权「${Perk.studyECRequirement.label}」。`);
        }
        if (!Perk.studyECBulk.isBought) {
          list.push(`若缺少永恒挑战批量完成特权，此模板可能生成冗长、运行较慢且难以修改的脚本。解锁特权「${Perk.studyECBulk.label}」后，建议回来精简脚本。`);
        }
        return list;
      },
    },
    {
      name: "Unlock Dilation",
      displayName: "解锁时间膨胀",
      description: `此脚本会反复进行永恒，并在每次永恒时尝试重新购买时间研究树。
        你需要设置永恒自动购买器；无限自动购买器会关闭。脚本会持续循环，直至达到解锁时间膨胀所需的时间定理总量，然后解锁时间膨胀。`,
      inputs: [
        { name: "treeStudies", type: "tree", prompt: "或直接输入时间研究树" },
        { name: "treeNowait", type: "nowait", prompt: "缺少研究时的处理方式" },
        { name: "finalEP", type: "decimal", prompt: "目标永恒点数" },
        { name: "autoEterMode", type: "mode", prompt: "永恒自动购买器模式" },
        { name: "autoEterValue", type: "decimal", prompt: "永恒自动购买器阈值" },
      ],
      warnings: () => {
        const list = [];
        // Telemechanical Process (TD/5xEP autobuyers)
        if (!RealityUpgrade(13).isBought) {
          list.push(`缺少现实升级「${RealityUpgrade(13).name}」时，此模板的效果可能不理想。`);
        }
        if (!Perk.ttBuySingle.isBought) {
          list.push(`若无法自行生成时间定理，且缺少特权「${Perk.ttBuySingle.label}」时，此模板的效果可能不理想。`);
        }
        return list;
      },
    },
  ]
};
