import React from "react";

export const MenuIcon = ({ styles }) => {
  return (
    <>
      <svg
        className={styles}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <line x1="8" y1="6" x2="21" y2="6" />{" "}
        <line x1="8" y1="12" x2="21" y2="12" />{" "}
        <line x1="8" y1="18" x2="21" y2="18" />{" "}
        <line x1="3" y1="6" x2="3.01" y2="6" />{" "}
        <line x1="3" y1="12" x2="3.01" y2="12" />{" "}
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    </>
  );
};

export const TileIcon = ({ styles }) => {
  return (
    <>
      <svg
        className={styles}
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <rect x="4" y="4" width="6" height="5" rx="2" />{" "}
        <rect x="4" y="13" width="6" height="7" rx="2" />{" "}
        <rect x="14" y="4" width="6" height="7" rx="2" />{" "}
        <rect x="14" y="15" width="6" height="5" rx="2" />
      </svg>
    </>
  );
};

export const ThreeDots = ({ styles }) => {
  return (
    <>
      <svg
        className={styles}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <circle cx="12" cy="12" r="1" /> <circle cx="12" cy="5" r="1" />{" "}
        <circle cx="12" cy="19" r="1" />
      </svg>
    </>
  );
};
export const PencilPage = ({ styles }) => {
  return (
    <>
      <svg
        className={styles}
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <path d="M9 7 h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />{" "}
        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />{" "}
        <line x1="16" y1="5" x2="19" y2="8" />
      </svg>
    </>
  );
};

export const DownloadIcon = ({ styles }) => {
  return (
    <>
      <svg
        className={styles}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />{" "}
        <polyline points="17 8 12 3 7 8" />{" "}
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    </>
  );
};

export const LockIcon = ({ styles }) => {
  return (
    <>
      <svg
        className={styles}
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <rect x="5" y="11" width="14" height="10" rx="2" />{" "}
        <circle cx="12" cy="16" r="1" /> <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
      </svg>
    </>
  );
};

export const SearchIcon = ({ styles }) => {
  return (
    <>
      <svg
        className={styles}
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <circle cx="10" cy="10" r="7" />{" "}
        <line x1="21" y1="21" x2="15" y2="15" />
      </svg>
    </>
  );
};

// ********** BULLET ICONS ***************************
export const Circle = ({ styles }) => {
  return (
    <>
      <svg
        className={styles}
        xmlns="http://www.w3.org/2000/svg"
        data-name="Page 1"
        viewBox="0 0 15.36 15.36"
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-01"}</title>
        <path
          d="M7.68 15.36a7.68 7.68 0 1 1 7.68-7.68 7.688 7.688 0 0 1-7.68 7.68Zm0-14.88a7.2 7.2 0 1 0 7.2 7.2 7.208 7.208 0 0 0-7.2-7.2Z"
          data-name="Page 1"
          style={{
            clipPath: "url(#a)",
          }}
        />
      </svg>
    </>
  );
};

export const CircleFull = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-03"}</title>
        <g
          data-name="Page 3"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M7.68 15.36a7.68 7.68 0 1 1 7.679-7.68 7.688 7.688 0 0 1-7.68 7.68Zm0-14.88a7.2 7.2 0 1 0 7.2 7.2 7.208 7.208 0 0 0-7.2-7.2Z" />
          <path d="M.313 6.88a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L6.472.143a.24.24 0 0 1 .339.34L.483 6.81a.238.238 0 0 1-.17.07ZM.272 8.603a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L8.193.102a.24.24 0 1 1 .34.34L.44 8.532a.238.238 0 0 1-.17.071ZM.54 10.016a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L9.607.37a.24.24 0 0 1 .339.34L.71 9.945a.238.238 0 0 1-.17.07ZM1.013 11.224a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l9.972-9.97a.24.24 0 1 1 .338.339l-9.97 9.97a.238.238 0 0 1-.17.071ZM1.646 12.273a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L11.863 1.476a.24.24 0 1 1 .339.34L1.816 12.203a.238.238 0 0 1-.17.07ZM2.42 13.181a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L12.77 2.249a.24.24 0 1 1 .34.34L2.588 13.111a.238.238 0 0 1-.17.07ZM3.327 13.954a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L13.545 3.157a.24.24 0 1 1 .339.34L3.497 13.883a.238.238 0 0 1-.17.07ZM4.375 14.587a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l9.972-9.971a.24.24 0 1 1 .339.34l-9.971 9.971a.238.238 0 0 1-.17.07ZM5.584 15.06a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l9.236-9.236a.24.24 0 0 1 .339.34L5.753 14.99a.238.238 0 0 1-.17.07ZM6.997 15.329a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l8.091-8.092a.24.24 0 0 1 .34.34l-8.091 8.091a.24.24 0 0 1-.17.07ZM8.718 15.288a.24.24 0 0 1-.17-.41l6.33-6.329a.24.24 0 0 1 .338.34l-6.328 6.328a.238.238 0 0 1-.17.07Z" />
        </g>
      </svg>
    </>
  );
};

