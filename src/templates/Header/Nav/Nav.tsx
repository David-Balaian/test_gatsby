import React, { useState } from "react";
import "./Nav.css";
import {GatsbyImage, getImage, IGatsbyImageData} from "gatsby-plugin-image";

interface Link {
  target: string;
  title: string;
  url: string;
}

interface ExtendedMenuItem {
  name: string;
  type: "extended";
  list: { link: Link }[];
  imagecontainer: {
    redirecturl: string;
    title: string;
    description: string;
    image: {
      node: {
        id: string;
        gatsbyImage: IGatsbyImageData;
      };
    };
  };
}

interface SimpleMenuItem {
  name: string;
  type: "extended";
  list: {
    header: string;
    links: { link: Link }[];
  }[];
}

interface Props {
  extendedMenuItems?: ExtendedMenuItem[];
  simpleMenuItems?: SimpleMenuItem[];
  logo: string
}

const Nav: React.FC<Props> = ({
    extendedMenuItems = [],
    simpleMenuItems = [],
    logo
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  console.log(extendedMenuItems, simpleMenuItems, 'items')
  const handleMouseEnter = (name: string) => {
    setActiveMenu(name);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };
  const renderExtendedMenu = (item: ExtendedMenuItem) => (
    <div className="menu-content">
      <div className="image-section">
          {/*<img*/}
          {/*  src={item.imagecontainer.image.node.publicUrl}*/}
          {/*  alt={item.imagecontainer.title}*/}
          {/*/>*/}
        {item.imagecontainer.image.node &&

          <GatsbyImage
            image={item.imagecontainer.image.node.gatsbyImage}
            alt={item.imagecontainer.title}
            className="gatsby-image"
            style={{width: "600px", height: "100%"}}
           />
        }

        <div style={{ display: "flex", flexDirection: "column" }}>
          <h4>{item.imagecontainer.title}</h4>
          <p>{item.imagecontainer.description}</p>
          <a href={item.imagecontainer.redirecturl} className={'redirectArrow'} />
        </div>
      </div>

      <div className="links-section">
        {item.list.map(({ link }, idx) => (
          <a key={idx} href={link.url} target={link.target}>
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );

  const renderSimpleMenu = (item: SimpleMenuItem) => (
    <div className="menu-content">
      {item.list.map((group, idx) => (
        <div key={idx} className="group">
          <h4>{group.header}</h4>
          {group.links.map(({ link }, i) => (
            <a key={i} href={link.url} target={link.target}>
              {link.title}
            </a>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt={'logo'} className={'logo'} />
        <div style={{display: "flex"}}>
          {extendedMenuItems.map((item, index) => (
            <div
              key={`extended-${index}`}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <span>{item.name}</span>
              <div>
                {activeMenu === item.name && renderExtendedMenu(item)}
              </div>
            </div>
          ))}

          {simpleMenuItems.map((item, index) => (
            <div
              key={`simple-${index}`}
              className="nav-item"
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <span>{item.name}</span>
              {activeMenu === item.name && renderSimpleMenu(item)}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
