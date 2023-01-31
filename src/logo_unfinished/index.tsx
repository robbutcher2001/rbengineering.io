import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Lax from "lax.js";
import Icon from "./icon";

const Monogram = styled.div`
  display: inline-block;
  font-size: 190px;
  line-height: 170px;
  margin-left: 40px;
  text-transform: uppercase;
`;

const LetterSpacing = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 44px;
  text-transform: uppercase;
`;

const Engineering: FC<{ className: string }> = ({ className }) => (
  <LetterSpacing className={className}>
    {"engineering".split("").map((letter, index) => (
      <span key={index}>{letter}</span>
    ))}
  </LetterSpacing>
);

export default () => {
  const [lax, setLax] = useState<typeof Lax>();

  useEffect(() => {
    Lax.init();
    Lax.addDriver("scrollY", () => window.scrollY);
    setLax(Lax);
  }, []);

  useEffect(() => {
    lax?.addElements(".monogram", {
      scrollY: {
        translateY: [
          ["elCenterY", "elCenterY+100", "elOutY"],
          [0, 0, "-screenHeight"],
          {
            easing: "easeInOutQuart",
          },
        ],
        translateX: [
          ["elCenterY", "elOutY"],
          [0, "screenWidth"],
          {
            easing: "easeInOutQuart",
          },
        ],
        "text-shadow": [
          ["elCenterY", "elOutY-200"],
          [0, 50],
          {
            easing: "easeInOutQuint",
            cssFn: (val: string) =>
              `${val}px ${val}px ${val}px rgba(0, 0, 0, 0.5)`,
          },
        ],
      },
    });

    lax?.addElements(".engineering", {
      scrollY: {
        scale: [
          ["elCenterY", "elOutY"],
          [1, 6],
        ],
        translateY: [
          ["elCenterY", "elOutY"],
          [0, "-screenHeight/2"],
          {
            easing: "easeInOutQuart",
          },
        ],
        opacity: [
          ["elCenterY", "elOutY-200"],
          [1, 0],
          {
            easing: "easeInOutCubic",
          },
        ],
        "text-shadow": [
          ["elCenterY", "elCenterY+10", "elOutY"],
          [0, 10, 20],
          {
            easing: "easeInOutQuint",
            cssFn: (val: string) => `0px ${val}px ${val}px rgba(0, 0, 0, 0.75)`,
          },
        ],
      },
    });
  }, [lax]);

  return (
    <div>
      <Icon lax={lax} />
      <Monogram className="monogram">RB</Monogram>
      <Engineering className="engineering" />
    </div>
  );
};
