function Button({ children, className }) {
  return (
    <div className="p-5">
      <button className={className}>{children}</button>
    </div>
  );
}

export default Button;