export const CirclePlus = ({ styles }) => {
  return (
    <>
      <svg
        className={styles}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        {" "}
        <path stroke="none" d="M0 0h24v24H0z" />{" "}
        <circle cx="12" cy="12" r="9" /> <line x1="9" y1="12" x2="15" y2="12" />{" "}
        <line x1="12" y1="9" x2="12" y2="15" />
      </svg>
    </>
  );
};

export const CircleHalf = ({ styles }) => {
  return (
    <>
      <svg
        className={styles}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-02"}</title>
        <g
          data-name="Page 2"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M7.68 15.36a7.68 7.68 0 1 1 7.679-7.68 7.688 7.688 0 0 1-7.68 7.68Zm0-14.88a7.2 7.2 0 1 0 7.2 7.2 7.208 7.208 0 0 0-7.2-7.2Z" />
          <path d="M7.68 15.36a.24.24 0 0 1-.24-.24V.24A.24.24 0 0 1 7.68 0a7.68 7.68 0 0 1 0 15.36ZM7.92.485v14.39a7.2 7.2 0 0 0 0-14.39Z" />
          <path d="M7.68 2.876a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L9.606.371a.24.24 0 0 1 .339.34L7.849 2.805a.238.238 0 0 1-.17.07ZM7.68 4.558a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L10.814.843a.24.24 0 0 1 .34.34L7.85 4.488a.24.24 0 0 1-.17.07ZM7.68 6.239a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l4.353-4.353a.24.24 0 0 1 .339.34L7.849 6.168a.238.238 0 0 1-.17.07ZM7.68 7.92a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l5.26-5.26a.24.24 0 1 1 .34.34L7.85 7.85a.24.24 0 0 1-.17.07ZM7.68 9.601a.24.24 0 0 1-.17-.41l6.034-6.033a.24.24 0 1 1 .339.34L7.849 9.53a.238.238 0 0 1-.17.07ZM7.68 11.283a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l6.666-6.667a.24.24 0 1 1 .34.34l-6.667 6.666a.238.238 0 0 1-.17.07ZM7.68 12.964a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l7.14-7.14a.24.24 0 0 1 .339.34l-7.14 7.14a.238.238 0 0 1-.17.07ZM7.68 14.645a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l7.409-7.408a.24.24 0 0 1 .338.34L7.85 14.574a.238.238 0 0 1-.17.07ZM8.718 15.288a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l6.33-6.329a.24.24 0 1 1 .338.34l-6.328 6.328a.238.238 0 0 1-.17.07Z" />
        </g>
      </svg>
    </>
  );
};

export const CircleArrowLeft = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-04"}</title>
        <g
          data-name="Page 4"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M7.68 15.36a7.68 7.68 0 1 1 7.68-7.68 7.688 7.688 0 0 1-7.68 7.68Zm0-14.88a7.2 7.2 0 1 0 7.2 7.2 7.208 7.208 0 0 0-7.2-7.2Z" />
          <path d="M11.28 7.921h-7.2a.24.24 0 0 1 0-.48h7.2a.24.24 0 0 1 0 .48Z" />
          <path d="m4.25 7.851-.34-.34 2.64-2.64a.24.24 0 0 1 .34.34l-2.64 2.64Z" />
          <path d="M6.72 10.561a.24.24 0 0 1-.17-.07L3.91 7.85l.34-.34 2.64 2.64a.24.24 0 0 1 0 .339.237.237 0 0 1-.17.071Z" />
        </g>
      </svg>
    </>
  );
};

