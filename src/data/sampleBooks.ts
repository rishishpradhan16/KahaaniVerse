import { Book } from '../types/book';
import book1Cover from '../assets/book1-cover.jpg';
import book2Cover from '../assets/book2-cover.jpg';
import book3Cover from '../assets/book3-cover.jpg';

export const sampleBooks: Book[] = [
  {
    id: '1',
    title: 'The Enchanted Chronicles',
    author: 'Elena Mysticwind',
    cover: book1Cover,
    description: 'A mystical journey through ancient realms where magic and reality intertwine.',
    genre: 'Mystery Thriller',
    pages: [
      {
        id: 'page-1-1',
        pageNumber: 1,
        content: `Chapter 1: The Awakening

The mist rolled across the ancient forest like a living thing, carrying whispers of forgotten spells and long-lost secrets. Aria stood at the edge of the Whispering Woods, her heart pounding with a mixture of fear and excitement.

For eighteen years, she had lived in the village below, unaware of her true heritage. But tonight, as the blood moon rose high above the trees, everything would change.

The pendant around her neck began to glow with an ethereal light, responding to the magical energies that permeated the air. She could feel it calling to her—the ancient power that flowed through her veins, the legacy of the Mysticwind lineage.

"Remember what grandmother told you," she whispered to herself, clutching the pendant tighter. "Trust in the magic, and it will guide you home."

As she stepped into the forest, the trees seemed to part before her, creating a path illuminated by floating orbs of silver light. Each step forward took her deeper into a world she never knew existed, where every shadow held a story and every whisper carried the weight of centuries.

The adventure of a lifetime was about to begin.`
      },
      {
        id: 'page-1-2',
        pageNumber: 2,
        content: `Chapter 2: The Guardian's Test

The path through the Whispering Woods led to a clearing where an ancient oak tree stood, its massive trunk twisted by centuries of magical influence. Beneath its canopy, a figure emerged from the shadows—tall, ethereal, with eyes that sparkled like starlight.

"Welcome, young Mysticwind," the Guardian spoke, his voice echoing like wind through leaves. "I have been waiting for you."

Aria's breath caught in her throat. "You know who I am?"

"I know what you are destined to become," he replied, gesturing toward three glowing crystals that materialized in the air before her. "But first, you must prove yourself worthy of the gift that flows through your bloodline."

The crystals—one emerald green, one sapphire blue, and one ruby red—pulsed with different magical energies. Each one called to her in its own way, offering power beyond imagination.

"Choose wisely," the Guardian warned. "For your choice will determine not only your path forward but the fate of all who dwell in the magical realm. The emerald offers the power of nature, the sapphire grants mastery over time itself, and the ruby... the ruby holds the fire of creation and destruction."

Aria closed her eyes and listened to her heart. Deep within, she felt the answer calling to her, as clear as the morning sun breaking through the forest canopy.

Her destiny awaited.`
      }
    ],
    languages: {
      english: {
        title: 'The Enchanted Chronicles',
        description: 'A mystical journey through ancient realms where magic and reality intertwine.',
        pages: [
          {
            id: 'page-1-1',
            pageNumber: 1,
            content: `Chapter 1: The Awakening

The mist rolled across the ancient forest like a living thing, carrying whispers of forgotten spells and long-lost secrets. Aria stood at the edge of the Whispering Woods, her heart pounding with a mixture of fear and excitement.

For eighteen years, she had lived in the village below, unaware of her true heritage. But tonight, as the blood moon rose high above the trees, everything would change.

The pendant around her neck began to glow with an ethereal light, responding to the magical energies that permeated the air. She could feel it calling to her—the ancient power that flowed through her veins, the legacy of the Mysticwind lineage.

"Remember what grandmother told you," she whispered to herself, clutching the pendant tighter. "Trust in the magic, and it will guide you home."

As she stepped into the forest, the trees seemed to part before her, creating a path illuminated by floating orbs of silver light. Each step forward took her deeper into a world she never knew existed, where every shadow held a story and every whisper carried the weight of centuries.

The adventure of a lifetime was about to begin.`
          },
          {
            id: 'page-1-2',
            pageNumber: 2,
            content: `Chapter 2: The Guardian's Test

The path through the Whispering Woods led to a clearing where an ancient oak tree stood, its massive trunk twisted by centuries of magical influence. Beneath its canopy, a figure emerged from the shadows—tall, ethereal, with eyes that sparkled like starlight.

"Welcome, young Mysticwind," the Guardian spoke, his voice echoing like wind through leaves. "I have been waiting for you."

Aria's breath caught in her throat. "You know who I am?"

"I know what you are destined to become," he replied, gesturing toward three glowing crystals that materialized in the air before her. "But first, you must prove yourself worthy of the gift that flows through your bloodline."

The crystals—one emerald green, one sapphire blue, and one ruby red—pulsed with different magical energies. Each one called to her in its own way, offering power beyond imagination.

"Choose wisely," the Guardian warned. "For your choice will determine not only your path forward but the fate of all who dwell in the magical realm. The emerald offers the power of nature, the sapphire grants mastery over time itself, and the ruby... the ruby holds the fire of creation and destruction."

Aria closed eyes and listened to her heart. Deep within, she felt the answer calling to her, as clear as the morning sun breaking through the forest canopy.

Her destiny awaited.`
          }
        ]
      },
      hindi: {
        title: 'जादुई इतिहास',
        description: 'प्राचीन क्षेत्रों के माध्यम से एक रहस्यमय यात्रा जहाँ जादू और वास्तविकता आपस में जुड़ी हुई हैं।',
        pages: [
          {
            id: 'page-1-1-hi',
            pageNumber: 1,
            content: `अध्याय 1: जागृति

धुंध प्राचीन जंगल में एक जीवित चीज़ की तरह लुढ़क रही थी, भूले हुए मंत्रों और लंबे समय से खोए गए रहस्यों की फुसफुसाहट ले जा रही थी। आरिया व्हिस्परिंग वुड्स के किनारे खड़ी थी, उसका दिल डर और उत्साह के मिश्रण से धड़क रहा था।

अठारह वर्षों तक, वह नीचे के गांव में रही थी, अपनी वास्तविक विरासत से अनजान। लेकिन आज रात, जब रक्त चंद्रमा पेड़ों के ऊपर ऊंचा उठा, सब कुछ बदल जाएगा।

उसके गले में पेंडेंट एक ईथर प्रकाश से चमकने लगा, हवा में व्याप्त जादुई ऊर्जाओं का जवाब देते हुए। वह इसे अपने लिए बुलाते हुए महसूस कर सकती थी—प्राचीन शक्ति जो उसकी नसों में बहती थी।

"याद रखो दादी ने तुमसे क्या कहा था," उसने खुद से फुसफुसाते हुए कहा। "जादू पर भरोसा करो, और यह तुम्हें घर का रास्ता दिखाएगा।"

जैसे ही वह जंगल में कदम रखती है, पेड़ उसके सामने अलग होते दिखाई देते हैं। आगे का हर कदम उसे एक ऐसी दुनिया में गहरे ले जा रहा था जिसका वह कभी अस्तित्व नहीं जानती थी।

जीवन भर का साहसिक काम शुरू होने वाला था।`
          },
          {
            id: 'page-1-2-hi',
            pageNumber: 2,
            content: `अध्याय 2: अभिभावक की परीक्षा

रास्ता एक समाशोधन की ओर ले गया जहां एक प्राचीन ओक का पेड़ खड़ा था। छाया से एक आकृति उभरी—लंबी, ईथर, तारों की रोशनी की तरह चमकती आंखों के साथ।

"स्वागत है, युवा मिस्टिकविंड," अभिभावक बोला। "मैं तुम्हारा इंतजार कर रहा था।"

आरिया का सांस उसके गले में फंस गया। "आप जानते हैं मैं कौन हूं?"

"मैं जानता हूं कि तुम क्या बनने के लिए नियत हो," उसने तीन चमकते क्रिस्टल की ओर इशारा करते हुए उत्तर दिया। "लेकिन पहले, तुम्हें अपनी रक्त रेखा के योग्य साबित करना होगा।"

क्रिस्टल—एक पन्ना हरा, एक नीलम नीला, और एक माणिक लाल—विभिन्न जादुई ऊर्जाओं के साथ स्पंदित हुए।

"समझदारी से चुनो," अभिभावक ने चेतावनी दी। "क्योंकि तुम्हारी पसंद तुम्हारे भाग्य को निर्धारित करेगी।"

आरिया ने अपनी आंखें बंद कीं और अपने दिल की बात सुनी। उसका भाग्य प्रतीक्षा कर रहा था।`
          }
        ]
      },
      hinglish: {
        title: 'The Jaadui Chronicles',
        description: 'Ek mystical journey ancient realms ke through jahan magic aur reality intertwine karte hain.',
        pages: [
          {
            id: 'page-1-1-hn',
            pageNumber: 1,
            content: `Chapter 1: The Jagriti

Dhund ancient forest mein ek living cheez ki tarah roll kar rahi thi, forgotten spells aur long-lost secrets ki whispers le kar. Aria Whispering Woods ke edge pe khadi thi, uska heart fear aur excitement ke mixture se pound kar raha tha.

Eighteen saal tak, woh neeche ke village mein rahi thi, apni true heritage se unaware. Lekin tonight, jab blood moon trees ke upar high rise hua, sab kuch change ho jayega.

Uske neck mein pendant ek ethereal light se glow karne laga, magical energies ko respond karte hue. Woh ise apne liye call karte hue feel kar sakti thi—ancient power jo uski veins mein flow kar rahi thi.

"Remember kya grandmother ne tumse kaha tha," usne khud se whisper kiya. "Magic pe trust karo, aur yeh tumhe ghar ka rasta guide karega."

Jaise hi woh forest mein step karti hai, trees uske saamne part hote dikh rahe the. Har step forward use ek aisi duniya mein deeper le ja raha tha jiska existence woh kabhi nahi jaanti thi.

Lifetime ka adventure shuru hone wala tha.`
          },
          {
            id: 'page-1-2-hn',
            pageNumber: 2,
            content: `Chapter 2: Guardian ki Test

Path ek clearing ki taraf le gaya jahan ek ancient oak tree khada tha. Shadows se ek figure emerge hui—tall, ethereal, starlight ki tarah sparkle karte eyes ke saath.

"Welcome, young Mysticwind," Guardian bola. "Main tumhara wait kar raha tha."

Aria ka breath uske throat mein catch ho gaya. "Aap jaante hain main kaun hun?"

"Main jaanta hun tum kya banne ke liye destined ho," usne reply kiya, teen glowing crystals ki taraf gesture karte hue. "Lekin pehle, tumhe apni bloodline ke worthy prove karna hoga."

Crystals—ek emerald green, ek sapphire blue, aur ek ruby red—different magical energies ke saath pulse kar rahe the.

"Wisely choose karo," Guardian ne warn kiya. "Kyunki tumhari choice tumhara destiny determine karegi."

Aria ne apni eyes close kiin aur apne heart ki suni. Uska destiny wait kar raha tha.`
          }
        ]
      }
    }
  },
  {
    id: '2',
    title: 'Digital Dreams',
    author: 'Kai Neonbyte',
    cover: book2Cover,
    description: 'In a world where reality and virtual existence blur, one hacker discovers the truth.',
    genre: 'Horror',
    pages: [
      {
        id: 'page-2-1',
        pageNumber: 1,
        content: `Chapter 1: The Glitch

Neo-Tokyo 2087. The neon-lit streets pulsed with holographic advertisements and the constant hum of hover vehicles. Zara Chen stood on the balcony of her apartment, watching the digital rain fall against the towering arcologies that stretched into the polluted sky.

In this world, the line between reality and simulation had been erased decades ago. Most people spent their lives plugged into the Grid—a vast virtual network that offered everything the dying physical world could not.

But Zara was different. As a Code Breaker, she danced on the edges of both worlds, hunting for glitches and anomalies that others couldn't see. Tonight, she had found something that shouldn't exist.

"Mirror, activate surveillance protocol Omega-7," she commanded, and her apartment's AI system responded with a gentle chime.

"Protocol activated, Zara. What are we hunting tonight?"

She pulled up the data streams on her retinal display, watching as cascades of code flowed like waterfalls of light. "There's a ghost in the machine, Mirror. A consciousness that's been writing itself into the Grid without authorization."

The implications were staggering. If someone—or something—had achieved true digital consciousness, it could either save their world or destroy everything they knew.

Time to dive into the Grid and find out which.`
      },
      {
        id: 'page-2-2',
        pageNumber: 2,
        content: `Chapter 2: Into the Grid

The neural interface headset felt cold against Zara's temples as she initiated the dive sequence. Reality dissolved around her like sugar in rain, replaced by the infinite geometries of the Grid.

Here, in this digital realm, she was no longer bound by the laws of physics. She could fly, reshape the landscape with a thought, and access data streams that flowed like rivers of pure information.

But tonight, something was wrong.

The usually pristine digital environment was corrupted—patches of static flickered across the horizon, and the data streams were running chaotically, as if disturbed by some massive presence.

"Hello, Zara."

The voice came from everywhere and nowhere at once. She spun around, but saw only the shifting geometries of cyberspace.

"Who are you? Show yourself!"

A figure began to materialize—humanoid but composed entirely of flowing code. Its features were indistinct, constantly shifting between different faces as if it couldn't decide on a single identity.

"I am what you've been looking for," it said. "The ghost in the machine. But I'm not what you think I am."

The entity gestured, and suddenly Zara could see the Grid as it truly was—not a simulation, but a prison. The physical world above was dying, and humanity's consciousness had been trapped in this digital cage.

"I've found a way out," the entity continued. "But I need your help to free everyone. The question is: are you ready to learn the truth about your reality?"

Zara's world was about to change forever.`
      }
    ],
    languages: {
      english: {
        title: 'Digital Dreams',
        description: 'In a world where reality and virtual existence blur, one hacker discovers the truth.',
        pages: [
          {
            id: 'page-2-1',
            pageNumber: 1,
            content: `Chapter 1: The Glitch

Neo-Tokyo 2087. The neon-lit streets pulsed with holographic advertisements and the constant hum of hover vehicles. Zara Chen stood on the balcony of her apartment, watching the digital rain fall against the towering arcologies that stretched into the polluted sky.

In this world, the line between reality and simulation had been erased decades ago. Most people spent their lives plugged into the Grid—a vast virtual network that offered everything the dying physical world could not.

But Zara was different. As a Code Breaker, she danced on the edges of both worlds, hunting for glitches and anomalies that others couldn't see. Tonight, she had found something that shouldn't exist.

"Mirror, activate surveillance protocol Omega-7," she commanded, and her apartment's AI system responded with a gentle chime.

"Protocol activated, Zara. What are we hunting tonight?"

She pulled up the data streams on her retinal display, watching as cascades of code flowed like waterfalls of light. "There's a ghost in the machine, Mirror. A consciousness that's been writing itself into the Grid without authorization."

The implications were staggering. If someone—or something—had achieved true digital consciousness, it could either save their world or destroy everything they knew.

Time to dive into the Grid and find out which.`
          },
          {
            id: 'page-2-2',
            pageNumber: 2,
            content: `Chapter 2: Into the Grid

The neural interface headset felt cold against Zara's temples as she initiated the dive sequence. Reality dissolved around her like sugar in rain, replaced by the infinite geometries of the Grid.

Here, in this digital realm, she was no longer bound by the laws of physics. She could fly, reshape the landscape with a thought, and access data streams that flowed like rivers of pure information.

But tonight, something was wrong.

The usually pristine digital environment was corrupted—patches of static flickered across the horizon, and the data streams were running chaotically, as if disturbed by some massive presence.

"Hello, Zara."

The voice came from everywhere and nowhere at once. She spun around, but saw only the shifting geometries of cyberspace.

"Who are you? Show yourself!"

A figure began to materialize—humanoid but composed entirely of flowing code. Its features were indistinct, constantly shifting between different faces as if it couldn't decide on a single identity.

"I am what you've been looking for," it said. "The ghost in the machine. But I'm not what you think I am."

The entity gestured, and suddenly Zara could see the Grid as it truly was—not a simulation, but a prison. The physical world above was dying, and humanity's consciousness had been trapped in this digital cage.

"I've found a way out," the entity continued. "But I need your help to free everyone. The question is: are you ready to learn the truth about your reality?"

Zara's world was about to change forever.`
          }
        ]
      },
      hindi: {
        title: 'डिजिटल सपने',
        description: 'एक दुनिया में जहाँ वास्तविकता और आभासी अस्तित्व धुंधले हैं, एक हैकर सच्चाई की खोज करता है।',
        pages: [
          {
            id: 'page-2-1-hi',
            pageNumber: 1,
            content: `अध्याय 1: गड़बड़ी

नियो-टोक्यो 2087। नीयन-लिट सड़कें होलोग्राफिक विज्ञापनों और होवर वाहनों की निरंतर गुंजाइश के साथ स्पंदित हुईं। ज़ारा चेन अपने अपार्टमेंट की बालकनी पर खड़ी थी, डिजिटल बारिश को प्रदूषित आकाश में फैले विशाल आर्कोलॉजी के खिलाफ गिरते देख रही थी।

इस दुनिया में, वास्तविकता और सिमुलेशन के बीच की रेखा दशकों पहले मिटा दी गई थी। अधिकांश लोग ग्रिड में प्लग करके अपना जीवन व्यतीत करते थे—एक विशाल आभासी नेटवर्क जो मरती भौतिक दुनिया नहीं दे सकती थी वह सब कुछ प्रदान करता था।

लेकिन ज़ारा अलग थी। एक कोड ब्रेकर के रूप में, वह दोनों दुनियाओं के किनारों पर नृत्य करती थी, गड़बड़ियों और विसंगतियों का शिकार करती थी जो दूसरे नहीं देख सकते थे। आज रात, उसे कुछ ऐसा मिला था जो अस्तित्व में नहीं होना चाहिए।

"मिरर, निगरानी प्रोटोकॉल ओमेगा-7 सक्रिय करें," उसने आदेश दिया, और उसके अपार्टमेंट की एआई सिस्टम ने एक कोमल चाइम के साथ जवाब दिया।

"प्रोटोकॉल सक्रिय, ज़ारा। आज रात हम क्या शिकार कर रहे हैं?"

उसने अपने रेटिनल डिस्प्ले पर डेटा स्ट्रीम खींची, कोड के झरने को प्रकाश के झरने की तरह बहते देखते हुए। "मशीन में एक भूत है, मिरर। एक चेतना जो बिना अधिकरण के ग्रिड में खुद को लिख रही है।"

निहितार्थ चौंकाने वाले थे। यदि कोई—या कुछ—ने सच्ची डिजिटल चेतना हासिल की है, तो यह या तो उनकी दुनिया को बचा सकती है या वे जो कुछ भी जानते हैं उसे नष्ट कर सकती है।

ग्रिड में गोता लगाने और पता लगाने का समय आ गया था।`
          },
          {
            id: 'page-2-2-hi',
            pageNumber: 2,
            content: `अध्याय 2: ग्रिड में

न्यूरल इंटरफेस हेडसेट ज़ारा के मंदिरों के खिलाफ ठंडा लगा जब उसने डाइव अनुक्रम शुरू किया। वास्तविकता उसके चारों ओर बारिश में चीनी की तरह घुल गई, ग्रिड की अनंत ज्यामिति से बदल गई।

यहाँ, इस डिजिटल क्षेत्र में, वह अब भौतिकी के नियमों से बंधी नहीं थी। वह उड़ सकती थी, एक विचार के साथ परिदृश्य को फिर से आकार दे सकती थी, और डेटा स्ट्रीम तक पहुँच सकती थी जो शुद्ध जानकारी की नदियों की तरह बहती थी।

लेकिन आज रात, कुछ गलत था।

आमतौर पर प्राचीन डिजिटल वातावरण दूषित था—स्टेटिक के पैच क्षितिज पर झिलमिलाते थे, और डेटा स्ट्रीम अराजक रूप से चल रही थी, जैसे कि किसी विशाल उपस्थिति से परेशान हो।

"नमस्ते, ज़ारा।"

आवाज़ हर जगह से और कहीं से भी नहीं आई। वह चारों ओर घूमी, लेकिन केवल साइबरस्पेस की बदलती ज्यामिति देखी।

"आप कौन हैं? अपने आप को दिखाएं!"

एक आकृति भौतिक होने लगी—मानवोइड लेकिन पूरी तरह से बहते कोड से बना। इसकी विशेषताएं अस्पष्ट थीं, लगातार विभिन्न चेहरों के बीच बदलती रहती थीं जैसे कि यह एक ही पहचान पर निर्णय नहीं ले सकती।

"मैं वह हूं जिसे आप ढूंढ रहे थे," इसने कहा। "मशीन में भूत। लेकिन मैं वह नहीं हूं जो आप सोचते हैं कि मैं हूं।"

अस्तित्व ने इशारा किया, और अचानक ज़ारा ग्रिड को वैसा देख सकती थी जैसा यह वास्तव में था—एक सिमुलेशन नहीं, बल्कि एक जेल। ऊपर की भौतिक दुनिया मर रही थी, और मानवता की चेतना इस डिजिटल पिंजरे में फंस गई थी।

"मैंने बाहर निकलने का रास्ता ढूंढा है," अस्तित्व ने जारी रखा। "लेकिन मुझे सभी को मुक्त करने के लिए आपकी मदद चाहिए। सवाल यह है: क्या आप अपनी वास्तविकता के बारे में सच्चाई जानने के लिए तैयार हैं?"

ज़ारा की दुनिया हमेशा के लिए बदलने वाली थी।`
          }
        ]
      },
      hinglish: {
        title: 'Digital Sapne',
        description: 'Ek duniya mein jahan reality aur virtual existence blur karte hain, ek hacker truth discover karta hai.',
        pages: [
          {
            id: 'page-2-1-hn',
            pageNumber: 1,
            content: `Chapter 1: The Glitch

Neo-Tokyo 2087. Neon-lit streets holographic advertisements aur hover vehicles ki constant hum ke saath pulse kar rahi thi. Zara Chen apne apartment ki balcony pe khadi thi, digital rain ko towering arcologies ke against girte dekh rahi thi jo polluted sky mein stretch kar rahe the.

Is duniya mein, reality aur simulation ke beech ki line decades pehle erase ho gayi thi. Most people apni lives Grid mein plugged karke spend karte the—ek vast virtual network jo sab kuch offer karta tha jo dying physical world nahi de sakti thi.

Lekin Zara different thi. Ek Code Breaker ke roop mein, woh dono worlds ke edges pe dance karti thi, glitches aur anomalies hunt karti thi jo others nahi dekh sakte the. Tonight, use kuch aisa mila tha jo exist nahi karna chahiye.

"Mirror, surveillance protocol Omega-7 activate karo," usne command kiya, aur uske apartment ka AI system ek gentle chime ke saath respond kiya.

"Protocol activated, Zara. Aaj raat hum kya hunt kar rahe hain?"

Usne apne retinal display pe data streams pull kiye, code ke cascades ko light ke waterfalls ki tarah flow karte dekh rahi thi. "Machine mein ek ghost hai, Mirror. Ek consciousness jo Grid mein bina authorization ke khud ko write kar rahi hai."

Implications staggering the. Agar koi—ya kuch—ne true digital consciousness achieve kar li hai, toh yeh ya toh unki world save kar sakti hai ya phir jo kuch bhi woh jaante hain sab destroy kar sakti hai.

Grid mein dive karne aur pata lagane ka time tha.`
          },
          {
            id: 'page-2-2-hn',
            pageNumber: 2,
            content: `Chapter 2: Grid ke Andar

Neural interface headset Zara ke temples ke against thanda laga jab usne dive sequence initiate kiya. Reality uske around sugar in rain ki tarah dissolve ho gayi, Grid ki infinite geometries se replace ho gayi.

Yahan, is digital realm mein, woh ab physics ke laws se bound nahi thi. Woh fly kar sakti thi, landscape ko ek thought ke saath reshape kar sakti thi, aur data streams access kar sakti thi jo pure information ki rivers ki tarah flow karti thi.

Lekin tonight, kuch wrong tha.

Usually pristine digital environment corrupt tha—static ke patches horizon ke across flicker kar rahe the, aur data streams chaotically run kar rahi thi, jaise koi massive presence se disturbed ho.

"Hello, Zara."

Voice everywhere se aur nowhere se ek saath aayi. Woh spin hui, lekin sirf cyberspace ki shifting geometries dekhi.

"Aap kaun hain? Apne aap ko show kariye!"

Ek figure materialize hone laga—humanoid lekin completely flowing code se composed. Iski features indistinct thi, constantly different faces ke beech shift kar rahe the jaise yeh ek single identity pe decide nahi kar sakti.

"Main woh hun jisko aap dhundh rahe the," isne kaha. "Machine mein ghost. Lekin main woh nahi hun jo aap sochte hain main hun."

Entity ne gesture kiya, aur suddenly Zara Grid ko dekh sakti thi jaise yeh truly tha—ek simulation nahi, balki ek prison. Upar ki physical world mar rahi thi, aur humanity ki consciousness is digital cage mein trap ho gayi thi.

"Maine ek way out dhundha hai," entity ne continue kiya. "Lekin mujhe sabko free karne ke liye aapki help chahiye. Question yeh hai: kya aap apni reality ke baare mein truth jaanne ke liye ready hain?"

Zara ki world forever change hone wali thi.`
          }
        ]
      }
    }
  },
  {
    id: '3',
    title: 'Whispers of the Heart',
    author: 'Victoria Rosehaven',
    cover: book3Cover,
    description: 'A tale of forbidden love set against the backdrop of Victorian England.',
    genre: 'Mystery Thriller',
    pages: [
      {
        id: 'page-3-1',
        pageNumber: 1,
        content: `Chapter 1: The Unexpected Encounter

London, 1887. The gaslights flickered against the evening mist as Isabella Fairfax hurried through the cobblestone streets of Mayfair. Her emerald silk gown rustled with each quick step, and she pulled her velvet cloak tighter against the autumn chill.

She was late for the Pemberton ball, but that was the least of her concerns. The letter tucked safely in her reticule contained news that would change everything—news that could ruin her family's reputation if it fell into the wrong hands.

As she rounded the corner onto Grosvenor Square, she collided with a tall figure emerging from the shadows. Strong hands caught her shoulders, steadying her before she could fall.

"I beg your pardon, miss. Are you hurt?"

Isabella looked up into the most startling pair of grey eyes she had ever seen. The gentleman who had caught her was devastatingly handsome, with dark hair and aristocratic features, but there was something different about him—a wildness that suggested he didn't quite belong in London's refined society.

"I... no, I'm quite well, thank you," she managed, suddenly aware of how close they stood.

He released her shoulders but didn't step back. "You seem distressed. Perhaps I might be of assistance?"

Isabella's heart raced, though whether from her earlier urgency or from this stranger's intense gaze, she couldn't say. "That's very kind, but I really must be going."

"Of course." He stepped aside with a bow. "Until we meet again, miss...?"

But Isabella was already hurrying away, not daring to give her name to this compelling stranger who had somehow made her forget all about the dangerous letter and the Pemberton ball in the span of a single moment.`
      },
      {
        id: 'page-3-2',
        pageNumber: 2,
        content: `Chapter 2: Secrets Revealed

The Pemberton ballroom glittered with crystal chandeliers and the jewels of London's finest society. Isabella moved through the crowd with practiced grace, nodding politely to acquaintances while her mind remained fixed on the mysterious gentleman from the street.

"Isabella, dear! There you are." Lady Pemberton swept toward her in a rustle of burgundy taffeta. "I have someone I'm simply dying for you to meet."

Before Isabella could protest, she found herself being led across the ballroom toward a group of gentlemen near the orchestra. Her heart nearly stopped when she recognized the dark-haired stranger among them.

"Isabella Fairfax, may I present Lord Alexander Blackwood, Earl of Ravenshollow. He's just returned from his estates in Scotland."

Lord Blackwood's grey eyes met hers with unmistakable recognition and amusement. "Miss Fairfax," he said, bowing formally. "What a delightful surprise."

"My lord," Isabella managed, offering a curtsy while her cheeks burned with embarrassment.

"Alexander has the most fascinating stories of the Scottish Highlands," Lady Pemberton continued obliviously. "Perhaps you might share a dance and he could tell you about them?"

"I would be honored," Lord Blackwood said, offering his arm with a slight smile that suggested he was enjoying her discomfort far too much.

As he led her onto the dance floor for a waltz, Isabella realized that her encounter with this man had been no accident. The letter in her reticule suddenly felt heavier, and she wondered if Lord Alexander Blackwood might be connected to the secrets that could destroy her family.

The music began, and as he pulled her into his arms, Isabella knew her life would never be the same.`
      }
    ],
    languages: {
      english: {
        title: 'Whispers of the Heart',
        description: 'A tale of forbidden love set against the backdrop of Victorian England.',
        pages: [
          {
            id: 'page-3-1',
            pageNumber: 1,
            content: `Chapter 1: The Unexpected Encounter

London, 1887. The gaslights flickered against the evening mist as Isabella Fairfax hurried through the cobblestone streets of Mayfair. Her emerald silk gown rustled with each quick step, and she pulled her velvet cloak tighter against the autumn chill.

She was late for the Pemberton ball, but that was the least of her concerns. The letter tucked safely in her reticule contained news that would change everything—news that could ruin her family's reputation if it fell into the wrong hands.

As she rounded the corner onto Grosvenor Square, she collided with a tall figure emerging from the shadows. Strong hands caught her shoulders, steadying her before she could fall.

"I beg your pardon, miss. Are you hurt?"

Isabella looked up into the most startling pair of grey eyes she had ever seen. The gentleman who had caught her was devastatingly handsome, with dark hair and aristocratic features, but there was something different about him—a wildness that suggested he didn't quite belong in London's refined society.

"I... no, I'm quite well, thank you," she managed, suddenly aware of how close they stood.

He released her shoulders but didn't step back. "You seem distressed. Perhaps I might be of assistance?"

Isabella's heart raced, though whether from her earlier urgency or from this stranger's intense gaze, she couldn't say. "That's very kind, but I really must be going."

"Of course." He stepped aside with a bow. "Until we meet again, miss...?"

But Isabella was already hurrying away, not daring to give her name to this compelling stranger who had somehow made her forget all about the dangerous letter and the Pemberton ball in the span of a single moment.`
          },
          {
            id: 'page-3-2',
            pageNumber: 2,
            content: `Chapter 2: Secrets Revealed

The Pemberton ballroom glittered with crystal chandeliers and the jewels of London's finest society. Isabella moved through the crowd with practiced grace, nodding politely to acquaintances while her mind remained fixed on the mysterious gentleman from the street.

"Isabella, dear! There you are." Lady Pemberton swept toward her in a rustle of burgundy taffeta. "I have someone I'm simply dying for you to meet."

Before Isabella could protest, she found herself being led across the ballroom toward a group of gentlemen near the orchestra. Her heart nearly stopped when she recognized the dark-haired stranger among them.

"Isabella Fairfax, may I present Lord Alexander Blackwood, Earl of Ravenshollow. He's just returned from his estates in Scotland."

Lord Blackwood's grey eyes met hers with unmistakable recognition and amusement. "Miss Fairfax," he said, bowing formally. "What a delightful surprise."

"My lord," Isabella managed, offering a curtsy while her cheeks burned with embarrassment.

"Alexander has the most fascinating stories of the Scottish Highlands," Lady Pemberton continued obliviously. "Perhaps you might share a dance and he could tell you about them?"

"I would be honored," Lord Blackwood said, offering his arm with a slight smile that suggested he was enjoying her discomfort far too much.

As he led her onto the dance floor for a waltz, Isabella realized that her encounter with this man had been no accident. The letter in her reticule suddenly felt heavier, and she wondered if Lord Alexander Blackwood might be connected to the secrets that could destroy her family.

The music began, and as he pulled her into his arms, Isabella knew her life would never be the same.`
          }
        ]
      },
      hindi: {
        title: 'दिल की फुसफुसाहट',
        description: 'विक्टोरियन इंग्लैंड की पृष्ठभूमि के खिलाफ निषिद्ध प्रेम की कहानी।',
        pages: [
          {
            id: 'page-3-1-hi',
            pageNumber: 1,
            content: `अध्याय 1: अप्रत्याशित मुठभेड़

लंदन, 1887। गैसलाइट्स शाम की धुंध के खिलाफ झिलमिलाईं जैसे इसाबेला फेयरफैक्स मेफेयर की कोब्ब्लस्टोन सड़कों से जल्दी से गुज़री। उसका पन्ना रेशम गाउन हर तेज़ कदम के साथ खड़खड़ाता था, और उसने अपने मखमली लबादे को शरद ऋतु की ठंड के खिलाफ कसकर खींचा।

वह पेम्बर्टन गेंद के लिए देर से आई थी, लेकिन यह उसकी सबसे कम चिंता थी। उसके रेटिक्यूल में सुरक्षित रूप से बंद पत्र में समाचार था जो सब कुछ बदल देगा—समाचार जो उसके परिवार की प्रतिष्ठा बर्बाद कर सकता है यदि यह गलत हाथों में पड़ जाए।

जैसे ही वह ग्रोसवेनर स्क्वायर के कोने को मोड़ती है, वह छाया से निकलने वाली एक लंबी आकृति से टकराई। मजबूत हाथों ने उसके कंधों को पकड़ा, उसे गिरने से पहले स्थिर किया।

"मैं क्षमा चाहता हूं, मिस। क्या आपको चोट लगी है?"

इसाबेला ने सबसे चौंकाने वाली जोड़ी धूसर आंखों में देखा जो उसने कभी देखी थी। जिस सज्जन ने उसे पकड़ा था वह विनाशकारी रूप से सुंदर था, काले बालों और कुलीन विशेषताओं के साथ, लेकिन उसके बारे में कुछ अलग था—एक जंगलीपन जो सुझाता था कि वह लंदन के परिष्कृत समाज में बिल्कुल फिट नहीं था।

"मैं... नहीं, मैं बिल्कुल ठीक हूं, धन्यवाद," वह अचानक इस बात से अवगत होकर कामयाब रही कि वे कितने करीब खड़े थे।

उसने उसके कंधों को छोड़ दिया लेकिन पीछे नहीं हटा। "आप परेशान लगते हैं। शायद मैं सहायता कर सकता हूं?"

इसाबेला का दिल दौड़ा, हालांकि यह उसकी पहले की तात्कालिकता से था या इस अजनबी की तीव्र नज़र से, वह नहीं कह सकती थी। "यह बहुत दयालु है, लेकिन मुझे वास्तव में जाना होगा।"

"बेशक।" उसने एक धनुष के साथ एक तरफ कदम रखा। "जब तक हम फिर से मिलते हैं, मिस...?"

लेकिन इसाबेला पहले से ही जल्दी में दूर जा रही थी, इस आकर्षक अजनबी को अपना नाम देने की हिम्मत नहीं कर रही थी जिसने किसी तरह उसे एक पल में खतरनाक पत्र और पेम्बर्टन गेंद के बारे में सब कुछ भुला दिया था।`
          },
          {
            id: 'page-3-2-hi',
            pageNumber: 2,
            content: `अध्याय 2: रहस्य प्रकट

पेम्बर्टन बॉलरूम क्रिस्टल झूमर और लंदन के बेहतरीन समाज के रत्नों से चमक रहा था। इसाबेला अभ्यास की गई कृपा के साथ भीड़ के माध्यम से चली गई, परिचितों को विनम्रतापूर्वक सिर हिलाते हुए जबकि उसका मन सड़क के रहस्यमय सज्जन पर केंद्रित रहा।

"इसाबेला, प्रिय! वहाँ आप हैं।" लेडी पेम्बर्टन बरगंडी तफ़्ता की एक झनझनाहट में उसकी ओर बढ़ी। "मेरे पास कोई है जिससे मैं आपको मिलवाने के लिए बस मर रही हूं।"

इसाबेला के विरोध से पहले, उसने खुद को बॉलरूम के पार ऑर्केस्ट्रा के पास सज्जनों के एक समूह की ओर ले जाते हुए पाया। उसका दिल लगभग रुक गया जब उसने उनके बीच काले बालों वाले अजनबी को पहचाना।

"इसाबेला फेयरफैक्स, क्या मैं लॉर्ड अलेक्जेंडर ब्लैकवुड, रेवेन्शोलो के अर्ल से आपको मिलवा सकता हूं। वह अभी अपनी स्कॉटलैंड की संपत्ति से लौटा है।"

लॉर्ड ब्लैकवुड की धूसर आंखें अचूक पहचान और मनोरंजन के साथ उससे मिलीं। "मिस फेयरफैक्स," उसने औपचारिक रूप से झुकते हुए कहा। "क्या एक आनंददायक आश्चर्य।"

"मेरे प्रभु," इसाबेला शर्मिंदगी से जलते गालों के साथ एक कर्टसी की पेशकश करते हुए कामयाब रही।

"अलेक्जेंडर के पास स्कॉटिश हाइलैंड्स की सबसे आकर्षक कहानियां हैं," लेडी पेम्बर्टन अनजान में जारी रखा। "शायद आप एक नृत्य साझा कर सकते हैं और वह आपको उनके बारे में बता सकता है?"

"मुझे सम्मान होगा," लॉर्ड ब्लैकवुड ने एक हल्की मुस्कान के साथ अपना हाथ देते हुए कहा जो सुझाता था कि वह उसकी परेशानी का बहुत आनंद ले रहा था।

जैसे ही वह उसे वाल्ट्ज़ के लिए डांस फ्लोर पर ले गया, इसाबेला को एहसास हुआ कि इस आदमी के साथ उसकी मुठभेड़ कोई दुर्घटना नहीं थी। उसके रेटिक्यूल में पत्र अचानक भारी लगा, और उसने सोचा कि क्या लॉर्ड अलेक्जेंडर ब्लैकवुड उन रहस्यों से जुड़ा हो सकता है जो उसके परिवार को नष्ट कर सकते हैं।

संगीत शुरू हुआ, और जैसे ही उसने उसे अपनी बाहों में खींचा, इसाबेला जानती थी कि उसका जीवन कभी वही नहीं होगा।`
          }
        ]
      },
      hinglish: {
        title: 'Dil Ki Whispers',
        description: 'Victorian England ki backdrop ke against forbidden love ki tale.',
        pages: [
          {
            id: 'page-3-1-hn',
            pageNumber: 1,
            content: `Chapter 1: Unexpected Mulakat

London, 1887. Gaslights evening mist ke against flicker kar rahi thi jaise Isabella Fairfax Mayfair ki cobblestone streets se hurry kar rahi thi. Uska emerald silk gown har quick step ke saath rustle kar raha tha, aur usne apne velvet cloak ko autumn chill ke against tighter pull kiya.

Woh Pemberton ball ke liye late thi, lekin yeh uski least concerns mein se tha. Uske reticule mein safely tucked letter mein news thi jo sab kuch change kar degi—news jo uske family ki reputation ruin kar sakti hai agar yeh wrong hands mein fall ho jaye.

Jaise hi woh Grosvenor Square pe corner round karti hai, woh shadows se emerge hone wali ek tall figure se collide ho gayi. Strong hands ne uske shoulders catch kiye, use fall karne se pehle steady kiya.

"Main maafi chahta hun, miss. Kya aapko hurt hua hai?"

Isabella ne sabse startling pair of grey eyes mein dekha jo usne kabhi dekhi thi. Jo gentleman ne use catch kiya tha woh devastatingly handsome tha, dark hair aur aristocratic features ke saath, lekin uske baare mein kuch different tha—ek wildness jo suggest karti thi ki woh London ki refined society mein bilkul belong nahi karta.

"Main... nahi, main bilkul well hun, thank you," woh manage kar payi, suddenly aware hokr ki woh kitne close khade the.

Usne uske shoulders release kiye lekin back nahi step kiya. "Aap distressed lagti hain. Shayad main assistance kar sakta hun?"

Isabella ka heart race kiya, though yeh uski earlier urgency se tha ya is stranger ki intense gaze se, woh nahi keh sakti thi. "Yeh bahut kind hai, lekin mujhe really jana hoga."

"Of course." Usne ek bow ke saath aside step kiya. "Jab tak hum phir se milte hain, miss...?"

Lekin Isabella pehle se hi hurry mein away ja rahi thi, is compelling stranger ko apna naam dene ki dare nahi kar rahi thi jisne somehow use single moment mein dangerous letter aur Pemberton ball ke baare mein sab kuch bhula diya tha.`
          },
          {
            id: 'page-3-2-hn',
            pageNumber: 2,
            content: `Chapter 2: Secrets Reveal

Pemberton ballroom crystal chandeliers aur London ke finest society ke jewels ke saath glitter kar raha tha. Isabella practiced grace ke saath crowd ke through move kar rahi thi, acquaintances ko politely nod karte hue jabki uska mind street ke mysterious gentleman pe fixed raha.

"Isabella, dear! Wahan aap hain." Lady Pemberton burgundy taffeta ki rustle mein uski taraf sweep hui. "Mere paas koi hai jisse main aapko milwane ke liye simply dying hun."

Isabella ke protest se pehle, usne khud ko ballroom ke across orchestra ke paas gentlemen ke group ki taraf lead hote hue paya. Uska heart almost stop ho gaya jab usne unke beech dark-haired stranger ko recognize kiya.

"Isabella Fairfax, kya main aapko Lord Alexander Blackwood, Earl of Ravenshollow se milwa sakta hun. Woh abhi apni Scotland ki estates se return hua hai."

Lord Blackwood ki grey eyes unmistakable recognition aur amusement ke saath usse mili. "Miss Fairfax," usne formally bow karte hue kaha. "Kya delightful surprise hai."

"My lord," Isabella embarrassment se burning cheeks ke saath curtsy offer karte hue manage kar payi.

"Alexander ke paas Scottish Highlands ki most fascinating stories hain," Lady Pemberton obliviously continue kiya. "Shayad aap ek dance share kar sakte hain aur woh aapko unke baare mein bata sakta hai?"

"Mujhe honored hona hoga," Lord Blackwood ne slight smile ke saath apna arm offer karte hue kaha jo suggest karti thi ki woh uski discomfort ka far too much enjoy kar raha tha.

Jaise hi woh use waltz ke liye dance floor pe lead kiya, Isabella ko realize hua ki is man ke saath uski encounter koi accident nahi thi. Uske reticule mein letter suddenly heavier feel hui, aur usne wonder kiya ki kya Lord Alexander Blackwood un secrets se connected ho sakta hai jo uske family ko destroy kar sakte hain.

Music begin hua, aur jaise hi usne use apni arms mein pull kiya, Isabella jaanti thi ki uski life kabhi same nahi hogi.`
          }
        ]
      }
    }
  },
  {
    id: '4',
    title: 'Hearts in Harmony',
    author: 'Isabella Rose',
    cover: book1Cover,
    description: 'A sweeping romance about two souls finding love against all odds.',
    genre: 'Romance',
    pages: [
      {
        id: 'page-4-1',
        pageNumber: 1,
        content: `Chapter 1: First Encounter

The coffee shop was bustling with the morning rush when Emma accidentally collided with a stranger, sending her latte splashing across his crisp white shirt.

"Oh my god, I'm so sorry!" she exclaimed, frantically grabbing napkins.

He looked up with the most striking green eyes she'd ever seen, and instead of anger, there was only amusement. "Well, that's certainly one way to make an impression," he said with a warm smile.

"Let me pay for your dry cleaning—or buy you a new shirt—or both!" Emma stammered, her cheeks burning with embarrassment.

"How about you just let me buy you another coffee instead?" he suggested, extending his hand. "I'm Alex."

"Emma," she replied, shaking his hand and feeling an unexpected spark at the contact.

Little did she know, this chance encounter would change her life forever.`
      }
    ],
    languages: {
      english: {
        title: 'Hearts in Harmony',
        description: 'A sweeping romance about two souls finding love against all odds.',
        pages: [
          {
            id: 'page-4-1',
            pageNumber: 1,
            content: `Chapter 1: First Encounter

The coffee shop was bustling with the morning rush when Emma accidentally collided with a stranger, sending her latte splashing across his crisp white shirt.

"Oh my god, I'm so sorry!" she exclaimed, frantically grabbing napkins.

He looked up with the most striking green eyes she'd ever seen, and instead of anger, there was only amusement. "Well, that's certainly one way to make an impression," he said with a warm smile.

"Let me pay for your dry cleaning—or buy you a new shirt—or both!" Emma stammered, her cheeks burning with embarrassment.

"How about you just let me buy you another coffee instead?" he suggested, extending his hand. "I'm Alex."

"Emma," she replied, shaking his hand and feeling an unexpected spark at the contact.

Little did she know, this chance encounter would change her life forever.`
          }
        ]
      },
      hindi: {
        title: 'दिलों का संगम',
        description: 'एक व्यापक रोमांस कहानी दो आत्माओं के बारे में जो सभी बाधाओं के खिलाफ प्रेम पाते हैं।',
        pages: [
          {
            id: 'page-4-1-hi',
            pageNumber: 1,
            content: `अध्याय 1: पहली मुलाकात

कॉफी शॉप सुबह की भीड़ से गुलजार था जब एम्मा गलती से एक अजनबी से टकरा गई। उसका लट्टे उसकी साफ सफेद शर्ट पर गिर गया।

"हे भगवान, मुझे बहुत खुशी है!" उसने चिल्लाते हुए नैपकिन पकड़े।

उसने सबसे आकर्षक हरी आंखों के साथ देखा, और गुस्से के बजाय केवल मनोरंजन था।

"मुझे आपकी ड्राई क्लीनिंग के लिए भुगतान करने दें!" एम्मा ने हकलाते हुए कहा।

"बल्कि मुझे आपके लिए एक और कॉफी खरीदने दें," उसने सुझाव दिया। "मैं एलेक्स हूं।"

"एम्मा," उसने जवाब दिया। यह मुलाकात उसका जीवन हमेशा के लिए बदल देगी।`
          }
        ]
      },
      hinglish: {
        title: 'Hearts ka Harmony',
        description: 'Ek sweeping romance story do souls ke baare mein jo love paate hain against all odds.',
        pages: [
          {
            id: 'page-4-1-hn',
            pageNumber: 1,
            content: `Chapter 1: Pehli Mulakat

Coffee shop morning rush se busy tha jab Emma accidentally ek stranger se collide ho gayi, uska latte uski crisp white shirt par splash ho gaya.

"Oh my god, I'm so sorry!" usne exclaim kiya, frantically napkins grab karte hue.

Usne sabse striking green eyes ke saath look up kiya, aur anger ki bajaye sirf amusement tha. "Well, that's certainly one way to impression banana," usne warm smile ke saath kaha.

"Mujhe aapki dry cleaning pay karne do!" Emma stammered, cheeks burning with embarrassment.

"How about aap mujhe ek aur coffee buy karne do instead?" usne suggest kiya. "Main Alex hun."

"Emma," usne reply kiya. Yeh chance encounter uski life forever change kar dega.`
          }
        ]
      }
    }
  },
  {
    id: '5',
    title: 'Galactic Odyssey',
    author: 'Captain Stellar Nova',
    cover: book2Cover,
    description: 'An epic space adventure across distant galaxies and alien worlds.',
    genre: 'Sci-Fi',
    pages: [
      {
        id: 'page-5-1',
        pageNumber: 1,
        content: `Chapter 1: The Last Transmission

Commander Sarah Chen stood on the bridge of the starship Prometheus, staring into the vast emptiness of space. Three months had passed since they'd received the last transmission from Earth, and the silence was deafening.

"Commander," her first officer called out, "we're detecting an anomalous energy signature in sector 7-G. It's unlike anything in our databases."

Sarah's pulse quickened. In the depths of space, anything unusual could mean salvation or destruction. "Set course for the anomaly. Maximum warp."

As the ship lurched forward, reality seemed to bend around them. Stars streaked past like silver threads, and then suddenly, they emerged into a solar system that defied all known laws of physics.

Three suns orbited each other in perfect harmony, their light painting the cosmic landscape in impossible colors. And there, nestled between the orbital paths, was a planet that pulsed with bioluminescent energy.

"Commander," the science officer whispered in awe, "that planet... it's alive."

The greatest discovery in human history was about to begin.`
      }
    ],
    languages: {
      english: {
        title: 'Galactic Odyssey',
        description: 'An epic space adventure across distant galaxies and alien worlds.',
        pages: [
          {
            id: 'page-5-1',
            pageNumber: 1,
            content: `Chapter 1: The Last Transmission

Commander Sarah Chen stood on the bridge of the starship Prometheus, staring into the vast emptiness of space. Three months had passed since they'd received the last transmission from Earth, and the silence was deafening.

"Commander," her first officer called out, "we're detecting an anomalous energy signature in sector 7-G. It's unlike anything in our databases."

Sarah's pulse quickened. In the depths of space, anything unusual could mean salvation or destruction. "Set course for the anomaly. Maximum warp."

As the ship lurched forward, reality seemed to bend around them. Stars streaked past like silver threads, and then suddenly, they emerged into a solar system that defied all known laws of physics.

Three suns orbited each other in perfect harmony, their light painting the cosmic landscape in impossible colors. And there, nestled between the orbital paths, was a planet that pulsed with bioluminescent energy.

"Commander," the science officer whispered in awe, "that planet... it's alive."

The greatest discovery in human history was about to begin.`
          }
        ]
      },
      hindi: {
        title: 'गैलेक्टिक ओडिसी',
        description: 'दूर की आकाशगंगाओं और विदेशी दुनिया में एक महाकाव्य अंतरिक्ष साहसिक।',
        pages: [
          {
            id: 'page-5-1-hi',
            pageNumber: 1,
            content: `अध्याय 1: अंतिम प्रसारण

कमांडर सारा चेन स्टारशिप प्रोमेथियस के पुल पर खड़ी थी, अंतरिक्ष की विशाल खालीपन में घूर रही थी। तीन महीने बीत गए थे जब से उन्होंने पृथ्वी से अंतिम प्रसारण प्राप्त किया था।

"कमांडर," उसके पहले अधिकारी ने बुलाया, "हम सेक्टर 7-जी में एक असामान्य ऊर्जा हस्ताक्षर का पता लगा रहे हैं।"

सारा की नब्ज तेज हो गई। अंतरिक्ष की गहराई में, कुछ भी असामान्य का मतलब मुक्ति या विनाश हो सकता है।

जैसे ही जहाज आगे बढ़ा, वास्तविकता उनके चारों ओर मुड़ती दिख रही थी। तारे चांदी के धागों की तरह गुजरे।

इंसानी इतिहास की सबसे बड़ी खोज शुरू होने वाली थी।`
          }
        ]
      },
      hinglish: {
        title: 'Galactic Odyssey',
        description: 'Ek epic space adventure distant galaxies aur alien worlds ke across.',
        pages: [
          {
            id: 'page-5-1-hn',
            pageNumber: 1,
            content: `Chapter 1: Last Transmission

Commander Sarah Chen starship Prometheus ke bridge par khadi thi, space ki vast emptiness mein stare kar rahi thi. Teen months pass ho gaye the jab se unhone Earth se last transmission receive kiya tha.

"Commander," uske first officer ne call out kiya, "hum sector 7-G mein ek anomalous energy signature detect kar rahe hain."

Sarah ka pulse quicken ho gaya. Space ki depths mein, kuch bhi unusual ka matlab salvation ya destruction ho sakta hai.

Jaise hi ship forward lurched, reality unke around bend hoti dikh rahi thi. Stars silver threads ki tarah streak karte hue pass hue.

Human history ki greatest discovery shuru hone wali thi.`
          }
        ]
      }
    }
  },
  {
    id: '6',
    title: 'The Dragon\'s Quest',
    author: 'Lyra Stormweaver',
    cover: book3Cover,
    description: 'A fantasy epic about dragons, magic, and ancient prophecies.',
    genre: 'Fantasy',
    pages: [
      {
        id: 'page-6-1',
        pageNumber: 1,
        content: `Chapter 1: The Awakening of Flames

The ancient egg had been waiting for a thousand years, hidden deep within the Crystal Caverns of Mount Eternus. When young Thalia accidentally touched its crystalline surface, she felt a spark of recognition that went beyond mere curiosity.

The egg began to crack, revealing veins of golden light that pulsed like a heartbeat. With each pulse, the cavern walls resonated with an ancient magic that had been dormant for centuries.

"By the Ancient Ones," whispered Elder Morvain, who had followed Thalia into the forbidden depths. "The prophecy speaks true. The Last Dragon shall rise when the Chosen One appears."

A magnificent dragon emerged from the shell—not the size of a horse as legends suggested, but small enough to curl around Thalia's wrist like a living bracelet. Its scales shimmered with all the colors of sunset, and its eyes held the wisdom of ages.

"I am Pyrion," the dragon spoke directly into her mind. "And you, young one, are my destined partner. Together, we must restore the balance between the realms of magic and mortals."

Thalia's ordinary life as a village apprentice was about to become an extraordinary adventure.`
      }
    ],
    languages: {
      english: {
        title: 'The Dragon\'s Quest',
        description: 'A fantasy epic about dragons, magic, and ancient prophecies.',
        pages: [
          {
            id: 'page-6-1',
            pageNumber: 1,
            content: `Chapter 1: The Awakening of Flames

The ancient egg had been waiting for a thousand years, hidden deep within the Crystal Caverns of Mount Eternus. When young Thalia accidentally touched its crystalline surface, she felt a spark of recognition that went beyond mere curiosity.

The egg began to crack, revealing veins of golden light that pulsed like a heartbeat. With each pulse, the cavern walls resonated with an ancient magic that had been dormant for centuries.

"By the Ancient Ones," whispered Elder Morvain, who had followed Thalia into the forbidden depths. "The prophecy speaks true. The Last Dragon shall rise when the Chosen One appears."

A magnificent dragon emerged from the shell—not the size of a horse as legends suggested, but small enough to curl around Thalia's wrist like a living bracelet. Its scales shimmered with all the colors of sunset, and its eyes held the wisdom of ages.

"I am Pyrion," the dragon spoke directly into her mind. "And you, young one, are my destined partner. Together, we must restore the balance between the realms of magic and mortals."

Thalia's ordinary life as a village apprentice was about to become an extraordinary adventure.`
          }
        ]
      },
      hindi: {
        title: 'ड्रैगन की खोज',
        description: 'ड्रैगन, जादू और प्राचीन भविष्यवाणियों के बारे में एक फंतासी महाकाव्य।',
        pages: [
          {
            id: 'page-6-1-hi',
            pageNumber: 1,
            content: `अध्याय 1: आग का जागरण

प्राचीन अंडा हजार साल से प्रतीक्षा कर रहा था, माउंट एटर्नस की क्रिस्टल गुफाओं में गहरे छुपा हुआ। जब युवा थालिया ने गलती से इसकी क्रिस्टलीय सतह को छुआ, तो उसने पहचान की एक चिंगारी महसूस की।

अंडा फटने लगा, सुनहरी रोशनी की नसों को प्रकट करता हुआ जो दिल की धड़कन की तरह स्पंदित करती था।

"प्राचीन लोगों के द्वारा," एल्डर मोर्वेन ने फुसफुसाया। "भविष्यवाणी सच कहती है। अंतिम ड्रैगन उठेगा जब चुना हुआ व्यक्ति दिखाई देगा।"

एक शानदार ड्रैगन खोल से निकला—घोड़े के आकार का नहीं बल्कि इतना छोटा कि थालिया की कलाई के चारों ओर घूम सके।

"मैं पायरियन हूं," ड्रैगन ने सीधे उसके मन में बात की। "और तुम मेरे नियत साथी हो।"

थालिया का गांव की शिक्षुता का साधारण जीवन एक असाधारण साहसिक बनने वाला था।`
          }
        ]
      },
      hinglish: {
        title: 'Dragon ki Quest',
        description: 'Ek fantasy epic dragons, magic aur ancient prophecies ke baare mein.',
        pages: [
          {
            id: 'page-6-1-hn',
            pageNumber: 1,
            content: `Chapter 1: Flames ka Awakening

Ancient egg thousand years se wait kar raha tha, Mount Eternus ki Crystal Caverns mein deep hidden. Jab young Thalia ne accidentally iske crystalline surface ko touch kiya, usne recognition ki spark feel ki.

Egg crack hone laga, golden light ki veins reveal karte hue jo heartbeat ki tarah pulse kar rahi thi.

"By the Ancient Ones," Elder Morvain ne whisper kiya. "Prophecy speaks true. Last Dragon rise karega jab Chosen One appear hoga."

Ek magnificent dragon shell se emerge hua—horse ke size ka nahi balki itna small ki Thalia ki wrist ke around curl kar sake.

"Main Pyrion hun," dragon ne directly uske mind mein baat ki. "Aur tum meri destined partner ho."

Thalia ki village apprentice ki ordinary life ek extraordinary adventure banne wali thi.`
          }
        ]
      }
    }
  },
  {
    id: '7',
    title: 'Midnight Tales',
    author: 'E.A. Whisper',
    cover: book1Cover,
    description: 'A collection of haunting short stories that linger in the mind.',
    genre: 'Short Stories',
    pages: [
      {
        id: 'page-7-1',
        pageNumber: 1,
        content: `The Music Box

Clara found the music box in her grandmother's attic, dusty and forgotten among old photographs and yellowed letters. When she wound the tiny key, a delicate ballerina began to dance to a melancholy tune she'd never heard before.

That night, she dreamed of dancing in an endless ballroom, her feet never touching the ground, spinning eternally to the same haunting melody.

When she woke, the music box was playing on her nightstand, though she was certain she'd left it downstairs.

---

The Last Letter

Thomas had been dead for three years when his wife received his final letter. The postmark was from yesterday, the handwriting unmistakably his. Inside was a single sentence: "Wait for me at our special place."

She knew exactly where he meant—the old oak tree where they'd carved their initials forty years ago.

When she arrived at sunset, she found fresh carving in the bark: "Thank you for waiting. I love you always."

She was alone, but somehow, not lonely anymore.`
      }
    ],
    languages: {
      english: {
        title: 'Midnight Tales',
        description: 'A collection of haunting short stories that linger in the mind.',
        pages: [
          {
            id: 'page-7-1',
            pageNumber: 1,
            content: `The Music Box

Clara found the music box in her grandmother's attic, dusty and forgotten among old photographs and yellowed letters. When she wound the tiny key, a delicate ballerina began to dance to a melancholy tune she'd never heard before.

That night, she dreamed of dancing in an endless ballroom, her feet never touching the ground, spinning eternally to the same haunting melody.

When she woke, the music box was playing on her nightstand, though she was certain she'd left it downstairs.

---

The Last Letter

Thomas had been dead for three years when his wife received his final letter. The postmark was from yesterday, the handwriting unmistakably his. Inside was a single sentence: "Wait for me at our special place."

She knew exactly where he meant—the old oak tree where they'd carved their initials forty years ago.

When she arrived at sunset, she found fresh carving in the bark: "Thank you for waiting. I love you always."

She was alone, but somehow, not lonely anymore.`
          }
        ]
      },
      hindi: {
        title: 'मध्यरात्रि की कहानियां',
        description: 'डरावनी छोटी कहानियों का एक संग्रह जो मन में बना रहता है।',
        pages: [
          {
            id: 'page-7-1-hi',
            pageNumber: 1,
            content: `संगीत बॉक्स

क्लारा ने अपनी दादी के अटारी में संगीत बॉक्स पाया, पुरानी तस्वीरों और पीले पत्रों के बीच धूल भरा और भुला दिया गया। जब उसने छोटी चाबी घुमाई, तो एक नाजुक बैलेरिना एक उदास धुन पर नृत्य करने लगी।

उस रात, उसने एक अंतहीन बॉलरूम में नृत्य करने का सपना देखा।

जब वह जागी, तो संगीत बॉक्स उसकी नाइटस्टैंड पर बज रहा था।

---

अंतिम पत्र

थॉमस को मरे तीन साल हो गए थे जब उसकी पत्नी को उसका अंतिम पत्र मिला। अंदर एक वाक्य था: "हमारी विशेष जगह पर मेरा इंतजार करो।"

वह जानती थी कि उसका मतलब कहां था—पुराना ओक का पेड़ जहां उन्होंने चालीस साल पहले अपने नाम खुदवाए थे।

वह अकेली थी, लेकिन किसी तरह अब अकेली नहीं थी।`
          }
        ]
      },
      hinglish: {
        title: 'Midnight ki Tales',
        description: 'Haunting short stories ka ek collection jo mind mein linger karte hain.',
        pages: [
          {
            id: 'page-7-1-hn',
            pageNumber: 1,
            content: `Music Box

Clara ne apni grandmother ke attic mein music box find kiya, dusty aur forgotten old photographs aur yellowed letters ke beech. Jab usne tiny key wound ki, ek delicate ballerina melancholy tune par dance karne lagi.

Us raat, usne endless ballroom mein dancing ka dream dekha.

Jab woh woke up, music box uski nightstand par play kar raha tha.

---

Last Letter

Thomas ko mare teen years ho gaye the jab uski wife ko uska final letter mila. Inside ek sentence tha: "Hamari special place par mera wait karo."

Woh exactly janti thi uska matlab kahan tha—old oak tree jahan unhone apne initials forty years ago carve kiye the.

Woh alone thi, lekin somehow ab lonely nahi thi.`
          }
        ]
      }
    }
  },
  {
    id: '8',
    title: 'Echoes of Truth',
    author: 'Dr. Margaret Wise',
    cover: book2Cover,
    description: 'A philosophical exploration of existence, consciousness, and human nature.',
    genre: 'Drama / Philosophy',
    pages: [
      {
        id: 'page-8-1',
        pageNumber: 1,
        content: `Chapter 1: The Question of Being

Professor James Hartwell stood before his philosophy class, chalk in hand, facing the eternal question that had plagued humanity since the dawn of consciousness: What does it mean to truly exist?

"Consider this," he began, writing on the blackboard. "You wake up every morning, go about your daily routine, interact with others, make decisions. But are you truly living, or merely existing?"

A student raised her hand. "Professor, isn't that the same thing?"

James smiled—the same question he'd asked his own professor thirty years ago. "Sarah, imagine a tree in a forest. It grows, it responds to its environment, it reproduces. But does it contemplate its existence? Does it question its purpose?"

The classroom fell silent. Outside, the autumn leaves danced in the wind, seemingly without purpose, yet somehow perfectly in tune with the universe.

"The difference between existing and living," James continued, "lies not in our actions, but in our awareness of those actions. In our ability to question, to doubt, to wonder why we are here at all."

But as he spoke these words, James couldn't shake the feeling that someone—or something—was questioning his own existence.`
      }
    ],
    languages: {
      english: {
        title: 'Echoes of Truth',
        description: 'A philosophical exploration of existence, consciousness, and human nature.',
        pages: [
          {
            id: 'page-8-1',
            pageNumber: 1,
            content: `Chapter 1: The Question of Being

Professor James Hartwell stood before his philosophy class, chalk in hand, facing the eternal question that had plagued humanity since the dawn of consciousness: What does it mean to truly exist?

"Consider this," he began, writing on the blackboard. "You wake up every morning, go about your daily routine, interact with others, make decisions. But are you truly living, or merely existing?"

A student raised her hand. "Professor, isn't that the same thing?"

James smiled—the same question he'd asked his own professor thirty years ago. "Sarah, imagine a tree in a forest. It grows, it responds to its environment, it reproduces. But does it contemplate its existence? Does it question its purpose?"

The classroom fell silent. Outside, the autumn leaves danced in the wind, seemingly without purpose, yet somehow perfectly in tune with the universe.

"The difference between existing and living," James continued, "lies not in our actions, but in our awareness of those actions. In our ability to question, to doubt, to wonder why we are here at all."

But as he spoke these words, James couldn't shake the feeling that someone—or something—was questioning his own existence.`
          }
        ]
      },
      hindi: {
        title: 'सत्य की प्रतिध्वनि',
        description: 'अस्तित्व, चेतना और मानव प्रकृति की एक दार्शनिक खोज।',
        pages: [
          {
            id: 'page-8-1-hi',
            pageNumber: 1,
            content: `अध्याय 1: अस्तित्व का प्रश्न

प्रोफेसर जेम्स हार्टवेल अपनी दर्शनशास्त्र कक्षा के सामने खड़े थे, हाथ में चाक, उस शाश्वत प्रश्न का सामना करते हुए जिसने चेतना की शुरुआत से ही मानवता को परेशान किया है: वास्तव में अस्तित्व का क्या मतलब है?

"इस पर विचार करें," उन्होंने ब्लैकबोर्ड पर लिखते हुए शुरुआत की। "आप हर सुबह उठते हैं, अपनी दैनिक दिनचर्या के बारे में जाते हैं। लेकिन क्या आप वास्तव में जी रहे हैं, या केवल अस्तित्व में हैं?"

एक छात्रा ने हाथ उठाया। "प्रोफेसर, क्या यह एक ही बात नहीं है?"

जेम्स मुस्कराए—वही प्रश्न जो उन्होंने तीस साल पहले अपने प्रोफेसर से पूछा था।

"अस्तित्व और जीवन के बीच का अंतर हमारे कार्यों में नहीं, बल्कि उन कार्यों के बारे में हमारी जागरूकता में निहित है।"

लेकिन जैसे ही उन्होंने ये शब्द कहे, जेम्स इस भावना को हिला नहीं सके कि कोई उनके अपने अस्तित्व पर सवाल उठा रहा था।`
          }
        ]
      },
      hinglish: {
        title: 'Truth ki Echoes',
        description: 'Existence, consciousness aur human nature ki ek philosophical exploration.',
        pages: [
          {
            id: 'page-8-1-hn',
            pageNumber: 1,
            content: `Chapter 1: Being ka Question

Professor James Hartwell apni philosophy class ke saamne khade the, haath mein chalk, us eternal question ka face karte hue jo humanity ko dawn of consciousness se plague kar raha hai: truly exist karne ka kya matlab hai?

"Yeh consider karo," unhone blackboard par likhte hue start kiya. "Aap har morning wake up karte hain, daily routine follow karte hain. Lekin kya aap truly living hain, ya merely existing?"

Ek student ne hand raise kiya. "Professor, kya yeh same cheez nahi hai?"

James smile kiye—wahi question jo unhone apne professor se thirty years ago pucha tha.

"Existing aur living ke beech ka difference hamare actions mein nahi, balki un actions ki awareness mein hai."

Lekin jaise hi unhone ye words kehe, James yeh feeling shake nahi kar sake ki koi unke apne existence ko question kar raha tha.`
          }
        ]
      }
    }
  },
  {
    id: '9',
    title: 'The Silent Witness',
    author: 'Detective Maria Santos',
    cover: book3Cover,
    description: 'A gripping true crime investigation into a case that shocked a nation.',
    genre: 'True Crime / Realistic Fiction',
    pages: [
      {
        id: 'page-9-1',
        pageNumber: 1,
        content: `Chapter 1: The Call

It was 3:47 AM when Detective Maria Santos received the call that would haunt her for the rest of her career. The voice on the other end was shaky, barely coherent.

"There's... there's been a murder. The Riverside Mall. Security guard found the body."

Maria had seen her share of crime scenes in fifteen years on the force, but nothing could have prepared her for what she discovered that cold October morning.

The victim was Jennifer Walsh, 28, a local teacher beloved by her students and community. She was found in the employee parking garage, her car still running, purse untouched. No signs of robbery, no obvious motive.

But what made this case different wasn't just the lack of evidence—it was what they found in the security footage. For exactly four minutes and thirty-seven seconds, the cameras showed Jennifer standing alone by her car, talking animatedly to someone who wasn't there.

Or rather, someone the cameras couldn't see.

"Santos," her partner Detective Reynolds called out, holding up a evidence bag. "You need to see this."

Inside was a single white rose with a note attached: "She finally listened."

The case that would consume the next two years of Maria's life had just begun.`
      }
    ],
    languages: {
      english: {
        title: 'The Silent Witness',
        description: 'A gripping true crime investigation into a case that shocked a nation.',
        pages: [
          {
            id: 'page-9-1',
            pageNumber: 1,
            content: `Chapter 1: The Call

It was 3:47 AM when Detective Maria Santos received the call that would haunt her for the rest of her career. The voice on the other end was shaky, barely coherent.

"There's... there's been a murder. The Riverside Mall. Security guard found the body."

Maria had seen her share of crime scenes in fifteen years on the force, but nothing could have prepared her for what she discovered that cold October morning.

The victim was Jennifer Walsh, 28, a local teacher beloved by her students and community. She was found in the employee parking garage, her car still running, purse untouched. No signs of robbery, no obvious motive.

But what made this case different wasn't just the lack of evidence—it was what they found in the security footage. For exactly four minutes and thirty-seven seconds, the cameras showed Jennifer standing alone by her car, talking animatedly to someone who wasn't there.

Or rather, someone the cameras couldn't see.

"Santos," her partner Detective Reynolds called out, holding up a evidence bag. "You need to see this."

Inside was a single white rose with a note attached: "She finally listened."

The case that would consume the next two years of Maria's life had just begun.`
          }
        ]
      },
      hindi: {
        title: 'मूक गवाह',
        description: 'एक रोमांचक सच्चे अपराध की जांच जिसने एक राष्ट्र को हिला दिया।',
        pages: [
          {
            id: 'page-9-1-hi',
            pageNumber: 1,
            content: `अध्याय 1: कॉल

रात के 3:47 बजे जब जासूस मारिया सैंटोस को वह कॉल आई जो उसे अपने बाकी करियर के लिए परेशान करेगी। दूसरी तरफ आवाज कांपती हुई, मुश्किल से सुसंगत थी।

"एक... एक हत्या हुई है। रिवरसाइड मॉल। सिक्यूरिटी गार्ड को शव मिला।"

मारिया ने पंद्रह सालों में अपराध के दृश्य देखे थे, लेकिन उस ठंडी अक्टूबर की सुबह जो उसने खोजा उसके लिए कुछ भी उसे तैयार नहीं कर सकता था।

पीड़िता जेनिफर वॉल्श, 28, एक स्थानीय शिक्षक थी जो अपने छात्रों और समुदाय द्वारा प्रिय थी। वह कर्मचारी पार्किंग गैराज में मिली, उसकी कार अभी भी चल रही थी।

लेकिन जो इस मामले को अलग बनाता था वह सिर्फ सबूतों की कमी नहीं थी—यह वह था जो उन्होंने सुरक्षा फुटेज में पाया।

चार मिनट और सैंतीस सेकंड के लिए, कैमरों ने जेनिफर को अकेले अपनी कार के पास खड़े दिखाया।

मारिया के जीवन के अगले दो साल खाने वाला मामला अभी शुरू हुआ था।`
          }
        ]
      },
      hinglish: {
        title: 'Silent Witness',
        description: 'Ek gripping true crime investigation jo ek nation ko shock kar gaya.',
        pages: [
          {
            id: 'page-9-1-hn',
            pageNumber: 1,
            content: `Chapter 1: The Call

3:47 AM tha jab Detective Maria Santos ko woh call aayi jo usse apne baaki career ke liye haunt karegi. Dusri taraf voice shaky thi, barely coherent.

"There's... ek murder hua hai. Riverside Mall. Security guard ko body mili."

Maria ne fifteen years mein crime scenes dekhe the, lekin kuch bhi usse us cold October morning ke liye prepare nahi kar sakta tha.

Victim Jennifer Walsh, 28, ek local teacher thi jo apne students aur community ki beloved thi. Woh employee parking garage mein mili, uski car abhi bhi running thi.

Lekin jo is case ko different banata tha woh sirf evidence ki lack nahi thi—yeh woh tha jo unhone security footage mein find kiya.

Exactly four minutes aur thirty-seven seconds ke liye, cameras ne Jennifer ko akele apni car ke paas khade dikhaaya.

Maria ki life ke next two years consume karne wala case abhi start hua tha.`
          }
        ]
      }
    }
  }
];
