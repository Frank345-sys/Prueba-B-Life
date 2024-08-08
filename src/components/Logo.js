function Logo({ modifier_title, modifier_ellipse }) {
  return (
    <div className="logo">
      <span className={`logo__text ${modifier_title}`}>
        S P H E R{" "}
        <span className="logo__text_e">
          E<div className={`logo__ellipse ${modifier_ellipse}`}></div>
        </span>
      </span>
    </div>
  );
}

export default Logo;
