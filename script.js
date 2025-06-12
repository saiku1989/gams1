// 为游戏生成预览图片的辅助函数
function generatePreviews(gameName, thumbnail) {
    return [
        thumbnail,
        `https://via.placeholder.com/800x600/1e40af/ffffff?text=${encodeURIComponent(gameName + ' - Screenshot 1')}`,
        `https://via.placeholder.com/800x600/3b82f6/ffffff?text=${encodeURIComponent(gameName + ' - Screenshot 2')}`,
        `https://via.placeholder.com/800x600/059669/ffffff?text=${encodeURIComponent(gameName + ' - Screenshot 3')}`
    ];
}

// 游戏数据
const games = [
    {
        id: 1,
        name: {
            zh: "僵尸围城：建造生存",
            en: "Zombie Horde: Build & Survive",
            fr: "Zombie Horde: Construire et Survivre"
        },
        description: {
            zh: "在僵尸末日中建造基地，收集资源，生存下去！",
            en: "Build your base, collect resources, and survive the zombie apocalypse!",
            fr: "Construisez votre base, collectez des ressources et survivez à l'apocalypse zombie!"
        },
        category: "survival",
        iframe: "https://www.crazygames.com/embed/zombie-horde-build-survive",
        thumbnail: "https://images.crazygames.com/games/zombie-horde-build-survive/cover-1654594312958.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/zombie-horde-build-survive/cover-1654594312958.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://images.crazygames.com/userUploaded/game-screenshots/zombie-horde-build-survive/zombie-horde-1.webp",
            "https://images.crazygames.com/userUploaded/game-screenshots/zombie-horde-build-survive/zombie-horde-2.webp",
            "https://images.crazygames.com/userUploaded/game-screenshots/zombie-horde-build-survive/zombie-horde-3.webp"
        ]
    },
    {
        id: 2,
        name: {
            zh: "贪吃蛇大作战",
            en: "Snake vs Block",
            fr: "Serpent contre Bloc"
        },
        description: {
            zh: "经典贪吃蛇游戏的现代版本，挑战你的反应速度！",
            en: "A modern twist on the classic snake game, challenge your reflexes!",
            fr: "Une version moderne du jeu de serpent classique, défiez vos réflexes!"
        },
        category: "casual",
        iframe: "https://www.crazygames.com/embed/snake-vs-block",
        thumbnail: "https://images.crazygames.com/games/snake-vs-block/cover-1654594319442.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/snake-vs-block/cover-1654594319442.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=Snake+vs+Block+Screenshot+1",
            "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Snake+vs+Block+Screenshot+2",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=Snake+vs+Block+Screenshot+3"
        ]
    },
    {
        id: 3,
        name: {
            zh: "末日卡车",
            en: "Apocalypse Truck",
            fr: "Camion de l'Apocalypse"
        },
        description: {
            zh: "驾驶重型卡车在末日废土中疾驰，躲避障碍物！",
            en: "Drive heavy trucks through post-apocalyptic wasteland, avoid obstacles!",
            fr: "Conduisez des camions lourds à travers un désert post-apocalyptique, évitez les obstacles!"
        },
        category: "racing",
        iframe: "https://cloud.onlinegames.io/games/2021/1/apocalypse-truck/index-og.html",
        thumbnail: "https://img.onlinegames.io/game/2021/1/apocalypse-truck/256x256.webp",
        previews: generatePreviews("Apocalypse Truck", "https://img.onlinegames.io/game/2021/1/apocalypse-truck/256x256.webp")
    },
    {
        id: 4,
        name: {
            zh: "英雄突击：塔防",
            en: "Hero Rush: Tower Defense",
            fr: "Hero Rush: Défense de Tour"
        },
        description: {
            zh: "策略塔防游戏，建造防御塔阻止敌人入侵！",
            en: "Strategic tower defense game, build towers to stop enemy invasion!",
            fr: "Jeu de défense de tour stratégique, construisez des tours pour arrêter l'invasion ennemie!"
        },
        category: "strategy",
        iframe: "https://www.onlinegames.io/games/2023/unity/hero-rush-tower-defense/index.html",
        thumbnail: "https://img.onlinegames.io/game/2023/unity/hero-rush-tower-defense/256x256.webp",
        previews: generatePreviews("Hero Rush Tower Defense", "https://img.onlinegames.io/game/2023/unity/hero-rush-tower-defense/256x256.webp")
    },
    {
        id: 5,
        name: {
            zh: "体素世界",
            en: "Voxel World",
            fr: "Monde Voxel"
        },
        description: {
            zh: "3D沙盒建造游戏，发挥创意建造你的世界！",
            en: "3D sandbox building game, unleash your creativity to build your world!",
            fr: "Jeu de construction sandbox 3D, libérez votre créativité pour construire votre monde!"
        },
        category: "survival",
        iframe: "https://cloud.onlinegames.io/games/2025/unity/voxel-world/index-og.html",
        thumbnail: "https://img.onlinegames.io/game/2025/unity/voxel-world/256x256.webp",
        previews: generatePreviews("Voxel World", "https://img.onlinegames.io/game/2025/unity/voxel-world/256x256.webp")
    },
    {
        id: 6,
        name: {
            zh: "农场岛屿",
            en: "Farming Island",
            fr: "Île Agricole"
        },
        description: {
            zh: "经营你的农场，种植作物，饲养动物，建造农业帝国！",
            en: "Manage your farm, grow crops, raise animals, build an agricultural empire!",
            fr: "Gérez votre ferme, cultivez des cultures, élevez des animaux, construisez un empire agricole!"
        },
        category: "casual",
        iframe: "https://cloud.onlinegames.io/games/2025/unity/farming-island/index-og.html",
        thumbnail: "https://img.onlinegames.io/game/2025/unity/farming-island/256x256.webp",
        previews: generatePreviews("Farming Island", "https://img.onlinegames.io/game/2025/unity/farming-island/256x256.webp")
    },
    {
        id: 7,
        name: {
            zh: "蛋糕合成师",
            en: "Piece of Cake: Merge & Bake",
            fr: "Piece of Cake: Fusionner et Cuire"
        },
        description: {
            zh: "合并相同的蛋糕材料，制作美味的糕点！",
            en: "Merge identical cake ingredients to create delicious pastries!",
            fr: "Fusionnez des ingrédients de gâteau identiques pour créer de délicieuses pâtisseries!"
        },
        category: "casual",
        iframe: "https://www.crazygames.com/embed/piece-of-cake-merge-and-bake",
        thumbnail: "https://images.crazygames.com/games/piece-of-cake-merge-and-bake/cover-1654594321173.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/piece-of-cake-merge-and-bake/cover-1654594321173.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=Piece+of+Cake+Screenshot+1",
            "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Piece+of+Cake+Screenshot+2",
            "https://via.placeholder.com/800x600/059669/ffffff?text=Piece+of+Cake+Screenshot+3"
        ]
    },
    {
        id: 8,
        name: {
            zh: "怪物幸存者",
            en: "Monster Survivors",
            fr: "Survivants de Monstres"
        },
        description: {
            zh: "在怪物群中生存，升级装备，成为最后的幸存者！",
            en: "Survive among monster hordes, upgrade equipment, become the last survivor!",
            fr: "Survivez parmi les hordes de monstres, améliorez l'équipement, devenez le dernier survivant!"
        },
        category: "action",
        iframe: "https://cloud.onlinegames.io/games/2025/unity/monster-survivors/index-og.html",
        thumbnail: "https://img.onlinegames.io/game/2025/unity/monster-survivors/256x256.webp",
        previews: generatePreviews("Monster Survivors", "https://img.onlinegames.io/game/2025/unity/monster-survivors/256x256.webp")
    },
    {
        id: 9,
        name: {
            zh: "报童竞跑",
            en: "Paper Boy Race Running Game",
            fr: "Jeu de Course du Livreur de Journaux"
        },
        description: {
            zh: "扮演报童在街道上奔跑送报纸，躲避障碍物！",
            en: "Play as a paperboy running through streets delivering newspapers, avoid obstacles!",
            fr: "Jouez en tant que livreur de journaux courant dans les rues pour livrer des journaux, évitez les obstacles!"
        },
        category: "racing",
        iframe: "https://www.crazygames.com/embed/paper-boy-race-running-game",
        thumbnail: "https://images.crazygames.com/games/paper-boy-race-running-game/cover-1654594325442.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/paper-boy-race-running-game/cover-1654594325442.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=Paper+Boy+Race+Screenshot+1",
            "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Paper+Boy+Race+Screenshot+2",
            "https://via.placeholder.com/800x600/059669/ffffff?text=Paper+Boy+Race+Screenshot+3"
        ]
    },
    {
        id: 10,
        name: {
            zh: "太空僵尸2",
            en: "Zombie Space Episode 2",
            fr: "Espace Zombie Épisode 2"
        },
        description: {
            zh: "在太空中与僵尸战斗，使用各种武器消灭敌人！",
            en: "Fight zombies in space, use various weapons to eliminate enemies!",
            fr: "Combattez les zombies dans l'espace, utilisez diverses armes pour éliminer les ennemis!"
        },
        category: "shooter",
        iframe: "https://www.crazygames.com/embed/zombie-space-episode-2-ajp",
        thumbnail: "https://images.crazygames.com/games/zombie-space-episode-2-ajp/cover-1654594327773.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/zombie-space-episode-2-ajp/cover-1654594327773.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=Zombie+Space+Screenshot+1",
            "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Zombie+Space+Screenshot+2",
            "https://via.placeholder.com/800x600/059669/ffffff?text=Zombie+Space+Screenshot+3"
        ]
    },
    {
        id: 11,
        name: {
            zh: "钢琴瓷砖",
            en: "Catch Tiles Piano Game",
            fr: "Jeu de Piano Catch Tiles"
        },
        description: {
            zh: "跟随节拍点击钢琴瓷砖，演奏美妙音乐！",
            en: "Follow the beat and tap piano tiles to play beautiful music!",
            fr: "Suivez le rythme et tapez sur les tuiles de piano pour jouer de la belle musique!"
        },
        category: "casual",
        iframe: "https://www.crazygames.com/embed/catch-tiles-piano-game",
        thumbnail: "https://images.crazygames.com/games/catch-tiles-piano-game/cover-1654594329115.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/catch-tiles-piano-game/cover-1654594329115.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=Piano+Game+Screenshot+1",
            "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Piano+Game+Screenshot+2",
            "https://via.placeholder.com/800x600/059669/ffffff?text=Piano+Game+Screenshot+3"
        ]
    },
    {
        id: 12,
        name: {
            zh: "方块合成战争",
            en: "Cubecraft Merge Battle",
            fr: "Bataille de Fusion Cubecraft"
        },
        description: {
            zh: "合并方块单位，建造军队，征服战场！",
            en: "Merge cube units, build armies, conquer the battlefield!",
            fr: "Fusionnez les unités cube, construisez des armées, conquérez le champ de bataille!"
        },
        category: "strategy",
        iframe: "https://www.crazygames.com/embed/cubecraft-merge-battle-uxw",
        thumbnail: "https://images.crazygames.com/games/cubecraft-merge-battle-uxw/cover-1654594330887.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/cubecraft-merge-battle-uxw/cover-1654594330887.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=Cubecraft+Merge+Screenshot+1",
            "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Cubecraft+Merge+Screenshot+2",
            "https://via.placeholder.com/800x600/059669/ffffff?text=Cubecraft+Merge+Screenshot+3"
        ]
    },
    {
        id: 13,
        name: {
            zh: "极限赛车",
            en: "Racing Limits",
            fr: "Limites de Course"
        },
        description: {
            zh: "高速赛车游戏，在交通中穿梭，挑战极限速度！",
            en: "High-speed racing game, weave through traffic, challenge speed limits!",
            fr: "Jeu de course à grande vitesse, naviguez dans le trafic, défiez les limites de vitesse!"
        },
        category: "racing",
        iframe: "https://www.crazygames.com/embed/racing-limits",
        thumbnail: "https://images.crazygames.com/games/racing-limits/cover-1654594332445.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/racing-limits/cover-1654594332445.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=Racing+Limits+Screenshot+1",
            "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Racing+Limits+Screenshot+2",
            "https://via.placeholder.com/800x600/059669/ffffff?text=Racing+Limits+Screenshot+3"
        ]
    },
    {
        id: 14,
        name: {
            zh: "双人合作",
            en: "Duo",
            fr: "Duo"
        },
        description: {
            zh: "双人合作解谜游戏，需要配合才能过关！",
            en: "Two-player cooperative puzzle game, teamwork required to pass levels!",
            fr: "Jeu de puzzle coopératif à deux joueurs, le travail d'équipe est nécessaire pour passer les niveaux!"
        },
        category: "casual",
        iframe: "https://www.crazygames.com/embed/duo-kjn",
        thumbnail: "https://images.crazygames.com/games/duo-kjn/cover-1654594334177.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/duo-kjn/cover-1654594334177.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=Duo+Game+Screenshot+1",
            "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Duo+Game+Screenshot+2",
            "https://via.placeholder.com/800x600/059669/ffffff?text=Duo+Game+Screenshot+3"
        ]
    },
    {
        id: 15,
        name: {
            zh: "数字大师：火柴人游戏",
            en: "Count Masters: Stickman Games",
            fr: "Count Masters: Jeux de Bonhomme Allumette"
        },
        description: {
            zh: "控制火柴人军队，通过各种关卡挑战！",
            en: "Control stickman army, overcome various level challenges!",
            fr: "Contrôlez l'armée de bonhommes allumettes, surmontez divers défis de niveau!"
        },
        category: "action",
        iframe: "https://www.crazygames.com/embed/count-masters-stickman-games",
        thumbnail: "https://images.crazygames.com/games/count-masters-stickman-games/cover-1654594335942.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/count-masters-stickman-games/cover-1654594335942.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=Count+Masters+Screenshot+1",
            "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Count+Masters+Screenshot+2",
            "https://via.placeholder.com/800x600/059669/ffffff?text=Count+Masters+Screenshot+3"
        ]
    },
    {
        id: 16,
        name: {
            zh: "自动枪英雄",
            en: "Autogun Heroes",
            fr: "Héros Autogun"
        },
        description: {
            zh: "自动射击游戏，升级武器，消灭所有敌人！",
            en: "Auto-shooting game, upgrade weapons, eliminate all enemies!",
            fr: "Jeu de tir automatique, améliorez les armes, éliminez tous les ennemis!"
        },
        category: "shooter",
        iframe: "https://www.crazygames.com/embed/autogun-heroes-izk",
        thumbnail: "https://images.crazygames.com/games/autogun-heroes-izk/cover-1654594337715.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/autogun-heroes-izk/cover-1654594337715.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=Autogun+Heroes+Screenshot+1",
            "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Autogun+Heroes+Screenshot+2",
            "https://via.placeholder.com/800x600/059669/ffffff?text=Autogun+Heroes+Screenshot+3"
        ]
    },
    {
        id: 17,
        name: {
            zh: "世界Z防御：僵尸防御",
            en: "World Z Defense: Zombie Defense",
            fr: "Défense Monde Z: Défense Zombie"
        },
        description: {
            zh: "建造防御工事，保护基地免受僵尸群攻击！",
            en: "Build defenses, protect your base from zombie hordes attack!",
            fr: "Construisez des défenses, protégez votre base contre l'attaque des hordes de zombies!"
        },
        category: "strategy",
        iframe: "https://www.crazygames.com/embed/world-z-defense---zombie-defense",
        thumbnail: "https://images.crazygames.com/games/world-z-defense---zombie-defense/cover-1654594339488.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/world-z-defense---zombie-defense/cover-1654594339488.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=World+Z+Defense+Screenshot+1",
            "https://via.placeholder.com/800x600/3b82f6/ffffff?text=World+Z+Defense+Screenshot+2",
            "https://via.placeholder.com/800x600/059669/ffffff?text=World+Z+Defense+Screenshot+3"
        ]
    },
    {
        id: 18,
        name: {
            zh: "拳击大师",
            en: "Punch Max",
            fr: "Punch Max"
        },
        description: {
            zh: "拳击格斗游戏，训练你的拳击技巧，成为冠军！",
            en: "Boxing fighting game, train your boxing skills, become champion!",
            fr: "Jeu de combat de boxe, entraînez vos compétences de boxe, devenez champion!"
        },
        category: "action",
        iframe: "https://www.crazygames.com/embed/punch-max",
        thumbnail: "https://images.crazygames.com/games/punch-max/cover-1654594341260.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/punch-max/cover-1654594341260.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=Punch+Max+Screenshot+1",
            "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Punch+Max+Screenshot+2",
            "https://via.placeholder.com/800x600/059669/ffffff?text=Punch+Max+Screenshot+3"
        ]
    },
    {
        id: 19,
        name: {
            zh: "暗影总统：光明会",
            en: "Shadow President: Illuminati",
            fr: "Président de l'Ombre: Illuminati"
        },
        description: {
            zh: "策略模拟游戏，管理国家，做出重要政治决策！",
            en: "Strategy simulation game, manage the country, make important political decisions!",
            fr: "Jeu de simulation stratégique, gérez le pays, prenez d'importantes décisions politiques!"
        },
        category: "strategy",
        iframe: "https://www.crazygames.com/embed/shadow-president-illuminati",
        thumbnail: "https://images.crazygames.com/games/shadow-president-illuminati/cover-1654594343032.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop",
        previews: [
            "https://images.crazygames.com/games/shadow-president-illuminati/cover-1654594343032.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            "https://via.placeholder.com/800x600/1e40af/ffffff?text=Shadow+President+Screenshot+1",
            "https://via.placeholder.com/800x600/3b82f6/ffffff?text=Shadow+President+Screenshot+2",
            "https://via.placeholder.com/800x600/059669/ffffff?text=Shadow+President+Screenshot+3"
        ]
    },
    {
        id: 20,
        name: {
            zh: "体素世界2",
            en: "Voxel World 2",
            fr: "Monde Voxel 2"
        },
        description: {
            zh: "升级版3D沙盒建造游戏，更多功能和创意工具！",
            en: "Enhanced 3D sandbox building game with more features and creative tools!",
            fr: "Jeu de construction sandbox 3D amélioré avec plus de fonctionnalités et d'outils créatifs!"
        },
        category: "survival",
        iframe: "https://cloud.onlinegames.io/games/2025/unity/voxel-world/index-og.html",
        thumbnail: "https://img.onlinegames.io/game/2025/unity/voxel-world/256x256.webp",
        previews: generatePreviews("Voxel World 2", "https://img.onlinegames.io/game/2025/unity/voxel-world/256x256.webp")
    }
];

