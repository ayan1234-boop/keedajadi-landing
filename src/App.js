import bgImage from './assets/Keedajadibg1.jpg';
import WhatsApp from './assets/whatsapp_icon.png';
import keedajadi from './assets/keedajadi.png';
import check from './assets/check.png'


function App() {
  return (
    <div className="bg-white text-gray-800 font-sans relative">
      {/* Limited Time Offer Box */}
      <div className="bg-yellow-200 text-center py-3 px-4 text-sm font-semibold text-red-700">
        🔥 Limited Time Offer: Flat ₹200 Off + Free Delivery! Order Now
      </div>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-16 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-green-100">Keeda Jadi – Nature’s Stamina Booster from the Himalayas</h1>
          <p className="text-lg md:text-xl max-w-xl mb-6 text-white"></p>
          <a
            href="https://wa.me/919319267286?text=Hi, I want to buy Keeda Jadi"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-6 py-3 rounded-2xl shadow hover:bg-green-700 transition"
          >
            Order Now on WhatsApp
          </a>
          <p className="mt-4 text-sm text-white">Cash on Delivery Available | 3–5 Day Delivery</p>
        </div>
      </section>

      {/* Product Info Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">What is Keeda Jadi?</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Keeda Jadi, also known as Cordyceps Sinensis, is a rare Ayurvedic herb harvested from the Himalayas. Used for centuries, it is known for boosting energy levels, enhancing lung capacity, and improving overall vitality.
        </p>
        <img
          src={keedajadi}
          alt="High Quality Keeda Jadi Image"
          className="w-full max-w-md mx-auto rounded-xl shadow"
        />
      </section>

      {/* Benefits */}
      <section className="py-12 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">Benefits of Keeda Jadi</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            'Increases Strength & Stamina',
            'Boosts Immunity & Natural Defenses',
            'Improves Lung Health & Breathing',
            'Enhances Sexual Vitality',
            '100% Natural – No Side Effects',
            'Recommended in Ayurvedic Texts'
          ].map((benefit, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition border flex flex-col items-center"
            >
              <img
                src={check}
                alt="Benefit icon"
                className="w-12 h-12 object-contain mb-4"
              />
              <p className="text-base font-medium text-center">{benefit}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-12 px-6 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">How to Use</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Take 1-2 capsules daily after meals with warm water or as directed by a healthcare professional. Consistent use for 1–2 months is recommended for best results.
        </p>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">What Customers Are Saying</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              text: '“I’ve been taking Keeda Jadi for two weeks and I already feel more energetic!”',
              name: 'Rohit, Delhi',
              img: 'https://randomuser.me/api/portraits/men/75.jpg'
            },
            {
              text: '“Excellent quality. Helped boost my stamina for workouts.”',
              name: 'Ankit, Lucknow',
              img: 'https://randomuser.me/api/portraits/men/77.jpg'
            },
            {
              text: '“Highly recommended for immunity and lung strength. I feel a big difference.”',
              name: 'Harsh, Mumbai',
              img: 'https://randomuser.me/api/portraits/men/65.jpg'
            },
            {
              text: '“Felt more active and energetic in just a week. Great product!”',
              name: 'Ramesh, Jaipur',
              img: 'https://randomuser.me/api/portraits/men/66.jpg'
            },
            {
              text: '“Really works! Best Ayurvedic capsule I’ve tried.”',
              name: 'Sandeep, Pune',
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

      {/* WhatsApp CTA Again */}
      <section className="py-12 px-6 text-center bg-green-50">
        <h2 className="text-3xl font-semibold mb-4">Ready to Try Keeda Jadi?</h2>
        <p className="mb-6 text-lg">Click below to order directly via WhatsApp. Limited stock available!</p>
        <a
          href="https://wa.me/919319267286?text=Hi, I want to buy Keeda Jadi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 text-white px-6 py-3 rounded-xl shadow hover:bg-green-800 transition"
        >
          Order Now on WhatsApp
        </a>
      </section>

      {/* FAQ */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">FAQs</h2>
        <div className="max-w-4xl mx-auto space-y-4 text-left">
          <div>
            <h3 className="font-bold">Is this safe to consume?</h3>
            <p>Yes, it’s a naturally occurring Ayurvedic herb with no side effects when taken as directed.</p>
          </div>
          <div>
            <h3 className="font-bold">Do you offer COD?</h3>
            <p>Yes, we offer Cash on Delivery and online payment options across India.</p>
          </div>
          <div>
            <h3 className="font-bold">How fast is delivery?</h3>
            <p>We deliver in 3–5 business days via trusted courier partners.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Keeda Jadi. All rights reserved.</p>
      </footer>

      {/* Sticky WhatsApp Bar */}
      <div className="fixed bottom-0 w-full bg-green-600 text-white flex items-center justify-between px-4 py-3 shadow-lg z-50">
        <p className="text-sm">Have questions? Chat with us now!</p>
        <a
          href="https://wa.me/919319267286?text=Hi, I am interested in Keeda Jadi"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-green-700 font-semibold px-4 py-2 rounded-xl shadow hover:bg-gray-100 transition"
        >
          WhatsApp Us
        </a>
      </div>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/919319267286?text=Hi, I want to know more about Keeda Jadi"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-4 right-4 bg-white-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition z-50"
      >
        <img
          src={WhatsApp}
          alt="WhatsApp"
          className="w-12 h-12"
        />
      </a>
    </div>
  );
}

export default App;
