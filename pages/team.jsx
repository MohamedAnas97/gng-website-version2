import PageBanner from "@/src/components/PageBanner";
import TeamSkills from "@/src/components/TeamSkills";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const Team = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"Expert Team"} />
      {/* Page Banner End */}
      {/* Skill Area start */}
      <section className="skill-area py-130 rpt-100 rpb-60 rel z-1">
        <div className="container container-1210">
          <div className="row gap-120 align-items-center justify-content-between">
            <div className="col-lg-5">
              <div className="skill-image wow fadeInUp delay-0-2s">
                <img src="assets/images/team/skill-left.png" alt="Skill" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="skill-content pt-40 rpt-60 wow fadeInUp delay-0-4s">
                <div className="section-title mb-40">
                  <span className="sub-title mb-15">Best Skills</span>
                  <h2>We Have Lot’s Experience and Professionals</h2>
                </div>
                <p>
                  Similique sunin culpa qui officia deserunt mollitia animi est
                  laborum et dolorum fuga. Et harum quidem rerum facilis esty
                  expedita distinctioam nobis est eligendi optio cumquey
                </p>
                <TeamSkills />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Skill Area end */}
      {/* Team Area start */}
      <section
        className="team-page-area pt-130 rpt-100 pb-70 rpb-40 rel"
        style={{ backgroundImage: "url(assets/images/hero/hero-two-bg.png)" }}
      >
        <div className="container container-1290">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-title text-center mb-55 wow fadeInUp delay-0-2s">
                <span className="sub-title mb-20">Team Members</span>
                <h2>Meet Our Professionals Team</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <div className="image shelly-color">
                  <img src="assets/images/team/shel.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Sheley Grover</h4>
                  <span>CEO & Founder</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <div className="image kenan-color">
                  <img src="assets/images/team/madhav.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Madhav Grover </h4>
                  <span> Managing Director</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <div className="image benzy-color">
                  <img src="assets/images/team/benzy_.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Benzy Aman</h4>
                  <span>Chief Technology Officer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <div className="image kenan-color">
                  <img
                    src="assets/images/team/kenan (1).png"
                    alt="Team Member"
                  />
                </div>
                <div className="content">
                  <h4>Kenan Alzaidi</h4>
                  <span>Project Manager</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <div className="image marium-color">
                  <img src="assets/images/team/marium.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Maryam Babar Muhammad</h4>
                  <span>Head Of Innovations</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <div className="image linto-color">
                  <img src="assets/images/team/linto.png" alt="Team Member" />
                </div>
                <div className="content ">
                  <h4>Linto vattoly</h4>
                  <span>Metaverse Developer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-2s">
                <div className="image shoaib-color">
                  <img src="assets/images/team/shoaib.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Muhammad Shoaib</h4>
                  <span>Web Developer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-4s">
                <div className="image souhardha-color">
                  <img
                    src="assets/images/team/souharda.png"
                    alt="Team Member"
                  />
                </div>
                <div className="content">
                  <h4>Souharda Mukherjee</h4>
                  <span>UI/UX Manager</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <div className="image sakara-color">
                  <img src="assets/images/team/Shakara.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Shakara Sabir Ansari</h4>
                  <span>Head of Sales & Marketing</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <div className="image shelly-color">
                  <img src="assets/images/team/omar.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Muhammad Omar</h4>
                  <span>Mobile Application Developer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <div className="image noor-color">
                  <img src="assets/images/team/noor.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Noor Muhammad</h4>
                  <span>Blockchain Developer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <div className="image kenan-color">
                  <img src="assets/images/team/anas.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Mohamed Anas</h4>
                  <span>Frontend Developer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <div className="image">
                  <img src="assets/images/team/sathi.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Sathiya Priyan</h4>
                  <span>Game Developer</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="team-member style-two wow fadeInUp delay-0-6s">
                <div className="image jaz-color">
                  <img src="assets/images/team/jaz.png" alt="Team Member" />
                </div>
                <div className="content">
                  <h4>Jazmine Sebastian</h4>
                  <span>HR & Admin</span>
                  {/* <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link> */}
                </div>
                {/* <div className="btn-social">
                  <Link legacyBehavior href="/team-details">
                    <a className="read-more">
                      <span>View Details</span>{" "}
                      <i className="far fa-arrow-right" />
                    </a>
                  </Link>
                  <div className="social-style-two">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Area end */}
      {/* Work With Area start */}
      <section className="work-with-area pb-150 rpb-145 rel z-1">
        <div className="container">
          <div className="row justify-content-center pb-45 rpb-25">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center wow fadeInUp delay-0-2s">
                <span className="sub-title mb-15">Work With Us</span>
                <h2>Have Any Projects On Minds! Feel Free to Contact Us</h2>
                <Link legacyBehavior href="/contact">
                  <a className="explore-more text-start mt-30">
                    <i className="fas fa-arrow-right" />{" "}
                    <span>Explore more</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <span className="big-text light-opacity">Let’s Work Together</span>
      </section>
      {/* Work With Area end */}
      {/* footer area start */}
    </Layout>
  );
};
export default Team;
