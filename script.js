// 为游戏生成预览图片的辅助函数
function generatePreviews(gameName, thumbnail) {
    return [
        thumbnail,
        generateGameplayScreenshot(gameName + ' - 游戏画面', '#1e40af'),
        generateGameplayScreenshot(gameName + ' - 关卡画面', '#3b82f6'),
        generateGameplayScreenshot(gameName + ' - 成就界面', '#059669')
    ];
}

// 生成游戏画面截图
function generateGameplayScreenshot(text, bgColor = '#1e40af', width = 800, height = 600) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    // 创建游戏风格的背景
    const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height)/2);
    gradient.addColorStop(0, adjustBrightness(bgColor, 20));
    gradient.addColorStop(0.7, bgColor);
    gradient.addColorStop(1, adjustBrightness(bgColor, -30));
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // 添加游戏UI元素
    drawGameUI(ctx, width, height, bgColor);
    
    // 绘制主要内容区域
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(50, 80, width - 100, height - 160);
    
    // 绘制游戏元素
    drawGameElements(ctx, width, height, bgColor);
    
    // 绘制标题
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(text, width / 2, height - 30);
    
    return canvas.toDataURL('image/png');
}

// 绘制游戏UI元素
function drawGameUI(ctx, width, height, bgColor) {
    // 顶部状态栏
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, width, 60);
    
    // 分数显示
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Arial, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('分数: 12,450', 20, 35);
    
    // 生命值
    ctx.textAlign = 'right';
    ctx.fillText('❤️ × 3', width - 20, 35);
    
    // 底部控制栏
    ctx.fillStyle = 'rgba(0, 0, 0, 0.6)';
    ctx.fillRect(0, height - 80, width, 80);
    
    // 控制按钮
    const buttonColor = adjustBrightness(bgColor, 30);
    ctx.fillStyle = buttonColor;
    ctx.fillRect(50, height - 60, 80, 40);
    ctx.fillRect(150, height - 60, 80, 40);
    ctx.fillRect(250, height - 60, 80, 40);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = '14px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('攻击', 90, height - 35);
    ctx.fillText('跳跃', 190, height - 35);
    ctx.fillText('技能', 290, height - 35);
}

// 绘制游戏元素
function drawGameElements(ctx, width, height, bgColor) {
    const centerX = width / 2;
    const centerY = height / 2;
    
    // 绘制游戏角色/物体
    ctx.fillStyle = adjustBrightness(bgColor, 50);
    ctx.beginPath();
    ctx.arc(centerX - 100, centerY, 30, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#ff6b6b';
    ctx.beginPath();
    ctx.arc(centerX + 100, centerY - 50, 25, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = '#4ecdc4';
    ctx.beginPath();
    ctx.arc(centerX + 50, centerY + 80, 20, 0, Math.PI * 2);
    ctx.fill();
    
    // 绘制装饰性元素
    ctx.strokeStyle = adjustBrightness(bgColor, 40);
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.6;
    
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * width, Math.random() * height, Math.random() * 10 + 5, 0, Math.PI * 2);
        ctx.stroke();
    }
    
    ctx.globalAlpha = 1;
}

// 为特定游戏类型生成专门的截图
function generateSpecialGameScreenshot(gameName, gameType, bgColor = '#1e40af') {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
    
    // 根据游戏类型绘制不同的背景和元素
    switch(gameType) {
        case 'racing':
            drawRacingGameScreen(ctx, gameName, bgColor);
            break;
        case 'strategy':
            drawStrategyGameScreen(ctx, gameName, bgColor);
            break;
        case 'survival':
            drawSurvivalGameScreen(ctx, gameName, bgColor);
            break;
        case 'action':
            drawActionGameScreen(ctx, gameName, bgColor);
            break;
        case 'casual':
            drawCasualGameScreen(ctx, gameName, bgColor);
            break;
        case 'shooter':
            drawShooterGameScreen(ctx, gameName, bgColor);
            break;
        default:
            drawDefaultGameScreen(ctx, gameName, bgColor);
    }
    
    return canvas.toDataURL('image/png');
}

