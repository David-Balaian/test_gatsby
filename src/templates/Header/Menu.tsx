import { Link } from "gatsby";
import React from "react";

type MenuItem = {
  id: string;
  label: string;
  url: string;
  parentId: string | null;
  order: number;
};

type MenuData = {
  node: MenuItem;
  children: MenuData[];
}[];

type MenuProps = {
  menuData: MenuData;
};

const buildMenuTree = (items: MenuData) => {
  const itemMap = new Map<string, MenuData[number]>();
  const rootItems: MenuData = [];

  items.forEach((item) => {
    itemMap.set(item.node.id, { ...item, children: [] });
  });

  items.forEach((item) => {
    if (item.node.parentId && itemMap.has(item.node.parentId)) {
      itemMap.get(item.node.parentId)?.children.push(itemMap.get(item.node.id)!);
    } else {
      rootItems.push(itemMap.get(item.node.id)!);
    }
  });

  return rootItems;
};

const Menu: React.FC<MenuProps> = ({ menuData }) => {
  const menuTree = buildMenuTree(menuData);

  const renderMenu = (items: MenuData) => (
    <ul>
      {items.sort((a, b) => a.node.order - b.node.order).map((item) => (
        <li key={item.node.id}>
          <Link to={item.node.url}>{item.node.label}</Link>
          {item.children.length > 0 && renderMenu(item.children)}
        </li>
      ))}
    </ul>
  );

  return <nav>{renderMenu(menuTree)}</nav>;
};

export default Menu;