// 多语言翻译
const translations = {
    zh: {
        'ad-title': '🎮 体验最佳游戏乐趣 - 广告位招租 🎮',
        'ad-desc': '联系我们投放广告，获得更多曝光机会！',
        'categories': '游戏分类',
        'all-games': '全部游戏',
        'action': '动作',
        'strategy': '策略',
        'casual': '休闲',
        'racing': '竞速',
        'survival': '生存',
        'shooter': '射击',
        'fullscreen': '全屏',
        'back': '返回',
        'comments': '玩家留言板',
        'submit-comment': '发表留言',
        'about-us': '关于我们',
        'about-desc': 'ChillWork致力于为全球玩家提供最优质的免费在线游戏体验。我们精心挑选各类游戏，确保每一款都能为您带来无限乐趣。',
        'game-categories': '游戏分类',
        'action-games': '动作游戏',
        'strategy-games': '策略游戏',
        'casual-games': '休闲游戏',
        'racing-games': '竞速游戏',
        'survival-games': '生存游戏',
        'contact-us': '联系我们',
        'rights': '保留所有权利。所有游戏内容版权归原作者所有。',
        'play-now': '立即游戏',
        'no-games': '未找到匹配的游戏',
        'preview': '预览',
        'close': '关闭',
        'previous': '上一张',
        'next': '下一张'
    },
    en: {
        'ad-title': '🎮 Experience the Best Gaming Fun - Ad Space Available 🎮',
        'ad-desc': 'Contact us to place ads and get more exposure opportunities!',
        'categories': 'Game Categories',
        'all-games': 'All Games',
        'action': 'Action',
        'strategy': 'Strategy',
        'casual': 'Casual',
        'racing': 'Racing',
        'survival': 'Survival',
        'shooter': 'Shooter',
        'fullscreen': 'Fullscreen',
        'back': 'Back',
        'comments': 'Player Comments',
        'submit-comment': 'Submit Comment',
        'about-us': 'About Us',
        'about-desc': 'ChillWork is dedicated to providing players worldwide with the highest quality free online gaming experience. We carefully select games to ensure each one brings you unlimited fun.',
        'game-categories': 'Game Categories',
        'action-games': 'Action Games',
        'strategy-games': 'Strategy Games',
        'casual-games': 'Casual Games',
        'racing-games': 'Racing Games',
        'survival-games': 'Survival Games',
        'contact-us': 'Contact Us',
        'rights': 'All rights reserved. All game content copyrights belong to their original authors.',
        'play-now': 'Play Now',
        'no-games': 'No matching games found',
        'preview': 'Preview',
        'close': 'Close',
        'previous': 'Previous',
        'next': 'Next'
    },
    fr: {
        'ad-title': '🎮 Découvrez le Meilleur Plaisir de Jeu - Espace Publicitaire Disponible 🎮',
        'ad-desc': 'Contactez-nous pour placer des publicités et obtenir plus d\'opportunités d\'exposition!',
        'categories': 'Catégories de Jeux',
        'all-games': 'Tous les Jeux',
        'action': 'Action',
        'strategy': 'Stratégie',
        'casual': 'Décontracté',
        'racing': 'Course',
        'survival': 'Survie',
        'shooter': 'Tir',
        'fullscreen': 'Plein Écran',
        'back': 'Retour',
        'comments': 'Commentaires des Joueurs',
        'submit-comment': 'Soumettre Commentaire',
        'about-us': 'À Propos',
        'about-desc': 'ChillWork se consacre à fournir aux joueurs du monde entier la meilleure expérience de jeu en ligne gratuite. Nous sélectionnons soigneusement les jeux pour garantir que chacun vous apporte un plaisir illimité.',
        'game-categories': 'Catégories de Jeux',
        'action-games': 'Jeux d\'Action',
        'strategy-games': 'Jeux de Stratégie',
        'casual-games': 'Jeux Décontractés',
        'racing-games': 'Jeux de Course',
        'survival-games': 'Jeux de Survie',
        'contact-us': 'Nous Contacter',
        'rights': 'Tous droits réservés. Tous les droits d\'auteur du contenu des jeux appartiennent à leurs auteurs originaux.',
        'play-now': 'Jouer Maintenant',
        'no-games': 'Aucun jeu correspondant trouvé',
        'preview': 'Aperçu',
        'close': 'Fermer',
        'previous': 'Précédent',
        'next': 'Suivant'
    }
};

