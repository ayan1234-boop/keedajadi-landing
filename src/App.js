import bgImage from './assets/Keedajadibg1.jpg';
import WhatsApp from './assets/whatsapp_icon.png';
import keedajadi from './assets/keedajadi.png';
import check from './assets/check.png';
import fit from './assets/fit.png';
import immune from './assets/immunity.png';
import lungs from './assets/lungs.png';
import ayurvedic from './assets/ayurvedic.png';
import natural from './assets/natural.png';
import couple from './assets/couple.png';
import bottle from './assets/bottle.png';
import CallIcon from './assets/call.png';

function App() {
  return (
    <div className="bg-white text-gray-800 font-sans relative">
      {/* सीमित समय ऑफर बॉक्स */}
      <div className="bg-yellow-200 text-center py-3 px-4 text-sm font-semibold text-red-700">
        🔥 सीमित समय ऑफर: 50% की छूट! अभी ऑर्डर करें
      </div>

      {/* हीरो सेक्शन */}
      <section
        className="relative min-h-screen flex flex-col justify-top items-center text-left  px-6 py-16 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10 z-0"></div>
        <div className="relative z-10 ">
          <h1 className="inline-block bg-black bg-opacity-90 text-4xl md:text-6xl font-bold mb-4 text-green-500 px-6 py-4 rounded-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] transform -translate-x-4">कीड़ा जड़ी – हिमालय की ऊँचाइयों से</h1>
          <p className="text-lg md:text-xl max-w-xl mb-6 text-white"></p>
          <a
            href="https://wa.me/919319267286?text=Hi, I want to buy Keeda Jadi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-700 transition"
          >
            अभी WHATSAPP पर ऑर्डर करें
          </a>
          

        </div>
      </section>

      {/* उत्पाद जानकारी सेक्शन */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">कीड़ा जड़ी क्या है?</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          कीड़ा जड़ी, जिसे कॉर्डिसेप्स सिनेंसिस के नाम से भी जाना जाता है, हिमालय से प्राप्त एक दुर्लभ आयुर्वेदिक जड़ी-बूटी है। सदियों से इसका उपयोग ऊर्जा बढ़ाने, फेफड़ों की क्षमता सुधारने और संपूर्ण जीवन शक्ति बढ़ाने के लिए किया जाता रहा है।
        </p>
        {/* <a
            href="/blog"
            className="text-black underline hover:text-green-300 text-l"
          >
            📖 पूरी जानकारी के लिए यहाँ क्लिक करें
          </a> */}
          
        
        <img
          src={keedajadi}
          alt="उच्च गुणवत्ता की कीड़ा जड़ी"
          className="w-full max-w-md mx-auto rounded-xl shadow"
        />
      </section>

      {/* लाभ सेक्शन */}
      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">कीड़ा जड़ी के लाभ</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                text: 'शक्ति और सहनशक्ति बढ़ाता है',
                img: fit,
              },
              {
                text: 'प्रतिरक्षा प्रणाली और प्राकृतिक सुरक्षा को बढ़ाता है',
                img: immune,
              },
              {
                text: 'फेफड़ों के स्वास्थ्य और सांस लेने में सुधार करता है',
                img: lungs,
              },
              {
                text: 'यौन शक्ति को बढ़ाता है',
                img: couple,
              },
              {
                text: '100% प्राकृतिक – कोई साइड इफेक्ट नहीं',
                img: natural,
              },
              {
                text: 'आयुर्वेदिक ग्रंथों में अनुशंसित',
                img: ayurvedic,
              }
            ].map((benefit, idx) => (
          <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border flex flex-col items-center"
          >
          <img
            src={benefit.img}
            alt="लाभ आइकन"
            className="w-48 h-48 object-contain mb-4"
          />
        <p className="text-base font-medium text-center">{benefit.text}</p>
      </div>
    ))}
  </div>
