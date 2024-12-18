<template>
  <div class="text-center">
  <h1 class="text-center display-2">Think, Ink, Thrive.</h1>
  <span class="fst-italic small">Write journals, reflect on your journey, and preserve your story for the future.</span>
  </div>
  <svg
    width="608"
    height="574"
    viewBox="0 0 398 364"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="199"
      cy="100"
      r="98"
      fill="#343434"
      stroke="#E5E5E5"
      stroke-width="4"
    />
    <circle cx="234" cy="85" r="15" fill="#E5E5E5" />
    <circle cx="164" cy="85" r="15" fill="#E5E5E5" />
    <path
      d="M233.955 111.21C269.307 64.7956 316.23 28.5097 370 5.96655V201.96C313.96 219.475 265.658 255.802 233.281 304.83L199 356.741L164.719 304.83C132.342 255.802 84.0397 219.475 28 201.96V5.96655C81.7698 28.5097 128.693 64.7956 164.045 111.21L193.764 150.227C196.398 153.686 201.602 153.686 204.236 150.227L233.955 111.21Z"
      fill="url(#paint0_linear_54_126)"
      stroke="white"
      stroke-width="8"
    />
    <g filter="url(#filter0_d_54_126)">
      <ellipse cx="24" cy="110" rx="20" ry="25" fill="#333333" />
      <path
        d="M42 110C42 123.142 33.5477 133 24 133C14.4523 133 6 123.142 6 110C6 96.8579 14.4523 87 24 87C33.5477 87 42 96.8579 42 110Z"
        stroke="#E5E5E5"
        stroke-width="4"
      />
    </g>
    <g filter="url(#filter1_d_54_126)">
      <ellipse cx="374" cy="110" rx="20" ry="25" fill="#333333" />
      <path
        d="M392 110C392 123.142 383.548 133 374 133C364.452 133 356 123.142 356 110C356 96.8579 364.452 87 374 87C383.548 87 392 96.8579 392 110Z"
        stroke="#E5E5E5"
        stroke-width="4"
      />
    </g>
    <path
      d="M144 50.5C141.982 58.2498 157.504 43.8561 171.5 47.5C185.496 51.144 186.735 57.6917 188.752 49.9419C190.77 42.1921 198.496 38.644 184.5 35C170.504 31.356 146.018 42.7503 144 50.5Z"
      fill="#515151"
    />
    <path
      d="M258.572 50.3913C260.59 58.1411 245.068 43.7474 231.072 47.3913C217.077 51.0353 215.837 57.5829 213.82 49.8332C211.802 42.0834 204.077 38.5352 218.072 34.8913C232.068 31.2473 256.554 42.6415 258.572 50.3913Z"
      fill="#515151"
    />
    <circle cx="169" cy="90" r="5" fill="#343434" />
    <circle cx="234" cy="90" r="5" fill="#343434" />
    <circle cx="171" cy="92" r="1" fill="white" />
    <circle cx="236" cy="92" r="1" fill="white" />
    <defs>
      <filter
        id="filter0_d_54_126"
        x="0"
        y="85"
        width="48"
        height="58"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_54_126"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_54_126"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_d_54_126"
        x="350"
        y="85"
        width="48"
        height="58"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_54_126"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_54_126"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_54_126"
        x1="199"
        y1="-30.9999"
        x2="199"
        y2="442.999"
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset="1" stop-color="#333333" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  name: "home-page",
};
</script>

<style scoped>
svg {
  animation: upDown 2s ease-in-out infinite; /* Animation applied to the container */
}

@keyframes upDown {
  0%, 100% {
    transform: translateY(0); /* Start and end at the original position */
  }
  50% {
    transform: translateY(-30px); /* Move up by 20px at the middle of the animation */
  }
}
</style>
