import Fuse from "fuse.js";
import { toRaw } from 'vue'

export interface GameType {
    // 封面
    cover: string;
    // 桌游名
    name: string;
    // 类型
    type: string;
    // tag
    tag: string;
    // 玩家数
    players: number[];
}

export function GameListApi(pageNum: number, pageSize: number, params: any) {
    return new Promise((resolve) => {
        // 模拟网络请求延迟 (例如 300ms - 800ms)
        const delay = Math.floor(Math.random() * 500) + 300;
        setTimeout(() => {
            const fuse = new Fuse(GameList.filter(el => toRaw(params.players).every((e: any) => el.players.includes(e))), {
                threshold: 0.3,
                keys: ['name', 'type', 'tag'],
            })
            const results = fuse.search(params.searchValue)
            // 计算数据的起始索引
            const start = (pageNum - 1) * pageSize;
            const end = start + pageSize;
            // 使用 slice 方法进行数组截取，实现分页
            const data = results.slice(start, end);
            // 构造返回结果，符合常见后端 API 格式
            const result = {
                code: 200,             // 状态码
                msg: 'success',        // 提示信息
                data: {
                    list: data,          // 当前页数据列表
                    total: GameList.length, // 数据总条数
                    pageNum: pageNum,    // 当前页码
                    pageSize: pageSize   // 每页条数
                }
            };
            resolve(result);
        }, delay);
    });
}

