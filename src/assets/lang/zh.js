const allTranslation = {
  changepass: {
    oldPass: '当前登录密码',
    oldPassInput: '请输入当前登录密码',
    newPass: '新登录密码',
    newPassInput: '请输入6-20位密码，大小写字母及数字至少包含两种',
    confirmPass: '确认密码',
    confirmPassInput: '请再次输入密码',
    confirmBtn: '确定',
    cancelBtn: '取消',
    notifyMsg1: '新密码与旧密码不能相同！！！',
    notifyMsg2: '两次密码输入不一致！！！',
    notifyMsg3: '密码修改成功！请重新登录！',
  },
  detail: {
    zhichu: '支出',
    shouru: '收入',
    pageTitle1: '基本账户明细',
    pageTitle2: '抵押账户明细',
    t1: '收入记录ID',
    t2: '数量',
    t3: '币种',
    t4: '类别',
    t5: '类型',
    t6: '相关记录ID',
    t7: '创建时间',
  },
  record: {
    withdraw: {
      pageTitle: ' 提现记录',
      t1: '提现编号',
      t2: '时间',
      t3: '提现数量',
      t4: '提现手续费',
      t5: '区块链交易号',
      t6: '提现地址',
      t7: '处理状态',
    },
    deposit: {
      pageTitle: ' 充值记录',
      t1: '充值编号',
      t2: '交易所在块高度',
      t3: '交易号',
      t4: '金额',
      t5: '充值地址',
      t6: '充值时间',
      t7: '处理状态',
    },
  },
  login: {
    emailInput: '请输入你的邮箱',
    passwordInput: '请输入你的密码',
    forget: '忘记密码？',
    button: '登录',
    tip: '没有帐户？',
    register: '点击注册',
  },
  register: {
    emailInput: '请输入你的邮箱',
    passwordInput: '请输入您的密码',
    confirmPass: '请再输入一次您的密码',
    verifyCode: '请输入邮箱验证码',
    sendCode: '发送验证码',
    agree: '我已经阅读并且同意',
    pp: '政策和协议',
    button: '注册',
    exist: '已有账号？',
    login: '点击登录',
    msg1: '密码不能为空！',
    msg2: '两次输入的密码必须一致！',
    msg3: '请勾选同意协议！',
    msg4: '即将跳转到登录页面',
  },
  forget: {
    email: '请输入您的邮箱',
    verifyCode: '请输入邮箱验证码',
    sendCode: '发送验证码',
    password: '请输入您的密码',
    confirmPass: '请再次输入您的密码',
    button: '确认',
    attention: '请将发送的邮箱中的URL中的"sign="后的内容复制到本页面发送验证码按钮左侧的输入框中，注意，不要点击邮箱中的URL！！！',
    warn1: '两次输入的密码必须一致！',
    warn2: '密码不能为空！',
  },
  security: {
    phoneCertifyDialog: {
      title: '开启手机验证',
      phonePre: '请选择电话区号',
      phoneNumInput: '请输入手机号码',
      phoneCode: '请输入手机验证码',
      getPhoneCode: '获取手机验证码',
      passInput: '请输入手机密码',
      confirm: '确认',
      cancel: '取消',
    },
    GACertifyDialog: {
      title: '开启GA验证',
      gaCode: '请输入GA验证码',
      passInput: '请输入您的密码',
      confirm: '确定',
      cancel: '取消',
    },
    KYCCertifyDialog: {
      title: '开启KYC验证',
      countryCode: {
        title: '国家代码',
        label: '请选择国家代码',
      },
      certificationType: {
        title: '证件类型',
        label: '请选择证件类型',
      },
      firstname: {
        title: '姓',
        label: '请输入姓',
      },
      lastname: {
        title: '名',
        label: '请输入名',
      },
      idNum: {
        title: '证件号',
        label: '请输入您的证件号',
      },
      confirm: '确定',
      cancel: '取消',
    },
    pageTitle: '安全中心',
    phone: '用户手机号',
    phoneCertifyStatus: {
      title: '手机认证状态',
      label1f: '未认证',
      label1s: '已认证',
      label2: '申请认证',
    },
    GaCertifyStatus: {
      title: 'GA认证状态',
      label1f: '未认证',
      label1s: '已认证',
      label2: '申请认证',
    },
    KycCertifyStatus: {
      title: 'KYC认证状态',
      label1f: '未认证',
      label1s: '已认证',
      label2: '申请认证',
    },
    registerTime: '注册时间',
    lastLoginIp: '最后登录IP',
    loginNum: '登录次数',
    withdrawStatus: {
      title: '提现状态',
      labels: '可提现',
      labelf: '不可提现',
    },
  },

  main: {
    userDropdown: {
      security: '安全中心',
      treasure: '我的资产',
      power: '我的算力',
      changepass: '修改密码',
      logout: '退出',
    },
    footer: {
      contact: '联系我们',
      support: '支持',
      help: '帮助中心',
      law: '法律声明',
      protocol: '用户协议',
      about: '关于我们',
      policy: '隐私政策',
    },
  },

  power: {
    pageTitle: '我的算力',
    card: {
      total: '累计收益',
      yesterday: '昨日收益',
      available: '可提取收益',
    },
    tablle: {
      myOrder: '我的订单',
      progress: '进行中',
      wait: '待生效',
      end: '已结束',
    },
  },

  treasure: {
    pageTitle: '我的资产',
    accountDetail: '账户明细',
    card: {
      balance: '可用余额',
      wallet: '钱包',
      deposit: '充值',
      withdraw: '提现',
      record: '明细记录',
      drecord: '充值记录',
      wrecord: '提现记录',
      diya: '抵押账户总额',
      zhiya: '在质押的数量',
    },
    depositDialog: {
      title: '充值',
    },
    withdrawDialog: {
      title: '提现',
      coinType: '币种',
      availableNum: '可用数量',
      totalNum: '总数量',
      fee: '提现手续费',
      minNum: '最小提现数量',
      address: '请输入提现地址',
      amount: '请输入提现数量',
    },
  },

  aboutus: {
    title: '关于我们',
    yi: 'Digital Offers 通过以下方式向 Digital Profit 会员提供一站式的物理数据库挖 掘平台和网络营销独家服务',
    er: 'INTERPLANETARY TECHNOLOGY PTE.LTD（IPFS.FAN），是全球领先的存 储证明（PoS）数字资产挖矿机构 HPOOL 的 B2C 平台，\
        聚集了最精英的产品、 技术和精算团队，并与业内领先企业有着广泛而深入的战略合作。\
        IPFS.FAN 获 得了亚洲第一家也是最大的以区块链为核心的风险投资公司--风投，由以太坊创 建者 Vitalik Buterin 共同创建，\
        以及中国第一家非盈利区块链研究机构--万向区 块链，在区块链领域投资超过 200 亿美元的大额战略投资。',
    san: '通过独家合作关系，集中采购实体矿机，为数字盈利会员提供公开、专业、透明、 真实的采矿服务，并提供全面的专业运营维护。\
        通过一站式的专业管理，链接行 业内顶尖的矿机制造商、矿点、矿池和专业维护团队。\
        聚集了价格低廉、性能稳 定、经过严格筛选的矿机资源，提供安全合规的矿业投资渠道，帮助普通人参与 矿业生产。\
        公司的服务宗旨是：一键托管，严选矿机，合规守信，超低电价，最大利润分成。',
  },

  endorder: {
    orderNum: '订单号',
    orderTime: '下单时间',
    power: '算力',
    coinType: '币种',
    totalEarn: '累计收益',
    yesterdayEarn: '昨日收益',
    daysLeft: '剩余天数',
    status: '状态',
  },

  help: {
    title: '帮助中心',
    yi: '<h2>1.业务介绍</h2><h3>1.1 什么是 Digital Offers?</h3>Digital Offers 是一个一站式的数据库挖掘平台，由以下机构发布<br />INTERPLANETARY TECHNOLOGY PTE.LTD（IPFS.FAN），与矿池 HPOOL 一起，基于区块链技术。它凭借 IPFS.FAN 的内容和流量优势，为投资者提供公 开、公正、透明的真实挖矿服务。在利用集中采购和共建机制降低挖矿运营成本 的同时，还采用 TB 年度采购模式，降低各类投资者参与挖矿行业的门槛，提供 安全、合规的数据库挖矿投资渠道。IPFS.FAN 的 战略投资者包括 Fenbushi Capital 和 Wanxiang Blockchain.<br /><h3>1.2 Digital Offers 是如何运作的？</h3>Digital Offers 链接了业内顶尖的矿机制造商、矿场、矿池和专业的维护团队， 汇集了实惠而稳定的矿场资源，降低了整体运营成本和用户挖矿成本；它与 IPFS.FAN 深度连接，提供从挖矿到资产再到金融变现的一站式投资金融服务。 FAN，提供从采矿到资产到金融流动性的全生命周期的一站式投资理财服务。<br /><h3>1.3 TB 年度购买模式</h3> TB 年度购买模式以整个产品为服务单元，提供数据库矿机 的限时使用权转让服务。用户选择并购买该模式的相关产品后，将被授予相应矿 机一年的使用权。用户将选择数据库挖矿 TB 的数量，支付数据库矿机正常运行 的相关费用，并提供相应货币的钱包地址，以便收取数据库挖矿收入。在年度 TB 购买模式中，用户将不会购买数据库矿机。所有的数据库挖矿机都已经安装在 Digital Offers 的合作伙伴的数据仓库，用户只需购买相应的数据库采矿机 TB 的使用权。在使用期间，用户将从机器 TB 中获得所有实际的数据库挖掘收 入。在每年的使用期结束时，相应的服务将自动终止，用户可以再次下单续约一 年的时间。<br />注：实际的数据库挖掘收入是指实际产生的收入减去相当于总收入 20%的电力、 运营和维护费用。',
    er: '<h2>2.账户管理</h2><h3>2.1 我如何设置我的账户管理门户？</h3>在 Digital Profit 购买您的 Digital Offers 产品后，进入 www.DigitalOffers.io， 点击注册一个新账户。输入您在 Digital Profit 注册的电子邮件作为您的账户名 称，然后输入并确认您的密码。<br />注意：您必须使用与在 Digital Profit 注册时使用的电子邮件相同的电子邮件， 以确保您的购买被正确分配给您的安全和保障。<h3>2.2 如果我忘记了我的登录密码怎么办？</h3>点击首页右上角的\'我的登录\'，选择\'忘记密码\'，进入登录密码恢复功能，按照指 示提供相应的账户安全信息，在提交额外的认证后，输入并提交一个新的密码。 如果您不能提供额外的账户安全信息，请联系 Digital Profit Support 寻求帮助。<h3>2.3 我如何添加两步认证？</h3>点击首页右上角的\'我的用户中心\'，在\'谷歌认证\'区域点击\'添加\'，扫描谷歌认证 器中的二维码或手动输入序列号。如果你想使用谷歌认证器，在相应的区域填写谷歌认证器显示的验证码和其他账户安全信息，然后点击\'添加\'。<h3>2.4 如果认证丢失怎么办？</h3>请联系 Digital Profit Support 寻求帮助。<h3>2.5 我如何删除我的账户？</h3>请联系 Digital Profit Support，并告知他们您想取消您的账户，并提交您完整 的账户安全信息以供核实。 Digital Offers 将在收到您的批准后取消您的账户。 在您的账户被注销后，您账户中任何未使用的或未来的数据库采矿收益权、余额、 电费和未提取的采矿收益都将被视为放弃的资产，注销后无法取回。',
    san: `<h2>3.购买和支付</h2><h3>3.1 我如何进行购买？</h3>登录到您的 Digital Profit 后台，进入 Shop Digital Profit 链接。选择所需的 Digital Offers 产品，并点击继续，进入订单摘要和付款页面，完成您的购买。<h3>3.2 我的购买何时会显示在我的 的管理门户中。</h3>您的 的购买将星期五至星期四结束后的第一个星期一显示在您的管理门户网站 在购买期间，Digital Profit 的佣金期。如果您的购买当时没有显示，请确保付 款已经完成，并且用于注册您的 DigitalOffers.io 管理门户的电子邮件与用于在 Digital Profit 注册的电子邮件相同。如果有任何问题，请联系 Digital Profit 支 持部门寻求帮助。<h3>3.3 购买后多久 开始产生收入？</h3>您购买的 Digital Offers 将在周五至周四结束后的第一个周一开始开采。 购买 期间的 Digital Profit 佣金期。数据库挖矿奖励将在接下来的星期三开始每天显 示。<h3>3.4 与数字服务相关的成本</h3>数字化服务 的主要成本 的主要成本可分为每 TB 的年度成本和电力、操作和维护成本。 每年的 TB 购买成本。数字优惠的购买价格是每 TB 一年的成本。 Digital Offers 的购买价格是每 TB 一年的数据库开采成本。该价格将根据市场情况调整，实际 购买价格在用户付款时确定。<br />电费，运营和维护费。马尔斯金融将对所有的数据库挖掘收取电费、运营和维护 费，并为机器提供委托管理服务，包括机器的运输、现场支持、日常监控、维护、 修理和计算能力保证。电费、运营维护费将从每天的数据库挖掘收入中扣除。`,
    si: '<h2>4.盈利管理</h2><h3>4.1 如何查看矿机的状态？</h3>点击首页右上角的 "我的哈希值"，你会被带到一个页面，在那里你可以查看所 有的运行产品。<h3>4.2 如何计算预期收益？</h3>在 Digital Offers 提供的预期收益计算器中 Digital Offers 提供的预期回报计算 器中，选择产品，系统将根据所选产品和当前网络数据计算预期回报。<h3>4.3 我如何查看收益？</h3>你可以在 "我的哈希力 "页面的相应产品细节中看到收益详情。数据库挖矿收益 是每天结算的。数据库挖矿收益是扣除 20%的电费、运营维护费后的实际哈希值收益。收 益可以每天提取，也可以根据需要提取。<h3>4.4 我应该对我的 Digital Offers 奖励有什么期待？</h3>您的 Digital Offers 数据库挖矿奖励一般会在购买后的前 5-6 个月内增加，挖 矿也会达到更高的优化。在扣除电费、运营和维护费后，第一年的数据库挖矿奖 励预计约为 30 FIL。另外，如果再次购买，预计第二年的奖励将高出约 50%。<h3>4.5 哪些情况会造成收益波动？</h3>由于数据库挖矿受到各种因素的影响，如矿机、矿场、矿池以及整个网络的哈希 值、负载等，因此收益的波动是正常的，Digital Offers 不保证收益稳定。Digital Offers 保证用户的 Digital Offers 将保持不间断的运行，在机器出现故障时， 将立即切换到另一台同类型的矿机上，以保证用户的收益。Digital Offers 对因 客观事件无法预见、避免或克服的不可控风险造成的损失不承担任何责任，包括 自然灾害，如洪水、火山爆发、地震、山体滑坡、火灾、风暴和被中国有关部门 评为百年不遇以上的恶劣天气，政府行为和政府指令，城市级电网事故，以及战 争、罢工、民乱等社会异常现象。<h3>4.6 为什么我的挖矿产量会下降？</h3>除了矿机和矿池等挖矿资源外，产量还与区块链网络的总哈希力和难度有关。区 块链网络。除了硬件计算能力的波动，矿机哈希值功率和矿池哈希值功率的比例也会影响到可以分配使用的挖矿产出的比例。由于哈希值的比例总是在不断变化， 所以区块链网络的总哈希值和网络负载 区块链网络的总哈希值和网络负载将影 响整体的采矿产出。T 他的网络负载将根据全网哈希值的变化，大约每 14 天调 整一次，所以用户的哈希值收益将始终处于变化之中，其中一些将以比例波动的 形式出现。这些因素会导致挖矿产量的下降。',
    wu: '<h2>5.价格调整规则</h2><h3>5.1 价格调整规则适用于 数字报价的购买。</h3>数据库开采成本受开采回报周期、产能和价值预期的影响，基于 6 个月的理论回 报周期。如果有强烈的升值预期，而开采能力没有相应的提高，数据库开采的价 格就会大幅提高。同样地，当中长期价格预期贬值时，数字报价的价格也会下降。 数字报价也将下降。数字报价的价格 的数字报价出售。 Digital Offers 将根据 市场情况进行调整。<h3>5.2 电费、运营和管理费调整规则</h3>电费、运营和管理费将明确显示，并按日扣除。目前的费用是 20%，将自动从 数据库采矿收入中扣除。如果由于不可抗力（如政府行为和政府命令提高地区电 价，或由于城市或市镇的供电故障导致送电成本增加）导致电价上涨，相关费用 将相应调整并自动从数据库挖掘收入中扣除。',
  },

  law: {
    title: '法律声明',
    above: `本网站是由 IPFS.FAN 代表 Digital Offers 创建和维护的。 Digital Offers 保留 在任何时候更新这些条款的权利，恕不另行通知，用户也将受到这些更新的约束。 通过访问和查看本网站内容，注册成为用户，从本网站下载任何材料，或使用本 网站提供的材料，任何人都同意遵守以下条款和条件。这些条款构成了 Digital Offers 和用户的协议。如果用户不同意遵守这些条款，请不要使用本网站。 Digital Offers 保留在任何时候、任何情况下拒绝任何用户进入或使用本网站的 权利。Digital Offers 保留在任何时候自行决定纠正、修改或更新本声明的权利。`,
    yi: `
          <h3>1.版权声明</h3>
          <p>Digital Offers 拥有本网站相关网页上所有材料的版权，或者与本网站相关网页 上的材料提供者一起，拥有这些网页上材料的版权或使用许可。本网站的任何部 分内容都不得在不属于本网站的服务器上进行复制或镜像。未经 Digital Offers 明确的书面许可 Digital Offers。</p>
          <p>本网站所包含的域名、商标、文本、视听内容、图形和图像受商标和版权法的 保护。未经 Digital Offers 事先明确的书面许可，任何企业或个人不得以任何形 式复制或传播它们。 Digital Offers。任何未经授权使用本网站的行为将违反新 加坡版权法、新加坡商标法和其他相关法律法规，以及相关国际公约的规定。</p>
          `,
    er: `
          <h3>2.保护用户的知情权和隐私权</h3>
          <p>我们尊重用户的隐私，未经用户同意，我们不会主动收集用户信息或披露涉嫌侵 犯用户隐私的内容。未经用户同意，我们不会向任何第三方出售或提供作为我们 服务一部分的任何用户姓名、电子邮件地址、信息或地址。 Digital Offers 不会
公布或传播用户在本网站注册的任何信息，但以下情况除外。</p>
<p>1 .根据法院、仲裁机构或其他司法程序的决定或裁决。</p>
<p>2 .根据有关政府当局的要求。</p>
<p>3 .用户违反使用条款或有其他有损于矿业租赁平台利益的行为。</p>
<p>4 .相关法律、法规的其他要求。</p>
<p>如果用户希望使用本网站提供的需要注册的 服务，应同意以下内容：按照本网站服务注册表的提示提供真实、正确、最新、 完整的个人信息，并不时地更新注册信息，以确保其真实、正确、最新、完整。 如果用户提供任何虚假、不准确、过时或不完整、误导性的信息，或者本网站有 理由怀疑上述信息是虚假、不准确、过时或不完整、误导性的，本网站有权暂停 或终止用户的账户，并拒绝用户使用本网站现在和将来提供的全部或部分服务。</p>
          `,
    san: `
          <h3>3.商标和域名声明</h3>
          <p>Digital Offers 网站(www. DigitalOffers.io )是 Digital Offers 在新加坡或其他 国家的注册商标或合法授权商标。Digital Offers 在新加坡或其他国家的注册商 标或合法授权商标，未经 Digital Offers 书面授权，不得以任何方式使用。 Digital Offers。该网站的域名由 Digital Offers。未经 Digital Offers 的书面授 权，任何单位或个人不得使用。 Digital Offers。</p>
          `,
    si: `
          <h3>4.网站链接</h3>
          <p>如果用户希望链接到本网站，请与我们联系；只有在获得书面许可的情况下，才 能链接到本网站。 Digital Offers。在建立链接后，如果 Digital Offers 合理地 认为链接不再合适，可以撤销链接的许可。 如果 Digital Offers 合理地认为该
链接不再合适，则可撤销链接许可。当链接到本网站时，请务必使用文本链接（使 用 Digital Offers 的图形和文本，未经 Digital Offers 同意，禁止使用）。 未 经 Digital Offers 的书面许可，禁止使用 Digital Offers 的图形和文字）。Digital Offers）；与本网站的链接应设置为出现在一个单独的窗口中，而不是在链接方 网站的框架内。</p>
          `,
    wu: `
          <h3>5.免责声明</h3>
          <p>用户理解并同意，在任何情况下，矿工租赁平台都不对以下情况负责。</p>
          <p>(1) 交易的损失。</p>
          <p>(2) 交易利润或合同损失。</p>
          <p>(3) 业务中断。</p>
          <p>(4) 信息的损失。</p>
          <p>(5) 数据的损坏或丢失。</p>
          <p>(6) 计算能力的消亡或退出市场。</p>
          <p>(7) 由于政策因素造成的损失。</p>
          <p>(8) 由于不可抗力造成的损失。</p>
          <p>自成立以来。Digital Offers 一直致力于服务挖矿行业，为矿工提供从矿机采购、 维护、矿场部署、收益兑换等全方位的服务。云矿服务从最初的内部运营发展到 今天的正式运营。从成立之初到今天的正式运营，云矿服务以'拒绝利益部分分 配，算力透明运营'为投资理念，这一创新旨在为用户打造全球最佳算力服务平 台。为支持我们的朋友和客户提供优质的算法交易服务，实现利润最大化。</p>
          <p>任何登录或使用（包括直接和间接使用）Digital Offers 网站的人都被视为接受 并认可本声明。 Digital Offers 网站，即被视为已接受并认可本声明。本声明的 内容是根据新加坡的相关法律制定的，本声明的内容将根据新加坡的相关法律进 行解释和应用。</p>
          `,
  },

  myorder: {
    orderNum: '订单号',
    orderTime: '下单时间',
    power: '算力',
    coinType: '币种',
    totalEarn: '累计收益',
    yesterdayEarn: '昨日收益',
    daysLeft: '剩余天数',
    status: '状态',
  },

  policy: {
    title: '隐私政策',
    above: `我们尊重所有用户和网站访问者（统称为 "您 "和 "您的"）的隐私，并承诺将 尽力保护您的在线隐私。本隐私政策概述了 INTERPLANETARY TECHNOLOGY PTE.LTD（IPFS.FAN）、Digital Offers 及其附属实体（以下简称 "Digital Offers "或 "我们"、"我们的"）对用户个人数据的管理、收集、维护和处理过程。`,
    yi: `
          <h2>1.信息收集</h2>
          <p>我们可能会利用您的个人数据来提供和改进 IPFS.FAN 提供的矿工分享服务（" 服务"），并改进您在本网站的使用体验。"个人数据 "是指与已识别或可识别的 人有关的任何信息。我们将收集您在创建账户以使用服务时提供的信息。我们还 使用各种技术来收集和存储信息，包括 Cookies、像素标签和本地存储（如网络 存储的浏览器或应用程序数据缓存、数据库和服务器日志）。您对服务或本网站 的使用表明您同意我们根据本隐私政策对信息进行收集和使用。除非本文另有说 明，本隐私政策中使用的术语与我们的服务协议中使用的术语具有相同的含义。</p>
          <h3>1.1 注册</h3>
          <p>您在创建账户 时需要提供诸如您的电子邮件、电话号码、密码或其他信息。</p>
          <h3>1.2 支付信息</h3>
          <p>您的支付信息将被发送到我们的第三方支付处理器，您的使用表明您授权我们存 储您的加密钱包地址，我们可以通过我们的第三方支付处理器访问和保存用户信 息。</p>
          <h3>1.3 日志信息</h3>
          <p>当您访问我们的网站并登录您的账户时，我们将收集由您的浏览器发送的信息（" 日志数据"）。日志数据可能包括以下信息。您的计算机的互联网协议（IP）地 址、浏览器类型和版本、您访问的服务的网页、访问的时间和日期、在这些网页 上花费的时间以及其他统计数据。此外，我们可能使用第三方服务，如谷歌分析， 来收集、监测和分析这些信息，以加强我们的服务功能。第三方服务供应商有他 们自己的隐私政策来描述他们如何使用这些信息。此类第三方服务供应商只能在 代表我们执行任务的必要情况下使用您的个人数据。</p>
          <h3>1.4 我们如何使用您的个人信息</h3>
          <p>我们可能将您的个人信息用于以下目的：</p>
          <p>（1）向您展示我们的网站及其内容；</p>
          <p>（2）在我们的系统中识别您是我们的用户；</p>
          <p>（3）处理您的订单；</p>
          <p>（4）提供客户服务；</p>
          <p>（5）回应您的要求；</p>
          <p>（6）向您提供产品更新；</p>
          <p>（7）改进我们的网站。</p>
          <p>（8）发送与我们的产品有关的新闻、调查、特别优惠和其他促销材料；</p>
          <p>（9）与您沟通；</p>
          <p>（10）管理风险和保护网站，保护我们的服务和您免受欺诈活动；</p>
          <p>（11）遵守所有适用的法律和法规，并执行本网站和的服务协议 Digital Offers；</p>
          <p>（12）其他经您同意的目的。</p>
          <h3>1.5 关于 Cookies 的信息</h3>
          <p>为了给您提供更好的访问体验，我们使用 Cookies 来让本网站识别您的浏览器并存 储用户偏好和其他信息。如果您的浏览器或浏览器的附加服务允许，您可以改变 Cookies 的接受程度或拒绝 Cookies。详情见 AboutCookies.org。但是，如果 你这样做，在某些情况下可能会影响你访问我们网站的体验，或使你无法使用我 们的某些服务。</p>
          `,
    er: `
          <h2>2.第三方服务提供者</h2>
          <p>我们可能雇用第三方为我们提供业务相关的服务。该等第三方只能在为我们提供 服务时获得您的个人资料，并有义务不披露或使用该等资料作任何其他用途。但 是，我们将您的个人资料提供给第三方服务提供者的行为，不应视为我们对第三 方服务提供者侵犯。</p>
          `,
    san: `
          <h2>3.如果你是欧洲经济区（EEA）的公民</h2>
          <p>如果您是欧洲经济区（EEA）的公民，您享有基于适用法律和法规的某些数据保 护权利。我们的目标是采取合理的措施，使您能够改变、修改、删除或限制使用 您的个人数据。如果您想了解我们所持有的关于您的个人信息，如果您想从我们 的系统中删除您的个人信息，请与我们联系。然而，我们对欧洲经济区（EEA） 公民的数据操纵行为不承担任何法律责任。</p>
          `,
    si: `
          <h2>4.信息安全</h2>
          <p>尽管我们致力于保护我们的网站和服务，但您有责任保护和维护您的个人信息的 安全，并核实我们保存的关于您的个人信息是否正确和更新。你必须防止对你的 账户进行未经授权的访问。在使用共享电脑时一定要注销，不要向任何未经授权的人透露您的账户和密码以及任何其他账户信息。 然而，没有任何通过互联网的 传输或电子存储方法是 100%安全的。因此，虽然我们努力保护您的个人信息， 但我们不能保证其绝对安全。我们不能保证您传输到我们网站和/或通过我们服 务的个人信息的安全。任何个人信息的传输都应由您自己承担风险。</p>
          `,
    wu: `
          <h2>5.国际数据传输</h2>
          <p>通过提交您的信息，您同意您的信息（包括个人数据）可能被传输和存储到您所 在国家/地区管辖范围以外的计算机和系统。在这种情况下，我们将努力确保您 的信息受到与您所在国家/地区监管程度相同的保护。然而，我们不对这种保护 所带来的后果承担任何法律责任。</p>
          `,
    liu: `
          <h2>6.第三方链接</h2>
          <p>我们的服务可能包含指向非我们运营的第三方网站的链接。如果您点击此类链接， 您将被引导到相关的第三方网站。本隐私政策不适用于其他第三方网站。我们强 烈建议您检查您所访问的网站的隐私政策。Digital Offers 既不能控制任何第三 方网站或其服务内容和隐私政策，也不承担任何责任。</p>
          `,
    qi: `
          <h2>7.儿童的隐私</h2>
          <p>我们不会有意在我们的网站上收集或保存 16 岁以下人士的个人资料，我们网站 的任何部分都不是针对 16 岁以下人士的。如果你是 16 岁以下的人，或者你是 16 岁但不从自己的劳动中获得收入，请不要以任何方式使用或访问本网站。如 果我们知道我们意外地收集了 16 岁以下人士的个人资料，我们将根据适用的法 律和法规删除或采取其他适当的措施来处理这些个人资料。</p>
          `,
    ba: `
          <h2>8.个人资料使用目的的改变</h2>
          <p>如果我们决定将您的个人数据用于本隐私政策所述以外的任何目的，我们将通知 您，并向您提供有效的退出选择，以便不将您的个人数据用于本隐私政策所述以 外的任何目的。</p>
          <p>我们可能会向您发送有关新服务和活动的电子邮件。您可以在我们发送的每封电 子邮件中选择 "取消订阅 "功能，以拒绝接收 "数字优惠 "的促销电子邮件。 Digital Offers。但是，同意使用这项服务的用户将继续收到与服务有关的其他 重要电子邮件。</p>
          `,
    jiu: `
          <h2>9.信息存储时间</h2>
          <p>除非适用的法律和法规要求，我们只在为实现本政策所述的目的所需的时间内保 留和保存您的个人信息。在法律允许的情况下，我们可能为了保存记录或通过法 律手段保证我们的权益而存储某些个人信息。我们对信息的存储是按照相关法律 法规的要求进行的，我们对信息存储行为不承担任何法律责任。</p>
          `,
    shi: `
          <h2>10.我们如何了解、获取、修改或删除您的个人信息</h2>
          <p>如果您希望确认我们正在处理您的数据，或访问我们可能持有的您的个人数据， 改变或删除我们收集的您的个人信息，请通过隐私政策中所述的联系信息与我们 联系。</p>
          `,
    shiyi: `
          <h2>11.联系我们</h2>
          <p>如果有任何与本隐私政策有关的问题，请联系我们。</p>
          `,
  },

  progress: {
    orderNum: '订单号',
    orderTime: '下单时间',
    power: '算力',
    coinType: '币种',
    totalEarn: '累计收益',
    yesterdayEarn: '昨日收益',
    daysLeft: '剩余天数',
    status: '状态',
  },

  protocol: {
    title: '用户协议',
    yi: `
          <h2>数码产品用户注册服务协议</h2>
          <p>本注册服务协议（以下简称 "协议"）涉及用户与 Digital Offers 之间的权利和 义务的规定。 的服务相关的权利和义务。 Digital Offers 及其附属公司。通过 访问和/或使用本网站，用户接受并同意本协议的所有条款和条件。 Digital Offers 有权修改本协议的条款，修改后的协议一旦公布，将有效地取代原来的 协议。用户可以在任何时候查看最新的协议。</p>
          `,
    er: `
          <h2>服务内容</h2>
          <p>1、 Digital Offers及其关联公司采用本公司的系统，通过互联网为用户提供矿机的租 赁和管理以及未来可能增加的其他服务。</p>
          <p>2、对于用户提供的注册信息，用户同意(1）提供合法、真实、准确、详细的个 人资料；（2）如有变动，及时更新用户信息。如果用户提供的注册信息不合法、 不真实、不准确、不完整，用户应承担由此引起的相应责任和后果，并且 Digital Offers 可以保留终止用户使用其提供的服务的权利。 Digital Offers。</p>
          `,
    san: `
          <h2>用户的权利</h2>
          <p>1、用户的用户名、密码和安全性。(1) 用户有权选择是否成为Digital Offers的 注册用户。 数字优惠 "的注册用户。如果用户选择成为 Digital Offers 的注册 用户，用户可以创建一个账户。 如果用户选择成为 Digital Offers 的注册用户， 用户可以创建一个账户。帐户的命名和应用应遵守相关法律法规和网络道德规范。 帐号中不得含有任何侮辱、威胁、淫秽、谩骂及其他侵犯他人合法权益的文字。 (2) 用户一旦注册成功，成为 "Digital Offers"的注册用户，将获得 "Digital Offers"的 账号。 的注册用户，用户将获得账号（手机号或邮箱）和密码，并对以该组账号和密码登录系统后的所有活动和事件负责。用户应承担由该账户的言行直接或 间接引起的所有法律责任。(3) 用户有义务妥善保管账户和密码、短信验证码和 谷歌验证码，并对用户名和密码以及谷歌密钥的安全负全部责任。用户应承担由 于用户的行为导致的用户名或密码或谷歌密钥泄露而引起的任何法律后果。 对 于因用户自己泄露这些信息而造成的财产损失，Digital Offers 不承担任何责任。 (4) 如果用户的密码丢失，可以通过发送到注册邮箱的链接重新设置密码。用户 应立即通知 Digital Offers，一旦发现任何非法用户帐号或其他安全漏洞。</p>
          <p>2、Digital Offers承诺：用户的密码、姓名、手机号码或其他非公开信息不会提供给 任何第三方，除非是为了提供用户服务，没有合法理由或事先得到用户的许可。</p>
          <p>3、用户有权参加Digital Offers组织提供的各种线上和线下活动。 数字优惠。</p>
          <p>4、用户有权享受由 Digital Offers 提供的其他服务。 4、用户有权根据 Digital Offers 网站上的规定，享受 Digital Offers 提供的其他服务。 数字优惠的其他 服务。</p>
          `,
    si: `
          <h2>用户的义务</h2>
          <p>1、网站使用者不得危害国家安全，泄露国家秘密，侵犯国家集体和公民的合法 权益，不得制作、复制、传播下列信息。(1）煽动抗拒或者破坏宪法、法律、行 政法规的实施；（2）煽动民族仇恨、民族歧视，破坏民族团结；（3）捏造或 者歪曲事实，散布谣言，扰乱公共秩序。(4）宣扬封建迷信、淫秽、色情、赌博、 暴力、凶杀、恐怖或者教唆犯罪；（5）公开侮辱他人或者捏造事实诽谤他人， 或者进行其他恶意攻击；（6）其他违反宪法、法律和行政法规的行为；（7） 从事商业广告活动。</p>
          <p>2、用户不得以任何方式恶意注册Digital Offers网站账号。包括但不限于以营利、炒作、套现、评奖等为目的，以任何方式恶意注册Digital Offers网站账号。用户 不得侵占其他用户的账户。如果用户违反了上述规定。 Digital Offers有权直接采取 一切必要措施，取消因违反规定而获得的利益，并通过诉讼对用户进行追究。</p>
          <p>3、用户不得以 Digital Offers 以任何形式作为各种非法活动的场所、平台或媒 介。未经 Digital Offers 的授权或允许 用户不得利用本网站的名义从事任何商 业活动，也不得利用 Digital Offers 作为任何形式的商业活动的场所、平台或媒 介。</p>
          `,
    wu: `
          <h2>豁免</h2>
          <p>1、基于互联网的特殊性。 Digital Offers不保证服务不被中断。它不保证服务的及时 性和安全性，也不承担非由其引起的任何责任。 Digital Offers。 Digital Offers 力求使用户安全地访问和使用本网站，但它不表示或保证本网站或其服务器没有 病毒或其他潜在的有害因素。因此，用户应使用业界认可的软件来检测从 Digital Offers 下载的文件中的任何病毒。 Digital Offers。 Digital Offers 对互联网安 全不承担任何责任或保证，特别是我们对黑客攻击、网络钓鱼或其他恶意活动不 承担任何责任。</p>
          <p>2、 Digital Offers 不对用户发布的信息的保存、修改、删除或储存失败负责。 对网站上非故意造成的印刷错误、遗漏等不承担任何责任。 Digital Offers。 Digital Offers 有权但无义务改进或以其他方式纠正网站任何部分的遗漏或错误。</p>
          <p>3、除非Digital Offers公司以书面形式明确同意 Digital Offers公司对用户通过连接或下载 本网站获得的任何内容信息不承担任何责任，包括但不限于广告，也不保证其准 确性、完整性和可靠性。 Digital Offers 对用户因本网站上的信息而购买或获得 的任何产品、服务、信息或材料不承担任何责任。用户应自行承担使用本网站信息的风险。</p>
          <p>4、所有给用户的通知将通过官方网站上的公告、站内信、电子邮件、客服电话、 短信或普通邮件等 方式传递。 对于非通过正常渠道获得的中奖、优惠或其他活动或信息，数字优 惠不承担任何责任。 Digital Offers。</p>
          `,
    liu: `
          <h2>信息隐私</h2>
          <p>1、 本条所指的数字优惠用户信息是指符合法律、法规和有关规定的信息，以及 以下范围。(1) 用户在注册 Digital Offers 帐户时提供给 提供的个人信息；(2) 用户在使用 Digital Offers 服务、参与网站活动或访问网站时，向 Digital Offers 提供的个人信息。 Digital Offers 服务、参与网站活动或访问网站页面时。 Digital Offers 自动接收并记录用户的浏览器或移动客户端的数据，包括但不限 于 IP 地址、网站 cookies 中的信息和用户请求的网页记录；(3) Digital Offers 从商业伙伴处合法获得的用户的个人信息 Digital Offers 从商业伙伴处获得的 用户个人信息；(4) Digital Offers 通过合法途径获得的其他用户的个人信息。数 字优惠通过合法途径获得的其他用户的个人信息。</p>
          <p>2、 Digital Offers 的承诺。 在没有合法理由或未经用户事先许可的情况下， Digital Offers 不会将用户的密码、姓名、手机号码或其他非公开信息透露给任 何第三方。</p>
          <p>3、用户的个人信息将在以下法定条件下被部分或全部披露。(1）经用户同意 向用户或其他任何第三方披露；（2）根据法律、法规或其他有关规定，或根据 行政机关的要求，向行政、司法机关或其他第三方披露；（3）其他披露由 Digital Offers 根据法律、法规和其他有关规定进行披露。</p>
          `,
    qi: `
          <h2>提供、修改和终止服务</h2>
          <p>1、除了接受 "Digital Offers "的服务外 的服务外，用户还同意接受有关 Digital Offers 提供的服务信息。 Digital Offers提供的服务。用户特此授权Digital Offers向其 E-mail、手机、通讯地址等发送商业信息。用户可以进入 Digital Offers 的相关 网页 Digital Offers 的相关网页，对用户资料进行修改</p>
          <p>2、Digital Offers 保留在任何时候修改或中断服务而不通知用户的权利。 Digital Offers 有权修改或中断服务而不需对用户或任何不直接参与的第三方负 责。</p>
          <p>3、如果用户对本协议的修改有异议或对 Digital Offers 提供的服务不满意，用 户可以行使以下权利 数字报》提供的服务有异议的，用户可以行使以下权利。 (1) 停止使用 Digital Offers 的服务 (1) 停止使用 Digital Offers 的服务；(2) 有 效地通知 通过开发商邮箱等合法渠道书面通知 Digital Offers 停止向其提供服 务。终止服务后，用户使用 Digital Offers 服务的权利 应立即终止。在这种情 况下。Digital Offers 没有义务将任何未处理的信息或未完成的服务传送给用户 或任何与之无直接关系的第三方。</p>
          `,
    ba: `
          <h2>适用的法律和判决现场</h2>
          <p>1、所有因用户使用 "Digital Offers"网站而引起的或与之相关的争议、索赔或其他 事项 数字优惠 "所引起的或与之有关的所有争议或索赔，均应受当地法律的约 束。</p>
          <p>2、用户与Digital Offers之间的任何争议 2、用户与 Digital Offers 之间的任何争议， 应在诚信原则的基础上通过协商解决。如果不能通过协商达成协议，则应向Digital Offers 所在地的管辖法院提起任何法律诉讼。数字报社所在地的法院提 起诉讼。</p>
          `,
  },

  waitorder: {
    orderNum: '订单号',
    orderTime: '下单时间',
    power: '算力',
    coinType: '币种',
    totalEarn: '累计收益',
    yesterdayEarn: '昨日收益',
    daysLeft: '剩余天数',
    status: '状态',
  },
}
export { allTranslation };