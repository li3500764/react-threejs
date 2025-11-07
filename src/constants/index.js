const navLinks = [
  {
    name: "作品",
    link: "#work",
  },
  {
    name: "经验",
    link: "#experience",
  },
  {
    name: "技能",
    link: "#skills",
  },
  {
    name: "评价",
    link: "#testimonials",
  },
];

const words = [
  { text: "创意", imgPath: "/images/ideas.svg" },
  { text: "概念", imgPath: "/images/concepts.svg" },
  { text: "设计", imgPath: "/images/designs.svg" },
  { text: "代码", imgPath: "/images/code.svg" },
  { text: "创意", imgPath: "/images/ideas.svg" },
  { text: "概念", imgPath: "/images/concepts.svg" },
  { text: "设计", imgPath: "/images/designs.svg" },
  { text: "代码", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "年工作经验" },
  { value: 200, suffix: "+", label: "满意客户" },
  { value: 108, suffix: "+", label: "完成项目" },
  { value: 90, suffix: "%", label: "客户留存率" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "质量专注",
    desc: "在关注每一个细节的同时提供高质量的结果。",
  },
  {
    imgPath: "/images/chat.png",
    title: "可靠沟通",
    desc: "在每一步都保持更新，确保透明度和清晰度。",
  },
  {
    imgPath: "/images/time.png",
    title: "准时交付",
    desc: "确保项目按时完成，同时保持质量和细节关注。",
  },
];

const techStackImgs = [
  {
    name: "React 开发者",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python 开发者",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "后端开发者",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "交互开发者",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "项目经理",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React 开发者",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python 开发者",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "后端开发者",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "交互开发者",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "项目经理",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Lorian 在无人机智能巡检平台的前端开发中表现出色，通过优化代码和页面加载速度，使用户访问时间减少了30%，显著提升了用户体验和系统性能。",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "前端开发工程师 - 杭州XX科技有限公司",
    date: "2023年11月 - 至今",
    responsibilities: [
      "负责无人机智能巡检平台的前端开发，独立完成多个项目的设计与实现",
      "使用Vue3 + Vite + Cesium.js构建用户友好的界面，提升用户体验",
      "参与大屏化项目开发，优化数据展示和交互效果，确保信息清晰传达",
      "与后端团队紧密合作，确保前后端数据高效交互和系统稳定性",
      "进行代码审查和性能优化，提升应用的响应速度和稳定性",
    ],
  },
  {
    review: "Lorian 在游戏管理后台开发中展现了全栈开发能力，从前端Vue3到后端Node.js，成功构建了高效的游戏GM管理工具，支持多个游戏的生命周期管理。",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "全栈工程师 - 杭州XX网络科技有限公司",
    date: "2022年7月 - 2023年6月",
    responsibilities: [
      "负责游戏管理后台的维护与开发，完成策划需求并改善用户体验",
      "负责游戏埋点服务器的维护与开发，建立合理的数据表结构",
      "封装公共逻辑与UI组件，部署内网npm站点供不同业务共用",
      "负责运维后台的日常维护，配合运维人员维护自动部署脚本",
      "使用Vue3+Vite+Node技术开发前后端一体化项目",
    ],
  },
  {
    review: "Lorian 在视觉识别软件项目中展现了独立开发能力，从零开始搭建项目框架，成功开发出用于工业质检的机器视觉识错软件，项目初期即售出五套。",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "前端开发工程师 - 济南XXXX科技有限公司",
    date: "2021年11月 - 2022年5月",
    responsibilities: [
      "独立完成新项目的搭建和代码框架设计",
      "使用WebSocket实现图片采集和识别错误功能",
      "利用Canvas实现画框圈错和视图图片统计",
      "使用ECharts进行数据统计展示",
      "编写测试用例，确保代码质量",
    ],
  },
  {
    review: "Lorian 在教育装备管理平台项目中快速掌握了Angular框架，独立承担项目维护和新功能开发工作，展现了出色的学习能力和技术适应能力。",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "前端开发工程师 - 宁波XXX软件科技有限公司",
    date: "2021年4月 - 2021年11月",
    responsibilities: [
      "负责教育装备智能管理平台的维护和新功能开发",
      "快速掌握Angular框架并应用于实际项目开发",
      "维护用户管理、资产管理、合同审核等核心模块",
      "使用TypeScript + AntD + 公司私有组件库进行开发",
      "独立承担项目的前端维护工作",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "埃斯特·霍华德",
    mentions: "@estherhoward",
    review:
      "我对 Lorian  的好评说不完。他能够将我们复杂的项目需求转化为无缝、功能完善的网站。他解决问题的能力非常出色。",
    imgPath: "/images/client1.png",
  },
  {
    name: "韦德·沃伦",
    mentions: "@wadewarren",
    review:
      "与 L'o'ri'an 合作是一次奇妙的经历。他将我们过时的网站转变为一个现代化、用户友好的平台。他对细节的关注和对质量的承诺是无与伦比的。强烈推荐他参与任何 Web 开发项目。",
    imgPath: "/images/client3.png",
  },
  {
    name: "盖伊·霍金斯",
    mentions: "@guyhawkins",
    review:
      "与 Lorian  合作绝对是一种享受。他的专业性、及时性和对提供卓越结果的奉献精神在我们整个项目中都很明显。Lorian  对开发各个方面的热情确实很突出。如果您想提升您的网站和品牌，Lorian  是理想的合作伙伴。",
    imgPath: "/images/client2.png",
  },
  {
    name: "马文·麦金尼",
    mentions: "@marvinmckinney",
    review:
      "与 Lorian  合作很愉快。他将我们过时的网站变成了一个新鲜、直观的平台，既现代又易于导航。整体工作非常出色。",
    imgPath: "/images/client5.png",
  },
  {
    name: "弗洛伊德·迈尔斯",
    mentions: "@floydmiles",
    review:
      "Lorian  在 Web 开发方面的专业知识确实令人印象深刻。他为我们的电子商务网站提供了一个强大且可扩展的解决方案，自上线以来我们的在线销售额显著增加。他是一位真正的专业人士！",
    imgPath: "/images/client4.png",
  },
  {
    name: "阿尔伯特·弗洛雷斯",
    mentions: "@albertflores",
    review:
      "与 Lorian  合作很愉快。他完美地理解了我们的需求，并交付了一个超出我们期望的网站。他在前端和后端开发方面的技能都是一流的。",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