export const CircleArrowRight = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-05"}</title>
        <g
          data-name="Page 5"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M7.68 15.36a7.68 7.68 0 1 1 7.68-7.68 7.688 7.688 0 0 1-7.68 7.68Zm0-14.88a7.2 7.2 0 1 0 7.2 7.2 7.208 7.208 0 0 0-7.2-7.2Z" />
          <path d="M11.28 7.921h-7.2a.24.24 0 0 1 0-.48h7.2a.24.24 0 0 1 0 .48Z" />
          <path d="m11.11 7.851-2.64-2.64a.24.24 0 0 1 .34-.34l2.64 2.64Z" />
          <path d="M8.64 10.561a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l2.64-2.64.34.34-2.64 2.64a.238.238 0 0 1-.17.07Z" />
        </g>
      </svg>
    </>
  );
};

export const CircleX = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-06"}</title>
        <g
          data-name="Page 6"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M7.68 15.36a7.68 7.68 0 1 1 7.68-7.68 7.688 7.688 0 0 1-7.68 7.68Zm0-14.88a7.2 7.2 0 1 0 7.2 7.2 7.208 7.208 0 0 0-7.2-7.2Z" />
          <path d="M10.15 10.488 4.871 5.21a.24.24 0 1 1 .34-.34l5.276 5.277Z" />
          <path d="M5.042 10.558a.24.24 0 0 1-.17-.41L10.15 4.87l.34.34-5.278 5.277a.238.238 0 0 1-.17.07Z" />
        </g>
      </svg>
    </>
  );
};

export const Square = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-07"}</title>
        <path
          d="M14.4 14.64H.96a.24.24 0 0 1-.24-.24V.96A.24.24 0 0 1 .96.72H14.4a.24.24 0 0 1 .239.24V14.4a.24.24 0 0 1-.24.24Zm-13.2-.48h12.96V1.2H1.2Z"
          data-name="Page 7"
          style={{
            clipPath: "url(#a)",
          }}
        />
      </svg>
    </>
  );
};

export const SquareHalf = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-08"}</title>
        <g
          data-name="Page 8"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M14.4 14.64H7.68a.24.24 0 0 1-.24-.24V.96a.24.24 0 0 1 .24-.24h6.72a.24.24 0 0 1 .24.24V14.4a.24.24 0 0 1-.24.24Zm-6.48-.48h6.24V1.2H7.92Z" />
          <path d="M14.4 14.64H.96a.24.24 0 0 1-.24-.24V.96A.24.24 0 0 1 .96.72H14.4a.24.24 0 0 1 .24.24V14.4a.24.24 0 0 1-.24.24Zm-13.2-.48h12.96V1.2H1.2Z" />
          <path d="M7.68 2.876a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L9.185.79a.24.24 0 0 1 .34.34L7.85 2.806a.24.24 0 0 1-.17.07ZM7.68 4.558a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L10.867.79a.24.24 0 0 1 .34.34L7.85 4.488a.24.24 0 0 1-.17.07ZM7.68 6.239a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L12.549.79a.24.24 0 0 1 .34.34L7.85 6.168a.24.24 0 0 1-.17.07ZM7.68 7.92a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L14.23.79a.24.24 0 0 1 .34.34L7.85 7.85a.24.24 0 0 1-.17.07ZM7.68 9.601a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l6.72-6.719a.24.24 0 0 1 .339.34L7.849 9.53a.238.238 0 0 1-.169.07ZM7.68 11.283a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l6.72-6.72a.24.24 0 1 1 .339.34l-6.72 6.72a.238.238 0 0 1-.169.07ZM7.68 12.964a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l6.72-6.72a.24.24 0 0 1 .339.34l-6.72 6.72a.238.238 0 0 1-.169.07ZM7.685 14.64a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l6.715-6.715a.24.24 0 0 1 .34.34L7.853 14.57a.238.238 0 0 1-.169.07ZM9.366 14.64a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l5.034-5.033a.24.24 0 0 1 .339.34L9.536 14.57a.238.238 0 0 1-.17.07ZM11.047 14.64a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l3.352-3.353a.24.24 0 0 1 .34.34l-3.352 3.353a.24.24 0 0 1-.17.07ZM12.729 14.64a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l1.67-1.671a.24.24 0 0 1 .34.34l-1.67 1.67a.24.24 0 0 1-.17.071Z" />
        </g>
      </svg>
    </>
  );
};

