import React from 'react';

function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-content">
        <h2>Meet Our Team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        
        <div className="team-grid">
          <div className="team-member">
            <img src="../assets/team-member-1.png" alt="Team Member" />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          {/* Repeat team members as needed */}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