// 全局变量
let currentLanguage = 'en';
let currentCategory = 'all';
let filteredGames = games;
let isFullscreen = false;
let currentPreviewGame = null;
let currentPreviewIndex = 0;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    addDefaultPreviews();
    setupEventListeners();
    renderGameList();
    updateLanguage();
}

function setupEventListeners() {
    // 语言切换
    document.getElementById('languageSelect').addEventListener('change', function(e) {
        currentLanguage = e.target.value;
        updateLanguage();
        renderGameList();
    });

    // 搜索功能
    document.getElementById('searchInput').addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        filterGames(searchTerm);
    });

    // 分类过滤
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            currentCategory = this.dataset.category;
            updateCategoryButtons();
            filterGamesByCategory();
        });
    });

    // 游戏播放控制
    document.getElementById('fullscreenBtn').addEventListener('click', toggleFullscreen);
    document.getElementById('backToListBtn').addEventListener('click', backToGameList);

    // 预览功能
    document.getElementById('closePreview').addEventListener('click', hidePreview);
    document.getElementById('prevImage').addEventListener('click', showPrevImage);
    document.getElementById('nextImage').addEventListener('click', showNextImage);
    document.getElementById('playFromPreview').addEventListener('click', playFromPreview);
    document.getElementById('fullscreenFromPreview').addEventListener('click', fullscreenFromPreview);

    // 留言功能
    document.getElementById('submitComment').addEventListener('click', submitComment);

    // ESC键退出全屏或预览
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (currentPreviewGame) {
                hidePreview();
            } else if (isFullscreen) {
                exitFullscreen();
            }
        }
    });

    // 预览模态框背景点击关闭
    document.getElementById('previewModal').addEventListener('click', function(e) {
        if (e.target === this) {
            hidePreview();
        }
    });
}