export const SquareFull = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-09"}</title>
        <g
          data-name="Page 9"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M14.4 14.64H.96a.24.24 0 0 1-.24-.24V.96A.24.24 0 0 1 .96.72H14.4a.24.24 0 0 1 .24.24V14.4a.24.24 0 0 1-.24.24Zm-13.2-.48h12.96V1.2H1.2Z" />
          <path d="M.96 7.914a.238.238 0 0 1-.169-.07.24.24 0 0 1 0-.34L7.504.79a.24.24 0 0 1 .34.34L1.13 7.844a.238.238 0 0 1-.17.07ZM.96 9.596a.238.238 0 0 1-.169-.07.24.24 0 0 1 0-.34L9.186.79a.24.24 0 0 1 .339.34L1.13 9.526a.238.238 0 0 1-.17.07ZM.96 11.277a.238.238 0 0 1-.169-.07.24.24 0 0 1 0-.34L10.867.79a.24.24 0 0 1 .339.34L1.13 11.206a.238.238 0 0 1-.17.07ZM.96 12.958a.238.238 0 0 1-.169-.07.24.24 0 0 1 0-.34L12.548.79a.24.24 0 0 1 .34.34L1.13 12.888a.238.238 0 0 1-.17.07ZM.96 14.64a.238.238 0 0 1-.169-.071.24.24 0 0 1 0-.34L14.229.79a.24.24 0 0 1 .34.34L1.128 14.57a.238.238 0 0 1-.169.07ZM2.641 14.64a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L14.23 2.472a.24.24 0 0 1 .339.34L2.81 14.57a.238.238 0 0 1-.17.07ZM4.322 14.64a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34L14.23 4.153a.24.24 0 1 1 .339.34L4.492 14.57a.238.238 0 0 1-.17.07ZM6.003 14.64a.24.24 0 0 1-.169-.41l8.396-8.396a.24.24 0 0 1 .339.34L6.173 14.57a.238.238 0 0 1-.17.07ZM7.685 14.64a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l6.715-6.715a.24.24 0 0 1 .339.34L7.854 14.57a.238.238 0 0 1-.169.07ZM9.366 14.64a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l5.034-5.033a.24.24 0 0 1 .339.34L9.536 14.57a.238.238 0 0 1-.17.07ZM11.047 14.64a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l3.352-3.353a.24.24 0 0 1 .34.34l-3.352 3.353a.24.24 0 0 1-.17.07ZM12.729 14.64a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l1.671-1.671a.24.24 0 0 1 .339.34l-1.671 1.67a.238.238 0 0 1-.17.071ZM.96 2.649a.238.238 0 0 1-.169-.07.24.24 0 0 1 0-.34L2.239.79a.24.24 0 0 1 .34.34L1.128 2.58a.238.238 0 0 1-.169.07ZM.96 4.33a.238.238 0 0 1-.169-.07.24.24 0 0 1 0-.34L3.92.79a.24.24 0 0 1 .34.34L1.13 4.26a.24.24 0 0 1-.17.07ZM.96 6.011a.238.238 0 0 1-.169-.07.24.24 0 0 1 0-.34l4.81-4.81a.24.24 0 0 1 .34.34L1.13 5.94a.238.238 0 0 1-.17.07Z" />
        </g>
      </svg>
    </>
  );
};

export const SquareLeftArrow = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-10"}</title>
        <g
          data-name="Page 10"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M14.4 14.64H.96a.24.24 0 0 1-.24-.24V.96A.24.24 0 0 1 .96.72H14.4a.24.24 0 0 1 .24.24V14.4a.24.24 0 0 1-.24.24Zm-13.2-.48h12.96V1.2H1.2Z" />
          <path d="M11.28 7.921h-7.2a.24.24 0 0 1 0-.48h7.2a.24.24 0 0 1 0 .48Z" />
          <path d="m4.25 7.851-.34-.34 2.64-2.64a.24.24 0 0 1 .34.34l-2.64 2.64Z" />
          <path d="M6.72 10.561a.24.24 0 0 1-.17-.07L3.91 7.85l.34-.34 2.64 2.64a.24.24 0 0 1 0 .339.237.237 0 0 1-.17.071Z" />
        </g>
      </svg>
    </>
  );
};

