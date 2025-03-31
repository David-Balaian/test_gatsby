import React from 'react';
import './menu.css'
interface Link {
  title: string;
  url: string;
  target?: string;
}

interface ServiceSection {
  serviceHeader: string;
  servicelink: Array<{
    link: Link;
  }>;
}

interface ServicesData {
  industries: {
    industries: {
      links: Array<{
        link: Link;
      }>;
      imagecontainer: {
        description: {
          description: string;
          header: string;
        };
        image: {
          node: {
            sourceUrl: string;
          };
        };
      };
    };
  };
  services: {
    services: Array<{
      servicescontent: ServiceSection[];
    }>;
  };
}

const ServicesComponent: React.FC<{ data: ServicesData }> = ({ data }) => {
  const { industries, services } = data;

  return (
    <div className="services-container">
      {/* Industries Section */}
      <section className="industries-section">
        <div className="industry-content">
          <div className="industry-text">
            <h2>{industries.industries.imagecontainer.description.header}</h2>
            <p>{industries.industries.imagecontainer.description.description}</p>
          </div>
          <div className="industry-image">
            <img 
              src={industries.industries.imagecontainer.image.node.sourceUrl} 
              alt={industries.industries.imagecontainer.description.header}
            />
          </div>
        </div>
        <div className="industry-links">
          <h3>Industries</h3>
          <ul>
            {industries.industries.links.map((item, index) => (
              <li key={index}>
                <a href={item.link.url} target={item.link.target || '_self'}>
                  {item.link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h1>Services</h1>
        {services.services.map((serviceGroup, groupIndex) => (
          <div key={groupIndex} className="services-grid">
            {serviceGroup.servicescontent.map((section, sectionIndex) => (
              <div key={sectionIndex} className="service-category">
                <h2>{section.serviceHeader}</h2>
                <ul>
                  {section.servicelink.map((linkItem, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={linkItem.link.url} target={linkItem.link.target || '_self'}>
                        {linkItem.link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

// Example usage with your data
const servicesData: ServicesData = {
  industries: {
    industries: {
      links: [
        {
          link: {
            title: "Fintech",
            url: "https://volo.global/industries/fintech",
            target: ""
          }
        },
        {
          link: {
            title: "Supply Chain & Logistics",
            url: "https://volo.global/industries/supply-chain-logistics",
            target: ""
          }
        },
        {
          link: {
            title: "Commodities",
            url: "https://volo.global/industries/commodities",
            target: ""
          }
        }
      ],
      imagecontainer: {
        description: {
          description: "Outsourcing vs. in-house software development for companies in the commodities industry - explore your options for effective digital transformation.",
          header: "Digitizing Commodities"
        },
        image: {
          node: {
            sourceUrl: "https://wp.volo.global/wp-content/uploads/2025/03/unnamed-1.jpg"
          }
        }
      }
    }
  },
  services: {
    services: [
      {
        servicescontent: [
          {
            serviceHeader: "Expertise & Consulting",
            servicelink: [
              {
                link: {
                  target: "",
                  title: "Software Development Consulting",
                  url: "https://volo.global/services/software-development-consulting"
                }
              },
              {
                link: {
                  target: "",
                  title: "Digital Transformation",
                  url: "https://volo.global/services/digital-transformation"
                }
              },
              {
                link: {
                  target: "",
                  title: "BA Consulting",
                  url: "https://volo.global/services/ba-consulting"
                }
              },
              {
                link: {
                  target: "",
                  title: "PM Consulting",
                  url: "https://volo.global/services/pm-consulting"
                }
              },
              {
                link: {
                  target: "",
                  title: "QA Services",
                  url: "https://volo.global/services/qa-services"
                }
              },
              {
                link: {
                  target: "",
                  title: "Cloud Consulting",
                  url: "https://volo.global/services/cloud-consulting"
                }
              }
            ]
          },
          {
            serviceHeader: "Development",
            servicelink: [
              {
                link: {
                  target: "",
                  title: "Enterprise Development Services",
                  url: "https://volo.global/services/enterprise-development-services"
                }
              },
              {
                link: {
                  target: "",
                  title: "Mobile App Development",
                  url: "https://volo.global/services/mobile-app-development"
                }
              },
              {
                link: {
                  target: "",
                  title: "IT Infrastructure Management IoT",
                  url: "https://volo.global/services/it-infrastructure-management"
                }
              },
              {
                link: {
                  target: "",
                  title: "AI/ML",
                  url: "https://volo.global/services/ai-ml"
                }
              },
              {
                link: {
                  target: "",
                  title: "Blockchain",
                  url: "https://volo.global/services/blockchain"
                }
              },
              {
                link: {
                  target: "",
                  title: "IT Services for Startups",
                  url: "https://volo.global/services/it-services-startups"
                }
              }
            ]
          },
          {
            serviceHeader: "Technologies",
            servicelink: [
              {
                link: {
                  target: "",
                  title: ".NET",
                  url: "https://volo.global/technologies/dotnet"
                }
              },
              {
                link: {
                  target: "",
                  title: "Python",
                  url: "https://volo.global/technologies/python"
                }
              },
              {
                link: {
                  target: "",
                  title: "Angular",
                  url: "https://volo.global/technologies/angular"
                }
              },
              {
                link: {
                  target: "",
                  title: "React",
                  url: "https://volo.global/technologies/react"
                }
              },
              {
                link: {
                  target: "",
                  title: "iOS",
                  url: "https://volo.global/technologies/ios"
                }
              },
              {
                link: {
                  target: "",
                  title: "Android",
                  url: "https://volo.global/technologies/android"
                }
              },
              {
                link: {
                  target: "",
                  title: "Flutter",
                  url: "https://volo.global/technologies/flutter"
                }
              },
              {
                link: {
                  target: "",
                  title: "Kubernetes",
                  url: "https://volo.global/technologies/kubernetes"
                }
              }
            ]
          },
          {
            serviceHeader: "Solutions",
            servicelink: [
              {
                link: {
                  target: "",
                  title: "HRMS",
                  url: "https://volo.global/solutions/hrms"
                }
              },
              {
                link: {
                  target: "",
                  title: "Green Finance",
                  url: "https://volo.global/solutions/green-finance"
                }
              },
              {
                link: {
                  target: "",
                  title: "Asset Management",
                  url: "https://volo.global/solutions/asset-management"
                }
              },
              {
                link: {
                  target: "",
                  title: "TradeCloud",
                  url: "https://volo.global/solutions/tradecloud"
                }
              },
              {
                link: {
                  target: "",
                  title: "StratEx",
                  url: "https://volo.global/solutions/stratex"
                }
              }
            ]
          }
        ]
      }
    ]
  }
};

export default ServicesComponent;