function renderGameList() {
    const gameListContainer = document.getElementById('gameList');
    gameListContainer.innerHTML = '';

    if (filteredGames.length === 0) {
        gameListContainer.innerHTML = `
            <div class="col-span-full text-center py-8">
                <p class="text-gray-400 text-lg">${translations[currentLanguage]['no-games']}</p>
            </div>
        `;
        return;
    }

    filteredGames.forEach(game => {
        const gameCard = createGameCard(game);
        gameListContainer.appendChild(gameCard);
    });
}

function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card bg-gray-800 rounded-lg overflow-hidden';
    
    card.innerHTML = `
        <div class="relative">
            <img src="${game.thumbnail || 'https://via.placeholder.com/300x200?text=Game'}" 
                 alt="${game.name[currentLanguage]}" 
                 class="w-full h-48 object-cover cursor-pointer"
                 onclick="showPreview(${game.id})">
            <div class="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
                ${translations[currentLanguage][game.category]}
            </div>
            <div class="absolute top-2 left-2">
                <button class="bg-black bg-opacity-70 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-90"
                        onclick="showPreview(${game.id})" title="预览">
                    <i class="fas fa-eye text-sm"></i>
                </button>
            </div>
        </div>
        <div class="p-4">
            <h3 class="text-lg font-bold mb-2 text-white">${game.name[currentLanguage]}</h3>
            <p class="text-gray-300 text-sm mb-3 line-clamp-2">${game.description[currentLanguage]}</p>
            <div class="flex gap-2">
                <button class="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition-colors"
                        onclick="loadGame(${game.id})">
                    <i class="fas fa-play mr-1"></i>
                    ${translations[currentLanguage]['play-now']}
                </button>
                <button class="bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 rounded transition-colors"
                        onclick="showPreview(${game.id})" title="预览">
                    <i class="fas fa-images"></i>
                </button>
            </div>
        </div>
    `;

    return card;
}