// 绘制赛车游戏画面
function drawRacingGameScreen(ctx, gameName, bgColor) {
    const width = 800, height = 600;
    
    // 道路背景
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#87ceeb');
    gradient.addColorStop(0.3, '#4682b4');
    gradient.addColorStop(1, '#2f4f4f');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // 道路
    ctx.fillStyle = '#333333';
    ctx.fillRect(200, 0, 400, height);
    
    // 道路标线
    ctx.fillStyle = '#ffffff';
    for (let y = 0; y < height; y += 60) {
        ctx.fillRect(395, y, 10, 30);
    }
    
    // 赛车
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(350, 400, 100, 60);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(370, 480, 15, 0, Math.PI * 2);
    ctx.arc(430, 480, 15, 0, Math.PI * 2);
    ctx.fill();
    
    // 速度表
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.beginPath();
    ctx.arc(700, 500, 80, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('180', 700, 505);
    ctx.font = '12px Arial';
    ctx.fillText('KM/H', 700, 520);
    
    // 标题
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(gameName, width / 2, 50);
}

// 绘制策略游戏画面
function drawStrategyGameScreen(ctx, gameName, bgColor) {
    const width = 800, height = 600;
    
    // 战场背景
    ctx.fillStyle = '#2d5016';
    ctx.fillRect(0, 0, width, height);
    
    // 网格
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
    ctx.lineWidth = 1;
    for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
    
    // 防御塔
    const towers = [
        {x: 200, y: 200, color: '#4ade80'},
        {x: 400, y: 300, color: '#60a5fa'},
        {x: 600, y: 150, color: '#f87171'}
    ];
    
    towers.forEach(tower => {
        ctx.fillStyle = tower.color;
        ctx.fillRect(tower.x - 20, tower.y - 20, 40, 40);
        ctx.fillStyle = '#000000';
        ctx.fillRect(tower.x - 5, tower.y - 30, 10, 20);
    });
    
    // 敌人路径
    ctx.strokeStyle = '#8b5a2b';
    ctx.lineWidth = 30;
    ctx.beginPath();
    ctx.moveTo(0, 400);
    ctx.lineTo(200, 400);
    ctx.lineTo(200, 200);
    ctx.lineTo(600, 200);
    ctx.lineTo(600, 500);
    ctx.lineTo(800, 500);
    ctx.stroke();
    
    // 资源显示
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(10, 10, 200, 60);
    ctx.fillStyle = '#ffd700';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('💰 金币: 1,250', 20, 35);
    ctx.fillText('⚡ 能量: 85/100', 20, 55);
    
    // 标题
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(gameName, width / 2, height - 30);
}

// 绘制生存游戏画面
function drawSurvivalGameScreen(ctx, gameName, bgColor) {
    const width = 800, height = 600;
    
    // 荒野背景
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#4a5568');
    gradient.addColorStop(0.5, '#2d3748');
    gradient.addColorStop(1, '#1a202c');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // 地面
    ctx.fillStyle = '#8b7355';
    ctx.fillRect(0, height - 100, width, 100);
    
    // 建筑物/基地
    ctx.fillStyle = '#654321';
    ctx.fillRect(300, 350, 200, 150);
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(320, 370, 50, 80);
    ctx.fillRect(430, 370, 50, 80);
    
    // 资源
    ctx.fillStyle = '#228b22';
    ctx.beginPath();
    ctx.arc(150, 450, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#8b4513';
    ctx.fillRect(145, 450, 10, 30);
    
    // 生存状态栏
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(10, 10, 300, 80);
    ctx.fillStyle = '#ff4444';
    ctx.font = 'bold 14px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('❤️ 生命值: 85/100', 20, 30);
    ctx.fillStyle = '#4444ff';
    ctx.fillText('🍖 饥饿度: 60/100', 20, 50);
    ctx.fillStyle = '#44ff44';
    ctx.fillText('🔋 体力: 75/100', 20, 70);
    
    // 标题
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(gameName, width / 2, height - 20);
}

// 绘制动作游戏画面
function drawActionGameScreen(ctx, gameName, bgColor) {
    const width = 800, height = 600;
    
    // 动态背景
    const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, width/2);
    gradient.addColorStop(0, '#ff6b6b');
    gradient.addColorStop(0.5, '#4ecdc4');
    gradient.addColorStop(1, '#45b7d1');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // 主角
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(350, 250, 60, 100);
    ctx.fillStyle = '#ffdddd';
    ctx.beginPath();
    ctx.arc(380, 230, 25, 0, Math.PI * 2);
    ctx.fill();
    
    // 敌人
    ctx.fillStyle = '#000000';
    ctx.fillRect(150, 300, 50, 80);
    ctx.fillRect(600, 280, 50, 80);
    
    // 特效
    ctx.strokeStyle = '#ffff00';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(380, 280);
    ctx.lineTo(175, 340);
    ctx.stroke();
    
    // 分数和连击
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(width - 200, 10, 180, 60);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Arial';
    ctx.textAlign = 'right';
    ctx.fillText('分数: 15,680', width - 20, 35);
    ctx.fillText('连击: x12', width - 20, 55);
    
    // 标题
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(gameName, width / 2, height - 20);
}

// 绘制休闲游戏画面
function drawCasualGameScreen(ctx, gameName, bgColor) {
    const width = 800, height = 600;
    
    // 清新背景
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#e0f2fe');
    gradient.addColorStop(0.5, '#b3e5fc');
    gradient.addColorStop(1, '#81d4fa');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // 游戏元素（如方块、球等）
    const colors = ['#ff9800', '#4caf50', '#2196f3', '#e91e63', '#9c27b0'];
    for (let i = 0; i < 8; i++) {
        ctx.fillStyle = colors[i % colors.length];
        const x = 100 + (i % 4) * 150;
        const y = 200 + Math.floor(i / 4) * 100;
        ctx.fillRect(x, y, 80, 80);
        
        // 添加光泽效果
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fillRect(x, y, 80, 20);
    }
    
    // 分数显示
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.fillRect(width/2 - 100, 50, 200, 60);
    ctx.fillStyle = '#333333';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('分数: 2,340', width/2, 85);
    
    // 标题
    ctx.fillStyle = '#333333';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(gameName, width / 2, height - 30);
}

// 绘制射击游戏画面
function drawShooterGameScreen(ctx, gameName, bgColor) {
    const width = 800, height = 600;
    
    // 战场背景
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#2c3e50');
    gradient.addColorStop(0.5, '#34495e');
    gradient.addColorStop(1, '#1a252f');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // 掩体
    ctx.fillStyle = '#7f8c8d';
    ctx.fillRect(100, 400, 150, 100);
    ctx.fillRect(550, 350, 150, 150);
    
    // 玩家角色
    ctx.fillStyle = '#27ae60';
    ctx.fillRect(160, 350, 30, 50);
    
    // 敌人
    ctx.fillStyle = '#e74c3c';
    ctx.fillRect(600, 300, 30, 50);
    ctx.fillRect(200, 200, 30, 50);
    
    // 子弹轨迹
    ctx.strokeStyle = '#f1c40f';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(175, 360);
    ctx.lineTo(615, 315);
    ctx.stroke();
    
    // 准星
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(400, 300, 20, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(380, 300);
    ctx.lineTo(420, 300);
    ctx.moveTo(400, 280);
    ctx.lineTo(400, 320);
    ctx.stroke();
    
    // 弹药和生命值
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(10, height - 80, 200, 70);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 16px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('🔫 弹药: 24/30', 20, height - 50);
    ctx.fillText('❤️ 生命: 80/100', 20, height - 25);
    
    // 标题
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(gameName, width / 2, 40);
}

// 绘制默认游戏画面
function drawDefaultGameScreen(ctx, gameName, bgColor) {
    const width = 800, height = 600;
    
    // 使用原来的generateGameplayScreenshot逻辑
    const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height)/2);
    gradient.addColorStop(0, adjustBrightness(bgColor, 20));
    gradient.addColorStop(0.7, bgColor);
    gradient.addColorStop(1, adjustBrightness(bgColor, -30));
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    drawGameUI(ctx, width, height, bgColor);
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(50, 80, width - 100, height - 160);
    
    drawGameElements(ctx, width, height, bgColor);
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(gameName, width / 2, height - 30);
}

