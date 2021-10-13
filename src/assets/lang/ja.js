const allTranslation = {
  changepass: {
    oldPass: '現在のパスワード',
    oldPassInput: '現在のパスワードを入力してください',
    newPass: '新しいパスワードを入力してください',
    newPassInput: '少なくとも2つの大文字と小文字、数字を含む6～20桁のパスワードを入力してください',
    confirmPass: 'パスワードを確認する',
    confirmPassInput: 'もう一度パスワードを入力してください',
    confirmBtn: '確認',
    cancelBtn: 'キャンセル',
    notifyMsg1: '新しいパスワードは古いパスワードと同じではいけません!!!',
    notifyMsg2: '2つの矛盾したパスワード入力!!!',
    notifyMsg3: 'パスワードの変更に成功しました。 もう一度ログインしてください。',
  },
  detail: {
    zhichu: '経費',
    shouru: 'インカム',
    pageTitle1: 'アカウントの基本情報',
    pageTitle2: '住宅ローンの口座情報',
    t1: 'インカムレコードID',
    t2: '番号',
    t3: '通貨',
    t4: 'カテゴリー',
    t5: 'タイプ',
    t6: '関連レコードID',
    t7: '作成時間',
  },
  record: {
    withdraw: {
      pageTitle: '現金引き出し記録',
      t1: '引き出し番号',
      t2: '時間',
      t3: '引き出し回数',
      t4: '引き出し費用',
      t5: 'ブロックチェーントレーディング番号',
      t6: '引き出しのアドレス',
      t7: '処理状況',
    },
    deposit: {
      pageTitle: '充電の記録',
      t1: '充電回数',
      t2: 'ブロックの高さで交換',
      t3: 'トランザクション番号',
      t4: '金額',
      t5: 'リチャージアドレス',
      t6: '充電時間',
      t7: '処理状況',
    },
  },
  login: {
    emailInput: 'メールアドレスご入力',
    passwordInput: 'パスワードご入力',
    forget: 'パスワードをお忘れですか？',
    button: 'ログイン',
    tip: 'まだアカウントを持っていませんか？',
    register: '無料新規登録',
  },
  register: {
    emailInput: 'メールアドレスご入力',
    passwordInput: 'パスワードご入力',
    confirmPass: 'パスワードを確認してください',
    verifyCode : '認証コードをご入力ください',
    sendCode: 'コードの送信',
    agree: '周覧した上同意します',
    pp: 'プライバシーポ',
    button: '登録',
    exist: 'すでにアカウントをお持ちの方',
    login: 'ログイン',
    msg1: 'パスワードを空にすることはできません。',
    msg2: '2回入力したパスワードは同じでなければなりません。',
    msg3: '同意する場合はチェックを入れてください',
    msg4: 'ログインページへのジャンプについて',
    msg5: 'お客様のメールにベリファイコードを送信することに成功',
  },
  forget: {
    email: 'メールアドレスご入力',
    verifyCode: '認証コードをご入力ください',
    sendCode: 'コードの送信',
    password: 'パスワードご入力',
    confirmPass: 'パスワードを確認してください',
    button: '確認',
    attention: '送信されたメールアドレスのURLから「sign=」以降の内容をコピーして、このページの「Send Code」ボタンの左にある入力ボックスに入力してください。ただし、メールアドレスのURLをクリックしないでください。',
    warn1: '2回入力したパスワードは同じでなければなりません。',
    warn2: 'パスワードを空にすることはできません。',
  },
  security: {
    phoneCertifyDialog: {
      phonePre: '市外局番を選択してください',
      phoneNumInput: '携帯番号',
      phoneCode: '携帯電話の認証コードを入力してください',
      getPhoneCode: 'モバイル認証コードの取得',
      passInput: 'パスワードご入力',
      confirm: '確認',
      cancel: 'キャンセル',
    },
    GACertifyDialog: {
      gaCode: 'GA認証コード',
      passInput: 'パスワードご入力',
      confirm: '確認',
      cancel: 'キャンセル',
    },
    KYCCertifyDialog: {
      countryCode: {
        title: '国番号',
        label: '選択してください',
      },
      certificationType: {
        title: '証明書タイプ',
        label: '選択してください',
      },
      firstname: {
        title: 'ファーストネーム',
        label: 'お名前を入力してください',
      },
      lastname: {
        title: 'ラストネーム',
        label: '苗字を入力してください',
      },
      idNum: {
        title: 'IDカード番号',
        label: 'あなたのID番号を入力してください',
      },
      confirm: '確認',
      cancel: 'キャンセル',
    },
    pageTitle: 'セキュリティセンター',
    phone: '携帯番号',
    phoneCertifyStatus: {
      title: '携帯番号の認証状態',
      label1f: '未認証',
      label1s: '認証',
      label2: '認証を申し込む',
    },
    GaCertifyStatus: {
      title: 'GA認証状態',
      label1f: '未認証',
      label1s: '認証',
      label2: '認証を申し込む',
    },
    KycCertifyStatus: {
      title: 'KYC認証状態',
      label1f: '未認証',
      label1s: '認証',
      label2: '認証を申し込む',
    },
    registerTime: '登録時間',
    lastLoginIp: '最終ログインIP',
    loginNum: 'ログイン数',
    withdrawStatus: {
      title: '引き出し状態',
      labels: '可能',
      labelf: '不可',
    },
  },
  aboutus: {
    title: '私たちについて',
    yi: 'Digital Offersは、Motorola、Tencent、Kingsoftなどの著名な企業の商品、テクノロジー、チームを集め、業界トップの企業との広範かつ深い戦略的協力関係を持つMars Blockchainを通じて、ワンストップのデータベースマイニングプラットフォームやネットワークマーケティングをDigital Profitのメンバーに独占的に提供しています。',
    er: 'Mars BlockchainはFeng Wang氏により設立され、IDG Capital、Ceyuan Capital、Fun-City Capital、OK Capital、Huobi Capital、Binance Capital、FutureCapital、そしてJihan Wuが設立したMatrixportから度々、戦略的投資を受けることに成功しています。',
    san: '当社の独占的な関係を通じて、マイニングマシンを集中的に調達し、Digital Profitメンバーのために、オープン、専門的、透明性の高いリアルなマイニングサービスを包括的で、専門的な運用とメンテナンスも含め提供しています。ワンストップの専門的な管理を通じて、業界トップのマイニングマシンメーカー、マイニング設備、マイニングプール、プロのメンテナンスチームからのサポートを実現しています。投資家のみならず、一般の方も考慮した手頃な価格、安定、厳密に選択されたマイニングリソースで、安全で準拠したマイニング投資チャンネルを提供します。同社のサービス理念は、ワンクリックエスクロー、マイニングマシンの厳格な選択、コンプライアンスと信頼性、超低価格電力、最大の利益配分を提供することです。',
  },
  endorder: {
    orderNum: '注文番号',
    orderTime: '注文受付時間',
    power: 'Power',
    coinType: '通貨',
    totalEarn: '累積利益',
    yesterdayEarn: '昨日の業績',
    daysLeft: '残り日数',
    status: 'ステータス',
  },
  help: {
    title: 'ヘルプセンター',
    yi: `<h2>1. 事業紹介</h2>
    <h3>1.1 Digital Offersとは？</h3>
    Digital Offersとは、INTERPLANETARY TECHNOLOGY PTE.LTD (IPFS.FAN) とマイニングプールのHPOOL がブロックチェーン技術を駆使して構築したワンストップのデータベースマイニングプラットフォームです。IPFS.FANのコンテンツやトラフィックの優位性を活かし、投資家にオープンで公平かつ透明性の高いリアルマイニングサービスを提供しています。集中調達やマシンを他社と共用された場所に設置する事で、マイニング運用のコストを削減する一方、あらゆる投資家の参入をより促すよう、1年単位でのTB購入モデルを採用し、安全でコンプライアンスに準拠したデータベースマイニング投資チャンネルを提供しています。
以下、IPFS.FANの戦略パートナーを表記。
Fenbushi Capital、Wanxiang Blockchain
    <h3>1.2 Digital Offersは、どのように運営されていますか？</h3>
    Digital Offersは、業界トップのマイニングマシンメーカーを始め、マイニングプール、一流のメンテナンスチーム等からのサポートを受けている事で、全体的の運営コストとユーザーのマイニングコストの削減を実現しております。IPFS.FANとの信頼された関係性をもとに、マイニングから資産、金融の流動性まで、全体を通してワンストップで可能な投資金融サービスを提供しています。
    <h3>1.3 1年単位でのTB購入モデル</h3>
    1年単位でのTB購入モデルとは、本サービスの利用期間、契約期間を1年とし、データベースマイニングマシンの使用権利を期間限定で譲渡するサービスとなります。ユーザーは、各自データベースのマイニングTB数を選定し、マイニングマシンの運用コストを支払い、マイニング報酬を定期的に回収するために必要となるご自身のウォレットアドレスを運営側に共有頂きます。
本購入モデルは、ユーザーが実際にデータベースのマイニングマシンを保有・購入する形式とは異なります。データベースのマイニングマシンは、既にDigital Offersのパートナーのデータウェアハウスにインストールされており、ユーザーは、本データベースのマイニングマシンのTB購入数に応じた期限付きの使用権利を保有・購入する形式となります。ユーザーは、使用期間中に発生したデータベースのマイニング報酬をすべて受け取ることになります。使用期間が満了した場合、本サービスは自動的に終了となります。尚、本サービスの利用期間を更新される場合、ユーザーは改めて購入手続きを行う必要がございます。<br />
注：実際のデータベースのマイニング報酬とは、生成された総収益の20％に相当する電気代、運用費、メンテナンス費を差し引いたものを示します。`,
    er: `<h2>2. アカウント管理</h2>
    <h3>2.1 アカウント管理ポータルの設定方法は？</h3>
    Digital ProfitにてDigital Offers 製品をご購入後、www.DigitalOffers.io にアクセスして頂き、[無料新規登録]へお進みください。Digital Profit にて登録の際に使用頂いているメールアドレスをアカウント名として入力し、パスワードの設定・確認をお願い致します。
    注: ご購入頂いた製品が、適切に割り当てられている事、お客様自身の安全とセキュリティを確保するためにも、Digital Profitにて登録の際に使用したメールアドレスと同じメールアドレスをご利用ください。
    <h3>2.2 ログインパスワードを忘れてしまった場合は？</h3>
    www.DigitalOffers.ioにアクセスして頂き、「パスワードお忘れの方」のボタンをクリックし、パスワードをリセットすることができます。
追加のアカウントセキュリティ情報がない場合、Digital Profitサポートまでお問い合わせください。<br />
注意： パスワードをリセットした２４時間内に資産の出金はできません。
     <h3>2.3 ２段階認証を追加するには？</h3>
     ホームページの右上にある「マイページ」から「ユーザーセンター」というボタンをクリックし、「Google認証」から「認証」を選択してください。Google AuthenticatorのQRコードをスキャン、もしくはシリアル番号を手動で入力ください。Google Authenticatorを利用する場合、Google Authenticatorで表示される認証コードとその他アカウントのセキュリティ情報を該当する欄に入力し、「追加」してください。
     <h3>2.4 認証が失われた場合は？</h3>
     Digital Profitサポートにお問い合わせください。
     <h3>2.5 アカウントを削除するには？</h3>
     Digital Profitサポートまでご連絡ください。アカウントを削除したい旨を伝え、アカウントセキュリティ情報をご提示ください。Digital Offersは、ご本人様の承認が取れ次第、アカウントを削除致します。削除された際には、本アカウントのマイニング報酬権、残高、電気代、未出金のマイニング報酬全てが放棄され、削除後に回収することは出来かねますので予めご了承ください。`,
    san: `<h2>3. 購入と支払いに関して</h2>
    <h3>3.1 購入方法は？</h3>
    Digital Profitのバックオフィスにログインし、ショップ Digital Profitのリンクへお進みください。 購入希望のDigital Offers を選択し、[続ける] をクリック。注文の詳細と支払いページに移動して購入手続きをお願い致します。
    <h3>3.2 購入した商品は、いつDigitalOffers.io の管理ポータルに表示されますか?</h3>
    購入頂いたDigital Offersは、Digital Profitのコミッションの支払い期間である金曜日から木曜日を期日として、翌週の月曜日に管理ポータルに表示されます。購入頂いてから翌週の月曜日に表示されない場合は、支払いが完了していることを改めてご確認ください。尚、 DigitalOffers.io の管理ポータルを登録する際に使用したメールアドレスが、Digital Profitの登録に使用したものと同じであることもご確認ください。その他、ご不明な点がある場合は、Digital Profitサポートまでお問い合わせください。
    <h3>3.3 Digital Offers を購入後、どのくらいの期間で報酬を得られますか?</h3>
    Digital Offers は、ご購入された翌週の月曜日からマイニングを開始致します。マイニング報酬は、2日後の水曜日から日々、管理ポータル内にて表記されます。
    <h3>3.4 Digital Offers 関連のコスト</h3>
    Digital Offersの主なコストは、TBあたりの年間の費用、電気代、運用・メンテナンス費用に分けることができます。
1年単位でのTB購入費用:  Digital Offersの購入価格は、データベースのマイニングを行う際に必要となるTB数あたりのコストになります。購入価格は、市場の状況も考慮した上で決定されます。
電気代、運用費、メンテナンス費: IPFS.FANは、全てのデータベースマイニングに掛かる電気代、運用費、メンテナンス費をユーザーから徴収することで、マシンの輸送、現地サポート、日々の監視、メンテナンス、修理、コンピューティングパワーの保証など、マシンの管理業務を受託致します。電気代、運用費、メンテナンス費は、日々のデータベースマイニングの報酬から差し引かれますので、予めご了承ください。`,
    si: `<h2>4. 報酬の管理に関して</h2>
    <h3>4.1 マイニングマシンの状態を確認するには？</h3>
    ホームページの右上にある「マイページ」から「収益管理」をクリックして、稼働している製品を確認できるページへ移動致します。
    <h3>4.2 報酬の予測値を計算するには？</h3>
    Digital Offersが提供する予測値計算機で、本製品を選択してください。
日々のネットワークデータに基づいたシステムが、報酬の予測値を計算いたします。
    <h3>4.3 マイニング報酬は、どのように確認できますか？</h3>
    マイニング報酬の詳細は、「収益管理」ページからご確認頂けます。
マイニング報酬は、日々計算されており、電気代、運用費、メンテナンス費の20%を差し引いた数値が、実際のマイニング報酬となります。こちらの報酬は、お好きなタイミングで日々出金することが可能となります。
    <h3>4.4 Digital Offers の報酬から期待できることは？</h3>
    Digital Offers のマイニングの報酬は、一般的に購入から 5～6 か月の間で報酬分が増加いたします。この段階で、マイニングが最適化されます。初年度のマイニング報酬予測値は、電気代、運用費、メンテナンス費を差し引き、約 30 FIL と想定されております。尚、契約更新して2 年目も継続した場合、マイニング報酬は、約 50％アップすると予測されます。
    <h3>4.5 マイニング報酬は、どのような状況で変動しますか？</h3>
    データベースのマイニングは、マイニングマシン、マイニング設備、マイニングプール、ネットワーク全体のハッシュパワー等、様々な要因の影響を受けるため、報酬の変動は通常のことであり、Digital Offers含めこちらの一律とした報酬のリターンは保証するものではありません。Digital Offersは、ユーザーのDigital Offersが中断されずにマイニングを維持することを保証し、マシンに障害が発生した場合には、直ちに同種の別のマイニングマシンに切り替え、ユーザーの報酬を保証します。Digital Offersは、洪水、火山噴火、地震、地滑り、火災、嵐、中国当局が100年予測不可能なレベルと評価した悪天候などの自然災害、政府の行動や政府の指示、都市レベルの送電網事故、戦争、ストライキ、内乱などの社会的異常など、客観的な事象によって予測、回避、または克服できなかった制御不能なリスクに起因する損失については責任を負いません。
    <h3>4.6 なぜマイニング量が減少しているのか？</h3>
    マイニングマシンやマイニングプールなどのリソースに加えて、マイニング量は、ブロックチェーンネットワークの総ハッシュパワーや複雑さにも関係しています。ハードウェアのコンピューティング能力の変動に加えて、マイニングマシンのハッシュパワーとマイニングプールのハッシュパワーの比率は、マイニングに使用可能なパーセンテージにも影響を与えます。ハッシュパワーが常に変動する為、総ハッシュパワーとネットワークの混雑状況でマイニング量も変動致します。ネットワーク全体のハッシュパワーの変動に応じて、約14日ごとに調整が行われます。その為、ユーザーの報酬は常に流動的になります。これらの要因により、マイニング量が低下する可能性もございます。`,
    wu: `<h2>5. 価格調整ルール</h2>
    <h3>5.1 Digital Offers購入時の価格調整ルール</h3>
   データベースマイニングのコストは、6ヶ月の理論的なペイバックサイクル(払戻しサイクル)に基づいて、マイニングの払戻しサイクル、容量、価値の期待値に影響されます。激しい増加が期待されているに構わず、マイニング容量の増加がない場合、データベースマイニングの価格は大幅に上昇する可能性があります。同様に、中長期の価格が減少傾向にある場合、Digital Offersの価格も下落いたします。Digital Offersにて販売されるDigital Offersの価格は、市場の状況に応じて調整されます。
    <h3>5.2 電気代、運用費、管理費の調整ルール</h3>
    電気代、運用費、管理費はアカウント内にて明確に表示され、マイニング報酬から日々20%差し引かれる仕組みになります。不可抗力（政府の行動や政府の命令による地域の電気料金の値上げ、市や自治体の電力供給障害による配送コストなど）により、電気代が上昇した場合は、それに応じて本パーセンテージも再度調整され、各ユーザーのマイニング報酬から自動的に差し引かれます。`,
  },
  law: {
    title: '法的声明',
    above: `このサイトは海南天辰网络科技有限公司（以下、「Digital Offers」という）によって運営されています。当サイトにアクセス、内容閲覧、ユーザー登録、当サイトからいかなる資料のダウンロード、あるいは当サイトから提供された資料を使う場合、下記の条項を遵守することに同意することと見なします。これらの条項はDigital Offersとあなたの間の協議になります。これらの条項を遵守することに同意しない場合は、当サイトを使用できません。Digital Offersは通知なしにいつでも下記の条項を更新する権利を保留しています。これらの更新は同様にあなたを制約します。いかなる時間でも、いかなる場合でも、Digital Offersはいかなるユーザーのアクセス・利用を拒否する権利があります。Digital Offersは規約などに関して随時訂正、修正、更新する権利を保留します。`,
    yi: `
    <h3>1. 著作権に関する声明</h3>
    <p>Digital Offersは独立でこのウェブサイトの関連ページ内すべての資料の著作権を持っています。あるいは当ウェブサイトの関連ページ内の資料の提供者と共同でこのホームページ内の資料の著作権あるいはウェブサイトの使用権を持っています。Digital Offersの明確な書面許可なしに、当サイト上のいかなる内容に対して複製または非Digital Offers所属のサーバー上でミラーリングをしてはいけません。</p>
    <p>当サイトに掲載されているドメイン名、商標、文字、映像および音声コンテンツ、図形および画像は、いずれも関連商標と著作権の法的保護を受けています。Digital Offersから事前に書面で明確な許可を得てない限り、いかなる企業あるいは個人もいかなる形式で複製または伝達してはいけません。本サイトを無許可で使用する行為はすべて「中華人民共和国著作権法」、「中華人民共和国商標法」及びその他関連法律法規及び国際条約に関する規定に違反します。</p>
    `,
    er: `
    <h3>2. 利用者の情報およびプライバシーに関する権利の保護</h3>
    <p>弊社はユーザーのプライバシーを尊重し、ユーザーの同意なしに、ユーザーの情報を収集したり、ユーザーのプライバシーを侵害する疑いのある内容を漏らしたりしません。サービスの必要に応じて把握したユーザー名、電子メール、情報、住所などについては、ユーザーの許可なしに、いかなる第三者にも販売または提供しないことを承諾します。Digital Offersはユーザーが当サイトに登録したいかなる資料を公開しませんが、下記の場合を除きます。</p>
<p>1. 事前にユーザーの明確な授権を取得する。</p>
<p>2. 裁判所、仲裁機関の裁判または裁決、その他の司法手続の要求に従う。</p>
<p>3. 関連政府主管部門の要求に従う。</p>
<p>4. 利用者が使用規約の規定に違反し、またその他マイニングマシン賃貸プラットフォームの利益を損なう行為。</p>
<p>5. その他法律法規に関する要求。</p>
<p>ユーザーが当サイトの登録してから提供できるサービスを利用する場合、以下の事項に同意と見なします。当サイトのサービス登録表の提示に従って、ご本人の真実、正確、最新及び完備した資料を提供してください。登録資料を随時更新して、真実、正確、最新及び完備した資料であることを確認してください。もし何かの間違いのある、不事実、過去な、不完全または誤解のある資料を提供した場合、または当サイトは上記の資料が間違いのある、不事実、過去な、不完全または誤解のある資料と疑われる理由がある場合、当サイトはユーザーのアカウントを一時停止または終了する権利があります。また、当サイトが提供された現在および未使用のサービスの全部または任意の部分の提供を拒否できます。</p>
    `,
    san: `
    <h3>3. 商標およびドメイン名に関する声明</h3>
    <p>Digital Offersウェブサイト（DigitalOffers.io）使用しているすべてのDigital Offersの図案及び文字の商標は、中国または他の国におけるDigital Offersの登録商標または合法的に使用された商標であり、Digital Offersの書面で明確な許可を得てない限り、いずれの単位または個人もいかなる方式で上記の商標を使用してはいけません。Digital Offersサイトのドメイン名はDigital Offersの所有です。Digital Offersの書面の授権を受けていない限り、いかなる単位または個人も使用してはいけません。</p>
    `,
    si: `
    <h3>4. サイトへのリンク</h3>
    <p>本サイトへのリンクをご希望の場合は、ご連絡ください。Digital Offersの書面許可を得てから、当サイトにリンクできます。リンクを確立した後、例えばDigital Offersが客観的状況によってリンクに適しないと判断した場合、リンクの許可を取り消す権利があります。当サイトにリンクする際は、必ずテキストリンク（Digital Offersの書面許可がない場合は、Digital Offersの図案及び文字のリンク方式を使用してはいけません）を使用してください。当サイトのリンクをクリックして新規ウィンドウに表示する形式に設定します。リンク先サイトの枠組みの中に表示することはできません。</p>
    `,
    wu: `
    <h3>5. 責任免除</h3>
    <p>お客様は、いかなる状況においても、マイニングマシン賃貸プラットフォームは以下の各事項について責任を負わないことに同意します</p>
    <p>(1) 取引の損失；</p>
    <p>(2) 取引利益または契約損失。</p>
    <p>(3) 業務の中断；</p>
    <p>(4) 情報の損失；</p>
    <p>(5) データの破損または損失；</p>
    <p>(6) ハッシュレートがなくなったり、市場から退出したりする場合。</p>
    <p>(7) 政策要因による損失。</p>
    <p>(8) 不可抗力による損失。</p>
    <p>マーズクラウドマイニングは創業以来、BTCマイニング業界へのサービス提供に力を入れており、マイニングマシンの調達からメンテナンス、ファームの展開、収益の交換まで、あらゆるサービスを提供しています。創業から今日の正式運用に至るまで、クラウドパワーマイニングサービスは、「利益の部分的な分配を拒否し、コンピューティングパワーの透明な運用を行う」という投資哲学に基づいており、この革新は、顧客に質の高い算術取引サービスを提供し、その利益を最大化するためです。世界最高のコンピューティングパワーサービスプラットフォームを構築することを目指しています.</p>
    <p>いかなる方法で登録またはDigital Offersの使用が（直接使用及び間接使用を含む）、すべて本声明に承認と認めらたことににみなします。本声明の内容は中華人民共和国の関連法律に基づき締結され、本声明の内容は中華人民共和国の関連法律に基づいて解釈、適用します。</p>
    `,
  },
  main: {
    userDropdown: {
      security: 'アカウント情報',
      treasure: '私の資産',
      power: '私のカウント力',
      changepass: 'パスワードを変更する',
      logout: 'ログアウト',
    },
    footer: {
      contact: 'お問い合わせ',
      support: 'サポート',
      help: 'ヘルプセンター',
      law: '法的声明',
      protocol: '利用規約',
      about: '私たちについて',
      policy: 'プライバシー',
    },
  },
  myorder: {
    orderNum: '注文番号',
    orderTime: '注文受付時間',
    power: 'Power',
    coinType: '通貨',
    totalEarn: '累積利益',
    yesterdayEarn: '昨日の業績',
    daysLeft: '残り日数',
    status: 'ステータス',
  },
  policy: {
    title: 'プライバシー',
    above: `私たちはユーザーとウェブサイトの訪問者（総称して「あなた」といいます）のプライバシーを尊重し、オンラインのプライバシーを守るために最善を尽くします。このプライバシーポリシーはINTERPLANETARY TECHNOLOGY PTE.LTD (IPFS.FAN)とその関連組織（以下、「Digital Offers」または「私たち」という）の管理、収集、維持、処理のユーザー個人データの流れを概説しています。私たちは常にこのプライバシーポリシーを更新することができます。私たちはこのページで新たなプライバシーポリシーを発表して変更もお知らせします。このプライバシーポリシーを定期的に確認して変更を知ることをお勧めします。このプライバシーポリシーの変更は、このホームページを公開する際に有効となります。`,
    yi: `
    <h2>1. 情報収集</h2>
    <p>私たちはあなたの個人データを使って、IPFS.FANからあなたに提供されたマイニングマシン共有サービス（「サービス」）を提供し、使用体験を改善していきます。「個人データ」とは、識別された人または識別可能な人に関する任意の情報をいいます。サービスを利用するためにアカウントを作成すると、あなたが提供してくれた情報を集めます。また、Cookie、ピクセルラベル、ローカルストレージ（ブラウザネットワーク記憶またはアプリケーションデータキャッシュ、データベース、サーバログなど）を含む様々な技術を使用して情報を収集し、記憶しています。サービスまたは当サイトをご利用いただくと、このプライバシーポリシーに従って情報を収集し利用することに同意するということです。このプライバシーポリシーに別の規定がない限り、本プライバシーポリシーで使用される用語は私たちのサービス規約と同じ意味を持っています。</p>
    <h3>1.1 登録</h3>
    <p>アカウントを作成するには、メール、電話、パスワードなどのデータを提供する必要があります。上記の情報の提供を拒否すると、サービスを提供することができません。</p>
    <h3>1.2 支払情報</h3>
    <p>あなたの支払情報は第三者支払処理者に送信されあなたの使用は許可されたものとみなされます。私たちはあなたの暗号化されたウォレットのアドレスを保存できます。私たちの第三者支払処理者を通じてユーザ情報を保存できます。</p>
    <h3>1.3 ログ情報</h3>
    <p>Digital Offersは、あなたが私たちのサイトを訪問し、あなたのアカウントに登録するときに、ブラウザから送られた情報を収集します。このログデータには以下の情報が含まれています。あなたのコンピュータのインターネットプロトコル（IP）アドレス、ブラウザの種類、ブラウザのバージョン、あなたがアクセスしたサービスのページ、アクセス時間、日付、これらのページにかかる時間と他の統計データがあります。また、Google Analyticsなどの第三者サービスを使って、このような情報を収集、監視、分析し、サービスの機能性を向上させることができます。これらのサードパーティのサービスプロバイダは自分のプライバシーポリシーを持ってあり、情報を使い道を説明しています。これらのサードパーティサービスプロバイダは、私たちが任務を遂行するために必要な時にのみ、あなたの個人データを表示することができます。</p>
    <h3>1.4 あなたの情報の使い道</h3>
    <p>あなたが提供した個人情報を次の目的に使う可能性あります。</p>
    <p>（1）私たちのウェブサイトとその内容をお見せします。;;</p>
    <p>（2）私たちのシステムのユーザとして識別します。;;</p>
    <p>（3）ご注文を処理します。;;</p>
    <p>（４）カスタマーサービス提供;;</p>
    <p>（5）ご要望にお答えします;</p>
    <p>（6）製品の更新を提供します。;</p>
    <p>（7）私たちのウェブサイトを改善します；;</p>
    <p>（8）私たちの製品に関するニュース通信、調査、特恵及びその他の宣伝資料を送る；;</p>
    <p>（9）あなたとコミュニケーションします;</p>
    <p>（10）リスクを管理し当サイトを保護します。私たちのサービスとあなたは詐欺から守ります。;</p>
    <p>（11）適用されるすべての法律と法規を遵守し、本サイトとDigital Offersサービス協議を実行する。;</p>
    <p>（12）その他あなたの同意を得た目的に使用します。</p>
    <h3>1.5 Cookieに関する情報</h3>
    <p>より良いウェブサイトアクセス体験を得るために、私たちは「Cookie」を使用して、このウェブサイトがあなたのブラウザを識別し、ユーザーの好みやその他の情報を保存することができます。ブラウザやブラウザの追加サービスが許可されている場合は、Cookieの許容度を変更したり、Cookieを拒否することができます。詳細についてはAboutCookies.orgご参考してください。ただし、このようにすれば、私たちのウェブサイトを訪問する体験に影響を与えるかもしれません。あるいは私たちの部分のサービスを利用できないかもしれません。</p>
    `,
    er: `
    <h2>2. 第三者サービスプロバイダ</h2>
    <p>第三者サービスプロバイダを採用して業務関連のサービスを提供してくれるかもしれません。これらの第三者は、サービスを提供している間だけ、あなたの個人データにアクセスすることができるし、情報漏れを徹底し防止し他の目的使用してはいけない義務があります。しかし、私たちは三方のサービスプロバイダにあなたの個人データを提供する行為は、第三者のサービスプロバイダのユーザ情報に対する権利侵害またはプライバシー侵害行為に対していかなる法的責任を負うものとはみなされません。</p>
    `,
    san: `
    <h2>3. ヨーロッパ経済区（EEA）の住民であれば</h2>
    <p>もしあなたがヨーロッパ経済区（EEA）の住民であれば、適用の法律法規に基づいて特定のデータ保護権利を持っています。私たちの目標は合理的な措置を取って、修正、削除、または制限をさせていただきます。もしあなたが私たちが持っている個人データとあなたの個人情報を私たちのシステムから削除したいなら、私たちに連絡してください。しかし、私たちはヨーロッパ経済区（EEA）の住民のデータ操作に対して、いかなる法的責任も負いません。</p>
    `,
    si: `
    <h2>4. 情報セキュリティ</h2>
    <p>私たちは私たちのウェブサイトとサービスを保護することに力を尽くしていますが、あなたにも個人情報の安全を守る責任があり、あなたの個人情報が正確で最新のものであるかを確認します。許可なしにあなたの口座にアクセスするのを防ぐ必要があります。共有コンピュータを使用する場合は、必ずログアウトしてください。また、許可されていない人に口座のパスワードと他のアカウントの登録情報を開示しないでください。しかし、インターネットを介して伝送される方法や電子記憶方法は100%安全ではありません。したがって、あなたの個人情報を守るために最善を尽くすとともに、絶対的な安全性を保証することはできません。私たちはあなたが私たちのウェブサイトに送ることと/または私たちのサービスを通じての個人情報の安全性を保証することができません。個人情報の伝送は自分でリスクを負担します。</p>
    `,
    wu: `
    <h2>5. 国際データ転送</h2>
    <p>あなたの情報を提出することによって、あなたの情報（個人データを含む）があなたの国/地域の管轄範囲外のコンピュータとシステムに転送され保存される可能性があります。もしこのような転送が発生したら、あなたの情報があなたの国/地域の規定のレベルとほぼ同じように保護されていることを確認します。しかし、私たちはこの保護行為の結果に対して法的責任を負うことができません。</p>
    `,
    liu: `
    <h2>6. 第三者リンク</h2>
    <p>私たちは故意に16歳以下の人が私たちのウェブサイトの個人データを収集、維持させrることはありません。そして私たちのウェブサイトのどの部分も16歳以下の人に対応しません。16歳未満または満16歳以上だが自分の労働収入を主な収入源としない場合は、いかなる方法でこのサイトを使用したり、アクセスしたりしないでください。私たちが何気なく16歳以下の人の個人データを集めていると知った時、私たちは法律適用法規によって削除したり、他の適切な措置を取ります</p>
    `,
    qi: `
    <h2>7. 子供のプライバシー</h2>
    <p>私たちは故意に16歳以下の人が私たちのウェブサイトの個人データを収集、維持させrることはありません。そして私たちのウェブサイトのどの部分も16歳以下の人に対応しません。16歳未満または満16歳以上だが自分の労働収入を主な収入源としない場合は、いかなる方法でこのサイトを使用したり、アクセスしたりしないでください。私たちが何気なく16歳以下の人の個人データを集めていると知った時、私たちは法律適用法規によって削除したり、他の適切な措置を取ります。</p>
    `,
    ba: `
    <h2>8. 個人データの使用目的の変更</h2>
    <p>私たちがあなたの個人データを本プライバシーポリシー宣言以外のいかなる目的に使う場合、あなたに通知してまた有効な退出ルートを提供します。このプライバシーポリシーの規定外の目的に自分の個人データを使用できないように選択できるようにいたします。</p>
    <p>新しいサービスと新しい活動に関するメールを送る可能性あります。私たちが送ったメールの中から「購読キャンセル」機能を選択して、Digital Offersの宣伝メールの受信を拒否できます。しかし、サービスを利用することに同意したユーザは、サービスに関する他の重要な電子メールを引き続き受信してください。</p>
    `,
    jiu: `
    <h2>9. 情報保存時間</h2>
    <p>法律法規を適用して保留要求がない限り、私たちはコスト政策の目的に達するために必要な期限内にあなたの個人情報を保留して保存します。法律で許可された場合、私たちは一定の個人情報を保存して記録に載せたり、法律のルートを通じて自身の権益を保障したりすることができます。私たちの情報保管行為は法律、法規の要求によって実行されます。私たちは情報保管の行為に対して法律上の責任を負いません。</p>
    `,
    shi: `
    <h2>10. あなたの個人情報を理解、取得、変更または削除する方法</h2>
    <p>あなたが私たち処理中のあなたのデータを確認したり、私たちが収集したあなたの個人情報をアクセスしたり、私たちが収集したあなたの個人情報を修正したり、私たちが収集したあなたの個人情報を削除したい場合はこのプライバシーポリシーで定められた連絡先を使って連絡してください。</p>
    `,
    shiyi: `
    <h2>11. 連絡方法</h2>
    <p>このプライバシーポリシーに対して何か質問があれば、当社お問い合わせしてください。</p>
    `,
  },
  power: {
    pageTitle: '私のカウント力',
    card: {
      total: '累積利益',
      yesterday: '昨日の業績',
      available: '引き出し可能な利益',
    },
    tablle: {
      myOrder: '私の注文',
      progress: '進行中',
      wait: '待機中',
      end: '閉鎖',
    },
  },
  progress: {
    orderNum: '注文番号',
    orderTime: '注文受付時間',
    power: 'Power',
    coinType: '通貨',
    totalEarn: '累積利益',
    yesterdayEarn: '昨日の業績',
    daysLeft: '残り日数',
    status: 'ステータス',
  },
  protocol: {
    title: '利用規約',
    yi: `
    <h2>Digital Offersサービス利用規約</h2>
    <p>登録サービス規約（以下「本規約」という）は、Digital Offersの各サービスについてユーザーとDigital Offersが締結した関連権利義務規範です。ユーザーは、本サイトを訪問し、または利用することによって、本規約のすべての条件と条項を受け入れ、拘束されることに同意したことになります。Digital Offersは本協定の条項を修正する権利があります。修正後の規約を公開すると共に元の規約を有効に取り替えます。ユーザーはいつでも最新規約を調べることができます。</p>
    `,
    er: `
    <h2>サービス内容</h2>
    <p>1、Digital Offersは自分のシステムを運用してインターネット等通じて、ユーザーにマイニングマシンのレンタルと委託管理及びその他の未来に新たに増えるサービス製品を提供します。</p>
    <p>2、ユーザーが提供した登録資料について、ユーザーは：（1）合法、真実、正確、詳細な個人資料を提供する；（2）変動があれば、適時にユーザー資料を更新する。ユーザーが提供した登録資料が合法的ではなく、真実ではなく、正確ではなく、詳細ではない場合、ユーザーはそれによる相応の責任と結果を負担し、Digital Offersはユーザーへ各サービスを終了する権利を保有します。</p>
    `,
    san: `
    <h2>ユーザーの権利</h2>
    <p>1、利用者のユーザー名、パスワードと安全性（1）ユーザーはDigital Offersの登録について選択する権利があり、Digital Offers登録ユーザーになる場合、自分で口座を作ることができます。ユーザー名の命名と使用は関連法律法規を遵守し、ネットワークコンプライアンスに適合しなければなりません。口座にはいかなる侮辱、脅威、猥褻、罵倒など他人の合法的権益を侵害する文字を含むことはできません。（2）ユーザーが登録に成功すれば、Digital Offersの登録ユーザーとなり、アカウント（携帯番号またはメールアドレス）とパスワードを取得し、口座とパスワードでシステムに登録した後に発生したすべての活動とイベントに対して責任を負い、口座を使用時言語、行為などの直接または間接による法的責任を負う。（3）ユーザーはDigital Offersのアカウントとパスワード、ショートメッセージの検証コード、Googleの検証コードを適切に保管する義務があり、ユーザー名とパスワード、Google二段階認証の安全に対して全責任を負う。ユーザーの原因でユーザー名やパスワード、Google二段階認証が漏れた場合の法的結果は、ユーザー本人が責任を負うものとし、ユーザー自身がこれらの情報を漏らしたことによる財産損失についてDigital Offersは責任を負いません。（4）パスワードをなくした場合、電子メールで送信されたリンクを登録してパスワードをリセットすることができます。ユーザーが口座を不正に使用されたり、他のセキュリティホールがあることを発見したら、直ちにDigital Offersに知らせるべきです。</p>
    <p>2、Digital Offersの承諾：法律規程により、またはユーザーの事前許可なしに、Digital Offersはいかなる第三者にユーザのパスワード、名前、携帯番号などの非公開情報を開示しません。</p>
    <p>3、ユーザーはDigital Offersが提供した各オンライン、オフライン活動に参加する権利があります。</p>
    <p>4、ユーザーはDigital Offersのウェブサイトの規定に基づいて、Digital Offersが提供するその他の各種サービスを利用する権利があります。</p>
    `,
    si: `
    <h2>ユーザーの義務</h2>
    <p>1、Digital Offersを利用して国家の安全を害し、国家の秘密を漏洩し、国家社会集団の合法的権益を侵害してはいけません。Digital Offersで以下の情報を作成、複製、伝播してはいけない。（1）反抗を扇動し、憲法と法律、行政法規を破壊し、実施したもの。（2）国家政権を転覆させ、社会主義制度を覆すよう扇動したもの。（3）国家分裂を扇動し、国家統一を破壊する；（4）民族憎悪、民族差別を扇動し、民族団結を破壊する；（5）事実を捏造し、歪曲し、デマをとばし、社会秩序を乱す；（6）封建迷信、猥褻、ポルノ、ギャンブル、暴力、殺人、恐怖、教唆犯罪を宣伝する；（7）他人を公然と侮辱したり、事実を捏造して他人を誹謗したり、その他の悪意のある攻撃をしたりする場合、（8）国家機関の信用を損なう場合、（9）その他の憲法及び法律行政法規に違反する場合、（10）商業広告行為を行う場合。</p>
    <p>2、ユーザーはいかなる手段でDigital Offersウェブサイトのアカウントを悪意に登録してはいけません。下記の行為を含みますが、これに限りません。不当利得、投機、現金化、受賞などを目的とした複数の口座を登録、他のユーザーアカウントを盗用。もしユーザーが上記の規定に違反したら、Digital Offersは直接にあらゆる必要な措置を取って、違反で利益を得たことを取り消して、訴訟の形式を通じてユーザーの法律責任などを追及する権利があります。</p>
    <p>3、ユーザーがDigital Offersをいかなる形式で各種の不法活動に従事する場所、プラットフォームまたは媒介とすることを禁止する。Digital Offersの授権または許可を得ていない場合、ユーザーは当駅の名義を使用し、いかなる商業活動に従事してもいけません。また、いかなる形式でもDigital Offersを商業活動の場所、プラットフォームまたは媒介として使用してはいけません。</p>
    `,
    wu: `
    <h2>免責条項</h2>
    <p>1、インターネットの特殊性に基づいて、Digital Offersのサービスが中断されないことは保証されていません。サービスの適時性、安全性については保証しません。Digital Offersの原因ではない損失による責任は負いません。Digital Offersは、ユーザーがこのサイトを安全にアクセスし、使用することができるようにするために力を尽くしますが、Digital Offersは、このサイトやサーバーがウイルスやその他の潜在的な有害要素を含んでいないことを保証していません。そのため、ユーザーは、業界で公認されているソフトウェアを使って、Digital Offersからダウンロードされたファイルのウイルスを調べてください。特にハッカーの侵入行為や類似の行為についても、私たちはいかなる責任も負いかねます。</p>
    <p>2、Digital Offersはユーザーが発表した情報の保存、修正、削除、または保存に失敗した場合、責任を負いません。サイト上の非Digital Offersの故意による植字ミス、不注意などに対しては責任を負いません。Digital Offersはウェブサイトのどの部分の漏れや誤りについて改善の権利はありが義務がありません。</p>
    <p>3、Digital Offersが書面で明確に約束していない限り、Digital Offersはユーザーに対していかなる方式（経由、接続またはダウンロード含むが限らない）で当サイトから得られたいかなる内容情報、広告などを含むがそれに限らない情報についてその正確性、完全性、信頼性を保証しません。ユーザーが当サイト上のコンテンツ情報により購入、取得したいかなる製品、サービス、情報または資料についてDigital Offersは責任を負いません。ユーザは、当サイトの情報コンテンツを使用することによるリスクを自己負担します。</p>
    <p>4、すべてのユーザーに送る通告は、Digital Offersが正式なページ広告、ダイレクトメッセージ、電子メール、カスタマーサービス電話、携帯メールまたは通常の手紙を通じて伝達されます。いかなる非Digital Offersの正規ルートを通じて獲得した当選、割引などの活動や情報は、Digital Offersが法律責任を負いません。</p>
    `,
    liu: `
    <h2>情報の秘密保持</h2>
    <p>1、本規約でいうDigital Offersのユーザー情報とは、法律、法規及び関連規定に適合し、下記の範囲に適合する情報を指します。（1）ユーザーがDigital Offersに登録する時、Digital Offersに提供する個人情報；（2）ユーザーがDigital Offersサービス、ウェブサイト活動またはウェブページを訪問する時、Digital Offersが自動的に受信し記録するユーザブラウザ端末または携帯電話のクライアントデータ、IPアドレス、ウェブサイトのCookieの中の資料とユーザーが使用するウェブページの記録を含むが、これらに限定しません。（3）Digital Offersはビジネスパートナーから合法的に入手したユーザー個人情報です。</p>
    <p>2、Digital Offersの承諾：法律により、またはユーザーの事前許可なしに、Digital Offersはいかなる第三者にユーザのパスワード、名前、携帯番号などの非公開情報を開示しません。</p>
    <p>3、下記の法定の状況において、ユーザーの個人情報は一部または全部開示されます。（1）ユーザーの同意を得て、ユーザー本人または他の第三者に開示する；（2）法律、法規等の関連規定、或いは行政機構の要求に基づき、行政、司法機構又はその他の法律規定の第三者に開示する。（3）その他のDigital Offersが法律、法規などの関連規定に基づいて披露します。</p>
    `,
    qi: `
    <h2>サービスの提供、修正及び終了</h2>
    <p>1、ユーザーはDigital Offersの各サービスを受けると同時に、Digital Offersから提供される各種情報サービスを受け入れることに同意します。ユーザーはDigital Offersにその電子メール、携帯電話、通信住所などに商業情報を送ることの権限を許可します。ユーザーはDigital Offers関連ページにアクセスして資料を変更することができます。</p>
    <p>2、Digital Offersは随時修正またはサービスを中断し、ユーザーに通知しない権利を保留します。Digital Offersはサービスを修正または中断する権利があり、ユーザーまたは直接関係のない第三者に責任を負う必要がありません。</p>
    <p>3、ユーザーは本規約の修正に異議があり、またはDigital Offersのサービスに不満がある場合、以下の権利を行使することができます。（1）Digital Offersのネットサービスの使用を停止する。（2）開発者メールアドレスなど合理的なルートをを通じて、Digital Offersに対するサービスの停止を書面で効果的に通知します。サービス終了後、ユーザーがDigital Offersサービスを利用する権利は直ちに終了します。この場合、Digital Offersは未処理の情報または未完成のサービスをユーザまたは直接関係のない第三者に転送する義務がありません。</p>
    `,
    ba: `
    <h2>適用法律と裁判所</h2>
    <p>1、ユーザーがDigital Offersサイトを使用したことにより、または関連するあらゆる論争、権利主張またはその他の事項は、いずれものDigital Offers所在地の法律の管轄を受けます。</p>
    <p>2、ユーザーとDigital Offersで論争が発生した場合、まず誠実と信用の原則に基づいて協議を通じて解決しなければなりません。協議が成立しない場合、Digital Offersの所在地の人民法院に訴訟を提起することになります。</p>
    `,
  },
  treasure: {
    pageTitle: '私の資産',
    accountDetail: 'アカウントの詳細',
    card: {
      balance: '残高',
      wallet: 'ウォレット',
      deposit: 'リチャージ',
      withdraw: '資金の引き出し',
      record: '詳細な記録',
      drecord: '再充電の記録',
      wrecord: '現金引き出し記録',
      diya: '担保勘定合計',
      zhiya: '誓約書の数',
    },
    depositDialog: {
      title: 'リチャージ',
    },
    withdrawDialog: {
      title: '資金の引き出し',
      coinType: '通貨',
      availableNum: '入手可能な数量',
      totalNum: '合計数',
      fee: '取扱手数料',
      minNum: '最小出金量',
      address: '引き出しアドレスを入力してください',
      amount: '引き出し回数を入力してください',
    },
  },
  waitorder: {
    orderNum: '注文番号',
    orderTime: '注文受付時間',
    power: 'Power',
    coinType: '通貨',
    totalEarn: '累積利益',
    yesterdayEarn: '昨日の業績',
    daysLeft: '残り日数',
    status: 'ステータス',
  },
}

export {
  allTranslation
}