function loadGame(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    document.getElementById('gameList').classList.add('hidden');
    document.getElementById('gamePlayer').classList.remove('hidden');
    
    document.getElementById('currentGameTitle').textContent = game.name[currentLanguage];
    document.getElementById('gameDescription').textContent = game.description[currentLanguage];
    
    const iframe = document.getElementById('gameIframe');
    iframe.src = game.iframe;
    
    // 追踪游戏播放
    trackGamePlay(game.id);
    
    // 更新页面标题
    updatePageTitle(game.name[currentLanguage]);
    
    // 滚动到游戏区域
    document.getElementById('gameArea').scrollIntoView({ behavior: 'smooth' });
}

function backToGameList() {
    document.getElementById('gamePlayer').classList.add('hidden');
    document.getElementById('gameList').classList.remove('hidden');
    
    // 停止游戏
    const iframe = document.getElementById('gameIframe');
    iframe.src = '';
    
    // 恢复页面标题
    updatePageTitle();
}

function toggleFullscreen() {
    if (!isFullscreen) {
        enterFullscreen();
    } else {
        exitFullscreen();
    }
}

function enterFullscreen() {
    const iframe = document.getElementById('gameIframe');
    iframe.classList.add('fullscreen-iframe');
    isFullscreen = true;
    
    // 更新按钮图标
    document.getElementById('fullscreenBtn').innerHTML = '<i class="fas fa-compress"></i> <span data-i18n="exit-fullscreen">退出全屏</span>';
}

