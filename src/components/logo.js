import { useTheme } from '@mui/material/styles';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (

    <>
    
    
    
    <svg
      fill="none"
      height="100%"
      viewBox="0 0 24 24"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      >
      <path
        opacity={0.16}
        d="M7.242 11.083c.449-1.674 2.17-3.394 3.843-3.843l10.434-2.796c1.673-.448 2.666.545 2.218 2.218L20.94 17.096c-.449 1.674-2.17 3.394-3.843 3.843L6.664 23.735c-1.673.448-2.666-.545-2.218-2.218l2.796-10.434Z"
        fill={fillColor}
      />
      <path
        d="M3.06 6.9c.448-1.674 2.168-3.394 3.842-3.843L17.336.261c1.673-.448 2.667.545 2.218 2.218l-2.796 10.434c-.449 1.674-2.169 3.394-3.843 3.843L2.481 19.552C.808 20-.185 19.007.263 17.334L3.06 6.9Z"
        fill={fillColor}
        />
    </svg>







{/* 

<svg width="100%" height="100%" viewBox="0 0 150 130" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_10_2)">
<path d="M93.1555 23.5774C93.1442 22.9855 92.9 22.4215 92.4751 22.0058C92.0503 21.5901 91.4785 21.3556 90.8818 21.3525H78.6346C78.0379 21.3556 77.4661 21.5901 77.0413 22.0058C76.6164 22.4215 76.3722 22.9855 76.3609 23.5774V43.8175H55.6043C55.0076 43.8206 54.4357 44.055 54.0109 44.4707C53.586 44.8864 53.3419 45.4504 53.3305 46.0423V57.9701C53.3418 58.5625 53.5858 59.1272 54.0105 59.5439C54.4352 59.9606 55.007 60.1964 55.6043 60.2011H76.3609V80.4226C76.3722 81.0151 76.6162 81.5798 77.0408 81.9964C77.4655 82.4131 78.0374 82.649 78.6346 82.6537H90.8818C91.4805 82.6537 92.0551 82.4194 92.4808 82.0017C92.9065 81.584 93.149 81.0166 93.1555 80.4226V60.2011H113.912C114.509 60.1964 115.081 59.9606 115.506 59.5439C115.931 59.1272 116.175 58.5625 116.186 57.9701V46.03C116.19 45.7383 116.134 45.4489 116.02 45.1798C115.907 44.9108 115.738 44.6679 115.526 44.4664C115.317 44.2521 115.066 44.0828 114.788 43.9691C114.511 43.8553 114.212 43.7995 113.912 43.8051H93.1555V23.5774Z" fill={fillColor}/>
<path d="M65.3098 89.8968C81.5438 93.5246 108.673 96.1759 123.586 78.7725C144.542 54.3485 119.064 28.2187 119.064 28.2187C127.679 43.7248 125.711 62.7103 116.441 74.3043C108.268 84.5448 83.3939 91.6335 65.3098 89.8968Z" fill={fillColor}/>
<path d="M65.3098 89.8968C60.7909 88.9186 56.3401 87.6532 51.9849 86.1084C55.5233 88.1849 60.1393 89.4024 65.3098 89.8968Z" fill={fillColor}/>
<path d="M149.663 0C155.44 13.2582 156.836 27.9912 153.65 42.0852C150.464 56.1791 142.86 68.9097 131.929 78.4503C120.997 87.991 107.301 93.8512 92.8044 95.1904C78.3078 96.5295 63.7562 93.2788 51.2374 85.9044C51.2374 85.9044 114.155 127.818 154.391 78.859C157.291 75.3544 159.81 71.5551 161.904 67.5246C159.995 70.9565 157.86 74.2598 155.513 77.4129C175.167 45.0967 159.798 14.5543 149.663 0Z" fill={fillColor}/>
<path d="M99.6902 14.1032C83.4562 10.4816 56.3269 7.83029 41.4135 25.2275C20.4576 49.6577 45.9423 75.7875 45.9423 75.7875C37.327 60.2814 39.2893 41.2959 48.5587 29.7019C56.7318 19.4552 81.6061 12.3666 99.6902 14.1032Z" fill={fillColor}/>
<path d="M99.6902 14.1032C104.2 15.0848 108.642 16.3502 112.99 17.8916C109.483 15.8213 104.861 14.6038 99.6902 14.1032Z" fill={fillColor}/>
<path d="M15.337 104.006C9.56412 90.7482 8.17164 76.017 11.3593 61.9254C14.5469 47.8338 22.1508 35.1056 33.0806 25.5662C44.0103 16.0269 57.7044 10.1665 72.1988 8.82554C86.6932 7.48455 101.243 10.7319 113.763 18.1017C113.763 18.1017 50.8449 -23.806 10.6088 25.1533C7.70638 28.6577 5.18603 32.457 3.08983 36.4878C4.99887 33.0559 7.13397 29.7526 9.48126 26.5995C-10.1665 58.9094 5.20785 89.4519 15.337 104.006Z" fill={fillColor}/>
</g>
<defs>
<clipPath id="clip0_10_2">
<rect width="165" height="104" fill="white"/>
</clipPath>
</defs>
</svg> */}












     {/*  <svg 
      id="Object" 
      width="100%"
      height="100%"
      
      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264.87 168.28"><defs><style>.cls-1 </style></defs><title>Logo</title><path class="cls-1" d="M563.09,511.25a3.67,3.67,0,0,0-3.65-3.6H539.78a3.67,3.67,0,0,0-3.65,3.6V544H502.81a3.67,3.67,0,0,0-3.65,3.6V566.9a3.68,3.68,0,0,0,3.65,3.61h33.32v32.72a3.68,3.68,0,0,0,3.65,3.61h19.66a3.65,3.65,0,0,0,3.65-3.61V570.51h33.32a3.68,3.68,0,0,0,3.65-3.61V547.58a3.43,3.43,0,0,0-1.06-2.53,3.51,3.51,0,0,0-2.59-1.07H563.09Z" transform="translate(-413.55 -473.1)" fill={fillColor}/><path class="cls-1" d="M518.39,618.56c26.06,5.87,69.61,10.16,93.55-18,33.64-39.52-7.26-81.8-7.26-81.8,13.83,25.09,10.67,55.81-4.21,74.57C587.35,609.9,547.42,621.37,518.39,618.56Z" transform="translate(-413.55 -473.1)" fill={fillColor}/><path class="cls-1" d="M518.39,618.56A173.23,173.23,0,0,1,497,612.43C502.68,615.79,510.09,617.76,518.39,618.56Z" transform="translate(-413.55 -473.1)" fill={fillColor}/><path class="cls-1" d="M653.8,473.1a110.61,110.61,0,0,1-158,139s101,67.82,165.59-11.4a104,104,0,0,0,12.06-18.34,144.25,144.25,0,0,1-10.26,16C694.74,546.07,670.07,496.65,653.8,473.1Z" transform="translate(-413.55 -473.1)" fill={fillColor}/><path class="cls-1" d="M573.58,495.92c-26.06-5.86-69.61-10.15-93.55,18-33.64,39.53,7.27,81.81,7.27,81.81-13.83-25.09-10.68-55.81,4.2-74.57C504.62,504.58,544.55,493.11,573.58,495.92Z" transform="translate(-413.55 -473.1)" fill={fillColor}/><path class="cls-1" d="M573.58,495.92a174.71,174.71,0,0,1,21.35,6.13C589.3,498.7,581.88,496.73,573.58,495.92Z" transform="translate(-413.55 -473.1)" fill={fillColor}/><path class="cls-1" d="M438.17,641.39a110.62,110.62,0,0,1,158-139s-101-67.81-165.59,11.41a104,104,0,0,0-12.07,18.34,144.25,144.25,0,0,1,10.26-16C397.23,568.42,421.91,617.84,438.17,641.39Z" transform="translate(-413.55 -473.1)" fill={fillColor}/></svg> */}


        </>


  );
};
