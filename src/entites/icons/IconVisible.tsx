
export default function IconVisible({
    visible,
    width = 15,
  }: {
    visible: boolean;
    width?: number;
  }) {
    return (
      <div className={`block aspect-[15/16] ${visible ? '':'px-px'}`} style={{width: width + "px"}}>
        {visible ? (
          <svg
            className="w-full h-full"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.50006 3.625C2.72943 3.625 1.29568 7.76062 1.28256 7.8025L1.21631 8L1.28193 8.1975C1.29568 8.23938 2.72943 12.375 7.50006 12.375C12.2707 12.375 13.7044 8.23938 13.7176 8.1975L13.7838 8L13.7182 7.8025C13.7044 7.76062 12.2707 3.625 7.50006 3.625ZM7.50006 10.5C6.12131 10.5 5.00006 9.37875 5.00006 8C5.00006 6.62125 6.12131 5.5 7.50006 5.5C8.87881 5.5 10.0001 6.62125 10.0001 8C10.0001 9.37875 8.87881 10.5 7.50006 10.5Z"
              fill="#808080"
            />
            <path
              d="M7.5 6.75C6.8225 6.75 6.25 7.3225 6.25 8C6.25 8.6775 6.8225 9.25 7.5 9.25C8.1775 9.25 8.75 8.6775 8.75 8C8.75 7.3225 8.1775 6.75 7.5 6.75Z"
              fill="#808080"
            />
          </svg>
        ) : (
          <svg
            className="w-full h-full"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.04562 6.62123L1.6325 4.20811C0.6825 5.24373 0.3225 6.28123 0.31625 6.30248L0.25 6.49998L0.315625 6.69748C0.329375 6.73936 1.76312 10.875 6.53375 10.875C7.11438 10.875 7.64313 10.8112 8.12875 10.7044L6.4125 8.98811C5.79455 8.95781 5.20997 8.69872 4.77249 8.26124C4.33501 7.82376 4.07592 7.23918 4.04562 6.62123ZM6.53375 2.12498C5.37437 2.12498 4.42438 2.37748 3.6325 2.74873L1.31687 0.433105L0.433125 1.31686L11.6831 12.5669L12.5669 11.6831L10.5056 9.62186C12.1544 8.40123 12.7425 6.72373 12.7513 6.69748L12.8169 6.49998L12.7513 6.30248C12.7375 6.26061 11.3044 2.12498 6.53375 2.12498ZM7.725 6.84123C7.84188 6.41811 7.7425 5.94186 7.4175 5.61623C7.0925 5.29061 6.61563 5.19186 6.1925 5.30873L5.25 4.36623C5.63623 4.12872 6.08034 4.00201 6.53375 3.99998C7.9125 3.99998 9.03375 5.12123 9.03375 6.49998C9.0319 6.9533 8.90494 7.39732 8.66687 7.78311L7.725 6.84123Z"
              fill="#808080"
            />
          </svg>
        )}
      </div>
    );
  }
  