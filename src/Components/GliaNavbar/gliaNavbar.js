
import "./gliaNavbar.css";

const GliaNavbar = () => {
  const navItems = ["解決方案", "功能", "定價", "部落格", "觀點", "申請範例"];
  const renderItem = (items) => {
    return items.map((item) => (
      <li className="nav-item" key={item}>
        {item}
      </li>
    ));
  };
  return <ul className="nav">{renderItem(navItems)}</ul>;
};
export default GliaNavbar;
