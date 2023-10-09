import PageBanner from "@/src/components/PageBanner";
import Layout from "@/src/layout/Layout";
import Link from "next/link";
const ProjectList = () => {
  return (
    <Layout>
      {/* Page Banner Start */}
      <PageBanner pageName={"Projects"} />
      {/* Page Banner End */}
      {/* Project List Area start */}
      <section className="project-list-area pt-130 rpt-100 pb-10 rpb-25">
        <div className="container">
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <div>
                <img
                  src="assets/images/projects/gold2.png"
                  alt="Project List"
                />
              </div>
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Creative Work</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Next Commerce <i>Gold Souk</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                A digital platform that showcases luxurious jewellery powered by
                emerging technologies like metaverse and AI.
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Digital Product</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Mobile Application <i>4Everinlove</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                A matrimony application that provides a seamless digital
                alternative to the experience of finding a partner in reality.
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img src="assets/images/projects/4ever.png" alt="Project List" />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img src="assets/images/projects/let.png" alt="Project List" />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Creative Work</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Mobile Application
                    <br />
                    <i>Let's Win</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                A gaming application nested with an algorithm that allows users
                to predict and win on-the-go.
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div>
          {/* <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Digital Product</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Digital Content For <i>Web Development</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sitesy
                voluptatem accusantium doloremque lauda
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/projects/project-list4.jpg"
                alt="Project List"
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div> */}
          {/* <div className="project-item style-two">
            <div className="image wow fadeInLeft delay-0-2s">
              <img
                src="assets/images/projects/project-list5.jpg"
                alt="Project List"
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="content wow fadeInRight delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Creative Work</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Product Design <i>&amp; Branding</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sitesy
                voluptatem accusantium doloremque lauda
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div> */}
          {/* <div className="project-item style-two">
            <div className="content wow fadeInLeft delay-0-2s">
              <Link legacyBehavior href="/projects">
                <a className="category">Digital Product</a>
              </Link>
              <h2>
                <Link legacyBehavior href="/project-details">
                  <a>
                    Digital Content For <i>Web Development</i>
                  </a>
                </Link>
              </h2>
              <hr />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sitesy
                voluptatem accusantium doloremque lauda
              </p>
              <Link legacyBehavior href="/project-details">
                <a className="read-more">
                  Project Details <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
            <div className="image wow fadeInRight delay-0-2s">
              <img
                src="assets/images/projects/project-list6.jpg"
                alt="Project List"
              />
              <Link legacyBehavior href="/project-details">
                <a className="project-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
            </div>
          </div> */}
        </div>
      </section>
      {/* Project List Area end */}
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
export default ProjectList;
