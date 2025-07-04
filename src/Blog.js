import React from 'react';

function Blog() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-green-600 text-white py-4 px-6">
        <h1 className="text-3xl font-bold">Keeda Jadi Blog</h1>
        <p className="text-sm">Insights, benefits & usage tips</p>
      </header>

      <main className="py-12 px-6 max-w-4xl mx-auto space-y-12">
        {/* Example Article */}
        <article>
          <h2 className="text-2xl font-semibold mb-2">What is Keeda Jadi?</h2>
          <p className="text-gray-700">
            Keeda Jadi, or Cordyceps Sinensis, is a rare fungus found in the Himalayas. Used in Ayurvedic medicine for centuries, it's known for increasing energy, enhancing lung function, and improving immunity.
          </p>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-2">7 Amazing Benefits of Keeda Jadi</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Boosts stamina and endurance</li>
            <li>Improves lung health</li>
            <li>Enhances sexual performance</li>
            <li>Strengthens immune system</li>
            <li>Helps manage stress and fatigue</li>
            <li>Recommended in Ayurvedic texts</li>
            <li>Completely natural with no side effects</li>
          </ul>
        </article>

        <article>
          <h2 className="text-2xl font-semibold mb-2">How to Use Keeda Jadi Capsules</h2>
          <p className="text-gray-700">
            Take 1–2 capsules daily after meals with warm water. Consistency is key — best results are seen after 4–8 weeks of regular use.
          </p>
        </article>
      </main>

      <footer className="bg-gray-800 text-white text-center py-6">
        <p>&copy; 2025 Keeda Jadi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Blog;
