const BurgerSvg = () => {
  return (
    <svg
      width="220"
      height="200"
      viewBox="0 0 220 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Hambúrguer"
    >
      {/* Drop shadow */}
      <ellipse cx="110" cy="188" rx="82" ry="8" fill="#000" opacity="0.5" />

      {/* Bottom bun */}
      <path
        d="M32 150 Q110 142 188 150 L188 162 Q110 170 32 162 Z"
        fill="#d4872a"
      />
      <path
        d="M32 162 Q110 176 188 162 L188 168 Q110 180 32 168 Z"
        fill="#b8690e"
      />

      {/* Patty */}
      <rect x="26" y="128" width="168" height="20" rx="10" fill="#3d1a06" />
      <path
        d="M26 132 Q110 126 194 132"
        fill="none"
        stroke="#5a2a0a"
        strokeWidth="3"
        opacity="0.5"
      />

      {/* Cheese */}
      <path
        d="M24 118 Q110 126 196 118 L194 130 Q110 136 26 130 Z"
        fill="#f0b429"
      />
      <path d="M30 118 L26 132 L36 128 Z" fill="#f0b429" />
      <path d="M190 118 L194 132 L184 128 Z" fill="#f0b429" />

      {/* Tomato */}
      <path
        d="M28 108 Q110 116 192 108 L190 120 Q110 126 30 120 Z"
        fill="#c0392b"
      />

      {/* Lettuce */}
      <path
        d="M24 96 Q37 87 50 96 Q63 87 78 96 Q92 87 110 96 Q128 87 142 96 Q157 87 170 96 Q184 87 196 96 L194 108 Q110 114 26 108 Z"
        fill="#3d7a18"
      />
      <path
        d="M24 96 Q37 90 50 96 Q63 90 78 96 Q92 90 110 96 Q128 90 142 96 Q157 90 170 96 Q184 90 196 96"
        fill="none"
        stroke="#4e9620"
        strokeWidth="2"
      />

      {/* Top bun underside */}
      <ellipse cx="110" cy="96" rx="86" ry="11" fill="#a86520" />

      {/* Top bun dome */}
      <path
        d="M24 96 C24 96 24 26 110 18 C196 26 196 96 196 96 Z"
        fill="#d4872a"
      />

      {/* Top bun sheen */}
      <path
        d="M62 54 Q110 34 158 54 Q138 36 110 32 Q82 36 62 54 Z"
        fill="#e8a040"
        opacity="0.5"
      />

      {/* Sesame seeds */}
      <ellipse
        cx="84"
        cy="58"
        rx="8"
        ry="3.5"
        fill="#f5dca8"
        transform="rotate(-20 84 58)"
      />
      <ellipse
        cx="110"
        cy="44"
        rx="8"
        ry="3.5"
        fill="#f5dca8"
        transform="rotate(5 110 44)"
      />
      <ellipse
        cx="136"
        cy="58"
        rx="8"
        ry="3.5"
        fill="#f5dca8"
        transform="rotate(20 136 58)"
      />
      <ellipse
        cx="94"
        cy="72"
        rx="7"
        ry="3"
        fill="#f5dca8"
        transform="rotate(-10 94 72)"
      />
      <ellipse
        cx="124"
        cy="70"
        rx="7"
        ry="3"
        fill="#f5dca8"
        transform="rotate(12 124 70)"
      />
    </svg>
  );
};

export default BurgerSvg;
