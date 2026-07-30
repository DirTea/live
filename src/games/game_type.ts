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
    players: string;
}

export function GameListApi(pageNum: number, pageSize: number) {
    return new Promise((resolve) => {
        // 模拟网络请求延迟 (例如 300ms - 800ms)
        const delay = Math.floor(Math.random() * 500) + 300;
        setTimeout(() => {
            // 计算数据的起始索引
            const start = (pageNum - 1) * pageSize;
            const end = start + pageSize;
            // 使用 slice 方法进行数组截取，实现分页
            const data = GameList.slice(start, end);
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
        cover: "https://cf.geekdo-images.com/peUgu3A20LRmAXAMyDQfpQ__imagepage/img/Ywa8dN-gGRhgo_uVSR_mMGoRQMM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8621446.jpg",
        name: "卡卡颂",
        type: "抽象",
        tag: "板块放置",
        players: "2-5",
    },
    {
        cover: "https://cf.geekdo-images.com/bCCX600ngCCFpJNO2JCLSA__itemrep/img/XQ2_Uj0QweA4xlIfI5igMhYh-H4=/fit-in/246x300/filters:strip_icc()/pic1599343.jpg",
        name: "三国杀",
        type: "聚会/卡牌",
        tag: "",
        players: "2-10",
    },
    {
        cover: "https://cf.geekdo-images.com/bjbdxOdCX4vDzQ0_SS7LWA__itemrep/img/wY_Uxc141xL5vPLnFEBLQ-DPckk=/fit-in/246x300/filters:strip_icc()/pic6163563.jpg",
        name: "营火战争",
        type: "卡牌",
        tag: "dbg",
        players: "2-4",
    },
    {
        cover: "https://cf.geekdo-images.com/crZpafHHxItU5EWPCgNbPA__imagepage@2x/img/uOYmstY2YDzlCjP0L8wihKHK3lg=/fit-in/1800x1200/filters:strip_icc()/pic3962955.jpg",
        name: "王权骰铸",
        type: "美式",
        tag: "骰子",
        players: "2或4",
    },
    {
        cover: "https://cf.geekdo-images.com/LC3O6e0gcQuUEagtFs33hA__itemrep/img/GisxMFJ4-lHxEfmdXBt4t2Zl-hY=/fit-in/246x300/filters:strip_icc()/pic4176839.png",
        name: "水果忍者",
        type: "聚会",
        tag: "",
        players: "3-6",
    },
    {
        cover: "https://cf.geekdo-images.com/B5F5ulz0UivNgrI9Ky0euA__itemrep/img/b7HiKWaGQKCuG-aU21-Izxt1ym4=/fit-in/246x300/filters:strip_icc()/pic3122349.jpg",
        name: "诡镇奇谈",
        type: "卡牌/美式",
        tag: "lcg",
        players: "1-4",
    },
    {
        cover: "https://cf.geekdo-images.com/kRvUgYiaOq07kC67ZK5UoQ__imagepage/img/ifaw5M-Z2eEFir0ImkbNzxMbaOk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4900321.jpg",
        name: "漫威群英传",
        type: "卡牌",
        tag: "lcg",
        players: "1-4",
    },
    {
        cover: "https://cf.geekdo-images.com/h8K_nTemD6bmydT0akChZw__imagepage/img/4w_aLYoabNRqaesr17lCmMBc-t8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3348790.jpg",
        name: "大搜查",
        type: "解谜",
        tag: "",
        players: "1-6",
    },
    {
        cover: "https://cf.geekdo-images.com/-DHiHBBSnvaLu0Do8CIykQ__imagepage/img/597k5SluqBtv5Jy2M8mz70yGhkw=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8204165.jpg",
        name: "uno",
        type: "聚会/亲子",
        tag: "4-12",
        players: "",
    },
    {
        cover: "https://cf.geekdo-images.com/gbw-3lRou0Xa3hXhGmxLyw__imagepage/img/EyPYJOfmShEDCY16f0jpPUNRVL0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6305890.jpg",
        name: "爆炸猫",
        type: "聚会",
        tag: "",
        players: "2-5",
    },
    {
        cover: "https://cf.geekdo-images.com/sHd0jkZZLDgixHjAXtn7kA__imagepage/img/BAc4tOD4A_Bu2QJ2lR_B_zmelto=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3119514.jpg",
        name: "荣耀之城",
        type: "卡牌",
        tag: "",
        players: "2-8",
    },
    {
        cover: "https://cf.geekdo-images.com/D1vrcFEptCEoD8Z6s_iRfw__imagepage/img/-6EVqYvH8lzrJH4NSZ6w4tItkvM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7430993.jpg",
        name: "大创造时代",
        type: "德式",
        tag: "",
        players: "1-5",
    },
    {
        cover: "https://cf.geekdo-images.com/hGWFm3hbMlCDsfCsauOQ4g__imagepage/img/l0fffSKu6wscHhUNGWRh-0n-bqQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5375625.png",
        name: "盖亚计划",
        type: "德式",
        tag: "",
        players: "1-4",
    },
    {
        cover: "https://cf.geekdo-images.com/o6HpiLCBBFvc7XvBv7DEig__itemrep/img/brjr40TGmxy2aQXCYKCPunCzafo=/fit-in/246x300/filters:strip_icc()/pic7902371.jpg",
        name: "璀璨宝石-宝可梦版",
        type: "抽象",
        tag: "",
        players: "2-4",
    },
    {
        cover: "https://cf.geekdo-images.com/V1PyFDPNFY4bJFgreLPxmQ__imagepage/img/GnAJH3QrhGYdNvE_s5ZL5Lip3W8=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6929347.jpg",
        name: "璀璨宝石-对决",
        type: "抽象",
        tag: "",
        players: "2",
    },
    {
        cover: "https://cf.geekdo-images.com/hHZWXnUTMYDd_KTAM6Jwlw__itemrep/img/9Kx83YFeiA7DeSjMxyfmv6-cGC8=/fit-in/246x300/filters:strip_icc()/pic3759421.jpg",
        name: "谍报风云",
        type: "合作",
        tag: "",
        players: "2或4或6",
    },
    {
        cover: "https://cf.geekdo-images.com/b8gl6w-BqUVgBURdyFcFZg__imagepage/img/1bm7Jt411uPetbOBMAWzvkRyPKE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7646386.png",
        name: "夺心魔虫",
        type: "卡牌",
        tag: "",
        players: "2或4",
    },
    {
        cover: "https://cf.geekdo-images.com/HpGXIlt5i6T-0jbiQRReOg__itemrep/img/bchqf37dvkXSJKVlkVECbMZZb2g=/fit-in/246x300/filters:strip_icc()/pic8303080.png",
        name: "炸弹克星",
        type: "解谜",
        tag: "",
        players: "2-5",
    },
    {
        cover: "https://cf.geekdo-images.com/YrQxEB9Ef0kQorRApzG5vQ__imagepage@2x/img/Xy_ZoW5Mt_jTI3FGBloCEXWm9v4=/fit-in/1800x1200/filters:strip_icc()/pic8780246.jpg",
        name: "flip7",
        type: "卡牌",
        tag: "",
        players: "3-14",
    },
    {
        cover: "https://cf.geekdo-images.com/A_XP2_VN3ugyqPhezowB_w__itemrep@2x/img/eRw-ai-NVnY8tRnRrM-IGbHgW4M=/fit-in/492x600/filters:strip_icc()/pic8026369.png",
        name: "自然和弦",
        type: "德式",
        tag: "",
        players: "1-4",
    },
    {
        cover: "https://cf.geekdo-images.com/EQJZDO1Jq8KL-HxmWLwL-Q__itemrep/img/h7OOSrsNnMRZPpIk3H6uJWA9tHI=/fit-in/246x300/filters:strip_icc()/pic9580918.jpg",
        name: "铁路环游",
        type: "德式",
        tag: "",
        players: "2-5",
    },
    {
        cover: "https://cf.geekdo-images.com/uXMeQzNenHb3zK7Hoa6b2w__itemrep/img/oaw-LYEIaB20e79Y568JgyHZ5NQ=/fit-in/246x300/filters:strip_icc()/pic7398904.jpg",
        name: "天合小队",
        type: "解谜/美式",
        tag: "",
        players: "2",
    },
    {
        cover: "https://cf.geekdo-images.com/4BDkj75aMObXau8L08jX5w__itemrep/img/LuorquPsFW0nwV4QusizX7BFDEI=/fit-in/246x300/filters:strip_icc()/pic4673729.jpg",
        name: "拉斯维加斯豪华版",
        type: "聚会",
        tag: "",
        players: "2-5",
    },
    {
        cover: "https://cf.geekdo-images.com/SoU8p28Sk1s8MSvoM4N8pQ__itemrep@2x/img/Pr8zSaMINlALYjR0agud0_EFESs=/fit-in/492x600/filters:strip_icc()/pic6293412.jpg",
        name: "方舟动物园",
        type: "德式",
        tag: "",
        players: "1-4",
    },
    {
        cover: "https://cf.geekdo-images.com/0XODRpReiZBFUffEcqT5-Q__itemrep/img/6Jf5G-bSvdOIMUSwxsJfZXl29B8=/fit-in/246x300/filters:strip_icc()/pic9156909.png",
        name: "卡坦岛",
        type: "德式",
        tag: "",
        players: "3-4",
    },
    {
        cover: "https://cf.geekdo-images.com/wLto-xaabHwKQe_Bc4iD1Q__imagepage/img/zLttqNoD_8ukBx9b2boUAHWTMec=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3458036.png",
        name: "现代艺术",
        type: "德式",
        tag: "",
        players: "3-5",
    },
    {
        cover: "https://cf.geekdo-images.com/PhjygpWSo-0labGrPBMyyg__imagepage/img/BjM3LyahJ4IQ2ov5MkzkHatbmUc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5666597.jpg",
        name: "沙丘：帝国",
        type: "德式",
        tag: "",
        players: "1-4",
    },
    {
        cover: "https://cf.geekdo-images.com/aPSHJO0d0XOpQR5X-wJonw__imagepage/img/q4uWd2nXGeEkKDR8Cc3NhXG9PEU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6973671.png",
        name: "花砖物语",
        type: "抽象",
        tag: "",
        players: "2-4",
    },
    {
        cover: "https://cf.geekdo-images.com/3TqZjiMveplU3C6D-zWu4g__imagepage/img/B2-T2Xpyg61TG2hmYzHrdC59_YE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic236080.jpg",
        name: "骇浪求生",
        type: "聚会",
        tag: "",
        players: "4-8",
    },
    {
        cover: "https://cf.geekdo-images.com/qnR2V3YsW963_JaVznBjsw__imagepage/img/MQFGpkRRlGiCxBmdP16-MT7Gmbo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8584959.jpg",
        name: "狂野骆驼",
        type: "聚会",
        tag: "",
        players: "3-8",
    },
    {
        cover: "https://cf.geekdo-images.com/sidzgoNPFTvA40M7zk1dvw__imagepage/img/AjYeTeGgqUy-vwfI45Q-dYd1h9Y=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8357736.jpg",
        name: "屁者先知",
        type: "聚会/亲子",
        tag: "",
        players: "5-10",
    },
    {
        cover: "https://cf.geekdo-images.com/V7WQjhAh0AatPXTYOrXtCQ__imagepage/img/aY1TC_Wu1Lp8suwWdcTx8_hU-6U=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4766499.png",
        name: "情书",
        type: "卡牌",
        tag: "",
        players: "2-6",
    },
    {
        cover: "https://cf.geekdo-images.com/awmZ9rYy-hTgea6Vdp_OoQ__imagepage/img/g9s85mrGdcUm5AWfRSH1GdD0Bts=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1299390.jpg",
        name: "四季物语",
        type: "卡牌/德式",
        tag: "",
        players: "2-4",
    },
    {
        cover: "https://cf.geekdo-images.com/VHiB06XHhK6G3vxH9QAwHw__imagepage/img/rJ1mfLg77SyGbCyymQGNZmUJx6U=/fit-in/900x600/filters:no_upscale():strip_icc()/pic5169196.jpg",
        name: "诺丁汉警长",
        type: "聚会",
        tag: "",
        players: "3-5",
    },
    {
        cover: "https://cf.geekdo-images.com/35h9Za_JvMMMtx_92kT0Jg__imagepage/img/WKlTys0Dc3F6x9r05Fwyvs82tz4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7149798.jpg",
        name: "七大奇迹",
        type: "德式",
        tag: "",
        players: "2-7",
    },
    {
        cover: "https://cf.geekdo-images.com/4EVpaxECrqdKYVtBJnFLeA__imagepage/img/Qd7bW4_33ouq4zDzsg8QEtTUOd4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3008714.png",
        name: "无间风云",
        type: "卡牌/聚会",
        tag: "",
        players: "4-8",
    },
    {
        cover: "https://cf.geekdo-images.com/ydwU0FMlRVa6wt8tOu1tgg__imagepage/img/1zLgij6G4YHvLLL7S61OqTh_1IQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7962719.jpg",
        name: "纸牌帮",
        type: "卡牌",
        tag: "",
        players: "3-6",
    },
    {
        cover: "https://cf.geekdo-images.com/urA2NJb-qjEyqarRjZ7HmA__imagepage/img/83_r4uKyUX5UD32n5NiKXc4Ob-Q=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7431018.jpg",
        name: "瞎掰王1",
        type: "聚会",
        tag: "",
        players: "3-9",
    },
    {
        cover: "https://cf.geekdo-images.com/urA2NJb-qjEyqarRjZ7HmA__imagepage/img/83_r4uKyUX5UD32n5NiKXc4Ob-Q=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7431018.jpg",
        name: "瞎掰王2",
        type: "聚会",
        tag: "",
        players: "3-9",
    },
    {
        cover: "https://cf.geekdo-images.com/08bC8NviSTNc4Zvur4pueA__imagepage/img/2L2NC1klY9Hiwa0xqImGgLNzrTM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7578350.jpg",
        name: "森森不息",
        type: "卡牌",
        tag: "",
        players: "2-5",
    },
    {
        cover: "https://cf.geekdo-images.com/iSXZ4NR52el43WXTTnUgOA__imagepage/img/zhTm8lNYdTSXvo3bv7yEu19rrxo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic9435212.png",
        name: "出神入画",
        type: "聚会",
        tag: "",
        players: "2-8",
    },
    {
        cover: "https://cf.geekdo-images.com/LPa6rsGcv8S0-OeNjCOAEQ__imagepage/img/3xVP5JSdSfFbo2c1nnZS5xxGhfI=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1398895.jpg",
        name: "阿瓦隆",
        type: "聚会",
        tag: "",
        players: "5-10",
    },
    {
        cover: "https://cf.geekdo-images.com/xNSaIHCKr_cc7Q2rQSSJPQ__itemrep/img/RvOH_6Uwg6joioIwji5vDCrsMu4=/fit-in/246x300/filters:strip_icc()/pic9273518.jpg",
        name: "拼布艺术",
        type: "抽象/亲子",
        tag: "",
        players: "2",
    },
    {
        cover: "https://cf.geekdo-images.com/G7gR2mJRPosZmGahXFKFXA__imagepage/img/x972Y_T8opHHxt5eBMuIy0ecxio=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7924444.jpg",
        name: "印加宝藏",
        type: "聚会",
        tag: "",
        players: "3-8",
    },
    {
        cover: "https://cf.geekdo-images.com/BhkW--GOy1cSYH5b7jmSag__itemrep/img/g5eLNUD6dhva6UGlzt3v4x1jx8E=/fit-in/246x300/filters:strip_icc()/pic7403703.png",
        name: "只言片语：迪士尼",
        type: "聚会/亲子",
        tag: "",
        players: "3-6",
    },
    {
        cover: "https://cf.geekdo-images.com/yLZJCVLlIx4c7eJEWUNJ7w__itemrep/img/DR7181wU4sHT6gn6Q1XccpPxNHg=/fit-in/246x300/filters:strip_icc()/pic4458123.jpg",
        name: "展翅翱翔",
        type: "德式",
        tag: "",
        players: "1-5",
    },
    {
        cover: "https://cf.geekdo-images.com/J-ts3MW0UhDzs621TR6cog__imagepage/img/HJAhCcz8QJbVAYYQI71uYLsKkRM=/fit-in/900x600/filters:no_upscale():strip_icc()/pic1871016.jpg",
        name: "小白世纪",
        type: "卡牌/聚会",
        tag: "",
        players: "3-6",
    },
    {
        cover: "https://cf.geekdo-images.com/zin82Hg4MXck86t8fzbsdA__imagepage/img/NDB1PCAmapf28Im6HC63UbgwIsU=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4169718.png",
        name: "爆珠发明",
        type: "德式/聚会",
        tag: "",
        players: "2-4",
    },
    {
        cover: "https://cf.geekdo-images.com/nj9Q18hT16Ij-XdLUkgprg__imagepage/img/jCJuZDhPoGUQtyWAJ2xJpz5rxiQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6951766.jpg",
        name: "奶酪大盗",
        type: "聚会",
        tag: "",
        players: "4-8",
    },
    {
        cover: "https://cf.geekdo-images.com/VmcYNOUlo5gS-XUa1tTKPA__imagepage/img/_6aoQtQpJucfMuGg558SX1uOGC0=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8338650.png",
        name: "指尖平衡",
        type: "聚会/亲子",
        tag: "",
        players: "2-8",
    },
    {
        cover: "https://cf.geekdo-images.com/dU0cm4_NP8QiQqiXP9Jclw__imagepage/img/5-ET9_Hu9lqXxcfv2vQi-WKWR7w=/fit-in/900x600/filters:no_upscale():strip_icc()/pic902372.jpg",
        name: "马尼拉",
        type: "德式",
        tag: "",
        players: "3-5",
    },
    {
        cover: "https://cf.geekdo-images.com/5FBIAvZi3Sw8dvmfwwJTjg__imagepage/img/FDa_unt0cz22oYwTc5L57JpkIlE=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2760568.jpg",
        name: "村庄",
        type: "德式",
        tag: "",
        players: "2-4",
    },
    {
        cover: "https://cf.geekdo-images.com/602eY-xlgkaL3gtyZ7QVVQ__imagepage/img/iyj95jsI_noGGkCLWSHO33gEyhk=/fit-in/900x600/filters:no_upscale():strip_icc()/pic7347437.jpg",
        name: "巫师飞塔",
        type: "聚会",
        tag: "",
        players: "2-6",
    },
    {
        cover: "https://cf.geekdo-images.com/9XYonpjdfiy0EJ66hNE1Lg__imagepage/img/BUYXAbSkziIK7gcqe6gTPztnLFc=/fit-in/900x600/filters:no_upscale():strip_icc()/pic8835351.jpg",
        name: "请留遗言",
        type: "聚会",
        tag: "",
        players: "4-12",
    },
    {
        cover: "https://cf.geekdo-images.com/LeaLDlTTmeN639MfuflcMw__imagepage/img/nm9BnHZQxVMeixgeb1cdhLEx_eo=/fit-in/900x600/filters:no_upscale():strip_icc()/pic2286966.jpg",
        name: "拉密",
        type: "抽象",
        tag: "麻将",
        players: "2-4",
    },
    {
        cover: "https://cf.geekdo-images.com/dezQ4YjF03lZVxTdI-UJYw__imagepage/img/k9KlpcnG4DPLQy8BrrrfHvBOiG4=/fit-in/900x600/filters:no_upscale():strip_icc()/pic6863204.jpg",
        name: "守誓者",
        type: "美式",
        tag: "",
        players: "1-4",
    },
    {
        cover: "https://cf.geekdo-images.com/jgsT5y5qKlOR08CuHG7xfw__imagepage/img/xjfPk9twXQ8Smg90oC23nSChXpY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4411189.jpg",
        name: "魔法骑士",
        type: "美式",
        tag: "",
        players: "1-4",
    },
    {
        cover: "https://cf.geekdo-images.com/o7tGTkPv322I-qCHuisP3g__imagepage/img/e_pKFdW63GJSLTCEQqssAw5ijAY=/fit-in/900x600/filters:no_upscale():strip_icc()/pic9616343.png",
        name: "克苏鲁战争",
        type: "美式",
        tag: "",
        players: "2-6",
    },
    {
        cover: "https://cf.geekdo-images.com/hRuD1y5BxdNpssgBqamS0A__imagepage/img/3YIXet5DK8WN9Wur_YwMY0jqsCQ=/fit-in/900x600/filters:no_upscale():strip_icc()/pic4595897.jpg",
        name: "米拉达战记：无妄之灾",
        type: "美式",
        tag: "",
        players: "1-4",
    },
];