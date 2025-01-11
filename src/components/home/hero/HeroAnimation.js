import React, { useEffect } from "react";
var col = require("nice-color-palettes");

export default function HeroAnimation() {
  useEffect(() => {
    setInterval(() => {
      let elem =
        document.getElementsByClassName("color-block")[
          Math.floor(Math.random() * (200 - 0 + 1) + 0)
        ];
      if (elem) {
        elem.style.scale = "1.2";
        elem.style.zIndex = "10";
        setTimeout(() => {
          elem.style.scale = "1";
          elem.style.zIndex = "1";
        }, 1000);
      }
    }, 1000);
  }, []);
  return (
    <div className="flex flex-wrap scale-150 items-center justify-center">
      {col.map((colors, i) => (
        <div key={i} className="flex items-center">
          {colors.map((color, i) => (
            <div key={i} className="group h-9 sm:h-12">
              <button
                style={{ background: color }}
                className="w-9 sm:w-12 h-9 sm:h-12 group-hover:rounded-[1.5rem] group-hover:scale-75 color-block transition-all ease-in-out relative duration-300 focus:rounded-none focus:animate-spin outline-none focus:z-20"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}



// import React, { useEffect } from "react";
// var col = require("nice-color-palettes");

// export default function HeroAnimation() {
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Randomly select an element with the class 'color-block'
//       const colorBlocks = document.getElementsByClassName("color-block");
      
//       if (colorBlocks.length > 0) {
//         // Select a random block
//         let elem = colorBlocks[Math.floor(Math.random() * colorBlocks.length)];

//         // Ensure elem is valid before attempting to modify style
//         if (elem) {
//           elem.style.scale = "1.2";
//           elem.style.zIndex = "10";

//           // Reset the style after 1 second
//           setTimeout(() => {
//             elem.style.scale = "1";
//             elem.style.zIndex = "1";
//           }, 1000);
//         }
//       }
//     }, 1000);

//     // Cleanup the interval when the component is unmounted
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="flex flex-wrap scale-150 items-center justify-center">
//       {col.map((colors, i) => (
//         <div key={i} className="flex items-center">
//           {colors.map((color, i) => (
//             <div key={i} className="group h-9 sm:h-12">
//               <button
//                 style={{ background: color }}
//                 className="w-9 sm:w-12 h-9 sm:h-12 group-hover:rounded-[1.5rem] group-hover:scale-75 color-block transition-all ease-in-out relative duration-300 focus:rounded-none focus:animate-spin outline-none focus:z-20"
//               />
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }
