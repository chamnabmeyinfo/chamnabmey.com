import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';

export default function HomePage() {
  return (
    <>
      <ThemeToggle />
          {/* tpm-header-area start */}
    <header className="tmp-header-area-start header-one header--sticky header--transparent">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header-content">
                        <div className="logo">
                            <a href="index.html">
                                <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "800", fontSize: "24px", letterSpacing: "-0.5px", textDecoration: "none" }}><span className="theme-gradient">CHAMNAB</span> <span style={{ color: "inherit" }}>MEY</span></span>
                                
                            </a>
                        </div>
                        <nav className="tmp-mainmenu-nav d-none d-xl-block">
                            <ul className="tmp-mainmenu onepagenav">
                                <li>
                                    <a href="#home">Home
                                    </a>
                                </li>
                                <li>
                                    <a href="#about">About</a>
                                </li>
                                <li>
                                    <a href="#service">Services
                                    </a>
                                </li>
                                <li>
                                    <a href="#portfolio">Project
                                    </a>
                                </li>
                                <li>
                                    <a href="#blog">Blog
                                    </a>
                                </li>
                                <li>
                                    <a href="#contacts">Contact</a>
                                </li>
                            </ul>

                        </nav>
                        <div className="tmp-header-right">
                            <div className="social-share-wrapper d-none d-md-block">
                                <div className="social-link">
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                </div>
                            </div>
                            <div className="actions-area">
                                <div className="tmp-side-collups-area d-none d-xl-block">
                                    <button className="tmp-menu-bars tmp_button_active"><i className="fa-regular fa-bars-staggered"></i></button>
                                </div>
                                <div className="tmp-side-collups-area d-block d-xl-none">
                                    <button className="tmp-menu-bars humberger_menu_active"><i className="fa-regular fa-bars-staggered"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    {/* tpm-header-area end */}

    <div className="d-none d-xl-block">
        <div className="tmp-sidebar-area tmp_side_bar">
            <div className="inner">
                <div className="top-area">
                    <a href="index.html" className="logo">
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "800", fontSize: "24px", letterSpacing: "-0.5px", textDecoration: "none" }}><span className="theme-gradient">CHAMNAB</span> <span style={{ color: "inherit" }}>MEY</span></span>
                        
                    </a>
                    <div className="close-icon-area">
                        <button className="tmp-round-action-btn close_side_menu_active">
                            <i className="fa-sharp fa-light fa-xmark"></i>
                        </button>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="image-area-feature">
                        <a href="index.html">
                            <img src="/assets/images/logo/man.png" alt="personal-logo" />
                        </a>
                    </div>
                    <h5 className="title mt--30">Freelancer delivering exceptional Webflow, and Next.js solutions.</h5>
                    <p className="disc">I am a skilled freelancer specializing in Webflow development, Figma design, and Next.js projects. I deliver creative, dynamic, and user-centric web solutions.
                    </p>
                    <div className="short-contact-area">
                        {/* single contact information */}
                        <div className="single-contact">
                            <i className="fa-solid fa-phone"></i>
                            <div className="information tmp-link-animation">
                                <span>Call Now</span>
                                <a href="#" className="number">+92 (8800) - 98670</a>
                            </div>
                        </div>
                        {/* single contact information end */}

                        {/* single contact information */}
                        <div className="single-contact">
                            <i className="fa-solid fa-envelope"></i>
                            <div className="information tmp-link-animation">
                                <span>Mail Us</span>
                                <a href="#" className="number">example@info.com</a>
                            </div>
                        </div>
                        {/* single contact information end */}

                        {/* single contact information */}
                        <div className="single-contact">
                            <i className="fa-solid fa-location-crosshairs"></i>
                            <div className="information tmp-link-animation">
                                <span>My Address</span>
                                <span className="number">66 Broklyant, New York 3269</span>
                            </div>
                        </div>
                        {/* single contact information end */}
                    </div>
                    {/* social area start */}
                    <div className="social-wrapper mt--20">
                        <span className="subtitle">find with me</span>
                        <div className="social-link">
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        </div>
                    </div>
                    {/* social area end */}
                </div>
            </div>
        </div>
        <a className="overlay_close_side_menu close_side_menu_active" href="javascript:void(0);"></a>
    </div>

    <div className="d-block d-xl-none">
        <div className="tmp-popup-mobile-menu">
            <div className="inner">
                <div className="header-top">
                    <div className="logo">
                        <a href="index.html" className="logo-area">
                            <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "800", fontSize: "24px", letterSpacing: "-0.5px", textDecoration: "none" }}><span className="theme-gradient">CHAMNAB</span> <span style={{ color: "inherit" }}>MEY</span></span>
                            
                        </a>

                    </div>
                    <div className="close-menu">
                        <button className="close-button tmp-round-action-btn">
                            <i className="fa-sharp fa-light fa-xmark"></i>
                        </button>
                    </div>
                </div>
                <ul className="tmp-mainmenu onepagenav">
                    <li>
                        <a href="#home">Home
                        </a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#service">Services
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio">Project
                        </a>
                    </li>
                    <li>
                        <a href="#blog">Blog
                        </a>
                    </li>
                    <li>
                        <a href="#contacts">Contact</a>
                    </li>
                </ul>


                <div className="social-wrapper mt--40">
                    <span className="subtitle">find with me</span>
                    <div className="social-link">
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    </div>
                </div>
                {/* social area end */}



            </div>
        </div>
    </div>

    {/* tmp banner area start */}
    <div className="rpp-banner-two-area" id="home">
        <div className="container">
            <div className="banner-two-main-wrapper">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="banner-right-content">
                            <div className="main-img">
                                <img className="tmp-scroll-trigger tmp-zoom-in animation-order-1" src="/images/chamnab-mey.jpg" alt="Chamnab Mey" style={{ borderRadius: "24px", maxHeight: "560px", width: "100%", objectFit: "cover", boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)" }} />
                                <h2 className="banner-big-text-1 up-down-2">Digital Growth</h2>
                                <h2 className="banner-big-text-2 up-down">Digital Growth</h2>
                                <div className="benner-two-bg-red-img">
                                    <img src="/assets/images/banner/banner-user-image-two-red-bg.png" alt="red-img" />
                                </div>
                                <div className="logo-under-img-wrap">
                                    <div className="logo-under-img">
                                        <img src="/assets/images/banner/logo-under-image.png" alt="logo-under-image" />
                                    </div>
                                    <div className="logo-under-img-2">
                                        <img src="/assets/images/banner/logo-under-image-2.png" alt="logo-under-image" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1 mt--100">
                        <div className="inner">
                            <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">I am</span>
                            <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                                Chamnab Mey, a Senior <br />
                                <span className="header-caption">
                                    <span className="cd-headline clip is-full-width">
                                        <span className="cd-words-wrapper">
                                            <b className="is-visible theme-gradient">Digital Marketer</b>
                                            <b className="is-hidden theme-gradient">Growth Strategist</b>
                                            <b className="is-hidden theme-gradient">Meta Ads Specialist</b>
                                            <b className="is-hidden theme-gradient">Google Ads Buyer</b>
                                            <b className="is-hidden theme-gradient">Web Developer</b>
                                        </span>
                                </span>
                                </span>
                            </h1>
                            <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3"> Senior Digital Marketing Strategist & Performance Marketer with 10+ years scaling e-commerce, real estate, and retail brands through full-funnel Meta & Google campaigns and conversion web architecture.
                            </p>
                            <div className="button-area-banner-two tmp-scroll-trigger tmp-fade-in animation-order-4">

                                <a className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon" href="/Resume-CHAMNAB-MEY.pdf" target="_blank" download="Resume-CHAMNAB-MEY.pdf">
                                    <div className="icon-reverse-wrapper">
                                        <span className="btn-text">Download Resume</span>
                                        <div className="btn-hack"></div>
                                        <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                        <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                        <span className="btn-icon"><i className="ffa-sharp fa-regular fa-arrow-right"></i></span>
                                        <span className="btn-icon"><i className="ffa-sharp fa-regular fa-arrow-right"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div className="find-me-on tmp-scroll-trigger tmp-fade-in animation-order-5">
                                <h2 className="find-me-on-title">Find me on</h2>
                                <div className="social-link banner">
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    {/* tmp banner area end */}

    {/* tmp text para start */}
    <div className="about-content-area">
        <div className="container tmp-section-gap">
            <div className="text-para-doc-wrap">
                <h2 className="text-para-documents tmp-scroll-trigger tmp-fade-in tmp-title-split-2 animation-order-1">A personal
                    <span>portfolio</span> is a collection of your work, that is aa
                    go achievements, and skills that highlights <span>web design</span> in your is abilities and
                    professional growth. It serves as A personal to a portfolio in <span>since 2009</span> a collection
                    of
                    your work
                </h2>
                <div className="right-bg-text-para">
                    <img src="/assets/images/banner/right-bg-text-para-doc.png" alt="" />
                </div>
                <div className="left-bg-text-para">
                    <img src="/assets/images/banner/left-bg-text-para-doc.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    {/* tmp text para end */}

    {/* tmp About Me Start */}
    <section className="about-us-area" id="about">
        <div className="container">
            <div className="row align-items-center g-5">
                <div className="col-lg-6">
                    <div className="about-us-left-content-wrap">
                        <div className="years-of-experience-card tmponhover active tmp-scroll-trigger tmp-fade-in animation-order-1">
                            <h3 className="counter card-title"><span className="odometer" data-count="10">00</span>+
                            </h3>
                            <div className="tmp-light light-top-left"></div>
                            <p className="card-para">years of experience</p>
                        </div>
                        <div className="design-card tmponhover tmp-scroll-trigger tmp-fade-in animation-order-2">
                            <div className="design-card-img">
                                <div className="icon"><i className="fa-sharp fa-thin fa-lock"></i></div>
                            </div>
                            <div className="tmp-light light-top-left"></div>
                            <div className="card-info">
                                <h3 className="card-title">Ui/Ux Design</h3>
                                <p className="card-para">241 Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* bg-vactor-one */}
                <div className="col-lg-6">
                    <div className="about-us-right-content-wrap">
                        <div className="section-head text-align-left mb--50">
                            <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <span className="subtitle theme-gradient">About Me</span>
                            </div>
                            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Driving Measurable Growth <br /> Through Data & Performance</h2>
                            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">With over 10 years of leadership in digital marketing and web development, I bridge the gap between creative acquisition and technical architecture, helping businesses scale predictably.</p>
                        </div>
                        <div className="about-us-section-card row g-5 animation-action-2">

                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="about-us-card tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-4 active">
                                    <div className="card-head with-flex">
                                        <div className="logo-img">
                                            <img src="/assets/images/about/logo-1.svg" alt="logo" />
                                        </div>
                                        <h3 className="card-title">Business</h3>
                                    </div>
                                    <div className="tmp-light light-top-left"></div>
                                    <p className="card-para">Each one showcases my approach
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="about-us-card tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-5">
                                    <div className="card-head with-flex">
                                        <div className="logo-img">
                                            <img src="/assets/images/about/logo-2.svg" alt="logo" />
                                        </div>
                                        <h3 className="card-title">Partners</h3>
                                    </div>
                                    <div className="tmp-light light-top-left"></div>
                                    <p className="card-para">Business consulting consul us to a provide
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className="about-btn mt--40 tmp-scroll-trigger tmp-fade-in animation-order-6">
                            <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon" href="#">
                                <div className="icon-reverse-wrapper">
                                    <span className="btn-text">Read More About Me</span>
                                    <div className="btn-hack"></div>
                                    <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                    <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                    <span className="btn-icon"><i className="fa-regular fa-arrow-down"></i></span>
                                    <span className="btn-icon"><i className="fa-regular fa-arrow-down"></i></span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* tmp About Me end */}


    <section className="resume-section tmp-section-gapTop" id="resume-section">
        <div className="container">
            <div className="row animation-action-3">
                <div className="col-md-6">
                    <div className="section-header mb--50 tmp-scroll-trigger tmp-fade-in animation-order-1">
                        <h2 className="section-title"><i className="fa-regular fa-award"></i> My Experience</h2>
                    </div>

                    <div className="resume-widget">
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2022 -
                                    Present</div>
                                <h3 className="resume-title">Senior Marketing Strategist & Web Architect</h3>
                                <div className="institute">Freelance Senior Strategist (Phnom Penh)</div>
                            </div>
                        </div>
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-2">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2022 -
                                    2022</div>
                                <h3 className="resume-title">Web Developer</h3>
                                <div className="institute">Riich Me Co., LTD / EPOS-GODIGITAL</div>
                            </div>
                        </div>
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-3">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2020 -
                                    2022</div>
                                <h3 className="resume-title">General Manager & Marketing Lead</h3>
                                <div className="institute">KHB MEDIA PLC</div>
                            </div>
                        </div>
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation mb--0 tmp-scroll-trigger tmp-fade-in animation-order-4">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2016 -
                                    2019</div>
                                <h3 className="resume-title">Web Developer & Digital Marketer</h3>
                                <div className="institute">MEN SARUN MDR / Solis Cambodia</div>
                            </div>
                        </div>



                    </div>
                </div>

                <div className="col-md-6">
                    <div className="section-header mb--50 tmp-scroll-trigger tmp-fade-in animation-order-1">
                        <h2 className="section-title"> <i className="fa-regular fa-graduation-cap"></i> My Education</h2>
                    </div>

                    <div className="resume-widget">
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2020 -
                                    2023</div>
                                <h3 className="resume-title">Bachelor in IT Management</h3>
                                <div className="institute">Setec Institute of Management (IT)</div>
                            </div>
                        </div>
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-2">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2016 -
                                    2020</div>
                                <h3 className="resume-title">Information Technology Foundation</h3>
                                <div className="institute">International University (IU), Phnom Penh</div>
                            </div>
                        </div>
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-3">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2012 -
                                    2015</div>
                                <h3 className="resume-title">Performance Marketing & Meta CAPI</h3>
                                <div className="institute">Meta Certified Media Buying Professional</div>
                            </div>
                        </div>
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation mb--0 tmp-scroll-trigger tmp-fade-in animation-order-4">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2010 -
                                    2011</div>
                                <h3 className="resume-title">Google PPC & Analytics Mastery</h3>
                                <div className="institute">Google Ads Search & Measurement Certified</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* tmp skill area start */}
    <div className="tmp-skill-area tmp-section-gapTop" id="service">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6">
                    <div className="progress-wrapper">
                        <div className="content">
                            <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                Design Skill
                            </h2>
                            {/* Start Single Progress Charts */}
                            <div className="progress-charts">
                                <h6 className="heading heading-h6">
                                    PHOTOSHOT</h6>
                                <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: "100%", visibility: "visible", animationDuration: "0.5s", animationDelay: "0.3s", animationName: "fadeInLeft" }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                        <span className="percent-label">100%</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Progress Charts */}

                            {/* Start Single Progress Charts */}
                            <div className="progress-charts">
                                <h6 className="heading heading-h6">
                                    FIGMA</h6>
                                <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{ width: "95%", visibility: "visible", animationDuration: "0.6s", animationDelay: "0.4s", animationName: "fadeInLeft" }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                        <span className="percent-label">95%</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Progress Charts */}

                            {/* Start Single Progress Charts */}
                            <div className="progress-charts">
                                <h6 className="heading heading-h6">
                                    ADOBE XD</h6>
                                <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{ width: "60%", visibility: "visible", animationDuration: "0.7s", animationDelay: "0.5s", animationName: "fadeInLeft" }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                        <span className="percent-label">60%</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Progress Charts */}

                            {/* Start Single Progress Charts */}
                            <div className="progress-charts">
                                <h6 className="heading heading-h6">
                                    ADOBE ILLUSTRATOR</h6>
                                <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{ width: "70%", visibility: "visible", animationDuration: "0.8s", animationDelay: "0.5s", animationName: "fadeInLeft" }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                        <span className="percent-label">70%</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Progress Charts */}

                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="progress-wrapper">
                        <div className="content">
                            <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                Development Skill
                            </h2>
                            {/* Start Single Progress Charts */}
                            <div className="progress-charts">
                                <h6 className="heading heading-h6">
                                    HTML</h6>
                                <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{ width: "100%", visibility: "visible", animationDuration: "0.5s", animationDelay: "0.3s", animationName: "fadeInLeft" }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                        <span className="percent-label">100%</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Progress Charts */}

                            {/* Start Single Progress Charts */}
                            <div className="progress-charts">
                                <h6 className="heading heading-h6">
                                    CSS</h6>
                                <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" style={{ width: "95%", visibility: "visible", animationDuration: "0.6s", animationDelay: "0.4s", animationName: "fadeInLeft" }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                        <span className="percent-label">95%</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Progress Charts */}

                            {/* Start Single Progress Charts */}
                            <div className="progress-charts">
                                <h6 className="heading heading-h6">
                                    Javascript</h6>
                                <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{ width: "60%", visibility: "visible", animationDuration: "0.7s", animationDelay: "0.5s", animationName: "fadeInLeft" }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                        <span className="percent-label">60%</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Progress Charts */}

                            {/* Start Single Progress Charts */}
                            <div className="progress-charts">
                                <h6 className="heading heading-h6">
                                    Wordpress</h6>
                                <div className="progress">
                                    <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" style={{ width: "70%", visibility: "visible", animationDuration: "0.8s", animationDelay: "0.5s", animationName: "fadeInLeft" }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                                        <span className="percent-label">70%</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Progress Charts */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* tmp skill area end */}

    {/* tmp Latest Portfolio Start */}
    <section className="latest-portfolio-area custom-column-grid tmp-section-gap" id="portfolio">
        <div className="container">
            <div className="section-head mb--60">
                <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle theme-gradient">Latest Portfolio</span>
                </div>
                <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2"> Transforming Ideas into
                    Exceptional </h2>
                <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">Business consulting
                    consultants provide expert advice and guida
                    businesses to help them improve their performance, efficiency, and organizational</p>
            </div>

            <div className="latest-portfolio-tabs-area">
                <nav>
                    <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                        <li>
                            <button className="nav-link active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true">All</button>
                        </li>
                        <li>
                            <button className="nav-link" id="nav-branding-tab" data-bs-toggle="tab" data-bs-target="#nav-branding" type="button" role="tab" aria-controls="nav-branding" aria-selected="false">Branding</button>
                        </li>
                        <li>
                            <button className="nav-link" id="nav-design-tab" data-bs-toggle="tab" data-bs-target="#nav-design" type="button" role="tab" aria-controls="nav-design" aria-selected="false">Design</button>
                        </li>
                        <li>
                            <button className="nav-link" id="nav-content-writing-tab" data-bs-toggle="tab" data-bs-target="#nav-content-writing" type="button" role="tab" aria-controls="nav-content-writing" aria-selected="false">Content writing</button>
                        </li>
                        <li>
                            <button className="nav-link" id="nav-marketing-tab" data-bs-toggle="tab" data-bs-target="#nav-marketing" type="button" role="tab" aria-controls="nav-marketing" aria-selected="false">Marketing</button>
                        </li>
                    </ul>
                </nav>
                <div className="tab-content bg-blur-style-one" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab" tabIndex={0}>
                        <div className="row animation-action-3">
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation active tmponhover tmp-fade-in animation-order-1" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-1.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">SAAS website
                                                    design</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">JavaScript</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Figma</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-3.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Workout App
                                                    design</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Webflow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Ai</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-3" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-4.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Business Analytics</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">JavaScript</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Wordpress</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-4" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-2.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Dashboard
                                                    design</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Webflow</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-branding" role="tabpanel" aria-labelledby="nav-branding-tab" tabIndex={0}>
                        <div className="row animation-action-1">
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-1" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-1.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">SAAS website
                                                    design</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">JavaScript</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Figma</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-3.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Chatbots & AI Support</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Webflow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Ai</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-3" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-4.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Content Marketing</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Framer</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Wordpress</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-4" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-2.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Dashboard
                                                    design</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Webflow</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-design" role="tabpanel" aria-labelledby="nav-design-tab" tabIndex={0}>
                        <div className="row animation-action-1">
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-1" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-1.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">SAAS website
                                                    design</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">JavaScript</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-3.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Content Marketing</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Webflow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Ai</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-3" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-4.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Digital Marketing</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">JavaScript</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Framer</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Wordpress</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-4" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-2.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Dashboard
                                                    design</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Webflow</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-content-writing" role="tabpanel" aria-labelledby="nav-content-writing-tab" tabIndex={0}>
                        <div className="row animation-action-1">
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-1" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-1.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">SAAS website
                                                    design</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">JavaScript</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Figma</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-3.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Digital Marketing</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Webflow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Ai</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-3" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-4.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Workout App
                                                    design</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Framer</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Wordpress</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-4" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-2.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Dashboard
                                                    design</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Webflow</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-marketing" role="tabpanel" aria-labelledby="nav-marketing-tab" tabIndex={0}>
                        <div className="row animation-action-1">
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-1" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-1.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">SAAS website
                                                    design</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">JavaScript</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Figma</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-2" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-3.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">SEO & Digital Marketing</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Webflow</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Ai</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-3" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-4.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Workout App
                                                    design</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Figma</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Framer</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Wordpress</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 paralax-image">
                                <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation tmponhover tmp-fade-in animation-order-4" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                    <div className="portfoli-card-img">
                                        <div className="img-box v2">
                                            <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="#contacts">
                                                <img className="w-100" src="/assets/images/latest-portfolio/portfoli-img-2.jpg" alt="Thumbnail" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-card-content-wrap">
                                        <div className="content-left">
                                            <h3 className="portfolio-card-title"><a href="#contacts">Dashboard
                                                    design</a></h3>
                                            <div className="tag-items">
                                                <ul>
                                                    <li>
                                                        <a href="#" className="tag-item">Adobe</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="tag-item">Webflow</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon btn-md" href="javascript:void(0);">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">View Details</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="tmp-light light-center"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    {/* tmp Latest Portfolio end */}

    {/* Tpm My Expertise Area start */}
    <section className="my-expertise-area tpm-custom-box-bg">
        <div className="container">
            <div className="header-top-inner">
                <div className="section-head text-align-left">
                    <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                        <span className="subtitle theme-gradient">My Expertise</span>
                    </div>
                    <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Elevated Designs
                        Personalized <br /> the best Experiences</h2>
                </div>
                <div className="discription-area tmp-scroll-trigger tmp-fade-in animation-order-3">
                    <p className="description color-primary-3rd"> Business consulting consultants provide expert advice and
                        guida businesses to help them improve their performance, efficiency, and organizational
                    </p>
                </div>
            </div>
            <div className="services-widget v2">
                <div className="service-item current tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <div className="my-expertise-card-wrap">
                        <div className="expertise-card-left">
                            <div className="expertise-card-logo">
                                <img src="/assets/images/my-expertise/logo-4.svg" alt="logo" />
                            </div>
                            <h3 className="title">Ui/visual Design</h3>
                        </div>
                        <div className="single-progress-circle sal-animate" data-sal-delay="300" data-sal="slide-up" data-sal-duration="1000">
                            <svg className="radial-progress" data-countervalue="90" viewBox="0 0 80 80">
                                <circle className="bar-static" cx="40" cy="40" r="35"></circle>
                                <circle className="bar--animated" cx="40" cy="40" r="35" style={{ strokeDashoffset: "131.947px" }}></circle>
                                <text className="countervalue" x="50%" y="55%" transform="matrix(0, 1, -1, 0, 80, 0)">90%</text>
                            </svg>
                        </div>
                        <p className="para">A personal portfolio is a curated collection of an individual's professional
                            work, showcasing their skills</p>
                    </div>
                    <button className="service-link modal-popup"></button>
                </div>
                <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-2">
                    <div className="my-expertise-card-wrap">
                        <div className="expertise-card-left">
                            <div className="expertise-card-logo">
                                <img src="/assets/images/my-expertise/logo-5.svg" alt="logo" />
                            </div>
                            <h3 className="title">Branding Design</h3>
                        </div>
                        <div className="single-progress-circle sal-animate" data-sal-delay="300" data-sal="slide-up" data-sal-duration="1000">
                            <svg className="radial-progress" data-countervalue="40" viewBox="0 0 80 80">
                                <circle className="bar-static" cx="40" cy="40" r="35"></circle>
                                <circle className="bar--animated" cx="40" cy="40" r="35" style={{ strokeDashoffset: "131.947px" }}></circle>
                                <text className="countervalue" x="50%" y="55%" transform="matrix(0, 1, -1, 0, 80, 0)">75%</text>
                            </svg>
                        </div>
                        <p className="para">I specialize in creating solutions that are not only visually engaging but also align with business goals</p>
                    </div>
                    <button className="service-link modal-popup"></button>
                </div>
                <div className="service-item tmp-scroll-trigger tmp-fade-in animation-order-3">
                    <div className="my-expertise-card-wrap">
                        <div className="expertise-card-left">
                            <div className="expertise-card-logo">
                                <img src="/assets/images/my-expertise/logo-6.svg" alt="logo" />
                            </div>
                            <h3 className="title">Motion Design</h3>
                        </div>
                        <div className="single-progress-circle sal-animate" data-sal-delay="300" data-sal="slide-up" data-sal-duration="1000">
                            <svg className="radial-progress" data-countervalue="40" viewBox="0 0 80 80">
                                <circle className="bar-static" cx="40" cy="40" r="35"></circle>
                                <circle className="bar--animated" cx="40" cy="40" r="35" style={{ strokeDashoffset: "131.947px" }}></circle>
                                <text className="countervalue" x="50%" y="55%" transform="matrix(0, 1, -1, 0, 80, 0)">80%</text>
                            </svg>
                        </div>
                        <p className="para">Each one showcases my approach and dedication to detail, creativity, and results-driven outcomes.</p>
                    </div>
                    <button className="service-link modal-popup"></button>
                </div>
                <div className="active-bg wow fadeInUp mleave"></div>
            </div>
        </div>
    </section>
    {/* Tpm My Expertise Area End */}

    {/* tmp Clients Testimonial Start */}
    <section className="clients-testimonial-area tmp-section-gapTop">
        <div className="section-head mb--50">
            <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                <span className="subtitle theme-gradient">Clients Testimonial</span>
            </div>
            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Bringing Dreams to Life
                through</h2>
            <p className="description section-sm tmp-scroll-trigger tmp-fade-in animation-order-3">Business consulting
                consultants provide expert advice and guida businesses
                to <br /> help them improve their performance, efficiency, and organizational</p>
        </div>
        <div className="client-testimonial-swiper position-relative">
            <div className="swiper testimonial-swiper-v2">
                <div className="swiper-wrapper">
                    <div className="swiper-slide tmp-scroll-trigger animation-order-1">
                        <div className="client-testimonial-card-wrap">
                            <div className="client-card-head">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="/assets/images/testimonial/client-img-1.jpg" alt="" />

                                    </div>
                                    <div className="client-details">
                                        <h3 className="client-title">Tim Vutha</h3>
                                        <p className="client-para">CEO, KHB Media PLC</p>
                                    </div>
                                </div>
                                <div className="tmp-star">
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="client-para">Chamnab managed multiple departments with incredible technical clarity and strategic vision. His ad funnels and web systems drove substantial revenue and brand expansion for KHB Media PLC.</p>
                            <div className="quat-logo">
                                <img src="/assets/images/testimonial/quat-logo.svg" alt="quat-logo" />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide tmp-scroll-trigger animation-order-2">
                        <div className="client-testimonial-card-wrap">
                            <div className="client-card-head">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="/assets/images/testimonial/client-img-1.jpg" alt="" />

                                    </div>
                                    <div className="client-details">
                                        <h3 className="client-title">Tim Vutha</h3>
                                        <p className="client-para">CEO, KHB Media PLC</p>
                                    </div>
                                </div>
                                <div className="tmp-star">
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="client-para">They were communicative, attentive, and exceeded all project goals. The quality and attention to detail were top-notch. Five stars aren’t enough! Five stars aren’t enough. They were communicative, attentive, and exceeded all project goals. The quality and attention to detail were top-notch. Five stars aren’t enough! Five stars aren’t enough.</p>
                            <div className="quat-logo">
                                <img src="/assets/images/testimonial/quat-logo.svg" alt="quat-logo" />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide tmp-scroll-trigger animation-order-3">
                        <div className="client-testimonial-card-wrap">
                            <div className="client-card-head">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="/assets/images/testimonial/client-img-1.jpg" alt="" />

                                    </div>
                                    <div className="client-details">
                                        <h3 className="client-title">Tim Vutha</h3>
                                        <p className="client-para">CEO, KHB Media PLC</p>
                                    </div>
                                </div>
                                <div className="tmp-star">
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="client-para">Financial planners help people knowledge about to how toio invest and
                                save the money the most of us efficient way ever. Many people all across in the of
                                country use them help peopl and save. Many people all across in the of
                                country use them help peopl and save Many people all across in the of
                                country use them help peopl and save</p>
                            <div className="quat-logo">
                                <img src="/assets/images/testimonial/quat-logo.svg" alt="quat-logo" />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide tmp-scroll-trigger animation-order-4">
                        <div className="client-testimonial-card-wrap">
                            <div className="client-card-head">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="/assets/images/testimonial/client-img-1.jpg" alt="" />

                                    </div>
                                    <div className="client-details">
                                        <h3 className="client-title">Tim Vutha</h3>
                                        <p className="client-para">CEO, KHB Media PLC</p>
                                    </div>
                                </div>
                                <div className="tmp-star">
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="client-para">They understood my vision immediately and brought it to life even better than I’d imagined. Professional, creative, and always on time – I couldn’t be happier with the results! They understood my vision immediately and brought it to life even better than I’d imagined. Professional, creative, and!</p>
                            <div className="quat-logo">
                                <img src="/assets/images/testimonial/quat-logo.svg" alt="quat-logo" />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide tmp-scroll-trigger animation-order-5">
                        <div className="client-testimonial-card-wrap">
                            <div className="client-card-head">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="/assets/images/testimonial/client-img-1.jpg" alt="" />

                                    </div>
                                    <div className="client-details">
                                        <h3 className="client-title">Tim Vutha</h3>
                                        <p className="client-para">CEO, KHB Media PLC</p>
                                    </div>
                                </div>
                                <div className="tmp-star">
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="client-para">Financial planners help people knowledge about to how toio invest and
                                save the money the most of us efficient way ever. Many people all across in the of
                                country use them help peopl and save. Many people all across in the of
                                country use them help peopl and save Many people all across in the of
                                country use them help peopl and save</p>
                            <div className="quat-logo">
                                <img src="/assets/images/testimonial/quat-logo.svg" alt="quat-logo" />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide tmp-scroll-trigger animation-order-6">
                        <div className="client-testimonial-card-wrap">
                            <div className="client-card-head">
                                <div className="client-info">
                                    <div className="client-img">
                                        <img src="/assets/images/testimonial/client-img-1.jpg" alt="" />

                                    </div>
                                    <div className="client-details">
                                        <h3 className="client-title">Tim Vutha</h3>
                                        <p className="client-para">CEO, KHB Media PLC</p>
                                    </div>
                                </div>
                                <div className="tmp-star">
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="client-para">They understood my vision immediately and brought it to life even better than I’d imagined. Professional, creative, and always on time – I couldn’t be happier with the results! They understood my vision immediately and brought it to life even better than I’d imagined.</p>
                            <div className="quat-logo">
                                <img src="/assets/images/testimonial/quat-logo.svg" alt="quat-logo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tmp-swiper-pagination tmp-swiper-pagination-01"></div>
        </div>
    </section>
    {/* tmp Clients Testimonial End */}

    {/* Tpm My Skill Area Start */}
    <section className="my-skill-area-style-two plr--120 plr_lg--30 plr_md--30 plr_sm--30 plr_mobile--15 mt--70">
        <div className="tpm-custom-box-bg position-relative overflow-hidden">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-lg-12 col-md-12">
                        <div className="my-skill-area-left-content-wrap">
                            <div className="section-head text-align-left">
                                <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                                    <span className="subtitle">My Skill</span>
                                </div>
                                <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">My Experts
                                    Areas Where I <br /> Gained Skill</h2>
                                <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">Business consulting
                                    consultants provide expert advice and guida busi
                                    nesses to help them improve their performance, efficiency, and organ izational Business
                                    consulting consultants provide</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-lg-12 col-md-12">
                        <div className="my-skill-card-style-two row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="my-skill-card tmp-scroll-trigger tmp-fade-in animation-order-1">
                                    <div className="card-icon">
                                        <img src="/assets/images/icons/icon-01.png" alt="my-skill-icon" />
                                    </div>
                                    <h3 className="card-title">Framer</h3>
                                    <p className="card-para">The personal portfol category includes websites or physic Your
                                        Journey Your Story</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="my-skill-card tmp-scroll-trigger tmp-fade-in animation-order-2">
                                    <div className="card-icon">
                                        <img src="/assets/images/icons/icon-02.png" alt="my-skill-icon" />
                                    </div>
                                    <h3 className="card-title">Webflow</h3>
                                    <p className="card-para">The personal portfol category includes websites or physic Your
                                        Journey Your Story</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="my-skill-card tmp-scroll-trigger tmp-fade-in animation-order-3">
                                    <div className="card-icon">
                                        <img src="/assets/images/icons/icon-03.png" alt="my-skill-icon" />
                                    </div>
                                    <h3 className="card-title">Figma</h3>
                                    <p className="card-para">The personal portfol category includes websites or physic Your
                                        Journey Your Story</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="my-skill-card tmp-scroll-trigger tmp-fade-in animation-order-4">
                                    <div className="card-icon">
                                        <img src="/assets/images/icons/icon-04.png" alt="my-skill-icon" />
                                    </div>
                                    <h3 className="card-title">Wordpress</h3>
                                    <p className="card-para">The personal portfol category includes websites or physic Your
                                        Journey Your Story</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tmp-light light-top-left active"></div>
        </div>
    </section>
    {/* Tpm My Skill Area End */}

    {/* Tpm Get In touch start */}
    <section className="get-in-touch-area tmp-section-gapTop" id="contacts">
        <div className="container">
            <div className="get-in-touch-wrapper position-relative overflow-hidden">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-5">
                        <div className="contact-inner">
                            <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <span className="title-left">Get Ready To Create Great</span>
                            </div>
                            <ul className="ft-link v2">
                                <li className="tmp-scroll-trigger tmp-fade-in animation-order-1 tmp-link-animation">
                                    <span className="ft-icon"><i className="fa-solid fa-envelope"></i></span>
                                    <div className="ft-link-wrap">
                                        <h4 className="link-title">E-mail:</h4>
                                        <a href="#">admin@chamnabmey.com</a>
                                    </div>
                                </li>
                                <li className="tmp-scroll-trigger tmp-fade-in animation-order-2">
                                    <span className="ft-icon"><i className="fa-solid fa-location-dot"></i></span>
                                    <div className="ft-link-wrap">
                                        <h4 className="link-title">Location:</h4>
                                        <div>Phnom Penh, Cambodia</div>
                                    </div>
                                </li>
                                <li className="tmp-scroll-trigger tmp-fade-in animation-order-3 tmp-link-animation">
                                    <span className="ft-icon"><i className="fa-solid fa-location-dot"></i></span>
                                    <div className="ft-link-wrap">
                                        <h4 className="link-title">Contact:</h4>
                                        <a href="#">+855 15 705 703</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="contact-inner">
                            <div className="section-head section-head-one-side text-align-left tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <span className="title">GET IN TOUCH</span>
                            </div>
                            <div className="contact-form">
                                <div id="form-messages" className="error"></div>
                                <form className="tmp-dynamic-form" id="contact-form" method="POST" action="/api/contact">
                                    <div className="contact-form-wrapper row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="input-field" name="name" id="contact-name" placeholder="Your Name" type="text" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="input-field" name="phone" id="contact-phone" placeholder="Phone Number" type="number" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="input-field" id="contact-email" name="email" placeholder="Your Email" type="email" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="input-field" type="text" id="subject" name="subject" placeholder="Subject" />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="input-field" placeholder="Your Message" name="message" id="contact-message" required></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="tmp-button-here">
                                                <button className="tmp-btn hover-icon-reverse radius-round w-100" name="submit" type="submit" id="submit">
                                                    <span className="icon-reverse-wrapper">
                                            <span className="btn-text">Appointment Now</span>
                                                    <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                    <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                                    </span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="tmp-light light-top-left active"></div>
            </div>
        </div>
    </section>
    {/* Tpm Get In touch End */}

    {/* Tpm Blog and news Area Start */}
    <section className="blog-and-news-are tmp-section-gap" id="blog">
        <div className="container">
            <div className="section-head mb--60">
                <div className="section-sub-title center-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                    <span className="subtitle theme-gradient">Blog and news</span>
                </div>
                <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Elevating Personal
                    Branding the <br /> through Powerful Portfolios</h2>
            </div>
            <div className="row animation-action-5">
                {/* Start Blog Card  */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 paralax-image">
                    <div className="blog-card-style-two tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1 single-animation" data-bs-toggle="modal" data-bs-target="#exampleModalCenters">

                        <div className="blog-card-img">
                            <div className="img-box">
                                <a href="/Resume-CHAMNAB-MEY.pdf" target="_blank" download="Resume-CHAMNAB-MEY.pdf">
                                    <img src="/assets/images/blog/blog-img-6.jpg" alt="Blog Thumbnail" />
                                </a>
                            </div>
                        </div>
                        <div className="blog-content-wrap">
                            <div className="blog-tags">
                                <ul>
                                    <li>
                                        <a href="#"><i
                                className="fa-regular fa-user"></i>Chamnab Mey</a>
                                    </li>
                                    <li>
                                        <a href="#"><i
                                className="fa-regular fa-comments"></i>Comments
                                            (05)</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="blog-title"><a href="/Resume-CHAMNAB-MEY.pdf" target="_blank" download="Resume-CHAMNAB-MEY.pdf">
                                    Why Server-Side CAPI is Mandatory for Modern E-Commerce
                                </a></h3>
                            <div className="tmp-button-here">
                                <a className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon" href="/Resume-CHAMNAB-MEY.pdf" target="_blank" download="Resume-CHAMNAB-MEY.pdf">
                                    <div className="icon-reverse-wrapper">
                                        <span className="btn-text">Read More</span>
                                        <div className="btn-hack"></div>
                                        <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                        <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                        <span className="btn-icon"><i className="ffa-sharp fa-regular fa-arrow-right"></i></span>
                                        <span className="btn-icon"><i className="ffa-sharp fa-regular fa-arrow-right"></i></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="tmp-light light-left"></div>
                    </div>
                </div>
                {/* End Blog Card  */}

                {/* Start Blog Card  */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 paralax-image">
                    <div className="blog-card-style-two tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1 single-animation" data-bs-toggle="modal" data-bs-target="#exampleModalCenters">

                        <div className="blog-card-img">
                            <div className="img-box">
                                <a href="/Resume-CHAMNAB-MEY.pdf" target="_blank" download="Resume-CHAMNAB-MEY.pdf">
                                    <img src="/assets/images/blog/blog-img-7.jpg" alt="Blog Thumbnail" />
                                </a>
                            </div>
                        </div>
                        <div className="blog-content-wrap">
                            <div className="blog-tags">
                                <ul>
                                    <li>
                                        <a href="#"><i
                                className="fa-regular fa-user"></i>Chamnab Mey</a>
                                    </li>
                                    <li>
                                        <a href="#"><i
                                className="fa-regular fa-comments"></i>Comments
                                            (03)</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="blog-title"><a href="/Resume-CHAMNAB-MEY.pdf" target="_blank" download="Resume-CHAMNAB-MEY.pdf">
                                    High-ROAS Meta & Google Ad Strategies for 2026
                                </a></h3>
                            <div className="tmp-button-here">
                                <a className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon" href="/Resume-CHAMNAB-MEY.pdf" target="_blank" download="Resume-CHAMNAB-MEY.pdf">
                                    <div className="icon-reverse-wrapper">
                                        <span className="btn-text">Read More</span>
                                        <div className="btn-hack"></div>
                                        <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                        <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                        <span className="btn-icon"><i className="ffa-sharp fa-regular fa-arrow-right"></i></span>
                                        <span className="btn-icon"><i className="ffa-sharp fa-regular fa-arrow-right"></i></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="tmp-light light-center"></div>
                    </div>
                </div>
                {/* End Blog Card  */}

                {/* Start Blog Card  */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 paralax-image">
                    <div className="blog-card-style-two tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1 single-animation" data-bs-toggle="modal" data-bs-target="#exampleModalCenters">

                        <div className="blog-card-img">
                            <div className="img-box">
                                <a href="/Resume-CHAMNAB-MEY.pdf" target="_blank" download="Resume-CHAMNAB-MEY.pdf">
                                    <img src="/assets/images/blog/blog-img-8.jpg" alt="Blog Thumbnail" />
                                </a>
                            </div>
                        </div>
                        <div className="blog-content-wrap">
                            <div className="blog-tags">
                                <ul>
                                    <li>
                                        <a href="#"><i
                                className="fa-regular fa-user"></i>Chamnab Mey</a>
                                    </li>
                                    <li>
                                        <a href="#"><i
                                className="fa-regular fa-comments"></i>Comments
                                            (05)</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="blog-title"><a href="/Resume-CHAMNAB-MEY.pdf" target="_blank" download="Resume-CHAMNAB-MEY.pdf">Full-Funnel Acquisition: Aligning Media Buying with Conversion Web Design</a></h3>
                            <div className="tmp-button-here">
                                <a className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon" href="/Resume-CHAMNAB-MEY.pdf" target="_blank" download="Resume-CHAMNAB-MEY.pdf">
                                    <div className="icon-reverse-wrapper">
                                        <span className="btn-text">Read More</span>
                                        <div className="btn-hack"></div>
                                        <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                        <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                        <span className="btn-icon"><i className="ffa-sharp fa-regular fa-arrow-right"></i></span>
                                        <span className="btn-icon"><i className="ffa-sharp fa-regular fa-arrow-right"></i></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="tmp-light light-left"></div>
                    </div>
                </div>
                {/* End Blog Card  */}
            </div>
        </div>
    </section>
    {/* Tpm Blog and news Area End */}

    {/* Start Footer Area  */}

    <div className="footer-stars-animation-wrapper-footer-two">
        <footer className="footer-area footer-style-two-wrapper bg-color-footer bg_images tmp-section-gap">
            <div className="container">
                <div className="footer-main footer-style-two">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-footer-wrapper border-right mr--20">
                                <div className="logo">
                                    <a href="index.html">
                                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: "800", fontSize: "24px", letterSpacing: "-0.5px", textDecoration: "none" }}><span className="theme-gradient">CHAMNAB</span> <span style={{ color: "inherit" }}>MEY</span></span>
                                    </a>
                                </div>
                                <p className="description">The personal portfolio category includes websites or physical
                                    displays</p>
                                <div className="social-link footer">
                                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 col-sm-6">
                            <div className="quick-link-wrap">
                                <h5 className="ft-title">Quick Link</h5>
                                <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                                    <li>
                                        <a href="#">About Me</a>
                                    </li>
                                    <li>
                                        <a href="#">Service</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog Post</a>
                                    </li>
                                    <li>
                                        <a href="#">Pricing</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-footer-wrapper contact-wrap">
                                <h5 className="ft-title">Contact </h5>
                                <ul className="ft-link tmp-scroll-trigger animation-order-1 tmp-link-animation">
                                    <li><span className="ft-icon"><i className="fa-solid fa-phone"></i></span><a href="#">+855 15 705 703</a></li>
                                    <li><span className="ft-icon"><i className="fa-solid fa-location-dot"></i></span>Phnom Penh, Cambodia</li>
                                    <li><span className="ft-icon"><i className="fa-solid fa-envelope"></i></span><a href="#">admin@chamnabmey.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="newslatter tmp-scroll-trigger animation-order-1">
                                <h3 className="title">Newslatter</h3>
                                <p className="para">The personal portfolio categor includes the a websites or representation</p>
                                <form action="#" className="newsletter-form-1">
                                    <input type="email" placeholder="Your e-mail" />
                                    <span>
                                    <a href="#" className="form-icon"><i className="fa-solid fa-arrow-right"></i></a>
                                </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="separator-animated-border animated-true"></div>
        </footer>
        <div className="copyright-area-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-wrapper tmp-scroll-trigger animation-order-1">
                            <p className="copy-right-para">© 2026 Chamnab Mey | All Rights Reserved</p>
                            <ul className="tmp-link-animation">
                                <li><a href="#">Trams & Condition</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="slider-bg-light">
            <img className="blocksync-scroll-trigger fade_in animation-order-8" src="/assets/images/banner/shape/light-left.svg" alt="Top Light Shape" />
        </div>
        <div className="slider-bg-dot-shape">
            <div className="wrapper blocksync-scroll-trigger blocksync-stars-area fade_in animation-order-16">
                <div className="blocksync-stars"></div>
                <div className="blocksync-stars2"></div>
                <div className="blocksync-stars3"></div>
            </div>
        </div>
    </div>

    {/* End Footer Area  */}
    {/* Start trigger modal */}
    <div className="modal fade show" id="exampleModalCenters" tabIndex={-1} role="dialog" aria-modal="true">
        <div className="modal-dialog modal-dialog-centered modal-news" role="document">
            <div className="modal-content">

                <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                    </button>
                </div>

                {/* End of .modal-header */}

                <div className="modal-body">
                    <img className="img-fluid mb--30" src="/assets/images/blog/blog-img-7.jpg" alt="Blog Thumbnail" />
                    <div className="news-details">
                        <span className="date">10 March, 2025</span>
                        <h2>Maximizing Meta Ads ROAS in Southeast Asia: 2026 Strategy Guide</h2>
                        <p>We are excited to announce the grand opening of our new headquarters, a space designed to foster innovation and collaboration.
                            This move marks a significant milestone in our journey toward growth and excellence.</p>
                        <h4>Enhancing Workspaces for Productivity.</h4>
                        <p>Our new office is equipped with state-of-the-art facilities, promoting creativity and teamwork.
                            The modern design, coupled with advanced technology, aims to improve efficiency and employee well-being.</p>
                        <p>We believe this new environment will enable us to serve our clients better and drive success.
                            Our team is enthusiastic about the future, and we can't wait to achieve new heights together.</p>
                        <h4>Future Prospects and Innovations.</h4>
                        <p>With this expansion, we are set to introduce new services and solutions tailored to meet evolving market needs.
                            Our commitment to quality and innovation remains steadfast as we continue to grow.</p>
                    </div>


                    {/* Comment Section Area Start */}
                    <div className="comment-inner">
                        <h3 className="title mb--40 mt--50">Leave a Reply</h3>
                        <div className="tmp-contact-form contact-form-style-1">
                            <form action="#">
                                <div className="row g-5">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" />
                                            <label>Name</label>
                                            <span className="focus-border"></span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="email" />
                                            <label>Email</label>
                                            <span className="focus-border"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <textarea></textarea>
                                    <label>Leave Comment</label>
                                    <span className="focus-border"></span>
                                </div>
                                <div className="form-group">
                                    <div className="tmp-button-here">
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon" href="/Resume-CHAMNAB-MEY.pdf" target="_blank" download="Resume-CHAMNAB-MEY.pdf">
                                            <div className="icon-reverse-wrapper">
                                                <span className="btn-text">Submit Now</span>
                                                <div className="btn-hack"></div>
                                                <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                                <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                                <span className="btn-icon"><i className="ffa-sharp fa-regular fa-arrow-right"></i></span>
                                                <span className="btn-icon"><i className="ffa-sharp fa-regular fa-arrow-right"></i></span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>
                    {/* Comment Section End */}
                </div>
                {/* End of .modal-body */}
            </div>
        </div>
    </div>
    {/* End trigger modal */}
    {/* Modal Portfolio Body area Start */}
    <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><i className="fa-solid fa-xmark"></i></span>
                    </button>
                </div>
                <div className="modal-body">
                    <div className="row align-items-center">

                        <div className="col-lg-6">
                            <div className="portfolio-popup-thumbnail">
                                <div className="image">
                                    <img className="w-100" src="/assets/images/portfolio/portfolio-04.jpg" alt="slide" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="text-content">
                                <h3>
                                    <span>Featured - Design</span> App Design Development.
                                </h3>
                                <p className="mb--30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
                                <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                                <div className="button-group button-group-pd mt--20">
                                    <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon" href="#">
                                        <div className="icon-reverse-wrapper">
                                            <span className="btn-text">LIKE THIS</span>
                                            <div className="btn-hack"></div>
                                            <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                            <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                            <span className="btn-icon"><i className="fa-solid fa-thumbs-up"></i></span>
                                            <span className="btn-icon"><i className="fa-solid fa-thumbs-up"></i></span>
                                        </div>
                                    </a>
                                    <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon" href="#">
                                        <div className="icon-reverse-wrapper">
                                            <span className="btn-text">VIEW PROJECTS</span>
                                            <div className="btn-hack"></div>
                                            <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                            <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                            <span className="btn-icon"><i className="fa-regular fa-chevron-right"></i></span>
                                            <span className="btn-icon"><i className="fa-regular fa-chevron-right"></i></span>
                                        </div>
                                    </a>
                                </div>

                            </div>
                            {/* End of .text-content */}
                        </div>
                    </div>
                    {/* End of .row Body*/}
                </div>
            </div>
        </div>
    </div>
    {/* End Modal Portfolio area */}



    <div className="intro-video-card-wrapper">
        <div className="background-overlay"></div>
        <div className="tmp-intro-video-card-wrapper position-right">
            <div className="tmp-video-inner">
                <div className="tmp-video-progress-container playing">
                    <video className="tmp-video-element" id="tmp-video-element" poster="/assets/images/video/01.webp">
                        <source src="/assets/images/video/intro.mp4" />
                    </video>
                    <div className="tmp-video-controls">
                        <div className="play-button" title="Play/Pause (Spacebar)">
                            <i className="fa-solid fa-pause"></i>
                        </div>
                        <div className="sound-button sound-muted" title="Mute/Unmute (m)">
                            <i className="fa-regular fa-volume"></i>
                        </div>
                        <div className="expand-icon" title="Expand">
                            <i className="fa-solid fa-up-right-and-down-left-from-center"></i>
                        </div>
                    </div>
                    <div className="tmp-iv-top-wrapper">
                        <div className="tmp-iv-progress-bar">
                            <span className="buffer-bar" style={{ width: "100%" }}></span>
                            <span className="time-bar" style={{ width: "100%" }}></span>
                        </div>
                    </div>
                </div>
                <div className="card-greeting">
                    <p>Hello</p>
                </div>
            </div>
            <div className="tmp-iv-close-button">
                <audio id="tmp-close-button-audio" preload="auto">
                    <source src="/assets/images/video/intro.mp3" type="audio/mpeg" />
                    <source src="/assets/images/video/intro.mp3" type="audio/ogg" />
                </audio>
                <i className="fa-solid fa-xmark"></i>
            </div>
        </div>
    </div>

    {/* ready chatting option via email */}
    <div className="ready-chatting-option tmp-ready-chat">
        <input type="checkbox" id="click" />
        <label htmlFor="click">
            <i className="fab fa-facebook-messenger"></i>
            <i className="fas fa-times"></i>
        </label>
        <div className="wrapper">
            <div className="head-text">
                Let's chat with me? - Online
            </div>
            <div className="chat-box">
                <div className="desc-text">
                    Please fill out the form below to start chatting with me directly.
                </div>
                <form className="tmp-dynamic-form" action="#">
                    <div className="field">
                        <input className="input-field" name="name" placeholder="Your Name" type="text" required />
                    </div>
                    <div className="field">
                        <input className="input-field" name="email" placeholder="Your Email" type="email" required />
                    </div>
                    <div className="field textarea">
                        <textarea className="input-field" placeholder="Your Message" name="message" required></textarea>
                    </div>
                    <div className="field-1 mt--20">
                        <button className="tmp-btn btn-border tmp-modern-button">
                            <span className="icon-reverse-wrapper">
                        <span className="btn-text">Send Message</span>
                            <span className="btn-hack"></span>
                            <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                            <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    {/* ready chatting option via email end */}
    {/* progress area start */}
    <div className="scrollToTop" style={{ display: "block" }}>
        <div className="arrowUp">
            <i className="fa-light fa-arrow-up"></i>
        </div>
        <div className="water" style={{ transform: "translate(0px, 87%)" }}>
            <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
                <use xlinkHref="#wave"></use>
            </svg>
            <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
                <use xlinkHref="#wave"></use>
            </svg>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 560 20" style={{ display: "none" }}>
                <symbol id="wave">
                    <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z" fill="#fff"></path>
                    <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z" fill="#fff"></path>
                    <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z" fill="#fff"></path>
                    <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z" fill="#fff"></path>
                </symbol>
            </svg>

        </div>
    </div>
    {/* progress area end */}

    </>
  );
}