</section>

      {/* हमें क्यों चुनें सेक्शन */}
      <section className="py-12 px-6 bg-green-50 text-center">
        <h2 className="text-3xl font-semibold mb-6">हमें क्यों चुनें?</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              '100% प्राकृतिक – कोई साइड इफेक्ट नहीं',
              'आयुर्वेदिक ग्रंथों में अनुशंसित',
              'भारत भर में हजारों लोगों द्वारा भरोसेमंद',
              'हिमालय से नैतिक रूप से प्राप्त',
              'कैश ऑन डिलीवरी उपलब्ध',
              '3–5 दिनों में सुरक्षित और तेज़ डिलीवरी'
            ].map((reason, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-xl shadow border hover:shadow-md transition flex items-center justify-center text-center"
          >
            <p className="text-base font-medium">{reason}</p>
          </div>
          ))}
          </div>
      </section>

      {/* उपयोग कैसे करें सेक्शन */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">कैसे करें उपयोग</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          प्रतिदिन भोजन के बाद 1-2 कैप्सूल गुनगुने पानी के साथ लें या स्वास्थ्य विशेषज्ञ की सलाह अनुसार। सर्वोत्तम परिणामों के लिए 1–2 महीने तक नियमित उपयोग करें।
        </p>
      </section>

      {/* ग्राहक प्रशंसापत्र */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">ग्राहक क्या कह रहे हैं</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              text: '“मैंने दो हफ्तों से कीड़ा जड़ी लेना शुरू किया और मुझे पहले से ज्यादा ऊर्जा महसूस हो रही है!”',
              name: 'जेम्स, लॉस एंजेलिस',
              img: 'https://randomuser.me/api/portraits/men/75.jpg'
            },
            {
              text: '“उत्कृष्ट गुणवत्ता। वर्कआउट के लिए मेरी स्टैमिना बढ़ाने में मदद की।”',
              name: 'अंकित, लखनऊ',
              img: 'https://randomuser.me/api/portraits/men/77.jpg'
            },
            {
              text: '“प्रतिरक्षा और फेफड़ों की शक्ति के लिए अत्यधिक अनुशंसित। मुझे बड़ा फर्क महसूस हुआ।”',
              name: 'हर्ष, मुंबई',
              img: 'https://randomuser.me/api/portraits/men/65.jpg'
            },
            {
              text: '“सिर्फ एक हफ्ते में अधिक सक्रिय और ऊर्जावान महसूस किया। शानदार उत्पाद!”',
              name: 'जॉर्ज, टोरंटो',
              img: 'https://randomuser.me/api/portraits/men/66.jpg'
            },
            {
              text: '“वास्तव में काम करता है! मैंने अब तक का सबसे अच्छा आयुर्वेदिक कैप्सूल पाया।”',
              name: 'संदीप, पुणे',
              img: 'https://randomuser.me/api/portraits/men/67.jpg'
            },
          ].map((t, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow text-center">
              <img src={t.img} alt={t.name} className="w-16 h-16 mx-auto rounded-full mb-4 object-cover" />
              <blockquote className="text-base italic mb-2">{t.text}</blockquote>
              <p className="text-sm font-semibold text-gray-700">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* व्हाट्सएप CTA */}
      <section className="py-12 px-6 text-center bg-green-50">
        <h2 className="text-3xl font-semibold mb-4">क्या आप कीड़ा जड़ी ट्राई करने के लिए तैयार हैं?</h2>
        <img
          src={bottle}
          alt="कीड़ा जड़ी बॉटल"
          className="w-[30rem] h-auto mx-auto mb-6 rounded-xl shadow"
        />
        <p className="mb-6 text-lg">अभी WHATSAPP पर ऑर्डर करें। सीमित स्टॉक उपलब्ध है!</p>
        <a
          href="https://wa.me/919319267286?text=Hi, I want to buy Keeda Jadi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 text-white px-6 py-3 rounded-xl shadow hover:bg-green-800 transition"
        >
          अभी ऑर्डर करें
        </a>
      </section>

      {/* अक्सर पूछे जाने वाले प्रश्न */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">अक्सर पूछे जाने वाले प्रश्न</h2>
        <div className="max-w-4xl mx-auto space-y-4 text-left">
          <div>
            <h3 className="font-bold">क्या इसका सेवन सुरक्षित है?</h3>
            <p>हाँ, यह एक प्राकृतिक आयुर्वेदिक जड़ी-बूटी है और निर्देशानुसार सेवन करने पर कोई साइड इफेक्ट नहीं है।</p>
          </div>
          <div>
            <h3 className="font-bold">क्या आप कैश ऑन डिलीवरी ऑफर करते हैं?</h3>
            <p>हाँ, हम भारत भर में कैश ऑन डिलीवरी और ऑनलाइन पेमेंट विकल्प प्रदान करते हैं।</p>
          </div>
          <div>
            <h3 className="font-bold">डिलीवरी कितनी तेज़ है?</h3>
            <p>हम 3–5 कार्यदिवसों में डिलीवरी करते हैं।</p>
          </div>
          <div>
            <h3 className="font-bold">अच्छे परिणाम प्राप्त करने में कितना समय लगेगा?</h3>
            <p>सर्वोत्तम परिणामों के लिए आपको 3 महीने का पूरा कोर्स करना होगा।</p>
          </div>
        </div>
      </section>

      {/* फुटर */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 कीड़ा जड़ी. सर्वाधिकार सुरक्षित।</p>
      </footer>

      {/* स्टिकी व्हाट्सएप बार */}
      <div className="fixed bottom-0 w-full bg-green-600 text-white flex items-center justify-between px-4 py-3 shadow-lg z-50">
        <p className="text-xl">कोई सवाल है? अभी चैट करें!</p>
        <a
          href="https://wa.me/919319267286?text=Hi, I am interested in Keeda Jadi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green text-green-700 font-semibold px-4 py-2 rounded-xl shadow hover:bg-gray-100 transition"
        >
          <img
          src={WhatsApp}
          alt="व्हाट्सएप"
          className="w-12 h-12"
        />
        </a>
      </div>

      {/* फ्लोटिंग व्हाट्सएप आइकन और कॉल आइकन */}
      <div className="fixed top-4 right-4 flex flex-col items-center gap-3 z-50">
        <a
          href="https://wa.me/919319267286?text=Hi, I want to know more about Keeda Jadi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          <img
            src={WhatsApp}
            alt="व्हाट्सएप"
            className="w-12 h-12"
          />
        </a>

        <a
          href="tel:+919319267286"
          className="bg-white-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          <img
            src={CallIcon}
            alt="कॉल"
            className="w-12 h-12"
          />
        </a>
      </div>
    </div>
  );
}

export default App;
