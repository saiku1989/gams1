// 游戏数据配置
const gameData = [
    {
        id: 1,
        name: 'Zombie Horde Build Survive',
        category: 'action',
        description: '在末日世界中建造基地，抵御僵尸潮，生存下去！',
        instructions: [
            '使用鼠标点击移动角色',
            '收集资源建造防御设施',
            '击败僵尸获得经验和物品',
            '升级武器和装备'
        ],
        url: 'https://www.crazygames.com/embed/zombie-horde-build-survive',
        type: 'iframe',
        featured: true,
        icon: 'fas fa-zombie'
    },
    {
        id: 2,
        name: 'Snake vs Block',
        category: 'puzzle',
        description: '经典贪吃蛇与方块碰撞的创新玩法，挑战你的反应能力！',
        instructions: [
            '控制蛇移动吃数字',
            '避免撞到墙壁和障碍物',
            '数字会增加蛇的长度',
            '挑战更高的分数'
        ],
        url: 'https://www.crazygames.com/embed/snake-vs-block',
        type: 'iframe',
        featured: true,
        icon: 'fas fa-gamepad'
    },
    {
        id: 3,
        name: 'Apocalypse Truck',
        category: 'racing',
        description: '驾驶重型卡车在末日废土上疾驰，碾压一切障碍！',
        instructions: [
            '使用方向键或WASD控制卡车',
            '收集燃料和升级物品',
            '碾压僵尸和障碍物',
            '到达终点完成关卡'
        ],
        url: 'https://cloud.onlinegames.io/games/2021/1/apocalypse-truck/index-og.html',
        type: 'url',
        featured: false,
        icon: 'fas fa-truck'
    },
    {
        id: 4,
        name: 'Hero Rush Tower Defense',
        category: 'strategy',
        description: '策略塔防游戏，部署英雄和塔防，抵御敌人入侵！',
        instructions: [
            '在路径旁放置防御塔',
            '选择合适的英雄角色',
            '升级塔防和英雄技能',
            '阻止敌人到达终点'
        ],
        url: 'https://www.onlinegames.io/games/2023/unity/hero-rush-tower-defense/index.html',
        type: 'url',
        featured: true,
        icon: 'fas fa-chess-rook'
    },
    {
        id: 5,
        name: 'Voxel World',
        category: 'rpg',
        description: '像素风格的开放世界建造游戏，创造属于你的世界！',
        instructions: [
            '使用鼠标放置和破坏方块',
            'WASD移动，空格跳跃',
            '收集材料制作物品',
            '建造你的梦想世界'
        ],
        url: 'https://cloud.onlinegames.io/games/2025/unity/voxel-world/index-og.html',
        type: 'url',
        featured: true,
        icon: 'fas fa-cubes'
    },
    {
        id: 6,
        name: 'Voxel World 2',
        category: 'rpg',
        description: '像素风格建造游戏的续作，更多内容等你探索！',
        instructions: [
            '使用鼠标放置和破坏方块',
            'WASD移动，空格跳跃',
            '探索新的生物群落',
            '制作更多高级物品'
        ],
        url: 'https://cloud.onlinegames.io/games/2025/unity/voxel-world/index-og.html',
        type: 'url',
        featured: false,
        icon: 'fas fa-cubes'
    },
    {
        id: 7,
        name: 'Farming Island',
        category: 'rpg',
        description: '在岛屿上经营农场，种植作物，饲养动物，建设家园！',
        instructions: [
            '种植各种作物',
            '饲养农场动物',
            '建造和升级建筑',
            '完成任务获得奖励'
        ],
        url: 'https://cloud.onlinegames.io/games/2025/unity/farming-island/index-og.html',
        type: 'url',
        featured: true,
        icon: 'fas fa-seedling'
    },
    {
        id: 8,
        name: 'Piece of Cake Merge and Bake',
        category: 'puzzle',
        description: '合并游戏与烘焙结合，制作美味的蛋糕！',
        instructions: [
            '拖拽相同物品进行合并',
            '制作各种蛋糕和甜点',
            '完成订单获得金币',
            '解锁新的食谱'
        ],
        url: 'https://www.crazygames.com/embed/piece-of-cake-merge-and-bake',
        type: 'iframe',
        featured: false,
        icon: 'fas fa-birthday-cake'
    },
    {
        id: 9,
        name: 'Monster Survivors',
        category: 'action',
        description: '在怪物围攻中生存，升级武器，成为最强生存者！',
        instructions: [
            '自动攻击周围的怪物',
            '收集经验升级技能',
            '选择合适的武器组合',
            '尽可能长时间生存'
        ],
        url: 'https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html',
        type: 'url',
        featured: true,
        icon: 'fas fa-skull'
    },
    {
        id: 10,
        name: 'Paper Boy Race Running Game',
        category: 'racing',
        description: '成为送报小子，在城市中奔跑，避开障碍，完成任务！',
        instructions: [
            '左右滑动避开障碍',
            '收集金币和道具',
            '投递报纸到指定地点',
            '挑战更高的分数'
        ],
        url: 'https://www.crazygames.com/embed/paper-boy-race-running-game',
        type: 'iframe',
        featured: false,
        icon: 'fas fa-running'
    },
    {
        id: 11,
        name: 'Zombie Space Episode 2',
        category: 'action',
        description: '太空中的僵尸危机第二章，更激烈的战斗等着你！',
        instructions: [
            '使用WASD移动角色',
            '鼠标瞄准和射击',
            '收集弹药和医疗包',
            '完成任务目标'
        ],
        url: 'https://www.crazygames.com/embed/zombie-space-episode-2-ajp',
        type: 'iframe',
        featured: false,
        icon: 'fas fa-rocket'
    },
    {
        id: 12,
        name: 'Catch Tiles Piano Game',
        category: 'music',
        description: '音乐节拍游戏，跟随节拍点击琴键，挑战你的音乐感！',
        instructions: [
            '点击下落的音符',
            '跟随音乐节拍',
            '不要错过任何音符',
            '获得完美评分'
        ],
        url: 'https://www.crazygames.com/embed/catch-tiles-piano-game',
        type: 'iframe',
        featured: true,
        icon: 'fas fa-music'
    },
    {
        id: 13,
        name: 'CubeCraft Merge Battle',
        category: 'strategy',
        description: '合并立方体战士，组建强大军队，征服战场！',
        instructions: [
            '拖拽相同单位进行合并',
            '部署军队进行战斗',
            '升级和强化战士',
            '征服所有敌人'
        ],
        url: 'https://www.crazygames.com/embed/cubecraft-merge-battle-uxw',
        type: 'iframe',
        featured: false,
        icon: 'fas fa-chess'
    },
    {
        id: 14,
        name: 'Racing Limits',
        category: 'racing',
        description: '极限赛车游戏，在高速公路上驾驶，挑战速度极限！',
        instructions: [
            '使用方向键控制汽车',
            '在交通中穿梭',
            '避免碰撞事故',
            '挑战最高速度'
        ],
        url: 'https://www.crazygames.com/embed/racing-limits',
        type: 'iframe',
        featured: true,
        icon: 'fas fa-car'
    },
    {
        id: 15,
        name: 'Duo',
        category: 'puzzle',
        description: '双人合作解谜游戏，需要两个角色配合完成挑战！',
        instructions: [
            'WASD控制第一个角色',
            '方向键控制第二个角色',
            '两个角色需要配合',
            '解开所有谜题'
        ],
        url: 'https://www.crazygames.com/embed/duo-kjn',
        type: 'iframe',
        featured: false,
        icon: 'fas fa-users'
    },
    {
        id: 16,
        name: 'Count Masters Stickman Games',
        category: 'action',
        description: '火柴人大军游戏，收集更多战士，击败所有敌人！',
        instructions: [
            '左右移动收集战士',
            '通过数字门增加数量',
            '避开减少数量的障碍',
            '击败终点的敌人'
        ],
        url: 'https://www.crazygames.com/embed/count-masters-stickman-games',
        type: 'iframe',
        featured: false,
        icon: 'fas fa-running'
    },
    {
        id: 17,
        name: 'Autogun Heroes',
        category: 'action',
        description: '自动射击英雄游戏，选择英雄，自动战斗，升级装备！',
        instructions: [
            '选择你的英雄角色',
            '自动攻击敌人',
            '收集装备升级',
            '挑战更强的敌人'
        ],
        url: 'https://www.crazygames.com/embed/autogun-heroes-izk',
        type: 'iframe',
        featured: false,
        icon: 'fas fa-crosshairs'
    },
    {
        id: 18,
        name: 'World Z Defense',
        category: 'strategy',
        description: '僵尸防御策略游戏，建造防线，抵御僵尸大军！',
        instructions: [
            '在路径上放置防御塔',
            '升级塔防武器',
            '使用特殊技能',
            '阻止僵尸到达基地'
        ],
        url: 'https://www.crazygames.com/embed/world-z-defense---zombie-defense',
        type: 'iframe',
        featured: true,
        icon: 'fas fa-shield-alt'
    },
    {
        id: 19,
        name: 'Punch Max',
        category: 'action',
        description: '拳击力量测试游戏，挑战你的反应速度和力量！',
        instructions: [
            '在正确时机点击',
            '积累力量值',
            '达到最大力量',
            '创造最高记录'
        ],
        url: 'https://www.crazygames.com/embed/punch-max',
        type: 'iframe',
        featured: false,
        icon: 'fas fa-fist-raised'
    },
    {
        id: 20,
        name: 'Shadow President Illuminati',
        category: 'strategy',
        description: '成为影子总统，控制世界局势，管理秘密组织！',
        instructions: [
            '做出重要决策',
            '管理资源和人员',
            '影响世界事件',
            '建立你的影响力'
        ],
        url: 'https://www.crazygames.com/embed/shadow-president-illuminati',
        type: 'iframe',
        featured: false,
        icon: 'fas fa-eye'
    }
];

