const allTranslation = {
  changepass: {
    oldPass: 'Current login password',
    oldPassInput: 'Please enter the current login password',
    newPass: 'New login password',
    newPassInput: 'Please enter a 6-20 digit password with at least two upper and lower case letters and numbers',
    confirmPass: 'Confirm Password',
    confirmPassInput: 'Please enter your password again',
    confirmBtn: 'Confirm',
    cancelBtn: 'Cancel',
    notifyMsg1: 'The new password cannot be the same as the old one!!!',
    notifyMsg2: 'Two times the password input does not match!!!',
    notifyMsg3: 'Password changed successfully! Please log in again!',
  },
  detail: {
    zhichu: 'expenses',
    shouru: 'revenue',
    pageTitle1: 'Basic Account Details',
    pageTitle2: 'Mortgage Account Details',
    t1: 'revenue record ID',
    t2: 'amount',
    t3: 'currency',
    t4: 'category',
    t5: 'type',
    t6: 'related record ID',
    t7: 'created time',
  },
  record: {
    withdraw: {
      pageTitle: ' Withdraw Record',
      t1: 'withdraw number',
      t2: 'time',
      t3: 'withdraw amount',
      t4: 'withdraw handling fee',
      t5: 'blockchain trading number',
      t6: 'withdraw address',
      t7: 'status',
    },
    deposit: {
      pageTitle: ' Deposit Record',
      t1: 'deposit number',
      t2: 'exchange at block height',
      t3: 'transaction number',
      t4: 'amount',
      t5: 'deposit address',
      t6: 'deposit time',
      t7: 'status',
    },
  },
  login: {
    emailInput: 'please enter your email address',
    passwordInput: 'please enter your password',
    forget: 'Forgot Password?',
    button: 'Login',
    tip: `Don't have an account?`,
    register: 'Register',
  },
  register: {
    emailInput: 'please enter your email address',
    passwordInput: 'please enter your password',
    confirmPass: 'please confirm your password',
    verifyCode: 'please enter verify code',
    sendCode: 'send code',
    agree: 'I have read and agree to',
    pp: ' Privacy and Policy',
    button: 'Register',
    exist: 'Existing account? ',
    login: 'Login',
    msg1: 'The password cannot be empty!',
    msg2: 'The password entered twice must be the same!',
    msg3: 'Please check the agree agreement!',
    msg4: 'About to jump to the login page',
    msg5: 'Successfully send verify code to your email',
  },
  forget: {
    email: 'please enter your email address',
    verifyCode: 'please enter your verify code',
    sendCode: 'Send Code',
    password: 'please enter your password',
    confirmPass: 'please confirm your password',
    button: 'Confirm',
    attention: 'Please copy the content after "sign=" in the URL in the email sent to the input box on the left side of the send verification code button on this page.',
    warn1: 'The password entered twice must be the same!',
    warn2: 'The password cannot be empty!',
  },
  security: {
    phoneCertifyDialog: {
      phonePre: 'Please select your telephone area code',
      phoneNumInput: 'Please input your mobile phone number',
      phoneCode: 'Please enter the phone verification code',
      getPhoneCode: 'Get mobile phone verification code',
      passInput: 'Please enter your password',
      confirm: 'Confirm',
      cancel: 'Cancel',
    },
    GACertifyDialog: {
      gaCode: 'GA Verification Code',
      passInput: 'Please enter your password',
      confirm: 'Confirm',
      cancel: 'Cancel',
    },
    KYCCertifyDialog: {
      countryCode: {
        title: 'Country Code',
        label: 'Select',
      },
      certificationType: {
        title: 'Certificate Type',
        label: 'Select',
      },
      firstname: {
        title: 'First Name',
        label: 'First Name',
      },
      lastname: {
        title: 'Last Name',
        label: 'Last Name',
      },
      idNum: {
        title: 'Certification Number',
        label: 'Please enter your certification number',
      },
      confirm: 'Confirm',
      cancel: 'Cancel',
    },
    pageTitle: 'Security Center',
    phone: 'User Phone Number',
    phoneCertifyStatus: {
      title: 'Mobile Phone Authentication Status',
      label1f: 'Uncertified ',
      label1s: 'Certified',
      label2: 'Apply for Authentication',
    },
    GaCertifyStatus: {
      title: 'GA Authentication Status',
      label1f: 'Uncertified ',
      label1s: 'Certified',
      label2: 'Apply for Authentication',
    },
    KycCertifyStatus: {
      title: 'KYC Authentication Status',
      label1f: 'Uncertified ',
      label1s: 'Certified',
      label2: 'Apply for Authentication',
    },
    registerTime: 'Registration time',
    lastLoginIp: 'Last Login IP',
    loginNum: 'Number of logins',
    withdrawStatus: {
      title: 'Cash withdrawal status',
      labels: 'Withdrawable',
      labelf: 'Non-withdrawable',
    },
  },

  aboutus: {
    title: 'About Us',
    yi: 'Digital Offers provides one-stop physical database mining platforms and Network Marketing exclusivity to Digital Profit Members through',
    er: 'INTERPLANETARY TECHNOLOGY PTE.LTD (IPFS.FAN), the B2C platform of HPOOL, the world’s leading Proof of Storage (PoS) digital asset mining organization, \
        which gathers the most elite product, technology and actuarial teams, and has extensive and deep strategic cooperation with leading companies in the industry. \
        IPFS.FAN has received large, strategic investments from Fenbushi Capital, \
        Asia’s first and largest blockchain-focused Venture Capital firm, co-founded by Ethereum creator Vitalik Buterin, as well as from Wanxiang Blockchain, \
        China’s first non-profit blockchain research organization, which has invested over $20 billion in the blockchain sector.',
    san: 'Through our exclusive relationships, we centrally procure physical mining machines and provide open, professional, \
        transparent and real mining services with comprehensive professional operation and maintenance for Digital Profit Members. \
        Through one-stop professional management, the top mining machine manufacturers, mining locations, \
        mining pools and professional maintenance teams in the industry are linked. \
        Affordable, stable and strictly selected mining resources are gathered to provide safe and compliant mining investment channels \
        and help the average person participate in mining production. The service tenet of the company is to provide one-click escrow, \
        strict selection of mining machines, compliance and trustworthiness, ultra-low electricity price and maximum profit sharing.',
  },

  endorder: {
    orderNum: 'Order ID',
    orderTime: 'Order Time',
    power: 'Power',
    coinType: 'Coin Type',
    totalEarn: 'Accumulated Earnings',
    yesterdayEarn: 'Yesterday Earnings',
    daysLeft: 'Days Left',
    status: 'Status',
  },

  help: {
    title: 'Help Center',
    yi: `<h2>1. Business Introduction</h2>
          <h3>1.1 What is Digital Offers?</h3>
          Digital Offers is a one-stop database mining platform released by<br />
          INTERPLANETARY TECHNOLOGY PTE.LTD (IPFS.FAN), along with mining pool HPOOL, based on blockchain technology. 
          It provides investors with open, fair, and transparent real mining services by virtue of IPFS.FAN's content and traffic advantages. 
          While using centralized procurement and co-location mechanisms to reduce mining operation costs, it also uses an annual TB purchasing model 
          to lower the barrier of entry for all types of investors to participate in the mining industry and provide a safe and compliant database mining 
          investment channel.The strategic investors of IPFS.FAN include Fenbushi Capital and Wanxiang Blockchain.<br />
          <h3>1.2 How does Digital Offers work?</h3>
          Digital Offers has links to top mining machine manufacturers, mines, mining pools, and professional maintenance teams in the industry, 
          pooling affordable and stable mining resources and reducing overall operating costs and user mining costs; 
          it is deeply connected to IPFS.FAN, providing one-stop investment financial services throughout the entire life cycle, 
          from mining to assets to financial liquidity.<br /><h3>1.3 Annual TB Purchasing Model</h3>The Annual 
          TB Purchasing Model uses the entire product as the service unit and provides the service of transferring the time-limited 
          usage right of the database mining machine. After the user selects and purchases a product related to this model, they will 
          be granted the right to use the corresponding mining machine for a one year period of time. The user will select the number 
          database mining TBs and pay the associated costs for the normal operation of the database mining machine and provide the wallet 
          address of the corresponding currency in order to collect the database mining revenue. In the Annual TB Purchasing Model, the user will 
          not be purchasing a database mining machine. All database mining machines are already installed at Digital Offers' partner's data warehouse 
          with the user only purchasing the right to use the corresponding database mining machine TB. The user will receive all the actual database mining 
          revenue from the machine TB during the usage period. At the end of the annual usage period, the corresponding service will be automatically terminated 
          and the user can place another order to renew for another one year period.<br />Note: The actual database mining revenue is the actual revenue generated 
          minus the electricity, operation and maintenance costs equating to 20% of total revenue generated.`,
    er: `<h2>2. Account Management</h2>
          <h3>2.1 How do I setup my account management portal?</h3>
          After purchasing your Digital Offers product at Digital Profit, go to www.DigitalOffers.io and click on register a new account. 
          Enter the email you have registered with Digital Profit as your account name, then enter and confirm your password.<br />
          Note: You MUST use the same email as the email used to register with Digital Profit for your own safety and security in ensuring 
          your purchase is properly assigned to you.
          <h3>2.2 What if I forget my login password?</h3>
          Click on 'My Login' in the upper right corner of the home page, select 'Forgot Password' to enter the login password recovery function, provide the appropriate account security information as instructed, and enter and submit a new password after submitting additional authentication.
If you cannot provide additional account security information, contact Digital Profit Support for assistance.
           <h3>2.3 How do I add 2-step authentication?</h3>
           Click 'My User Center' in the upper right corner of the home page, click 'Add' in the 'Google Authentication' area, scan the QR code in Google Authenticator or enter the serial number manually. If you want to use Google Authenticator, fill in the verification code displayed by Google Authenticator and other account security information in the corresponding fields and click 'Add'.
           <h3>2.4 What if the authentication is lost?</h3>
           Contact Digital Profit Support for assistance.
           <h3>2.5 How do I delete my account?</h3>
           Please contact Digital Profit Support and inform them that you want to cancel your account and submit your complete account security information for verification. Digital Offers will cancel your account after receiving your approval. After your account is cancelled, any unused or future database mining revenue rights, balances, electricity bills and unextracted mining revenues in your account will be considered as abandoned assets and cannot be retrieved after cancellation.`,
    san: `<h2>3. Purchases and Payments</h2>
          <h3>3.1 How do I make a purchase?</h3>
          Login to your Digital Profit back office and go to the Shop Digital Profit link. Select the desired Digital Offers product(s) and click continue to go to the order summary and payment pages to complete your purchase.
          <h3>3.2 When will my purchase show up in my Digital Offers.com management portal.?</h3>
          our Digital Offers purchase will be displayed in your management portal on the first Monday following the close of the Friday to Thursday Digital Profit commission period during which the purchase was made. If your purchase does not display at that time, please ensure that payment was completed and the email used to register your DigitalOffers.io management portal is the same email used to register with Digital Profit. If there are any problems, contact Digital Profit Support for assistance.
          <h3>3.3 How soon after purchase does Digital Offers start to generate revenue?</h3>
          Your Digital Offers purchase will begin mining on the first Monday following the close of the Friday to Thursday Digital Profit commission period during which the purchase was made. The database mining rewards will begin displaying daily on the following Wednesday.
          <h3>3.4 Costs Associated with Digital Offers</h3>
          The main costs of Digital Offers can be divided into the annual cost per TB and electricity, operation and maintenance costs.
Annual TB Purchase Cost: The Digital Offers purchase price is the cost per TB of one year of database mining. The price will be adjusted according to market conditions with the actual purchase price determined at the time of payment by the user. 
Electricity, Operation and Maintenance Fees: Mars Finance will charge an electricity, operation and maintenance fee for all database mining and provide entrusted management services for the machines, including transportation of the machines, site support, daily monitoring, maintenance, repair, and computing power guarantee. The electricity, operation and maintenance fees will be deducted from the daily database mining revenue.`,
    si: `<h2>4. Earnings Management</h2>
          <h3>4.1 How do I check the status of a mining machine?</h3>
          Click on "My hash power" in the upper right corner of the home page and you will be taken to a page where you can view all operating products.
          <h3>4.2 How to Calculate Expected Returns?</h3>
          In the Expected Returns Calculator provided by Digital Offers, select the product and the system will calculate the expected returns based on the selected product and current network data.
          <h3>4.3 How do I view earnings?</h3>
          You can see the earnings details in the corresponding product details on the "My hash power" page.
The database mining revenue is settled daily. The database mining revenue is the actual hash power revenue after deducting the electricity, operation and maintenance fee of 20%. Earnings can be withdrawn daily or as desired.
          <h3>4.4 What should I anticipate from my Digital Offers rewards?</h3>
          Your Digital Offers database mining rewards will generally increase over the first 5-6 months after purchase with mining reaching greater optimization at that point. The projected database mining rewards for the first year are anticipated to be approximately 30 FIL after deducting for electricity, operation and maintenance fees.. It is also projected that the second year rewards, if purchased again, will be approximately 50% higher.
          <h3>4.5 What circumstances could create earnings fluctuations?</h3>
          Since database mining is affected by various factors such as mining machines, mining sites, mining pools, and hash power of the entire network, loads, etc., fluctuations in revenue are normal and Digital Offers does not guarantee stable returns. Digital Offers guarantees that the user's Digital Offers will maintain uninterrupted operation, and in the event the machine fails, will immediately switch to another mining machine of the same type to guarantee the user's revenue. Digital Offers is not liable for losses resulting from uncontrollable risks that could not have been foreseen, avoided or overcome by objective events, including natural disasters such as floods, volcanic eruptions, earthquakes, landslides, fires, storms and severe weather rated by Chinese authorities as above the 100-year unpredictable level, government actions and government directives, city-level power grid incidents, and social anomalies such as wars, strikes, civil unrest, etc.
          <h3>4.6 Why is my mining output down?</h3>
          In addition to mining resources such as mining machines and mining pools, output is also related to the total hash power and difficulty of the Blockchain network. In addition to fluctuating hardware computing power, the ratio of mining machine hash power and mining pool hash power will affect the percentage of mining output that can be allocated to the use. Since the ratio of hash power is always in flux, the total hash power and network load of the Blockchain network will affect the overall mining output. The network load will be adjusted every approximately every 14 days according to the network-wide hash power changes, so the user's hash power gain will always be in flux and some of it will be in the form of a fluctuating ratio. The factors can lead to a decline in mining output.`,
    wu: `<h2>5. Price Adjustment Rules</h2>
          <h3>5.1 Price adjustment rules for Digital Offers purchases.</h3>
         Database mining costs are influenced by the mining payback cycle, capacity, and value expectations, based on a theoretical payback cycle of 6 months. If strong appreciation is expected and there is no corresponding increase in mining capacity, the price of the database mining could increase significantly. Similarly, when the medium and long-term price is expected to depreciate, the price of Digital Offers will also decrease. The price of Digital Offers sold by Digital Offers will be adjusted in line with market conditions.
          <h3>5.2 Electricity, Operations and Management Fee Adjustment Rules</h3>
          Electricity, operations and management fees will be explicitly displayed and deducted on a daily basis. The current fee is 20% and will be automatically deducted from the database mining revenue. If the price of electricity increases due to force majeure (e.g., government actions and government orders to increase regional electricity prices, or the cost of electricity delivery due to power supply failures in cities or municipalities), the associated fees will be adjusted accordingly and automatically deducted from the database mining revenue.`,
  },
  law: {
    title: 'Legal Notice',
    above: `This website is created and maintained by IPFS.FAN on behalf of Digital Offers. Digital Offers reserves the right to update these Terms at any time without notice, and the user will be bound by such updates as well. By accessing and viewing this website content, registering as a user, downloading any materials from this website, or using the materials provided herein, any person agrees to abide by the following terms and conditions. These Terms constitute an agreement between Digital Offers and the user. If the user does not agree to abide by these terms, do not use this website. Digital Offers reserves the right to deny access to, or use of, this website to any user at any time and under any circumstances. Digital Offers reserves the right to correct, modify or update this statement at any time in its sole discretion.`,
    yi: `
          <h3>1. Copyright Notice</h3>
          <p>Digital Offers owns the copyright in all materials on the relevant pages of the Website or, together with the provider of the materials on the relevant pages of the Website, owns the copyright or license to use the materials on those pages. No part of the contents of this website may be copied or mirrored on servers not owned by Digital Offers without the expressed, written permission of Digital Offers.</p>
          <p>The domain names, trademarks, text, visual and audio content, graphics and images contained on this website are protected by trademark and copyright laws. They may not be copied or transmitted in any form by any enterprise or individual without the express prior written permission of Digital Offers. Any unauthorized use of this website will violate the Copyright Law of Singapore, the Trademark Law of Singapore and other relevant laws and regulations, as well as the provisions of relevant international conventions.</p>
          `,
    er: `
          <h3>2. Protect the user's right to information and privacy</h3>
          <p>We respect the privacy of our users, and we will not actively collect user information or disclose content that is suspected of violating user privacy without the consent of the user. We do not sell or provide to any third party any username, email address, information, or address that we may have as part of our services without the user's permission. Digital Offers will not publish or disseminate any of the User's information registered on the Site, with the following exceptions. </p>
<p>1. pursuant to a decision or ruling of a court, arbitral body, or other judicial proceeding.</p>
<p>2. as required by the relevant government authority.</p>
<p>3. the user violates the terms of use or has other actions that are detrimental to the interests of the mining leasing platform.</p>
<p>4. Other requirements of relevant laws and regulations.</p>
<p>If the user wishes to use the services provided by the Website which require registration, they shall agree to the following: to provide true, correct, current, and complete information about him/herself as prompted by the service registration form of the Website, and to update the registered information from time to time to ensure that it is true, correct, current and complete. If the user provides any false, inaccurate, outdated, or incomplete or misleading information, or if this website has reason to suspect that the aforementioned information is false, inaccurate, outdated or incomplete or misleading, this website has the right to suspend or terminate the users account and refuse the use of all or any part of the services provided by this website, both now and in the future.</p>
          `,
    san: `
          <h3>3. Trademark and Domain Name Declarations</h3>
          <p>Digital Offers website (www.DigitalOffers.io) are either registered trademarks or legally licensed trademarks of Digital Offers in Singapore or other countries and may not be used in any manner without the written authorization of Digital Offers. The domain name of the website is owned by Digital Offers. Any use by any entity or individual is prohibited without written authorization from Digital Offers.</p>
          `,
    si: `
          <h3>4. Website links to</h3>
          <p>If the user wishes to link to this site, please contact us; links to this site may be made only with the written permission of Digital Offers. After a link has been established, permission to link may be revoked if, in the reasonable opinion of Digital Offers, the link is no longer appropriate. When linking to this Site, please be sure to use text links (the use of Digital Offers graphics and text is prohibited without the written permission of Digital Offers); links to this Site should be set to appear in a separate window and not within the frame of the linking party's site.</p>
          `,
    wu: `
          <h3>5. Disclaimer of Liability</h3>
          <p>The User understands and agrees that in no event shall the Miner Leasing Platform be liable for the following.</p>
          <p>(1) Losses on transactions.</p>
          <p>(2) Trading profits or contract losses.</p>
          <p>(3) Business interruption.</p>
          <p>(4) Loss of information.</p>
          <p>(5) Damage or loss of data.</p>
          <p>(6) The demise or withdrawal of computing power from the market.</p>
          <p>(7) Losses due to policy factors.</p>
          <p>(8) Losses due to force majeure.</p>
          <p>Since its inception, Digital Offers has been committed to serving the mining industry, providing miners with a full range of services, from mining machine procurement, maintenance, mine deployment, and revenue exchange, etc. The Cloud Mining Service has grown from an internal operation to an official operation today. From its inception to its official operation today, Cloud Power Mining Service is based on the investment philosophy of 'rejecting partial distribution of profits and transparent operation of computing power,' and this innovation aims to build the world's best computing power service platform for users. To provide quality, algorithmic trading services to maximize the profits of our supportive friends and clients.</p>
          <p>Anyone who logs in or uses (including direct and indirect use) the Digital Offers website in any way is deemed to have accepted and approved this statement. The contents of this statement are made in accordance with the relevant laws of Singapore, and the contents of this statement will be interpreted and applied in accordance with the relevant laws of Singapore.</p>
          `,
  },
  main: {
    userDropdown: {
      security: 'User Center',
      treasure: 'My Wallet',
      power: 'My Power',
      changepass: 'Change Password',
      logout: 'Logout',
    },
    footer: {
      contact: 'Contact Us',
      support: 'Support',
      help: 'Help Center',
      law: 'Legal Statement',
      protocol: 'User Agreement',
      about: 'About Us',
      policy: 'Privacy Policy',
    },
  },
  myorder: {
    orderNum: 'Order ID',
    orderTime: 'Order Time',
    power: 'Power',
    coinType: 'Coin Type',
    totalEarn: 'Accumulated Earnings',
    yesterdayEarn: 'Yesterday Earnings',
    daysLeft: 'Days Left',
    status: 'Status',
  },
  policy: {
    title: 'Privacy Policy',
    above: `We respect the privacy of all users and site visitors (collectively called “you” and “your”) and promise to do our best to protect your online privacy. This Privacy policy outlines the process of management, collection, maintenance and processing of users’ personal data by INTERPLANETARY TECHNOLOGY PTE.LTD (IPFS.FAN), Digital Offers and its affiliated entities (hereinafter referred to as the “Digital Offers” or “we”, “us” and “our”).`,
    yi: `
          <h2>1. Information Collection</h2>
          <p>We may utilize your personal data to provide and improve the miner sharing services (the “services”) provided by IPFS.FAN, and to improve your use experience on this site. “Personal data” refers to any information related to an identified or identifiable person. We will collect the information you provide when you create an account to use the services. We also use various technologies to collect and store information, including Cookies, pixel tags and local storage (such as network storage of browser or application data cache, database and server logs). Your use of the services or this site indicates that you agree with the collection and use of the information by us according to this Privacy Policy. Unless otherwise stated herein, the terminology used in this Privacy Policy shall have the same meaning with the same terminology used in our Service Agreement.</p>
          <h3>1.1 Registration</h3>
          <p>You are required to provide such information when creating an account as your email, telephone number, password or other information.</p>
          <h3>1.2 Payment information</h3>
          <p>Your payment information will be sent to our third-party payment processors and your use indicates that you authorize us to store your encrypted wallet address and that we may have access to and keep the user information through our third-party payment processors.</p>
          <h3>1.3 Log information</h3>
          <p>We will collect the information sent by your browser when you visit our site and log in your account (the”log data”). The log data may include the following information: Internet Protocol (IP) addresses of your computer, browser type and version, web pages of the services you visited, time and date of the visiting, time spent on these pages and other statistical data. In addition, we may use third-party services, such as Google Analytics, to collect, monitor and analyze such information in order to enhance the functionality of our services. The third-party service providers have their own privacy policies to describe how they use such information. Such third-party service providers can only use your personal data as necessary for performing tasks on behalf of us.</p>
          <h3>1.4 How we use your personal information</h3>
          <p>We may use your personal information for the purposes listed below：</p>
          <p>(1) Show you our site and its contents;</p>
          <p>(2) Identify you as our users in our system;</p>
          <p>(3) Process your orders;</p>
          <p>(4) Provide customer services;</p>
          <p>(5) Respond to your requirements;</p>
          <p>(6) Provide you with product updates;</p>
          <p>(7) Improve our site;</p>
          <p>(8) Send news, investigations, special offers and other promotional materials relating to our products;</p>
          <p>(9) Communicate with you;</p>
          <p>(10) Manage the risks and protect the site and protect our services and you from fraudulent activities;</p>
          <p>(11) Comply with all applicable laws and regulations, and execute the service agreements of both this site and Digital Offers;</p>
          <p>(12) Other purposes with your consent.</p>
          <h3>1.5 Information about Cookies</h3>
          <p>In order to provide you with better access experience, we use Cookies to allow this site to identify your browser and store user preference and other information. If permitted by your browser or the additional service of the browser, you may alter the acceptance degree of Cookies or reject Cookies. See AboutCookies.org for details. However, if you do so, it may in some cases affect your experience of visiting our site or make it impossible to use some of our services.</p>
          `,
    er: `
          <h2>2. Third-party Service Providers</h2>
          <p>We may hire third parties to provide business relevant services for us. Such third parties may only obtain access to your personal data while providing services to us and are obliged not to disclose or use the data for any other purposes. However, the act of us providing your personal data to the third-party service providers shall not be deemed that we shall undertake any legal liability for the infringement of user information or privacy by a third-party service provider.</p>
          `,
    san: `
          <h2>3. If You Are A Citizen of the European Economic Area (EEA)</h2>
          <p>If you are a citizen of the European Economic Area (EEA), you enjoy certain data protection rights based on applicable laws and regulations. Our goal is to adopt reasonable measures to allow you to alter, modify, delete or limit the use of your personal data. Please contact us if you wish to know about the personal information we hold about you and if you wish to delete your personal information from our system. We, however, assume no legal responsibility for the data manipulation acts by the citizens of the European Economic Area (EEA).</p>
          `,
    si: `
          <h2>4. Information Security</h2>
          <p>Although we are committed to protecting our site and services, you are responsible for protecting and maintaining the security of your personal information, and verifying whether the personal information we maintain about you is correct and updated. You must prevent unauthorized access to your account. Be sure to log out when using shared computers and do not disclose your account and password and any other account information to any unauthorized person.</p>
          <p>However, no transmission or electronic storage method through the Internet is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security. We cannot guarantee the security of your personal information transmitted to our site and/or through our services. Any transmission of  personal information shall be at your own risk.</p>
          `,
    wu: `
          <h2>5. International Data Transmission</h2>
          <p>By submitting your information, you agree that your information (including personal data) may be transmitted and stored to computers and systems outside the jurisdiction of your country/territory. Under such circumstances, we will endeavor to ensure that your information is protected to the same extent as regulated in your country/territory. However, we do not assume any legal responsibility for the consequences brought about by such protection.</p>
          `,
    liu: `
          <h2>6. Third-party Links</h2>
          <p>Our services may contain links to third-party websites that are not operated by us. If you click such links, you will be directed to the relevant third-party websites. The Privacy Policy does not apply to other third-party websites. We strongly recommend that you check the privacy policies of the websites you visit. Digital Offers can neither control any third-party websites or their contents of services and privacy policies, nor bear any responsibility.</p>
          `,
    qi: `
          <h2>7. Privacy of Children</h2>
          <p>We do not knowingly collect or maintain personal data on our site from persons under the age of 16, and no part of our site is targeted at persons under the age of 16. If you are under 16 or you are 16 but do not derive your income from your own labor, please do not use or visit this site in any way. If we are aware that we have accidentally collected the personal data from persons under 16 years old, we will delete or adopt other appropriate measures to dispose such personal data according to applicable laws and regulations.</p>
          `,
    ba: `
          <h2>8. Change of Purpose of Use of Personal Data</h2>
          <p>If we decide to use your personal data for any purposes other than those stated in this Privacy Policy, we will notify you and provide you with an effective exit option for not using your personal data for any purposes other than those stated in this Privacy Policy.</p>
          <p>We may send you emails relating to new services and activities. You may select the “cancel subscription” function in each email we send to refuse to receive the promotional emails of Digital Offers. However, users who agree to use this service will continue to receive other important emails pertaining to the services.</p>
          `,
    jiu: `
          <h2>9. Information Storage Time</h2>
          <p>Unless required by applicable laws and regulations, we only keep and save your personal information within the time period as necessary to realize the purpose stated in this Policy. Under the circumstances permitted by law, we may store certain personal information for record keeping purposes or guarantee our rights and interests through legal means. Our storage of information is performed in accordance with the requirements of relevant laws and regulations, and we bear no legal responsibility for the information storage behavior.</p>
          `,
    shi: `
          <h2>10. How We Learn About, Acquire, Alter or Delete Your Personal Information</h2>
          <p>Please contact us via the contact information stated in the Privacy Policy if you wish to confirm that we are processing your data, or access your personal data that we may hold, alter or delete your personal information we have collected.</p>
          `,
    shiyi: `
          <h2>11. Contact Us</h2>
          <p>Please contact us in case of any concerns related to this Privacy Policy.</p>
          `,
  },
  power: {
    pageTitle: 'My Power',
    card: {
      total: 'accumulated earnings',
      yesterday: 'yesterday earnings',
      available: 'withdrawable earnings',
    },
    tablle: {
      myOrder: 'My Order',
      progress: 'In Progress',
      wait: 'Pending',
      end: 'Closed',
    },
  },
  progress: {
    orderNum: 'Order ID',
    orderTime: 'Order Time',
    power: 'Power',
    coinType: 'Coin Type',
    totalEarn: 'Accumulated Earnings',
    yesterdayEarn: 'Yesterday Earnings',
    daysLeft: 'Days Left',
    status: 'Status',
  },
  protocol: {
    title: 'Terms of Use',
    yi: `
          <h2>Digital Offers User Registration Service Agreement</h2>
          <p>The Registration Services Agreement (hereinafter referred to as the “agreement”) concerns the regulation of rights and obligations between the user and Digital Offers in connection with the services of Digital Offers and its affiliated companies. By accessing and/or using this website, user accepts and agrees to all the terms and conditions of this agreement. Digital Offers is entitled to amend the terms of this agreement, and the revised agreement once published will effectively replace the original agreement. Users can check the latest agreement at any time.</p>
          `,
    er: `
          <h2>Content of Services</h2>
          <p>1、Digital Offers and its affiliated companies adopt our own system to provide users with leasing and management of mining machines and other services that may be added in the future through the Internet.</p>
          <p>2、For the registration information provided by the user, user agrees to: (1) provide legal, true, accurate and detailed personal data; (2) in case of changes, update user information timely. If the registration information provided by the user is illegal, untrue, inaccurate and incomplete, the user shall bear the corresponding responsibilities and consequences caused thereby, and Digital Offers may reserve the right to terminate the user’s use of the services provided by Digital Offers.</p>
          `,
    san: `
          <h2>Rights of users</h2>
          <p>1、User's username, password and security: (1) the user is entitled to choose whether to become a registered user of Digital Offers. If the user chooses to become a registered user of Digital Offers, the user may create an account. Account naming and application shall be subject to relevant laws and regulations and network ethics. The account shall not contain any insults, threats, obscenity, abuse and other words that infringe upon the legitimate rights and interests of others. (2) Once the user registers successfully and becomes a registered user of Digital Offers, user will obtain the account (mobile phone number or email address) and password and be responsible for all activities and events after logging into the system with this group of account and password. User shall bear all legal liabilities directly or indirectly caused by words and actions of the account. (3) The user shall be obliged to properly maintain the account and password, SMS verification code and Google verification code and be fully responsible for the security of the username and password, and the Google key. User shall be responsible for any legal consequences caused by the disclosure of username or password or Google key due to user’s actions. Digital Offers shall not be responsible for any property loss caused by the user’s own disclosure of such information. (4) If the user’s password is lost, the password can be reset through the link sent to the registered E-mail. Users should immediately notify Digital Offers of any illegal user accounts or other security vulnerabilities once found.</p>
          <p>2、Digital Offers promises: user’s password, name, mobile phone number or other non-public information will not be provided to any third party except to provide user services without legal reason or prior permission of the user.</p>
          <p>3、Users are entitled to participate in various online and offline activities provided by mining organization of Digital Offers.</p>
          <p>4、Users are entitled to enjoy other services provided by Digital Offers according to the regulations on the website of Digital Offers.</p>
          `,
    si: `
          <h2>User’s obligations</h2>
          <p>1、Users of the website may not endanger state security, divulge state secrets, infringe upon the lawful rights and interests of the collective and citizens of the state, or make, reproduce or disseminate the following information: (1) incitement to resist or undermine the implementation of the constitution, laws and administrative regulations; (2) inciting ethnic hatred, ethnic discrimination and undermining ethnic unity;(3) fabricating or distorting facts, spreading rumors and disturbing public order; (4) promoting feudal superstition, obscenity, pornography, gambling, violence, murder, terror or abetting crimes; (5) publicly insulting others or fabricating facts to slander others, or carrying out other malicious attacks; (6) other violations of the constitution, laws and administrative rules and regulations;(7) engaging in commercial advertising.</p>
          <p>2、Users shall not maliciously register the website account of Digital Offers by any means, including but not limited to multiple account registration for the purpose of profit making, speculation, cash, awards, etc. Users shall not embezzle other users’ accounts. If the user violates the above provisions, Digital Offers shall be entitled to directly take all necessary measures to cancel the benefits obtained due to the violation and to pursue the  legal action against the user through litigation.</p>
          <p>3、Users are prohibited from using Digital Offers in any form as a place, platform or medium for various illegal activities. Without the authorization or permission of Digital Offers, users shall not use the name of this website to engage in any commercial activities, nor shall they use Digital Offers as a place, platform or medium for commercial activities in any form.</p>
          `,
    wu: `
          <h2>Exemption</h2>
          <p>1、Based on the particularity of the Internet, Digital Offers does not guarantee that the service will not be interrupted. It will not guarantee the timeliness and safety of the service, nor assume any liability not caused by Digital Offers. Digital Offers seeks to make this website safe for users to access and use, but it does not represent or warrant that this website or its servers are free of viruses or other potentially harmful factors. Therefore, users should use industry-recognized software to detect any viruses in files downloaded from Digital Offers. Digital Offers assumes no responsibility or warranty for Internet security, and in particular we cannot assume any responsibility for hacking, phishing or other malicious activities.</p>
          <p>2、Digital Offers shall not be responsible for any failure to save, modify, delete or store information posted by users. No liability shall be assumed for typographical errors, omissions, etc. on the website that are not intentionally caused by Digital Offers. Digital Offers is entitled to but not obliged to improve or otherwise correct any omissions or errors in any part of the website.</p>
          <p>3、Except as expressly agreed in writing by Digital Offers, company is not responsible in any way for any content information obtained by user by connecting to or downloading from this website, including but not limited to advertising, and it also does not guarantee its accuracy, completeness and reliability. Digital Offers shall not be responsible for any products, services, information or materials purchased or obtained by users as a result of the information contained on this website. Users shall use the information on this website at their own risk.</p>
          <p>4、All notices to users will be delivered via announcement on the official webpage, in-site messages, email, customer service calls, SMS or regular mail. Digital Offers shall not be liable for any winning, preferential or other activities or information not obtained through the normal channels of Digital Offers.</p>
          `,
    liu: `
          <h2>Information privacy</h2>
          <p>1、Digital Offers user information referred herein pertains to information that complies with laws, regulations and relevant provisions as well as the following scope: (1) personal information provided by users to Digital Offers when registering a Digital Offers account; (2) when the user uses Digital Offers service, participates in website activities or visits website pages, Digital Offers automatically receives and records the data of the user’s browser or mobile client, including but not limited to the IP address, information in website cookies and web page records requested by the user; (3) users’ personal information legally obtained by Digital Offers from business partners; (4) other users’ personal information obtained by Digital Offers through legal means.</p>
          <p>2、Digital Offers promises: Digital Offers will not disclose the user’s password, name, mobile phone number or other non-public information to any third party without legal reasons or prior permission of the user.</p>
          <p>3、User’s personal information will be disclosed in part or in whole under the following statutory conditions: (1) Disclosure to the user or any other third party with the user’s consent; (2) Disclosure to an administrative, judicial body or other third party as required by laws, regulations or other relevant provisions, or as required by an administrative authority; (3) Other disclosures by Digital Offers in accordance with laws, regulations and other relevant provisions.</p>
          `,
    qi: `
          <h2>Provision, modification and termination of services</h2>
          <p>1、In addition to receiving the services of Digital Offers, users agree to receive information regarding services provided by Digital Offers. Users hereby authorize Digital Offers to send commercial information to its E-mail, mobile phone, mailing address, etc. Users can access the relevant webpages of Digital Offers to make changes to the user profile</p>
          <p>2、Digital Offers reserves the right to modify or interrupt services at any time without notifying users. Digital Offers is entitled to modify or interrupt the service without liability to the user or any third party not directly involved.</p>
          <p>3、If customer has any objection to the modification of this agreement or is dissatisfied with the service provided by Digital Offers, customer may exercise the following rights: (1) Stop using the services of Digital Offers; (2) Effectively notify Digital Offers in writing to stop providing services to it through legal channels such as developer’s mailbox. Upon the termination of service, the user’s right to use the services of Digital Offers shall be immediately terminated. In this case, Digital Offers is under no obligation to transmit any unprocessed information or unfinished services to the user or any third party not directly related to it.</p>
          `,
    ba: `
          <h2>Applicable laws and judgment site</h2>
          <p>1、All disputes, claims or other matters arising from or in connection with the user’s use of the website of Digital Offers shall be governed by local laws.</p>
          <p>2、Any dispute between the user and Digital Offers shall be settled through negotiation based on the principle of good faith. If no agreement can be reached through negotiation, any legal action shall be filed to the court of jurisdiction where Digital Offers is located.</p>
          `,
  },
  treasure: {
    pageTitle: 'My Wallet',
    accountDetail: 'Account Details',
    card: {
      balance: 'Available Balance',
      wallet: 'Wallet',
      deposit: 'Deposit',
      withdraw: 'Withdraw',
      record: 'detailed records',
      drecord: 'deposit records',
      wrecord: 'withdraw records',
      diya: 'Total Collateral Account',
      zhiya: 'Number of pledges in',
    },
    depositDialog: {
      title: 'Deposit',
    },
    withdrawDialog: {
      title: 'Withdraw',
      coinType: 'Coin Type',
      availableNum: 'Available Number',
      totalNum: 'Total Number',
      fee: 'Handling Fee',
      minNum: 'Minimum Withdrawal Quantity',
      address: 'please enter your withdraw address',
      amount: 'please enter your withdraw amount',
    },
  },
  waitorder: {
    orderNum: 'Order ID',
    orderTime: 'Order Time',
    power: 'Power',
    coinType: 'Coin Type',
    totalEarn: 'Accumulated Earnings',
    yesterdayEarn: 'Yesterday Earnings',
    daysLeft: 'Days Left',
    status: 'Status',
  },
}

export {
  allTranslation
}