function exitFullscreen() {
    const iframe = document.getElementById('gameIframe');
    iframe.classList.remove('fullscreen-iframe');
    isFullscreen = false;
    
    // 更新按钮图标
    document.getElementById('fullscreenBtn').innerHTML = '<i class="fas fa-expand"></i> <span data-i18n="fullscreen">全屏</span>';
}

function filterGames(searchTerm) {
    if (!searchTerm) {
        filterGamesByCategory();
        return;
    }

    filteredGames = games.filter(game => {
        const name = game.name[currentLanguage].toLowerCase();
        const description = game.description[currentLanguage].toLowerCase();
        return name.includes(searchTerm) || description.includes(searchTerm);
    });

    if (currentCategory !== 'all') {
        filteredGames = filteredGames.filter(game => game.category === currentCategory);
    }

    renderGameList();
}

function filterGamesByCategory() {
    if (currentCategory === 'all') {
        filteredGames = games;
    } else {
        filteredGames = games.filter(game => game.category === currentCategory);
    }
    
    // 应用搜索过滤
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm) {
        filteredGames = filteredGames.filter(game => {
            const name = game.name[currentLanguage].toLowerCase();
            const description = game.description[currentLanguage].toLowerCase();
            return name.includes(searchTerm) || description.includes(searchTerm);
        });
    }
    
    renderGameList();
}