export const SquareRightArrow = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-11"}</title>
        <g
          data-name="Page 11"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M14.4 14.64H.96a.24.24 0 0 1-.24-.24V.96A.24.24 0 0 1 .96.72H14.4a.24.24 0 0 1 .24.24V14.4a.24.24 0 0 1-.24.24Zm-13.2-.48h12.96V1.2H1.2Z" />
          <path d="M11.28 7.921h-7.2a.24.24 0 0 1 0-.48h7.2a.24.24 0 0 1 0 .48Z" />
          <path d="m11.11 7.851-2.64-2.64a.24.24 0 0 1 .34-.34l2.64 2.64Z" />
          <path d="M8.64 10.561a.238.238 0 0 1-.17-.07.24.24 0 0 1 0-.34l2.64-2.64.34.34-2.64 2.64a.238.238 0 0 1-.17.07Z" />
        </g>
      </svg>
    </>
  );
};

export const SquareX = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-12"}</title>
        <g
          data-name="Page 12"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M14.4 14.64H.96a.24.24 0 0 1-.24-.24V.96A.24.24 0 0 1 .96.72H14.4a.24.24 0 0 1 .24.24V14.4a.24.24 0 0 1-.24.24Zm-13.2-.48h12.96V1.2H1.2Z" />
          <path d="M10.15 10.488 4.871 5.21a.24.24 0 1 1 .34-.34l5.276 5.277Z" />
          <path d="M5.042 10.558a.24.24 0 0 1-.17-.41L10.15 4.87l.339.34-5.277 5.277a.238.238 0 0 1-.17.07Z" />
        </g>
      </svg>
    </>
  );
};

export const Diamond = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-13"}</title>
        <path
          d="M7.68 15.36a.24.24 0 0 1-.17-.07L.07 7.85a.24.24 0 0 1 0-.34L7.51.07a.248.248 0 0 1 .34 0l7.44 7.44a.24.24 0 0 1 0 .34l-7.44 7.44a.24.24 0 0 1-.17.07ZM.58 7.68l7.1 7.1 7.101-7.1L7.679.58Z"
          data-name="Page 13"
          style={{
            clipPath: "url(#a)",
          }}
        />
      </svg>
    </>
  );
};

export const DiamondHalf = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-14"}</title>
        <g
          data-name="Page 14"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M7.68 15.36a.24.24 0 0 1-.17-.07L.07 7.85a.24.24 0 0 1 0-.34L7.51.07a.24.24 0 0 1 .34 0l7.44 7.44a.24.24 0 0 1 0 .34l-7.44 7.44a.24.24 0 0 1-.17.07ZM.58 7.68l7.1 7.1 7.1-7.1-7.1-7.1Z" />
          <path d="M7.68 15.36a.24.24 0 0 1-.17-.07L.07 7.85a.24.24 0 0 1 .17-.41h14.88a.24.24 0 0 1 .17.41l-7.44 7.44a.24.24 0 0 1-.17.07ZM.82 7.92l6.86 6.86 6.86-6.86Z" />
          <path d="M1.743 7.92a.24.24 0 0 1-.17-.41L8.262.822a.24.24 0 0 1 .34.34L1.913 7.85a.24.24 0 0 1-.17.07ZM3.228 7.92a.24.24 0 0 1-.17-.41l5.945-5.946a.24.24 0 1 1 .34.34L3.398 7.85a.24.24 0 0 1-.17.07ZM4.711 7.92a.24.24 0 0 1-.17-.41l5.204-5.204a.24.24 0 0 1 .34.34L4.881 7.85a.24.24 0 0 1-.17.07ZM6.196 7.92a.24.24 0 0 1-.17-.41l4.462-4.462a.24.24 0 1 1 .34.34L6.365 7.85a.24.24 0 0 1-.17.07ZM7.68 7.92a.24.24 0 0 1-.17-.41l3.72-3.72a.24.24 0 0 1 .34.34L7.85 7.85a.24.24 0 0 1-.17.07ZM9.164 7.92a.24.24 0 0 1-.17-.41l2.978-2.977a.24.24 0 1 1 .34.34L9.334 7.85a.24.24 0 0 1-.17.07ZM10.648 7.92a.24.24 0 0 1-.17-.41l2.236-2.235a.24.24 0 0 1 .34.34L10.818 7.85a.24.24 0 0 1-.17.07ZM12.132 7.92a.24.24 0 0 1-.17-.41l1.494-1.493a.24.24 0 1 1 .34.34L12.302 7.85a.24.24 0 0 1-.17.07ZM13.617 7.92a.24.24 0 0 1-.17-.41l.752-.75a.24.24 0 0 1 .34.339l-.753.751a.24.24 0 0 1-.17.07Z" />
        </g>
      </svg>
    </>
  );
};

