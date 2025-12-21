import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

function ProfilePage({ username, setGlobalUsername, handleLogout }) {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const [editName, setEditName] = useState(username);
  const [editEmail, setEditEmail] = useState(''); 
  const [editPassword, setEditPassword] = useState('');
  const [editTelephone, SetEditTelephone] = useState('');

  useEffect(() => {
    fetch("http://localhost:1234/user-data", { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        if (data.status === "Success") {
          setEditEmail(data.user.email);
          // If you have telephone in backend, set it here:
          // SetEditTelephone(data.user.telephone); 
        }
      })
      .catch(err => console.error("Error loading profile:", err));
  }, []);

  const handleSave = async () => {
    try {
      const response = await fetch("http://localhost:1234/update-profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ 
            username: editName, 
            email: editEmail, 
            password: editPassword,
            telephone: editTelephone
        })
      });

      const data = await response.json();
      
      if (data.status === "Success") {
        alert("Saved successfully!");
        if (setGlobalUsername) setGlobalUsername(editName);
        setEditPassword(""); 
        setIsEditing(false); 
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("Error saving: " + err);
    }
  };

  return (
    <div className="background" style={{ flexDirection: 'column' }}>
        
        <div className="header-bar">
          <div className="logo-container">
             <span className="logo-text">Pimp your grill!</span>
             <div className="Logo"></div>
          </div>

          <div className="header-buttons-container">
            <div className="header-buttons">
              <button onClick={() => navigate('/profile')} style={{ boxShadow: '0 0 0 2px white', borderRadius: '10px', padding: '8px 30px', transition: 'all 0.3s ease' }}>Profile</button>
              <button onClick={() => navigate('/')}>Best Grills</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        </div>








        <div className="ProfileSquare" style={{ marginTop: '120px', height: 'auto', minHeight: '550px' }}>
            
            <div className="FontLogin" style={{ fontSize: '30px' }}>
                {isEditing ? "Edit Your Profile" : "Your Profile"}
            </div>
            <div className="profile-picture" style={{ width: '120px', height: '120px', borderColor: 'white' }}>
                <img src="/src/assets/images/profilepic.png" alt="Profile" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
            </div>

            {/* Content Container */}
            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            {!isEditing ? (
              // --- VIEW MODE ---
              <div style={{ textAlign: 'left', width: '100%', color: 'white', fontSize: '18px', display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '50px' }}>
      
                <div><strong>Username:</strong> {username}</div>
                <div><strong>Email:</strong> {editEmail || "No Email set"}</div>
                <div><strong>Telephone:</strong> {editTelephone || "No phone number"}</div>
                <div><strong>Member Since:</strong> 2025</div>
                
                {/* The Green Button from your CSS */}
                <button 
                  onClick={() => {
                    setEditName(username); 
                    setIsEditing(true);    
                  }} 
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              // --- EDIT MODE ---
              // Inputs automatically use .LoginSquare input[type="..."] styles from your CSS
              <>
                 <input 
                    type="text" 
                    placeholder="Username" 
                    value={editName} 
                    onChange={(e) => setEditName(e.target.value)} 
                 />
                 
                 <input 
                    type="email" 
                    placeholder="Email" 
                    value={editEmail} 
                    onChange={(e) => setEditEmail(e.target.value)} 
                 />

                 {/* Using type="tel" to pick up your phone icon CSS */}
                 <input 
                    type="tel" 
                    placeholder="Telephone" 
                    value={editTelephone} 
                    onChange={(e) => SetEditTelephone(e.target.value)} 
                 />

                 <input 
                    type="password" 
                    placeholder="New Password (Optional)" 
                    value={editPassword} 
                    onChange={(e) => setEditPassword(e.target.value)} 
                 />
        
                 <div style={{ display: 'flex', gap: '15px', width: '100%', justifyContent: 'center' }}>
                    
                    {/* Save Button (Green) */}
                    <button onClick={handleSave} style={{ width: '160px' }}>
                        Save
                    </button>
                    
                    {/* Cancel Button (Override to Red) */}
                    <button 
                        onClick={() => setIsEditing(false)} 
                        style={{ backgroundColor: '#dc3545', width: '160px' }}
                    >
                        Cancel
                    </button>
                 </div>
              </>
            )}
            </div>
        </div>
    </div>
  );
}

export default ProfilePage;