export const GameList: GameType[] = [
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202306/c_0846322495861_1859793e.jpg",
        name: "卡卡颂",
        type: "抽象",
        tag: "板块放置",
        players: [2,3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/timg1507594154983.jpg",
        name: "三国杀",
        type: "聚会/卡牌",
        tag: "",
        players: [2,3,4,5,6,7,8,9,10],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/20190110/1547097241657700198.jpeg",
        name: "营火战争",
        type: "卡牌",
        tag: "DBG",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202102/c_6381465193161_90788595.jpg",
        name: "王权骰铸",
        type: "美式",
        tag: "骰子",
        players: [2,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/pic41768391533137095111.png",
        name: "水果忍者",
        type: "聚会",
        tag: "",
        players: [3,4,5,6],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202209/c_0523917042661_4ee3e0df.jpg",
        name: "诡镇奇谈",
        type: "卡牌/美式",
        tag: "LCG",
        players: [1,2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/20191026/1573701567163912538.jpeg",
        name: "漫威群英传",
        type: "卡牌",
        tag: "lcg",
        players: [1,2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/6401534328314933.jpeg",
        name: "大搜查",
        type: "解谜",
        tag: "桌面密室逃脱",
        players: [1,2,3,4,5,6],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/pic981505_md1508167489877.jpg",
        name: "UNO",
        type: "聚会/亲子",
        tag: "",
        players: [2,3,4,5,6,7,8,9,10],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/20190414/1557111080756400517.png",
        name: "UNO翻转牌",
        type: "聚会/亲子",
        tag: "",
        players: [2,3,4,5,6,7,8,9,10],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202401/c_8215596674071_3d295600.jpg",
        name: "爆炸猫：灾祸菜谱",
        type: "聚会/卡牌",
        tag: "",
        players: [2,3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202401/c_6907196674071_36694504.jpg",
        name: "僵尸猫",
        type: "聚会/卡牌",
        tag: "",
        players: [2,3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/pic31195141508165276650.jpg",
        name: "荣耀之城",
        type: "卡牌",
        tag: "",
        players: [2,3,4,5,6,7,8],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202406/c_2704504849171_75f02047.jpg",
        name: "大创造时代",
        type: "德式",
        tag: "",
        players: [1,2,3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202508/c_5412731936571_3bae8fde.jpg",
        name: "盖亚计划",
        type: "德式",
        tag: "",
        players: [1,2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202406/c_6750403049171_0e8b4ce9.jpg",
        name: "璀璨宝石：宝可梦",
        type: "抽象",
        tag: "",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202206/c_4282415806561_7346cf1b.jpg",
        name: "璀璨宝石-对决",
        type: "抽象",
        tag: "",
        players: [2],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202305/c_2837184524861_531eb2b6.jpg",
        name: "谍报风云",
        type: "合作",
        tag: "",
        players: [2,4,6],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202305/c_4085735514861_96fb4584.jpg",
        name: "夺心魔虫",
        type: "卡牌",
        tag: "",
        players: [2,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202409/c_5114463026271_bcf383ff.jpg",
        name: "炸弹克星",
        type: "解谜",
        tag: "",
        players: [2,3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202410/c_3977528558271_54da79bb.jpg",
        name: "7连翻",
        type: "卡牌",
        tag: "",
        players: [3,4,5,6,7,8,9,10,11,12,13,14],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202608/c_1178401827871_449bb22e.jpg",
        name: "7连翻：冤家路窄",
        type: "卡牌",
        tag: "",
        players: [3,4,5,6,7,8,9,10,11,12,13,14],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202606/c_2558551750871_c9ef8d98.jpg",
        name: "自然和弦",
        type: "德式",
        tag: "",
        players: [1,2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/20190913/1568688164853097251.png",
        name: "铁路环游",
        type: "德式",
        tag: "",
        players: [2,3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202312/c_0165469923071_ee361bfb.jpg",
        name: "天合小队",
        type: "解谜/美式",
        tag: "",
        players: [2],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/20200602/1591086522274_2776232a.jpg",
        name: "拉斯维加斯豪华版",
        type: "聚会",
        tag: "",
        players: [2,3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202108/c_4077120578261_7cf71a94.jpg",
        name: "方舟动物园",
        type: "德式",
        tag: "",
        players: [1,2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/catan%20skewed1505918289226.jpg",
        name: "卡坦岛",
        type: "德式",
        tag: "",
        players: [3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/pic3458036_md1508140008402.png",
        name: "现代艺术",
        type: "德式",
        tag: "",
        players: [3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202009/c_3890214921061_137755f9.jpg",
        name: "沙丘：帝国",
        type: "德式",
        tag: "",
        players: [1,2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202106/c_9404574833261_c2b6b325.jpg",
        name: "花砖物语",
        type: "抽象",
        tag: "",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202103/c_6650105216161_4da68dad.jpg",
        name: "骇浪求生",
        type: "聚会",
        tag: "",
        players: [4,5,6,7,8],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202408/c_7978764934271_764721b5.jpg",
        name: "狂野骆驼",
        type: "聚会",
        tag: "",
        players: [3,4,5,6,7,8],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202308/c_8821001123961_400d6684.jpg",
        name: "屁者先知",
        type: "聚会/亲子",
        tag: "",
        players: [5,6,7,8,9,10],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/20190515/1557974561119688786.jpg",
        name: "情书",
        type: "卡牌",
        tag: "",
        players: [2,3,4,5,6],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202502/c_2132556829371_c230f580.jpg",
        name: "诡镇奇谈：洛夫克拉夫特情书",
        type: "卡牌",
        tag: "",
        players: [2,3,4,5,6],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/TB2ksLAAYxmpuFjSZJiXXXauVXa_!!528725041507649110627.png",
        name: "四季物语",
        type: "卡牌/德式",
        tag: "",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202010/c_8016148032061_8023e5c6.jpg",
        name: "诺丁汉警长",
        type: "聚会",
        tag: "",
        players: [3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202008/c_5486217676951_3a0cad9f.jpg",
        name: "七大奇迹",
        type: "德式",
        tag: "",
        players: [2,3,4,5,6,7],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202311/c_7427466801071_1dd0d05b.jpg",
        name: "无间风云",
        type: "卡牌/聚会",
        tag: "",
        players: [4,5,6,7,8],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202407/c_9334877510271_6727bdfc.jpg",
        name: "纸牌帮",
        type: "卡牌",
        tag: "合作德州扑克",
        players: [3,4,5,6],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202312/c_3616744651071_a211092b.jpg",
        name: "瞎掰王1",
        type: "聚会",
        tag: "",
        players: [3,4,5,6,7,8,9],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202508/c_9438484816571_165aa1d0.jpg",
        name: "瞎掰王2",
        type: "聚会",
        tag: "",
        players: [3,4,5,6,7,8,9],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202501/c_9904539316371_fdf01d93.jpg",
        name: "森森不息",
        type: "卡牌",
        tag: "",
        players: [2,3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202602/c_4276851740771_c13d17bf.jpg",
        name: "出神入画",
        type: "聚会",
        tag: "",
        players: [2,3,4,5,6,7,8],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202008/c_5878630066951_e76d866b.jpg",
        name: "阿瓦隆",
        type: "聚会",
        tag: "类狼人杀",
        players: [5,6,7,8,9,10],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202008/c_9795575207951_f42c2253.jpg",
        name: "亚瑟传奇",
        type: "聚会",
        tag: "类狼人杀",
        players: [4,5,6,7,8,9,10],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202412/c_0321454083371_1844e88a.jpg",
        name: "拼布艺术",
        type: "抽象/亲子",
        tag: "",
        players: [2],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/20191010/1571276150677438973.jpg",
        name: "印加宝藏",
        type: "聚会",
        tag: "",
        players: [3,4,5,6,7,8],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202309/c_9440810624961_68a6f999.jpg",
        name: "只言片语：迪士尼",
        type: "聚会/亲子",
        tag: "",
        players: [3,4,5,6],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202308/c_0201935490961_b2c61574.jpg",
        name: "展翅翱翔",
        type: "德式",
        tag: "",
        players: [1,2,3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/TB2v9clgCBjpuFjSsplXXa5MVXa_!!10718918871508156454487.jpg",
        name: "小白世纪",
        type: "卡牌/聚会",
        tag: "",
        players: [3,4,5,6],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202109/c_9748797671361_4f7e199c.jpg",
        name: "爆珠发明",
        type: "德式/聚会",
        tag: "",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/WechatIMG3461527693572623.jpeg",
        name: "奶酪大盗",
        type: "聚会",
        tag: "",
        players: [4,5,6,7,8],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202505/c_3387248358471_bc8e6ea9.jpg",
        name: "指尖平衡",
        type: "聚会/亲子",
        tag: "",
        players: [2,3,4,5,6,7,8],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/20200428/1588046003485_d905c374.jpg",
        name: "马尼拉",
        type: "德式",
        tag: "",
        players: [3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/TB1U6_rau7JL1JjSZFKXXc4KXXa_!!0-item_pic1508155179813.jpg",
        name: "村庄",
        type: "德式",
        tag: "",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202303/c_4425352677761_6ef494e9.jpg",
        name: "巫师飞塔",
        type: "聚会",
        tag: "",
        players: [2,3,4,5,6],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202406/c_7505422528171_8cef138d.jpg",
        name: "请留遗言",
        type: "聚会",
        tag: "",
        players: [4,5,6,7,8,9,10,11,12],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/pic2286966_lg1508523222128.jpg",
        name: "拉密",
        type: "抽象",
        tag: "麻将",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/20191010/1571041820511689218.png",
        name: "哈铃果铃",
        type: "聚会/亲子",
        tag: "德国心脏病",
        players: [2,3,4,5,6],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202106/c_9750719173261_e5538921.jpg",
        name: "瘟疫危机",
        type: "美式",
        tag: "",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202206/c_2498565955561_3eb4c682.jpg",
        name: "染·钟楼谜团",
        type: "聚会",
        tag: "血染钟楼、狼人杀",
        players: [5,6,7,8,9,10,11,12,13],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202606/c_5481381750871_27411b57.jpg",
        name: "胡闹运动会",
        type: "聚会/亲子",
        tag: "技能飞行棋",
        players: [2,3,4,5,6],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202211/c_1318415257661_0fb8016d.jpg",
        name: "星际探险队",
        type: "卡牌",
        tag: "吃墩",
        players: [2,3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/20190414/1555740932975755880.jpg",
        name: "CABO",
        type: "卡牌",
        tag: "",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202511/c_7663897932671_92749997.jpg",
        name: "同房异梦",
        type: "聚会",
        tag: "",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202112/c_1779039669361_197e3be1.jpg",
        name: "以鹅传鹅",
        type: "卡牌/亲子",
        tag: "无实物表演",
        players: [5,6,7,8,9],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202406/c_9984737858171_82dfdc06.jpg",
        name: "暗藏杀机",
        type: "扮演",
        tag: "",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202402/c_5415368207071_7280d3dc.jpg",
        name: "我是大老板",
        type: "聚会",
        tag: "",
        players: [3,4,5,6],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202006/1592303732045_908a587e.jpg",
        name: "害你在心口难开",
        type: "聚会/亲子",
        tag: "不要做挑战",
        players: [3,4,5,6,7,8],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/pic2209219_md1516945339474.jpg",
        name: "出包魔法师",
        type: "聚会",
        tag: "",
        players: [2,3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202607/c_9096982705871_195e73b1.jpg",
        name: "时序谜局",
        type: "卡牌/解谜",
        tag: "",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/TB12XnMIXXXXXbdXVXXXXXXXXXX_!!0-item_pic1535303581760.jpg",
        name: "一夜终极狼人",
        type: "聚会",
        tag: "狼人杀",
        players: [3,4,5,6,7,8,9,10],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202408/c_1219551533271_9f3df96b.jpg",
        name: "绝命少女",
        type: "美式",
        tag: "",
        players: [1],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/pic22201821534767532614.jpg",
        name: "作弊飞蛾",
        type: "卡牌/聚会",
        tag: "",
        players: [3,4,5],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202608/c_2617559727871_0f3b87ed.jpg",
        name: "再加一把",
        type: "聚会",
        tag: "",
        players: [2,3,4,5,6,7,8,9,10],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202607/c_1617742853871_fc34d0c0.jpg",
        name: "铁道狂潮",
        type: "德式",
        tag: "",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202103/c_9438216715161_b02d156a.jpg",
        name: "克苏鲁的呼唤",
        type: "扮演",
        tag: "",
        players: [1,2,3,4,5,6,7,8,9],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/202206/c_5938539956561_103d30f0.jpg",
        name: "噤声寻宝记",
        type: "美式",
        tag: "",
        players: [2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202402/c_5282042938071_c7adbac8.jpg",
        name: "守誓者",
        type: "美式",
        tag: "",
        players: [1,2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/pic42640871540542176407.jpg",
        name: "魔法骑士",
        type: "美式",
        tag: "",
        players: [1,2,3,4],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgZh/202512/c_1414909484671_c6bac53b.jpg",
        name: "克苏鲁战争",
        type: "美式",
        tag: "",
        players: [2,3,4,5,6],
    },
    {
        cover: "https://oss.gstonegames.com/static/image/gameimgEh/20190414/1556323511739424825.jpg",
        name: "米达拉战记：无妄之灾",
        type: "美式",
        tag: "",
        players: [1,2,3,4],
    },
];