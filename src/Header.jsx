const Header = ({ title, length }) => {
  return (
    <header>
      <div className="brand-mark" aria-hidden="true"><span>✓</span></div>
      <div className="header-copy"><p className="eyebrow">My shopping list</p><h1>{title}</h1></div>
      <span className="item-count" aria-label={`${length} items`}>{length}</span>
    </header>
  );
};

export default Header;
