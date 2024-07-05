
import React from 'react'

function Page() {
  return (
   <> 
  <section className="skull_space">
  <div className="container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="skull_title big text-center">
            <h2>CAREERS</h2>
            <p>
              <big>Sign Up For Job Alerts!</big>
            </p>
          </div>
          <div className="career_form_box">
            <form>
              <div className="row">
                <div className="col-md-12">
                  <div className="input_box_v2">
                    <input type="text" placeholder="Name" required="" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input_box_v2">
                    <input type="email" placeholder="Email" required="" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input_box_v2">
                    <label>Upload Your Resume</label>
                    <input type="file" placeholder="Email" required="" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="input_box_v2">
                    <button type="submit" className="theme_btn dark full">
                      SEND
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="iframe_video">
            <iframe
              width="100%"
              height={360}
              src="https://www.youtube.com/embed/-zBd6cUq3ZM"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            />
          </div>
          <div className="iframe_video">
            <iframe
              width="100%"
              height={360}
              src="https://www.youtube.com/embed/tYx9-g6duck"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  </>
  )
}

export default Page