function updateCategoryButtons() {
    document.querySelectorAll('.category-btn').forEach(btn => {
        if (btn.dataset.category === currentCategory) {
            btn.className = 'category-btn bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded';
        } else {
            btn.className = 'category-btn bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded';
        }
    });
}

function updateLanguage() {
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });

    // 更新搜索框占位符
    const searchInput = document.getElementById('searchInput');
    const placeholders = {
        en: 'Search games...',
        zh: '搜索游戏...',
        fr: 'Rechercher des jeux...'
    };
    searchInput.placeholder = placeholders[currentLanguage];

    // 更新留言框占位符
    const commentName = document.getElementById('commentName');
    const commentText = document.getElementById('commentText');
    const commentEmail = document.getElementById('commentEmail');
    const namePlaceholders = {
        en: 'Nickname',
        zh: '昵称',
        fr: 'Pseudo'
    };
    const textPlaceholders = {
        en: 'Write about your gaming experience...',
        zh: '写下你的游戏体验...',
        fr: 'Écrivez sur votre expérience de jeu...'
    };
    const emailPlaceholders = {
        en: 'Email (optional)',
        zh: '邮箱（可选）',
        fr: 'Email (optionnel)'
    };
    commentName.placeholder = namePlaceholders[currentLanguage];
    commentText.placeholder = textPlaceholders[currentLanguage];
    commentEmail.placeholder = emailPlaceholders[currentLanguage];
}

function submitComment() {
    const name = document.getElementById('commentName').value.trim();
    const email = document.getElementById('commentEmail').value.trim();
    const text = document.getElementById('commentText').value.trim();

    if (!name || !text) {
        const messages = {
            en: 'Please fill in nickname and comment!',
            zh: '请填写昵称和留言内容！',
            fr: 'Veuillez remplir le pseudo et le commentaire!'
        };
        alert(messages[currentLanguage]);
        return;
    }

    // 创建新留言
    const commentDiv = document.createElement('div');
    commentDiv.className = 'bg-gray-800 rounded-lg p-4 mb-4';
    
    const now = new Date();
    const dateStr = now.toLocaleString(currentLanguage === 'zh' ? 'zh-CN' : currentLanguage === 'en' ? 'en-US' : 'fr-FR');
    
    commentDiv.innerHTML = `
        <div class="flex items-center justify-between mb-2">
            <strong class="text-blue-400">${name}</strong>
            <span class="text-gray-500 text-sm">${dateStr}</span>
        </div>
        <p class="text-gray-300">${text}</p>
    `;

    // 添加到留言列表顶部
    const commentsList = document.getElementById('commentsList');
    commentsList.insertBefore(commentDiv, commentsList.firstChild);

    // 清空表单
    document.getElementById('commentName').value = '';
    document.getElementById('commentEmail').value = '';
    document.getElementById('commentText').value = '';

    // 成功提示
    const successMessages = {
        en: 'Comment submitted successfully!',
        zh: '留言发表成功！',
        fr: 'Commentaire soumis avec succès!'
    };
    alert(successMessages[currentLanguage]);
}

// 页面可见性API - 当页面不可见时暂停游戏音频
document.addEventListener('visibilitychange', function() {
    const iframe = document.getElementById('gameIframe');
    if (document.hidden && iframe.src) {
        // 页面隐藏时可以发送消息给iframe暂停游戏
        // 这取决于具体的游戏是否支持
    }
});

// 添加键盘快捷键
document.addEventListener('keydown', function(e) {
    // F11 全屏切换
    if (e.key === 'F11') {
        e.preventDefault();
        toggleFullscreen();
    }
    
    // Ctrl+F 搜索
    if (e.ctrlKey && e.key === 'f') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
});