export const DiamondFull = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-15"}</title>
        <g
          data-name="Page 15"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M7.68 15.36a.24.24 0 0 1-.17-.07L.07 7.85a.24.24 0 0 1 0-.34L7.51.07a.24.24 0 0 1 .34 0l7.44 7.44a.24.24 0 0 1 0 .34l-7.44 7.44a.24.24 0 0 1-.17.07ZM.579 7.68l7.1 7.1 7.101-7.1-7.1-7.1Z" />
          <path d="M.992 8.672a.24.24 0 0 1-.17-.41l7.44-7.44a.24.24 0 0 1 .34.34l-7.44 7.44a.24.24 0 0 1-.17.07ZM1.733 9.414a.24.24 0 0 1-.17-.41l7.44-7.44a.24.24 0 1 1 .34.34l-7.44 7.44a.24.24 0 0 1-.17.07ZM2.475 10.157a.24.24 0 0 1-.17-.41l7.441-7.44a.24.24 0 0 1 .34.339l-7.44 7.44a.24.24 0 0 1-.17.07ZM3.218 10.899a.24.24 0 0 1-.17-.41l7.44-7.44a.24.24 0 0 1 .34.34l-7.44 7.44a.24.24 0 0 1-.17.07ZM3.96 11.641a.24.24 0 0 1-.17-.41l7.44-7.44a.24.24 0 0 1 .34.34l-7.44 7.44a.24.24 0 0 1-.17.07ZM4.702 12.382a.24.24 0 0 1-.17-.41l7.44-7.44a.24.24 0 1 1 .34.34l-7.44 7.44a.24.24 0 0 1-.17.07ZM5.444 13.124a.24.24 0 0 1-.17-.41l7.44-7.44a.24.24 0 0 1 .34.34l-7.44 7.44a.24.24 0 0 1-.17.07ZM6.186 13.867a.24.24 0 0 1-.17-.41l7.44-7.44a.24.24 0 1 1 .34.34l-7.44 7.44a.24.24 0 0 1-.17.07ZM6.929 14.609a.24.24 0 0 1-.17-.41l7.44-7.44a.24.24 0 1 1 .339.34l-7.44 7.44a.24.24 0 0 1-.17.07Z" />
        </g>
      </svg>
    </>
  );
};

export const DiamondLeft = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-16"}</title>
        <g
          data-name="Page 16"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M11.28 7.921h-7.2a.24.24 0 1 1 0-.48h7.2a.24.24 0 1 1 0 .48Z" />
          <path d="m4.25 7.851-.34-.34 2.641-2.64a.24.24 0 1 1 .338.34l-2.64 2.64Z" />
          <path d="M6.72 10.561a.237.237 0 0 1-.169-.07L3.91 7.85l.34-.34 2.64 2.64a.24.24 0 0 1-.17.41Z" />
          <path d="M7.68 15.36a.24.24 0 0 1-.17-.07L.07 7.85a.24.24 0 0 1 0-.34L7.51.07a.24.24 0 0 1 .34 0l7.44 7.44a.24.24 0 0 1 0 .34l-7.44 7.44a.24.24 0 0 1-.17.07ZM.58 7.68l7.1 7.1 7.1-7.1-7.1-7.1Z" />
        </g>
      </svg>
    </>
  );
};

export const DiamondRight = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-17"}</title>
        <g
          data-name="Page 17"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M11.28 7.921h-7.2a.24.24 0 1 1 0-.48h7.2a.24.24 0 1 1 0 .48Z" />
          <path d="M11.28 7.921a.24.24 0 0 1-.17-.07l-2.64-2.64a.24.24 0 1 1 .34-.34l2.64 2.64a.24.24 0 0 1-.17.41Z" />
          <path d="M8.64 10.561a.24.24 0 0 1-.17-.41l2.64-2.64.34.34-2.64 2.64a.24.24 0 0 1-.17.07Z" />
          <path d="M7.68 15.36a.24.24 0 0 1-.17-.07L.07 7.85a.24.24 0 0 1 0-.34L7.51.07a.24.24 0 0 1 .34 0l7.44 7.44a.24.24 0 0 1 0 .34l-7.44 7.44a.24.24 0 0 1-.17.07ZM.58 7.68l7.1 7.1 7.1-7.1-7.1-7.1Z" />
        </g>
      </svg>
    </>
  );
};

