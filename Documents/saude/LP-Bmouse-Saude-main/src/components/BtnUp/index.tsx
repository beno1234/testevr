export const BtnUP = () => {
  const handleButtonClickPlanos = () => {
    const targetDiv = document.getElementById("home"); // Substitua 'suaDivId' pelo ID da sua div
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      onClick={handleButtonClickPlanos}
      className="flex items-center justify-center  !shadow-md h-[50px] w-[50px] fixed bottom-3  left-3 text-white bg-[#00FFFF] rounded-full cursor-pointer z-50"
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_382_94"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="25"
          height="25"
        >
          <rect
            x="0.750916"
            y="0.641357"
            width="24"
            height="24"
            fill="#ffffff"
          />
        </mask>
        <g mask="url(#mask0_382_94)">
          <path
            d="M8.15092 16.0165L6.75092 14.6165L12.7509 8.61646L18.7509 14.6165L17.3509 16.0165L12.7509 11.4165L8.15092 16.0165Z"
            fill="#1C1B1F"
          />
        </g>
      </svg>
    </a>
  );
};
