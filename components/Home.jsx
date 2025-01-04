import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Home = () => {
  const jobs = [
    {
      Mode: "In Office job",
      Role: "Manager/Sr. Manager - Talent Acquisition",
      CompanyName: "Vianaar Homes Private Limited",
      moreInfos: [" Full Time - Permanent", "6 - 8 Years"],
      location: "New Delhi / India",
      bgColor: "lime-100"
    },
    {
        Mode: "In Office job",
        Role: "US Third party collection",
        CompanyName: "INTINERI INFOSOL PRIVATE LIMITED",
        moreInfos: [" Full Time - Permanent", "1 - 6 Years"],
        location: "Noida / India",
        bgColor: "amber-100"
      },
    {
      Mode: "Remote job",
      Role: "Senior Project Manager - Enterprise Implementation",
      CompanyName: "fusionSpan",
      moreInfos: [" Full Time - Permanent", "5 - 7 Years"],
      location: "canada / Canada",
      bgColor: "green-100"
    },
    {
        Mode: "In Office job",
        Role: "Head - Data Analytics",
        CompanyName: "Katyayani Organics",
        moreInfos: [" Full Time - Permanent", "5 - 10 Years"],
        location: "Bhopal / India",
        bgColor: "orange-100"
      },
      {
        Mode: "In Office job",
        Role: "Field Sales Executive",
        CompanyName: "NetAmbit",
        moreInfos: [" Full Time - Permanent", "0 - 4 Years"],
        location: "Bengaluru / Bangalore / India",
        bgColor: "purple-100"
      },
      {
        Mode: "In Office job",
        Role: "Photographer/Videographer",
        CompanyName: "PlanetSpark",
        moreInfos: [" Full Time - Permanent", "2 - 4 Years"],
        location: "Faridabad | Gurgaon / Gurugram / India",
        bgColor: "sky-100"
      },
      {
        Mode: "In Office job",
        Role: "CAD Application Engineer",
        CompanyName: "Marvell Technology",
        moreInfos: [" Full Time - Permanent", "3 - 5 Years"],
        location: "Bucharest / Romania",
        bgColor: "gray-300"
      },
      {
        Mode: "In Office job",
        Role: "Pre-Sales Support / Customer support",
        CompanyName: "LifeMagic Groupy",
        moreInfos: [" Full Time - Permanent", "0 - 3 Years"],
        location: "Hyderabad - Secunderabad / India",
        bgColor: "blue-100"
      },
      {
        Mode: "In Office job",
        Role: "Senior Digital marketing Executive",
        CompanyName: "SIB Infotech",
        moreInfos: [" Full Time - Permanent", "3 - 6 Years"],
        location: "New Delhi / India",
        bgColor: "pink-100"
      },
  ];
const quickSearch = [{Title:"#Fresher", Link:"https://www.jobringer.com/jobs-for-fresher"},{Title:"#WorkFromHome", Link:"https://www.jobringer.com/jobs-for-WFH"},{Title:"#WFH", Link:"https://www.jobringer.com/jobs-for-WFH"},{Title:"#IT", Link:"https://www.jobringer.com/jobs-in-information-technology"},{Title:"#HR", Link:"https://www.jobringer.com/jobs-in-human-resource"},{Title:"#BackOffice", Link:"https://www.jobringer.com/jobs-for-back-office"},{Title:"#BPOJob", Link:"https://www.jobringer.com/jobs-for-BPO"},{Title:"#ITES", Link:"https://www.jobringer.com/jobs-in-ITES"},{Title:"#Finance", Link:"https://www.jobringer.com/jobs-in-finance"},{Title:"#Accounts", Link:"https://www.jobringer.com/jobs-in-accounts"},{Title:"#Medical", Link:"https://www.jobringer.com/jobs-in-medical"},{Title:"#Pharma", Link:"https://www.jobringer.com/jobs-in-pharma"},{Title:"#Manager", Link:"https://www.jobringer.com/jobs-for-manager"},{Title:"#Developer", Link:"https://www.jobringer.com/jobs-for-developer"},{Title:"#Marketing", Link:"https://www.jobringer.com/jobs-for-Marketing"},{Title:"#Engineering", Link:"https://www.jobringer.com/jobs-in-Engineering"},{Title:"#Non-GovernmentJobs", Link:"https://www.jobringer.com/jobs"}]

const featuredEmployers = [{Name:"DIMPLE DESIGN STUDIO", Link:"https://www.jobringer.com/images/content/company-logo/hjp5db94c0c82aab6c7b6311173b5f22241.png"},{Name:"Auric Valuation", Link:"https://www.jobringer.com/images/content/company-logo/hjp0feaa232e184e1d59873d22b76643789.png"},{Name:"Decipher Zone Technologies Pvt. Ltd.", Link:"https://www.jobringer.com/images/content/company-logo/hjp2717133828c8041b032445c7355fab71.png"},{Name:"Consummate HR Consultants", Link:"https://www.jobringer.com/images/content/company-logo/hjp5e885538f4d42aab2d6a8128a7b77d64.png"},{Name:"The Amazon Guru", Link:"https://www.jobringer.com/images/content/company-logo/hjp932b819b630effc3b035bd81a2452685.png"},{Name:"Nirwana Hometel Hotel Jaipur", Link:"https://www.jobringer.com/images/content/company-logo/hjp5531cb4085ce77b8ac09f53753cf53c3.png"},{Name:"Cosette Network Pvt. Ltd.", Link:"https://www.jobringer.com/images/content/company-logo/hjp0aff3cc87df33517eb6d15326dcd7760.png"},{Name:"Nine Jewellery", Link:"https://www.jobringer.com/images/content/company-logo/hjpd0543459eacac5e99ea30942ced54b7f.png"},{Name:"Closeloop Technologies", Link:"https://www.jobringer.com/images/content/company-logo/hjp164d8e5793dd918f8e0c28f7107893ed.png"},{Name:"Imperial Milestones", Link:"https://www.jobringer.com/images/content/company-logo/hjp9beb249193bfadd89aa0824fdab7f2eb.png"}, {Name:"DIMPLE DESIGN STUDIO", Link:"https://www.jobringer.com/images/content/company-logo/hjp5db94c0c82aab6c7b6311173b5f22241.png"},{Name:"Auric Valuation", Link:"https://www.jobringer.com/images/content/company-logo/hjp0feaa232e184e1d59873d22b76643789.png"},{Name:"Decipher Zone Technologies Pvt. Ltd.", Link:"https://www.jobringer.com/images/content/company-logo/hjp2717133828c8041b032445c7355fab71.png"},{Name:"Consummate HR Consultants", Link:"https://www.jobringer.com/images/content/company-logo/hjp5e885538f4d42aab2d6a8128a7b77d64.png"},{Name:"The Amazon Guru", Link:"https://www.jobringer.com/images/content/company-logo/hjp932b819b630effc3b035bd81a2452685.png"},{Name:"Nirwana Hometel Hotel Jaipur", Link:"https://www.jobringer.com/images/content/company-logo/hjp5531cb4085ce77b8ac09f53753cf53c3.png"},{Name:"Cosette Network Pvt. Ltd.", Link:"https://www.jobringer.com/images/content/company-logo/hjp0aff3cc87df33517eb6d15326dcd7760.png"},{Name:"Nine Jewellery", Link:"https://www.jobringer.com/images/content/company-logo/hjpd0543459eacac5e99ea30942ced54b7f.png"},{Name:"Closeloop Technologies", Link:"https://www.jobringer.com/images/content/company-logo/hjp164d8e5793dd918f8e0c28f7107893ed.png"},{Name:"Imperial Milestones", Link:"https://www.jobringer.com/images/content/company-logo/hjp9beb249193bfadd89aa0824fdab7f2eb.png"},]

const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredEmployers.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [featuredEmployers.length]);


  const sliderStyle = {
    transform: `translateX(-${currentIndex * 10}%)`,
    transition: "transform 0.5s ease-in-out",
  };


  return (
    
    <div className="bg-gray-100 min-h-screen w-screen py-44 md:py-24 flex flex-col items-center">
    <SearchBar />
    <div className="flex flex-col lg:flex-row px-4 md:px-8 w-full gap-6">
      <section className="w-full lg:w-1/5 flex flex-col items-center px-4 py-8">
        <div className="w-full h-fit rounded-3xl bg-zinc-900 text-white text-sm p-6 md:p-8">
          <h1 className="text-xl md:text-2xl font-semibold pb-4">
            Quick Job Search &nbsp;<i className="bi bi-search"></i>
          </h1>
          <div className="flex flex-wrap gap-4">
            {quickSearch.map((job) => (
              <Link
                key={job.Title}
                className="border-[1px] border-gray-500 rounded-2xl px-2 py-1"
                to={job.Link}
                target="_blank"
              >
                {job.Title}
              </Link>
            ))}
          </div>
        </div>
      </section>
  
      <section className="w-full lg:w-4/5 px-4 flex flex-col gap-4 md:gap-8 py-4">
        <h2 className="font-bold text-xl md:text-3xl">Featured Jobs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job, idx) => (
            <span
              key={idx}
              className="border-2 border-zinc-300 rounded-2xl bg-gray-100 h-full p-4 text-sm"
            >
              <div
                className={`bg-${job.bgColor} h-fit rounded-xl p-4 flex flex-col gap-2`}
              >
                <span className="w-fit bg-white rounded-3xl font-medium p-2">
                  {job.Mode}
                </span>
                <h2>{job.CompanyName}</h2>
                <h1 className="text-lg md:text-xl">{job.Role}</h1>
                <div className="flex flex-wrap gap-2">
                  {job.moreInfos.map((info, idx) => (
                    <span
                      key={idx}
                      className="w-fit border-[1px] border-zinc-600 rounded-3xl p-1"
                    >
                      {info}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center p-4">
                <p>{job.location}</p>
                <button className="rounded-3xl bg-black text-white py-1 px-2">
                  Apply
                </button>
              </div>
            </span>
          ))}
        </div>
      </section>
    </div>
  
    <div className="py-12 w-screen flex flex-col justify-center items-center gap-8">
      <h2 className="text-lg md:text-2xl font-semibold">FEATURED EMPLOYERS</h2>
      <div className="relative w-full md:w-5/6 overflow-hidden">
        <div className="flex w-full gap-4 md:gap-8" style={sliderStyle}>
          {featuredEmployers.map((employer, id) => (
            <img
              key={id}
              className="px-8 border-[1px] border-gray-600 rounded-lg h-24 w-fit aspect-video"
              loading="lazy"
              src={employer.Link}
              alt={employer.Name}
            />
          ))}
        </div>
      </div>
    </div>
  
    <div className="flex flex-col lg:flex-row w-full px-6 md:px-12 gap-8 md:gap-16">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-end gap-4">
        <h2 className="text-xl md:text-3xl uppercase font-semibold">
          Apply to Jobs On-The-Go
        </h2>
        <Link
          to="https://play.google.com/store/apps/details?id=com.jobringer.app"
          className="text-base md:text-xl hover:text-blue-700"
        >
          JobRinger Mobile App
        </Link>
        <div className="flex gap-4">
          <Link to="https://play.google.com/store/apps/details?id=com.jobringer.app">
            <img
              src="https://www.jobringer.com/images/anroid.png"
              alt="Android App"
            />
          </Link>
          <Link to="">
            <img src="https://www.jobringer.com/images/ios.png" alt="iOS App" />
          </Link>
        </div>
        <h2 className="text-xl md:text-3xl">Mobile App Download</h2>
      </div>
  
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[400px] md:h-[600px] w-[200px] md:w-[300px]">
          <div className="rounded-[2rem] overflow-hidden w-[172px] md:w-[272px] h-[372px] md:h-[572px] bg-white">
            <img
              src="https://play-lh.googleusercontent.com/hxkaQVGtCnQTBbD0xaJOTEscImsv1XRdVb9qIS7ixRunDsN9hWYl9mrVMaWfDi93wZw=w5120-h2880-rw"
              className="w-[172px] md:w-[272px] h-[372px] md:h-[572px]"
              alt="Mobile App Screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Home;
