import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import NavigationController from '@/components/NavigationController';
import { getContent } from '@/lib/contentStore';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function HomePage() {
  const content = await getContent();
  const { profile, hero, statement, about, skills, projects, services, testimonials, blog, footer } = content;

  return (
    <>
      <ThemeToggle />
      <NavigationController />

      
    {/*  tpm-header-area start  */}
    <header className="tmp-header-area-start header-one header--sticky header--transparent">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header-content">
                        <div className="logo">
                            <a href="#home">
    <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "24px", letterSpacing: "-0.5px", textDecoration: "none" }}>
        <span className="theme-gradient">CHAMNAB</span> <span style={{ color: "inherit" }}>MEY</span>
    </span>
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
                                    <a href={profile.telegram} target="_blank" rel="noopener noreferrer" title="Telegram"><i className="fa-brands fa-telegram"></i></a>
                                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href={profile.facebook} target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
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
    {/*  tpm-header-area end  */}

    <div className="d-none d-xl-block">
        <div className="tmp-sidebar-area tmp_side_bar">
            <div className="inner">
                <div className="top-area">
                    <a href="index.html" className="logo">
                        <img className="logo-dark" src="/assets/images/logo/white-logo-reeni.png" alt="Virtuo - Personal Portfolio HTML Template for developers and freelancers" />
                        <img className="logo-white" src="/assets/images/logo/dark-logo-virtuo.png" alt="Virtuo - Personal Portfolio HTML Template for developers and freelancers" />
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
                            <img src={profile.photo || "/images/chamnab-mey.jpg"} alt={profile.name} style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }} />
                        </a>
                    </div>
                    <h5 className="title mt--30">{profile.tagline}</h5>
                    <p className="disc">{profile.sidebarBio}
                    </p>
                    <div className="short-contact-area">
                        {/*  single contact information  */}
                        <div className="single-contact">
                            <i className="fa-solid fa-phone"></i>
                            <div className="information tmp-link-animation">
                                <span>Call Now</span>
                                <a href="#" className="number">{profile.phone}</a>
                            </div>
                        </div>
                        {/*  single contact information end  */}

                        {/*  single contact information  */}
                        <div className="single-contact">
                            <i className="fa-solid fa-envelope"></i>
                            <div className="information tmp-link-animation">
                                <span>Mail Us</span>
                                <a href="#" className="number">{profile.email}</a>
                            </div>
                        </div>
                        {/*  single contact information end  */}

                        {/*  single contact information  */}
                        <div className="single-contact">
                            <i className="fa-solid fa-location-crosshairs"></i>
                            <div className="information tmp-link-animation">
                                <span>My Address</span>
                                <span className="number">{profile.location}</span>
                            </div>
                        </div>
                        {/*  single contact information end  */}
                    </div>
                    {/*  social area start  */}
                    <div className="social-wrapper mt--20">
                        <span className="subtitle">find with me</span>
                        <div className="social-link">
                                    <a href={profile.telegram} target="_blank" rel="noopener noreferrer" title="Telegram"><i className="fa-brands fa-telegram"></i></a>
                                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href={profile.facebook} target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                </div>
                    </div>
                    {/*  social area end  */}
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
                            <img className="logo-dark" src="/assets/images/logo/white-logo-reeni.png" alt="Virtuo - Personal Portfolio HTML Template for developers and freelancers" />
                            <img className="logo-white" src="/assets/images/logo/dark-logo-virtuo.png" alt="Virtuo - Personal Portfolio HTML Template for developers and freelancers" />
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
                                    <a href={profile.telegram} target="_blank" rel="noopener noreferrer" title="Telegram"><i className="fa-brands fa-telegram"></i></a>
                                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
                                    <a href={profile.facebook} target="_blank" rel="noopener noreferrer" title="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                </div>
                </div>
                {/*  social area end  */}



            </div>
        </div>
    </div>

    {/*  tmp banner area start  */}
    <div className="rpp-banner-two-area" id="home">
        <div className="container">
            <div className="banner-two-main-wrapper">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-lg-2">
                        <div className="banner-right-content">
                            <div className="main-img" style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                                <img
                                    className="tmp-scroll-trigger tmp-zoom-in animation-order-1"
                                    src={profile.photo || "/images/chamnab-mey.jpg"}
                                    alt={profile.name}
                                    style={{
                                        width: '100%',
                                        maxWidth: '460px',
                                        height: 'auto',
                                        borderRadius: '28px',
                                        objectFit: 'cover',
                                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-1 mt--100">
                        <div className="inner">
                            <span className="sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">{hero.greeting || "Welcome to My World"}</span>
                            <h1 className="title tmp-scroll-trigger tmp-fade-in animation-order-2">
                                {hero.titlePrefix || "Chamnab Mey, a Senior"} <br />
                                <span className="header-caption">
                                    <span className="cd-headline clip is-full-width">
                                        <span className="cd-words-wrapper" suppressHydrationWarning>
                                            {hero.rotatingRoles && hero.rotatingRoles.length > 0 ? (
                                                hero.rotatingRoles.map((role, rIdx) => (
                                                    <b key={rIdx} className={rIdx === 0 ? "is-visible theme-gradient" : "is-hidden theme-gradient"}>{role}</b>
                                                ))
                                            ) : (
                                                <>
                                                    <b className="is-visible theme-gradient">Digital Marketer</b>
                                                    <b className="is-hidden theme-gradient">Performance Ad Buyer</b>
                                                    <b className="is-hidden theme-gradient">Growth Strategist</b>
                                                </>
                                            )}
                                        </span>
                                </span>
                                </span>
                            </h1>
                            <p className="disc tmp-scroll-trigger tmp-fade-in animation-order-3">{hero.description}</p>
                            <div className="button-area-banner-two tmp-scroll-trigger tmp-fade-in animation-order-4 d-flex flex-wrap gap-3">
                                <a className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon" href="#contacts">
                                    <div className="icon-reverse-wrapper">
                                        <span className="btn-text">Book Strategy Call</span>
                                        <div className="btn-hack"></div>
                                        <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                        <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                        <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                        <span className="btn-icon"><i className="fa-sharp fa-regular fa-arrow-right"></i></span>
                                    </div>
                                </a>
                                <a className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon" href={profile.resumeUrl || "/Resume-CHAMNAB-MEY.pdf"} target="_blank" rel="noopener noreferrer">
                                    <div className="icon-reverse-wrapper">
                                        <span className="btn-text">Download CV</span>
                                        <div className="btn-hack"></div>
                                        <img src="/assets/images/button/btg-bg.svg" alt="" className="btn-bg" />
                                        <img src="/assets/images/button/btg-bg-2.svg" alt="" className="btn-bg-hover" />
                                        <span className="btn-icon"><i className="fa-regular fa-download"></i></span>
                                        <span className="btn-icon"><i className="fa-regular fa-download"></i></span>
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
    {/*  tmp banner area end  */}

    {/*  tmp text para start  */}
    <div className="about-content-area">
        <div className="container tmp-section-gap">
            <div className="text-para-doc-wrap">
                <h2 className="text-para-documents tmp-scroll-trigger tmp-fade-in tmp-title-split-2 animation-order-1" suppressHydrationWarning>{statement}</h2>
                <div className="right-bg-text-para">
                    <img src="/assets/images/banner/right-bg-text-para-doc.png" alt="" />
                </div>
                <div className="left-bg-text-para">
                    <img src="/assets/images/banner/left-bg-text-para-doc.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    {/*  tmp text para end  */}

    {/*  tmp About Me Start  */}
    <section className="about-us-area" id="about">
        <div className="container">
            <div className="row align-items-center g-5">
                <div className="col-lg-6">
                    <div className="about-us-left-content-wrap">
                        <div className="years-of-experience-card tmponhover active tmp-scroll-trigger tmp-fade-in animation-order-1">
                            <h3 className="counter card-title"><span className="odometer" suppressHydrationWarning data-count={about.yearsExperience || 10}>{about.yearsExperience || 10}</span>+
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
                                <h3 className="card-title">Paid Media & CRO</h3>
                                <p className="card-para">{about.adSpendManaged || "240+ Campaigns"}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  bg-vactor-one  */}
                <div className="col-lg-6">
                    <div className="about-us-right-content-wrap">
                        <div className="section-head text-align-left mb--50">
                            <div className="section-sub-title tmp-scroll-trigger tmp-fade-in animation-order-1">
                                <span className="subtitle theme-gradient">About Me</span>
                            </div>
                            <h2 className="title split-collab tmp-scroll-trigger tmp-fade-in animation-order-2">Boost
                                Business Strategic <br /> Solutions with Us</h2>
                            <p className="description tmp-scroll-trigger tmp-fade-in animation-order-3">Business consulting
                                consultants provide expert advice and guida
                                businesses to help them improve their performance, efficiency, and organizational</p>
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
                                        <h3 className="card-title">{about.card2Title || "Full-Funnel CRO"}</h3>
                                    </div>
                                    <div className="tmp-light light-top-left"></div>
                                    <p className="card-para">{about.card2Desc || "High-converting landing pages and automated lead capture infrastructure."}</p>
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
    {/*  tmp About Me end  */}


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
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2022 - Present</div>
                                <h3 className="resume-title">Senior Digital Marketing & IT Strategist</h3>
                                <div className="institute">KHB Media PLC & Enterprise Clients</div>
                            </div>
                        </div>
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-2">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2022 -
                                    2022</div>
                                <h3 className="resume-title">Digital Acquisition & Retargeting Lead</h3>
                                <div className="institute">EPOS-GODIGITAL Platform</div>
                            </div>
                        </div>
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-3">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2020 -
                                    2022</div>
                                <h3 className="resume-title">Performance Media Buyer & Web Specialist</h3>
                                <div className="institute">Solis Cambodia Agtech</div>
                            </div>
                        </div>
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation mb--0 tmp-scroll-trigger tmp-fade-in animation-order-4">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2016 -
                                    2019</div>
                                <h3 className="resume-title">Digital Marketing & Creative Specialist</h3>
                                <div className="institute">Shimmex Group & Agency Operations</div>
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
                                <h3 className="resume-title">Meta Certified Media Buying Professional</h3>
                                <div className="institute">Meta Blueprint</div>
                            </div>
                        </div>
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-2">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2016 -
                                    2020</div>
                                <h3 className="resume-title">Google Ads Search, Display & Measurement</h3>
                                <div className="institute">Google Skillshop</div>
                            </div>
                        </div>
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation tmp-scroll-trigger tmp-fade-in animation-order-3">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2012 -
                                    2015</div>
                                <h3 className="resume-title">Advanced Server-Side Tracking & CAPI Specialist</h3>
                                <div className="institute">Conversion Systems Academy</div>
                            </div>
                        </div>
                        <div className="paralax-image">
                            <div className="resume-single tmponhover single-animation mb--0 tmp-scroll-trigger tmp-fade-in animation-order-4">
                                <div className="time"><i className="fa-duotone fa-solid fa-circle-dot fa-fade mr--15"></i> 2010 -
                                    2011</div>
                                <h3 className="resume-title">Bachelor of Science in Information Technology</h3>
                                <div className="institute">Royal University of Phnom Penh</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/*  tmp skill area start  */}
    <div className="tmp-skill-area tmp-section-gapTop" id="service">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6">
                    <div className="progress-wrapper">
                        <div className="content">
                            <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                Paid Media & Performance Skills
                            </h2>
                            {skills.paidMedia && skills.paidMedia.map((skill, sIdx) => (
                                <div className="progress-charts" key={sIdx}>
                                    <h6 className="heading heading-h6">{skill.name}</h6>
                                    <div className="progress">
                                        <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay={`${0.2 + sIdx * 0.1}s`} role="progressbar" style={{ width: `${skill.percentage}%`, visibility: 'visible' }} aria-valuenow={skill.percentage} aria-valuemin={0} aria-valuemax={100}>
                                            <span className="percent-label">{skill.percentage}%</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="progress-wrapper">
                        <div className="content">
                            <h2 className="custom-title mb--30 tmp-scroll-trigger tmp-fade-in animation-order-1">
                                Tracking, CRO & Tech Skills
                            </h2>
                            {skills.tracking && skills.tracking.map((skill, sIdx) => (
                                <div className="progress-charts" key={sIdx}>
                                    <h6 className="heading heading-h6">{skill.name}</h6>
                                    <div className="progress">
                                        <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay={`${0.2 + sIdx * 0.1}s`} role="progressbar" style={{ width: `${skill.percentage}%`, visibility: 'visible' }} aria-valuenow={skill.percentage} aria-valuemin={0} aria-valuemax={100}>
                                            <span className="percent-label">{skill.percentage}%</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/*  tmp skill area end  */}

    {/*  tmp Latest Portfolio Start  */}
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
                            <button className="nav-link" id="nav-meta-tab" data-bs-toggle="tab" data-bs-target="#nav-meta" type="button" role="tab" aria-controls="nav-meta" aria-selected="false">Meta Ads</button>
                        </li>
                        <li>
                            <button className="nav-link" id="nav-tracking-tab" data-bs-toggle="tab" data-bs-target="#nav-tracking" type="button" role="tab" aria-controls="nav-tracking" aria-selected="false">Tracking / CAPI</button>
                        </li>
                        <li>
                            <button className="nav-link" id="nav-cro-tab" data-bs-toggle="tab" data-bs-target="#nav-cro" type="button" role="tab" aria-controls="nav-cro" aria-selected="false">Sales Funnels & CRO</button>
                        </li>
                        <li>
                            <button className="nav-link" id="nav-ecommerce-tab" data-bs-toggle="tab" data-bs-target="#nav-ecommerce" type="button" role="tab" aria-controls="nav-ecommerce" aria-selected="false">E-Commerce</button>
                        </li>
                    </ul>
                </nav>
                <div className="tab-content bg-blur-style-one" id="nav-tabContent">
                    {[
                        { id: 'nav-all', filter: () => true },
                        { id: 'nav-meta', filter: (p: any) => p.category === 'meta' },
                        { id: 'nav-tracking', filter: (p: any) => p.category === 'tracking' },
                        { id: 'nav-cro', filter: (p: any) => p.category === 'cro' },
                        { id: 'nav-ecommerce', filter: (p: any) => p.category === 'ecommerce' },
                    ].map((tab, tIdx) => {
                        const filtered = projects.filter(tab.filter);
                        return (
                            <div
                                key={tab.id}
                                className={`tab-pane fade ${tIdx === 0 ? 'show active' : ''}`}
                                id={tab.id}
                                role="tabpanel"
                                tabIndex={0}
                            >
                                <div className="row animation-action-3 g-4">
                                    {filtered.map((proj, pIdx) => (
                                        <div className="col-lg-6 col-md-6 paralax-image" key={proj.id || pIdx}>
                                            <div className="latest-portfolio-card-style-two image-box-hover tmp-scroll-trigger single-animation active tmponhover tmp-fade-in animation-order-1" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                                                <div className="portfoli-card-img">
                                                    <div className="img-box v2" style={{ maxHeight: '280px', overflow: 'hidden' }}>
                                                        <a className="tmp-scroll-trigger tmp-zoom-in animation-order-1" href="javascript:void(0);">
                                                            <img className="w-100" src={proj.image || "/assets/images/latest-portfolio/portfoli-img-1.jpg"} alt={proj.title} style={{ objectFit: 'cover', height: '280px' }} />
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="portfolio-card-content-wrap">
                                                    <div className="content-left">
                                                        <h3 className="portfolio-card-title">
                                                            <a href="javascript:void(0);">{proj.title}</a>
                                                        </h3>
                                                        <div className="tag-items">
                                                            <ul>
                                                                {proj.tags && proj.tags.map((tag: string, tgIdx: number) => (
                                                                    <li key={tgIdx}>
                                                                        <a href="javascript:void(0);" className="tag-item">{tag}</a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        {proj.metrics && (
                                                            <div style={{ marginTop: '8px', fontSize: '12px', fontWeight: 700, color: '#139BFD' }}>
                                                                {proj.metrics}
                                                            </div>
                                                        )}
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
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </section>
    {/*  tmp Latest Portfolio end  */}

    {/*  Tpm My Expertise Area start  */}
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
                {services && services.map((serv, sIdx) => (
                    <div className={`service-item ${sIdx === 0 ? 'current' : ''} tmp-scroll-trigger tmp-fade-in animation-order-${sIdx + 1}`} key={serv.id || sIdx}>
                        <div className="my-expertise-card-wrap">
                            <div className="expertise-card-left">
                                <div className="expertise-card-logo">
                                    <img src={serv.icon || `/assets/images/my-expertise/logo-${sIdx + 4}.svg`} alt={serv.title} />
                                </div>
                                <h3 className="title">{serv.title}</h3>
                            </div>
                            <div className="single-progress-circle sal-animate" data-sal-delay="300" data-sal="slide-up" data-sal-duration="1000">
                                <svg className="radial-progress" data-countervalue={serv.score} viewBox="0 0 80 80">
                                    <circle className="bar-static" cx="40" cy="40" r="35"></circle>
                                    <circle className="bar--animated" cx="40" cy="40" r="35" style={{ strokeDashoffset: `${220 - (220 * serv.score) / 100}px` }}></circle>
                                    <text className="countervalue" x="50%" y="55%" transform="matrix(0, 1, -1, 0, 80, 0)">{serv.score}%</text>
                                </svg>
                            </div>
                            <p className="para">{serv.description}</p>
                        </div>
                        <button className="service-link modal-popup"></button>
                    </div>
                ))}
                <div className="active-bg wow fadeInUp mleave"></div>
            </div>
        </div>
    </section>
    {/*  Tpm My Expertise Area End  */}

    {/*  tmp Clients Testimonial Start  */}
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
                    {testimonials && testimonials.map((test, tIdx) => (
                        <div className={`swiper-slide tmp-scroll-trigger animation-order-${tIdx + 1}`} key={test.id || tIdx}>
                            <div className="client-testimonial-card-wrap">
                                <div className="client-card-head">
                                    <div className="client-info">
                                        <div className="client-img">
                                            <img src={test.avatar || "/assets/images/testimonial/client-img-1.jpg"} alt={test.name} />
                                        </div>
                                        <div className="client-details">
                                            <h3 className="client-title">{test.name}</h3>
                                            <p className="client-para">{test.role}</p>
                                        </div>
                                    </div>
                                    <div className="tmp-star">
                                        <ul>
                                            {[...Array(test.stars || 5)].map((_, stIdx) => (
                                                <li key={stIdx}><i className="fa-solid fa-star"></i></li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <p className="client-para">{test.quote}</p>
                                <div className="quat-logo">
                                    <img src="/assets/images/testimonial/quat-logo.svg" alt="quat-logo" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="testimonial-arrow-v2">
                    <div className="swiper-button-next"><i className="fa-sharp fa-regular fa-arrow-right"></i></div>
                    <div className="swiper-button-prev"><i className="fa-sharp fa-regular fa-arrow-left"></i></div>
                </div>
            </div>
        </div>
    </section>
    {/*  tmp Clients Testimonial End  */}

    {/*  Tpm My Skill Area Start  */}
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
    {/*  Tpm My Skill Area End  */}

    {/*  Tpm Get In touch start  */}
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
                                        <a href="#">{profile.email}</a>
                                    </div>
                                </li>
                                <li className="tmp-scroll-trigger tmp-fade-in animation-order-2">
                                    <span className="ft-icon"><i className="fa-solid fa-location-dot"></i></span>
                                    <div className="ft-link-wrap">
                                        <h4 className="link-title">Location:</h4>
                                        <div>{profile.location}</div>
                                    </div>
                                </li>
                                <li className="tmp-scroll-trigger tmp-fade-in animation-order-3 tmp-link-animation">
                                    <span className="ft-icon"><i className="fa-solid fa-location-dot"></i></span>
                                    <div className="ft-link-wrap">
                                        <h4 className="link-title">Contact:</h4>
                                        <a href="#">{profile.phone}</a>
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
    {/*  Tpm Get In touch End  */}

    {/*  Tpm Blog and news Area Start  */}
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
                {/*  Start Blog Card   */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 paralax-image">
                    <div className="blog-card-style-two tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1 single-animation" data-bs-toggle="modal" data-bs-target="#exampleModalCenters">

                        <div className="blog-card-img">
                            <div className="img-box">
                                <a href="javascript:void(0)">
                                    <img src="/assets/images/blog/blog-img-6.jpg" alt="Blog Thumbnail" />
                                </a>
                            </div>
                        </div>
                        <div className="blog-content-wrap">
                            <div className="blog-tags">
                                <ul>
                                    <li>
                                        <a href="#"><i
                                className="fa-regular fa-user"></i>James Carter</a>
                                    </li>
                                    <li>
                                        <a href="#"><i
                                className="fa-regular fa-comments"></i>Comments
                                            (05)</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="blog-title"><a href="javascript:void(0)">
                                    Building the Future with Software Engineering
                                </a></h3>
                            <div className="tmp-button-here">
                                <a className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon" href="javascript:void(0)">
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
                {/*  End Blog Card   */}

                {/*  Start Blog Card   */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 paralax-image">
                    <div className="blog-card-style-two tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1 single-animation" data-bs-toggle="modal" data-bs-target="#exampleModalCenters">

                        <div className="blog-card-img">
                            <div className="img-box">
                                <a href="javascript:void(0)">
                                    <img src="/assets/images/blog/blog-img-7.jpg" alt="Blog Thumbnail" />
                                </a>
                            </div>
                        </div>
                        <div className="blog-content-wrap">
                            <div className="blog-tags">
                                <ul>
                                    <li>
                                        <a href="#"><i
                                className="fa-regular fa-user"></i>David Walker</a>
                                    </li>
                                    <li>
                                        <a href="#"><i
                                className="fa-regular fa-comments"></i>Comments
                                            (03)</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="blog-title"><a href="javascript:void(0)">
                                    Latest Insights in Software Development
                                </a></h3>
                            <div className="tmp-button-here">
                                <a className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon" href="javascript:void(0)">
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
                {/*  End Blog Card   */}

                {/*  Start Blog Card   */}
                <div className="col-xl-4 col-lg-6 col-md-6 col-12 paralax-image">
                    <div className="blog-card-style-two tmp-scroll-trigger tmponhover tmp-fade-in animation-order-1 single-animation" data-bs-toggle="modal" data-bs-target="#exampleModalCenters">

                        <div className="blog-card-img">
                            <div className="img-box">
                                <a href="javascript:void(0)">
                                    <img src="/assets/images/blog/blog-img-8.jpg" alt="Blog Thumbnail" />
                                </a>
                            </div>
                        </div>
                        <div className="blog-content-wrap">
                            <div className="blog-tags">
                                <ul>
                                    <li>
                                        <a href="#"><i
                                className="fa-regular fa-user"></i>Mesbah</a>
                                    </li>
                                    <li>
                                        <a href="#"><i
                                className="fa-regular fa-comments"></i>Comments
                                            (05)</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="blog-title"><a href="javascript:void(0)">Inspiring
                                    the World, One Project at a Time for the man</a></h3>
                            <div className="tmp-button-here">
                                <a className="tmp-btn hover-icon-reverse btn-border btn-md tmp-modern-button radius-round download-icon" href="javascript:void(0)">
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
                {/*  End Blog Card   */}
            </div>
        </div>
    </section>
    {/*  Tpm Blog and news Area End  */}

    {/*  Start Footer Area   */}

    <div className="footer-stars-animation-wrapper-footer-two">
        <footer className="footer-area footer-style-two-wrapper bg-color-footer bg_images tmp-section-gap">
            <div className="container">
                <div className="footer-main footer-style-two">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className="single-footer-wrapper border-right mr--20">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="/assets/images/logo/dark-logo-virtuo.png" alt="Virtuo - Personal Portfolio HTML Template for developers and freelancers" />
                                    </a>
                                </div>
                                <p className="description">{footer.bio || profile.sidebarBio}</p>
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
                                    <li><span className="ft-icon"><i className="fa-solid fa-phone"></i></span><a href="#">{profile.phone}</a></li>
                                    <li><span className="ft-icon"><i className="fa-solid fa-location-dot"></i></span>{profile.location}</li>
                                    <li><span className="ft-icon"><i className="fa-solid fa-envelope"></i></span><a href="#">{profile.email}</a></li>
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
                            <p className="copy-right-para" suppressHydrationWarning>© Chamnab Mey {new Date().getFullYear()} | All Rights Reserved</p>
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

    {/*  End Footer Area   */}
    {/*  Start trigger modal  */}
    <div className="modal fade show" id="exampleModalCenters" tabIndex={-1} role="dialog" aria-modal="true">
        <div className="modal-dialog modal-dialog-centered modal-news" role="document">
            <div className="modal-content">

                <div className="modal-header">
                    <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                    </button>
                </div>

                {/*  End of .modal-header  */}

                <div className="modal-body">
                    <img className="img-fluid mb--30" src="/assets/images/blog/blog-img-7.jpg" alt="Blog Thumbnail" />
                    <div className="news-details">
                        <span className="date">10 March, 2025</span>
                        <h2>Digital Marketo Expands to a New Headquarters.</h2>
                        <p>We are excited to announce the grand opening of our new headquarters, a space designed to foster innovation and collaboration.
                            This move marks a significant milestone in our journey toward growth and excellence.</p>
                        <h4>Enhancing Workspaces for Productivity.</h4>
                        <p>Our new office is equipped with state-of-the-art facilities, promoting creativity and teamwork.
                            The modern design, coupled with advanced technology, aims to improve efficiency and employee well-being.</p>
                        <p>We believe this new environment will enable us to serve our clients better and drive success.
                            Our team is enthusiastic about the future, and we can&apos;t wait to achieve new heights together.</p>
                        <h4>Future Prospects and Innovations.</h4>
                        <p>With this expansion, we are set to introduce new services and solutions tailored to meet evolving market needs.
                            Our commitment to quality and innovation remains steadfast as we continue to grow.</p>
                    </div>


                    {/*  Comment Section Area Start  */}
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
                                        <a className="tmp-btn hover-icon-reverse btn-border tmp-modern-button radius-round download-icon" href="javascript:void(0)">
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
                    {/*  Comment Section End  */}
                </div>
                {/*  End of .modal-body  */}
            </div>
        </div>
    </div>
    {/*  End trigger modal  */}
    {/*  Modal Portfolio Body area Start  */}
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
                            {/*  End of .text-content  */}
                        </div>
                    </div>
                    {/*  End of .row Body */}
                </div>
            </div>
        </div>
    </div>
    {/*  End Modal Portfolio area  */}





    {/*  ready chatting option via email  */}
    <div className="ready-chatting-option tmp-ready-chat">
        <input type="checkbox" id="click" />
        <label htmlFor="click">
            <i className="fab fa-facebook-messenger"></i>
            <i className="fas fa-times"></i>
        </label>
        <div className="wrapper">
            <div className="head-text">
                Let&apos;s chat with me? - Online
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
    {/*  ready chatting option via email end  */}
    {/*  progress area start  */}
    <div className="scrollToTop" style={{ display: 'block' }}>
        <div className="arrowUp">
            <i className="fa-light fa-arrow-up"></i>
        </div>
        <div className="water" style={{ transform: 'translate(0px, 87%)' }}>
            <svg viewBox="0 0 560 20" className="water_wave water_wave_back">
                <use xlinkHref="#wave" />
            </svg>
            <svg viewBox="0 0 560 20" className="water_wave water_wave_front">
                <use xlinkHref="#wave" />
            </svg>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 560 20" style={{ display: 'none' }}>
                <symbol id="wave">
                    <path d="M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z" fill="#fff"></path>
                    <path d="M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z" fill="#fff"></path>
                    <path d="M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z" fill="#fff"></path>
                    <path d="M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z" fill="#fff"></path>
                </symbol>
            </svg>

        </div>
    </div>
    {/*  progress area end  */}
    </>
  );
}
