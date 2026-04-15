// Songs of Praise — Complete Song Database v2
// All 4 languages with lyrics embedded for offline use

const SONGS = [
// ─── ODIA SONGS ───
{id:'o001',lang:'odia',title:'A pruthibi heu swarga samana',url:'https://techpassions.wixsite.com/lyrics/ODIA/a-pruthibi-heu-swarga-samana',lyrics:''},
{id:'o002',lang:'odia',title:'A pruthibi janu ame jisunkoro',url:'https://techpassions.wixsite.com/lyrics/ODIA/a-pruthibi-janu-ame-jisunkoro',lyrics:''},
{id:'o003',lang:'odia',title:'Aaradhana hum karte hai',url:'https://techpassions.wixsite.com/lyrics/ODIA/aaradhana-hum-karte-hai',lyrics:''},
{id:'o004',lang:'odia',title:'Aei dharapore tumo gito subhe',url:'https://techpassions.wixsite.com/lyrics/ODIA/aei-dharapore-tumo-gito-subhe',lyrics:''},
{id:'o005',lang:'odia',title:'Aha kete karuna',url:'https://techpassions.wixsite.com/lyrics/ODIA/aha-kete-karuna',lyrics:''},
{id:'o006',lang:'odia',title:'Aha ki ananda uchuli uthuchi',url:'https://techpassions.wixsite.com/lyrics/ODIA/aha-ki-ananda-uchuli-uthuchi',lyrics:''},
{id:'o007',lang:'odia',title:'Ahe Biswa Prano',url:'https://techpassions.wixsite.com/lyrics/ODIA/ahe-biswa-prano',lyrics:''},
{id:'o008',lang:'odia',title:'Ahe ananto asimo',url:'https://techpassions.wixsite.com/lyrics/ODIA/ahe-ananto-asimo',lyrics:''},
{id:'o009',lang:'odia',title:'Ahe asa ahe asa',url:'https://techpassions.wixsite.com/lyrics/ODIA/ahe-asa-ahe-asa',lyrics:''},
{id:'o010',lang:'odia',title:'Ahe jisu dayalu prabhu',url:'https://techpassions.wixsite.com/lyrics/ODIA/ahe-jisu-dayalu-prabhu',lyrics:''},
{id:'o011',lang:'odia',title:'Aji jisunko namo gaore',url:'https://techpassions.wixsite.com/lyrics/ODIA/aji-jisunko-namo-gaore',lyrics:''},
{id:'o012',lang:'odia',title:'Aji pranami tumaku chalibi',url:'https://techpassions.wixsite.com/lyrics/ODIA/aji-pranami-tumaku-chalibi',lyrics:''},
{id:'o013',lang:'odia',title:'Akasha chanda tara',url:'https://techpassions.wixsite.com/lyrics/ODIA/akasha-chanda-tara',lyrics:''},
{id:'o014',lang:'odia',title:'Akashamandala parameshwaranka',url:'https://techpassions.wixsite.com/lyrics/ODIA/akashamandala-parameshwaranka',lyrics:''},
{id:'o015',lang:'odia',title:'Akhi age swapna ama',url:'https://techpassions.wixsite.com/lyrics/ODIA/akhi-age-swapna-ama',lyrics:''},
{id:'o016',lang:'odia',title:'Ame barttabaha shantira',url:'https://techpassions.wixsite.com/lyrics/ODIA/ame-barttabaha-shantira',lyrics:''},
{id:'o017',lang:'odia',title:'Ame bijayi heba',url:'https://techpassions.wixsite.com/lyrics/ODIA/ame-bijayi-heba',lyrics:''},
{id:'o018',lang:'odia',title:'Ame gai gaiba, ame nachi nachiba',url:'https://techpassions.wixsite.com/lyrics/ODIA/ame-gai-gaiba%2C-ame-nachi-nachiba',lyrics:''},
{id:'o019',lang:'odia',title:'Ame roktokrito tanko rokte dhouto',url:'https://techpassions.wixsite.com/lyrics/ODIA/ame-roktokrito-tanko-rokte-dhouto',lyrics:''},
{id:'o020',lang:'odia',title:'Anadi isworo dayaro sagaro',url:'https://techpassions.wixsite.com/lyrics/ODIA/anadi-isworo-dayaro-sagaro',lyrics:''},
{id:'o021',lang:'odia',title:'Ananta jibana pathe',url:'https://techpassions.wixsite.com/lyrics/ODIA/ananta-jibana-pathe',lyrics:''},
{id:'o022',lang:'odia',title:'Anao thore krusho upore',url:'https://techpassions.wixsite.com/lyrics/ODIA/anao-thore-krusho-upore',lyrics:''},
{id:'o023',lang:'odia',title:'Andhakara ghera dharare',url:'https://techpassions.wixsite.com/lyrics/ODIA/andhakara-ghera-dharare-',lyrics:''},
{id:'o024',lang:'odia',title:'Andhakara ghera moro e jibane',url:'https://techpassions.wixsite.com/lyrics/ODIA/andhakara-ghera-moro-e-jibane',lyrics:''},
{id:'o025',lang:'odia',title:'Anutapa nira nei',url:'https://techpassions.wixsite.com/lyrics/ODIA/anutapa-nira-nei',lyrics:''},
{id:'o026',lang:'odia',title:'Aradhana aradhana, stuti aradhana aradhana',url:'https://techpassions.wixsite.com/lyrics/ODIA/aradhana-aradhana%2C-stuti-aradhana-aradhana',lyrics:''},
{id:'o027',lang:'odia',title:'Archana archana archana',url:'https://techpassions.wixsite.com/lyrics/ODIA/archana-archana-archana',lyrics:''},
{id:'o028',lang:'odia',title:'Asa ananda hoi prabhu prasansa gai',url:'https://techpassions.wixsite.com/lyrics/ODIA/asa-ananda-hoi-prabhu-prasansa-gai-',lyrics:''},
{id:'o029',lang:'odia',title:'Asa bhaktagana hoi anandita',url:'https://techpassions.wixsite.com/lyrics/ODIA/asa-bhaktagana-hoi-anandita-(o-come-all-ye-faithful)',lyrics:''},
{id:'o030',lang:'odia',title:'Ashara suruja uinchi aji',url:'https://techpassions.wixsite.com/lyrics/ODIA/ashara-suruja-uinchi-aji',lyrics:''},
{id:'o031',lang:'odia',title:'Ashisa Karata tume hai prabhu',url:'https://techpassions.wixsite.com/lyrics/ODIA/ashisa-karata-tume-hai-prabhu',lyrics:''},
{id:'o032',lang:'odia',title:'Asima tuma prema',url:'https://techpassions.wixsite.com/lyrics/ODIA/asima-tuma-prema',lyrics:''},
{id:'o033',lang:'odia',title:'Atulo sei premoro jhoro',url:'https://techpassions.wixsite.com/lyrics/ODIA/atulo-sei-premoro-jhoro',lyrics:''},
{id:'o034',lang:'odia',title:'Au kichi prabhu chahen na jibane',url:'https://techpassions.wixsite.com/lyrics/ODIA/au-kichi-prabhu-chahen-na-jibane',lyrics:''},
{id:'o035',lang:'odia',title:'Au ratri nahi au klanti nahi',url:'https://techpassions.wixsite.com/lyrics/ODIA/au-ratri-nahi-au-klanti-nahi',lyrics:''},
{id:'o036',lang:'odia',title:'Bahigola lahudhara',url:'https://techpassions.wixsite.com/lyrics/ODIA/bahigola-lahudhara',lyrics:''},
{id:'o037',lang:'odia',title:'Bandana bandana sadakara bandana',url:'https://techpassions.wixsite.com/lyrics/ODIA/bandana-bandana-sadakara-bandana',lyrics:''},
{id:'o038',lang:'odia',title:'Bandana isasuta sada tuma',url:'https://techpassions.wixsite.com/lyrics/ODIA/bandana-isasuta-sada-tuma',lyrics:''},
{id:'o039',lang:'odia',title:'Basichi mu pada tole',url:'https://techpassions.wixsite.com/lyrics/ODIA/basichi-mu-pada-tole-',lyrics:''},
{id:'o040',lang:'odia',title:'Bhakati dia saradha dia',url:'https://techpassions.wixsite.com/lyrics/ODIA/bhakati-dia-saradha-dia',lyrics:''},
{id:'o041',lang:'odia',title:'Bhubasigono prabhunkoro stutikoro',url:'https://techpassions.wixsite.com/lyrics/ODIA/bhubasigono-prabhunkoro-stutikoro',lyrics:''},
{id:'o042',lang:'odia',title:'Bhuli nai bhulibini kebe',url:'https://techpassions.wixsite.com/lyrics/ODIA/bhuli-nai-bhulibini-kebe',lyrics:''},
{id:'o043',lang:'odia',title:'Bishwasi samaste, jayadhwani kari',url:'https://techpassions.wixsite.com/lyrics/ODIA/bishwasi-samaste%2C-jayadhwani-kari',lyrics:''},
{id:'o044',lang:'odia',title:'Biswasa dhala dhari a jagata pathore',url:'https://techpassions.wixsite.com/lyrics/ODIA/biswasa-dhala-dhari-a-jagata-pathore',lyrics:''},
{id:'o045',lang:'odia',title:'Biswasa jibana taranire',url:'https://techpassions.wixsite.com/lyrics/ODIA/biswasa-jibana-taranire',lyrics:''},
{id:'o046',lang:'odia',title:'Biswasi ta prati kede',url:'https://techpassions.wixsite.com/lyrics/ODIA/biswasi-ta-prati-kede',lyrics:''},
{id:'o047',lang:'odia',title:'Biswo bondoniyo jisu he',url:'https://techpassions.wixsite.com/lyrics/ODIA/biswo-bondoniyo-jisu-he',lyrics:''},
{id:'o048',lang:'odia',title:'Bodo sankotoro dino asibo',url:'https://techpassions.wixsite.com/lyrics/ODIA/bodo-sankotoro-dino-asibo',lyrics:''},
{id:'o049',lang:'odia',title:'Bondi bidha pade sastange',url:'https://techpassions.wixsite.com/lyrics/ODIA/bondi-bidha-pade-sastange',lyrics:''},
{id:'o050',lang:'odia',title:'Buji akhi jebe mu tumo dekha pae',url:'https://techpassions.wixsite.com/lyrics/ODIA/buji-akhi-jebe-mu-tumo-dekha-pae',lyrics:''},
{id:'o051',lang:'odia',title:'Chahunchi mo mana priya jisu nama',url:'https://techpassions.wixsite.com/lyrics/ODIA/chahunchi-mo-mana-priya-jisu-nama',lyrics:''},
{id:'o052',lang:'odia',title:'Chintaro bojho dia tankopore',url:'https://techpassions.wixsite.com/lyrics/ODIA/chintaro-bojho-dia-tankopore',lyrics:''},
{id:'o053',lang:'odia',title:'Dekhini se rupo kebe',url:'https://techpassions.wixsite.com/lyrics/ODIA/dekhini-se-rupo-kebe',lyrics:''},
{id:'o054',lang:'odia',title:'Dekho dekho asuachanti gaurobe',url:'https://techpassions.wixsite.com/lyrics/ODIA/dekho-dekho-asuachanti-gaurobe',lyrics:''},
{id:'o055',lang:'odia',title:'Dhanya Prabhu dhanya jisu dhanya',url:'https://techpassions.wixsite.com/lyrics/ODIA/dhanya-prabhu-dhanya-jisu-dhanya',lyrics:''},
{id:'o056',lang:'odia',title:'Dhanya hela aei jibono',url:'https://techpassions.wixsite.com/lyrics/ODIA/dhanya-hela-aei-jibono',lyrics:''},
{id:'o057',lang:'odia',title:'Dhanya jisu dhanya jisu',url:'https://techpassions.wixsite.com/lyrics/ODIA/dhanya-jisu-dhanya-jisu',ytUrl:'https://www.youtube.com/watch?v=YvEmMv5MqD4',lyrics:`ଧନ୍ୟ ଯୀଶୁ ଧନ୍ୟ ଯୀଶୁ
ଧନ୍ୟ ଯୀଶୁ ପ୍ରିୟ ନାମ ॥

ଯୀଶୁ ସର୍ବ ଗୁଣଧାମ
କେ କରିପାରେ ବର୍ଣ୍ଣନ
ତ୍ରୀଭୁବନେ ତାଙ୍କ ସମ
କିସ ଅଛି ତୁଳନା ॥

ଯୀଶୁ ସତ୍ୟ ପ୍ରେମରତ୍ନ
ସେହି ଦେଲେ ତନୁପ୍ରାଣ
ମନଧର କରିଯତ୍ନ
ତାଙ୍କ ପାଦେ ଶରଣ ॥

ଯୀଶୁ ଛନ୍ତି ସ୍ଵର୍ଗସେତୁ
କୋଣ ପଥର ପ୍ରମାଣ
ଦୀନହୀନ ପାପୀ ହେତୁ
ପିତୃଦତ୍ତ ପରିତ୍ରାଣ ॥

ଯୀଶୁ ପ୍ରାଣଦାୟୀ ବୃକ୍ଷ
ତହୁଁ ନିତ୍ୟ ତୋଳଫଳ
ତାଙ୍କ ଛାୟ। ତଳେ ବସ
ସେ'ତ ଅତି ରମ୍ୟସ୍ଥଳ ॥

ଯୀଶୁ ଅମୃତ ଅର୍ଣ୍ଣବ
ଅନୁକ୍ଷଣ କର ପାନ
ସର୍ବ ପୁଷ୍ପର ସୌରଭ
ତହୁଁ ସଦା କର ଘ୍ରାଣ ॥

—

(Transliteration)

0) Dhanya jisu dhanya jisu
dhanya jisu priya nama.

1) Jisu sarba gunadhama
ke karipare barnnana
tribhubane tanka sama
kisa achi tulana.

2) Jisu satya premaratna
sehi dele tanuprana
manadhara karijatna
tanka pade sarana.

3) Jisu chanti svargasetu
kona pathara pramana
dinahina papi hetu
pitrudatta paritrana.

4) Jisu pranadayi brukhya
tahu nitya tolaphala
tanka chaya tale basa
seto ati ramyasthala.

5) Jisu amruta arnanaba
anukhyana kara pano
sarba puspara saurabha
tahu sada kara ghrana.`},
{id:'o058',lang:'odia',title:'Dhanya! dhanya! jisu muktidata ama',url:'https://techpassions.wixsite.com/lyrics/ODIA/dhanya!-dhanya!-jisu-muktidata-ama',lyrics:''},
{id:'o059',lang:'odia',title:'Dhanyabada ghena prabhu',url:'https://techpassions.wixsite.com/lyrics/ODIA/dhanyabada-ghena-prabhu',lyrics:''},
{id:'o060',lang:'odia',title:'Dhanyabada gheno prabhu, bhanga mo antaroro',url:'https://techpassions.wixsite.com/lyrics/ODIA/dhanyabada-gheno-prabhu%2C-bhanga-mo-antaroro',lyrics:''},
{id:'o061',lang:'odia',title:'Dhoidia prabhu mora',url:'https://techpassions.wixsite.com/lyrics/ODIA/dhoidia-prabhu-mora',lyrics:''},
{id:'o062',lang:'odia',title:'Dhonyobado prosonsha tumoro',url:'https://techpassions.wixsite.com/lyrics/ODIA/dhonyobado-prosonsha-tumoro',lyrics:''},
{id:'o063',lang:'odia',title:'Gaiba jisunko namo',url:'https://techpassions.wixsite.com/lyrics/ODIA/gaiba-jisunko-namo',lyrics:''},
{id:'o064',lang:'odia',title:'Gao jayagana kara jayagana',url:'https://techpassions.wixsite.com/lyrics/ODIA/gao-jayagana-kara-jayagana',lyrics:''},
{id:'o065',lang:'odia',title:'Gauraba prasansa sambhrama',url:'https://techpassions.wixsite.com/lyrics/ODIA/gauraba-prasansa-sambhrama',lyrics:''},
{id:'o066',lang:'odia',title:'Halleluah hosanna, halleluah hosanna',url:'https://techpassions.wixsite.com/lyrics/ODIA/halleluah-hosanna%2C-halleluah-hosanna',lyrics:''},
{id:'o067',lang:'odia',title:'Halliluya, halliluya, halliluya, bolare',url:'https://techpassions.wixsite.com/lyrics/ODIA/halliluya%2C-halliluya%2C-halliluya%2C-bolare',lyrics:''},
{id:'o068',lang:'odia',title:'He Prabhu Kemiti Banchibi',url:'https://techpassions.wixsite.com/lyrics/ODIA/he-prabhu-kemiti-banchibi',lyrics:''},
{id:'o069',lang:'odia',title:'He mohara mano, sada prabhunkara',url:'https://techpassions.wixsite.com/lyrics/ODIA/he-mohara-mano%2C-sada--prabhunkara',lyrics:''},
{id:'o070',lang:'odia',title:'He mora mana sada',url:'https://techpassions.wixsite.com/lyrics/ODIA/he-mora-mana-sada',lyrics:''},
{id:'o071',lang:'odia',title:'He sakala desa',url:'https://techpassions.wixsite.com/lyrics/ODIA/he-sakala-desa',lyrics:''},
{id:'o072',lang:'odia',title:'Hey Ishwara, Parameshwara, karuna kara',url:'https://techpassions.wixsite.com/lyrics/ODIA/hey-ishwara%2C-parameshwara%2C-karuna-kara',lyrics:''},
{id:'o073',lang:'odia',title:'Hosannah Hosannah Hallehuah Hosannah',url:'https://techpassions.wixsite.com/lyrics/ODIA/hosannah-hosannah-hallehuah-hosannah',lyrics:''},
{id:'o074',lang:'odia',title:'Iswaranko stuti',url:'https://techpassions.wixsite.com/lyrics/ODIA/iswaranko-stuti',lyrics:''},
{id:'o075',lang:'odia',title:'Isworo moro ashroyo',url:'https://techpassions.wixsite.com/lyrics/ODIA/isworo-moro-ashroyo',lyrics:''},
{id:'o076',lang:'odia',title:'Isworo premo chhadi parena',url:'https://techpassions.wixsite.com/lyrics/ODIA/isworo-premo-chhadi-parena',lyrics:''},
{id:'o077',lang:'odia',title:'Jaga jaga kara tanka prasansa gana',url:'https://techpassions.wixsite.com/lyrics/ODIA/jaga-jaga-kara-tanka-prasansa-gana',lyrics:''},
{id:'o078',lang:'odia',title:'Jagata tannibasi sadaprabhunkara',url:'https://techpassions.wixsite.com/lyrics/ODIA/jagata-tannibasi-sadaprabhunkara',lyrics:''},
{id:'o079',lang:'odia',title:'Jaya jisu moro prabhu',url:'https://techpassions.wixsite.com/lyrics/ODIA/jaya-jisu-moro-prabhu',lyrics:''},
{id:'o080',lang:'odia',title:'Jeun dino dekhili se chabi',url:'https://techpassions.wixsite.com/lyrics/ODIA/jeun-dino-dekhili-se-chabi',lyrics:''},
{id:'o081',lang:'odia',title:'Jhulilo mo pain krushore',url:'https://techpassions.wixsite.com/lyrics/ODIA/jhulilo-mo-pain-krushore',lyrics:''},
{id:'o082',lang:'odia',title:'Jia sarbo paristankoro',url:'https://techpassions.wixsite.com/lyrics/ODIA/jia-sarbo-paristankoro',lyrics:''},
{id:'o083',lang:'odia',title:'Jishu amo parama pita',url:'https://techpassions.wixsite.com/lyrics/ODIA/jishu-amo-parama-pita',lyrics:''},
{id:'o084',lang:'odia',title:'Jishu hin mora ashraya',url:'https://techpassions.wixsite.com/lyrics/ODIA/jishu-hin-mora-ashraya',lyrics:''},
{id:'o085',lang:'odia',title:'Jishu nama madhu nama',url:'https://techpassions.wixsite.com/lyrics/ODIA/jishu-nama-madhu-nama',lyrics:''},
{id:'o086',lang:'odia',title:'Jisu he tumari pade pranam',url:'https://techpassions.wixsite.com/lyrics/ODIA/jisu-he-tumari-pade-pranam',lyrics:''},
{id:'o087',lang:'odia',title:'Jisu karanti rajya ki gauraba re',url:'https://techpassions.wixsite.com/lyrics/ODIA/jisu-karanti-rajya-ki-gauraba-re',lyrics:''},
{id:'o088',lang:'odia',title:'Jisu moro tumoro se bharo',url:'https://techpassions.wixsite.com/lyrics/ODIA/jisu-moro-tumoro-se-bharo',lyrics:''},
{id:'o089',lang:'odia',title:'Jisu tume moro asa',url:'https://techpassions.wixsite.com/lyrics/ODIA/jisu-tume-moro-asa',lyrics:''},
{id:'o090',lang:'odia',title:'Jisu tumo namo dhyano kede',url:'https://techpassions.wixsite.com/lyrics/ODIA/jisu-tumo-namo-dhyano-kede',lyrics:''},
{id:'o091',lang:'odia',title:'Jisuhe mo prabhu',url:'https://techpassions.wixsite.com/lyrics/ODIA/jisuhe-mo-prabhu',lyrics:''},
{id:'o092',lang:'odia',title:'Jisunko namo dukho kale',url:'https://techpassions.wixsite.com/lyrics/ODIA/jisunko-namo-dukho-kale',lyrics:''},
{id:'o093',lang:'odia',title:'Kalbori re dhanya kalborire',url:'https://techpassions.wixsite.com/lyrics/ODIA/kalbori-re-dhanya-kalborire',lyrics:''},
{id:'o094',lang:'odia',title:'Kalvari se ta kalvari ru dhara bahijaye',url:'https://techpassions.wixsite.com/lyrics/ODIA/kalvari-se-ta-kalvari-ru-dhara-bahijaye',lyrics:''},
{id:'o095',lang:'odia',title:'Kara jisunka name jayagana',url:'https://techpassions.wixsite.com/lyrics/ODIA/kara-jisunka-name-jayagana',lyrics:''},
{id:'o096',lang:'odia',title:'Kara stuti prasansa gana',url:'https://techpassions.wixsite.com/lyrics/ODIA/kara-stuti-prasansa-gana',lyrics:''},
{id:'o097',lang:'odia',title:'Kara tanka dhanyabada',url:'https://techpassions.wixsite.com/lyrics/ODIA/kara-tanka-dhanyabada',lyrics:''},
{id:'o098',lang:'odia',title:'Karo ahe naragana',url:'https://techpassions.wixsite.com/lyrics/ODIA/karo-ahe-naragana',lyrics:''},
{id:'o099',lang:'odia',title:'Kede dayamaya prabhu tume',url:'https://techpassions.wixsite.com/lyrics/ODIA/kede-dayamaya-prabhu-tume',lyrics:''},
{id:'o100',lang:'odia',title:'Kede utamo Sri jisu moro',url:'https://techpassions.wixsite.com/lyrics/ODIA/kede-utamo-sri-jisu-moro',lyrics:''},
{id:'o101',lang:'odia',title:'Kete bholo moro prabhu jisu he',url:'https://techpassions.wixsite.com/lyrics/ODIA/kete-bholo-moro-prabhu-jisu-he',lyrics:''},
{id:'o102',lang:'odia',title:'Kete je uchha kede gabhiro',url:'https://techpassions.wixsite.com/lyrics/ODIA/kete-je-uchha-kede-gabhiro',lyrics:''},
{id:'o103',lang:'odia',title:'Ki dukho jantrana',url:'https://techpassions.wixsite.com/lyrics/ODIA/ki-dukho-jantrana',lyrics:''},
{id:'o104',lang:'odia',title:'Ki gobhiro Jisu premo',url:'https://techpassions.wixsite.com/lyrics/ODIA/ki-gobhiro-jisu-premo',lyrics:''},
{id:'o105',lang:'odia',title:'Ki misto se jisu namo',url:'https://techpassions.wixsite.com/lyrics/ODIA/ki-misto-se-jisu-namo',lyrics:''},
{id:'o106',lang:'odia',title:'Koru prosangsa jisunkaro name',url:'https://techpassions.wixsite.com/lyrics/ODIA/koru-prosangsa-jisunkaro-name',lyrics:''},
{id:'o107',lang:'odia',title:'Krupa nirjhoro tharu boro kanyanku',url:'https://techpassions.wixsite.com/lyrics/ODIA/krupa-nirjhoro-tharu-boro-kanyanku',lyrics:''},
{id:'o108',lang:'odia',title:'Krutagya re bhakti bhore',url:'https://techpassions.wixsite.com/lyrics/ODIA/krutagya-re-bhakti-bhore',lyrics:''},
{id:'o109',lang:'odia',title:'Kuho kalabari',url:'https://techpassions.wixsite.com/lyrics/ODIA/kuho-kalabari',lyrics:''},
{id:'o110',lang:'odia',title:'Madhura se jisu naama niti gauutha',url:'https://techpassions.wixsite.com/lyrics/ODIA/madhura-se-jisu-naama-niti-gauutha',lyrics:''},
{id:'o111',lang:'odia',title:'Mahima urdhwore mahima',url:'https://techpassions.wixsite.com/lyrics/ODIA/mahima-urdhwore-mahima',lyrics:''},
{id:'o112',lang:'odia',title:'Mahimamaya prabhu',url:'https://techpassions.wixsite.com/lyrics/ODIA/mahimamaya-prabhu',lyrics:''},
{id:'o113',lang:'odia',title:'Mana mora staba kara',url:'https://techpassions.wixsite.com/lyrics/ODIA/mana-mora-staba-kara',lyrics:''},
{id:'o114',lang:'odia',title:'Mana pari prabhu mana tia dia',url:'https://techpassions.wixsite.com/lyrics/ODIA/mana-pari-prabhu-mana-tia-dia',lyrics:''},
{id:'o115',lang:'odia',title:'Marano bijayi',url:'https://techpassions.wixsite.com/lyrics/ODIA/marano-bijayi',lyrics:''},
{id:'o116',lang:'odia',title:'Mo jisu rajana bina',url:'https://techpassions.wixsite.com/lyrics/ODIA/mo-jisu-rajana-bina',lyrics:''},
{id:'o117',lang:'odia',title:'Monostho karichi mo jisu sange',url:'https://techpassions.wixsite.com/lyrics/ODIA/monostho-karichi-mo-jisu-sange',lyrics:''},
{id:'o118',lang:'odia',title:'Mote bholo Lage jisu namo',url:'https://techpassions.wixsite.com/lyrics/ODIA/mote-bholo-lage-jisu-namo',lyrics:''},
{id:'o119',lang:'odia',title:'Mote khoji khoji jisu aile',url:'https://techpassions.wixsite.com/lyrics/ODIA/mote-khoji-khoji-jisu-aile',lyrics:''},
{id:'o120',lang:'odia',title:'Mrutyunjayi juge juge tumo namo',url:'https://techpassions.wixsite.com/lyrics/ODIA/mrutyunjayi-juge-juge-tumo-namo',lyrics:''},
{id:'o121',lang:'odia',title:"Mukharita heu ame paribare",url:"https://techpassions.wixsite.com/lyrics/ODIA/mukharita-he'u-ame-paribare",lyrics:''},
{id:'o122',lang:'odia',title:'Niramala debata',url:'https://techpassions.wixsite.com/lyrics/ODIA/niramala-debata',lyrics:''},
{id:'o123',lang:'odia',title:'Nithoro ratiro udasa akase',url:'https://techpassions.wixsite.com/lyrics/ODIA/nithoro-ratiro-udasa-akase',lyrics:''},
{id:'o124',lang:'odia',title:'Palibi mu ae niyama',url:'https://techpassions.wixsite.com/lyrics/ODIA/palibi-mu-ae-niyama',lyrics:''},
{id:'o125',lang:'odia',title:'Parbata gana prati mu chahibi',url:'https://techpassions.wixsite.com/lyrics/ODIA/parbata-gana-prati-mu-chahibi',lyrics:''},
{id:'o126',lang:'odia',title:'Pathiko tu nohun ekaki',url:'https://techpassions.wixsite.com/lyrics/ODIA/pathiko-tu-nohun-ekaki',lyrics:''},
{id:'o127',lang:'odia',title:'Prabhu Karunare ashrya kari',url:'https://techpassions.wixsite.com/lyrics/ODIA/prabhu-karunare-ashrya-kari',lyrics:''},
{id:'o128',lang:'odia',title:'Prabhu jisu namo harsha karo gano',url:'https://techpassions.wixsite.com/lyrics/ODIA/prabhu-jisu-namo-harsha-karo-gano',lyrics:''},
{id:'o129',lang:'odia',title:'Prabhu jisu tume srusti korota',url:'https://techpassions.wixsite.com/lyrics/ODIA/prabhu-jisu-tume-srusti-korota',lyrics:''},
{id:'o130',lang:'odia',title:'Prabhu tume mo sahaya',url:'https://techpassions.wixsite.com/lyrics/ODIA/prabhu-tume-mo-sahaya',lyrics:''},
{id:'o131',lang:'odia',title:'Prarthana amo pode',url:'https://techpassions.wixsite.com/lyrics/ODIA/prarthana-amo-pode',lyrics:''},
{id:'o132',lang:'odia',title:'Prasansa gauraba kara',url:'https://techpassions.wixsite.com/lyrics/ODIA/prasansa-gauraba-kara',lyrics:''},
{id:'o133',lang:'odia',title:'Prasansa gauraba mahima heu',url:'https://techpassions.wixsite.com/lyrics/ODIA/prasansa-gauraba-mahima-heu',lyrics:''},
{id:'o134',lang:'odia',title:'Pratipalaka se ehi jibanara',url:'https://techpassions.wixsite.com/lyrics/ODIA/pratipalaka-se-ehi-jibanara',lyrics:''},
{id:'o135',lang:'odia',title:'Priya prabhu jisu mo rajana jisu',url:'https://techpassions.wixsite.com/lyrics/ODIA/priya-prabhu-jisu-mo-rajana-jisu',lyrics:''},
{id:'o136',lang:'odia',title:'Priyatamo jisu namo bhojo bhai',url:'https://techpassions.wixsite.com/lyrics/ODIA/priyatamo-jisu-namo-bhojo-bhai',lyrics:''},
{id:'o137',lang:'odia',title:'Pulake purichi dhara',url:'https://techpassions.wixsite.com/lyrics/ODIA/pulake-purichi-dhara',lyrics:''},
{id:'o138',lang:'odia',title:'Sadaprabhu moro pratipalako',url:'https://techpassions.wixsite.com/lyrics/ODIA/sadaprabhu-moro-pratipalako-',lyrics:''},
{id:'o139',lang:'odia',title:'Sadaprabhunkara dhanyabad',url:'https://techpassions.wixsite.com/lyrics/ODIA/sadaprabhunkara-dhanyabad',lyrics:''},
{id:'o140',lang:'odia',title:'Sadaprabhunkara dhanyabada kara',url:'https://techpassions.wixsite.com/lyrics/ODIA/sadaprabhunkara-dhanyabada-kara',lyrics:''},
{id:'o141',lang:'odia',title:'Samarpibi jisu pade',url:'https://techpassions.wixsite.com/lyrics/ODIA/samarpibi-jisu-pade',lyrics:''},
{id:'o142',lang:'odia',title:'Sarago asone je birajito',url:'https://techpassions.wixsite.com/lyrics/ODIA/sarago-asone-je-birajito',lyrics:''},
{id:'o143',lang:'odia',title:'Sri jisu he taba punya nama',url:'https://techpassions.wixsite.com/lyrics/ODIA/sri-jisu-he-taba-punya-nama',lyrics:''},
{id:'o144',lang:'odia',title:'Stuti kara prasansa kara',url:'https://techpassions.wixsite.com/lyrics/ODIA/stuti-kara-prasansa-kara',lyrics:''},
{id:'o145',lang:'odia',title:'Stuti, bondana, puja, aradhona',url:'https://techpassions.wixsite.com/lyrics/ODIA/stuti%2C%C2%A0bondana%2C%C2%A0puja%2C%C2%A0aradhona',lyrics:''},
{id:'o146',lang:'odia',title:'Suddho suddho suddho',url:'https://techpassions.wixsite.com/lyrics/ODIA/suddho%C2%A0suddho%C2%A0suddho',lyrics:''},
{id:'o147',lang:'odia',title:'Sunore suno maha premo kahani',url:'https://techpassions.wixsite.com/lyrics/ODIA/sunore-suno-maha-premo-kahani',lyrics:''},
{id:'o148',lang:'odia',title:'Swarga jahara sinhasana',url:'https://techpassions.wixsite.com/lyrics/ODIA/swarga-jahara-sinhasana',lyrics:''},
{id:'o149',lang:'odia',title:'Swarga pitankara stabakara',url:'https://techpassions.wixsite.com/lyrics/ODIA/swarga-pitankara-stabakara',lyrics:''},
{id:'o150',lang:'odia',title:'To papa pain bahe se jhara',url:'https://techpassions.wixsite.com/lyrics/ODIA/to-papa-pain-bahe-se-jhara',lyrics:''},
{id:'o151',lang:'odia',title:'Tuma bakya ate pradipa',url:'https://techpassions.wixsite.com/lyrics/ODIA/tuma-bakya-ate-pradipa',lyrics:''},
{id:'o152',lang:'odia',title:'Tume mo asraya',url:'https://techpassions.wixsite.com/lyrics/ODIA/tume-mo-asraya',lyrics:''},
{id:'o153',lang:'odia',title:'Tume ruho sathe sathe',url:'https://techpassions.wixsite.com/lyrics/ODIA/tume-ruho-sathe-sathe',lyrics:''},
{id:'o154',lang:'odia',title:'Tumo poche chalibi',url:'https://techpassions.wixsite.com/lyrics/ODIA/tumo-poche-chalibi',lyrics:''},
{id:'o155',lang:'odia',title:'Asagada hrudaya ku sajadila',url:'https://techpassions.wixsite.com/lyrics/ODIA/asagada-hrudaya-ku-sajadila',lyrics:''},
{id:'o156',lang:'odia',title:'କୋରାପୁଟିଆ',url:'https://techpassions.wixsite.com/lyrics/ODIA/%E0%AC%95%E0%AD%8B%E0%AC%B0%E0%AC%BE%E0%AC%AA%E0%AD%81%E0%AC%9F%E0%AC%BF%E0%AC%86-',lyrics:''},

// ─── ENGLISH SONGS ───
{id:'e001',lang:'english',title:'Above all powers',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/--above-all-powers',lyrics:''},
{id:'e002',lang:'english',title:'A Million Suns',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/a-million-suns',lyrics:''},
{id:'e003',lang:'english',title:'Abba Father, let me be',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/abba-father%2C-let-me-be',lyrics:''},
{id:'e004',lang:'english',title:'Alive alive alive forevermore',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/alive-alive-alive-forevermore',lyrics:''},
{id:'e005',lang:'english',title:'All hail the power of Jesus name',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/all-hail-the-power-of-jesus-name',lyrics:''},
{id:'e006',lang:'english',title:'All heaven declares',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/all-heaven-declares',lyrics:''},
{id:'e007',lang:'english',title:'All the way my Savior leads me',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/all-the-way-my-savior-leads-me',lyrics:''},
{id:'e008',lang:'english',title:'All things bright and beautiful',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/all-things-bright-and-beautiful',lyrics:''},
{id:'e009',lang:'english',title:'All to Jesus I surrender',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/all-to-jesus-i-surrender',lyrics:''},
{id:'e010',lang:'english',title:'Amazing grace!',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/amazing-grace!',lyrics:''},
{id:'e011',lang:'english',title:'Angels we have heard on high',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/angels-we-have-heard-on-high',lyrics:''},
{id:'e012',lang:'english',title:'As the deer panteth for the water',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/as-the-deer-panteth-for-the-water',lyrics:''},
{id:'e013',lang:'english',title:'Ascribe greatness to our God',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/ascribe-greatness-to-our-god',lyrics:''},
{id:'e014',lang:'english',title:'Be still and know',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/be-still-and-know',lyrics:''},
{id:'e015',lang:'english',title:'Because He lives',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/because-he-lives',lyrics:''},
{id:'e016',lang:'english',title:'Bind us together, Lord',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/bind-us-together%2C-lord',lyrics:''},
{id:'e017',lang:'english',title:'Bless the Lord, O my soul',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/bless-the-lord%2C-o-my-soul',lyrics:''},
{id:'e018',lang:'english',title:'Blessed assurance',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/blessed-assurance',lyrics:''},
{id:'e019',lang:'english',title:'Blessed be Your name',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/blessed-be-your-name',lyrics:''},
{id:'e020',lang:'english',title:'Blessed be the name',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/blessed-be-the-name',lyrics:''},
{id:'e021',lang:'english',title:'Blessing and honor',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/blessing-and-honor',lyrics:''},
{id:'e022',lang:'english',title:'Celebrate! Celebrate!',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/celebrate!-celebrate!',lyrics:''},
{id:'e023',lang:'english',title:'Christ alone, cornerstone',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/christ-alone%2C-cornerstone',lyrics:''},
{id:'e024',lang:'english',title:'Christ the Lord is risen today',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/christ-the-lord-is-risen-today',lyrics:''},
{id:'e025',lang:'english',title:'Come let us worship and bow down',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/come-let-us-worship-and-bow-down',lyrics:''},
{id:'e026',lang:'english',title:'Come now is the time to worship',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/come-now-is-the-time-to-worship',lyrics:''},
{id:'e027',lang:'english',title:'Crown him with many crowns',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/crown-him-with-many-crowns',lyrics:''},
{id:'e028',lang:'english',title:'Draw me close to You',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/draw-me-close-to-you',lyrics:''},
{id:'e029',lang:'english',title:'Father in heaven how we love you',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/father-in-heaven-how-we-love-you',lyrics:''},
{id:'e030',lang:'english',title:'For the beauty of the earth',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/for-the-beauty-of-the-earth',lyrics:''},
{id:'e031',lang:'english',title:'Give thanks with a grateful heart',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/give-thanks-with-a-grateful-heart',lyrics:''},
{id:'e032',lang:'english',title:'Glory, Glory in the highest',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/glory%2C-glory-in-the-highest',lyrics:''},
{id:'e033',lang:'english',title:'God is good all the time',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/god-is-good-all-the-time',lyrics:''},
{id:'e034',lang:'english',title:'God sent His Son',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/god-sent-his-son',lyrics:''},
{id:'e035',lang:'english',title:'God will make a way',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/god-will-make-a-way',lyrics:''},
{id:'e036',lang:'english',title:'Great is thy faithfulness',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/great-is-thy-faithfulness',lyrics:''},
{id:'e037',lang:'english',title:'He is Lord, He is Lord',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/he-is-lord%2C-he-is-lord',lyrics:''},
{id:'e038',lang:'english',title:'He is exalted',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/he-is-exalted',lyrics:''},
{id:'e039',lang:'english',title:'He is my everything He is my all',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/he-is-my-everything-he-is-my-all',lyrics:''},
{id:'e040',lang:'english',title:"He's still working on me",url:"https://techpassions.wixsite.com/lyrics/ENGLISH/he's-still-working-on-me",lyrics:''},
{id:'e041',lang:'english',title:'Holy holy, holy holy, Lord God Almighty',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/holy-holy%2C-holy-holy%2C-holy%2C-holy%2C-lord-god-almighty',lyrics:''},
{id:'e042',lang:'english',title:'Holy, holy, holy! Lord God Almighty!',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/holy%2C-holy%2C-holy!-lord-god-almighty!',lyrics:''},
{id:'e043',lang:'english',title:'Hosanna, Hosanna in the highest',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/hosanna%2C-hosanna-in-the-highest',lyrics:''},
{id:'e044',lang:'english',title:'I am the God That healeth thee',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/i-am-the-god-that-healeth-thee',lyrics:''},
{id:'e045',lang:'english',title:'I come before You today',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/i-come-before-you-today',lyrics:''},
{id:'e046',lang:'english',title:'I have decided to follow Jesus',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/i-have-decided-to-follow-jesus',lyrics:''},
{id:'e047',lang:'english',title:'I know who I am',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/i-know-who-i-am',lyrics:''},
{id:'e048',lang:'english',title:'I will be still and know You are God',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/i-will-be-still-and-know-you-are-god',lyrics:''},
{id:'e049',lang:'english',title:'I will enter His gates',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/i-will-enter-his-gates',lyrics:''},
{id:'e050',lang:'english',title:'I will make you fishers of men',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/i-will-make-you-fishers-of-men',lyrics:''},
{id:'e051',lang:'english',title:'I will sing of the mercies of the Lord forever',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/i-will-sing-of-the-mercies-of-the-lord-forever',lyrics:''},
{id:'e052',lang:'english',title:'In Christ alone my hope is found',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/in-christ-alone-my-hope-is-found',lyrics:''},
{id:'e053',lang:'english',title:'In his time',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/in-his-time',lyrics:''},
{id:'e054',lang:'english',title:'In the Name of Jesus every knee',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/in-the-name-of-jesus-every-knee',lyrics:''},
{id:'e055',lang:'english',title:'In the bleak midwinter',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/in-the-bleak-midwinter',lyrics:''},
{id:'e056',lang:'english',title:'Indescribable',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/indescribable',lyrics:''},
{id:'e057',lang:'english',title:"It's about the cross",url:"https://techpassions.wixsite.com/lyrics/ENGLISH/it's-about-the-cross",lyrics:''},
{id:'e058',lang:'english',title:"It's a great thing to praise the Lord",url:'https://techpassions.wixsite.com/lyrics/ENGLISH/it%E2%80%99s-a-great-thing-to-praise-the-lord',lyrics:''},
{id:'e059',lang:'english',title:'Jehovah Jireh My provider',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/jehovah-jireh-my-provider',lyrics:''},
{id:'e060',lang:'english',title:'Jesus Name above all names',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/jesus-name-above-all-names',lyrics:''},
{id:'e061',lang:'english',title:'Jesus, keep me near the cross',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/jesus%2C-keep-me-near-the-cross---in-the-cross%2C-in-the-cross',lyrics:''},
{id:'e062',lang:'english',title:'Jesus, our Lord, with what joy',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/jesus%2C-our-lord%2C-with-what-joy',lyrics:''},
{id:'e063',lang:'english',title:'Jesus, we enthrone You',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/jesus%2C-we-enthrone-you',lyrics:''},
{id:'e064',lang:'english',title:'Jingle Bells',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/jingle-bells-jingle-bells-jingle-all-the-way',lyrics:''},
{id:'e065',lang:'english',title:'Join all the glorious names',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/join-all-the-glorious-names',lyrics:''},
{id:'e066',lang:'english',title:'Joy to the World',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/joy-to-the-world',lyrics:''},
{id:'e067',lang:'english',title:'King of my life',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/king-of-my-life',lyrics:''},
{id:'e068',lang:'english',title:'King of my life I crown Thee now',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/king-of-my-life-i-crown-thee-now',lyrics:''},
{id:'e069',lang:'english',title:'Lead me Lord',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/lead-me-lord',lyrics:''},
{id:'e070',lang:'english',title:'Light of the world',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/light-of-the-world',lyrics:''},
{id:'e071',lang:'english',title:'Lord I Lift Your Name On High',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/lord-i-lift-your-name-on-high',lyrics:''},
{id:'e072',lang:'english',title:'Lord I come to You',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/lord-i-come-to-you',lyrics:''},
{id:'e073',lang:'english',title:'Lord I give You my heart',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/lord-i-give-you-my-heart',lyrics:''},
{id:'e074',lang:'english',title:'Lord Jesus, I love Thee',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/lord-jesus%2C-i-love-thee',lyrics:''},
{id:'e075',lang:'english',title:'Lord, I offer my life to You',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/lord%2C-i-offer-my-life-to-you',lyrics:''},
{id:'e076',lang:'english',title:'Lord, the light of your love is shining',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/lord%2C-the-light-of-your-love-is-shining',lyrics:''},
{id:'e077',lang:'english',title:'Majesty, worship His Majesty',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/majesty%2C-worship-his-majesty',lyrics:''},
{id:'e078',lang:'english',title:'Meekness and majesty',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/meekness-and-majesty',lyrics:''},
{id:'e079',lang:'english',title:'More love, more power',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/more-love%2C-more-power',lyrics:''},
{id:'e080',lang:'english',title:'My God is so big',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/my-god-is-so-big',lyrics:''},
{id:'e081',lang:'english',title:'My Jesus, my Saviour',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/my-jesus%2C-my-saviour',lyrics:''},
{id:'e082',lang:'english',title:'My Redeemer! O what beauties',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/my-redeemer!-o-what-beauties',lyrics:''},
{id:'e083',lang:'english',title:'My life is in you Lord',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/my-life-is-in-you-lord',lyrics:''},
{id:'e084',lang:'english',title:'My lighthouse, my lighthouse',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/my-lighthouse%2C-my-lighthouse',lyrics:''},
{id:'e085',lang:'english',title:'No blood, no altar now',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/no-blood%2C-no-altar-now',lyrics:''},
{id:'e086',lang:'english',title:'O God, our help in ages past',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/o-god%2C-our-help-in-ages-past',lyrics:''},
{id:'e087',lang:'english',title:'O Holy Night',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/o-holy-night',lyrics:''},
{id:'e088',lang:'english',title:'O Lord, my God',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/o-lord%2C-my-god',lyrics:''},
{id:'e089',lang:'english',title:'O for a thousand tongues to sing',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/o-for-a-thousand-tongues-to-sing',lyrics:''},
{id:'e090',lang:'english',title:'O what a wonderful, wonderful',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/o-what-a-wonderful%2C-wonderful',lyrics:''},
{id:'e091',lang:'english',title:'O worship the King',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/o-worship-the-king',lyrics:''},
{id:'e092',lang:'english',title:'Obedience is the very best way',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/obedience-is-the-very-best-way-',lyrics:''},
{id:'e093',lang:'english',title:'Open the eyes of my heart',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/open-the-eyes-of-my-heart',lyrics:''},
{id:'e094',lang:'english',title:'Open the eyes of my heart, Lord',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/open-the-eyes-of-my-heart%2C-lord',lyrics:''},
{id:'e095',lang:'english',title:'Our God is greater, our God is stronger',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/our-god-is-greater%2C-our-god-is-stronger',lyrics:''},
{id:'e096',lang:'english',title:'Praise Him! praise Him! Jesus',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/praise-him!-praise-him!-jesus',lyrics:''},
{id:'e097',lang:'english',title:'Praise the Lord my heart',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/praise-the-lord-my-heart',lyrics:''},
{id:'e098',lang:'english',title:'Praise to the Lord, the Almighty',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/praise-to-the-lord%2C-the-almighty',lyrics:''},
{id:'e099',lang:'english',title:'Praise, my soul',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/praise%2C-my-soul',lyrics:''},
{id:'e100',lang:'english',title:'Read your Bible',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/read-your-bible',lyrics:''},
{id:'e101',lang:'english',title:'Rejoice in the Lord always',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/rejoice-in-the-lord-always',lyrics:''},
{id:'e102',lang:'english',title:'Rock of ages, cleft for me',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/rock-of-ages%2C-cleft-for-me',lyrics:''},
{id:'e103',lang:'english',title:'Savior, like a shepherd lead us',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/savior%2C-like-a-shepherd-lead-us',lyrics:''},
{id:'e104',lang:'english',title:'Seek ye first the kingdom of God',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/seek-ye-first-the-kingdom-of-god',lyrics:''},
{id:'e105',lang:'english',title:'Shepherd of my soul',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/shepherd-of-my-soul',lyrics:''},
{id:'e106',lang:'english',title:'Shine, Jesus shine',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/shine%2C-jesus-shine',lyrics:''},
{id:'e107',lang:'english',title:'Silent night, holy night',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/silent-night%2C-holy-night',lyrics:''},
{id:'e108',lang:'english',title:'Sing Unto The Lord A New Song',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/sing-unto-the-lord-a-new-song',lyrics:''},
{id:'e109',lang:'english',title:'Sing hallelujah to the Lord',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/sing-hallelujah-to-the-lord',lyrics:''},
{id:'e110',lang:'english',title:'Spirit of the living God',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/spirit-of-the-living-god',lyrics:''},
{id:'e111',lang:'english',title:'Standing on the promises',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/standing-on-the-promises',lyrics:''},
{id:'e112',lang:'english',title:'That Man of Calvary',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/that-man-of-calvary',lyrics:''},
{id:'e113',lang:'english',title:'The B-I-B-L-E',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/the-b-i-b-l-e',lyrics:''},
{id:'e114',lang:'english',title:'The steadfast love of the Lord never ceases',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/the-steadfast-love-of-the-lord---never-ceases',lyrics:''},
{id:'e115',lang:'english',title:'There is none like You',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/there-is-none-like-you',lyrics:''},
{id:'e116',lang:'english',title:'There shall be showers of blessing',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/there-shall-be-showers-of-blessing',lyrics:''},
{id:'e117',lang:'english',title:'Thou art the everlasting Word',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/thou-art-the-everlasting-word',lyrics:''},
{id:'e118',lang:'english',title:'Thou art worthy, Thou art worthy',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/thou-art-worthy%2C-thou-art-worthy',lyrics:''},
{id:'e119',lang:'english',title:'Thy loving kindness is better than life',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/thy-loving-kindness-is-better-than-life',lyrics:''},
{id:'e120',lang:'english',title:'To God be the glory',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/to-god-be-the-glory',lyrics:''},
{id:'e121',lang:'english',title:'What a friend we have in Jesus',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/what-a-friend-we-have-in-jesus',lyrics:''},
{id:'e122',lang:'english',title:'When the music fades',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/when-the-music-fades',lyrics:''},
{id:'e123',lang:'english',title:'Wide, wide as the ocean',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/wide%2C-wide-as-the-ocean',lyrics:''},
{id:'e124',lang:'english',title:'Yesterday, today, forever',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/yesterday%2C-today%2C-forever',lyrics:''},
{id:'e125',lang:'english',title:'You Are My All in All',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/you-are-my-all-in-all',lyrics:''},
{id:'e126',lang:'english',title:'You are my refuge',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/you-are-my-refuge',lyrics:''},
{id:'e127',lang:'english',title:'You are my strength when I am weak',url:'https://techpassions.wixsite.com/lyrics/ENGLISH/you-are-my-strength-when-i-am-weak',lyrics:''},

// ─── HINDI SONGS ───
{id:'h001',lang:'hindi',title:'A dunia ki logo',url:'https://techpassions.wixsite.com/lyrics/HINDI/a-dunia-ki-logo',lyrics:''},
{id:'h002',lang:'hindi',title:'Aadi aur Aant tu hi hai',url:'https://techpassions.wixsite.com/lyrics/HINDI/aadi-aur-aant-tu-hi-hai',lyrics:''},
{id:'h003',lang:'hindi',title:'Aaj ka din yahova ne banaya hai',url:'https://techpassions.wixsite.com/lyrics/HINDI/aaj-ka-din-yahova-ne-banaya-hai',lyrics:''},
{id:'h004',lang:'hindi',title:'Aao Milke Sthuthi Karenge',url:'https://techpassions.wixsite.com/lyrics/HINDI/aao-milke-sthuthi-karenge',lyrics:''},
{id:'h005',lang:'hindi',title:'Aao hum Yahova ka dhanyawad karein',url:'https://techpassions.wixsite.com/lyrics/HINDI/aao-hum-yahova-ka-dhanyawad-karein',lyrics:''},
{id:'h006',lang:'hindi',title:'Aaradhna mai hai chutkara',url:'https://techpassions.wixsite.com/lyrics/HINDI/aaradhna-mai-hai-chutkara',lyrics:''},
{id:'h007',lang:'hindi',title:'Aradhana ho aradhana',url:'https://techpassions.wixsite.com/lyrics/HINDI/aradhana-ho-aradhana',lyrics:`Aradhana ho aradhana
khudavand yeshu ki aradhana
shantidata ki aradhana
muktidata ki aradhana
mere masiha ki aradhana
jivandata ki aradhana
rajao ke raja ki aradhana
prabhuo ke prabhu ki aradhana

Pavitra prabhu ko aradhana
premi pita ko aradhana
pavitra dil se aradhana
premi man se aradhana
duto ke sang milke aradhana
stuti prashansa aradhana

—

(ଓଡ଼ିଆ ଲିପି)

ଆରାଧନା ହୋ ଆରାଧନା
ଖୁଦାୱାନ ୟେସୁ କି ଆରାଧନା
ଶାନ୍ତି ଦାତା କି ଆରାଧନା
ମୁକ୍ତି ଦାତା କି ଆରାଧନା
ମେରେ ମସିହା କି ଆରାଧନା
ଜୀବନ ଦାତା କି ଆରାଧନା
ରାଜା କେ ରାଜା କି ଆରାଧନା
ପ୍ରଭୋ କେ ପ୍ରଭୁ କି ଆରାଧନା

ପବିତ୍ର ପ୍ରଭୋ କୋ ଆରାଧନା
ପ୍ରେମି ପିତା କୋ ଆରାଧନା
ପବିତ୍ର ଦିଲ ସେ ଆରାଧନା
ପ୍ରେମୀ ମନ୍ ସେ ଆରାଧନା
ଦୁତ କେ ସଙ୍ଗ ମିଲକେ ଆରାଧନା
ସ୍ତୁତି ପ୍ରଶଂସା ଆରାଧନା`},
{id:'h008',lang:'hindi',title:'Ashish tujhse chahte hain',url:'https://techpassions.wixsite.com/lyrics/HINDI/ashish-tujhse-chahte-hain',lyrics:''},
{id:'h009',lang:'hindi',title:'Awaz Uthayenge',url:'https://techpassions.wixsite.com/lyrics/HINDI/awaz-uthayenge',lyrics:''},
{id:'h010',lang:'hindi',title:'Bolo Jai, Milkar Jai, Bolo Jai Ishuki Jai',url:'https://techpassions.wixsite.com/lyrics/HINDI/bolo-jai%2C-milkar-jai%2C-bolo-jai-ishuki-jai',lyrics:''},
{id:'h011',lang:'hindi',title:'Chahe tum ko dil se',url:'https://techpassions.wixsite.com/lyrics/HINDI/chahe-tum-ko-dil-se',lyrics:''},
{id:'h012',lang:'hindi',title:'Dhanyavaad ke saath stuti gaoonga',url:'https://techpassions.wixsite.com/lyrics/HINDI/dhanyavaad-ke-saath-stuti-gaoonga',lyrics:''},
{id:'h013',lang:'hindi',title:'Gaate hai bajate hai',url:'https://techpassions.wixsite.com/lyrics/HINDI/gaate-hai-bajate-hai',lyrics:''},
{id:'h014',lang:'hindi',title:'Ho teri stuti aur aaradhana',url:'https://techpassions.wixsite.com/lyrics/HINDI/ho-teri-stuti-aur-aaradhana',lyrics:''},
{id:'h015',lang:'hindi',title:'Jai jai probhu yeshu ki',url:'https://techpassions.wixsite.com/lyrics/HINDI/jai-jai-probhu-yeshu-ki',lyrics:''},
{id:'h016',lang:'hindi',title:'Jeevith Parameshwar Ke Aaraadhanaa',url:'https://techpassions.wixsite.com/lyrics/HINDI/jeevith-parameshwar-ke-aaraadhanaa',lyrics:''},
{id:'h017',lang:'hindi',title:'Jhumo Naacho Kushi Se Aaj',url:'https://techpassions.wixsite.com/lyrics/HINDI/jhumo-naacho-kushi-se-aaj',lyrics:''},
{id:'h018',lang:'hindi',title:'Karte hain Teri hum Stuti',url:'https://techpassions.wixsite.com/lyrics/HINDI/karte-hain-teri-hum-stuti',lyrics:''},
{id:'h019',lang:'hindi',title:'Khushee, khushee manao',url:'https://techpassions.wixsite.com/lyrics/HINDI/khushee-%2C-khushee-manao',lyrics:''},
{id:'h020',lang:'hindi',title:'Le Chal Mujhe – Le Chal Mujhe',url:'https://techpassions.wixsite.com/lyrics/HINDI/le-chal-mujhe-%E2%80%93-le-chal-mujhe',lyrics:''},
{id:'h021',lang:'hindi',title:'Mahima se tu jo bharahua',url:'https://techpassions.wixsite.com/lyrics/HINDI/mahima-se-tu-jo-bharahua',lyrics:''},
{id:'h022',lang:'hindi',title:'Main Teri Hi Kala Hun',url:'https://techpassions.wixsite.com/lyrics/HINDI/main-teri-hi-kala-hun',lyrics:''},
{id:'h023',lang:'hindi',title:'Mere gito ka bisoy',url:'https://techpassions.wixsite.com/lyrics/HINDI/mere-gito-ka-bisoy',lyrics:''},
{id:'h024',lang:'hindi',title:'Mere sawalo ka jawab Yeshu',url:'https://techpassions.wixsite.com/lyrics/HINDI/mere-sawalo-ka-jawab-yeshu',lyrics:''},
{id:'h025',lang:'hindi',title:'Mukti Dilaye Yeshu Naam',url:'https://techpassions.wixsite.com/lyrics/HINDI/mukti-dilaye-yeshu-naam',lyrics:''},
{id:'h026',lang:'hindi',title:'Nile Asman ke par jaenge',url:'https://techpassions.wixsite.com/lyrics/HINDI/nile-asman-ke-par-jaenge',lyrics:''},
{id:'h027',lang:'hindi',title:'Param Pita ki Hum Stuti Gaye',url:'https://techpassions.wixsite.com/lyrics/HINDI/param-pita-ki-hum-stuti-gaye',lyrics:''},
{id:'h028',lang:'hindi',title:'Pavan hai vah Prabhu hamara',url:'https://techpassions.wixsite.com/lyrics/HINDI/pavan-hai-vah-prabhu-hamara',lyrics:''},
{id:'h029',lang:'hindi',title:'Pavithra Aathmaa Aa',url:'https://techpassions.wixsite.com/lyrics/HINDI/pavithra-aathmaa-aa',lyrics:''},
{id:'h030',lang:'hindi',title:'Prabhu ka dhanyavad karunga',url:'https://techpassions.wixsite.com/lyrics/HINDI/prabhu-ka--dhanyavad-karunga',lyrics:''},
{id:'h031',lang:'hindi',title:'Sada main stuti karoonga',url:'https://techpassions.wixsite.com/lyrics/HINDI/sada-main-stuti-karoonga',lyrics:''},
{id:'h032',lang:'hindi',title:'Sare sristi ke malik tum hi ho',url:'https://techpassions.wixsite.com/lyrics/HINDI/sare-sristi-ke-malik-tum-hi-ho',lyrics:''},
{id:'h033',lang:'hindi',title:'Shukriya, Shukriya',url:'https://techpassions.wixsite.com/lyrics/HINDI/shukriya%2C-shukriya',lyrics:''},
{id:'h034',lang:'hindi',title:'Stuti ho yeshu teri',url:'https://techpassions.wixsite.com/lyrics/HINDI/stuti-ho-yeshu-teri',lyrics:''},
{id:'h035',lang:'hindi',title:'Taareef, Taareef MilKe Karo Sare Taareef',url:'https://techpassions.wixsite.com/lyrics/HINDI/taareef-%2C-taareef-milke-karo-sare-taareef',lyrics:''},
{id:'h036',lang:'hindi',title:'Tera lahu bada kimti hai',url:'https://techpassions.wixsite.com/lyrics/HINDI/tera-lahu-bada-kimti-hai',lyrics:''},
{id:'h037',lang:'hindi',title:'Tere Samarth Se Bhar De Yeshu',url:'https://techpassions.wixsite.com/lyrics/HINDI/tere-samarth-se-bhar-de-yeshu',lyrics:''},
{id:'h038',lang:'hindi',title:'Teri aradhana karu',url:'https://techpassions.wixsite.com/lyrics/HINDI/teri-aradhana-karu',lyrics:''},
{id:'h039',lang:'hindi',title:'Thu Meraa Bal Hai Prabhu',url:'https://techpassions.wixsite.com/lyrics/HINDI/thu-meraa-bal-hai-prabhu',lyrics:''},
{id:'h040',lang:'hindi',title:'Tu pyaar ka sagar',url:'https://techpassions.wixsite.com/lyrics/HINDI/tu-pyaar-ka-sagar',lyrics:''},
{id:'h041',lang:'hindi',title:'Yeeshu bula raha',url:'https://techpassions.wixsite.com/lyrics/HINDI/yeeshu-bula-raha',lyrics:''},
{id:'h042',lang:'hindi',title:'Yeeshu ne apna khoon baha ke',url:'https://techpassions.wixsite.com/lyrics/HINDI/yeeshu-ne-apna-khoon-baha-ke',lyrics:''},
{id:'h043',lang:'hindi',title:'Yeshu Masih Tere Jaisa',url:'https://techpassions.wixsite.com/lyrics/HINDI/yeshu-masih-tere-jaisa',lyrics:''},
{id:'h044',lang:'hindi',title:'Yeshu Teri Dayaa Se, Main Jivan Jitaa Hun',url:'https://techpassions.wixsite.com/lyrics/HINDI/yeshu-teri-dayaa-se-%2C-main-jivan-jitaa-hun',lyrics:''},
{id:'h045',lang:'hindi',title:'Yeshu ne hame Chudaya hai Paapon key Jaal se',url:'https://techpassions.wixsite.com/lyrics/HINDI/yeshu-ne-hame-chudaya-hai-paapon-key-jaal-se',lyrics:''},
{id:'h046',lang:'hindi',title:'Yeshu salib par mua',url:'https://techpassions.wixsite.com/lyrics/HINDI/yeshu-salib-par-mua',lyrics:''},

// ─── DESIYA SONGS ───
{id:'d001',lang:'desiya',title:'A mono ananda laguchi',url:'https://techpassions.wixsite.com/lyrics/desiya/a-mono-ananda-laguchi',lyrics:''},
{id:'d002',lang:'desiya',title:'Aji bode sarodaro dino ho',url:'https://techpassions.wixsite.com/lyrics/desiya/aji-bode-sarodaro-dino-ho',lyrics:''},
{id:'d003',lang:'desiya',title:'Ame bondona korube',url:'https://techpassions.wixsite.com/lyrics/desiya/ame-bondona-korube',ytUrl:'https://www.youtube.com/watch?v=hMdCthBd9b0',lyrics:`ଆମେ ବନ୍ଦନା କରୁବେ
ମନ ପରାଣ ଦେଇ କରି
ପ୍ରେମ କାରୀ ଯୀଶୁ ମାପୁରୁ କେ
ସେ ତ ପାପ କ୍ଷମା କାରୀ
ସାରା ଧରତି ଗଠନ କାରୀ
ଶାନ୍ତି ମୁକ୍ତି ଶକ୍ତି ଦେବାଏ
ଯୀଶୁ ମାପୁରୁ ସେ

ଆମେ ବନ୍ଦନା . . . .

ସାନ ବଡ ସବୁ ଯୀଶୁ ର ପାକେ ଆସା
ତାକେ ମାପୁରୁ ବୋଲି ଡାକା
ବାଦଲ ର ତଳେ ଆରି କେ ନାଇଁ
ସେଇ ଯୀଶୁ ମାପୁରୁ ଆକା
ସବୁ ର ପୂଜା ପାଇବା କେ
ଯୋଗ୍ୟ ସେବା ପାଇବା କେ
ହେତୁ କରି ସବୁ ମାନା ଯୀଶୁ ମାପୁରୁ କେ

ଆମେ ବନ୍ଦନା . . . .

ସେ ଯୀଶୁ ଏ ଜଗତ ର ପାଇଁ
ସରଗ ଠାନୁ ଆସି ରେଲା
ସରଗ ର ମାପୁରୁ ହୋଇ କରି
ନର ଗାଗଡ ଧାରି ରେଲା
ସରଗ ଠାନୁ ଆସି ରେଲାଇ
ବାଉଡି ସରଗ େ ଉଠି ଗାଲାଇ
ସେ ତାର ପାଇଁ ସବୁ ମାନା ଯୀଶୁ ମାପୁ ମାପୁରୁ କେ

ଆମେ ବନ୍ଦନା . . . .

—

(Transliteration)
ame bondana korube
mana parana de'ikari
premakari jisu mapuruke
seta papa khyamakari
sara dharati gothanakari
santi mukti sakti deba'e
jisu mapuru se

ame bandana....

sana bada sabu jisura pake asa
take mapuru boli daka
badalar tale arike na'i
se'i jisumapuru aka
sabura puja pa'ibake
jogya seba pa'ibake
hetu kari sabumana jisumapuruke

ame bandana....

se jisu e jagatara pa'i
saraga thanu asirela
saragara mapuru ho'ikari
nara gagada dharirela
saragathanu asi rela'i
ba'udi sarage uthi gala'i
setara pa'i sabumana jisu mapumapuruke

ame bandana....`},
{id:'d004',lang:'desiya',title:"Ame ga'ure ga'ure",url:"https://techpassions.wixsite.com/lyrics/desiya/ame-ga'ure-ga'ure",lyrics:''},
{id:'d005',lang:'desiya',title:'Bethali himo boli goteko gan loge',url:'https://techpassions.wixsite.com/lyrics/desiya/bethali-himo-boli-goteko-gan-loge',lyrics:''},
{id:'d006',lang:'desiya',title:"Duni'ara jete kama bekara",url:"https://techpassions.wixsite.com/lyrics/desiya/duni'ara-jete-kama-bekara",lyrics:''},
{id:'d007',lang:'desiya',title:'Janam hela jisu raja bethlihimo nogore',url:'https://techpassions.wixsite.com/lyrics/desiya/janam-hela-jisu-raja-bethlihimo-nogore',lyrics:''},
{id:'d008',lang:'desiya',title:'Koru prosangsa jisunkaro name',url:'https://techpassions.wixsite.com/lyrics/desiya/koru-prosangsa-jisunkaro-name',lyrics:''},
{id:'d009',lang:'desiya',title:'Mapru jisu dekhai dela',url:'https://techpassions.wixsite.com/lyrics/desiya/mapru-jisu-dekhai-dela',lyrics:''},
{id:'d010',lang:'desiya',title:'Nachi nachi gai gai korte roibi',url:'https://techpassions.wixsite.com/lyrics/desiya/nachi-nachi-gai-gai-korte-roibi',lyrics:''},
{id:'d011',lang:'desiya',title:'Partana koluni jisu mapru',url:'https://techpassions.wixsite.com/lyrics/desiya/partana-koluni-jisu-mapru',lyrics:''},
{id:'d012',lang:'desiya',title:'Santi deba kaje aila',url:'https://techpassions.wixsite.com/lyrics/desiya/santi-deba-kaje-aila',lyrics:''},
{id:'d013',lang:'desiya',title:'Sara jagate ekala jisu mapurura na',url:'https://techpassions.wixsite.com/lyrics/desiya/sara-jagate-ekala-jisu-mapurura-na',lyrics:''},
{id:'d014',lang:'desiya',title:'Sat mapru jisu aila',url:'https://techpassions.wixsite.com/lyrics/desiya/sat-mapru-jisu-aila',lyrics:''},
{id:'d015',lang:'desiya',title:'Tui koti koti dabu rakhi',url:'https://techpassions.wixsite.com/lyrics/desiya/tui-koti-koti-dabu-rakhi',lyrics:''},
];
