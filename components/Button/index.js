import { colors } from "../../styles/theme";

const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>

      <style jsx>{`
        button {
          align-items: center;
          background: ${colors.black};
          border-radius: 9999px;
          border: 0;
          color: ${colors.white};
          display: flex;
          font-size: 16px;
          font-weight: 800;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
        }

        button > :global(svg) {
          margin-right: 8px;
        }

        button:hover {
          opacity: 0.5;
        }
      `}</style>
    </>
  );
};

export default Button;
