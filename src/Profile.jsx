function Profile() {
  return (
    <>
      <div className="bg-div">
        <div className="Profile-container">
          <div className="profile-picture"></div>
          <div className="profile-details">
            <h2 style={{ marginBottom: "30px" }}>Personal Details</h2>
            <div className="grid-class">
              <div className="user-details">
                <div className="fixed-width">
                  <i class="fa-solid fa-address-card"></i>
                </div>
                <p>Abhishek Kabi</p>
              </div>
              <div className="user-details">
                <div className="fixed-width">
                  <i class="fa-solid fa-cake-candles"></i>
                </div>
                <p>21/December/1991</p>
              </div>
              <div className="user-details">
                <div className="fixed-width">
                  <i class="fa-solid fa-city"></i>
                </div>
                <p>Bangalore, India.</p>
              </div>
              <div className="user-details">
                <div className="fixed-width">
                  <i class="fa-solid fa-house"></i>
                </div>
                <p>Siliguri, West Bengal.</p>
              </div>
              <div className="user-details">
                <div className="fixed-width">
                  <i class="fa-solid fa-building-columns"></i>
                </div>
                <p>B.Tech (IT) VIT University (Vellore).</p>
              </div>

              <div className="user-details">
                <div className="fixed-width">
                  <i class="fa-brands fa-square-whatsapp"></i>
                </div>
                <p>+919332522166</p>
              </div>
            </div>
          </div>

          <div className="profile-details" style={{ marginTop: "80px" }}>
            <h2 style={{ marginBottom: "30px" }}>Technical Skills</h2>
            <div className="grid-class">
              <div className="user-details">
                <div className="fixed-width">
                  <i class="fa-brands fa-js"></i>
                </div>
                <p>JavaScript (Asynchronous Programming)</p>
              </div>
              <div className="user-details">
                <div className="fixed-width">
                  <i class="fa-brands fa-react"></i>
                </div>
                <p>React (Components, Props, States...)</p>
              </div>
              <div className="user-details">
                <div className="fixed-width">
                  <i class="fa-brands fa-css3-alt"></i>
                </div>
                <p>CSS</p>
              </div>
              <div className="user-details">
                <div className="fixed-width">
                  <i class="fa-brands fa-html5"></i>
                </div>
                <p>HTML 5</p>
              </div>
              <div className="user-details">
                <div className="fixed-width">
                  <i class="fa-brands fa-git-alt"></i>
                </div>
                <p>Git</p>
              </div>

              <div className="user-details">
                <div className="fixed-width">
                  <i class="fa-brands fa-git-alt"></i>
                </div>
                <p>Node.js</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "100px" }}></div>
        </div>
      </div>
    </>
  );
}

export default Profile;
