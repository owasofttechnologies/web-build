'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2341ae7450d63541c08871c474c0f347",
"assets/AssetManifest.json": "aad837ef6adb726c74b4210b6c10a4df",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/images/png/aboutus.png": "0be6be1276a9c83b0d879d5a60ef66bf",
"assets/assets/images/png/applepay.png": "0172449011c108180f9d96ddf5a8706e",
"assets/assets/images/png/appstore.png": "5350813c9c1ff0ade8f12d7268509d24",
"assets/assets/images/png/call.png": "d2175690068214231f8c66c161476bd7",
"assets/assets/images/png/contacts.png": "8ffafa8c9e19db1ae4754500596e0201",
"assets/assets/images/png/donate.png": "d26fbd8c59612e5351a609a9da1fd868",
"assets/assets/images/png/email.png": "b0f0f69633aa678e8ceb95f8f7a5ef4a",
"assets/assets/images/png/fimag2.png": "d3061b4837742dda8f90c4b92750b873",
"assets/assets/images/png/fimage.png": "80bd4d102e7b6d4a8079acba48fde8d2",
"assets/assets/images/png/fimage1.png": "b5e319a0672fb64a00aaa17d0eee06cd",
"assets/assets/images/png/giftbox.png": "33ad22357d78b884f6cf09ee1d5410b0",
"assets/assets/images/png/gpay.png": "ff9274e67fa77a6436a976d2420606f1",
"assets/assets/images/png/group.png": "c415c883bb688d98a2aa94f20bcf03d6",
"assets/assets/images/png/Group1.png": "dce98fd673e14d3d6ca93c06991652de",
"assets/assets/images/png/Group2.png": "f1f57fd666f9d20295886035c5c45b4f",
"assets/assets/images/png/Group3.png": "f8eb4ce0ddb7fd7bab71a0be6523060e",
"assets/assets/images/png/Group4.png": "37291cec24d79a3f00c5154fcf40974a",
"assets/assets/images/png/Group5.png": "e639114adc07f12beeddd597a8b031bf",
"assets/assets/images/png/Group6.png": "ef90c7dd3c461cd8bf770e7fe4305ea6",
"assets/assets/images/png/Group7.png": "7354af9ede4a1e7f6f3950ef3a2ea212",
"assets/assets/images/png/Group8.png": "8bd66df4452cb56080d53c4fe071c17b",
"assets/assets/images/png/Group9.png": "3cf832ba40926d86304ca84d8e7e9b66",
"assets/assets/images/png/human.png": "2c16a80daa4c5d75b4c5135ccfaa6f7a",
"assets/assets/images/png/image1.png": "745898d7ef946c9d4342663c99e65c32",
"assets/assets/images/png/image2.png": "7c4e54a67691154152a688855767863b",
"assets/assets/images/png/image3.png": "ae309860728820e67d3ad55c37669971",
"assets/assets/images/png/image4.png": "7f9c95ee1c195316c0058c0a4e01b617",
"assets/assets/images/png/indicator.gif": "42343627d3812e060292173aa08270c7",
"assets/assets/images/png/listenSelected.png": "4c50198320a9f7e522cad8d33180d376",
"assets/assets/images/png/logo.png": "86a07e4c852f1c7e6a6134e31caa0778",
"assets/assets/images/png/mail.png": "62892bc8936987e23d1a0c44de8d48db",
"assets/assets/images/png/next.png": "beb148506fc94a3039836daf82b231a4",
"assets/assets/images/png/pause.png": "2fd8de6c51dbbac49d23a7c8d3847aa5",
"assets/assets/images/png/paypal.png": "b4e1c2fce04e6e8f89a6cfdcffa961c1",
"assets/assets/images/png/play.png": "3e00485a2e4a595f86a36ac66704fb54",
"assets/assets/images/png/playstore.png": "0a587f8911711d4ff0755d334b5dcc8c",
"assets/assets/images/png/previous.png": "7996174e2e1a23b2afc1268ba6e5d891",
"assets/assets/images/png/profile.png": "fd9d285f39a68987ea1990329200a511",
"assets/assets/images/png/selectshuffel.png": "0888318b473bb762f593efecf3b88ea7",
"assets/assets/images/png/selectsingle.png": "98b5022f0a95c266eb6b6aa16350e0b7",
"assets/assets/images/png/shuffle.png": "c8b6283d4942b4c8cc87a9f9d4649fdf",
"assets/assets/images/png/single.png": "649f5d2c316770dccbce93e58ccd5d80",
"assets/assets/images/png/splash.png": "239ab9586e0574074a97ce1a072f199f",
"assets/assets/images/png/splash_back.png": "0e364f850e163fd9ddfe02f746d9720a",
"assets/assets/images/png/web.png": "9681ecd3916713f5c8681eb8a143a4cc",
"assets/assets/images/png/webimage.png": "59b65b60b02fd712499cdb9ebdb235ea",
"assets/assets/images/png/website.png": "635a8d09b3f45c0c33f8c4aa8e9abfcd",
"assets/assets/images/svg/applepay.svg": "040d176e2ed0a069652e596a543d284e",
"assets/assets/images/svg/calendar.svg": "82269a559a4fc69d31ea998dd9e4e72c",
"assets/assets/images/svg/call.svg": "e88e59d6997fb2d428b0e2273b1cbe2c",
"assets/assets/images/svg/callSelected.svg": "57d3a87b9d2e1247b1d02f4a75b144ab",
"assets/assets/images/svg/card.svg": "b50e53d9ab32183c19bf9b1fb4cf1a49",
"assets/assets/images/svg/cardHolder.svg": "8da086bed6ccb17543508aa2abe9c989",
"assets/assets/images/svg/donate.svg": "ed9ec70daa258a891102b6b3c43d06e6",
"assets/assets/images/svg/donateSelected.svg": "16c1c078cd6f7fea47c7d056b54b09de",
"assets/assets/images/svg/fav.svg": "0cacdff330aedb47616dd81effa298e0",
"assets/assets/images/svg/favfill.svg": "494c1ad4202f802c52ea6c64f0c69630",
"assets/assets/images/svg/giftbox.svg": "dd9f1c8e9c7f013e8d62daf5d45ff937",
"assets/assets/images/svg/gpay.svg": "8c9f49b7f6fcfc4fb25af6929d8ee1fa",
"assets/assets/images/svg/group.svg": "2c8120c456562aa5d69d1e78da9836c3",
"assets/assets/images/svg/group1.svg": "23cb36e620ce3c4db342ed0d84368773",
"assets/assets/images/svg/group2.svg": "0285e4a9d033e0e0ed83d880a00d46ee",
"assets/assets/images/svg/group3.svg": "1332437755c20b44dd6370cabb1463a4",
"assets/assets/images/svg/group4.svg": "13273f439a1662cddc676f249cd5d550",
"assets/assets/images/svg/group5.svg": "89eee94910418ded837659174c5c8865",
"assets/assets/images/svg/group6.svg": "e9dd4280b6845783f8e983447f39165d",
"assets/assets/images/svg/group7.svg": "6d152fbcaa5d2673cff8598a835fe3fc",
"assets/assets/images/svg/group8.svg": "0b5d45f745be39fbfc59902059e77d50",
"assets/assets/images/svg/group9.svg": "e21419cf4b8d2cc9bcc00dbc584dcfde",
"assets/assets/images/svg/listen.svg": "0cd62258e1bde790b8e5a3224acd9d93",
"assets/assets/images/svg/listenSelected.svg": "baadd4337c7baf6779d978d4f070eaa0",
"assets/assets/images/svg/loop.svg": "7965b5876886ab87e92f27c20bf0d914",
"assets/assets/images/svg/next.svg": "94cef841fa049edc24765108cb3dc2d0",
"assets/assets/images/svg/pause.svg": "617f4f08d5d0da57e27864e1fc8162e0",
"assets/assets/images/svg/paypal.svg": "9ea9f3230c965844d8e5155967ca179b",
"assets/assets/images/svg/person.svg": "52f508de28c687a98114278853c4d1cc",
"assets/assets/images/svg/personSelected.svg": "7c2be3eac646678471b245b21c8a9b95",
"assets/assets/images/svg/play.svg": "0e6ae53cf4c0bc87782704d35e2647b9",
"assets/assets/images/svg/previous.svg": "99b8eaccac6335b02b60f0b7fc66c7f3",
"assets/assets/images/svg/profile.svg": "d69b4b8b796240b09bcb56f3e22366e5",
"assets/assets/images/svg/search.svg": "736fb149c67ca19297cd35e962135bca",
"assets/assets/images/svg/selectshuffel.svg": "0db22d7d7ebd37af72a6ae435c4d1f4e",
"assets/assets/images/svg/selectsingle.svg": "fdb7316ed1ef0c03f42d58e0dd22c23e",
"assets/assets/images/svg/shield.svg": "2d1eb750ca8ae4e256da4d6efe0a5d04",
"assets/assets/images/svg/shuffle.svg": "57e5c8c13a7d77560cd813442f7b41d4",
"assets/assets/images/svg/single.svg": "6fa77750a9fd542852fe52cba7d00656",
"assets/assets/json-files/initial_settings.json": "8077b4004358d96ae0f6fac3dd6ebd97",
"assets/FontManifest.json": "9931b4073c41d8a0dc587991ed84044e",
"assets/fonts/MaterialIcons-Regular.otf": "2401bf15ec2153eb619e7bea30f2e0b5",
"assets/NOTICES": "085caa86a4f0103d017f4b5b038c0bd7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "3cad99455f1d9d4ad6fc407612f40b7a",
"assets/packages/flutter_paypal/lib/src/assets/img/cloud_state.png": "e695e021561a6d9754f06038b4d6b1d9",
"assets/packages/intl_phone_field/assets/flags/ad.png": "384e9845debe9aca8f8586d9bedcb7e6",
"assets/packages/intl_phone_field/assets/flags/ae.png": "792efc5eb6c31d780bd34bf4bad69f3f",
"assets/packages/intl_phone_field/assets/flags/af.png": "ba710b50a060b5351381b55366396c30",
"assets/packages/intl_phone_field/assets/flags/ag.png": "41c11d5668c93ba6e452f811defdbb24",
"assets/packages/intl_phone_field/assets/flags/ai.png": "ce5e91ed1725f0499b9231b69a7fd448",
"assets/packages/intl_phone_field/assets/flags/al.png": "722cf9e5c7a1d9c9e4608fb44dbb427d",
"assets/packages/intl_phone_field/assets/flags/am.png": "aaa39141fbc80205bebaa0200b55a13a",
"assets/packages/intl_phone_field/assets/flags/an.png": "4e4b90fbca1275d1839ca5b44fc51071",
"assets/packages/intl_phone_field/assets/flags/ao.png": "5f0a372aa3aa7150a3dafea97acfc10d",
"assets/packages/intl_phone_field/assets/flags/aq.png": "0c586e7b91aa192758fdd0f03adb84d8",
"assets/packages/intl_phone_field/assets/flags/ar.png": "3bd245f8c28f70c9ef9626dae27adc65",
"assets/packages/intl_phone_field/assets/flags/as.png": "d9c1da515c6f945c2e2554592a9dfaae",
"assets/packages/intl_phone_field/assets/flags/at.png": "570c070177a5ea0fe03e20107ebf5283",
"assets/packages/intl_phone_field/assets/flags/au.png": "72be14316f0af3903cdca7a726c0c589",
"assets/packages/intl_phone_field/assets/flags/aw.png": "a93ddf8e32d246dc47f6631f38e0ed92",
"assets/packages/intl_phone_field/assets/flags/ax.png": "ec2062c36f09ed8fb90ac8992d010024",
"assets/packages/intl_phone_field/assets/flags/az.png": "6ffa766f6883d2d3d350cdc22a062ca3",
"assets/packages/intl_phone_field/assets/flags/ba.png": "d415bad33b35de3f095177e8e86cbc82",
"assets/packages/intl_phone_field/assets/flags/bb.png": "a8473747387e4e7a8450c499529f1c93",
"assets/packages/intl_phone_field/assets/flags/bd.png": "86a0e4bd8787dc8542137a407e0f987f",
"assets/packages/intl_phone_field/assets/flags/be.png": "7e5e1831cdd91935b38415479a7110eb",
"assets/packages/intl_phone_field/assets/flags/bf.png": "63f1c67fca7ce8b52b3418a90af6ad37",
"assets/packages/intl_phone_field/assets/flags/bg.png": "1d24bc616e3389684ed2c9f18bcb0209",
"assets/packages/intl_phone_field/assets/flags/bh.png": "a1acd86ef0e19ea5f0297bbe1de6cfd4",
"assets/packages/intl_phone_field/assets/flags/bi.png": "adda8121501f0543f1075244a1acc275",
"assets/packages/intl_phone_field/assets/flags/bj.png": "6fdc6449f73d23ad3f07060f92db4423",
"assets/packages/intl_phone_field/assets/flags/bl.png": "dae94f5465d3390fdc5929e4f74d3f5f",
"assets/packages/intl_phone_field/assets/flags/bm.png": "b366ba84cbc8286c830f392bb9086be5",
"assets/packages/intl_phone_field/assets/flags/bn.png": "ed650de06fff61ff27ec92a872197948",
"assets/packages/intl_phone_field/assets/flags/bo.png": "3ccf6fa7f9cbc27949b8418925e4e89c",
"assets/packages/intl_phone_field/assets/flags/bq.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/intl_phone_field/assets/flags/br.png": "5093e0cd8fd3c094664cd17ea8a36fd1",
"assets/packages/intl_phone_field/assets/flags/bs.png": "2b9540c4fa514f71911a48de0bd77e71",
"assets/packages/intl_phone_field/assets/flags/bt.png": "3cfe1440e952bc7266d71f7f1454fa23",
"assets/packages/intl_phone_field/assets/flags/bv.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/bw.png": "fac8b90d7404728c08686dc39bab4fb3",
"assets/packages/intl_phone_field/assets/flags/by.png": "beabf61e94fb3a4f7c7a7890488b213d",
"assets/packages/intl_phone_field/assets/flags/bz.png": "fd2d7d27a5ddabe4eb9a10b1d3a433e4",
"assets/packages/intl_phone_field/assets/flags/ca.png": "76f2fac1d3b2cc52ba6695c2e2941632",
"assets/packages/intl_phone_field/assets/flags/cc.png": "31a475216e12fef447382c97b42876ce",
"assets/packages/intl_phone_field/assets/flags/cd.png": "5b5f832ed6cd9f9240cb31229d8763dc",
"assets/packages/intl_phone_field/assets/flags/cf.png": "263583ffdf7a888ce4fba8487d1da0b2",
"assets/packages/intl_phone_field/assets/flags/cg.png": "eca97338cc1cb5b5e91bec72af57b3d4",
"assets/packages/intl_phone_field/assets/flags/ch.png": "a251702f7760b0aac141428ed60b7b66",
"assets/packages/intl_phone_field/assets/flags/ci.png": "7f5ca3779d5ff6ce0c803a6efa0d2da7",
"assets/packages/intl_phone_field/assets/flags/ck.png": "39f343868a8dc8ca95d27b27a5caf480",
"assets/packages/intl_phone_field/assets/flags/cl.png": "6735e0e2d88c119e9ed1533be5249ef1",
"assets/packages/intl_phone_field/assets/flags/cm.png": "42d52fa71e8b4dbb182ff431749e8d0d",
"assets/packages/intl_phone_field/assets/flags/cn.png": "040539c2cdb60ebd9dc8957cdc6a8ad0",
"assets/packages/intl_phone_field/assets/flags/co.png": "e3b1be16dcdae6cb72e9c238fdddce3c",
"assets/packages/intl_phone_field/assets/flags/cr.png": "bfd8b41e63fc3cc829c72c4b2e170532",
"assets/packages/intl_phone_field/assets/flags/cu.png": "f41715bd51f63a9aebf543788543b4c4",
"assets/packages/intl_phone_field/assets/flags/cv.png": "9b1f31f9fc0795d728328dedd33eb1c0",
"assets/packages/intl_phone_field/assets/flags/cw.png": "6c598eb0d331d6b238da57055ec00d33",
"assets/packages/intl_phone_field/assets/flags/cx.png": "8efa3231c8a3900a78f2b51d829f8c52",
"assets/packages/intl_phone_field/assets/flags/cy.png": "7b36f4af86257a3f15f5a5a16f4a2fcd",
"assets/packages/intl_phone_field/assets/flags/cz.png": "73ecd64c6144786c4d03729b1dd9b1f3",
"assets/packages/intl_phone_field/assets/flags/de.png": "5d9561246523cf6183928756fd605e25",
"assets/packages/intl_phone_field/assets/flags/dj.png": "078bd37d41f746c3cb2d84c1e9611c55",
"assets/packages/intl_phone_field/assets/flags/dk.png": "abcd01bdbcc02b4a29cbac237f29cd1d",
"assets/packages/intl_phone_field/assets/flags/dm.png": "8886b222ed9ccd00f67e8bcf86dadcc2",
"assets/packages/intl_phone_field/assets/flags/do.png": "ed35983a9263bb5713be37d9a52caddc",
"assets/packages/intl_phone_field/assets/flags/dz.png": "132ceca353a95c8214676b2e94ecd40f",
"assets/packages/intl_phone_field/assets/flags/ec.png": "c1ae60d080be91f3be31e92e0a2d9555",
"assets/packages/intl_phone_field/assets/flags/ee.png": "e242645cae28bd5291116ea211f9a566",
"assets/packages/intl_phone_field/assets/flags/eg.png": "311d780e8e3dd43f87e6070f6feb74c7",
"assets/packages/intl_phone_field/assets/flags/eh.png": "515a9cf2620c802e305b5412ac81aed2",
"assets/packages/intl_phone_field/assets/flags/er.png": "8ca78e10878a2e97c1371b38c5d258a7",
"assets/packages/intl_phone_field/assets/flags/es.png": "654965f9722f6706586476fb2f5d30dd",
"assets/packages/intl_phone_field/assets/flags/et.png": "57edff61c7fddf2761a19948acef1498",
"assets/packages/intl_phone_field/assets/flags/eu.png": "c58ece3931acb87faadc5b940d4f7755",
"assets/packages/intl_phone_field/assets/flags/fi.png": "3ccd69a842e55183415b7ea2c04b15c8",
"assets/packages/intl_phone_field/assets/flags/fj.png": "1c6a86752578eb132390febf12789cd6",
"assets/packages/intl_phone_field/assets/flags/fk.png": "da8b0fe48829aae2c8feb4839895de63",
"assets/packages/intl_phone_field/assets/flags/fm.png": "d571b8bc4b80980a81a5edbde788b6d2",
"assets/packages/intl_phone_field/assets/flags/fo.png": "2c7d9233582e83a86927e634897a2a90",
"assets/packages/intl_phone_field/assets/flags/fr.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/ga.png": "b0e5b2fa1b7106c7652a955db24c11c4",
"assets/packages/intl_phone_field/assets/flags/gb-eng.png": "0d9f2a6775fd52b79e1d78eb1dda10cf",
"assets/packages/intl_phone_field/assets/flags/gb-nir.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/gb-sct.png": "75106a5e49e3e16da76cb33bdac102ab",
"assets/packages/intl_phone_field/assets/flags/gb-wls.png": "d7d7c77c72cd425d993bdc50720f4d04",
"assets/packages/intl_phone_field/assets/flags/gb.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/gd.png": "7a4864ccfa2a0564041c2d1f8a13a8c9",
"assets/packages/intl_phone_field/assets/flags/ge.png": "6fbd41f07921fa415347ebf6dff5b0f7",
"assets/packages/intl_phone_field/assets/flags/gf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/gg.png": "eed435d25bd755aa7f9cd7004b9ed49d",
"assets/packages/intl_phone_field/assets/flags/gh.png": "b35464dca793fa33e51bf890b5f3d92b",
"assets/packages/intl_phone_field/assets/flags/gi.png": "446aa44aaa063d240adab88243b460d3",
"assets/packages/intl_phone_field/assets/flags/gl.png": "b79e24ee1889b7446ba3d65564b86810",
"assets/packages/intl_phone_field/assets/flags/gm.png": "7148d3715527544c2e7d8d6f4a445bb6",
"assets/packages/intl_phone_field/assets/flags/gn.png": "b2287c03c88a72d968aa796a076ba056",
"assets/packages/intl_phone_field/assets/flags/gp.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/gq.png": "4286e56f388a37f64b21eb56550c06d9",
"assets/packages/intl_phone_field/assets/flags/gr.png": "ec11281d7decbf07b81a23a72a609b59",
"assets/packages/intl_phone_field/assets/flags/gs.png": "419dd57836797a3f1bf6258ea6589f9a",
"assets/packages/intl_phone_field/assets/flags/gt.png": "706a0c3b5e0b589c843e2539e813839e",
"assets/packages/intl_phone_field/assets/flags/gu.png": "2acb614b442e55864411b6e418df6eab",
"assets/packages/intl_phone_field/assets/flags/gw.png": "05606b9a6393971bd87718b809e054f9",
"assets/packages/intl_phone_field/assets/flags/gy.png": "159a260bf0217128ea7475ba5b272b6a",
"assets/packages/intl_phone_field/assets/flags/hk.png": "4b5ec424348c98ec71a46ad3dce3931d",
"assets/packages/intl_phone_field/assets/flags/hm.png": "72be14316f0af3903cdca7a726c0c589",
"assets/packages/intl_phone_field/assets/flags/hn.png": "9ecf68aed83c4a9b3f1e6275d96bfb04",
"assets/packages/intl_phone_field/assets/flags/hr.png": "69711b2ea009a3e7c40045b538768d4e",
"assets/packages/intl_phone_field/assets/flags/ht.png": "630f7f8567d87409a32955107ad11a86",
"assets/packages/intl_phone_field/assets/flags/hu.png": "281582a753e643b46bdd894047db08bb",
"assets/packages/intl_phone_field/assets/flags/id.png": "80bb82d11d5bc144a21042e77972bca9",
"assets/packages/intl_phone_field/assets/flags/ie.png": "1d91912afc591dd120b47b56ea78cdbf",
"assets/packages/intl_phone_field/assets/flags/il.png": "1e06ad7783f24332405d36561024cc4c",
"assets/packages/intl_phone_field/assets/flags/im.png": "7c9ccb825f0fca557d795c4330cf4f50",
"assets/packages/intl_phone_field/assets/flags/in.png": "1dec13ba525529cffd4c7f8a35d51121",
"assets/packages/intl_phone_field/assets/flags/io.png": "83d45bbbff087d47b2b39f1c20598f52",
"assets/packages/intl_phone_field/assets/flags/iq.png": "bc3e6f68c5188dbf99b473e2bea066f2",
"assets/packages/intl_phone_field/assets/flags/ir.png": "37f67c3141e9843196cb94815be7bd37",
"assets/packages/intl_phone_field/assets/flags/is.png": "907840430252c431518005b562707831",
"assets/packages/intl_phone_field/assets/flags/it.png": "5c8e910e6a33ec63dfcda6e8960dd19c",
"assets/packages/intl_phone_field/assets/flags/je.png": "288f8dca26098e83ff0455b08cceca1b",
"assets/packages/intl_phone_field/assets/flags/jm.png": "074400103847c56c37425a73f9d23665",
"assets/packages/intl_phone_field/assets/flags/jo.png": "c01cb41f74f9db0cf07ba20f0af83011",
"assets/packages/intl_phone_field/assets/flags/jp.png": "25ac778acd990bedcfdc02a9b4570045",
"assets/packages/intl_phone_field/assets/flags/ke.png": "cf5aae3699d3cacb39db9803edae172b",
"assets/packages/intl_phone_field/assets/flags/kg.png": "c4aa6d221d9a9d332155518d6b82dbc7",
"assets/packages/intl_phone_field/assets/flags/kh.png": "d48d51e8769a26930da6edfc15de97fe",
"assets/packages/intl_phone_field/assets/flags/ki.png": "14db0fc29398730064503907bd696176",
"assets/packages/intl_phone_field/assets/flags/km.png": "5554c8746c16d4f482986fb78ffd9b36",
"assets/packages/intl_phone_field/assets/flags/kn.png": "f318e2fd87e5fd2cabefe9ff252bba46",
"assets/packages/intl_phone_field/assets/flags/kp.png": "e1c8bb52f31fca22d3368d8f492d8f27",
"assets/packages/intl_phone_field/assets/flags/kr.png": "a3b7da3b76b20a70e9cd63cc2315b51b",
"assets/packages/intl_phone_field/assets/flags/kw.png": "3ca448e219d0df506fb2efd5b91be092",
"assets/packages/intl_phone_field/assets/flags/ky.png": "38e39eba673e82c48a1f25bd103a7e97",
"assets/packages/intl_phone_field/assets/flags/kz.png": "cb3b0095281c9d7e7fb5ce1716ef8ee5",
"assets/packages/intl_phone_field/assets/flags/la.png": "e8cd9c3ee6e134adcbe3e986e1974e4a",
"assets/packages/intl_phone_field/assets/flags/lb.png": "f80cde345f0d9bd0086531808ce5166a",
"assets/packages/intl_phone_field/assets/flags/lc.png": "8c1a03a592aa0a99fcaf2b81508a87eb",
"assets/packages/intl_phone_field/assets/flags/li.png": "ecdf7b3fe932378b110851674335d9ab",
"assets/packages/intl_phone_field/assets/flags/lk.png": "5a3a063cfff4a92fb0ba6158e610e025",
"assets/packages/intl_phone_field/assets/flags/lr.png": "b92c75e18dd97349c75d6a43bd17ee94",
"assets/packages/intl_phone_field/assets/flags/ls.png": "2bca756f9313957347404557acb532b0",
"assets/packages/intl_phone_field/assets/flags/lt.png": "7df2cd6566725685f7feb2051f916a3e",
"assets/packages/intl_phone_field/assets/flags/lu.png": "6274fd1cae3c7a425d25e4ccb0941bb8",
"assets/packages/intl_phone_field/assets/flags/lv.png": "53105fea0cc9cc554e0ceaabc53a2d5d",
"assets/packages/intl_phone_field/assets/flags/ly.png": "8d65057351859065d64b4c118ff9e30e",
"assets/packages/intl_phone_field/assets/flags/ma.png": "057ea2e08587f1361b3547556adae0c2",
"assets/packages/intl_phone_field/assets/flags/mc.png": "90c2ad7f144d73d4650cbea9dd621275",
"assets/packages/intl_phone_field/assets/flags/md.png": "8911d3d821b95b00abbba8771e997eb3",
"assets/packages/intl_phone_field/assets/flags/me.png": "590284bc85810635ace30a173e615ca4",
"assets/packages/intl_phone_field/assets/flags/mf.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/mg.png": "0ef6271ad284ebc0069ff0aeb5a3ad1e",
"assets/packages/intl_phone_field/assets/flags/mh.png": "18dda388ef5c1cf37cae5e7d5fef39bc",
"assets/packages/intl_phone_field/assets/flags/mk.png": "835f2263974de523fa779d29c90595bf",
"assets/packages/intl_phone_field/assets/flags/ml.png": "0c50dfd539e87bb4313da0d4556e2d13",
"assets/packages/intl_phone_field/assets/flags/mm.png": "32e5293d6029d8294c7dfc3c3835c222",
"assets/packages/intl_phone_field/assets/flags/mn.png": "16086e8d89c9067d29fd0f2ea7021a45",
"assets/packages/intl_phone_field/assets/flags/mo.png": "849848a26bbfc87024017418ad7a6233",
"assets/packages/intl_phone_field/assets/flags/mp.png": "87351c30a529071ee9a4bb67765fea4f",
"assets/packages/intl_phone_field/assets/flags/mq.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/mr.png": "f2a62602d43a1ee14625af165b96ce2f",
"assets/packages/intl_phone_field/assets/flags/ms.png": "9c955a926cf7d57fccb450a97192afa7",
"assets/packages/intl_phone_field/assets/flags/mt.png": "f3119401ae0c3a9d6e2dc23803928c06",
"assets/packages/intl_phone_field/assets/flags/mu.png": "c5228d1e94501d846b5bf203f038ae49",
"assets/packages/intl_phone_field/assets/flags/mv.png": "d9245f74e34d5c054413ace4b86b4f16",
"assets/packages/intl_phone_field/assets/flags/mw.png": "ffc1f18eeedc1dfbb1080aa985ce7d05",
"assets/packages/intl_phone_field/assets/flags/mx.png": "84b12a569b209e213daccfcbdd1fc799",
"assets/packages/intl_phone_field/assets/flags/my.png": "f7f962e8a074387fd568c9d4024e0959",
"assets/packages/intl_phone_field/assets/flags/mz.png": "1ab1ac750fbbb453d33e9f25850ac2a0",
"assets/packages/intl_phone_field/assets/flags/na.png": "cdc00e9267a873609b0abea944939ff7",
"assets/packages/intl_phone_field/assets/flags/nc.png": "cb36e0c945b79d56def11b23c6a9c7e9",
"assets/packages/intl_phone_field/assets/flags/ne.png": "a20724c177e86d6a27143aa9c9664a6f",
"assets/packages/intl_phone_field/assets/flags/nf.png": "1c2069b299ce3660a2a95ec574dfde25",
"assets/packages/intl_phone_field/assets/flags/ng.png": "aedbe364bd1543832e88e64b5817e877",
"assets/packages/intl_phone_field/assets/flags/ni.png": "e398dc23e79d9ccd702546cc25f126bf",
"assets/packages/intl_phone_field/assets/flags/nl.png": "3649c177693bfee9c2fcc63c191a51f1",
"assets/packages/intl_phone_field/assets/flags/no.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/np.png": "6e099fb1e063930bdd00e8df5cef73d4",
"assets/packages/intl_phone_field/assets/flags/nr.png": "1316f3a8a419d8be1975912c712535ea",
"assets/packages/intl_phone_field/assets/flags/nu.png": "f4169998548e312584c67873e0d9352d",
"assets/packages/intl_phone_field/assets/flags/nz.png": "65c811e96eb6c9da65538f899c110895",
"assets/packages/intl_phone_field/assets/flags/om.png": "cebd9ab4b9ab071b2142e21ae2129efc",
"assets/packages/intl_phone_field/assets/flags/pa.png": "78e3e4fd56f0064837098fe3f22fb41b",
"assets/packages/intl_phone_field/assets/flags/pe.png": "4d9249aab70a26fadabb14380b3b55d2",
"assets/packages/intl_phone_field/assets/flags/pf.png": "1ae72c24380d087cbe2d0cd6c3b58821",
"assets/packages/intl_phone_field/assets/flags/pg.png": "0f7e03465a93e0b4e3e1c9d3dd5814a4",
"assets/packages/intl_phone_field/assets/flags/ph.png": "e4025d1395a8455f1ba038597a95228c",
"assets/packages/intl_phone_field/assets/flags/pk.png": "7a6a621f7062589677b3296ca16c6718",
"assets/packages/intl_phone_field/assets/flags/pl.png": "f20e9ef473a9ed24176f5ad74dd0d50a",
"assets/packages/intl_phone_field/assets/flags/pm.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/pn.png": "0b0641b356af4c3e3489192ff4b0be77",
"assets/packages/intl_phone_field/assets/flags/pr.png": "b97b2f4432c430bc340d893f36527e31",
"assets/packages/intl_phone_field/assets/flags/ps.png": "52a25a48658ca9274830ffa124a8c1db",
"assets/packages/intl_phone_field/assets/flags/pt.png": "eba93d33545c78cc67915d9be8323661",
"assets/packages/intl_phone_field/assets/flags/pw.png": "2e697cc6907a7b94c7f94f5d9b3bdccc",
"assets/packages/intl_phone_field/assets/flags/py.png": "154d4add03b4878caf00bd3249e14f40",
"assets/packages/intl_phone_field/assets/flags/qa.png": "eb9b3388e554cf85aea1e739247548df",
"assets/packages/intl_phone_field/assets/flags/re.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/ro.png": "85af99741fe20664d9a7112cfd8d9722",
"assets/packages/intl_phone_field/assets/flags/rs.png": "9dff535d2d08c504be63062f39eff0b7",
"assets/packages/intl_phone_field/assets/flags/ru.png": "6974dcb42ad7eb3add1009ea0c6003e3",
"assets/packages/intl_phone_field/assets/flags/rw.png": "d1aae0647a5b1ab977ae43ab894ce2c3",
"assets/packages/intl_phone_field/assets/flags/sa.png": "7c95c1a877148e2aa21a213d720ff4fd",
"assets/packages/intl_phone_field/assets/flags/sb.png": "296ecedbd8d1c2a6422c3ba8e5cd54bd",
"assets/packages/intl_phone_field/assets/flags/sc.png": "e969fd5afb1eb5902675b6bcf49a8c2e",
"assets/packages/intl_phone_field/assets/flags/sd.png": "65ce270762dfc87475ea99bd18f79025",
"assets/packages/intl_phone_field/assets/flags/se.png": "25dd5434891ac1ca2ad1af59cda70f80",
"assets/packages/intl_phone_field/assets/flags/sg.png": "bc772e50b8c79f08f3c2189f5d8ce491",
"assets/packages/intl_phone_field/assets/flags/sh.png": "98773db151c150cabe845183241bfe6b",
"assets/packages/intl_phone_field/assets/flags/si.png": "24237e53b34752554915e71e346bb405",
"assets/packages/intl_phone_field/assets/flags/sj.png": "33bc70259c4908b7b9adeef9436f7a9f",
"assets/packages/intl_phone_field/assets/flags/sk.png": "2a1ee716d4b41c017ff1dbf3fd3ffc64",
"assets/packages/intl_phone_field/assets/flags/sl.png": "61b9d992c8a6a83abc4d432069617811",
"assets/packages/intl_phone_field/assets/flags/sm.png": "a8d6801cb7c5360e18f0a2ed146b396d",
"assets/packages/intl_phone_field/assets/flags/sn.png": "68eaa89bbc83b3f356e1ba2096b09b3c",
"assets/packages/intl_phone_field/assets/flags/so.png": "1ce20d052f9d057250be96f42647513b",
"assets/packages/intl_phone_field/assets/flags/sr.png": "9f912879f2829a625436ccd15e643e39",
"assets/packages/intl_phone_field/assets/flags/ss.png": "b0120cb000b31bb1a5c801c3592139bc",
"assets/packages/intl_phone_field/assets/flags/st.png": "fef62c31713ff1063da2564df3f43eea",
"assets/packages/intl_phone_field/assets/flags/sv.png": "217b691efbef7a0f48cdd53e91997f0e",
"assets/packages/intl_phone_field/assets/flags/sx.png": "9c19254973d8acf81581ad95b408c7e6",
"assets/packages/intl_phone_field/assets/flags/sy.png": "24186a0f4ce804a16c91592db5a16a3a",
"assets/packages/intl_phone_field/assets/flags/sz.png": "d1829842e45c2b2b29222c1b7e201591",
"assets/packages/intl_phone_field/assets/flags/tc.png": "d728d6763c17c520ad6bcf3c24282a29",
"assets/packages/intl_phone_field/assets/flags/td.png": "009303b6188ca0e30bd50074b16f0b16",
"assets/packages/intl_phone_field/assets/flags/tf.png": "b2c044b86509e7960b5ba66b094ea285",
"assets/packages/intl_phone_field/assets/flags/tg.png": "7f91f02b26b74899ff882868bd611714",
"assets/packages/intl_phone_field/assets/flags/th.png": "11ce0c9f8c738fd217ea52b9bc29014b",
"assets/packages/intl_phone_field/assets/flags/tj.png": "c73b793f2acd262e71b9236e64c77636",
"assets/packages/intl_phone_field/assets/flags/tk.png": "60428ff1cdbae680e5a0b8cde4677dd5",
"assets/packages/intl_phone_field/assets/flags/tl.png": "c80876dc80cda5ab6bb8ef078bc6b05d",
"assets/packages/intl_phone_field/assets/flags/tm.png": "0980fb40ec450f70896f2c588510f933",
"assets/packages/intl_phone_field/assets/flags/tn.png": "6612e9fec4bef022cbd45cbb7c02b2b6",
"assets/packages/intl_phone_field/assets/flags/to.png": "1cdd716b5b5502f85d6161dac6ee6c5b",
"assets/packages/intl_phone_field/assets/flags/tr.png": "27feab1a5ca390610d07e0c6bd4720d5",
"assets/packages/intl_phone_field/assets/flags/tt.png": "a8e1fc5c65dc8bc362a9453fadf9c4b3",
"assets/packages/intl_phone_field/assets/flags/tv.png": "c57025ed7ae482210f29b9da86b0d211",
"assets/packages/intl_phone_field/assets/flags/tw.png": "b1101fd5f871a9ffe7c9ad191a7d3304",
"assets/packages/intl_phone_field/assets/flags/tz.png": "56ec99c7e0f68b88a2210620d873683a",
"assets/packages/intl_phone_field/assets/flags/ua.png": "b4b10d893611470661b079cb30473871",
"assets/packages/intl_phone_field/assets/flags/ug.png": "9a0f358b1eb19863e21ae2063fab51c0",
"assets/packages/intl_phone_field/assets/flags/um.png": "8fe7c4fed0a065fdfb9bd3125c6ecaa1",
"assets/packages/intl_phone_field/assets/flags/us.png": "83b065848d14d33c0d10a13e01862f34",
"assets/packages/intl_phone_field/assets/flags/uy.png": "da4247b21fcbd9e30dc2b3f7c5dccb64",
"assets/packages/intl_phone_field/assets/flags/uz.png": "3adad3bac322220cac8abc1c7cbaacac",
"assets/packages/intl_phone_field/assets/flags/va.png": "c010bf145f695d5c8fb551bafc081f77",
"assets/packages/intl_phone_field/assets/flags/vc.png": "da3ca14a978717467abbcdece05d3544",
"assets/packages/intl_phone_field/assets/flags/ve.png": "893391d65cbd10ca787a73578c77d3a7",
"assets/packages/intl_phone_field/assets/flags/vg.png": "fc095e11f5b58604d6f4d3c2b43d167f",
"assets/packages/intl_phone_field/assets/flags/vi.png": "3f317c56f31971b3179abd4e03847036",
"assets/packages/intl_phone_field/assets/flags/vn.png": "32ff65ccbf31a707a195be2a5141a89b",
"assets/packages/intl_phone_field/assets/flags/vu.png": "3f201fdfb6d669a64c35c20a801016d1",
"assets/packages/intl_phone_field/assets/flags/wf.png": "6f1644b8f907d197c0ff7ed2f366ad64",
"assets/packages/intl_phone_field/assets/flags/ws.png": "f206322f3e22f175869869dbfadb6ce8",
"assets/packages/intl_phone_field/assets/flags/xk.png": "079259fbcb1f3c78dafa944464295c16",
"assets/packages/intl_phone_field/assets/flags/ye.png": "4cf73209d90e9f02ead1565c8fdf59e5",
"assets/packages/intl_phone_field/assets/flags/yt.png": "134bee9f9d794dc5c0922d1b9bdbb710",
"assets/packages/intl_phone_field/assets/flags/za.png": "b28280c6c3eb4624c18b5455d4a1b1ff",
"assets/packages/intl_phone_field/assets/flags/zm.png": "81cec35b715f227328cad8f314acd797",
"assets/packages/intl_phone_field/assets/flags/zw.png": "078a3267ea8eabf88b2d43fe4aed5ce5",
"assets/packages/pay_android/assets/ar/add_to.svg": "68d78045fe1fffd74fe47f4a29b2a427",
"assets/packages/pay_android/assets/ar/book_with.svg": "9e3a15fa087dfa8ab5c95577a504125f",
"assets/packages/pay_android/assets/ar/buy_with.svg": "9828d8a5a5c5e860a9c0ed6d502ecd9a",
"assets/packages/pay_android/assets/ar/checkout_with.svg": "2cf67466b34fada10c0ff693438adde8",
"assets/packages/pay_android/assets/ar/donate_with.svg": "2d9a8344409330f310d6e098212f8e86",
"assets/packages/pay_android/assets/ar/order_with.svg": "014b4acf694733db5560b40e93a8773b",
"assets/packages/pay_android/assets/ar/pay_with.svg": "9324e9688c2c3563b1aac257c55b332f",
"assets/packages/pay_android/assets/ar/subscribe_with.svg": "bbc5ab1254c834e3ad50142802732370",
"assets/packages/pay_android/assets/bg/add_to.svg": "17ca05b123a4c3d64ec032a41875ab41",
"assets/packages/pay_android/assets/bg/book_with.svg": "2a38f23b87e4b55bf498b61026b3dd04",
"assets/packages/pay_android/assets/bg/buy_with.svg": "681850b53f3f1680b33f970c0250a750",
"assets/packages/pay_android/assets/bg/checkout_with.svg": "2b8d63fc4636093ec3c8c7cefcd156af",
"assets/packages/pay_android/assets/bg/donate_with.svg": "c5b2eb3920fedf5dcad83fa4c30c817e",
"assets/packages/pay_android/assets/bg/order_with.svg": "b70e82856b7966b21bdf8433d3153f22",
"assets/packages/pay_android/assets/bg/pay_with.svg": "317d4d5111d4ad4c6702144652db14c2",
"assets/packages/pay_android/assets/bg/subscribe_with.svg": "664e314a9401ed1817ee4c0812f72632",
"assets/packages/pay_android/assets/ca/add_to.svg": "5ce822e74e207e40e6432cecb18e614b",
"assets/packages/pay_android/assets/ca/book_with.svg": "3b14295758a4242d5c298c6cf97061a0",
"assets/packages/pay_android/assets/ca/buy_with.svg": "99fef5027c4f2178c8807e2618252a38",
"assets/packages/pay_android/assets/ca/checkout_with.svg": "0208700e968fa9842d118a4cbf7cae83",
"assets/packages/pay_android/assets/ca/donate_with.svg": "f3df2bb3d2749d0c9739b2497168f00e",
"assets/packages/pay_android/assets/ca/order_with.svg": "a51dec487a696e1717bed6d91110d82b",
"assets/packages/pay_android/assets/ca/pay_with.svg": "0f6fbb7dbe57f8743244b6facc9b2f2e",
"assets/packages/pay_android/assets/ca/subscribe_with.svg": "42a8215967dd4e3135ea5f45ad5b5409",
"assets/packages/pay_android/assets/cs/add_to.svg": "6d81b51062de8f50a78a894dd0a1f615",
"assets/packages/pay_android/assets/cs/book_with.svg": "7a4623865e0833b7d7946cd367d9bdb9",
"assets/packages/pay_android/assets/cs/buy_with.svg": "8620a6648b29a9fa58cc3cc0cbdee343",
"assets/packages/pay_android/assets/cs/checkout_with.svg": "80db31e271199b3fe8e3c8ecda21bd93",
"assets/packages/pay_android/assets/cs/donate_with.svg": "1f6536a413fc8b2688938f4b7c62f6c2",
"assets/packages/pay_android/assets/cs/order_with.svg": "bb08acff12ddd7ddac7871ca025b2431",
"assets/packages/pay_android/assets/cs/pay_with.svg": "9de2c26db512d92786ce3444df48bba1",
"assets/packages/pay_android/assets/cs/subscribe_with.svg": "fc0fe63fe043594f83dfc926dad10d03",
"assets/packages/pay_android/assets/da/add_to.svg": "d92a6bc7db33fda96c29fda5ba616a83",
"assets/packages/pay_android/assets/da/book_with.svg": "ee368d45b04e4c6ebf678f86bc62b7bb",
"assets/packages/pay_android/assets/da/buy_with.svg": "785e848cf8c9c762d085aa871d8d7410",
"assets/packages/pay_android/assets/da/checkout_with.svg": "d9f8ab3a339a1ad79b51d63e3130567b",
"assets/packages/pay_android/assets/da/donate_with.svg": "cf378b633e41e235b1350055cc97eeda",
"assets/packages/pay_android/assets/da/order_with.svg": "21e745b5861635499942889d99cdeffa",
"assets/packages/pay_android/assets/da/pay_with.svg": "dcab745dfb348a6270259cb5915153b5",
"assets/packages/pay_android/assets/da/subscribe_with.svg": "5047cf4f6315ff4e10a5947adf94efb0",
"assets/packages/pay_android/assets/de/add_to.svg": "f8a091aa3526391479087368eff94059",
"assets/packages/pay_android/assets/de/book_with.svg": "c50d34aabdf5f8614e0fbae3596d9ac2",
"assets/packages/pay_android/assets/de/buy_with.svg": "f754c418b05447dc0df319af21deffb2",
"assets/packages/pay_android/assets/de/checkout_with.svg": "8d6a7a750f7ba2aa300b90767dd07eb8",
"assets/packages/pay_android/assets/de/donate_with.svg": "4914084db3ff67c67193771f67e55444",
"assets/packages/pay_android/assets/de/order_with.svg": "d1dc943018db9f27399f1ebd4ca447b8",
"assets/packages/pay_android/assets/de/pay_with.svg": "b2225cf95901601945b40f99b4f7ff43",
"assets/packages/pay_android/assets/de/subscribe_with.svg": "17564aaa647332fba304d2d8ef62bb1b",
"assets/packages/pay_android/assets/el/add_to.svg": "e7943d08bb521077313bb7333c8ee87f",
"assets/packages/pay_android/assets/el/book_with.svg": "232425855bbbec477ac75fc6201eb658",
"assets/packages/pay_android/assets/el/buy_with.svg": "c572bb24c6f8fd7b407e828fe765bcd1",
"assets/packages/pay_android/assets/el/checkout_with.svg": "ff4d7e33f2fb9d45cd81b477982086d2",
"assets/packages/pay_android/assets/el/donate_with.svg": "db2d3ecc06967c60aa1494065ba6b112",
"assets/packages/pay_android/assets/el/order_with.svg": "3d3d3b64d4ccb81c49140382562b890a",
"assets/packages/pay_android/assets/el/pay_with.svg": "b46ee5b6236b73184cc752c91877acd6",
"assets/packages/pay_android/assets/el/subscribe_with.svg": "3892ae846e04df415254e02643b76525",
"assets/packages/pay_android/assets/en/add_to.svg": "c1bc5877a9e2886311b0bbe2a78cb1df",
"assets/packages/pay_android/assets/en/book_with.svg": "f1d051fd124907c5925f690313642100",
"assets/packages/pay_android/assets/en/buy_with.svg": "746e508afbe124ecee51e6805705d840",
"assets/packages/pay_android/assets/en/checkout_with.svg": "48303924df98f31d6e74b192b659ed2b",
"assets/packages/pay_android/assets/en/donate_with.svg": "ac7e1e899237d80f3de63c037f8b1e3e",
"assets/packages/pay_android/assets/en/order_with.svg": "d61e5e067227ce9a19eecb48c276d0a0",
"assets/packages/pay_android/assets/en/pay_with.svg": "9ec84a697747c32353f4d4a47a4f65fe",
"assets/packages/pay_android/assets/en/subscribe_with.svg": "13338a44a4414b97b68c513ab5ef6ffc",
"assets/packages/pay_android/assets/es/add_to.svg": "5e1355ae1b7659728c9ef75ce493d9e9",
"assets/packages/pay_android/assets/es/book_with.svg": "34db8f394f368a8e03ed0abd7d69fcec",
"assets/packages/pay_android/assets/es/buy_with.svg": "0448cda0cbfd85a1273194152012b774",
"assets/packages/pay_android/assets/es/checkout_with.svg": "1e235642b81d8b6ae92eecd688eac24c",
"assets/packages/pay_android/assets/es/donate_with.svg": "b054132090848644db1dc7078cd9a8c5",
"assets/packages/pay_android/assets/es/order_with.svg": "f212e0fafa51de5aaa362e66c476d947",
"assets/packages/pay_android/assets/es/pay_with.svg": "9921e330c6a6bfdee41a0f64d9d6998f",
"assets/packages/pay_android/assets/es/subscribe_with.svg": "ca7000156d48017c3bc6ecc8cda2bb97",
"assets/packages/pay_android/assets/et/add_to.svg": "b88ca15b4e6722d753840566d441c33e",
"assets/packages/pay_android/assets/et/book_with.svg": "049ed3012d315deadbe05d3eb58772a3",
"assets/packages/pay_android/assets/et/buy_with.svg": "8a9dca34ca0aedaed2a27ca4fca20bf9",
"assets/packages/pay_android/assets/et/checkout_with.svg": "22022a77107fa184c7ed2c70d0258665",
"assets/packages/pay_android/assets/et/donate_with.svg": "761284824f888f7bf5c5d4ca5a38ff95",
"assets/packages/pay_android/assets/et/order_with.svg": "d4243c1f7258d18b989d0be86c7df8b6",
"assets/packages/pay_android/assets/et/pay_with.svg": "c770b65139ed858e0101ba234e5e52d0",
"assets/packages/pay_android/assets/et/subscribe_with.svg": "38898d3970fb21a449381d9a7874877b",
"assets/packages/pay_android/assets/fi/add_to.svg": "27475a2afa900c8c213cee14b031ac45",
"assets/packages/pay_android/assets/fi/book_with.svg": "062bc8a8698494962ad6f80be0f72064",
"assets/packages/pay_android/assets/fi/buy_with.svg": "dbffd9f6838c0c7015f56b4ca6e2973d",
"assets/packages/pay_android/assets/fi/checkout_with.svg": "f1053427d6a1ed38c82165da295ae55d",
"assets/packages/pay_android/assets/fi/donate_with.svg": "51ecef133092b7f3ec375fecd6978c9d",
"assets/packages/pay_android/assets/fi/order_with.svg": "748d6674d9441d8ac19ccab303ec7abe",
"assets/packages/pay_android/assets/fi/pay_with.svg": "403b06e4c62fa40adab9a6f73b981969",
"assets/packages/pay_android/assets/fi/subscribe_with.svg": "506797abab6aede6f294170c1466dedd",
"assets/packages/pay_android/assets/fr/add_to.svg": "bb8e7485548aa8151f77ef0575106c44",
"assets/packages/pay_android/assets/fr/book_with.svg": "43339eec255db0b9717f9db53821c5af",
"assets/packages/pay_android/assets/fr/buy_with.svg": "7c13503ee92f1b65172b25339f5f0e1f",
"assets/packages/pay_android/assets/fr/checkout_with.svg": "ea2a1cfff17a42cc88911e8cda90f7df",
"assets/packages/pay_android/assets/fr/donate_with.svg": "07900374e3368d6f20546626f70aa82b",
"assets/packages/pay_android/assets/fr/order_with.svg": "22309a4f9eeb40274d56918e1ed7c23a",
"assets/packages/pay_android/assets/fr/pay_with.svg": "28450f3a76f521389ab858da00ab5b77",
"assets/packages/pay_android/assets/fr/subscribe_with.svg": "4f27ea754516e1604b956e71a2cfb95a",
"assets/packages/pay_android/assets/gpay_logo.svg": "3564204149c26f43d43cb236d4ff97a3",
"assets/packages/pay_android/assets/hr/add_to.svg": "da2abdcd0e4e56e9430bfeb6734443e1",
"assets/packages/pay_android/assets/hr/book_with.svg": "1654f1c7b29f575fd8746c593b11f2b0",
"assets/packages/pay_android/assets/hr/buy_with.svg": "159492769a625370e20245cae84d2b0f",
"assets/packages/pay_android/assets/hr/checkout_with.svg": "e3e05f46435cccc7675b7639a02e051a",
"assets/packages/pay_android/assets/hr/donate_with.svg": "1f3ee9c7f4310da39c6caa910dbfc86e",
"assets/packages/pay_android/assets/hr/order_with.svg": "e8da0122c88bcf2e8976f73e8ad51e53",
"assets/packages/pay_android/assets/hr/pay_with.svg": "2d73f342e8c91370c1128ebc51aa0a16",
"assets/packages/pay_android/assets/hr/subscribe_with.svg": "ff158be92c02c121f7467c6edcf3cf81",
"assets/packages/pay_android/assets/id/add_to.svg": "2869480691c5825d68111e6247e4e403",
"assets/packages/pay_android/assets/id/book_with.svg": "ad720d063a1c28c182d405aba95e018d",
"assets/packages/pay_android/assets/id/buy_with.svg": "a6ca8e78f15523f0b879b5fd8acc2281",
"assets/packages/pay_android/assets/id/checkout_with.svg": "7f8ae4686a866886f91048d0c15607c5",
"assets/packages/pay_android/assets/id/donate_with.svg": "65ebe635f7ee6e5926153e199fc52e1b",
"assets/packages/pay_android/assets/id/order_with.svg": "1b751923e4feb8694879ebe44bd1c2a1",
"assets/packages/pay_android/assets/id/pay_with.svg": "b13a28beee4ab06f6b837ff53d485c3e",
"assets/packages/pay_android/assets/id/subscribe_with.svg": "5dc280aac3d0c98f537055f47eed979a",
"assets/packages/pay_android/assets/it/add_to.svg": "5492101c855444bad5c566051da99a51",
"assets/packages/pay_android/assets/it/book_with.svg": "1a26e5ccf20ca263391873a3a4e3364e",
"assets/packages/pay_android/assets/it/buy_with.svg": "0a1c6a223718b57693f5180f49e4069c",
"assets/packages/pay_android/assets/it/checkout_with.svg": "2440a69133831cd23bb33d529a4e67b1",
"assets/packages/pay_android/assets/it/donate_with.svg": "23d3b8d82dbf9756394ca2308e1c8119",
"assets/packages/pay_android/assets/it/order_with.svg": "3b21e5135549ffa89b0891d331339e0a",
"assets/packages/pay_android/assets/it/pay_with.svg": "367408b9d6b9f43168e84ee5e21753e7",
"assets/packages/pay_android/assets/it/subscribe_with.svg": "03fa498042e0d13949373b545b6c1271",
"assets/packages/pay_android/assets/ja/add_to.svg": "42ad478d343da3aca3226ddbcc1bbe96",
"assets/packages/pay_android/assets/ja/book_with.svg": "643a14c418f3e061d86038d28b473d07",
"assets/packages/pay_android/assets/ja/buy_with.svg": "b460024b19fd6c17cee1677dabe142a5",
"assets/packages/pay_android/assets/ja/checkout_with.svg": "ffa79096847796389212aec30b44d7ba",
"assets/packages/pay_android/assets/ja/donate_with.svg": "3050d160d31becee6cdd6e3397d722d7",
"assets/packages/pay_android/assets/ja/order_with.svg": "f62cb0a507f6fcdd44ff3862230eaf61",
"assets/packages/pay_android/assets/ja/pay_with.svg": "271c5a7adce4a6da1b10aab271180e33",
"assets/packages/pay_android/assets/ja/subscribe_with.svg": "faa9e34a03afc68145627a45757c0c51",
"assets/packages/pay_android/assets/ko/add_to.svg": "02994d33528d1b69af6eb866ee39ec76",
"assets/packages/pay_android/assets/ko/book_with.svg": "9cf579fa3892daf5bd1e651e7e8e07b1",
"assets/packages/pay_android/assets/ko/buy_with.svg": "6289d89e0d8a11b933f421ad48dd574f",
"assets/packages/pay_android/assets/ko/checkout_with.svg": "73219d3fa26f7e1d4fb9c62f2a86a47d",
"assets/packages/pay_android/assets/ko/donate_with.svg": "0ecf99c7cabf3d971092e2d26518d280",
"assets/packages/pay_android/assets/ko/order_with.svg": "6c0ceb1ae67bb1a486a1d9bee8b9844d",
"assets/packages/pay_android/assets/ko/pay_with.svg": "cf54a6042572e4b5232eea80ce93aa06",
"assets/packages/pay_android/assets/ko/subscribe_with.svg": "c92fbf545a01ff6182d6733097fd056b",
"assets/packages/pay_android/assets/ms/add_to.svg": "967674567e0a256ba609e85ac9efa415",
"assets/packages/pay_android/assets/ms/book_with.svg": "5976935ace72bcc9b898c47fbb3ab8b0",
"assets/packages/pay_android/assets/ms/buy_with.svg": "6ad18fe663279303a53da0bcb28c88ff",
"assets/packages/pay_android/assets/ms/checkout_with.svg": "65cf7be75645cc6ac90c9ee4cb40e4f3",
"assets/packages/pay_android/assets/ms/donate_with.svg": "79cea13f10775a1f47107fd0d1d77c0d",
"assets/packages/pay_android/assets/ms/order_with.svg": "732033acf5ea72bd8b8b939e7d92da7e",
"assets/packages/pay_android/assets/ms/pay_with.svg": "d87232bd00f4754d945776a1c11a9a83",
"assets/packages/pay_android/assets/ms/subscribe_with.svg": "fff5fd19393074960efdef781bc2f3ce",
"assets/packages/pay_android/assets/nl/add_to.svg": "12b15901165211e6faea8c59bedf46bc",
"assets/packages/pay_android/assets/nl/book_with.svg": "a7fdc9acb2e5d40386e359cd74bb476e",
"assets/packages/pay_android/assets/nl/buy_with.svg": "c9b427cbce42daacf7f014cfe6c9f4cd",
"assets/packages/pay_android/assets/nl/checkout_with.svg": "d8c455f43207bf5264ceb331520516c3",
"assets/packages/pay_android/assets/nl/donate_with.svg": "72b927ee6f58784cfc2b6cea1517b234",
"assets/packages/pay_android/assets/nl/order_with.svg": "bb0a74363748fb38c212c7d9bb00c393",
"assets/packages/pay_android/assets/nl/pay_with.svg": "bbd9854482ed17fb476fe6181cebdee0",
"assets/packages/pay_android/assets/nl/subscribe_with.svg": "81960c4729df02d9b4ef626515ae7ecc",
"assets/packages/pay_android/assets/no/add_to.svg": "63eea58c795662bd6a6613bcb7e7a0b2",
"assets/packages/pay_android/assets/no/book_with.svg": "6237f51d85d10760e6ca7a4ea2d90400",
"assets/packages/pay_android/assets/no/buy_with.svg": "6d85d37387e56f1dd7c7e37f9ae29a88",
"assets/packages/pay_android/assets/no/checkout_with.svg": "dccdc27802c8e214a65b7b1e02838ede",
"assets/packages/pay_android/assets/no/donate_with.svg": "6a7a6ab52b16d8091f709b47e1f667d1",
"assets/packages/pay_android/assets/no/order_with.svg": "e687d46a19efbd7c6f9e02495663d908",
"assets/packages/pay_android/assets/no/pay_with.svg": "48f54a7c71e8a9b1d2bcf853c0254b8c",
"assets/packages/pay_android/assets/no/subscribe_with.svg": "81caffa3709ecb2e73cb74439079331d",
"assets/packages/pay_android/assets/pl/add_to.svg": "a9bdfbc147a9036ca9c2e0f2a5e44054",
"assets/packages/pay_android/assets/pl/book_with.svg": "23b2f875070896871c9962bee6cec0da",
"assets/packages/pay_android/assets/pl/buy_with.svg": "98f1f1c19592a0f03bef3323a96f6536",
"assets/packages/pay_android/assets/pl/checkout_with.svg": "5375607852a44e0bcf9dd03c1566cf6f",
"assets/packages/pay_android/assets/pl/donate_with.svg": "c19b6c96de520b8d0ade219079ed074d",
"assets/packages/pay_android/assets/pl/order_with.svg": "22d53804e79ea15b494d000228ffb590",
"assets/packages/pay_android/assets/pl/pay_with.svg": "d900fccfc783241afd48264ba57663d5",
"assets/packages/pay_android/assets/pl/subscribe_with.svg": "4efdfc25f0b0a08f03d361378008d509",
"assets/packages/pay_android/assets/pt/add_to.svg": "c8065cd21e8bf7c57b08201b5195e03b",
"assets/packages/pay_android/assets/pt/book_with.svg": "ae15c095294c005c0cd3b129ceb3d983",
"assets/packages/pay_android/assets/pt/buy_with.svg": "471f610e7e2126e5f676f411f38ffa72",
"assets/packages/pay_android/assets/pt/checkout_with.svg": "6705f22ed640ae242d97b1eb2ca66576",
"assets/packages/pay_android/assets/pt/donate_with.svg": "6fe25733f5ace8d8692a6ef53ba8af3c",
"assets/packages/pay_android/assets/pt/order_with.svg": "b0487e040573c9bee4dc8a005b0dae33",
"assets/packages/pay_android/assets/pt/pay_with.svg": "a55736ba5eb3056cb6bfbfedd93e3ecc",
"assets/packages/pay_android/assets/pt/subscribe_with.svg": "7623533120b9421ded9bb33b824f5bc8",
"assets/packages/pay_android/assets/ru/add_to.svg": "f60d842274a4c1e031f138a9df9ba6bc",
"assets/packages/pay_android/assets/ru/book_with.svg": "97a21c6530057a45d4eaf801219b7031",
"assets/packages/pay_android/assets/ru/buy_with.svg": "c37576af5a19737790bc312bd2a96bee",
"assets/packages/pay_android/assets/ru/checkout_with.svg": "8b0b720f11b553f67994743dfd0c037e",
"assets/packages/pay_android/assets/ru/donate_with.svg": "2e5a2d0b92282c39d629e4f2cd80976c",
"assets/packages/pay_android/assets/ru/order_with.svg": "fbe5b45a2c3582746032ad38df0cfca1",
"assets/packages/pay_android/assets/ru/pay_with.svg": "2740ef0a026e9121a71e8955c5d916b2",
"assets/packages/pay_android/assets/ru/subscribe_with.svg": "56e37dc3ff3a80ed7e39f5aa91df4c29",
"assets/packages/pay_android/assets/sk/add_to.svg": "00c04b0acc20a448fa6dfee0b966545c",
"assets/packages/pay_android/assets/sk/book_with.svg": "c0b8d28152bbe05663888c246af999a6",
"assets/packages/pay_android/assets/sk/buy_with.svg": "e92b318a6e6ec8213d60d19692e2dd53",
"assets/packages/pay_android/assets/sk/checkout_with.svg": "159ea444626e2b950cc69cf54c850808",
"assets/packages/pay_android/assets/sk/donate_with.svg": "f6df0117e4b724d292556b4e6ebb216b",
"assets/packages/pay_android/assets/sk/order_with.svg": "7c0210ac18b4ffe5702b6467058679bd",
"assets/packages/pay_android/assets/sk/pay_with.svg": "0b01f6484ed710b41b56155f2078081e",
"assets/packages/pay_android/assets/sk/subscribe_with.svg": "7cf1b3d1ef625f83e7fd0079e4bdc303",
"assets/packages/pay_android/assets/sl/add_to.svg": "1a1b772b764e381b4205c78d59b61e7a",
"assets/packages/pay_android/assets/sl/book_with.svg": "c3b7b177b968ce9e2777295d31765ed0",
"assets/packages/pay_android/assets/sl/buy_with.svg": "0d329d0d3a218f0622d2a1ca9c1a9684",
"assets/packages/pay_android/assets/sl/checkout_with.svg": "72e752b5950544e1090850686c5b6de9",
"assets/packages/pay_android/assets/sl/donate_with.svg": "8fe271e938ad174fde2110ac55ed3d9f",
"assets/packages/pay_android/assets/sl/order_with.svg": "1654a93363261f2f5d8b91baa2072be9",
"assets/packages/pay_android/assets/sl/pay_with.svg": "39aa5ba8c0602e5ca1f4053b0f3f973b",
"assets/packages/pay_android/assets/sl/subscribe_with.svg": "cec97c1774af765e84a14b70ad360214",
"assets/packages/pay_android/assets/sr/add_to.svg": "339ac278a3ca72a11035bf600c081655",
"assets/packages/pay_android/assets/sr/book_with.svg": "1ebf2b71a0938eec49672ce0d3a7e1a9",
"assets/packages/pay_android/assets/sr/buy_with.svg": "f5d8a9607826c3d061ee3a49aa8cc7a8",
"assets/packages/pay_android/assets/sr/checkout_with.svg": "3725fb1399a3b4c8db5a2c372778b289",
"assets/packages/pay_android/assets/sr/donate_with.svg": "12d74be686c4eb1d10fbbd9ada5ab5a3",
"assets/packages/pay_android/assets/sr/order_with.svg": "ff8af34524e7704744bf1b5abbda4b9e",
"assets/packages/pay_android/assets/sr/pay_with.svg": "5748ab84509f6ce61b57a5f922de078e",
"assets/packages/pay_android/assets/sr/subscribe_with.svg": "62445480dc5ddd0ef26d2a48ffe1d2a2",
"assets/packages/pay_android/assets/sv/add_to.svg": "0fa576dfcac72a70fead63c960b066cf",
"assets/packages/pay_android/assets/sv/book_with.svg": "1ff19d0dcbacb1ef977f18eded0931f6",
"assets/packages/pay_android/assets/sv/buy_with.svg": "36e951a4737af9b7541342620a6e0f03",
"assets/packages/pay_android/assets/sv/checkout_with.svg": "8c0811d30b32d77e85752612e16347a9",
"assets/packages/pay_android/assets/sv/donate_with.svg": "e0888ff4e14a434daf98167d9f11c849",
"assets/packages/pay_android/assets/sv/order_with.svg": "13e3a0b6444a9765762d1cdea97158bf",
"assets/packages/pay_android/assets/sv/pay_with.svg": "611dc13ea36a14458c0a103ebf344c5a",
"assets/packages/pay_android/assets/sv/subscribe_with.svg": "db6ba6d478437b7b1379c854338fc2fd",
"assets/packages/pay_android/assets/th/add_to.svg": "b741a2d0656aaaefc1cf4ea60bcdecf6",
"assets/packages/pay_android/assets/th/book_with.svg": "d1ea78f759c0730765b1566234e03ed5",
"assets/packages/pay_android/assets/th/buy_with.svg": "3837161aed04fdd24818337f4f568464",
"assets/packages/pay_android/assets/th/checkout_with.svg": "c0e9836a6073f2b8e8ef0ae790519102",
"assets/packages/pay_android/assets/th/donate_with.svg": "f690e4cfa2407e46c1100794a0379179",
"assets/packages/pay_android/assets/th/order_with.svg": "dcc18c36a5c21b3ce4e0dd8dc0b6490c",
"assets/packages/pay_android/assets/th/pay_with.svg": "9bebf557fd04d41d19d5bd3b11bf329e",
"assets/packages/pay_android/assets/th/subscribe_with.svg": "d995c84c7369f9617917f8b0dfde18cd",
"assets/packages/pay_android/assets/tr/add_to.svg": "c0626c594a4957f17213f34dcc7f9334",
"assets/packages/pay_android/assets/tr/book_with.svg": "c5e289ea0a8f031c63fb472254b09138",
"assets/packages/pay_android/assets/tr/buy_with.svg": "3b11a3fbfd947bad5801c806e33974ee",
"assets/packages/pay_android/assets/tr/checkout_with.svg": "a0795172799ae5ef54447e03e2ee0bbd",
"assets/packages/pay_android/assets/tr/donate_with.svg": "c64a19f7861bed2875ea0d0d9947f69d",
"assets/packages/pay_android/assets/tr/order_with.svg": "aa94f2a090070d84fee97aa1f56d63ce",
"assets/packages/pay_android/assets/tr/pay_with.svg": "740416884081b4de669c677f8176bc60",
"assets/packages/pay_android/assets/tr/subscribe_with.svg": "9806d0f37dd28211b575219569ec0267",
"assets/packages/pay_android/assets/uk/add_to.svg": "4fa73cb089fa5227926498f32b701665",
"assets/packages/pay_android/assets/uk/book_with.svg": "f42d7fe05b8641eb400b2d189e1268f7",
"assets/packages/pay_android/assets/uk/buy_with.svg": "ee21017c523db6ed41355a984ac2773d",
"assets/packages/pay_android/assets/uk/checkout_with.svg": "4295c540e4be0e1e88b134ce1c7ed28a",
"assets/packages/pay_android/assets/uk/donate_with.svg": "cf8511ce785f0699f8d270682c99e276",
"assets/packages/pay_android/assets/uk/order_with.svg": "c30bacc2e3f81b8d15e97df98269d6c8",
"assets/packages/pay_android/assets/uk/pay_with.svg": "673c44c6bfee363fd974e3d469dd765d",
"assets/packages/pay_android/assets/uk/subscribe_with.svg": "98ab77df273ccf318c099278e7ca767b",
"assets/packages/pay_android/assets/zh/add_to.svg": "7cd05c87ef08317720372ff96000fcaf",
"assets/packages/pay_android/assets/zh/book_with.svg": "3890280055e8b622a6cb73cb2aa6e111",
"assets/packages/pay_android/assets/zh/buy_with.svg": "4e9f08fd3c90121c12a711f45cdfbcc8",
"assets/packages/pay_android/assets/zh/checkout_with.svg": "12e7529fb599e632fe130a6cc1aafbe3",
"assets/packages/pay_android/assets/zh/donate_with.svg": "3207f3b513ba810952d797e6fd2faf77",
"assets/packages/pay_android/assets/zh/order_with.svg": "1e4fb2c463f50e6d9b07deff3eff47bb",
"assets/packages/pay_android/assets/zh/pay_with.svg": "1c8f6a08eeff10a93f9fe78af091b6fb",
"assets/packages/pay_android/assets/zh/subscribe_with.svg": "dc73191614afeaf76abf2be904821744",
"assets/packages/pay_platform_interface/pubspec.yaml": "ce62e8952c066e8507f555f896f28a0f",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "90667b12ad361a836e233726420e8ecb",
"/": "90667b12ad361a836e233726420e8ecb",
"main.dart.js": "c19cb9d8bf7c5b19530e19c056c14bf8",
"manifest.json": "89b3e2664ac5237c47a806367d15e677",
"splash/img/dark-1x.png": "7d168464345e2430da6ebe4d59d5d9b2",
"splash/img/dark-2x.png": "38d70b9ad1764bd72a9695ce97d2a0db",
"splash/img/dark-3x.png": "f3440e383552f3db222e7befc6f3ac6a",
"splash/img/dark-4x.png": "6fdadfd33f2c578d87f326db224e2d64",
"splash/img/light-1x.png": "7d168464345e2430da6ebe4d59d5d9b2",
"splash/img/light-2x.png": "38d70b9ad1764bd72a9695ce97d2a0db",
"splash/img/light-3x.png": "f3440e383552f3db222e7befc6f3ac6a",
"splash/img/light-4x.png": "6fdadfd33f2c578d87f326db224e2d64",
"splash/img/light-background.png": "0e364f850e163fd9ddfe02f746d9720a",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "c9212ca373399b78bbb21570949964c0",
"version.json": "f400c6e2829e5ad957fcf555e0c77281"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
