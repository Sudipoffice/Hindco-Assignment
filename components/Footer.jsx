import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    const date = new Date();
  return (
    <div className="py-8 flex flex-col gap-8 divide-y-2 divide-gray-500 bg-zinc-900 text-white">
  <section className="flex flex-col md:flex-row gap-4 px-4 md:px-[5%]">
    <div className="w-full md:w-[30%] flex flex-col gap-4 justify-center items-center">
      <h2 className="uppercase text-xl md:text-2xl font-semibold">Jobs in India</h2>
      <div className="flex flex-row flex-wrap px-4 gap-4">
        {["Mumbai", "Pune", "Kolkata", "Delhi", "Noida", "Gurgaon", "Bangalore", "Hyderabad", "Mohali", "Chandigarh", "Ahmedabad", "Indore"].map((city) => (
          <p key={city} className="border-[1px] border-gray-500 rounded-2xl p-1 text-sm md:text-base">#{city}</p>
        ))}
      </div>
    </div>
    <div className="w-full md:w-[40%] flex flex-col md:flex-row gap-4 md:gap-10 py-4 justify-center items-center">
      {[
        { label: "Jobs Posted", value: "33567" },
        { label: "Jobs Filled", value: "15153" },
        { label: "Employers", value: "21017" },
        { label: "Active Users", value: "1317987" },
      ].map((stat) => (
        <span key={stat.label} className="flex flex-col justify-center items-center gap-2 md:gap-4">
          <h4 className="text-base md:text-lg">{stat.label}</h4>
          <p className="text-2xl md:text-4xl font-bold text-blue-400">{stat.value}</p>
        </span>
      ))}
    </div>
    <div className="w-full md:w-[30%] flex flex-col gap-4 justify-center items-center">
      <h2 className="uppercase text-xl md:text-2xl font-semibold">International Jobs</h2>
      <div className="flex flex-row flex-wrap px-4 gap-4">
        {["Africa", "USA", "UK", "Australia", "Canada", "Singapore", "Dubai", "Saudi Arabia", "New Zealand"].map((country) => (
          <p key={country} className="border-[1px] border-gray-500 rounded-2xl p-1 text-sm md:text-base">#{country}</p>
        ))}
      </div>
    </div>
  </section>

  <section className="flex flex-col md:flex-row gap-4 md:gap-8 w-screen px-4 md:px-[5%] py-4">
    <div className="w-full md:w-3/4">
      <b>Disclaimer:</b>
      <br />
      All Trademarks and Logos are the property of their respective owners, depicted here purely for representation purpose. | Jobringer.com has taken all reasonable steps to ensure that information on this site is genuine. Job Applicants are advised to evaluate independently. Jobringer.com shall not have any responsibility in this regard. All Jobseeker services are strictly designed & meant only for job search assistance and to maximize the chances for the jobseekers to get their dream job. All Job Seeker Credentials and Employment Opportunities are subject to individual merit & evaluation. We do not guarantee any job to any jobseeker.
    </div>
    <div className="w-full md:w-1/4 flex flex-col justify-center items-center gap-4">
      <h3 className="font-medium">Recognized By</h3>
      <img className="w-20 md:w-40" src="https://www.jobringer.com/images/startuplogo.png" alt="#startupIndia" />
    </div>
  </section>

  <section className="flex flex-col md:flex-row gap-4 md:gap-8 w-screen px-4 md:px-8 py-4">
    <div className="w-full md:w-3/5 flex flex-col md:flex-row justify-center items-center divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-300">
      {["Terms and Conditions", "Privacy Policy", "Refund / Cancellation Policy", "About Us", "Contact Us", "FAQ", "Blogs"].map((link) => (
        <Link key={link} className="px-3 py-2 md:py-0">{link}</Link>
      ))}
    </div>
    <div className="w-full md:w-2/5 flex flex-col justify-center items-center gap-4">
      <h3 className="font-semibold">Follow us on</h3>
      <div className="flex gap-4 text-lg md:text-xl">
        {["whatsapp", "facebook", "twitter", "instagram", "linkedin", "youtube", "telegram"].map((icon) => (
          <i key={icon} className={`bi bi-${icon} border-[2px] border-gray-500 rounded-full px-2 py-1`} />
        ))}
      </div>
    </div>
  </section>

  <section className="flex justify-center items-center text-sm md:text-base text-white">
    © All Rights Reserved @{new Date().getFullYear()} Jobtech Ventures Private Limited.
  </section>
</div>

  )
}

export default Footer
