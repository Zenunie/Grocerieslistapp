const Footer = ({ length, completed }) => {
  const remaining = length - completed;
  return (
    <footer>
      <p>{length === 0 ? "Ready when you are" : `${remaining} ${remaining === 1 ? "item" : "items"} left`}</p>
      {length > 0 && <span>{completed} completed</span>}
    </footer>
  );
};

export default Footer;