// 游戏分类图标映射
const categoryIcons = {
    'action': 'fas fa-crosshairs',
    'strategy': 'fas fa-chess',
    'racing': 'fas fa-car',
    'puzzle': 'fas fa-puzzle-piece',
    'music': 'fas fa-music',
    'rpg': 'fas fa-dragon'
};

// 获取所有游戏
function getAllGames() {
    return gameData;
}

// 根据分类获取游戏
function getGamesByCategory(category) {
    if (category === 'all') {
        return gameData;
    }
    return gameData.filter(game => game.category === category);
}

// 根据ID获取游戏
function getGameById(id) {
    return gameData.find(game => game.id === parseInt(id));
}

// 获取精选游戏
function getFeaturedGames() {
    return gameData.filter(game => game.featured);
}

// 搜索游戏
function searchGames(query) {
    const searchTerm = query.toLowerCase();
    return gameData.filter(game => 
        game.name.toLowerCase().includes(searchTerm) ||
        game.description.toLowerCase().includes(searchTerm) ||
        game.category.toLowerCase().includes(searchTerm)
    );
}

// 获取游戏分类统计
function getCategoryStats() {
    const stats = {};
    gameData.forEach(game => {
        if (stats[game.category]) {
            stats[game.category]++;
        } else {
            stats[game.category] = 1;
        }
    });
    return stats;
}

// 获取随机游戏
function getRandomGames(count = 5) {
    const shuffled = [...gameData].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// 导出函数供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        gameData,
        categoryIcons,
        getAllGames,
        getGamesByCategory,
        getGameById,
        getFeaturedGames,
        searchGames,
        getCategoryStats,
        getRandomGames
    };
} 