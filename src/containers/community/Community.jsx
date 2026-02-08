import React from "react";
import "./community.css";

import CommunityImg from "../../assets/images/Communitypng.png";
import { AiFillFacebook, AiOutlineWhatsApp, AiOutlineMessage } from "react-icons/ai";
import { MessageCircle, Users } from "lucide-react";


const Community = () => {
  return (
    <section id="community" className="community-section">
      <div className="container community-container">
        <div className="community-grid">
          {/* Content */}
          <div className="community-content">
            <p className="community-label">Join the Community</p>
            <h2 className="community-title">
              Connect with <span className="text-gradient">Book Lovers</span> Across Africa
            </h2>
            <p className="community-description">
              Join our WhatsApp or Facebook community of book enthusiasts to stay updated on new releases, author interviews, and literary events.
            </p>

            <div className="community-buttons">
              <button className="btn btn--hero btn--lg">
                <MessageCircle />
                Join WhatsApp Group
              </button>
              <button className="btn btn--outline btn--lg">
                <Users />
                Join Facebook Group
              </button>
            </div>

            {/* Community Stats */}
            <div className="community-stats">
              <div className="community-avatars">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="community-avatar"
                    style={{ zIndex: 5 - i }}
                  />
                ))}
              </div>
              <div>
                <p className="community-members-count">50,000+</p>
                <p className="community-members-label">Community Members</p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="community-illustration">
            <div className="community-card-container">
              {/* Background decoration */}
              <div className="community-card-bg-1" />
              <div className="community-card-bg-2" />
              
              {/* Main Card */}
              <div className="community-card">
                <div className="community-chat-bubbles">
                  {/* Chat bubbles mockup */}
                  <div className="community-chat-row">
                    <div className="community-chat-avatar community-chat-avatar--primary" />
                    <div className="community-chat-bubble community-chat-bubble--left">
                      <p>Just finished "Born a Crime" - absolutely life-changing! 📚✨</p>
                    </div>
                  </div>
                  
                  <div className="community-chat-row community-chat-row--reverse">
                    <div className="community-chat-avatar community-chat-avatar--gold" />
                    <div className="community-chat-bubble community-chat-bubble--right">
                      <p>Same! Trevor Noah's storytelling is incredible. What's everyone reading next?</p>
                    </div>
                  </div>
                  
                  <div className="community-chat-row">
                    <div className="community-chat-avatar community-chat-avatar--accent" />
                    <div className="community-chat-bubble community-chat-bubble--left">
                      <p>I'm starting "Anthills of the Savannah" by Chinua Achebe! 🇳🇬</p>
                    </div>
                  </div>
                  
                  <div className="community-input-row">
                    <div className="community-input-field">
                      <p>Share your thoughts...</p>
                    </div>
                    <button className="community-send-btn">
                      <MessageCircle />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
