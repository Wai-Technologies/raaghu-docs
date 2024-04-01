import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';


export default function Home(): React.JSX.Element {
	const { siteConfig } = useDocusaurusContext();
	const stepsData = [
		{
			"step": 1,
			"title": "Pre Requirements",
			"imageSrc": "Landing page/prerequirements.png",
			"altText": "Pre Requirement"
		},
		{
			"step": 2,
			"title": "Install ABP CLI & Login",
			"imageSrc": "Landing page/clilogin.png",
			"altText": "Install ABP CLI & Login"
		},
		{
			"step": 3,
			"title": "Install ABP suite",
			"imageSrc": "Landing page/abpsuite.png",
			"altText": "Install ABP suite"
		},
		{
			"step": 4,
			"title": "Create new solution, project & database",
			"imageSrc": "Landing page/newsolution.png",
			"altText": "Create new solution, project & database"
		},
		{
			"step": 5,
			"title": "Create Server side",
			"imageSrc": "Landing page/serverside.png",
			"altText": "Create Server side"
		},
		{
			"step": 6,
			"title": "Book list page & Create a new book",
			"imageSrc": "Landing page/booklistpage.png",
			"altText": "Book list page & Create a new book"
		}
	];

	const carouselData = [
		[
			{
				"image": "Landing page/Account.svg",
				"title": "Account",
				"description": "Login, register, forgot password, email activation, social logins and other account related functionalities"
			},
			{
				"image": "Landing page/Audit-Logging.svg",
				"title": "Audit Logging",
				"description": "Reporting the user audit logs and entity history in details"
			},
			{
				"image": "Landing page/Chat.svg",
				"title": "Chat",
				"description": "Real time messaging between users"
			},
			
		],
		[{
			"image": "Landing page/CMS-Kit.svg",
			"title": "CMS Kit",
			"description": "Building blocks to create your own Content Management System"
		},
			{
				"image": "Landing page/File-Management.svg",
				"title": "File Management",
				"description": "Organize, upload/download files as per hierarchy."
			},
			{
				"image": "Landing page/Forms.svg",
				"title": "Forms",
				"description": "Create forms and surveys"
			},
		],
		[
			{
				"image": "Landing page/GDPR.svg",
				"title": "GDPR",
				"description": "This module allows users to download and delete their personal data collected by the application"
			},
			{
				"image": "Landing page/Language-Management.svg",
				"title": "Language Management",
				"description": "Add or remove languages and localize the application UI on the fly"
			},
			{
				"image": "Landing page/Raaghu-Theming.svg",
				"title": "Raaghu Theming",
				"description": "Switch to desired themes or customize as per brand guidelines"
			},
		],
		[
			{
				"image": "Landing page/OpenIddict-UI.svg",
				"title": "OpenIddict UI",
				"description": "User, role, claims and permission management"
			},
			{
				"image": "Landing page/Payment.svg",
				"title": "Payment",
				"description": "Provides integration for different payment gateways"
			},
			{
				"image": "Landing page/SaaS.svg",
				"title": "SaaS",
				"description": "Manage tenants, editions and features to create your multi-tenant / SaaS application"
			},
		],
		[
			{
				"image": "Landing page/Text-Template-Management.svg",
				"title": "Text Template Management",
				"description": "Edit text/email templates on the user interface"
			},
			{
				"image": "Landing page/Blogging.svg",
				"title": "Blogging",
				"description": "Create and manage your own blogs"
			}
		]
	];
	const imageInfo = [
		{ src: 'Landing page/abp-logo.svg', alt: 'Abp commercial' },
		{ src: 'Landing page/bootstrap-logo.svg', alt: 'bootstrap' },
		{ src: 'Landing page/figma-logo.svg', alt: 'figma' },
		{ src: 'Landing page/typescript-logo.svg', alt: 'typescript' },
		{ src: 'Landing page/visual-studio-logo.svg', alt: 'visual studio' },
		{ src: 'Landing page/lottiefiles-logo.svg', alt: 'lottie files' },
		{ src: 'Landing page/storybook-logo.svg', alt: 'storybook' },
		{ src: 'Landing page/xd-logo.svg', alt: 'xd' }
	];

	return (
		<Layout
			title={`Home`}
			description="Description will go into a meta tag in <head />">
			<main>
				<div className="container-fluid bg-blue landing-banner">
					<div className="container">
						<div className="row align-items-center py-lg-5 py-xxl-0 py-xl-0 py-md-0 py-0">
							<div className="col-xxl-5 col-xl-6 col-lg-7 col-md-12 pt-md-5 mt-md-5 pt-xxl-0 pt-xl-0 pt-lg-0 pt-5 mt-xxl-0 mt-xl-0 mt-lg-0 mt-4 px-xxl-2 px-xl-3 px-lg-3 px-md-5 px-3">
								<div className="">
									<div className="d-flex align-items-center gap-3">
										<div className="d-flex align-items-center gap-2">
											<img src="Landing page/React-icon.png" height="22px" alt="abp commercial logo" />
											<p className="mb-0 landing__para">React</p>
										</div>
										<div>
											<p className="mb-0 fs-5 fw-semibold landing__para">+</p>
										</div>
										<div className="d-flex align-items-center">
											<img src="Landing page/abp-commercial-logo.png" height="22px" className="abp-logo" alt="abp commercial logo" />
											<p className="mb-0 commercial">Commercial</p>
										</div>
									</div>
									<div className="fw-bold pt-2">
										<p className="banner-gradient fw-bolder mb-0">micro frontend </p>
										<p className="banner-gradient-outline ds-grad mb-0"> design system  </p>
										<h6 className="fs-5 fw-normal lh-base pe-xxl-5 pe-lg-5 me-lg-4 pe-md-0 me-md-0 py-4 landing__para h6-mobile">Highly Customisable Dashboards, Built-in pages, Charts for your Modern Web applications</h6>
									</div>
								</div>
							</div>
							<div className="col-xxl-7 col-xl-6 col-lg-5 col-md-12">
								<img src="Landing page/landing-banner.png" className="banner-text" />
							</div>
						</div>
					</div>
				</div>
				{/* how to get started section */}
				<div className="container-fluid py-5 mb-4 bg-white">
					<div className="container">
						<div className="mb-4 pb-5 pt-4 text-center">
							<label className="fs-2 fw-semibold text-black">How to get started</label>
						</div>
						<div className="row">
							{stepsData.map((step, index) => (
								<div key={index} className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-12 mb-5">
									<div className="full-withradius border-0 card h-100 mx-4 px-xxl-5 px-xl-5 px-lg-5 px-md-3 px-0 mx-xl-0 mx-md-0 mx-xxl-4 py-5 text-center">
										<div className="pb-3">
											<img src={step.imageSrc} height="60px" width="60px" alt={step.altText} />
										</div>
										<div className="px-5 px-xl-0 px-xxl-5 px-md-0">
											<label htmlFor="floatingInput" className="form-label mb-0 fw-semibold">{step.step}. {step.title}</label>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* technology stack */}
				<div className="container-fluid gradient-border"></div>
				<div className="container-fluid py-xxl-5 py-xl-5 py-lg-5 py-md-5 py-0 technology-stack" style={{ backgroundImage: "url('Landing page/technology-stack-bg.png')" }}>
					<div className="container">
						<div className="pb-3 pt-4 text-center">
							<label htmlFor="Technology Stack" className='text-white fs-2 form-label mb-0 fw-semibold'>Technology Stack</label>
						</div>
						<div className="technology-logo d-flex py-5 justify-content-between">
							{imageInfo.map((info, index) => (
								<img key={index} src={info.src} alt={info.alt} />
							))}
						</div>
					</div>
				</div>
				{/* Pre-Built Application Modules */}
				<div className="container-fluid py-5 bg-black mt-7">
					<div className="container pb-5">
						<div className="py-5 mb-4 text-center">
							<label className="fs-2 fw-semibold text-white">Pre-Built Application Modules</label>
						</div>
						{carouselData.map((slide, index) => (
							<div key={index}>
								<div className="row mx-auto">
									{slide.map((item, itemIndex) => (
										<div key={itemIndex} className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 mb-5 pe-xxl-4 pe-xl-4 pe-lg-4">
											<div className="card border-gradient-primary bg-transparent border-0 px-xxl-5 px-xl-3 px-lg-0 px-md-0 px-0 py-3 h-100">
												<div className="card-body text-center">
													<div className="pb-1">
														<img src={item.image} alt={item.title} height="48px" width="40px" />
													</div>
													<label className="fw-semibold text-white">{item.title}</label>
													<p className="text-small fw-light px-xxl-4 px-xl-0 px-lg-4 px-0 text-blue-50 px-md-0">{item.description}</p>
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

			</main>
		</Layout>
	);
}
