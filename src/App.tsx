import { useEffect } from 'react';
import { Calendar, Clock, Users, Award, TrendingUp, CheckCircle } from 'lucide-react';
import Lenis from 'lenis';

function App() {
  const earlyBirdDeadline = new Date('2025-11-15');
  const today = new Date();
  const isEarlyBird = today <= earlyBirdDeadline;

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#0e1f3e] text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Exceed Learning</h1>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-[#0e1f3e] mb-4 animate-fade-in-up">
            Speak to Lead: The Art of Confident Communication
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the essential skills of confident public speaking and leadership presence in just 4 weeks
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#f7e0e0] rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-[#0e1f3e] mb-6 flex items-center gap-2">
              <Calendar className="text-[#ca3433] animate-float" />
              Course Details
            </h3>
            <div className="space-y-4 text-[#0e1f3e]">
              <div className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                <CheckCircle className="text-[#ca3433] mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">Start Date</p>
                  <p>December 7, 2025</p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                <Clock className="text-[#ca3433] mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">Schedule</p>
                  <p>Every Sunday, 2:00 PM – 4:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                <TrendingUp className="text-[#ca3433] mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">Duration</p>
                  <p>4 weeks of intensive training</p>
                </div>
              </div>
              <div className="flex items-start gap-3 hover:translate-x-1 transition-transform duration-300">
                <Users className="text-[#ca3433] mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-semibold">Format</p>
                  <p>Interactive in-person sessions with live coaching, practice, and feedback</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0e1f3e] text-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-[#ca3433] animate-float" style={{ animationDelay: '0.5s' }} />
              Your Instructor
            </h3>
            <div className="mb-6 flex flex-col items-center">
              <img
                src="/images/speaker.jpg"
                alt="Joseph A. Beauchamp"
                className="w-40 h-40 rounded-full object-cover shadow-lg mb-4 border-4 border-[#f7e0e0]/30"
                loading="lazy"
                decoding="async"
              />
              <p className="text-2xl font-bold mb-2">Joseph A. Beauchamp</p>
              <p className="text-[#f7e0e0] text-lg">MBA, MS</p>
            </div>
            <div className="space-y-3">
              <p className="text-gray-200 leading-relaxed">
                Expert communication coach with years of experience helping teens and adults develop powerful speaking skills and leadership presence.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#ca3433] to-[#a02a29] text-white rounded-2xl p-12 shadow-2xl mb-16 text-center hover:shadow-[0_20px_50px_rgba(202,52,51,0.4)] transition-all duration-300">
          <h3 className="text-3xl font-bold mb-6">Who Should Attend?</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Teens and adults seeking to improve speaking confidence, presentation skills, and leadership presence. Perfect for aspiring leaders, professionals, students, and anyone looking to communicate with impact.
          </p>
        </div>

        <div className="bg-white border-4 border-[#ca3433] rounded-2xl p-12 shadow-2xl text-center max-w-2xl mx-auto hover:shadow-[0_20px_50px_rgba(202,52,51,0.3)] transition-all duration-300">
          <div className="mb-8">
            {isEarlyBird && (
              <div className="inline-block bg-[#ca3433] text-white px-6 py-2 rounded-full font-bold text-lg mb-4 animate-pulse">
                Early Bird Special - Sign Up by November 15!
              </div>
            )}
            <h3 className="text-4xl font-bold text-[#0e1f3e] mb-4">Investment in Your Future</h3>

            <div className="flex items-center justify-center gap-6 mb-6">
              {isEarlyBird && (
                <div className="text-left">
                  <p className="text-gray-500 line-through text-2xl">$439</p>
                  <p className="text-[#ca3433] text-6xl font-bold animate-float">$399</p>
                  <p className="text-lg text-[#0e1f3e] font-semibold">Save $40!</p>
                </div>
              )}
              {!isEarlyBird && (
                <div>
                  <p className="text-[#0e1f3e] text-6xl font-bold animate-float">$439</p>
                </div>
              )}
            </div>
          </div>

          <a
            href="https://buy.stripe.com/7sY5kwcWw9se6FXfF1dfG04"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ca3433] hover:bg-[#a02a29] text-white font-bold py-6 px-12 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-[0_20px_40px_rgba(202,52,51,0.4)]"
          >
            Enroll Now
          </a>

          <p className="text-gray-600 mt-6 text-sm">
            Transform your communication skills in just 4 weeks
          </p>
        </div>

        <div className="mt-16 bg-[#f7e0e0] rounded-lg p-8 max-w-4xl mx-auto animate-fade-in-up stagger-4">
          <h3 className="text-2xl font-bold text-[#0e1f3e] mb-6 text-center">What You'll Gain</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-md">
              <CheckCircle className="text-[#ca3433] mt-1 flex-shrink-0 animate-float" style={{ animationDelay: '0s' }} />
              <div>
                <p className="font-semibold text-[#0e1f3e]">Confident Communication</p>
                <p className="text-gray-700">Speak with authority and clarity in any situation</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-md">
              <CheckCircle className="text-[#ca3433] mt-1 flex-shrink-0 animate-float" style={{ animationDelay: '0.2s' }} />
              <div>
                <p className="font-semibold text-[#0e1f3e]">Leadership Presence</p>
                <p className="text-gray-700">Command attention and inspire others</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-md">
              <CheckCircle className="text-[#ca3433] mt-1 flex-shrink-0 animate-float" style={{ animationDelay: '0.4s' }} />
              <div>
                <p className="font-semibold text-[#0e1f3e]">Presentation Mastery</p>
                <p className="text-gray-700">Deliver powerful, engaging presentations</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-all duration-300 hover:shadow-md">
              <CheckCircle className="text-[#ca3433] mt-1 flex-shrink-0 animate-float" style={{ animationDelay: '0.6s' }} />
              <div>
                <p className="font-semibold text-[#0e1f3e]">Practical Experience</p>
                <p className="text-gray-700">Real-time coaching and personalized feedback</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-[#0e1f3e] text-white py-8 px-4 mt-16">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300">© 2025 Professional Speaking Academy. Transform your voice, transform your future.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