// 生成本地占位符图片的函数
function generateLocalPlaceholder(text, bgColor = '#1e40af', textColor = '#ffffff', width = 800, height = 600) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    
    // 设置背景渐变
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, bgColor);
    gradient.addColorStop(1, adjustBrightness(bgColor, -20));
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    
    // 添加装饰性图案
    ctx.strokeStyle = adjustBrightness(bgColor, 10);
    ctx.lineWidth = 2;
    ctx.globalAlpha = 0.3;
    
    // 绘制网格图案
    for (let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
    
    ctx.globalAlpha = 1;
    
    // 设置文字样式
    ctx.fillStyle = textColor;
    ctx.font = 'bold 32px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    // 绘制主标题
    const maxWidth = width * 0.8;
    const words = text.split(' ');
    let lines = [];
    let currentLine = words[0];
    
    for (let i = 1; i < words.length; i++) {
        const testLine = currentLine + ' ' + words[i];
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth) {
            lines.push(currentLine);
            currentLine = words[i];
        } else {
            currentLine = testLine;
        }
    }
    lines.push(currentLine);
    
    // 绘制多行文字
    const lineHeight = 40;
    const startY = height / 2 - (lines.length - 1) * lineHeight / 2;
    
    lines.forEach((line, index) => {
        ctx.fillText(line, width / 2, startY + index * lineHeight);
    });
    
    // 添加装饰元素
    ctx.fillStyle = adjustBrightness(textColor, -30);
    ctx.font = '16px Arial, sans-serif';
    ctx.fillText('🎮 ChillWork Gaming Center', width / 2, height - 30);
    
    return canvas.toDataURL('image/png');
}

