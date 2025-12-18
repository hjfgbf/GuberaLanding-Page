"use client"
import Logo1 from '../public/images/cilents/Bmc.png';
import Logo2 from '../public/images/cilents/HayaLogo.png';
import Logo3 from '../public/images/cilents/Logo.png';
import Logo4 from '../public/images/cilents/OmsritaraLogo.png';
import Logo5 from '../public/images/cilents/TnLogo.png';



import Image from "next/image";

const clients = [
  { name: "BMC", 
    logo:Logo1,
    url: "https://microsoft.com" 
  },
  { name: "Haya", 
    logo:Logo2,
    url: "https://microsoft.com" 
  },
  { name: "Omsritara", 
    logo:Logo3,
    url: "https://microsoft.com" 
  },
  { name: "TnLogo", 
    logo:Logo4,
    url: "https://microsoft.com" 
  },
  // { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg", url: "https://google.com" },
  // { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg", url: "https://amazon.com" },
  // { name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", url: "https://facebook.com" },
  // { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg", url: "https://netflix.com" },
];

export default function ClientLogos() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="space-y-3 text-center">
            {/* <div className="relative inline-flex">
  <svg
                className="absolute -left-6 -top-2 -z-10"
                width={40}
                height={49}
                viewBox="0 0 40 49"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.7976 -0.000136375L39.9352 23.4746L33.4178 31.7234L13.7686 11.4275L22.7976 -0.000136375ZM9.34947 17.0206L26.4871 40.4953L19.9697 48.7441L0.320491 28.4482L9.34947 17.0206Z"
                  fill="#D1D5DB"
                />
              </svg>
              <span className="rounded-full bg-gray-100 flex items-center justify-center w-12 h-12">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2h5m6 0v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2m6 0a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2z" />
                </svg>
              </span>            
              </div> */}
            <p className="text-2xl font-bold text-gray-900">
              Trusted by teams at
            </p>
            <div className="relative mt-6">
              {/* <div className="overflow-x-auto"> */}
              <div className="">
                <div className="flex items-center gap-8 animate-scroll whitespace-nowrap h-12">
                  {clients.concat(clients).map((client, idx) => (
                    <a
                      key={client.name + idx}
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center h-12 min-w-[120px]"
                      title={client.name}
                    >
                      <div className="relative h-12 w-28 flex items-center justify-center">
                        <Image
                          src={client.logo}
                          alt={client.name}
                          fill
                          className="object-contain grayscale hover:grayscale-0 transition"
                          sizes="112px"
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <style jsx>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                  animation: scroll 20s linear infinite;
                  width: max-content;
                }
              `}</style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