export const DiamondX = ({ styles }) => {
  return (
    <>
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-18"}</title>
        <g
          data-name="Page 18"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path d="M10.149 10.488 4.872 5.21a.24.24 0 1 1 .34-.34l5.277 5.277Z" />
          <path d="M5.042 10.558a.24.24 0 0 1-.17-.41l5.277-5.276.34.34-5.278 5.276a.24.24 0 0 1-.17.07Z" />
          <path d="M7.68 15.36a.24.24 0 0 1-.17-.07L.07 7.85a.24.24 0 0 1 0-.34L7.51.07a.24.24 0 0 1 .34 0l7.44 7.44a.24.24 0 0 1 0 .34l-7.44 7.44a.24.24 0 0 1-.17.07ZM.58 7.68l7.1 7.1 7.1-7.1-7.1-7.1Z" />
        </g>
      </svg>
    </>
  );
};

export const Minus = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-19"}</title>
        <g
          data-name="Page 19"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path
            d="M2.88 6.242h9.6a.962.962 0 0 1 .96.96v.956a.962.962 0 0 1-.96.96h-9.6a.962.962 0 0 1-.96-.96v-.956a.962.962 0 0 1 .96-.96"
            style={{
              fillRule: "evenodd",
            }}
          />
        </g>
      </svg>
    </>
  );
};

export const DollarBill = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-20"}</title>
        <path
          d="M8.4 11.517h.682a1.561 1.561 0 0 0 1.56-1.56l.003-.002a1.566 1.566 0 0 0-1.56-1.557H8.4Zm-1.44-7.68h-.682a1.559 1.559 0 0 0-1.105 2.661 1.572 1.572 0 0 0 1.105.462l.682.001Zm3.877-1.44a.72.72 0 1 1 0 1.44H8.4V6.96l.684-.002a3.001 3.001 0 0 1 2.996 2.998l.002.002a3.006 3.006 0 0 1-3 3H8.4v.48a.72.72 0 0 1-1.44 0v-.48H4.523a.72.72 0 1 1 0-1.44H6.96V8.395l-.682-.001a2.998 2.998 0 0 1 0-5.997h.682v-.48a.72.72 0 0 1 1.44 0v.48Z"
          data-name="Page 20"
          style={{
            clipPath: "url(#a)",
          }}
        />
      </svg>
    </>
  );
};

export const Astrick = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-21"}</title>
        <path
          d="M13.199 6.96a.72.72 0 1 1 0 1.44h-3.78l2.673 2.673a.72.72 0 0 1-1.019 1.018L8.4 9.418v3.78a.72.72 0 0 1-1.44 0v-3.78l-2.673 2.674a.72.72 0 0 1-1.019-1.019L5.942 8.4H2.16a.72.72 0 0 1 0-1.44h3.78L3.269 4.287a.72.72 0 0 1 1.019-1.019L6.96 5.942V2.16a.72.72 0 1 1 1.44 0v3.78l2.673-2.673a.72.72 0 0 1 1.018 1.019L9.418 6.96Z"
          data-name="Page 21"
          style={{
            clipPath: "url(#a)",
          }}
        />
      </svg>
    </>
  );
};

export const Exclamation1 = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-22"}</title>
        <g
          data-name="Page 22"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path
            d="M6.48 2.397a1.157 1.157 0 0 1 1.2-1.2 1.216 1.216 0 0 1 1.2 1.2L8.4 9.835a.72.72 0 0 1-1.44 0Z"
            style={{
              fill: "#e69138",
            }}
          />
          <path
            d="M7.36 11.998H8a.64.64 0 0 1 .64.64v.64a.64.64 0 0 1-.64.64h-.64a.64.64 0 0 1-.64-.64v-.64a.64.64 0 0 1 .64-.64"
            style={{
              fill: "#e69138",
              fillRule: "evenodd",
            }}
          />
        </g>
      </svg>
    </>
  );
};