// 调整颜色亮度的辅助函数
function adjustBrightness(hexColor, percent) {
    const num = parseInt(hexColor.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
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
        thumbnail: "https://img.crazygames.com/games/zombie-horde-build-survive/cover-1654594312958.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=450&fit=crop",
        previews: [
            "https://img.crazygames.com/games/zombie-horde-build-survive/cover-1654594312958.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            generateGameplayScreenshot("僵尸围城 - 建造基地", "#2d5a27"),
            generateGameplayScreenshot("僵尸围城 - 战斗画面", "#4ade80"),
            generateGameplayScreenshot("僵尸围城 - 资源收集", "#16a34a")
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
        thumbnail: "https://img.crazygames.com/games/snake-vs-block/cover-1654594319442.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=450&fit=crop",
        previews: [
            "https://img.crazygames.com/games/snake-vs-block/cover-1654594319442.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            generateGameplayScreenshot("贪吃蛇 - 游戏开始", "#1e3a8a"),
            generateGameplayScreenshot("贪吃蛇 - 挑战关卡", "#60a5fa"),
            generateGameplayScreenshot("贪吃蛇 - 高分榜", "#3b82f6")
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
        thumbnail: "https://img.crazygames.com/games/apocalypse-truck/cover-1654594321173.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=450&fit=crop",
        previews: [
            "https://img.crazygames.com/games/apocalypse-truck/cover-1654594321173.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            generateSpecialGameScreenshot("末日卡车 - 赛道驰骋", "racing", "#7c2d12"),
            generateSpecialGameScreenshot("末日卡车 - 障碍挑战", "racing", "#f97316"),
            generateSpecialGameScreenshot("末日卡车 - 终点冲刺", "racing", "#ea580c")
        ]
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
        thumbnail: "https://img.crazygames.com/games/hero-rush-tower-defense/cover-1654594323445.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=450&fit=crop",
        previews: [
            "https://img.crazygames.com/games/hero-rush-tower-defense/cover-1654594323445.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=800&h=600&fit=crop",
            generateSpecialGameScreenshot("英雄突击 - 塔防布局", "strategy", "#581c87"),
            generateSpecialGameScreenshot("英雄突击 - 战斗场面", "strategy", "#a855f7"),
            generateSpecialGameScreenshot("英雄突击 - 升级系统", "strategy", "#7c3aed")
        ]
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
        previews: [
            "https://img.onlinegames.io/game/2025/unity/voxel-world/256x256.webp",
            generateSpecialGameScreenshot("体素世界 - 建造模式", "survival", "#0f766e"),
            generateSpecialGameScreenshot("体素世界 - 探索世界", "survival", "#14b8a6"),
            generateSpecialGameScreenshot("体素世界 - 创意工坊", "survival", "#0d9488")
        ]
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
        previews: [
            "https://img.onlinegames.io/game/2025/unity/farming-island/256x256.webp",
            generateSpecialGameScreenshot("农场岛 - 种植作物", "casual", "#365314"),
            generateSpecialGameScreenshot("农场岛 - 动物饲养", "casual", "#84cc16"),
            generateSpecialGameScreenshot("农场岛 - 收获季节", "casual", "#65a30d")
        ]
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
            generateSpecialGameScreenshot("蛋糕合成师 - 制作蛋糕", "casual", "#be185d"),
            generateSpecialGameScreenshot("蛋糕合成师 - 合并材料", "casual", "#ec4899"),
            generateSpecialGameScreenshot("蛋糕合成师 - 烘焙工坊", "casual", "#f472b6")
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
        previews: [
            "https://img.onlinegames.io/game/2025/unity/monster-survivors/256x256.webp",
            generateSpecialGameScreenshot("怪物幸存者 - 战斗场面", "action", "#1f2937"),
            generateSpecialGameScreenshot("怪物幸存者 - 装备升级", "action", "#6b7280"),
            generateSpecialGameScreenshot("怪物幸存者 - 生存挑战", "action", "#374151")
        ]
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
            generateSpecialGameScreenshot("报童竞跑 - 街道奔跑", "racing", "#dc2626"),
            generateSpecialGameScreenshot("报童竞跑 - 送报挑战", "racing", "#fca5a5"),
            generateSpecialGameScreenshot("报童竞跑 - 障碍躲避", "racing", "#ef4444")
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
            generateSpecialGameScreenshot("太空僵尸2 - 太空战斗", "shooter", "#1e1b4b"),
            generateSpecialGameScreenshot("太空僵尸2 - 武器升级", "shooter", "#8b5cf6"),
            generateSpecialGameScreenshot("太空僵尸2 - 僵尸围攻", "shooter", "#6d28d9")
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
            generateSpecialGameScreenshot("钢琴瓷砖 - 音乐演奏", "casual", "#0c4a6e"),
            generateSpecialGameScreenshot("钢琴瓷砖 - 节拍挑战", "casual", "#0ea5e9"),
            generateSpecialGameScreenshot("钢琴瓷砖 - 完美演出", "casual", "#0284c7")
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
        'next': '下一张',
        'fix-images': '修复图片',
        'exit-fullscreen': '退出全屏',
        'force-reload': '强制重载',
        'check-status': '检查状态'
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
        'next': 'Next',
        'fix-images': 'Fix Images',
        'exit-fullscreen': 'Exit Fullscreen',
        'force-reload': 'Force Reload',
        'check-status': 'Check Status'
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
        'next': 'Suivant',
        'fix-images': 'Réparer Images',
        'exit-fullscreen': 'Quitter Plein Écran',
        'force-reload': 'Recharger Force',
        'check-status': 'Vérifier Statut'
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
    // 检查浏览器兼容性
    showCompatibilityWarning();
    
    // 先替换所有placeholder图片
    replacePlaceholderImages();
    addDefaultPreviews();
    setupEventListeners();
    renderGameList();
    updateLanguage();
    
    // 输出系统信息到控制台
    console.log('🎮 ChillWork游戏中心已启动');
    console.log('浏览器兼容性:', checkBrowserCompatibility());
    console.log('游戏总数:', games.length);
}

// 替换所有placeholder图片为本地生成的图片
function replacePlaceholderImages() {
    games.forEach(game => {
        if (game.previews) {
            game.previews = game.previews.map((preview, index) => {
                if (typeof preview === 'string' && preview.includes('via.placeholder.com')) {
                    // 提取文本内容
                    const textMatch = preview.match(/text=([^&]+)/);
                    const text = textMatch ? decodeURIComponent(textMatch[1].replace(/\+/g, ' ')) : `${game.name.en} Screenshot ${index}`;
                    
                    // 根据索引使用不同颜色
                    const colors = ['#1e40af', '#3b82f6', '#059669', '#dc2626'];
                    const color = colors[index % colors.length];
                    
                    return generateLocalPlaceholder(text, color);
                }
                return preview;
            });
        }
    });
}

// 设置图片错误处理
function setupImageErrorHandling() {
    // 使用事件委托处理所有图片加载错误
    document.addEventListener('error', function(e) {
        if (e.target.tagName === 'IMG' && !e.target.dataset.errorHandled) {
            const img = e.target;
            const altText = img.alt || img.dataset.gameName || 'Image Failed to Load';
            
            // 标记已处理，避免重复处理
            img.dataset.errorHandled = 'true';
            
            // 创建替代图片
            const fallbackImg = generateLocalPlaceholder(altText, '#dc2626', '#ffffff', 
                img.offsetWidth || 300, img.offsetHeight || 200);
            
            img.src = fallbackImg;
            img.style.opacity = '0.9';
            img.style.border = '2px dashed #dc2626';
            
            // 添加重试功能
            const originalOnClick = img.onclick;
            img.onclick = function(e) {
                e.stopPropagation();
                const originalSrc = img.dataset.originalSrc;
                if (originalSrc && originalSrc !== img.src) {
                    img.dataset.errorHandled = 'false';
                    img.src = originalSrc;
                    img.style.opacity = '1';
                    img.style.border = '';
                    img.onclick = originalOnClick;
                    img.title = '';
                }
            };
            
            img.title = '图片加载失败，点击重试';
            console.log('图片加载失败:', img.dataset.originalSrc || img.src);
        }
    }, true);
    
    // 预加载所有游戏缩略图
    preloadGameThumbnails();
}

// 预加载游戏缩略图
function preloadGameThumbnails() {
    games.forEach(game => {
        if (game.thumbnail) {
            const img = new Image();
            img.onload = function() {
                console.log('预加载成功:', game.name.zh);
            };
            img.onerror = function() {
                console.log('预加载失败:', game.name.zh, game.thumbnail);
            };
            img.src = game.thumbnail;
        }
    });
}

// 强制刷新所有图片
function refreshAllImages() {
    console.log('开始刷新所有图片...');
    document.querySelectorAll('.game-thumbnail').forEach((img, index) => {
        const originalSrc = img.dataset.originalSrc;
        if (originalSrc) {
            img.dataset.errorHandled = 'false';
            img.style.opacity = '1';
            img.style.border = '';
            img.title = '';
            // 添加时间戳避免缓存
            img.src = originalSrc + (originalSrc.includes('?') ? '&' : '?') + 't=' + Date.now();
            console.log(`刷新图片 ${index + 1}:`, originalSrc);
        }
    });
}

// 检查图片加载状态
function checkImageStatus() {
    const images = document.querySelectorAll('.game-thumbnail');
    let loadedCount = 0;
    let failedCount = 0;
    
    images.forEach((img, index) => {
        if (img.complete) {
            if (img.naturalWidth > 0) {
                loadedCount++;
                console.log(`图片 ${index + 1}: 已加载 ✅`);
            } else {
                failedCount++;
                console.log(`图片 ${index + 1}: 加载失败 ❌`, img.src);
            }
        } else {
            console.log(`图片 ${index + 1}: 加载中 ⏳`);
        }
    });
    
    console.log(`图片状态统计: 成功 ${loadedCount}, 失败 ${failedCount}, 总计 ${images.length}`);
    return { loaded: loadedCount, failed: failedCount, total: images.length };
}

// 浏览器兼容性检测
function checkBrowserCompatibility() {
    const compatibility = {
        webgl: false,
        canvas: false,
        localStorage: false,
        modernBrowser: false
    };
    
    // 检测WebGL支持
    try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        compatibility.webgl = !!gl;
    } catch (e) {
        compatibility.webgl = false;
    }
    
    // 检测Canvas支持
    try {
        const canvas = document.createElement('canvas');
        compatibility.canvas = !!(canvas.getContext && canvas.getContext('2d'));
    } catch (e) {
        compatibility.canvas = false;
    }
    
    // 检测localStorage支持
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        compatibility.localStorage = true;
    } catch (e) {
        compatibility.localStorage = false;
    }
    
    // 检测现代浏览器特性
    compatibility.modernBrowser = !!(
        window.fetch &&
        window.Promise &&
        window.addEventListener &&
        document.querySelector
    );
    
    return compatibility;
}

// 显示兼容性警告
function showCompatibilityWarning() {
    const compatibility = checkBrowserCompatibility();
    const issues = [];
    
    if (!compatibility.webgl) issues.push('WebGL');
    if (!compatibility.canvas) issues.push('Canvas');
    if (!compatibility.localStorage) issues.push('本地存储');
    if (!compatibility.modernBrowser) issues.push('现代浏览器特性');
    
    if (issues.length > 0) {
        const warningDiv = document.createElement('div');
        warningDiv.className = 'fixed top-20 left-1/2 transform -translate-x-1/2 bg-yellow-600 text-white p-4 rounded-lg shadow-lg z-50';
        warningDiv.innerHTML = `
            <div class="flex items-center">
                <i class="fas fa-exclamation-triangle mr-2"></i>
                <div>
                    <p class="font-bold">浏览器兼容性警告</p>
                    <p class="text-sm">缺少支持: ${issues.join(', ')}</p>
                    <p class="text-xs mt-1">某些游戏可能无法正常运行，建议使用最新版Chrome或Firefox</p>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(warningDiv);
        
        // 5秒后自动隐藏
        setTimeout(() => {
            if (warningDiv.parentElement) {
                warningDiv.remove();
            }
        }, 5000);
    }
}

// 游戏状态监控
function monitorGameStatus() {
    const iframe = document.getElementById('gameIframe');
    if (!iframe || !iframe.src) {
        console.log('没有正在运行的游戏');
        return;
    }
    
    try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDoc && iframeDoc.body) {
            const bodyText = iframeDoc.body.textContent || '';
            const hasCanvas = iframeDoc.querySelector('canvas');
            const hasVideo = iframeDoc.querySelector('video');
            const hasError = bodyText.toLowerCase().includes('uh-oh') || 
                           bodyText.toLowerCase().includes('error') ||
                           bodyText.toLowerCase().includes('reload');
            
            console.log('游戏状态监控:', {
                url: iframe.src.substring(0, 50) + '...',
                hasCanvas: !!hasCanvas,
                hasVideo: !!hasVideo,
                hasError: hasError,
                bodyLength: bodyText.length,
                errorText: hasError ? bodyText.substring(0, 100) : 'none'
            });
            
            if (hasError) {
                console.log('⚠️ 检测到游戏错误，建议重试');
            } else if (hasCanvas || hasVideo) {
                console.log('✅ 游戏似乎正常运行');
            } else if (bodyText.length < 50) {
                console.log('⚠️ 游戏内容过少，可能加载失败');
            }
        } else {
            console.log('✅ 游戏正常运行 (CORS保护)');
        }
    } catch (e) {
        console.log('✅ 游戏正常运行 (CORS保护)');
    }
}

// 强制重新加载当前游戏
function forceReloadCurrentGame() {
    const iframe = document.getElementById('gameIframe');
    if (iframe && iframe.src) {
        const currentSrc = iframe.src;
        console.log('强制重新加载游戏:', currentSrc);
        iframe.src = '';
        setTimeout(() => {
            iframe.src = currentSrc + (currentSrc.includes('?') ? '&' : '?') + 'reload=' + Date.now();
        }, 500);
    } else {
        console.log('没有正在运行的游戏');
    }
}

// 全局暴露调试函数
window.refreshAllImages = refreshAllImages;
window.checkImageStatus = checkImageStatus;
window.checkBrowserCompatibility = checkBrowserCompatibility;
window.monitorGameStatus = monitorGameStatus;
window.forceReloadCurrentGame = forceReloadCurrentGame;

// 游戏加载指示器
function showGameLoadingIndicator() {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = `
        <div class="flex items-center justify-center h-96 bg-gray-800 rounded-lg">
            <div class="text-center">
                <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
                <p class="text-white text-lg">🎮 正在加载游戏...</p>
                <p class="text-gray-400 text-sm mt-2">请稍候，正在连接游戏服务器</p>
            </div>
        </div>
    `;
}

// 尝试加载游戏
function attemptLoadGame(iframe, game, retryCount = 0) {
    const maxRetries = 3;
    const gameContainer = document.getElementById('gameContainer');
    
    // 创建iframe
    iframe = document.createElement('iframe');
    iframe.id = 'gameIframe';
    iframe.className = 'game-iframe';
    iframe.allow = 'gamepad *; microphone; camera';
    iframe.frameBorder = '0';
    
    // 设置加载超时检测 - 缩短超时时间以更快检测失败
    const timeoutDuration = retryCount === 0 ? 12000 : 8000; // 首次12秒，重试8秒
    const loadTimeout = setTimeout(() => {
        console.log(`游戏加载超时 - ${game.name[currentLanguage]} (尝试 ${retryCount + 1})`);
        handleGameLoadFailure(game, retryCount, maxRetries);
    }, timeoutDuration);
    
    // 监听iframe加载事件
    iframe.onload = function() {
        clearTimeout(loadTimeout);
        hideGameLoadingIndicator();
        
        // 立即进行第一次检查
        setTimeout(() => {
            checkGameHealth(iframe, game, retryCount, maxRetries);
        }, 1000);
        
        // 延迟进行第二次检查（针对延迟出现的错误）
        setTimeout(() => {
            checkGameHealth(iframe, game, retryCount, maxRetries);
        }, 5000);
        
        // 最终检查（针对慢速加载的错误）
        setTimeout(() => {
            checkGameHealth(iframe, game, retryCount, maxRetries);
        }, 10000);
    };
    
    iframe.onerror = function() {
        clearTimeout(loadTimeout);
        handleGameLoadFailure(game, retryCount, maxRetries);
    };
    
    // 尝试加载游戏
    iframe.src = getGameUrl(game, retryCount);
    
    // 替换容器内容
    gameContainer.innerHTML = '';
    gameContainer.appendChild(iframe);
}

// 获取游戏URL（包含备用链接）
function getGameUrl(game, retryCount) {
    // 为容易出现连接问题的游戏提供备用链接
    const alternativeUrls = {
        1: [ // Zombie Horde
            "https://www.crazygames.com/embed/zombie-horde-build-survive",
            "https://gamedistribution.com/games/zombie-horde-build-survive",
            "https://html5games.com/game/zombie-horde-build-survive"
        ],
        2: [ // Snake vs Block
            "https://www.crazygames.com/embed/snake-vs-block",
            "https://gamedistribution.com/games/snake-vs-block",
            "https://html5games.com/game/snake-vs-block"
        ],
        7: [ // Piece of Cake
            "https://www.crazygames.com/embed/piece-of-cake-merge-and-bake",
            "https://gamedistribution.com/games/piece-of-cake-merge-and-bake",
            "https://html5games.com/game/piece-of-cake-merge-and-bake"
        ],
        9: [ // Paper Boy Race Running Game
            "https://www.crazygames.com/embed/paper-boy-race-running-game",
            "https://gamedistribution.com/games/paper-boy-race-running-game",
            "https://html5games.com/game/paper-boy-race-running-game",
            "https://www.y8.com/games/paper_boy_race",
            "https://poki.com/en/g/paper-boy-race",
            "https://www.silvergames.com/en/paper-boy-race"
        ],
        10: [ // Zombie Space Episode 2
            "https://www.crazygames.com/embed/zombie-space-episode-2-ajp",
            "https://gamedistribution.com/games/zombie-space-episode-2-ajp",
            "https://html5games.com/game/zombie-space-episode-2-ajp"
        ],
        11: [ // Catch Tiles Piano Game
            "https://www.crazygames.com/embed/catch-tiles-piano-game",
            "https://gamedistribution.com/games/catch-tiles-piano-game",
            "https://html5games.com/game/catch-tiles-piano-game"
        ],
        12: [ // Cubecraft Merge Battle
            "https://www.crazygames.com/embed/cubecraft-merge-battle-uxw",
            "https://gamedistribution.com/games/cubecraft-merge-battle-uxw",
            "https://html5games.com/game/cubecraft-merge-battle-uxw"
        ],
        13: [ // Racing Limits
            "https://www.crazygames.com/embed/racing-limits",
            "https://gamedistribution.com/games/racing-limits",
            "https://html5games.com/game/racing-limits",
            "https://www.y8.com/games/racing_limits",
            "https://poki.com/en/g/racing-limits",
            "https://www.silvergames.com/en/racing-limits"
        ],
        14: [ // Duo
            "https://www.crazygames.com/embed/duo-kjn",
            "https://gamedistribution.com/games/duo-kjn",
            "https://html5games.com/game/duo-kjn"
        ],
        15: [ // Count Masters
            "https://www.crazygames.com/embed/count-masters-stickman-games",
            "https://gamedistribution.com/games/count-masters-stickman-games",
            "https://html5games.com/game/count-masters-stickman-games",
            "https://www.y8.com/games/count_masters_stickman_games",
            "https://poki.com/en/g/count-masters"
        ],
        16: [ // Autogun Heroes
            "https://www.crazygames.com/embed/autogun-heroes-izk",
            "https://gamedistribution.com/games/autogun-heroes-izk",
            "https://html5games.com/game/autogun-heroes-izk",
            "https://www.y8.com/games/autogun_heroes",
            "https://poki.com/en/g/autogun-heroes",
            "https://www.silvergames.com/en/autogun-heroes"
        ],
        17: [ // World Z Defense
            "https://www.crazygames.com/embed/world-z-defense---zombie-defense",
            "https://gamedistribution.com/games/world-z-defense---zombie-defense",
            "https://html5games.com/game/world-z-defense---zombie-defense",
            "https://www.y8.com/games/world_z_defense",
            "https://poki.com/en/g/world-z-defense"
        ],
        18: [ // Punch Max
            "https://www.crazygames.com/embed/punch-max",
            "https://gamedistribution.com/games/punch-max",
            "https://html5games.com/game/punch-max"
        ],
        19: [ // Shadow President
            "https://www.crazygames.com/embed/shadow-president-illuminati",
            "https://gamedistribution.com/games/shadow-president-illuminati",
            "https://html5games.com/game/shadow-president-illuminati"
        ]
    };
    
    if (alternativeUrls[game.id] && retryCount < alternativeUrls[game.id].length) {
        return alternativeUrls[game.id][retryCount];
    }
    
    return game.iframe;
}

// 检查游戏健康状态
function checkGameHealth(iframe, game, retryCount, maxRetries) {
    // 防止重复检查同一个错误
    if (iframe.dataset.errorChecked === 'true') {
        return;
    }
    
    try {
        // 尝试访问iframe内容（可能因CORS限制而失败）
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        
        // 检查是否有错误提示
        if (iframeDoc && iframeDoc.body) {
            const errorElements = iframeDoc.querySelectorAll('[class*="error"], [class*="connection"], [class*="issue"], [class*="not-support"], [class*="uh-oh"], [class*="reload"]');
            const errorText = iframeDoc.body.textContent || '';
            const errorHTML = iframeDoc.body.innerHTML || '';
            
            // 检查常见错误文本
            const errorPatterns = [
                'Uh-oh',
                'not support',
                'browser does not support',
                'encountered an error',
                'connection failed',
                'loading failed',
                'TypeError',
                'Failed to fetch',
                'NetworkError',
                'CORS',
                'blocked',
                'refused',
                'timeout',
                'unavailable',
                'maintenance',
                'error occurred',
                'something went wrong',
                'try again',
                'reload',
                'please reload',
                'game encountered',
                'failed to load',
                'connection error'
            ];
            
            const hasError = errorElements.length > 0 || 
                           errorPatterns.some(pattern => 
                               errorText.toLowerCase().includes(pattern.toLowerCase()) ||
                               errorHTML.toLowerCase().includes(pattern.toLowerCase())
                           );
            
            // 检查是否有错误按钮（如"Reload game"按钮）
            const reloadButtons = iframeDoc.querySelectorAll('button, [role="button"]');
            const hasReloadButton = Array.from(reloadButtons).some(btn => 
                btn.textContent && btn.textContent.toLowerCase().includes('reload')
            );
            
            if (hasError || hasReloadButton) {
                console.log('检测到游戏错误，错误内容:', errorText.substring(0, 100));
                iframe.dataset.errorChecked = 'true';
                handleGameLoadFailure(game, retryCount, maxRetries);
                return;
            }
            
            // 检查页面是否基本为空（可能加载失败）
            const bodyContent = iframeDoc.body.textContent.trim();
            if (bodyContent.length < 50 && !iframeDoc.querySelector('canvas, video, svg')) {
                console.log('检测到页面内容过少，可能加载失败');
                iframe.dataset.errorChecked = 'true';
                handleGameLoadFailure(game, retryCount, maxRetries);
                return;
            }
        }
    } catch (e) {
        // CORS限制是正常的，说明iframe正常加载了外部内容
        console.log('Game loaded successfully (CORS restriction expected)');
    }
    
    // 额外检查：监听iframe内的错误事件
    setupIframeErrorDetection(iframe, game, retryCount, maxRetries);
}

// 设置iframe内错误检测
function setupIframeErrorDetection(iframe, game, retryCount, maxRetries) {
    // 监听iframe的加载事件
    const checkInterval = setInterval(() => {
        try {
            const iframeWindow = iframe.contentWindow;
            if (iframeWindow) {
                // 检查iframe是否显示错误页面
                const currentUrl = iframeWindow.location.href;
                if (currentUrl.includes('error') || currentUrl.includes('not-found')) {
                    clearInterval(checkInterval);
                    handleGameLoadFailure(game, retryCount, maxRetries);
                    return;
                }
            }
        } catch (e) {
            // CORS限制，游戏正常加载
            clearInterval(checkInterval);
        }
    }, 2000);
    
    // 10秒后停止检查
    setTimeout(() => {
        clearInterval(checkInterval);
    }, 10000);
}

// 处理游戏加载失败
function handleGameLoadFailure(game, retryCount, maxRetries) {
    // 增加最大重试次数到6次（更多备用链接）
    const actualMaxRetries = Math.max(maxRetries, 6);
    
    if (retryCount < actualMaxRetries) {
        console.log(`尝试备用链接 ${retryCount + 1}/${actualMaxRetries} - ${game.name[currentLanguage]}`);
        showRetryIndicator(retryCount + 1);
        
        // 减少重试间隔，更快切换
        const retryDelay = retryCount === 0 ? 1000 : 1500; // 第一次重试更快
        
        setTimeout(() => {
            const iframe = document.getElementById('gameIframe');
            attemptLoadGame(iframe, game, retryCount + 1);
        }, retryDelay);
    } else {
        console.log(`所有备用链接都失败了 - ${game.name[currentLanguage]}`);
        showGameFailureMessage(game);
    }
}

// 显示重试指示器
function showRetryIndicator(retryNum) {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = `
        <div class="flex items-center justify-center h-96 bg-gray-800 rounded-lg">
            <div class="text-center">
                <div class="animate-pulse h-16 w-16 bg-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <i class="fas fa-redo text-white text-xl"></i>
                </div>
                <p class="text-white text-lg">🔄 尝试备用连接 ${retryNum}</p>
                <p class="text-gray-400 text-sm mt-2">正在切换到其他游戏服务器...</p>
            </div>
        </div>
    `;
}

// 显示游戏加载失败消息
function showGameFailureMessage(game) {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = `
        <div class="flex items-center justify-center h-96 bg-gray-800 rounded-lg">
            <div class="text-center max-w-md">
                <div class="text-red-500 text-6xl mb-4">⚠️</div>
                <h3 class="text-white text-xl font-bold mb-4">游戏连接失败</h3>
                <p class="text-gray-300 text-sm mb-6">
                    很抱歉，${game.name[currentLanguage]} 暂时无法连接。<br>
                    我们已尝试多个服务器，但都无法正常加载。
                </p>
                <div class="space-y-3">
                    <button onclick="retryLoadGame(${game.id})" 
                            class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        <i class="fas fa-redo mr-2"></i>重新尝试所有服务器
                    </button>
                    <button onclick="tryAlternativeGame(${game.id})" 
                            class="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
                        <i class="fas fa-gamepad mr-2"></i>推荐相似游戏
                    </button>
                    <button onclick="backToGameList()" 
                            class="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded">
                        <i class="fas fa-arrow-left mr-2"></i>返回游戏列表
                    </button>
                </div>
                <div class="mt-4 text-xs text-gray-500">
                    <p>📝 故障排除建议：</p>
                    <ul class="text-left mt-2 space-y-1">
                        <li>• 检查网络连接</li>
                        <li>• 尝试刷新页面</li>
                        <li>• 更换浏览器（推荐Chrome/Firefox）</li>
                        <li>• 清除浏览器缓存</li>
                        <li>• 关闭广告拦截器</li>
                        <li>• 检查防火墙设置</li>
                    </ul>
                </div>
                <div class="mt-4 p-3 bg-blue-900 rounded text-xs">
                    <p class="text-blue-300">💡 提示：某些游戏需要较新的浏览器版本或特定的WebGL支持</p>
                </div>
            </div>
        </div>
    `;
}

// 推荐相似游戏
function tryAlternativeGame(failedGameId) {
    const failedGame = games.find(g => g.id === failedGameId);
    if (!failedGame) return;
    
    // 根据分类推荐相似游戏
    const similarGames = games.filter(game => 
        game.category === failedGame.category && 
        game.id !== failedGameId
    );
    
    if (similarGames.length > 0) {
        // 随机选择一个相似游戏
        const randomGame = similarGames[Math.floor(Math.random() * similarGames.length)];
        
        // 显示推荐信息
        const gameContainer = document.getElementById('gameContainer');
        gameContainer.innerHTML = `
            <div class="flex items-center justify-center h-96 bg-gray-800 rounded-lg">
                <div class="text-center max-w-md">
                    <div class="text-green-500 text-4xl mb-4">🎮</div>
                    <h3 class="text-white text-xl font-bold mb-4">为您推荐相似游戏</h3>
                    <p class="text-gray-300 text-sm mb-4">
                        ${failedGame.name[currentLanguage]} 暂时无法加载<br>
                        为您推荐同类型游戏：<strong class="text-blue-400">${randomGame.name[currentLanguage]}</strong>
                    </p>
                    <div class="space-y-3">
                        <button onclick="loadGame(${randomGame.id})" 
                                class="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
                            <i class="fas fa-play mr-2"></i>开始游戏
                        </button>
                        <button onclick="backToGameList()" 
                                class="w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded">
                            <i class="fas fa-arrow-left mr-2"></i>返回游戏列表
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        setTimeout(() => {
            loadGame(randomGame.id);
        }, 3000);
    } else {
        backToGameList();
    }
}

// 隐藏加载指示器
function hideGameLoadingIndicator() {
    // 加载指示器会被iframe替换，无需特殊处理
}

// 重新尝试加载游戏
function retryLoadGame(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    showGameLoadingIndicator();
    setTimeout(() => {
        const iframe = document.getElementById('gameIframe');
        attemptLoadGame(iframe, game, 0);
    }, 1000);
}

function setupEventListeners() {
    // 图片加载错误处理
    setupImageErrorHandling();
    
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
    
    // 全屏状态变化监听器
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);
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
    
    // 创建安全的图片URL
    const safeImageUrl = createSafeImageUrl(game.thumbnail, game.name[currentLanguage]);
    
    card.innerHTML = `
        <div class="relative">
            <img src="${safeImageUrl}" 
                 alt="${game.name[currentLanguage]}" 
                 class="w-full h-48 object-cover cursor-pointer game-thumbnail"
                 data-original-src="${game.thumbnail || ''}"
                 data-game-name="${game.name[currentLanguage]}"
                 onclick="showPreview(${game.id})"
                 onerror="handleImageError(this)">
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

// 创建安全的图片URL
function createSafeImageUrl(thumbnailUrl, gameName) {
    if (!thumbnailUrl) {
        return generateLocalPlaceholder(gameName, '#1e40af', '#ffffff', 300, 200);
    }
    
    // 对于外部图片，先尝试使用代理或直接使用
    return thumbnailUrl;
}

// 处理图片加载错误
function handleImageError(img) {
    const gameName = img.dataset.gameName || 'Game Preview';
    const fallbackUrl = generateLocalPlaceholder(gameName, '#dc2626', '#ffffff', 300, 200);
    
    // 避免无限循环
    if (img.src !== fallbackUrl) {
        img.src = fallbackUrl;
        img.style.opacity = '0.9';
        
        // 添加重试功能
        img.onclick = function(e) {
            e.stopPropagation();
            const originalSrc = img.dataset.originalSrc;
            if (originalSrc && originalSrc !== img.src) {
                img.src = originalSrc;
                img.style.opacity = '1';
            }
        };
        
        // 添加提示
        img.title = '图片加载失败，点击重试';
    }
}

function loadGame(gameId) {
    const game = games.find(g => g.id === gameId);
    if (!game) return;
    
    document.getElementById('gameList').classList.add('hidden');
    document.getElementById('gamePlayer').classList.remove('hidden');
    
    document.getElementById('currentGameTitle').textContent = game.name[currentLanguage];
    document.getElementById('gameDescription').textContent = game.description[currentLanguage];
    
    const iframe = document.getElementById('gameIframe');
    
    // 显示加载提示
    showGameLoadingIndicator();
    
    // 尝试加载游戏
    attemptLoadGame(iframe, game);
    
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
    const gameContainer = document.getElementById('gameContainer');
    const iframe = document.getElementById('gameIframe');
    
    try {
        // 使用浏览器原生全屏API
        if (gameContainer.requestFullscreen) {
            gameContainer.requestFullscreen();
        } else if (gameContainer.webkitRequestFullscreen) {
            gameContainer.webkitRequestFullscreen();
        } else if (gameContainer.mozRequestFullScreen) {
            gameContainer.mozRequestFullScreen();
        } else if (gameContainer.msRequestFullscreen) {
            gameContainer.msRequestFullscreen();
        } else {
            // 降级到CSS全屏
            iframe.classList.add('fullscreen-iframe');
            updateFullscreenButton(true);
            isFullscreen = true;
        }
    } catch (error) {
        console.error('全屏请求失败:', error);
        // 降级到CSS全屏
        iframe.classList.add('fullscreen-iframe');
        updateFullscreenButton(true);
        isFullscreen = true;
    }
}

function exitFullscreen() {
    try {
        // 使用浏览器原生退出全屏API
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else {
            // 降级到CSS退出全屏
            const iframe = document.getElementById('gameIframe');
            iframe.classList.remove('fullscreen-iframe');
            updateFullscreenButton(false);
            isFullscreen = false;
        }
    } catch (error) {
        console.error('退出全屏失败:', error);
        // 降级到CSS退出全屏
        const iframe = document.getElementById('gameIframe');
        iframe.classList.remove('fullscreen-iframe');
        updateFullscreenButton(false);
        isFullscreen = false;
    }
}

// 更新全屏按钮状态
function updateFullscreenButton(isFullscreenMode) {
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    if (fullscreenBtn) {
        if (isFullscreenMode) {
            fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i> <span data-i18n="exit-fullscreen">退出全屏</span>';
        } else {
            fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> <span data-i18n="fullscreen">全屏</span>';
        }
    }
}

// 监听全屏状态变化
function handleFullscreenChange() {
    const isCurrentlyFullscreen = !!(document.fullscreenElement || 
                                     document.webkitFullscreenElement || 
                                     document.mozFullScreenElement || 
                                     document.msFullscreenElement);
    
    isFullscreen = isCurrentlyFullscreen;
    updateFullscreenButton(isCurrentlyFullscreen);
    
    // 如果退出全屏，确保界面正确恢复
    if (!isCurrentlyFullscreen) {
        const iframe = document.getElementById('gameIframe');
        if (iframe) {
            iframe.classList.remove('fullscreen-iframe');
        }
        
        // 确保游戏容器正确显示
        const gameContainer = document.getElementById('gameContainer');
        if (gameContainer) {
            gameContainer.style.position = '';
            gameContainer.style.top = '';
            gameContainer.style.left = '';
            gameContainer.style.width = '';
            gameContainer.style.height = '';
            gameContainer.style.zIndex = '';
        }
    }
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