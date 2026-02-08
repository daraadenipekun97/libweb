import { BookOpen, Download, Sparkles, Moon, Users, Globe } from "lucide-react";
import "./features.css";

const features = [
  {
    icon: Sparkles,
    title: "Personalized Recommendations",
    description: "Get book suggestions tailored to your reading preferences and history.",
  },
  {
    icon: Moon,
    title: "Customizable Reading",
    description: "Adjust fonts, themes, and brightness for your perfect reading experience.",
  },
  {
    icon: Download,
    title: "Offline Reading",
    description: "Download books and read anywhere, anytime without internet connection.",
  },
  {
    icon: BookOpen,
    title: "Vast Library",
    description: "Access thousands of African ebooks, novels, and stories in one place.",
  },
  {
    icon: Users,
    title: "Book Clubs",
    description: "Join vibrant communities and discuss your favorite reads with fellow book lovers.",
  },
  {
    icon: Globe,
    title: "African Voices",
    description: "Discover authentic stories from authors across the African continent.",
  },
];

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container features-container">
        {/* Section Header */}
        <div className="features-header">
          <p className="features-label">Why MyLibri?</p>
          <h2 className="features-title">
            The Best App to Read <span className="text-gradient">African Literature</span>
          </h2>
          <p className="features-description">
            Experience ultimate reading pleasure with our innovative features designed for book lovers like you.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-card"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="feature-icon-wrapper">
                <feature.icon />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