export const Exclamation2 = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-23"}</title>
        <g
          data-name="Page 23"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path
            d="M4.081 2.397a1.157 1.157 0 0 1 1.2-1.2 1.216 1.216 0 0 1 1.2 1.2L6 9.835a.72.72 0 0 1-1.44 0Z"
            style={{
              fill: "#a61c01",
            }}
          />
          <path
            d="M4.96 11.998h.641a.641.641 0 0 1 .64.64v.64a.641.641 0 0 1-.64.64h-.64a.64.64 0 0 1-.64-.64v-.64a.64.64 0 0 1 .64-.64"
            style={{
              fill: "#a61c01",
              fillRule: "evenodd",
            }}
          />
          <path
            d="M8.88 2.397a1.157 1.157 0 0 1 1.2-1.2 1.216 1.216 0 0 1 1.199 1.2l-.48 7.438a.72.72 0 0 1-1.44 0Z"
            style={{
              fill: "#a61c01",
            }}
          />
          <path
            d="M9.759 11.998h.64a.641.641 0 0 1 .64.64v.64a.641.641 0 0 1-.64.64h-.64a.641.641 0 0 1-.64-.64v-.64a.641.641 0 0 1 .64-.64"
            style={{
              fill: "#a61c01",
              fillRule: "evenodd",
            }}
          />
        </g>
      </svg>
    </>
  );
};

export const Exclamation3 = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-24"}</title>
        <g
          data-name="Page 24"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path
            d="M1.68 2.397a1.157 1.157 0 0 1 1.2-1.2 1.216 1.216 0 0 1 1.2 1.2L3.6 9.835a.72.72 0 0 1-1.44 0Z"
            style={{
              fill: "red",
            }}
          />
          <path
            d="M2.56 11.998h.64a.64.64 0 0 1 .64.64v.64a.64.64 0 0 1-.64.64h-.64a.64.64 0 0 1-.64-.64v-.64a.64.64 0 0 1 .64-.64"
            style={{
              fill: "red",
              fillRule: "evenodd",
            }}
          />
          <path
            d="M6.48 2.397a1.157 1.157 0 0 1 1.2-1.2 1.216 1.216 0 0 1 1.2 1.2L8.4 9.835a.72.72 0 0 1-1.44 0Z"
            style={{
              fill: "red",
            }}
          />
          <path
            d="M7.36 11.998H8a.64.64 0 0 1 .64.64v.64a.64.64 0 0 1-.64.64h-.64a.64.64 0 0 1-.64-.64v-.64a.64.64 0 0 1 .64-.64"
            style={{
              fill: "red",
              fillRule: "evenodd",
            }}
          />
          <path
            d="M11.279 2.397a1.157 1.157 0 0 1 1.2-1.2 1.216 1.216 0 0 1 1.199 1.2l-.48 7.438a.72.72 0 1 1-1.44 0Z"
            style={{
              fill: "red",
            }}
          />
          <path
            d="M12.158 11.998h.64a.64.64 0 0 1 .64.64v.64a.64.64 0 0 1-.64.64h-.64a.64.64 0 0 1-.64-.64v-.64a.64.64 0 0 1 .64-.64"
            style={{
              fill: "red",
              fillRule: "evenodd",
            }}
          />
        </g>
      </svg>
    </>
  );
};

export const QuestionMark = ({ styles }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15.36 15.36"
        className={styles}
      >
        <defs>
          <clipPath id="a">
            <path
              d="M0 0h15.36v15.36H0z"
              style={{
                fill: "none",
              }}
            />
          </clipPath>
        </defs>
        <title>{"aaronpansringar-25"}</title>
        <g
          data-name="Page 25"
          style={{
            clipPath: "url(#a)",
          }}
        >
          <path
            d="M7.68 12.238a.96.96 0 1 1-.96.96.96.96 0 0 1 .96-.96"
            style={{
              fillRule: "evenodd",
            }}
          />
          <path d="M5.52 5.038a.72.72 0 0 1-1.44 0 3.6 3.6 0 1 1 4.799 3.394.724.724 0 0 0-.353.257.746.746 0 0 0-.126.422v1.204a.72.72 0 0 1-1.44 0V9.111a2.151 2.151 0 0 1 .392-1.247 2.176 2.176 0 0 1 1.049-.788A2.161 2.161 0 1 0 5.52 5.038" />
        </g>
      </svg>
    </>
  );
};