// 游戏访问统计（简单的本地存储）
function trackGamePlay(gameId) {
    const stats = JSON.parse(localStorage.getItem('gameStats') || '{}');
    stats[gameId] = (stats[gameId] || 0) + 1;
    localStorage.setItem('gameStats', JSON.stringify(stats));
}

// 获取热门游戏
function getPopularGames() {
    const stats = JSON.parse(localStorage.getItem('gameStats') || '{}');
    return games.sort((a, b) => (stats[b.id] || 0) - (stats[a.id] || 0));
}

// SEO优化：动态更新页面标题
function updatePageTitle(gameName) {
    if (gameName) {
        document.title = `${gameName} - ChillWork Gaming Center`;
    } else {
        document.title = 'ChillWork - Free Online Gaming Center';
    }
}

// 预览功能相关函数
function showPreview(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;

    currentPreviewGame = game;
    currentPreviewIndex = 0;

    // 更新预览信息
    document.getElementById('previewGameTitle').textContent = game.name[currentLanguage];
    document.getElementById('previewGameCategory').textContent = translations[currentLanguage][game.category];
    document.getElementById('previewGameDescription').textContent = game.description[currentLanguage];

    // 生成预览图片（如果没有则使用默认图片）
    const previews = game.previews || generatePreviews(game.name.en, game.thumbnail);
    
    // 更新图片容器
    updatePreviewImages(previews);
    
    // 显示预览模态框
    document.getElementById('previewModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // 防止背景滚动
}

function hidePreview() {
    document.getElementById('previewModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
    currentPreviewGame = null;
    currentPreviewIndex = 0;
}

function updatePreviewImages(previews) {
    const container = document.getElementById('previewImageContainer');
    const dotsContainer = document.getElementById('previewDots');
    
    // 清空容器
    container.innerHTML = '';
    dotsContainer.innerHTML = '';

    // 添加图片
    previews.forEach((preview, index) => {
        const img = document.createElement('img');
        img.src = preview;
        img.alt = `Preview ${index + 1}`;
        img.className = `preview-image w-full h-96 object-cover ${index === 0 ? '' : 'hidden'}`;
        container.appendChild(img);

        // 添加指示器点
        const dot = document.createElement('div');
        dot.className = `preview-dot ${index === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => showPreviewImage(index));
        dotsContainer.appendChild(dot);
    });

    // 更新导航按钮可见性
    const prevBtn = document.getElementById('prevImage');
    const nextBtn = document.getElementById('nextImage');
    
    if (previews.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
        nextBtn.style.display = 'block';
    }
}

function showPreviewImage(index) {
    if (!currentPreviewGame) return;
    
    const previews = currentPreviewGame.previews || generatePreviews(currentPreviewGame.name.en, currentPreviewGame.thumbnail);
    const images = document.querySelectorAll('.preview-image');
    const dots = document.querySelectorAll('.preview-dot');

    // 隐藏当前图片
    if (images[currentPreviewIndex]) {
        images[currentPreviewIndex].classList.add('hidden');
    }
    if (dots[currentPreviewIndex]) {
        dots[currentPreviewIndex].classList.remove('active');
    }

    // 显示新图片
    currentPreviewIndex = index;
    if (images[currentPreviewIndex]) {
        images[currentPreviewIndex].classList.remove('hidden');
    }
    if (dots[currentPreviewIndex]) {
        dots[currentPreviewIndex].classList.add('active');
    }
}

function showPrevImage() {
    if (!currentPreviewGame) return;
    
    const previews = currentPreviewGame.previews || generatePreviews(currentPreviewGame.name.en, currentPreviewGame.thumbnail);
    const prevIndex = currentPreviewIndex > 0 ? currentPreviewIndex - 1 : previews.length - 1;
    showPreviewImage(prevIndex);
}

function showNextImage() {
    if (!currentPreviewGame) return;
    
    const previews = currentPreviewGame.previews || generatePreviews(currentPreviewGame.name.en, currentPreviewGame.thumbnail);
    const nextIndex = currentPreviewIndex < previews.length - 1 ? currentPreviewIndex + 1 : 0;
    showPreviewImage(nextIndex);
}

function playFromPreview() {
    if (!currentPreviewGame) return;
    
    hidePreview();
    loadGame(currentPreviewGame.id);
}

function fullscreenFromPreview() {
    if (!currentPreviewGame) return;
    
    hidePreview();
    loadGame(currentPreviewGame.id);
    // 稍等一下让游戏加载，然后切换到全屏
    setTimeout(() => {
        if (!isFullscreen) {
            toggleFullscreen();
        }
    }, 1000);
}

// 为所有游戏添加默认预览图片
function addDefaultPreviews() {
    games.forEach(game => {
        if (!game.previews) {
            game.previews = generatePreviews(game.name.en, game.thumbnail);
        }
    });
}

// 使预览功能在全局范围内可用
window.showPreview = showPreview;
window.loadGame = loadGame;